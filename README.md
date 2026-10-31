# VELORA — Hospitality Website Template

A quiet-luxury, editorial website template for boutique hotels, villas, mountain lodges, desert camps and independent retreats.
Built with **Next.js 15 (App Router)**, **TypeScript** and **Tailwind CSS**. No database, no login, no payments — reservations go to your existing booking engine through external links.

---

## Features

- Ten page types: Home, Accommodations (with type filters), Accommodation detail (gallery + Reserve), Experiences, Offers & packages, Journal (list + story pages), Gallery (filters + full-screen viewer), FAQ (expandable answers), About, Contact
- Home page teasers for current offers and the latest journal stories
- Three complete demo presets — **Forest & Mountain Lodge** (default), **Desert Eco-Resort** and **Coastal Villa Retreat** — each with its own colours, copy, rooms, offers, journal and images
- Search & share ready: per-page titles, descriptions, Open Graph/Twitter previews, schema.org structured data, sitemap.xml and robots.txt
- Two languages (English + French demo) with a header switcher; add more in minutes
- Editorial motion: masked headline reveal, parallax hero, scroll reveals, image hover zooms, hero-only custom cursor, page fades, momentum scrolling (Lenis). Everything calms down automatically for visitors who prefer reduced motion
- Contact form that posts to a free form service (e.g. Formspree) or falls back to the visitor's email app
- OpenStreetMap embed (no API key)
- Original VELORA logo mark + SVG favicon
- Responsive from 360 px phones to wide desktops, keyboard-friendly, visible focus states, alt text

## Requirements

- Node.js 18.18+ (20 LTS or newer recommended)
- Yarn, npm or pnpm

## Installation

```bash
# 1. Install dependencies
yarn install          # or: npm install

# 2. Start the development server (http://localhost:3000)
yarn dev              # or: npm run dev

# 3. Build and run for production
yarn build && yarn serve
```

> `yarn start` is pre-configured to run the dev server on `0.0.0.0:3000` (useful in containers). For production use `yarn build` then `yarn serve` (= `next start`).

## Deploying

VELORA is a standard Next.js app. Deploy to Vercel, Netlify, Cloudflare Pages, Render, a VPS — anywhere that runs Next.js. No environment variables are required.

## Project structure

```
src/
├── app/                      # Routes (Next.js App Router)
│   ├── page.tsx              # Home
│   ├── accommodations/       # List + [slug] detail
│   ├── experiences/ offers/ journal/ gallery/ faq/ about/ contact/
│   ├── sitemap.ts robots.ts      # Generated from your content
│   ├── layout.tsx            # Fonts, metadata, header/footer
│   ├── template.tsx          # Page transition
│   └── icon.svg              # Favicon
├── config/
│   ├── site.ts               # ★ Global settings: active preset, languages, form endpoint
│   ├── types.ts              # Content types (edit only to add new fields)
│   └── presets/
│       ├── forest.ts         # ★ Demo preset: Forest & Mountain Lodge
│       ├── desert.ts         # ★ Demo preset: Desert Eco-Resort
│       ├── coastal.ts        # ★ Demo preset: Coastal Villa Retreat
│       └── image.ts          # Demo image URL helpers
├── content/
│   ├── offers/<preset>.ts    # ★ Seasonal offers & packages
│   ├── journal/<preset>.ts   # ★ Journal stories
│   ├── gallery/<preset>.ts   # ★ Gallery photos & categories
│   └── faq/<preset>.ts       # ★ FAQ questions & answers
├── locales/
│   ├── en.ts                 # ★ Interface text (English)
│   └── fr.ts                 # ★ Interface text (French)
├── components/
│   ├── home/                 # Home page sections
│   ├── layout/               # Header, Footer, SmoothScroll
│   ├── ui/                   # Reusable building blocks
│   └── views/                # Page bodies
└── lib/                      # Site context (language + preset), theme, motion, SEO helpers
```

★ = files you will edit to make the site your own.

## Documentation

- **[docs/CUSTOMIZATION.md](docs/CUSTOMIZATION.md)** — branding, colours, fonts, content, images, booking links, languages, form service, presets
- **[docs/DEMO_CONTENT.md](docs/DEMO_CONTENT.md)** — every piece of demo content (and every demo photo) you must replace before launch

## Licence notes

- The source code is licensed to you under the terms of your template purchase.
- **Demo photos are not included in the package.** They are hot-linked from Unsplash / Pexels for preview purposes only and must be replaced with your own photography before launch (see `docs/DEMO_CONTENT.md`).
- Fonts (Cormorant Garamond, Manrope) are open-source under the SIL Open Font License and loaded via `next/font/google`.
- Icons from `lucide-react` (ISC licence).
