'use client'

import { ChangeEvent, FormEvent, useMemo, useState } from 'react'
import styles from './enroll.module.css'
import CourseHeader from '../enroll-courses/course-header'

type Student = { fullName: string; email: string; whatsapp: string }
const COURSE_PRICE = 2000
const PAYMENT_ACCOUNT = { bank: 'Bank transfer', title: 'Hashir Ali Khan', number: 'Request verified account details' }
const questions = [
  ['How will I receive the course?', 'After your payment is reviewed and confirmed, the course access instructions will be sent to the contact details you provide. Access instructions will be sent after your payment is reviewed and confirmed.'],
  ['Is this a 2026 course?', 'Check the course page for the current curriculum and batch information before paying.'],
  ['Is this a recorded course?', 'The training is intended to be self-paced. Confirm the exact lesson format and access terms with GuruApex before enrollment.'],
  ['How will you update the course?', 'Any update schedule should be confirmed by the course team and published here before launch.'],
  ['Who will answer my questions?', 'Contact the GuruApex team through the official contact channel listed on the website.'],
  ['Refund policy', 'Please confirm the current refund terms with GuruApex before enrolling.'],
]

export default function EnrollFlow() {
  const [step, setStep] = useState(1)
  const [student, setStudent] = useState<Student>({ fullName: '', email: '', whatsapp: '' })
  const [errors, setErrors] = useState<Partial<Student>>({})
  const [proof, setProof] = useState<File | null>(null)
  const [proofError, setProofError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [enrollmentId, setEnrollmentId] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [copied, setCopied] = useState('')

  const validateStudent = () => {
    const next: Partial<Student> = {}
    if (student.fullName.trim().length < 3) next.fullName = 'Please enter your full name (at least 3 characters).'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email.trim())) next.email = 'Enter a valid email address.'
    const digits = student.whatsapp.replace(/\D/g, '')
    if (digits.length < 10 || digits.length > 15) next.whatsapp = 'Enter a valid WhatsApp number with 10–15 digits.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const updateStudent = (field: keyof Student, value: string) => {
    setStudent(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const handleProof = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null
    setProofError('')
    setProof(null)
    if (!file) return
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
      setProofError('Upload an image file in PNG, JPG, or WEBP format.')
      event.target.value = ''
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      setProofError('The image must be 5 MB or smaller.')
      event.target.value = ''
      return
    }
    setProof(file)
  }

  const nextStep = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (validateStudent()) setStep(2)
  }

  const copyText = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(label)
      window.setTimeout(() => setCopied(''), 1800)
    } catch {
      setCopied('Copy not supported — please select the text manually.')
    }
  }

  const canSubmit = useMemo(() => Boolean(proof && !proofError), [proof, proofError])
  const submitProof = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitError('')
    if (!proof) {
      setProofError('Please choose your payment screenshot before continuing.')
      return
    }
    if (!validateStudent()) {
      setStep(1)
      return
    }

    setSubmitting(true)
    try {
      const payload = new FormData()
      payload.append('fullName', student.fullName.trim())
      payload.append('email', student.email.trim())
      payload.append('whatsapp', student.whatsapp.trim())
      payload.append('receipt', proof)

      const response = await fetch('/api/enroll', { method: 'POST', body: payload })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'We could not submit your enrollment. Please try again.')
      }
      setEnrollmentId(String(result.enrollmentId || ''))
      setEmailSent(Boolean(result.emailSent))
      setSubmitted(true)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Submission failed. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const whatsappMessage = `Hi GuruApex Team, I am ${student.fullName}. I have enrolled in the AI Video Creator course. My enrollment ID is ${enrollmentId}. I have submitted my payment receipt. Please verify and confirm my payment. Thank you!`
  const whatsappUrl = `https://wa.me/923030313185?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <main className={styles.page}>
      <CourseHeader />
      <div className={styles.layout}>
        <section className={styles.formCard} aria-label="Course enrollment form">
          <div className={styles.cardTop}><span className={styles.windowDots}><i/><i/><i/></span><span>Enrollment · Step {submitted ? 3 : step} of 3</span><span className={styles.live}><i/> ENROLL</span></div>
          {!submitted ? <>
            <div className={styles.progress} aria-label={`Step ${step} of 3`}>
              {[['1','Your details'],['2','Send payment'],['3','Upload proof']].map(([n,label],i) => <div key={n} className={`${styles.progressItem} ${step >= i+1 ? styles.progressActive : ''}`}><span>{step > i+1 ? '✓' : n}</span><b>{label}</b>{i<2 && <i className={styles.progressLine}/>}</div>)}
            </div>

            {step === 1 && <form onSubmit={nextStep} noValidate>
              <span className={styles.stepBadge}>♙ STEP 1 OF 3</span>
              <h1>Reserve Your Seat.</h1><p className={styles.subtitle}>Enroll in AI Video Creator training for <strong>PKR {COURSE_PRICE.toLocaleString('en-PK')}</strong>.</p>
              <label className={styles.field}>Full name<input autoComplete="name" value={student.fullName} onChange={e => updateStudent('fullName',e.target.value)} placeholder="e.g. Hashir Ali Khan" aria-invalid={Boolean(errors.fullName)} />{errors.fullName && <small className={styles.error}>{errors.fullName}</small>}</label>
              <label className={styles.field}>Email address<input type="email" autoComplete="email" value={student.email} onChange={e => updateStudent('email',e.target.value)} placeholder="you@example.com" aria-invalid={Boolean(errors.email)} />{errors.email && <small className={styles.error}>{errors.email}</small>}</label>
              <label className={styles.field}>WhatsApp number<input type="tel" autoComplete="tel" value={student.whatsapp} onChange={e => updateStudent('whatsapp',e.target.value)} placeholder="03XXXXXXXXX" aria-invalid={Boolean(errors.whatsapp)} />{errors.whatsapp && <small className={styles.error}>{errors.whatsapp}</small>}<small>Include your country code if you are outside Pakistan.</small></label>
              <button className={styles.primaryButton} type="submit">Continue to Payment <span>→</span></button>
              <p className={styles.privacy}>Your details are used to process your course enrollment.</p>
            </form>}

            {step === 2 && <div className={styles.stepContent}>
              <span className={styles.stepBadge}>▣ STEP 2 OF 3</span><h1>Send Your Payment.</h1><p className={styles.subtitle}>Send exactly <strong>PKR {COURSE_PRICE.toLocaleString('en-PK')}</strong> using the payment method below.</p>
              
              <div className={styles.bankCard}><span className={styles.bankPill}>{PAYMENT_ACCOUNT.bank}</span>
                <div className={styles.bankRow}><small>ACCOUNT TITLE</small><div><strong>{PAYMENT_ACCOUNT.title}</strong><button type="button" onClick={() => copyText(PAYMENT_ACCOUNT.title,'title')}>{copied==='title'?'Copied ✓':'▢ Copy'}</button></div></div>
                <div className={styles.bankRow}><small>ACCOUNT NUMBER</small><div><strong>{PAYMENT_ACCOUNT.number}</strong></div></div>
                <div className={styles.bankRow}><small>AMOUNT TO SEND</small><div><strong>PKR {COURSE_PRICE.toLocaleString('en-PK')}</strong><button type="button" onClick={() => copyText(String(COURSE_PRICE),'amount')}>{copied==='amount'?'Copied ✓':'▢ Copy'}</button></div></div>
              </div>
              <p className={styles.methodNote}><strong>Method:</strong> Bank transfer. Confirm the recipient details with GuruApex before sending payment.</p>
              <button className={styles.primaryButton} type="button" onClick={() => setStep(3)}>I’ve Sent the Payment — Continue <span>→</span></button>
              <button className={styles.backStep} type="button" onClick={() => setStep(1)}>← Back</button>
              <p className={styles.privacy}>♙ Never share passwords, PINs, or OTPs in payment proof.</p>
            </div>}

            {step === 3 && <form onSubmit={submitProof}>
              <span className={styles.stepBadge}>⇧ STEP 3 OF 3</span><h1>Upload Payment Proof.</h1><p className={styles.subtitle}>Choose a clear screenshot of your PKR {COURSE_PRICE.toLocaleString('en-PK')} payment. Image only, maximum 5 MB.</p>
              <label className={styles.uploadBox}><span className={styles.uploadIcon}>▧</span><strong>{proof ? proof.name : 'Click to choose an image'}</strong><small>PNG, JPG or WEBP · up to 5 MB</small><input type="file" accept="image/png,image/jpeg,image/webp" onChange={handleProof}/></label>
              {proofError && <p className={styles.error}>{proofError}</p>}
              {proof && <p className={styles.fileInfo}>Selected: {(proof.size/1024/1024).toFixed(2)} MB</p>}
              <button className={styles.primaryButton} type="submit" disabled={!canSubmit || submitting}>{submitting ? 'Submitting securely…' : 'Submit Payment Proof'} <span>{submitting ? '…' : '⇧'}</span></button>
              {submitError && <p className={styles.error} role="alert">{submitError}</p>}
              <button className={styles.backStep} type="button" onClick={() => setStep(2)}>← Back</button>
              <p className={styles.privacy}>Please ensure your screenshot clearly shows the completed transfer. Your submission is not complete until the secure enrollment service is connected.</p>
            </form>}
          </> : <div className={styles.success} role="status"><span className={styles.successIcon}>✓</span><h1>Thank You!</h1><p>Your enrollment request has been submitted successfully. Our team will contact you soon after reviewing your payment receipt.</p><div><strong>{student.fullName}</strong><span>{student.email}</span><span>{student.whatsapp}</span><span>Course: AI Video Creator</span><span>Course fee: PKR {COURSE_PRICE.toLocaleString('en-PK')}</span>{enrollmentId && <span>Enrollment ID: <strong>{enrollmentId}</strong></span>}<span>Payment status: Pending verification</span></div>{!emailSent && <p className={styles.privacy}>Your enrollment was saved, but the admin email notification could not be confirmed. The team can still review your submission in Supabase.</p>}<a className={styles.primaryButton} href={whatsappUrl} target="_blank" rel="noopener noreferrer">Contact us on WhatsApp <span>↗</span></a><button className={styles.backStep} onClick={() => { setStep(1); setSubmitted(false); setProof(null); setEnrollmentId(''); setEmailSent(false); setStudent({fullName:'',email:'',whatsapp:''}); setErrors({}) }}>Submit another enrollment</button></div>}
        </section>

        <section className={styles.faqSection}><h2>Frequently Asked Questions</h2>{questions.map(([q,a]) => <details className={styles.faq} key={q}><summary>{q}<span>⌄</span></summary><p>{a}</p></details>)}</section>
      </div>

      
      
    </main>
  )
}
