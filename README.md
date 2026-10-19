# 🚀 Velox Digital Agency

A modern, fully responsive digital agency website built with cutting-edge technologies. Perfect for agencies, startups, and creative studios looking to establish a professional online presence.

![Velox Digital Agency](./screenshots/app-screenshot.png)

## ✨ Features

- **Modern Tech Stack** - Built with Next.js 15, React 19, and TypeScript
- **Beautiful UI** - Material UI 7 with custom theming and components
- **Smooth Animations** - Framer Motion powered transitions and effects
- **Dark/Light Mode** - Full theme support with seamless switching
- **Responsive Design** - Mobile-first approach, looks great on all devices
- **SEO Optimized** - Server-side rendering and semantic HTML
- **Type Safe** - Full TypeScript implementation

## 📄 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section with animated decorations, services overview, about section, and CTA |
| **Services** | Comprehensive list of digital services with detailed feature cards |
| **Portfolio** | Project showcase with category filtering and hover effects |
| **About** | Company story, team members, values, and timeline |
| **Career** | Job listings with expandable requirements and benefits |
| **Contact** | Contact form with validation and contact information cards |

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Library:** [Material UI 7](https://mui.com/)
- **Styling:** [Emotion](https://emotion.sh/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Package Manager:** [Bun](https://bun.sh/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/velox-digital-agency.git
   cd velox-digital-agency
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

3. Run the development server:
   ```bash
   bun dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── _components/        # Page-specific components
│   │   ├── about/         # About page components
│   │   ├── career/        # Career page components
│   │   ├── contact/       # Contact page components
│   │   ├── home-hero/     # Home hero components
│   │   ├── portfolio/     # Portfolio page components
│   │   └── services/      # Services page components
│   ├── about/             # About page route
│   ├── career/            # Career page route
│   ├── contact/           # Contact page route
│   ├── portfolio/         # Portfolio page route
│   └── services/          # Services page route
├── assets/                # SVG icons and logos
├── components/            # Shared/reusable components
│   ├── appbar/           # Navigation components
│   ├── core/             # Core UI components
│   └── footer/           # Footer components
├── configs/              # App configuration
├── constants/            # Static data and constants
├── contexts/             # React contexts
├── hooks/                # Custom React hooks
├── plugins/              # MUI theme configuration
└── types/                # TypeScript type definitions
```

## 🎨 Customization

### Theme Colors

Edit the palette files in `src/plugins/@mui/theme/`:
- `palette-light.ts` - Light mode colors
- `palette-dark.ts` - Dark mode colors

### Branding

- Logo: `src/assets/logo.svg` and `src/assets/logo-icon.svg`
- Company name: Update in `src/configs/app.config.ts`

### Content

- Services: `src/constants/service.ts`
- Navigation: `src/constants/menus.tsx`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server |
| `bun build` | Build for production |
| `bun start` | Start production server |
| `bun lint` | Run ESLint |

## 🌐 Deployment

This project is ready for deployment on [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any platform that supports Next.js.

```bash
bun build
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by Velox Digital Agency
</p>
