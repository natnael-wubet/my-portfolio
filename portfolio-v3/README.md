# Natnael Wubet — portfolio

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
  real HTTP results. Archived projects are never probed — they link to source.
- **Command palette.** `⌘K` / `Ctrl-K` or `/` opens a fuzzy palette over
  deployments, repositories, awards, certifications, disciplines and display
  actions. Ambiguous `action:` links are dispatched as DOM events, not
  navigation.
- **Keyboard layer.** `T` cycles theme, `A` cycles accent, `H` jumps to the
  top, `?` opens the shortcut sheet. Inside the palette: arrows to move,
  `Enter` to run, `Esc` to close.
- **Small enhancements.** Hero stats count up when first seen, the contact
  terminal copies any answer on click (with a live-region toast), and the
  repository list filters and sorts in place.
- **Amharic typography.** `Noto Sans Ethiopic` is loaded only on `/am/` and
  takes over the display stack there. Because Geʽez script does not use
  letter-spacing the same way Latin does, tracking is flattened and small
  labels are floored to a readable size under `[lang="am"]`.

## Project map

```text
src/
├── components/       # Nav, Hero, Deployments, Repos, Origin, Mind, Vault,
│                     # Awards, Photos, Connect, Footer, CommandPalette,
│                     # Shortcuts, DisplayOptions, Site (page composition)
├── data/             # English source of truth for deployments and prose
├── i18n/
│   ├── en.ts         # chrome keys — the typed dictionary shape
│   ├── am.ts         # Amharic chrome, typed against en
│   ├── data.ts       # Amharic prose for src/data, keyed by English string
│   └── index.ts      # makeT(), rich(), td(), locales
├── layouts/Base.astro
├── pages/            # index.astro (en) and am/index.astro (am)
├── scripts/options.ts
└── styles/global.css # theme + accent tokens, base styles
```

Components receive `t` as a prop; rendering is build-time, so there is no
shared mutable i18n state. `td(t, text)` translates data-file prose and falls
back to the English source string when a translation is missing — adding a
repository never breaks a locale.

Dictionary strings support the tiny markup rendered by `rich()`:

| Syntax     | Renders as                        |
| :--------- | :-------------------------------- |
| `{{text}}` | accent-coloured span              |
| `[[text]]` | bright (chalk) span               |
| `<<text>>` | muted (fog) span                  |
| `\n`       | line break                        |

Everything else is HTML-escaped, so dictionary content can never inject markup.

## Deployment

`npm run build` produces plain static files. The only network dependency is
the optional deployment health probe during the build; failures are swallowed
and surface as an `unknown` badge, never as a broken build.
