# Quickstart: Intro Button Layout

## Prerequisites

- Node.js `>=20.9.0`
- Project dependencies installed from `package.json`

## Run the page

From the repository root:

```bash
npm run dev
```

Open `http://localhost:3000/intro` in a browser.

## Manual review

1. Open the intro page in a fresh browser state.
2. Observe the initial page render, the mount-time transition, and the state after the button
   becomes available.
3. Confirm the text does not move vertically when the button appears.
4. Confirm the button is directly underneath the complete text, with no overlap or
   excessive gap.
5. Confirm the “More about me” button still links to `/about` and remains keyboard
   reachable with visible focus.
6. Repeat at narrow mobile-sized and wide desktop-sized viewports.
7. Confirm there is no horizontal scrolling, clipping, or overlap.
8. Use keyboard navigation after the button becomes available and confirm it receives
   focus with a visible focus indication.

## Expected result

The “More about me” button appears in its reserved area directly below the intro text,
while the heading, descriptive text, and surrounding content block retain their original
positions and the existing `/about` CTA behavior remains unchanged.

No automated tests or test-suite commands are included for this feature.
