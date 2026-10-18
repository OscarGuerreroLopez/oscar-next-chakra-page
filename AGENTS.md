# AGENTS.md

Personal site (oscarcomputerguy.com). Next.js 16 Pages Router, React 18.2, TypeScript strict, Chakra UI v2, Emotion, next-seo, Vercel Analytics.

## Commands

```bash
npm ci                    # or npm install, requires Node >=20.9.0 (.nvmrc pins 20.9.0)
npm run dev               # http://localhost:3000
npm run lint              # eslint . (flat config)
npm run typecheck         # tsc --noEmit
npm run build             # next build, also the prod smoke test
```

There is no test runner and no CI config in this repo. Verification is `lint` then `typecheck` then `build`. Lint and typecheck pass; `build` requires Node >=20.9.0 and has not been run on this branch.

Do not rely on `npm run prettier-format` or `npm run prettier-watch`:

- The glob `*/**/*.{js,ts,tsx}` matches `.next/**`, so it rewrites ~200 generated build files.
- 4 committed source files are not prettier-clean at `printWidth: 80`, so running it creates unrelated diff noise.
- `prettier-watch` is broken, its `onchange` binary is not in devDependencies.

Format only the files you touched: `npx prettier --config .prettierrc --write <files>`. `eslint-config-prettier` is loaded in `eslint.config.mjs`, so lint will not catch formatting.

## Structure

- `pages/` routes: `/`, `/intro`, `/about` plus `/about/{experience,expertise,problem,interest,goals}`, `/services`, `/resume`, `/blog`.
- `components/` grouped by the page that owns them (`about/`, `home/`, `resume/`, `blog/`, `custom/`, `layout/`, `navbar/`, `footer/`, `head/`, `landing/`).
- `data/*.ts` holds all copy as typed objects (`BlogData`, `AboutMeLittleCardContext`, `PageText`, `resumeProfile`, `skillCategories`, `experience`, `earlierExperience`, `education`, `FreelanceOptions`). Change content here, not in JSX.
- `constants/links.ts` drives both Navbar and Footer. Editing it changes both.
- `styles/theme.tsx` is a minimal Chakra theme, light mode only (`useSystemColorMode: false`). Components that need dark mode use `useColorModeValue`.
- Import alias `@/*` maps to the repo root (`tsconfig.json`), so `@/components/layout`, `@/data/resume`.

## Page and SEO conventions

- Every route except `pages/index.tsx` wraps content in `@/components/layout` (Navbar + Footer). Home renders `@/components/landing` with no Layout.
- Global SEO: `components/head/defaultHeader.tsx` (`DefaultSeo` plus OG image and favicon) is mounted once in `pages/_app.tsx`.
- Per-route SEO: `components/head/customHeader.tsx` (`NextSeo` with `canonical` and `noindex={false}`, plus `SocialProfileJsonLd` and `CorporateContactJsonLd`) is rendered inside each page with route-specific `url`. New routes should include it.
- `public/sitemap.xml` and `public/robots.txt` are static and hand-maintained. Adding a route means editing `public/sitemap.xml` by hand.

## Gotchas

- Chakra UI is v2 (`extendTheme`, `<ChakraProvider theme>`, `ColorModeScript` in `pages/_document.tsx`). Chakra v3 snippets will not compile here. Keep v2 unless the task is an explicit v2 to v3 migration.
- `ColorModeScript` in `_document.tsx` must stay in sync with `styles/theme.tsx` config.
- `.env` is gitignored and holds only agent keys (`OPENCODE_API_KEY`, `REPLICATE_API_TOKEN`, `TAVILY_API_KEY`). No source file reads `process.env`, so the site needs no env to run. Do not add env reads without also adding a build-time config path.
- `.gitignore` has `*.pdf`, so the CV PDF in the repo root is untracked. Adding a PDF asset needs a `.gitignore` exception.
- `next-env.d.ts` and `tsconfig.tsbuildinfo` are gitignored by default Next template rules.
- On Apple Silicon, an `@next/swc-darwin-arm64` load error on build means a corrupted install: `rm -rf node_modules package-lock.json && npm install`.

## Workflow

- Branch names in history: `feature/*`, `feat/*`, `fix/*`. Never commit to `main`; feature branches are merged via PR.
- No pre-commit hooks and no commit template.
- `docs/NEXT_UPGRADE_PLAN.md` holds the incremental Next.js upgrade path (one major per change, validate lint, typecheck, build after each). It is the reference for version work, not a to-do list.
