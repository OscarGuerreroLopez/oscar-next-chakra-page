# Next.js Upgrade Plan (Incremental + Safe)

This project currently uses `next@13.2.4` and the Pages Router.

The safest route is to upgrade one major at a time, validating after each step.

## 0) Baseline Snapshot

Before upgrading:

```bash
npm run lint
npm run typecheck
npm run build
```

If build fails because of an SWC optional dependency, do a clean install first.

## 1) Upgrade to Next 14 (keep Pages Router)

- Upgrade `next` to latest 14.x.
- Keep React 18 while validating behavior.
- Run:

```bash
npm install next@^14
npm run lint
npm run typecheck
npm run build
```

Fix any deprecated APIs reported in build output.

## 2) Upgrade to Next 15

- Upgrade to latest 15.x only after Next 14 is stable.
- Re-run lint/typecheck/build and verify key pages manually:
  - `/`
  - `/about`
  - `/services`
  - `/resume`
  - `/blog`

## 3) Upgrade to Latest Next.js (current major)

- Upgrade to the latest stable major.
- Apply official codemods from Next.js docs when prompted.
- Re-run full validation after each codemod.

## 4) Optional: App Router Migration (separate phase)

Do this only after framework versions are stable.

- Move routes gradually from `pages/` to `app/`.
- Keep shared UI components unchanged where possible.
- Migrate page-by-page, not all at once.

## Recommended Rules During Upgrade

- Upgrade one major per PR/commit.
- Avoid refactors unrelated to the upgrade.
- Keep SEO and metadata behavior checked per route.
- Validate production build before every merge.

## Validation Checklist Per Step

```bash
npm run lint
npm run typecheck
npm run build
```

And manually sanity-check navigation and layout in desktop + mobile breakpoints.
