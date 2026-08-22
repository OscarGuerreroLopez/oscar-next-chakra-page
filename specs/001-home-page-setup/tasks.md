---

description: "Implementation tasks for the animated home-page hero"
---

# Tasks: Home Page Setup

**Input**: Design documents from `/specs/001-home-page-setup/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/,
quickstart.md

**Tests**: No unit, integration, or end-to-end test tasks are included. Validation is
manual and documented in `quickstart.md`, per the project constitution and user request.

**Organization**: Tasks are grouped by user story so each story has an explicit goal and
independent validation checkpoint.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the existing implementation boundary and available dependencies.

- [X] T001 [P] Confirm the home-page entry point and existing hero boundary in `pages/index.tsx` and `components/landing/index.tsx`
- [X] T002 [P] Confirm Chakra UI and Framer Motion versions available in `package.json` before implementation

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared content and state contract before story-specific behavior.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T003 Preserve the finalized introductory copy, define ordered reveal units, and set the CTA destination to `/intro` in `components/landing/index.tsx`
- [X] T004 Establish the hero reveal states and completion boundary in `components/landing/index.tsx`

**Checkpoint**: Shared hero content and sequencing contract are ready for story work.

---

## Phase 3: User Story 1 - Experience the Animated Introduction (Priority: P1) 🎯 MVP

**Goal**: Replace the static introductory block with readable text units that enter from
the right, settle in normal left-to-right reading order, and form a complete stable message.

**Independent Test**: Open `/` in a fresh session and observe the introduction from its
initial state through completion; verify each text unit enters from the right, settles in
normal left-to-right reading order, and remains complete and stable at the end.

### Implementation for User Story 1

- [X] T005 [US1] Render the ordered introductory units as readable text elements in `components/landing/index.tsx`
- [X] T006 [US1] Implement the staged entrance from the right and final stable reading order in `components/landing/index.tsx`
- [X] T007 [US1] Preserve the current hero background, contrast, typography hierarchy, and content alignment with Chakra styling in `components/landing/index.tsx`

**Checkpoint**: User Story 1 is independently observable with a complete animated
introduction and no static-first presentation.

---

## Phase 4: User Story 2 - Continue to the About Section (Priority: P1)

**Goal**: Reveal and enable the “Learn more about me” CTA only after the introduction has
finished.

**Independent Test**: Observe `/` before, during, and after the introduction completes;
verify the CTA is unavailable before completion, appears afterward, and reaches `/intro`
when selected.

### Implementation for User Story 2

- [X] T008 [US2] Keep the “Learn more about me” CTA hidden or unavailable while the hero reveal is pending or active in `components/landing/index.tsx`
- [X] T009 [US2] Reveal the CTA with a clear post-introduction transition when the hero reaches its complete state in `components/landing/index.tsx`
- [X] T010 [US2] Preserve the CTA’s keyboard focus behavior, accessible label, and `/intro` destination in `components/landing/index.tsx`

**Checkpoint**: User Stories 1 and 2 work together while the CTA remains sequenced after
the full introductory message.

---

## Phase 5: User Story 3 - Use the Page Comfortably on Different Screens (Priority: P2)

**Goal**: Keep the animated hero readable, contained, and accessible across viewport
sizes and reduced-motion preferences.

**Independent Test**: View `/` on narrow and wide screens, including with reduced motion
enabled; verify the message and CTA remain readable, contained, and usable.

### Implementation for User Story 3

- [X] T011 [US3] Apply Chakra responsive sizing, spacing, alignment, and overflow-safe layout rules to the hero in `components/landing/index.tsx`
- [X] T012 [US3] Add reduced-motion handling that establishes the full message and CTA without disruptive movement in `components/landing/index.tsx`
- [X] T013 [US3] Ensure refreshes and viewport changes during the reveal return to a coherent state without clipping or CTA overlap in `components/landing/index.tsx`

**Checkpoint**: All three user stories are independently reviewable across target viewport
sizes and motion preferences.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Perform manual validation and final cleanup without adding tests or expanding
feature scope.

- [X] T014 [P] Review the final hero behavior against the UI contract in `specs/001-home-page-setup/contracts/landing-hero.md`
- [X] T015 Run the manual validation scenarios in `specs/001-home-page-setup/quickstart.md` against `http://localhost:3000/`
- [X] T016 Clean up naming, formatting, and unused imports in `components/landing/index.tsx`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; confirms the existing source boundary and packages.
- **Foundational (Phase 2)**: Depends on Setup; blocks all user-story work.
- **User Story 1 (Phase 3)**: Depends on Foundational; delivers the MVP animation.
- **User Story 2 (Phase 4)**: Depends on User Story 1’s completion boundary so CTA timing
  can be attached to the finished reveal.
- **User Story 3 (Phase 5)**: Depends on the combined hero and CTA behavior from User
  Stories 1 and 2.
- **Polish (Phase 6)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Depends only on Phase 2; no other story dependency.
- **User Story 2 (P1)**: Depends on User Story 1’s reveal completion state.
- **User Story 3 (P2)**: Depends on the completed visual and CTA behavior from User
  Stories 1 and 2.

### Parallel Opportunities

- T001 and T002 can run in parallel because they are read-only checks of separate files.
- After T005 and T006 establish the reveal, T007 can be reviewed independently for Chakra
  styling within the same implementation boundary.
- T014 and T015 can run in parallel after implementation is complete.

## Parallel Example: Setup

```text
Task: T001 Confirm the home-page entry point in pages/index.tsx and components/landing/index.tsx
Task: T002 Confirm Chakra UI and Framer Motion versions in package.json
```

## Parallel Example: Polish

```text
Task: T014 Review the landing-hero UI contract
Task: T015 Run the quickstart manual validation guide
```

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 setup checks.
2. Complete Phase 2 shared content and state definitions.
3. Complete Phase 3 User Story 1.
4. Stop and manually validate the animated introduction against the quickstart scenarios.

### Incremental Delivery

1. Add User Story 1 for the animated, stable introduction.
2. Add User Story 2 for the sequenced CTA.
3. Add User Story 3 for responsive and reduced-motion behavior.
4. Run the final UI-contract and quickstart reviews.

## Notes

- Every task includes a concrete repository path and follows the required checklist format.
- No automated test tasks are included.
- Keep implementation limited to `components/landing/index.tsx` unless a concrete need
  emerges during implementation.
