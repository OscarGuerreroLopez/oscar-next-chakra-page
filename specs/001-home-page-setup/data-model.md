# Data Model: Home Page Setup

This feature has no persisted data or external data entities. Its model is limited to
the presentation state needed to coordinate the hero animation and CTA.

## Landing Hero

Represents the static opening content shown on the home page.

- `introductoryMessage`: “Hello, Oscar Guerrero here. I am a senior software engineer
  with more than 20 years of experience in backend and cloud systems.”
- `messageUnits`: ordered readable text groups used for the visual reveal
- `revealState`: `pending`, `revealing`, or `complete`
- `reducedMotion`: whether the visitor requests reduced motion
- `ctaState`: `hidden` or `visible`
- `ctaLabel`: “Learn more about me”
- `ctaDestination`: the existing `/intro` route

## State Transitions

```text
pending -> revealing -> complete
    \-> complete when reduced motion is requested

ctaState: hidden -> visible only after revealState = complete
```

## Validation Rules

- Text groups MUST retain their original reading order in the final message.
- `ctaState` MUST remain `hidden` while `revealState` is `pending` or `revealing`.
- The final message MUST be visible and stable when `revealState` is `complete`.
- Reduced-motion mode MUST reach `complete` without requiring animated movement.
- The CTA destination MUST resolve to an existing page or confirmed route before delivery.
