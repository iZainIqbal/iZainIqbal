# Portfolio UI/UX Audit Report

Date: 2026-08-28

## Scope

Reviewed the React source, route structure, assets, content data, styles, tests, SEO configuration, and production build. The deployed URL was also attempted for comparison, but network/DNS access was unavailable in the audit environment; rendered-site observations should therefore be confirmed with browser screenshots before a later iteration.

## Current strengths

- Clear technical identity around Flutter, full-stack development, and GenAI.
- Strong flagship project material in Handman.
- Useful proof points: production apps, payment integrations, countries served, and professional experience.
- Route-level lazy loading and GitHub Pages SPA fallback are already implemented.
- Skip link, semantic `main`, route metadata, image dimensions, lazy images, and visible broken-image fallback are present.
- Contact form includes EmailJS configuration validation and a honeypot field.

## Ranked findings

| Priority | Area | Finding | Impact |
| --- | --- | --- | --- |
| P0 | Hero | The first screen leads with a name and a long technical headline rather than a concise value proposition. | Visitors need too long to understand the offer. |
| P0 | Hero | “Hire Me” and “Email Me Directly” compete without a clear primary conversion path. | Weakens action clarity and conversion. |
| P1 | Hero | Proof is placed in a low-emphasis metrics strip and has limited visual relationship to Zain or the work. | Credibility is present but not immediately felt. |
| P1 | Projects | Case studies are visually rich but text-heavy and require considerable scanning. | Strong work is harder to evaluate quickly. |
| P1 | Navigation | Seven links create a dense header and Certificates is not included despite having a route. | Navigation hierarchy is unclear. |
| P1 | Mobile menu | No Escape handling, focus return, or body scroll lock is implemented. | Keyboard and mobile usability risk. |
| P1 | Contact | Visible labels, inline validation, and live status guidance are limited. | Increases form friction and uncertainty. |
| P2 | Motion | Several animations and transforms are not explicitly disabled under reduced-motion preferences. | Accessibility and comfort issue. |
| P2 | Content | Date language varies between “in 2025” and “since Sep 2025”; positioning alternates between Flutter and React Native. | Creates avoidable credibility ambiguity. |
| P2 | SEO | Base metadata is strong, but route-level social previews and richer project schema are limited. | Sharing and discoverability can improve. |

## Highest-impact section selected

### Hero

The Hero is the best first intervention because it controls the first impression, communicates positioning, and directs every visitor toward work or contact. It can be improved without touching the rest of the information architecture.

## Work completed in this iteration

Only `src/components/home.js` was changed.

- Replaced the generic name-first presentation with a direct value proposition: “Production mobile and AI products for ambitious startups.”
- Added a clear availability/status indicator.
- Reduced CTA competition to `Start a project` and `View selected work`.
- Added a proof panel using the existing profile image and validated portfolio metrics.
- Improved desktop composition with a two-column hero and preserved mobile stacking.
- Replaced hover scaling on primary actions with a calmer color/focus treatment.
- Added accessible decorative-image handling and `aria-hidden` to non-content icons.
- Kept the existing routes, assets, deployment behavior, and contact flow unchanged.

## QA status

- Production build: BLOCKED — `npm run build` reached ESLint but failed on a pre-existing syntax error in `src/components/services.js`: an unclosed `<Reveal>` element at line 190. This file was already modified outside this Hero iteration and was intentionally left unchanged.
- Existing tests: BLOCKED — CRA/Jest exited because Watchman could not change permissions for `/Users/zain/.local/state/watchman`; this is an environment issue, not an application assertion failure.
- New tests: NOT APPLICABLE — the Hero has no interaction requiring a new test in this iteration.
- Playwright/browser validation: NOT RUN — browser tooling/network access was unavailable.
- Responsive validation: SOURCE REVIEW ONLY — layout uses responsive Tailwind grid and wrapping controls; screenshot confirmation is deferred.
- Accessibility validation: SOURCE REVIEW ONLY — semantic heading, focus ring, decorative image, and icon labeling were reviewed; automated audit is deferred.
- Console errors: NOT VERIFIED — browser runtime was unavailable.

## Deferred improvements

- Simplify and improve mobile navigation behavior.
- Restructure Projects into more scannable case-study cards.
- Improve contact form labels, validation, and asynchronous status announcements.
- Add reduced-motion overrides for all decorative animation and transforms.
- Unify dates and role positioning from a single data source.
- Revisit route-level social metadata and project structured data.
- Confirm the new Hero through screenshots at 320px, 375px, 768px, 1024px, and 1440px.

## Recommended next section

Projects — specifically the featured Handman case-study presentation.
