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

There is no test runner and no CI config in this repo. Verification is `lint` then `typecheck` then `build`. `build` requires Node >=20.9.0.

Do not rely on `npm run prettier-format` or `npm run prettier-watch`:

- The glob `*/**/*.{js,ts,tsx}` matches `.next/**`, so it rewrites ~200 generated build files.
- 4 committed source files are not prettier-clean at `printWidth: 80`, so running it creates unrelated diff noise.
- `prettier-watch` is broken, its `onchange` binary is not in devDependencies.

Format only the files you touched: `npx prettier --config .prettierrc --write <files>`. `eslint-config-prettier` is loaded in `eslint.config.mjs`, so lint will not catch formatting.

## Structure

- `pages/` routes: `/`, `/intro`, `/about` plus `/about/{experience,expertise,problem,interest,goals}`, `/services`, `/resume`, `/blog`.
- `components/` grouped by the page that owns them (`about/`, `home/`, `resume/`, `blog/`, `custom/`, `dividers/`, `layout/`, `navbar/`, `footer/`, `head/`, `landing/`).
- `data/` holds page copy as typed objects: `aboutMe.ts`, `resume.ts`, `blogData.ts`, and `freelanceOptions.ts`. Representative exports include `PageText`, `resumeProfile`, `skillCategories`, `experience`, `BlogData`, and `FreelanceOptions`. Change content here, not in JSX.
- `constants/links.ts` drives Navbar, Footer, and the About topics navigation. Editing it changes all three.
- `utils/` holds utility helpers.
- `styles/theme.tsx` starts in light mode with system color mode disabled (`useSystemColorMode: false`). Components use `useColorModeValue` for dark-mode styles.
- Import alias `@/*` maps to the repo root (`tsconfig.json`), so `@/components/layout`, `@/data/resume`.

## Page and SEO conventions

- `/`, `/intro`, `/about`, `/services`, `/resume`, and `/blog` wrap content in `@/components/layout` (Navbar + Footer). Home renders `@/components/landing` with no Layout and relies on the global header in `pages/_app.tsx`. The `/about/*` subroutes (`experience`, `expertise`, `problem`, `interest`, `goals`) render their topic component only, so they have no Navbar or Footer. New routes should wrap in `Layout`.
- Global SEO: `components/head/defaultHeader.tsx` (`DefaultSeo` plus OG image and favicon) is mounted once in `pages/_app.tsx`.
- Per-route SEO: `components/head/customHeader.tsx` (`NextSeo` with `canonical` and `noindex={false}`, plus `SocialProfileJsonLd` and `CorporateContactJsonLd`) is rendered inside each route with a route-specific `url`. `/intro`, `/about`, `/about/*`, `/services`, `/resume`, and `/blog` render it; home relies on `DefaultHeader` only. New routes should include it.
- `public/sitemap.xml` and `public/robots.txt` are static and hand-maintained. Adding a route means editing `public/sitemap.xml` by hand.

## Gotchas

- Chakra UI is v2 (`extendTheme`, `<ChakraProvider theme>`, `ColorModeScript` in `pages/_document.tsx`). Chakra v3 snippets will not compile here. Keep v2 unless the task is an explicit v2 to v3 migration.
- `ColorModeScript` in `_document.tsx` must stay in sync with `styles/theme.tsx` (`initialColorMode: "light"`, `useSystemColorMode: false`).
- `.env` is gitignored and holds only agent keys (`OPENCODE_API_KEY`, `REPLICATE_API_TOKEN`, `TAVILY_API_KEY`). No source file reads `process.env`, so the site needs no env to run. Do not add env reads without also adding a build-time config path.
- `.gitignore` has `*.pdf`, so the CV PDF in the repo root is untracked. Adding a PDF asset needs a `.gitignore` exception.
- `next-env.d.ts` and `tsconfig.tsbuildinfo` are gitignored by default Next template rules.
- On Apple Silicon, an `@next/swc-darwin-arm64` load error on build means a corrupted install: `rm -rf node_modules package-lock.json && npm install`.

## Skills

Load the relevant installed skill before starting the task:

- React or Next.js implementation, review, or performance work: `vercel-react-best-practices`.
- Component API design or composition refactors: `vercel-composition-patterns`.
- New UI or substantial visual redesign: `frontend-design`.
- UI, accessibility, or UX review: `web-design-guidelines`, which requires fetching the latest guidelines first.
- Deployment requests: `deploy-to-vercel`.
- Discovering or installing more skills: `find-skills`.
- Creating or editing a skill: `skill-creator`.
- Browser inspection or logged-in site interaction: `opencli-browser`.
- Web research with Tavily: `tavily-research`, only when Tavily is explicitly requested.
- Terse response requests: `caveman`.

Caveman is opt-in only. Load it for `/caveman`, "caveman mode", "talk like caveman", "be brief", "less tokens", or similar requests. It stays active until "stop caveman" or "normal mode". Do not use it for code, comments, commits, docs, issues, PR text, questions, or options. Keep code, paths, commands, numbers, and errors verbatim. Normal project work uses standard prose.

## Workflow

- Branch names in history: `feature/*`, `feat/*`, `fix/*`. Never commit to `main`; feature branches are merged via PR.
- No pre-commit hooks and no commit template.
- `docs/NEXT_UPGRADE_PLAN.md` holds the incremental Next.js upgrade path (one major per change, validate lint, typecheck, build after each). It is the reference for version work, not a to-do list.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
