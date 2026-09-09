# PageTurn roadmap

## In progress
- [x] Replace fictional book titles with real audiobooks (real ISBNs, Open Library covers) in `src/lib/reviews.ts`
- [ ] Rewrite long-form review bodies (`src/lib/longform/batch1–4.ts`) for the real titles, 900–1,400 honest words each
- [ ] Fix cover aspect ratio on review cards / detail page (covers are portrait, not square)

## Affiliate agreement compliance
- [ ] Newsletter: visible opt-in wording, unsubscribe promise, physical postal address (no PO box) in emails
- [ ] Confirm no Audiobooks.com-sourced or edited cover art / audio samples anywhere on the site
- [ ] Keep reviews limited to titles Audiobooks.com actually carries

## Owner tasks (not code)
- [ ] Make info@pageturn.cloud receive mail
- [ ] Apex domain pageturn.cloud finish propagating
- [ ] Submit W-8BEN (foreign individual) after approval

## SEO — done (September 2026)
- [x] Sitemap generated from data at build time (`scripts/generate-sitemap.mjs`, runs on `prebuild`). The old hand-written `public/sitemap.xml` still advertised 16 renamed review URLs, so every review link submitted to Google was a 404. Now 62 URLs, all verified 200.
- [x] Central SEO helper `src/lib/seo.ts` — canonical, full Open Graph + Twitter, JSON-LD builders. Every route goes through it, so no page can ship without an `og:image` again.
- [x] Fixed invalid `BreadcrumbList` schema (was emitting relative `item` values, which Google discards).
- [x] `Organization` + `WebSite` schema emitted once at the root; homepage retyped from `Blog` to `CollectionPage` linking the four hubs.
- [x] New page type: `/compare/$slug` — 7 head-to-head comparisons (`src/lib/versus.ts`). "x vs y" is its own search intent and needs its own URL; it was previously only a Q&A snippet inside service pages.
- [x] New page type: `/best/$slug` — 11 roundups (`src/lib/roundups.ts`), 4 commercial + 7 audiobook lists, with `ItemList` + `FAQPage` schema and a visible methodology section.
- [x] Split `/guides` into `/guides/$slug` — 5 guides (`src/lib/guides.ts`). Three guides previously shared one URL and competed for three different intents.
- [x] Internal linking: header nav, footer "Popular" column, homepage commercial section, and `RelatedLinks` blocks wiring reviews → roundups → comparisons → service reviews → trial CTA.

## SEO — next
- [ ] Submit the new sitemap in Google Search Console and request indexing for `/best/*` and `/compare/*` first — those are the money pages.
- [ ] Genre roundups are inventory-limited: sci-fi, memoir and thriller have only 3 reviewed titles each. Publishing more reviews in those genres deepens the roundups automatically (they pull via `relatedGenres`).
- [ ] Consider per-review "where to listen" availability so review pages can convert as well as the service pages do.
- [ ] Keyword volumes were never verified — both the Ahrefs and Semrush MCP integrations were out of API quota. Priorities below are reasoned from SERP inspection, not from measured volume/difficulty.
