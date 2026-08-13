# MD. Abdul Lotif - Premium Portfolio

A production-oriented static portfolio for `https://rslotif.github.io`. It presents IT support, system administration, cybersecurity, web application security, vulnerability assessment, research, networking, and full-stack development without inventing professional claims.

## Features

- Premium responsive light/dark interface, accessible mobile navigation, scroll progress, back-to-top, and optional floating contact controls
- Typed file-based content for profile, skills, experience, projects, UMVAF research, education, certifications, achievements, services, testimonials, navigation, and contact details
- Search and category filters, published/featured/order controls, project detail routes, Markdown blog, print resume, responsible disclosure, and accessibility pages
- Browser-safe EmailJS contact form with React Hook Form, Zod, honeypot, cooldown, duplicate prevention, safe errors, and environment configuration
- HashRouter navigation for reliable GitHub Pages refreshes
- GitHub Actions quality gate and Pages deployment

## Stack

React 19, strict TypeScript, Vite, Tailwind CSS 4, React Router, Framer Motion, Lucide, React Hook Form, Zod, EmailJS, React Markdown, Vitest, and Testing Library.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run test
npm run build
npm run preview
```

Copy `.env.example` to `.env.local` before enabling EmailJS. See [CONTENT_EDITING_GUIDE.md](CONTENT_EDITING_GUIDE.md), [EMAILJS_SETUP.md](EMAILJS_SETUP.md), and [DEPLOYMENT.md](DEPLOYMENT.md).

## Structure

- `src/data/`: editable typed content
- `src/content/blog/`: Markdown posts
- `src/pages/`: routed views
- `src/components/`: layout, forms, and shared UI
- `src/schemas/`, `src/utils/`, `src/types/`: validation and content logic
- `public/`: static SEO, CV, image, and security files
- `.github/workflows/deploy.yml`: automated GitHub Pages deployment

## Security limitations

This is a public static website. Everything bundled by Vite is visible to visitors. Never add SMTP passwords, Gmail app passwords, private API keys, sensitive reports, or private personal documents. EmailJS public identifiers are browser-facing; actual mail credentials remain inside EmailJS.

## Licence

No licence is granted by default. Add a chosen licence before redistribution.
