# BioSwitch Landing Page

Modern landing page for BioSwitch — biometric payment infrastructure replacing physical cards with fingerprints.

## Stack

- **Framework**: Next.js 16 + App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Vercel (push-to-deploy ready)

## Features

- Fully responsive design (mobile, tablet, desktop)
- Dark theme with cyan/indigo gradient accents
- Smooth animations and transitions
- Custom SVG animations (fingerprint, scan line effects)
- No external dependencies beyond Next.js
- Full TypeScript type safety

## Sections

1. **Hero** — Animated fingerprint graphic with tagline and CTAs
2. **How It Works** — 3-step process with icons
3. **Built On** — 4-pillar tech stack (HSM, GDPR, EMVCo, Prototype)
4. **Team** — Founder profiles with LinkedIn links
5. **Contact** — Email, phone, LinkedIn contact cards
6. **Footer** — Copyright

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page. It auto-reloads as you edit `app/page.tsx`.

## Production Build

```bash
npm run build
npm start
```

## Deploy on Vercel

### GitHub Integration (Recommended)

1. Push to GitHub: `git push origin main`
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New..." → "Project" and select your repo
4. Vercel auto-detects Next.js config and deploys automatically

### Vercel CLI

```bash
npm i -g vercel
vercel
```

### Custom Domain

After deployment, go to Project Settings → Domains and add your custom domain.

## Environment

No environment variables needed. The site is fully static and ready to deploy immediately.

## Customization

- **Colors**: Edit CSS variables in `app/globals.css` (`:root` section)
- **Content**: Edit sections in `app/page.tsx`
- **Metadata**: Update `app/layout.tsx` for SEO (title, description, OG tags)

## Browser Support

All modern browsers (Chrome, Firefox, Safari, Edge).
