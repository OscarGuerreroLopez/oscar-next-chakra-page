# Implementation Plan: Intro Button Layout

**Branch**: `002-intro-button-layout` | **Date**: 2026-08-23 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-intro-button-layout/spec.md`

## Summary

Keep the intro-page text in a stable position when the existing CTA becomes visible after
mount by reserving its space from the initial layout state and keeping the complete intro
content block anchored. Reuse the existing “More about me” CTA, which links to `/about`, and
use Chakra UI layout primitives and responsive values for the mount-time reveal.
No automated tests, test suites, or new dependencies are planned.

## Technical Context

**Language/Version**: TypeScript 5.9.3 with React 18.2.0

**Primary Dependencies**: Next.js ^16.3.0 and Chakra UI ^2.5.2

**Storage**: N/A; static presentation layout only

**Testing**: None; automated tests and test suites are explicitly out of scope

**Target Platform**: Responsive browser experience on the existing Next.js pages router

**Project Type**: Web application, static personal portfolio page

**Performance Goals**: Button appearance causes no observable vertical movement of the
intro text across representative mobile and desktop viewports

**Constraints**: Use Chakra UI styling; reserve CTA space from the initial state; keep the
intro content block anchored; preserve the “More about me” button and `/about` destination;
avoid overlap and horizontal scrolling; do not add dependencies or tests

**Scale/Scope**: One intro-page layout and its existing CTA boundary; no changes to other
pages or shared navigation behavior

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Clean Code: PASS. Keep the layout adjustment within the existing intro composition and
  link-button boundary; add no unnecessary abstraction.
- Simple UX: PASS. The CTA remains directly below the text without a layout jump.
- Responsive Design: PASS. Chakra responsive layout values preserve containment on narrow
  and wide screens.
- Minimal Dependencies: PASS. Reuse existing Chakra UI and Next.js capabilities.
- Deliberate Delivery: PASS. Scope is limited to the intro-page CTA layout.
- Technology Constraints: PASS. The plan uses the declared Next.js, React, and Chakra UI
  versions.
- Testing Deferral: PASS. No automated tests, test files, or test gates are planned.

## Project Structure

### Documentation (this feature)

```text
specs/002-intro-button-layout/
├── plan.md                    # This implementation plan
├── research.md                # Phase 0 decisions and alternatives
├── data-model.md              # Presentation layout model
├── quickstart.md              # Manual review guide
├── contracts/
│   └── intro-button.md        # Observable UI behavior contract
└── tasks.md                   # Phase 2 output from /speckit-tasks
```

### Source Code (repository root)

```text
components/
├── home/intro.tsx             # Intro-page composition and text layout
└── custom/linkButton.tsx      # Existing CTA presentation and link behavior

pages/
└── intro/index.tsx             # Existing /intro route entry point
```

**Structure Decision**: This is a single existing Next.js pages-router application. The
layout change belongs in `components/home/intro.tsx`, with
`components/custom/linkButton.tsx` changed only if the CTA needs a
Chakra-compatible wrapper or sizing adjustment. `pages/intro/index.tsx` remains
unchanged.

## Phase 0: Research

Research decisions are recorded in [research.md](./research.md). They resolve the
reserved-space layout approach, Chakra styling, reuse of existing components, and the
no-testing constraint without introducing unresolved technical choices.

## Phase 1: Design

- Presentation layout state is documented in [data-model.md](./data-model.md).
- Observable intro-button behavior is documented in
  [contracts/intro-button.md](./contracts/intro-button.md).
- Manual review steps are documented in [quickstart.md](./quickstart.md).

## Complexity Tracking

No constitution violations require justification.
