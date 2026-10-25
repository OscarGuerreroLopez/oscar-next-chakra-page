# oscarcomputerguy.com

Personal website built with Next.js, TypeScript, and Chakra UI. Pages Router, no
backend.

## Runtime Requirements

- Node.js `>=20.9.0` (required by Next.js 16, pinned in `.nvmrc`)
- npm `>=10`

## Tech Stack

- Next.js 16 (Pages Router)
- React 18.2
- TypeScript 5 (`strict` enabled)
- Chakra UI v2 + Emotion + Framer Motion
- `next-seo` for SEO metadata and JSON-LD
- `react-icons` and `@chakra-ui/icons`
- Vercel Analytics
- ESLint 9 (flat config) with `eslint-config-prettier`
- Prettier 2

Chakra UI is pinned to v2. Chakra v3 APIs will not compile here.

## Local Development

```bash
npm ci        # or npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` – start development server
- `npm run build` – create production build
- `npm run start` – start production server
- `npm run lint` – run ESLint
- `npm run typecheck` – run TypeScript checks

There is no test runner and no CI config in this repo. Verify changes with:

```bash
npm run lint && npm run typecheck && npm run build
```

### Formatting

Do not run `npm run prettier-format` or `npm run prettier-watch` across the
repo. The `*/**/*.{js,ts,tsx}` glob also matches `.next/**`, so it rewrites a
few hundred generated build files, and `prettier-watch` is broken because its
`onchange` binary is not a devDependency.

Format only the files you touched:

```bash
npx prettier --config .prettierrc --write <files>
```

`eslint-config-prettier` is loaded in `eslint.config.mjs`, so lint will not
catch formatting.

## Project Structure

- `pages/` – route entries. `_app.tsx` mounts the global SEO header and the
  Chakra theme; `_document.tsx` holds `ColorModeScript` and the Google site
  verification meta tag.
- `components/` – UI grouped by the page that owns it (`about/`, `blog/`,
  `custom/`, `dividers/`, `footer/`, `head/`, `home/`, `landing/`, `layout/`,
  `navbar/`, `resume/`).
- `data/` – all page copy as typed objects (`aboutMe.ts`, `blogData.ts`,
  `freelanceOptions.ts`, `resume.ts`). Change content here, not in JSX.
- `styles/theme.tsx` – minimal light-mode Chakra theme.
- `constants/links.ts` – single source for both Navbar and Footer.
- `utils/` – utility helpers.
- `public/` – static assets, plus hand-maintained `sitemap.xml` and
  `robots.txt`.
- `docs/` – supporting documentation.
- `AGENTS.md` – conventions and gotchas for agents working in this repo.

### Routes

`/`, `/intro`, `/about`, `/services`, `/resume`, and `/blog` wrap their content
in `@/components/layout` (Navbar + Footer). The `/about/*` subroutes
(`experience`, `expertise`, `problem`, `interest`, `goals`) and home do not:
home renders `@/components/landing`, the `/about/*` subroutes render their topic
component only. Add `Layout` when creating a new route.

`/`, `/intro`, `/about`, `/about/{experience,expertise,problem,interest,goals}`,
`/services`, `/resume`, `/blog`

### SEO

- Global SEO lives in `components/head/defaultHeader.tsx` (`DefaultSeo`, OG
  image, favicon) and is mounted once from `pages/_app.tsx`.
- Per-route SEO lives in `components/head/customHeader.tsx` (`NextSeo` with
  `canonical`, plus `SocialProfileJsonLd` and `CorporateContactJsonLd`). New
  routes should render it with a route-specific `url`.
- `public/sitemap.xml` and `public/robots.txt` are static. Adding a route means
  adding it to `public/sitemap.xml` by hand.

## Troubleshooting

If `npm run build` fails with an SWC binary error on Apple Silicon (for
example: failed loading `@next/swc-darwin-arm64`), run a clean install:

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

If `npm run build` fails with a Node version error, upgrade Node to `>=20.9.0`
and reinstall dependencies.

## Notes

- The site reads no environment variables, so `.env` is not needed to run it.
- `docs/NEXT_UPGRADE_PLAN.md` is a reference for the one-major-at-a-time Next.js
  upgrade path, not a to-do list.
