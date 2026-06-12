# Motion — Guidelines Premium

## Principles
- Intention: every motion communicates purpose (feedback, transition, attention).
- Restraint: prefer subtlety and elegance over excessive motion.
- Naturalness: prefer easing and springs that resemble physical motion.

## Scale
- Micro (press, ripple): 60–120ms
- Interface (toasts, tooltips, hover): 120–260ms
- Navigation & content transitions: 260–480ms
- Story / hero animations: 480–900ms

## Easings
- Entrance: cubic-bezier(0.22, 1, 0.36, 1)
- Exit: cubic-bezier(0.33, 1, 0.68, 1)
- Spring: stiffness 200–400, damping 24–40

## Patterns
- Reveal: translateY(8–16px) + opacity 0 → 1
- Emphasis: scale 1 → 1.02 with shadow bloom
- Navigation: shared-axis transitions + crossfade

## Accessibility
- Respect `prefers-reduced-motion` by providing reduced-duration or static alternatives.

## Export & Handoff
- For Lottie: export vector layers from After Effects via Bodymovin; name layers clearly.
- For Claude/AI-driven motion: provide tokens, keyframes, SVG layers, easing and duration tokens.
