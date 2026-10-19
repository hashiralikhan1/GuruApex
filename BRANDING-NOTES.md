# GuruApex branding update

This project has been rebranded for a digital agency focused on web development, SEO, branding, and digital marketing.

## Main brand colors
- Purple: `#7C3AED`
- Deep purple: `#5B21B6`
- Lime accent: `#C4FF35`
- Light page background: `#F8F7FC`
- Dark page background: `#171421`

## Main files changed
- `src/assets/logo.svg` — header/footer wordmark, using the supplied GuruApex icon
- `src/assets/logo-icon.svg` — supplied icon used in the hero
- `public/guruapex-mark.png` — transparent icon extracted from the supplied logo image
- `src/plugins/@mui/theme/palette-base.ts` — primary and secondary colors
- `src/plugins/@mui/theme/palette-light.ts` — light theme
- `src/plugins/@mui/theme/palette-dark.ts` — dark theme
- `src/configs/app.config.ts` — site name and description
- `src/app/site.webmanifest` and `src/app/*icon*` — browser/app icons

## Before launch
The original source still contains placeholder contact details and a contact form that should be connected to a real form service or backend before being used for live enquiries. Replace the example email, phone, address, and any remaining template copy with verified business details. Review dependencies with `npm audit` and test with `npm run dev` and `npm run build`.
