# Oscar Next + Chakra Portfolio

Personal website built with Next.js, TypeScript, and Chakra UI.

## Tech Stack

- Next.js (Pages Router)
- React
- TypeScript (`strict` enabled)
- Chakra UI + Emotion
- `next-seo` for shared SEO defaults
- Vercel Analytics

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` – start development server
- `npm run build` – create production build
- `npm run start` – start production server
- `npm run lint` – run ESLint
- `npm run typecheck` – run TypeScript checks
- `npm run prettier-format` – format JS/TS/TSX files

## Project Structure

- `pages/` – route entries (home, about, intro, blog, services, resume)
- `components/` – reusable UI sections grouped by domain
- `data/` – text/content objects used by pages and cards
- `styles/theme.tsx` – Chakra theme configuration
- `constants/` – navigation and constant values
- `utils/` – utility helpers
- `public/` – static assets and images

## What Was Modernized

- The custom Chakra theme is now wired globally in `_app`.
- Added a dedicated TypeScript validation script (`npm run typecheck`).
- Added an incremental Next.js upgrade plan in `docs/NEXT_UPGRADE_PLAN.md`.

## Troubleshooting

If `npm run build` fails with an SWC binary error on Apple Silicon (for example: failed loading `@next/swc-darwin-arm64`), run a clean install:

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Upgrade Path

For a safe migration path from this codebase to the latest Next.js, follow:

- `docs/NEXT_UPGRADE_PLAN.md`
