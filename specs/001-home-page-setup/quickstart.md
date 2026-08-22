# Quickstart: Home Page Setup

## Prerequisites

- Node.js `>=20.9.0`
- Project dependencies installed from `package.json`

## Run the page

From the repository root:

```bash
npm run dev
```

Open `http://localhost:3000/` in a browser.

## Manual validation

1. Refresh the page in a fresh browser state.
2. Confirm each text unit visibly enters from the right and settles in normal left-to-right
   reading order in readable stages.
3. Confirm the complete message settles into a stable layout.
4. Confirm “Learn more about me” is hidden or unavailable during the reveal.
5. Confirm the CTA appears after the final text stage and navigates to `/intro`.
6. Repeat at a narrow mobile-sized viewport and a wide desktop-sized viewport.
7. Confirm there is no horizontal scrolling, clipping, or overlap.
8. Enable the browser or operating-system reduced-motion preference, refresh, and confirm
   the complete message and CTA are available without disruptive movement.
9. Refresh during the reveal and confirm the page returns to a coherent initial state.

## Optional repository checks

When relevant to the implementation change, run the existing commands:

```bash
npm run lint
npm run typecheck
npm run build
```

These are static/build checks only. No unit, integration, or end-to-end test commands are
required for this feature.

## Expected result

The home page has a dynamic but readable opening, the CTA appears only after the
introduction is complete, and the experience remains responsive and accessible.
