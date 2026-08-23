# Intro Button UI Contract

## Purpose

Define the observable behavior of the existing CTA on the intro page.

## Content Contract

- The intro page preserves its existing text.
- The CTA preserves its existing “More about me” label, action, and `/about` destination.
- The CTA appears directly below the complete intro text after the intro component mounts.

## Layout Contract

- Space for the CTA is reserved before the CTA becomes visible.
- The heading and descriptive text remain anchored when the CTA appears.
- The surrounding intro content block is not recentered or vertically reflowed when the CTA
  changes visibility.
- The CTA does not overlap the text or other page content.
- The text and CTA remain contained without horizontal scrolling on narrow and wide screens.

## Accessibility Contract

- The CTA remains unavailable to keyboard and pointer interaction during the initial render
  and until its mount-time visibility transition completes.
- Once available, the CTA remains keyboard reachable and has a visible focus indication.
