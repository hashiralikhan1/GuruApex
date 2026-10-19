# GuruApex fixes included in this update

## UI and behavior
- Homepage components are imported directly so the hero and stats do not wait for dynamic-loading placeholders.
- The agency navigation is imported directly rather than loaded client-only with a skeleton, reducing delayed navigation appearance.
- Home statistics animate when the section enters the viewport, with a visible initial state and a fallback for browsers without IntersectionObserver.
- Section motion uses directional slides without opacity-zero hiding; nested sections/cards are not all assigned competing reveal transforms.
- `/enroll-courses` has a dedicated sticky GuruApex course header and no agency footer.
- `/enroll` uses the same course header and does not show the agency header/footer.
- The bottom-left course-update toast is available site-wide, appears after five seconds, and rotates factual course information every 50 seconds. It does not fabricate student names or purchases.
- The course price ticker loops continuously; the review-card track is an auto-scrolling loop and pauses on hover.
- The SVG optimizer's `removeDimensions` plugin is configured separately from `preset-default`.

## Security dependency
- `next` and `eslint-config-next` were bumped from the versions in the uploaded project to `15.3.8`, the patched 15.3.x release listed in the official Next.js December 11, 2025 security advisory.
- Run `npm install` after extracting this ZIP so your local dependency tree matches `package.json`.

## Review screenshots
The ZIP did not contain original learner review screenshots. The carousel therefore has clearly labelled image slots rather than invented testimonials. Add approved real screenshots as:
- `public/reviews/review-1.png`
- `public/reviews/review-2.png`
- `public/reviews/review-3.png`

Then replace each slot's placeholder markup in `src/app/enroll-courses/page.tsx` with the corresponding `<img>` or `Image` element. Do not publish fabricated student reviews or enrollment activity.

## Run locally
```bash
npm install
npm run dev
```

Before deployment, run `npm run build` and `npm audit`. A production build could not be confirmed in this environment because the ZIP did not include `node_modules`, and the project dependencies were not installed here.
