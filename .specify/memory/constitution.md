<!--
Sync Impact Report
- Version change: unratified scaffold -> 1.0.0
- Modified principles: five template placeholders -> Clean Code; Simple UX;
  Responsive Design; Minimal Dependencies; Deliberate Delivery
- Added sections: Technology Constraints; Development Workflow
- Removed sections: none
- Follow-up TODOs: Confirm the historical ratification date.
-->

# Oscar Page Constitution

## Core Principles

### I. Clean Code

Code MUST use clear names, small cohesive units, consistent project conventions, and
single-responsibility boundaries. New abstractions MUST solve a demonstrated problem;
duplicated logic MUST be consolidated when it is safe to do so. Rationale: readable,
predictable code keeps this small project easy to change and review.

### II. Simple UX

User flows MUST be understandable without unnecessary steps, controls, or visual noise.
Each screen MUST present a clear primary purpose and provide understandable feedback for
user actions and failures. Rationale: simplicity reduces cognitive load and makes the
page useful to more visitors.

### III. Responsive Design

Interfaces MUST remain usable and legible across supported viewport sizes, including
mobile and desktop layouts. Layouts MUST adapt through intentional spacing, sizing,
typography, and interaction choices; content MUST NOT depend on horizontal scrolling or
device-specific behavior. Rationale: visitors must receive an equivalent experience
regardless of screen size.

### IV. Minimal Dependencies

The project MUST prefer existing platform, Next.js, React, and Chakra UI capabilities
before adding a dependency. A new dependency MUST have a documented need, compatible
license, maintained release, and a materially better cost-benefit than local code.
Dependencies MUST remain aligned with the versions declared in `package.json`.
Rationale: a small dependency surface reduces maintenance, security, and upgrade risk.

### V. Deliberate Delivery

Changes MUST remain narrowly scoped to the requested outcome and MUST preserve existing
behavior outside that scope. Developers MUST NOT add speculative features, broad
refactors, or testing work as part of this constitution. Testing is intentionally
deferred for now and this decision supersedes any generic testing guidance until this
constitution is amended. Rationale: focused delivery keeps decisions reversible while
the project direction is still being established.

## Technology Constraints

The application MUST use Next.js `^16.3.0`, React `18.2.0`, and Chakra UI
`^2.5.2` as declared in `package.json`. React DOM MUST remain on `18.2.0` unless this
constitution is amended. Supporting packages MUST be added only when required by an
approved feature and MUST respect the Minimal Dependencies principle. The project MUST
use Node.js `>=20.9.0` as declared in `package.json`.

## Development Workflow

Work MUST begin with a clear requested outcome and remain within its stated scope.
Reviews MUST check compliance with these principles, especially accessibility,
responsive behavior, dependency justification, and preservation of existing behavior.
No test files, test suites, or testing gates are required at this time; this temporary
policy remains in force until an amendment explicitly changes it. Formatting, linting,
type checking, and build validation MAY be used when relevant to the change, but they do
not override the testing deferral.

## Governance

This constitution supersedes conflicting project guidance. Amendments MUST be proposed
as a change to this file, describe the affected principles and rationale, and update the
Sync Impact Report. Changes MUST preserve the required Markdown structure and MUST pass
the constitution validation checks before adoption.

Versioning follows semantic versioning: MAJOR for backward-incompatible removals or
redefinitions, MINOR for new principles or materially expanded requirements, and PATCH
for clarifications or non-semantic corrections. Every amendment MUST update
`Last Amended` and the version consistently; the original ratification date MUST remain
unchanged.

Each implementation plan and review MUST consider this constitution. Any justified
exception MUST be documented in the relevant plan or review, including scope, rationale,
and expiry or follow-up amendment. The constitution MUST be reviewed whenever the
technology stack, delivery policy, or product direction materially changes.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): confirm historical adoption date | **Last Amended**: 2026-08-22
