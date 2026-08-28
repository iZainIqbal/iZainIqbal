# Portfolio Improvement Prompt

Act as a senior product designer, frontend engineer, UX strategist, accessibility specialist, and conversion consultant. Improve the React portfolio at `/Users/zain/ana/gn/iZainIqbal` into a premium, credible engineering portfolio for Zain Iqbal.

The portfolio must communicate who Zain is, what he builds, who he helps, why his experience is credible, and what the visitor should do next. Prioritize professional positioning, project credibility, visual hierarchy, conversion, accessibility, performance, and responsive behavior.

## Operating model: one section per iteration

Do not redesign the entire site in one pass. For each iteration:

1. Inspect the architecture, routes, components, data, assets, styling, tests, SEO, and GitHub Pages configuration.
2. Inspect the rendered deployed site with browser tooling when available. Capture the relevant section at desktop, tablet, and mobile widths.
3. Diagnose what works, what is weak, what feels generic, what harms credibility or conversion, and what should remain unchanged.
4. Rank findings as P0 (critical), P1 (high impact), P2 (refinement), or P3 (nice to have).
5. Select exactly one section with the highest expected impact.
6. Modify only that section and the smallest necessary set of files.
7. Run build, tests, browser validation, responsive checks, accessibility checks, and console-error checks.
8. Report before/after differences, changed files, QA results, and deferred improvements.
9. Stop. Continue only after the user says `NEXT SECTION`.

If browser or network inspection is unavailable, state that limitation explicitly and separate source-code findings from observed rendered findings. Never claim a check passed unless it ran.

## Section isolation

When working on one section, do not modify unrelated sections, routes, footer, shared components, SEO, dependencies, or infrastructure unless they are strictly required for that section. Document unrelated issues under `Deferred improvements`.

## Design direction

Create a restrained, premium dark editorial interface. Prefer strong typography, alignment, whitespace, credible content hierarchy, useful imagery, clear CTAs, and accessible contrast. Avoid excessive gradients, glow, glassmorphism, pills, decorative motion, repeated card patterns, generic SaaS-dashboard styling, and competing CTAs.

Use only claims supported by the existing portfolio. Do not invent clients, metrics, responsibilities, technologies, or outcomes. Keep Handman as the flagship case study where appropriate.

## Implementation constraints

- Preserve React Router behavior, GitHub Pages basename logic, `homepage` casing, SPA fallback, EmailJS, existing assets, lazy loading, and working tests.
- Avoid unnecessary dependencies and architectural rewrites.
- Keep project content in data modules rather than duplicating it in views.
- Add stable keys, semantic HTML, visible focus states, accessible names, and reduced-motion behavior.
- Ensure mobile layouts work at 320px, 375px, 768px, 1024px, and 1440px.

## QA report format

Return:

1. Selected section
2. Evidence-based problems
3. Why they matter
4. Changes made
5. Files changed
6. Build result
7. Existing test result
8. New/modified test result
9. Browser/Playwright result
10. Responsive result
11. Accessibility result
12. Console errors and warnings
13. Before vs after
14. Deferred improvements
15. Recommended next section

End after one section and wait for `NEXT SECTION`.
