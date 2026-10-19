import { NextResponse } from 'next/server'
import { randomUUID } from 'node:crypto'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MAX_FILE_SIZE = 5 * 1024 * 1024
const ALLOWED_TYPES = new Set(['image/png', 'image/jpeg', 'image/webp'])

function jsonError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status })
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char] as string)
}

export async function POST(request: Request) {
  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, '')
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const notifyEmail = process.env.ENROLLMENT_NOTIFY_EMAIL || 'hashiraliphw@gmail.com'
  const resendApiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.ENROLLMENT_FROM_EMAIL || 'GuruApex Enrollment <onboarding@resend.dev>'

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonError('Enrollment service is not configured yet. Please try again later or contact GuruApex.', 503)
  }

  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return jsonError('Could not read the form submission.')
  }

  const fullName = String(form.get('fullName') || '').trim()
  const email = String(form.get('email') || '').trim().toLowerCase()
  const whatsapp = String(form.get('whatsapp') || '').trim()
  const course = 'AI Video Creator'
  const receipt = form.get('receipt')

  if (fullName.length < 3 || fullName.length > 120) return jsonError('Please enter your full name.')
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return jsonError('Please enter a valid email address.')
  const phoneDigits = whatsapp.replace(/\D/g, '')
  if (phoneDigits.length < 10 || phoneDigits.length > 15) return jsonError('Please enter a valid WhatsApp number.')
  if (!(receipt instanceof File)) return jsonError('Please upload your payment receipt image.')
  if (!ALLOWED_TYPES.has(receipt.type)) return jsonError('Receipt must be a PNG, JPG, or WEBP image.')
  if (receipt.size <= 0 || receipt.size > MAX_FILE_SIZE) return jsonError('Receipt image must be smaller than 5 MB.')

  const ext = receipt.type === 'image/png' ? 'png' : receipt.type === 'image/webp' ? 'webp' : 'jpg'
  const enrollmentId = randomUUID()
  const receiptPath = `${enrollmentId}/${randomUUID()}.${ext}`
  const serviceHeaders = {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
  }

  try {
    const uploadResponse = await fetch(`${supabaseUrl}/storage/v1/object/payment-receipts/${receiptPath}`, {
      method: 'POST',
      headers: {
        ...serviceHeaders,
        'Content-Type': receipt.type,
        'x-upsert': 'false',
      },
      body: await receipt.arrayBuffer(),
      cache: 'no-store',
    })
    if (!uploadResponse.ok) {
      console.error('Supabase receipt upload failed:', uploadResponse.status, await uploadResponse.text())
      return jsonError('We could not securely upload your receipt. Please try again.', 502)
    }

    const row = {
      id: enrollmentId,
      full_name: fullName,
      email,
      whatsapp,
      course,
      receipt_path: receiptPath,
      status: 'pending',
    }
    const insertResponse = await fetch(`${supabaseUrl}/rest/v1/enrollments`, {
      method: 'POST',
      headers: {
        ...serviceHeaders,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify(row),
      cache: 'no-store',
    })

    if (!insertResponse.ok) {
      console.error('Supabase enrollment insert failed:', insertResponse.status, await insertResponse.text())
      // Avoid leaving an orphaned receipt if the enrollment row could not be created.
      await fetch(`${supabaseUrl}/storage/v1/object/payment-receipts/${receiptPath}`, {
        method: 'DELETE', headers: serviceHeaders, cache: 'no-store',
      }).catch(() => undefined)
      return jsonError('Your enrollment could not be saved. Please try again or contact GuruApex.', 502)
    }

    let receiptLink = ''
    const signedResponse = await fetch(`${supabaseUrl}/storage/v1/object/sign/payment-receipts/${receiptPath}`, {
      method: 'POST',
      headers: { ...serviceHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ expiresIn: 60 * 60 * 24 }),
      cache: 'no-store',
    })
    if (signedResponse.ok) {
      const signed = await signedResponse.json() as { signedURL?: string }
      if (signed.signedURL) receiptLink = signed.signedURL.startsWith('http') ? signed.signedURL : `${supabaseUrl}/storage/v1${signed.signedURL}`
    }

    let emailSent = false
    if (resendApiKey) {
      const safeName = escapeHtml(fullName)
      const safeEmail = escapeHtml(email)
      const safeWhatsApp = escapeHtml(whatsapp)
      const safeId = escapeHtml(enrollmentId)
      const receiptHtml = receiptLink
        ? `<p><a href="${escapeHtml(receiptLink)}">View private receipt (link expires in 24 hours)</a></p>`
        : '<p>Receipt uploaded to the private Supabase Storage bucket.</p>'
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendApiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: fromEmail,
          to: [notifyEmail],
          subject: `New GuruApex AI Video Creator enrollment — ${fullName}`,
          html: `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#172033"><h2>New course enrollment received</h2><p>A student submitted the GuruApex AI Video Creator enrollment form.</p><table style="border-collapse:collapse;width:100%"><tr><td style="padding:9px;border:1px solid #ddd"><b>Enrollment ID</b></td><td style="padding:9px;border:1px solid #ddd">${safeId}</td></tr><tr><td style="padding:9px;border:1px solid #ddd"><b>Student name</b></td><td style="padding:9px;border:1px solid #ddd">${safeName}</td></tr><tr><td style="padding:9px;border:1px solid #ddd"><b>Email</b></td><td style="padding:9px;border:1px solid #ddd">${safeEmail}</td></tr><tr><td style="padding:9px;border:1px solid #ddd"><b>WhatsApp</b></td><td style="padding:9px;border:1px solid #ddd">${safeWhatsApp}</td></tr><tr><td style="padding:9px;border:1px solid #ddd"><b>Course</b></td><td style="padding:9px;border:1px solid #ddd">${course}</td></tr><tr><td style="padding:9px;border:1px solid #ddd"><b>Payment status</b></td><td style="padding:9px;border:1px solid #ddd">Pending verification</td></tr><tr><td style="padding:9px;border:1px solid #ddd"><b>Submitted at</b></td><td style="padding:9px;border:1px solid #ddd">${new Date().toISOString()}</td></tr></table>${receiptHtml}<p>Review the record in Supabase and update its status after checking the payment.</p></div>`,
        }),
      })
      if (emailResponse.ok) emailSent = true
      else console.error('Resend email failed:', emailResponse.status, await emailResponse.text())
    } else {
      console.warn('RESEND_API_KEY is missing; enrollment was saved but notification email was not sent.')
    }

    return NextResponse.json({
      success: true,
      enrollmentId,
      emailSent,
      message: 'Your enrollment was submitted successfully.',
    })
  } catch (error) {
    console.error('Enrollment API unexpected error:', error)
    return jsonError('A server error occurred while submitting your enrollment. Please try again.', 500)
  }
}
