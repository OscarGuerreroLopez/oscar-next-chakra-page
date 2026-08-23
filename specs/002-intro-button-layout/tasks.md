---

description: "Implementation tasks for the anchored intro-page button layout"
---

# Tasks: Intro Button Layout

**Input**: Design documents from `/specs/002-intro-button-layout/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: No automated test tasks are included. Validation is manual only, per the
project constitution.

**Organization**: Tasks are grouped by user story and ordered by dependency.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the actual intro route and CTA implementation boundaries.

- [X] T001 [P] Confirm the `/intro` route and intro composition in `pages/intro/index.tsx` and `components/home/intro.tsx`
- [X] T002 [P] Confirm the existing “More about me” label, `/about` destination, and Chakra link behavior in `components/custom/linkButton.tsx`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the anchored content and reserved CTA-area behavior before story work.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T003 Identify all layout changes that can recenter or shift the intro content when the CTA mounts or changes visibility in `components/home/intro.tsx`
- [X] T004 Define the reserved CTA area and anchored heading/descriptive-text boundary using Chakra layout primitives in `components/home/intro.tsx`

**Checkpoint**: The layout boundary prevents CTA visibility changes from changing the intro content position.

---

## Phase 3: User Story 1 - Show the Intro Button Without Shifting Content (Priority: P1) 🎯 MVP

**Goal**: Show the existing “More about me” CTA directly below the intro text without moving the heading or descriptive text.

**Independent Test**: Open `/intro` in a fresh session and observe before and after CTA availability; verify the intro content block remains anchored and the CTA occupies the reserved area directly below the text.

### Implementation for User Story 1

- [X] T005 [US1] Reserve the CTA’s required vertical space from the initial state while keeping the unavailable area visually empty in `components/home/intro.tsx`
- [X] T006 [US1] Render the existing “More about me” CTA inside the reserved area directly below the intro text while preserving its `/about` destination in `components/home/intro.tsx`
- [X] T007 [US1] Preserve keyboard reachability and visible focus indication for the Chakra link button in `components/custom/linkButton.tsx`
- [X] T008 [US1] Keep the heading and descriptive text anchored during the CTA mount-time visibility transition in `components/home/intro.tsx`

**Checkpoint**: User Story 1 is independently reviewable with no vertical text shift, overlap, or CTA behavior regression.

---

## Phase 4: User Story 2 - Use the Intro Page Across Screen Sizes (Priority: P2)

**Goal**: Keep the anchored intro content and reserved CTA area readable and contained on narrow and wide screens.

**Independent Test**: Repeat the intro-page review at representative mobile and desktop viewport sizes, including wrapped text, and verify the content block and CTA remain readable and non-overlapping.

### Implementation for User Story 2

- [X] T009 [US2] Apply Chakra responsive spacing, sizing, and alignment so the CTA remains directly below wrapped or unwrapped text in `components/home/intro.tsx`
- [X] T010 [US2] Verify refreshes and CTA mount-time appearance during reading preserve the anchored content block without clipping, horizontal scrolling, or overlap in `components/home/intro.tsx`

**Checkpoint**: Both user stories remain usable across supported viewport sizes.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Complete manual contract review and focused cleanup without adding tests.

- [X] T011 [P] Review the implementation against `specs/002-intro-button-layout/contracts/intro-button.md`
- [X] T012 [P] Review the manual scenarios in `specs/002-intro-button-layout/quickstart.md`
- [X] T013 Clean up naming, formatting, and unused imports in `components/home/intro.tsx` and `components/custom/linkButton.tsx`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; confirms the source boundaries.
- **Foundational (Phase 2)**: Depends on Setup; blocks all user stories.
- **User Story 1 (Phase 3)**: Depends on Foundational; delivers the MVP layout fix.
- **User Story 2 (Phase 4)**: Depends on User Story 1’s anchored layout.
- **Polish (Phase 5)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Depends only on Phase 2.
- **User Story 2 (P2)**: Depends on User Story 1’s reserved CTA area.

### Parallel Opportunities

- T001 and T002 can run in parallel because they inspect separate boundaries.
- T011 and T012 can run in parallel after implementation is complete.
- Same-file implementation tasks remain sequential.

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup and Foundational phases.
2. Implement the reserved CTA area and anchored intro content for User Story 1.
3. Manually review the no-layout-shift behavior against `quickstart.md`.

### Incremental Delivery

1. Deliver the anchored CTA layout for User Story 1.
2. Confirm responsive and wrapped-text behavior for User Story 2.
3. Complete contract and manual reviews.

## Notes

- Every task includes a concrete repository path.
- No automated tests, test suites, or new dependencies are planned.
- Use Chakra UI for layout and styling; keep `pages/intro/index.tsx` unchanged.
