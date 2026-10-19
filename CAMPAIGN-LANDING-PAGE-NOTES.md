# GuruApex update notes

## Changes in this update
- Preserved the existing homepage section order and the existing site layout.
- Updated the homepage services section to the requested eight services:
  1. Social Media Marketing
  2. AI Video Production
  3. Creative & Branding
  4. Paid Advertising
  5. Web Design & Development
  6. Shopify Store Development
  7. SEO Services
  8. AI Automation
- Replaced the generic service descriptions with clearer, search-oriented copy.
- Added slower, staggered reveal animations to the homepage service cards using the project's existing Framer Motion dependency.
- Added `/enroll-courses`, a dedicated AI Video Creator training landing page based on the supplied hero markup and reference design, adapted to the project's Next.js + CSS Modules setup (the supplied HTML uses Tailwind utility classes, which this project does not currently configure).
- The `/enroll-courses` route hides the global navigation and footer. It has no clickable logo or site navigation; its links stay within the landing page.
- Added an "Enroll Courses" link to the main site's navigation.
- Updated the header logo asset and favicon assets using the supplied GuruApex logo mark.

## Important before publishing
- The enrollment page embeds the YouTube video URL supplied in the user's HTML.
- Confirm that the video is the correct course video and that course pricing, guarantees, access terms, and enrollment destination are accurate before adding payment CTAs. This page avoids promising guaranteed income.
- No enrollment form/payment backend was provided, so the page currently directs visitors to review the overview and course details rather than pretending a form submission or purchase has happened.
- Run `npm install`, `npm run build`, and `npm audit` locally before deployment. This environment did not run a production build, so compilation and runtime behavior still need local verification.


## Latest course/enrollment updates (2026-10-19)
- Added the course-fee panel and continuously moving highlight strip to `/enroll-courses`.
- Added a horizontally swipeable learner-feedback carousel layout. The inspected HTML referenced platform-specific `/__l5e/assets-v1/...` review image paths, which are not local project assets; replace the example cards with the approved review screenshots copied into `public/reviews/` before launch.
- Added a four-item animated metric counter section on the homepage; the count animation starts when the section enters the viewport. Confirm these business metrics are accurate before publishing.
- Slowed global directional scroll reveals and applied them across page sections.
- Hid the site-wide navigation/footer on both `/enroll-courses` and `/enroll`; the enrollment form no longer renders its own header/footer.
- Payment account number is intentionally shown as “Request verified account details” rather than inventing a real bank account number. Replace the payment configuration with verified business payment details and connect a secure server endpoint before accepting submissions.
