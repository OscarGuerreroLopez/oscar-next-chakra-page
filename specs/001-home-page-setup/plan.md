# Implementation Plan: Home Page Setup

**Branch**: `001-home-page-setup` | **Date**: 2026-08-22 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-home-page-setup/spec.md`

## Summary

Update the existing home-page landing hero so Oscar’s introduction reveals with a
right-to-left motion sequence, then reveals the “Learn more about me” CTA after the copy
has completed. Reuse the existing landing component, Chakra UI primitives, and the
already-installed Framer Motion dependency; add no animation dependency and no tests.

## Technical Context

**Language/Version**: TypeScript 5.9.3 with React 18.2.0

**Primary Dependencies**: Next.js ^16.3.0, Chakra UI ^2.5.2, Framer Motion ^10.0.2

**Storage**: N/A; static presentation state only

**Testing**: None; unit, integration, and end-to-end tests are explicitly out of scope

**Target Platform**: Responsive browser experience on the existing Next.js pages router

**Project Type**: Web application, static personal portfolio page

**Performance Goals**: Manual review on representative mobile and desktop browsers finds
no visible stutter, clipping, or layout shift caused by the reveal sequence

**Constraints**: Preserve the current home-page route and copy; use Chakra for styling;
  reuse installed dependencies; support reduced-motion preferences; avoid horizontal
  overflow and clipped content; do not add tests or new packages

**Scale/Scope**: One landing hero component and its immediate navigation behavior; no
  changes to the lower home-page sections or other routes

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Clean Code: PASS. Keep the animation and CTA sequencing cohesive within the existing
  landing component, with named constants and minimal state.
- Simple UX: PASS. The introduction remains the primary content and the CTA appears only
  after the message is established.
- Responsive Design: PASS. Use Chakra responsive values and constrain the hero content to
  the viewport without horizontal overflow.
- Minimal Dependencies: PASS. Reuse Chakra UI and the existing Framer Motion package;
  no dependency addition is planned.
- Deliberate Delivery: PASS. Scope is limited to the existing landing hero; no broad
  refactor or testing work is included.
- Technology Constraints: PASS. The plan targets the versions declared in `package.json`.
- Testing Deferral: PASS. No unit, integration, or end-to-end tests are planned, per the
  constitution and user instruction.

## Project Structure

### Documentation (this feature)

```text
specs/001-home-page-setup/
├── plan.md                    # This implementation plan
├── research.md                # Phase 0 decisions and alternatives
├── data-model.md              # Presentation-state model
├── quickstart.md              # Manual validation guide
├── contracts/
│   └── landing-hero.md        # UI behavior contract
└── tasks.md                   # Created later by /speckit-tasks
```

### Source Code (repository root)

```text
components/
└── landing/
    └── index.tsx              # Existing home-page hero; primary implementation target

pages/
└── index.tsx                  # Existing home route; expected to remain unchanged

styles/
└── theme.tsx                  # Existing Chakra theme; change only if a shared token is
                               # demonstrably needed
```

**Structure Decision**: This is a single existing Next.js pages-router application. The
change belongs in `components/landing/index.tsx`; `pages/index.tsx` remains the route
entry point and should not be duplicated or reorganized.

## Phase 0: Research

Research decisions are recorded in [research.md](./research.md). They resolve the
animation implementation, reduced-motion behavior, dependency reuse, and CTA sequencing
without introducing unresolved technical choices.

## Phase 1: Design

- Presentation state and transitions are documented in [data-model.md](./data-model.md).
- Observable landing-hero behavior is documented in
  [contracts/landing-hero.md](./contracts/landing-hero.md).
- Manual validation steps are documented in [quickstart.md](./quickstart.md).

## Complexity Tracking

No constitution violations require justification.
