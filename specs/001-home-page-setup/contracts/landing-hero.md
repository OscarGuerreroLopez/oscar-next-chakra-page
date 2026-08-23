# Landing Hero UI Contract

## Purpose

Define the observable behavior of the home-page hero at `/`.

## Content Contract

- The hero presents Oscar’s introductory message as its primary content.
- The message is “Hello, Oscar Guerrero here. I am a senior software engineer with more
  than 20 years of experience in backend and cloud systems.”
- The complete message remains readable after the reveal finishes.
- The reveal takes approximately twice the current duration, giving the text a slower
  reading pace.
- The CTA label is exactly “Learn more about me”.
- Selecting the CTA navigates to `/intro`.

## Interaction Contract

| State | Introductory message | CTA |
|---|---|---|
| Initial | Not yet fully revealed | Hidden or unavailable |
| Revealing | Readable text units enter from the right and settle left-to-right at approximately half the current speed | Hidden or unavailable |
| Complete | Full message stable | Visible and actionable |
| Reduced motion | Full message established without movement | Visible and actionable |

## Layout Contract

- The hero remains usable on narrow and wide viewports.
- Text and CTA remain inside the viewport with no horizontal scrolling.
- The CTA does not overlap the message at any supported viewport size.
- Focus indication and the existing link destination remain available when the CTA is
  actionable.

## Accessibility Contract

- The message is exposed as readable text, not animation-only decoration.
- Reduced-motion preferences remove or minimize movement without removing content.
- The CTA is not keyboard-actionable before it becomes visible/actionable.
