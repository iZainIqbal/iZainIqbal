# External Link Audit — 2026-08-28

Every external URL in `src/` was checked with `curl -L` (browser user-agent).
Statuses below are the raw HTTP results from that run.

## Broken → fixed in this pass

| Old URL | Status | Fix |
|---|---|---|
| metavizai.com/case-study/wellness-accountability-app-… | 404 | → `/case-study/fitness-wellness/wellness-and-accountability-app` (200) |
| metavizai.com/case-study/woocommerce-based-grocery-delivery-app-… | 404 | → `/case-study/e-commerce-retail/rawteen-app` (200) |
| metavizai.com/case-study/snap-and-shop-transforming-mobile-commerce-… | 404 | → `/case-study/e-commerce-retail/snap-and-shop-online-store` (200) |
| metavizai.com/case-study/ai-apex-personalized-fitness-… | 404 | → `/case-study/sports-fitness/ai-apex-app` (200) |
| rawteen.com | 000 (TLS connection reset; DNS resolves to Cloudflare) | "Visit Website" link removed; case study is now the primary CTA |
| cal.com/zain-iqbal-dev | 403 (unverifiable; code carried a `TODO: replace with your actual link` comment) | Booking CTA replaced; restore only once a real booking page exists |

## Verified working

| URL | Status |
|---|---|
| play.google.com/store/apps/details?id=ch.handyman.app | 200 |
| github.com/iZainIqbal/chatbot | 200 |
| youtube.com/shorts/XoDwdQPJYMU | 200 |
| metavizai.com/case-study/service-provider-marketplace/ai-field-service-saas-… (official Handman case study, now linked from /handman) | 200 |

## Not verifiable by script (login walls) — check by hand occasionally

- Both LinkedIn post links in `olderProjects` (QR Scanner, Chrono Chase)
- instagram.com/raw.teen

## Note on removed content

The /handman page previously published internal business-plan figures that do
not appear in the public Metaviz case study (ARR target, Year-1 customer
targets, "scrapeable craftsman corpus", "Annex B" codename, CHF savings vs
named competitors). These were removed and replaced with product facts from
the public case study. Recoverable from git history if ever needed.
