# Changelog

## Portfolio revamp

The homepage now makes an argument instead of listing everything it can.

### Structure

- Hero: one positioning line, a short body, and two CTAs (featured work, contact). The engines-from-scratch claim leads, with branchless paths and CPU-first work as craft chips.
- Signature strip: the machine-readable record (profile JSON, LLM index, Markdown CV) sits directly under the hero instead of in the footer.
- Selected projects: a carousel of the four strongest projects (Big XO, GameO, Cite-Chain, Ticketye). It advances on its own with a dwell bar, pauses on hover, focus, off-screen or hidden tab, and never autoplays under reduced motion. Named tabs, arrows, swipe and Home/End work.
- Featured work: three cards with one outcome, one metric, stack tags and a case-study affordance. No paragraph descriptions.
- Repositories, read closely: ConAnim leads, tagged `branchless · no if statements`.
- Origin, interior, vault, record, photos: unchanged order, compressed copy.
- Live status: the remaining live projects as a compact table with human status labels and response times. Green under 300ms, amber under 800ms, red beyond. The measurement is build-time and the tooltip says so.
- Archive: the archive button opens every project in a large dialog with category filters and counts. `/archive` and `/am/archive` remain for direct links and crawlers.

### Content

- Case studies for Big XO, GameO, Ticketye and Cite-Chain in both locales: TL;DR, problem, approach, tradeoffs, outcome, what I would do differently, prev/next and a back link. Every other project keeps its record.
- Amharic parity for every new UI string, the four carousel outcomes, and the four case studies.
- No user-facing "dossier", "Scroll Section NN" or "Build-time probe" remains.
- The downloadable CV now says 13 years, matching the site. The Canva export has a real text layer, so the single glyph and the document title were patched in place instead of rebuilding the PDF.

### Build and correctness

- `tier` on each deployment drives the homepage. `src/lib/content-checks.ts` fails the build when a hero or featured entry is missing its tagline, outcome, metric or screenshot, and warns on `TODO(metric)`.
- One row builder (`src/lib/work.ts`) feeds the carousel, cards, tables, archive and dialog, so a project cannot appear differently in two places.
- Canonical URLs and hreflang pairs for `/` and `/archive` in both locales. Sitemap lists all four routes. OG image URLs are absolute.
- Phone layout no longer scrolls sideways: inactive carousel slides are clipped, the language switch moves into the menu, and the diagnostics chip moves off the hero CTA column.

### Performance and accessibility

Measured with Lighthouse 13 against `astro preview`, production build.

| | Perf | A11y | Best practices | SEO | LCP | TBT |
| --- | --- | --- | --- | --- | --- | --- |
| Mobile before | 48 | 97 | 100 | 100 | 5.2s | 2170ms |
| Mobile after | 94 | 100 | 100 | 100 | 1.5s | 280ms |
| Desktop before | 59 | 97 | 100 | 100 | 0.9s | 24670ms |
| Desktop after | 98 | 100 | 100 | 100 | 0.5s | 120ms |

What changed:

- Smooth scrolling (Lenis) only starts on a fine pointer at 768px or wider. It was keeping a frame loop alive on every device.
- The hero scene drops to one pixel per CSS pixel, no MSAA, 2000 points and a 30fps cap on phones.
- The Google Fonts stylesheet loads off the critical path with a `noscript` fallback, so it no longer blocks first paint.
- The hero lead paragraph no longer animates in; it is the largest paint on the page.
- The Three.js CV ring loads only when it approaches the viewport.
- `--color-line-2` is no longer used as type, project accents are mixed toward the text colour where they are type, and the light accent tokens were darkened. The light theme now clears 4.5:1 everywhere.
- Signature links are 24px tall targets, and the language switch announces its visible label.

The mobile rows are like for like: both runs used headless Chrome's software
WebGL (SwiftShader). A repeat mobile run with the machine's GPU scored 94, which
is inside run-to-run variance. The desktop before figure used SwiftShader too,
where a 1440px hero costs far more than it does on any real GPU; the desktop
after figure uses the GPU through ANGLE. Everything else in the config matches.

### Open items

- `TODO(metric)` for Ticketye, Big XO and Cite-Chain. Real numbers must come from the projects, not from this repository.
- The architecture claims in `src/data/caseStudies.ts` are a plausible reconstruction and still need the author's review.
- Desktop CLS is 0.025, from the web font swapping in after first paint. Green, but a self-hosted font with matched fallback metrics would remove it.
