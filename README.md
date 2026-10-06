# Portfolio

A classic, professional developer portfolio built with Next.js, TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What to customize

All content lives in `src/app/page.tsx` as plain data at the top of the file — no need to touch the layout markup:

- `PROJECTS` — your projects, description, tech stack tags, and links
- `EXPERIENCE` — your work history
- `SKILLS` — grouped skill list
- Hero, About, and Contact copy — edit directly inside the `<section>` tags

Update the page title, description, and your name in `src/app/layout.tsx` and the header in `src/app/page.tsx`.

Swap `alex@example.com` and the GitHub/LinkedIn `href="#"` placeholders in the Contact section with your real links.

## Fonts

This template ships with system font stacks (Georgia for display headings, system sans for body, system mono for the `~/section` labels) so it builds without needing internet access to Google Fonts. If you want the originally-designed pairing, swap to `next/font/google` in `src/app/layout.tsx`:

```tsx
import { Source_Serif_4, Inter, JetBrains_Mono } from "next/font/google";
```

and wire the returned `variable` classes onto `<body>`, then remove the hardcoded `--font-display` / `--font-body` / `--font-mono` stacks in `src/app/globals.css`.

## Deploy

Push this to a GitHub repo, then import it at https://vercel.com/new — it will auto-detect Next.js and deploy with zero config. Every push to `main` redeploys automatically.
