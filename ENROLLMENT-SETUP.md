# GuruApex enrollment backend setup

## What this update does
- Sends the enrollment form to `POST /api/enroll`.
- Validates student details and accepts PNG/JPEG/WEBP receipt images up to 5 MB.
- Uploads receipts to the private Supabase `payment-receipts` bucket.
- Inserts enrollment records into `public.enrollments` using a server-only Supabase service-role key.
- Sends an admin email through Resend to `hashiraliphw@gmail.com`.
- Shows a real success screen only after the enrollment row is saved; includes the enrollment ID and WhatsApp contact link.
- Fixes footer link paths, uses the logo text's current color for dark mode, improves mobile hero layout, and auto-hides the course toast after 12 seconds.

## Required Vercel environment variables
Add the values in `.env.example` in Vercel > Project > Settings > Environment Variables, for Production (and Preview if you want to test previews). Redeploy after adding them.

`SUPABASE_SERVICE_ROLE_KEY` is secret and must never use the `NEXT_PUBLIC_` prefix. Get the server-side service-role/secret key from the Supabase project's API Keys page. Do not paste it into chat or commit it to GitHub.

## Email setup
Create a Resend account and API key at https://resend.com/api-keys, then set `RESEND_API_KEY`.
For initial testing, `onboarding@resend.dev` is restricted to sending to the Resend account owner's email. Since the notification recipient is `hashiraliphw@gmail.com`, that email must be the Resend account owner for this testing sender to work. For production, verify a domain you control in Resend and set `ENROLLMENT_FROM_EMAIL` to an address on that verified domain.
Email notification delivery depends on a valid Resend API key and permitted sender. Enrollment records are still saved if Resend is unavailable; the success screen warns when the notification email could not be confirmed. Check Vercel Function Logs and Resend Logs during testing.

## Supabase requirements
- `public.enrollments` must contain: `id` (uuid primary key), `full_name`, `email`, `whatsapp`, `course`, `receipt_path`, `status`, `admin_notes`, `created_at`, `verified_at`.
- RLS should remain enabled. The route uses the server-only service role key; do not expose that key to the browser.
- The `payment-receipts` Storage bucket must be private, with a 5 MB limit. The server uploads files using the service-role key and only emails a signed link that expires after 24 hours.

## Before going live
The enrollment page currently has a placeholder payment account number (`Request verified account details`). Replace it with the real verified payment account details before accepting payments. Do not ask students to pay to unverified account details.
