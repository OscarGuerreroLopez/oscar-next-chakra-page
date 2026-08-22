# Research: Home Page Setup

## Decision: Reuse the existing landing component and installed motion capability

**Rationale**: `components/landing/index.tsx` already owns the home-page hero, and
`framer-motion` is already declared in `package.json`. Reusing both keeps the change
narrow and satisfies the Minimal Dependencies principle.

**Alternatives considered**: Adding a new animation package was rejected because it adds
maintenance cost without solving a demonstrated need. Moving the hero into a new feature
directory was rejected because the existing component boundary is already cohesive.

## Decision: Enter readable text units from the right, then reveal the CTA

**Rationale**: Staging words or short text groups from the right and settling them in
normal left-to-right reading order preserves readability better than animating individual
glyphs, while still creating a visible flowing effect. The final animation completion
event provides one clear point at which the CTA becomes visible.

**Alternatives considered**: A continuous marquee was rejected because it can make the
message difficult to read and does not provide a stable final state. A simultaneous whole
block entrance was rejected because it does not meet the requested flowing effect.

## Decision: Make reduced motion skip movement while preserving sequence semantics

**Rationale**: Visitors who prefer reduced motion must receive the complete message and
CTA without waiting for decorative movement. The content is established immediately and
the CTA is revealed as soon as the text is considered complete.

**Alternatives considered**: Hiding the animation or CTA for reduced-motion users was
rejected because it would remove content or functionality.

## Decision: Use Chakra UI for layout and visual styling

**Rationale**: Chakra is the project’s existing styling system and already supplies the
responsive layout primitives, typography, focus states, spacing, and color-mode support
needed by the hero.

**Alternatives considered**: A separate CSS framework or new design system was rejected
as unnecessary dependency and styling surface.

## Decision: Validate manually, with no automated tests

**Rationale**: The current constitution explicitly defers testing, and the user directly
requested no unit, integration, or end-to-end tests. Validation will use the runnable
manual scenarios in `quickstart.md`, plus existing lint/typecheck/build commands when
appropriate; those commands are not test suites.

**Alternatives considered**: Adding component or browser tests was rejected because it
would contradict the current project governance and request.
