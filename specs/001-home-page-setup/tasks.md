---

description: "Implementation tasks for the slower animated home-page hero"
---

# Tasks: Home Page Setup

**Input**: Design documents from `/specs/001-home-page-setup/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: No automated test tasks are included. Validation is manual, per the project
constitution.

**Organization**: Tasks are grouped by user story and ordered by dependency.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the existing implementation boundary and available dependencies.

- [X] T001 [P] Confirm the home-page entry point and current hero reveal timing in `pages/index.tsx` and `components/landing/index.tsx`
- [X] T002 [P] Confirm Chakra UI and Framer Motion versions in `package.json` and record the current reveal duration for comparison

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared pacing and completion contract before story-specific work.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T003 Define the slower reveal timing as approximately half the current speed and approximately twice the current duration in `components/landing/index.tsx`
- [X] T004 Preserve the finalized copy, ordered message units, `/intro` destination, and reveal completion boundary in `components/landing/index.tsx`

**Checkpoint**: Shared hero content, pacing, and sequencing contract are ready for story work.

---

## Phase 3: User Story 1 - Experience the Slower Animated Introduction (Priority: P1) 🎯 MVP

**Goal**: Make the existing readable text-unit reveal progress at approximately half its current speed while retaining the stable final message.

**Independent Test**: Open `/` in a fresh session and observe the introduction through completion; verify each unit enters from the right in reading order, the reveal is approximately twice as long as before, and the final message is readable and stable.

### Implementation for User Story 1

- [X] T005 [US1] Adjust the staged text-unit delay and transition timing to approximately twice the current reveal duration in `components/landing/index.tsx`
- [X] T006 [US1] Verify the slower animation preserves right-to-left entrance, left-to-right reading order, legibility, and stable completion in `components/landing/index.tsx`
- [X] T007 [US1] Preserve the existing background, contrast, typography hierarchy, responsive sizing, alignment, and overflow-safe Chakra styling in `components/landing/index.tsx`

**Checkpoint**: User Story 1 is independently observable with a slower, complete, readable introduction.

---

## Phase 4: User Story 2 - Continue to the About Section (Priority: P1)

**Goal**: Keep the CTA sequenced after the slower introduction without premature keyboard or pointer access.

**Independent Test**: Observe `/` before, during, and after the slower reveal; verify the CTA is unavailable until completion, appears afterward, and navigates to `/intro`.

### Implementation for User Story 2

- [X] T008 [US2] Keep the “Learn more about me” CTA hidden or unavailable while the slower reveal is pending or active in `components/landing/index.tsx`
- [X] T009 [US2] Reveal the CTA with a clear post-introduction transition after the slower reveal completion event in `components/landing/index.tsx`
- [X] T010 [US2] Preserve the CTA label, keyboard focus behavior, accessible actionability, and `/intro` destination in `components/landing/index.tsx`

**Checkpoint**: User Stories 1 and 2 work together with CTA timing tied to the slower completion boundary.

---

## Phase 5: User Story 3 - Use the Page Comfortably on Different Screens (Priority: P2)

**Goal**: Keep the slower hero readable, contained, and accessible across viewports and reduced-motion preferences.

**Independent Test**: View `/` on narrow and wide screens and with reduced motion enabled; verify the message and CTA remain readable, contained, non-overlapping, and usable.

### Implementation for User Story 3

- [X] T011 [US3] Apply and verify responsive sizing, spacing, alignment, and overflow-safe layout rules for the slower reveal in `components/landing/index.tsx`
- [X] T012 [US3] Ensure reduced-motion preferences establish the complete message and CTA immediately without disruptive movement in `components/landing/index.tsx`
- [X] T013 [US3] Ensure refreshes and viewport changes during the slower reveal return to a coherent state without clipping or CTA overlap in `components/landing/index.tsx`

**Checkpoint**: All three user stories remain reviewable across target viewport sizes and motion preferences.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Validate the pacing change and clean up the focused implementation.

- [X] T014 [P] Review the final behavior against `specs/001-home-page-setup/contracts/landing-hero.md`
- [X] T015 [P] Update the manual timing and behavior scenarios in `specs/001-home-page-setup/quickstart.md` if implementation-specific observations changed
- [X] T016 Run the manual validation scenarios in `specs/001-home-page-setup/quickstart.md` against `http://localhost:3000/`
- [X] T017 Clean up naming, formatting, and unused imports in `components/landing/index.tsx`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; confirms the source boundary and current timing.
- **Foundational (Phase 2)**: Depends on Setup; blocks all user stories.
- **User Story 1 (Phase 3)**: Depends on Foundational; delivers the MVP pacing change.
- **User Story 2 (Phase 4)**: Depends on User Story 1’s completion boundary.
- **User Story 3 (Phase 5)**: Depends on the combined hero and CTA behavior.
- **Polish (Phase 6)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Depends only on Phase 2.
- **User Story 2 (P1)**: Depends on User Story 1’s reveal completion state.
- **User Story 3 (P2)**: Depends on the completed visual and CTA behavior from User Stories 1 and 2.

### Parallel Opportunities

- T001 and T002 can run in parallel because they are read-only checks of separate files.
- T014 and T015 can run in parallel after implementation is complete.
- Tasks in different story phases can be delegated only after their stated phase dependencies are complete; same-file edits remain sequential.

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 Setup.
2. Complete Phase 2 Foundational pacing and sequencing work.
3. Complete Phase 3 User Story 1.
4. Stop and manually validate the slower introduction against `quickstart.md`.

### Incremental Delivery

1. Add the slower User Story 1 reveal.
2. Confirm User Story 2 CTA sequencing remains correct.
3. Confirm User Story 3 responsive and reduced-motion behavior.
4. Run final contract and quickstart reviews.

## Notes

- Every task includes a concrete repository path.
- No automated tests or new dependencies are planned.
- Keep implementation limited to `components/landing/index.tsx` unless a concrete need emerges.
