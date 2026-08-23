# Research: Intro Button Layout

## Decision: Reserve the CTA area from the initial layout state

**Rationale**: The user explicitly requires the intro text to remain fixed when the
button appears. Keeping a reserved area beneath the text prevents the button’s arrival
from changing the text position while still allowing the button to appear directly below
the content.

**Alternatives considered**: Letting the button enter normal flow was rejected because
it causes the reported layout shift. Overlaying the button was rejected because it risks
covering text or other content at smaller viewport sizes.

The CTA area is rendered from the initial page state, while the CTA becomes available after
the intro component mounts. The visibility transition is limited to the CTA contents.

## Decision: Use Chakra UI for spacing, sizing, and responsive layout

**Rationale**: Chakra UI is already the project’s styling system and provides the layout
primitives and responsive values needed without adding dependencies or custom styling
infrastructure.

**Alternatives considered**: A new CSS framework or standalone animation/layout package
was rejected because the change is local and the existing Chakra capabilities are
sufficient.

## Decision: Reuse the existing intro components and preserve CTA behavior

**Rationale**: `components/home/intro.tsx` owns the intro-page composition and
`components/custom/linkButton.tsx` owns the current CTA presentation. Keeping those
boundaries minimizes the change and preserves the existing label, action, destination,
and keyboard behavior.

**Alternatives considered**: Moving the CTA into a new feature component or changing the
route entry point was rejected because neither is needed for the layout correction.

## Decision: No automated testing

**Rationale**: The user explicitly requested no testing, and the project constitution
defers test files, test suites, and testing gates. Manual review scenarios document the
expected behavior without adding test artifacts.
