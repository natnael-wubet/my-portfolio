# Natnael Wubet · portfolio

A single-page portfolio built with Astro and rendered twice at build time:
English at [`/`](https://naty-wubet.web.app/) and Amharic at `/am/`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve dist/ locally
```

## What is in here

- **Two static locales.** `/` and `/am/` are separate pre-rendered pages, not a
  client-side dictionary swap. Each ships its own `<html lang>`, fonts,
  `hreflang` pair and `og:locale`; the language switcher keeps the current
  section (`#work`, `#mind`, …) when it crosses over.
- **Dark, light and system themes.** The preference is applied before first
  paint from `localStorage` (`cv:theme`), so there is no flash. Five accent
  colours (`lime`, `cyan`, `amber`, `rose`, `violet`) each have a separate
  light-mode value, and WebGL scenes re-read the palette when either changes.
- **Build-time truth.** Every live deployment URL is requested while the site
  is built; the status badges, latency and "N / M responding" line are the
  real HTTP results. Archived projects are never probed. They link to source.
- **Command palette.** `⌘K` / `Ctrl-K` or `/` opens a fuzzy palette over
  deployments, repositories, awards, certifications, disciplines and display
  actions. Ambiguous `action:` links are dispatched as DOM events, not
  navigation. Past three characters the palette also searches the page's own
  prose: it indexes the rendered sections, shows two-line excerpts with the
  matched words marked, and on selection scrolls to the paragraph and tints
  every occurrence with the CSS Custom Highlight API.
- **Tailored brief.** The page reconfigures itself for the reader: choose a
  lens (product, games, security, protocols, founding) and it composes a
  one-page brief from the same data it renders: selected live deployments,
  repositories, awards, stack, and an argument for that team. Copy it as
  Markdown, download `.md`, share it as `?brief=<lens>`, or print it: the
  print stylesheet strips the site and leaves the brief on white.
- **Fit check.** Paste a role description and the page scores its own evidence
  against it: role coverage, matched signals, honest gaps, the closest lens,
  and five concrete pieces of proof drawn from deployments, repositories and
  awards. It runs entirely in the browser, nothing is uploaded, and the
  result can be copied as a short fit note or used to open the matching brief.
- **Hero specimen.** The opening screen carries the photogrammetry bust from
  the previous portfolio, but with a job: the point-field body of the
  instrument contracts as the scan arrives, and a world-space seam divides the
  real surface (left) from a hologram (right). The pointer turns the head and
  drags the seam; `S` goes full hologram. Two plates from the old site parallax
  behind it, and the whole scene re-tints with the theme and accent. Phones
  keep the lighter point-field body instead of paying for the 900 KB scan.
- **Machine-readable record.** The page is also a public file: `/profile.json`
  is a canonical, versioned profile with its own JSON Schema; `/llms.txt` and
  `/llms-full.txt` are an index and full text for LLM crawlers; `/resume.md`
  is a plain Markdown CV; `/sitemap.xml` and `robots.txt` point at all of it.
  Every file is generated from the same `src/data` modules as the page, and
  the JSON-LD `Person`/`WebSite`/`ProfilePage` graph is generated from the
  same profile. The Connect section exposes the files and can copy the whole
  JSON to the clipboard.
- **Shareable views.** "Copy view link" encodes the current theme, accent and
  section in `?theme=&accent=#…`. The link applies its palette before first
  paint and remembers it, so a shared URL reproduces exactly what was seen.
- **Diagnostics (`D`).** A drawer that measures this page in the visitor's
  browser: TTFB, DOM ready, load, transfer weight, request count, viewport,
  DPR, connection, JS heap, scroll depth, an Addis Ababa clock and a live FPS
  sparkline. The build line is real provenance: the git commit and timestamp
  baked into the HTML by `src/lib/build.ts` at build time.
- **X-ray (`I`).** Renders the scaffolding: the 12-column shell, an 8px
  baseline, a dashed outline and id label for every region, and a strip of
  every colour token read live from the cascade. It repaints when the theme
  or accent changes and is remembered per tab, never for new visitors.
- **Keyboard layer.** `T` cycles theme, `A` cycles accent, `D` opens
  diagnostics, `I` toggles X-ray, `B` opens the tailored brief, `F` opens the
  fit check, `S` toggles the hero specimen scan, `H` jumps to the top, `?`
  opens the shortcut sheet. Inside the palette: arrows to move, `Enter` to
  run, `Esc` to close.
- **One event bus.** Cross-component actions are DOM events on `document`:
  `opt:theme`, `opt:accent`, `opt:lang`, `opt:help`, `opt:diag`, `opt:xray`,
  `opt:brief`, `opt:fit`, plus `ui:toast` for the single aria-live status line.
- **Small enhancements.** Hero stats count up when first seen, the contact
  terminal copies any answer on click (or with `copy`), and the repository
  list filters and sorts in place.
- **Amharic typography.** `Noto Sans Ethiopic` is loaded only on `/am/` and
  takes over the display stack there. Because Geʽez script does not use
  letter-spacing the same way Latin does, tracking is flattened and small
  labels are floored to a readable size under `[lang="am"]`.

## Project map

```text
src/
├── components/       # Nav, Hero (specimen + instrument), Deployments, Repos,
│                     # Origin, Mind, Vault, Awards, Photos, Connect, Footer,
│                     # CommandPalette,
│                     # Shortcuts, DisplayOptions, Instrument (diagnostics +
│                     # X-ray + toast), Brief (tailored one-pager),
│                     # Fit (role matcher), Site
├── data/             # English source of truth for deployments and prose
├── i18n/
│   ├── en.ts         # chrome keys, the typed dictionary shape
│   ├── am.ts         # Amharic chrome, typed against en
│   ├── data.ts       # Amharic prose for src/data, keyed by English string
│   └── index.ts      # makeT(), rich(), td(), locales
├── layouts/Base.astro
├── lib/
│   ├── build.ts      # git commit + timestamp captured at build time
│   ├── fit.ts        # pure role matcher, scoring and evidence selection
│   ├── lenses.ts     # the five hiring lenses shared by brief and fit
│   ├── profile.ts    # canonical public record, built from src/data
│   ├── profile-schema.ts  # JSON Schema for /profile.json
│   ├── site.ts       # canonical URL, identity and contact facts
│   └── structured-data.ts # schema.org graph from the profile
├── pages/            # index.astro (en), am/index.astro (am) and the
│                     # machine endpoints: profile.json, profile.schema.json,
│                     # llms.txt, llms-full.txt, resume.md, sitemap.xml
├── scripts/options.ts
└── styles/global.css # theme + accent tokens, base styles
```

Components receive `t` as a prop; rendering is build-time, so there is no
shared mutable i18n state. `td(t, text)` translates data-file prose and falls
back to the English source string when a translation is missing. Adding a
repository never breaks a locale.

Dictionary strings support the tiny markup rendered by `rich()`:

| Syntax     | Renders as                        |
| :--------- | :-------------------------------- |
| `{{text}}` | accent-coloured span              |
| `[[text]]` | bright (chalk) span               |
| `<<text>>` | muted (fog) span                  |
| `\n`       | line break                        |

Everything else is HTML-escaped, so dictionary content can never inject markup.

## Machine endpoints

| Path                   | Type        | What it is                                        |
| :--------------------- | :---------- | :------------------------------------------------ |
| `/profile.json`        | JSON        | Canonical record: basics, projects, repos, awards |
| `/profile.schema.json` | JSON Schema | The shape `/profile.json` validates against       |
| `/llms.txt`            | text        | Concise, linked index for LLM crawlers            |
| `/llms-full.txt`       | text        | Complete profile as Markdown                      |
| `/resume.md`           | Markdown    | Plain-text CV                                     |
| `/sitemap.xml`         | XML         | Both locales with hreflang alternates             |
| `/robots.txt`          | text        | Crawler policy, sitemap and llms.txt pointers     |

All of them are rendered by `src/lib/profile.ts` from the same `src/data`
modules the page uses, so adding a deployment or award updates every format
and the JSON-LD graph in lockstep. `buildProfile()` stamps the record with the
git commit and build timestamp; `profile.schema.json` is intentionally strict
at the root, so accidental shape drift is visible. The Connect section renders
the same files as a panel (`#machine`), and the palette can copy the profile.

## Deployment

`npm run build` produces plain static files. The only network dependency is
the optional deployment health probe during the build; failures are swallowed
and surface as an `unknown` badge, never as a broken build.
