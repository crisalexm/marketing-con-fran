# Fran Landing Page — React App

A modern marketing landing page for "Fran | Marketing Digital" built with React and Vite.

## Quick Start

### Prerequisites

- **Node.js** 16+ (download from [nodejs.org](https://nodejs.org))
- **npm** 7+ (comes with Node.js)

### Installation & Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

→ Opens at **http://localhost:5173** with hot reload enabled

### Build for Production

```bash
npm run build
```

Creates optimized files in `dist/` folder ready for deployment.

### Preview Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally to test before deploying.

---

## What You Get

- ✅ Modern React 18 + Vite
- ✅ Light/Dark theme toggle with localStorage persistence
- ✅ Scroll-triggered animations (reveal effect)
- ✅ Fully responsive design
- ✅ Zero external dependencies (just React)
- ✅ Fast dev server with HMR (Hot Module Replacement)

---

## Project Structure

```
src/
├── App.jsx                 # Root component (theme management)
├── index.css               # All global styles + theme tokens
├── main.jsx                # Entry point
├── hooks/
│   └── useReveal.js        # Custom hook for scroll animations
└── components/
    ├── PhoenixIcon.jsx     # Reusable SVG icon
    ├── Nav.jsx             # Sticky navbar with theme toggle
    ├── Hero.jsx            # Hero section
    ├── About.jsx           # About Fran section
    ├── Method.jsx          # 3-step method cards
    ├── Learn.jsx           # Learning outcomes list
    ├── Testimonials.jsx    # Testimonials + gallery
    ├── CtaFinal.jsx        # Final call-to-action
    └── Footer.jsx          # Footer with links
```

---

## Making Changes

### Edit Text/Content

Open any component file (e.g., `src/components/Hero.jsx`) and modify the JSX directly. Hot reload will update instantly.

### Change Colors/Theme

Edit the CSS variables in `src/index.css`:

```css
:root[data-theme="light"] {
  --primary: #1DA8E0;    /* Change primary color here */
  --bg: #FFFFFF;         /* Background color */
  --text: #0A1628;       /* Text color */
}
```

### Add a New Section

1. Create `src/components/NewSection.jsx`
2. Import it in `src/App.jsx`
3. Add it to the render order:

```jsx
import NewSection from './components/NewSection';

export default function App() {
  return (
    <>
      <Nav ... />
      <Hero />
      <About />
      <NewSection />  {/* Add here */}
      <Footer />
    </>
  );
}
```

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Any Static Host (S3, Cloudflare, etc)

```bash
npm run build
# Upload the contents of dist/ folder
```

---

## No Backend Required

This is a **static landing page** — all CTAs link to external services:
- WhatsApp: `https://wa.me/56974397629`
- TikTok: `https://www.tiktok.com/@fran_marketingdigital`
- Instagram: `https://www.instagram.com/marketing_con_fran`

No API calls, database, or server-side logic needed.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Changes not showing | Hard refresh (Ctrl+Shift+R) or restart dev server |
| Port 5173 already in use | Change port in `vite.config.js` → `server.port: 3000` |
| Out of memory during build | Increase Node memory: `NODE_OPTIONS=--max-old-space-size=2048 npm run build` |

---

## Environment Info

```bash
npm --version
node --version
```

Tested with Node 16+, npm 7+

---

## Questions?

See `../README.md` for detailed technical explanation and React concepts.
