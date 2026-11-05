/**
 * English dictionary — every chrome string on the site.
 *
 * Keys are flat and dotted: "nav.work", "sec.vault.title". `Dict` (typeof en)
 * is the contract: src/i18n/am.ts must supply every one of these keys or it
 * fails to type-check, so a translation can never silently go missing.
 *
 * Data prose (repo descriptions, deployment taglines…) deliberately lives in
 * src/data/*.ts as the English source and is passed as a fallback at the call
 * site — t(`repo.${name}`, r.description) — so nothing is ever duplicated.
 *
 * Markup conventions honoured by rich():
 *   \n            → <br />
 *   {{text}}      → accent-coloured span
 *   [[text]]      → brighter (chalk) span
 */
export const en = {
  // ── Document metadata ─────────────────────────────────────
  "meta.title": "Natnael Wubet — Software Engineer",
  "meta.description":
    "Natnael Wubet — software engineer and full-stack developer building games, platforms, protocols and security tooling from Bahir Dar, Ethiopia.",
  "meta.descriptionCounted":
    "Games with real stakes, protocols that prove things, platforms that ship. {live} live deployments, {repos} public repositories, competition-winning work — and eleven years of it — from Bahir Dar, Ethiopia.",

  // ── Nav ───────────────────────────────────────────────────
  "nav.role": "Software Engineer",
  "nav.skip": "Skip to content",
  "nav.work": "Work",
  "nav.origin": "Origin",
  "nav.mind": "Mind",
  "nav.vault": "CV",
  "nav.awards": "Awards",
  "nav.contact": "Contact",
  "nav.search": "Search",
  "nav.cv": "CV ↓",
  "nav.menu": "Menu",
  "nav.langSwitch": "Switch language",

  // ── Display options ───────────────────────────────────────
  "options.aria": "Display options",
  "options.theme": "Theme",
  "options.theme.dark": "Dark",
  "options.theme.light": "Light",
  "options.theme.system": "System",
  "options.accent": "Accent",
  "options.saved": "Saved on this device · T cycles theme",

  // ── Shortcuts ─────────────────────────────────────────────
  "shortcuts.aria": "Keyboard shortcuts",
  "shortcuts.title": "Keyboard",
  "shortcuts.close": "Esc · close",
  "shortcuts.group.search": "Search & navigate",
  "shortcuts.group.display": "Display",
  "shortcuts.group.palette": "Inside the palette",
  "shortcuts.palette": "Open the command palette",
  "shortcuts.slash": "Search from anywhere",
  "shortcuts.top": "Back to the top",
  "shortcuts.theme": "Cycle theme · dark → light → system",
  "shortcuts.accent": "Cycle accent colour",
  "shortcuts.diag": "Open the diagnostics drawer",
  "shortcuts.brief": "Compose a tailored brief",
  "shortcuts.xray": "Toggle X-ray / instrument mode",
  "shortcuts.help": "Show this sheet",
  "shortcuts.updown": "Move the selection",
  "shortcuts.enter": "Run the selection",
  "shortcuts.esc": "Close anything",

  // ── Hero ──────────────────────────────────────────────────
  "hero.available": "Available for work",
  "hero.where": "Bahir Dar, Ethiopia",
  "hero.utc": "EAT",
  "hero.liveCount": "{n} live deployments",
  "hero.lead":
    "I build [[games with real stakes]], [[protocols that prove things]], and [[platforms that ship]] — from a Telegram bingo room taking real money, to a Bitcoin-anchored citation ledger, to the security tooling I started with. Off the clock I chase [[relativity and emergence]], and [[Kant and Hegel]].",
  "hero.ctaWork": "View work →",
  "hero.hint": "⌘K or / to search everything · ? for shortcuts",
  "hero.stat.deploy.k": "Live deployments",
  "hero.stat.deploy.s": "verified at build",
  "hero.stat.repos.k": "Public repositories",
  "hero.stat.repos.s": "on GitHub",
  "hero.stat.awards.k": "Competitions won",
  "hero.stat.awards.s": "1st & 3rd place",
  "hero.stat.years.k": "Years shipping",
  "hero.stat.years.s": "since 2014",
  "hero.scroll": "Scroll",

  // ── Section 01 · Deployments ──────────────────────────────
  "sec.deployments.eyebrow": "Section 01 · Deployments",
  "sec.deployments.title": "Shipped &\nreachable",
  "sec.deployments.lead":
    "Every URL below was requested while this page was being built. The status you see is a real HTTP response, not a claim.",
  "sec.deployments.responding": "{{live}} / {total} responding",
  "sec.deployments.archived": "· <<{n}>> archived",
  "sec.deployments.probe": "Build-time probe",
  "sec.deployments.archivedStatus": "archived · source",
  "sec.deployments.source": "Source",

  // ── Status vocabulary ─────────────────────────────────────
  "status.live": "live",
  "status.down": "down",
  "status.unknown": "unknown",

  // ── Section 02 · Repositories ─────────────────────────────
  "sec.repos.eyebrow": "Source · all {n} repositories",
  "sec.repos.title": "Every repository",
  "sec.repos.lead":
    "The full public footprint on GitHub — offensive tooling, games, desktop apps, configs and experiments. Nothing curated, everything honest.",
  "sec.repos.open": "Open GitHub ↗",
  "sec.repos.all": "All",
  "sec.repos.fork": "fork",
  "sec.repos.empty": "No repositories match that filter",
  "sec.repos.sort": "Sort",
  "sec.repos.sortDefault": "Source order",
  "sec.repos.sortName": "Name",
  "sec.repos.sortStars": "Stars",
  "sec.repos.group.Security": "Security",
  "sec.repos.group.Game": "Game",
  "sec.repos.group.Tool": "Tool",
  "sec.repos.group.Web": "Web",
  "sec.repos.group.Config": "Config",

  // ── Section 03 · Origin ───────────────────────────────────
  "sec.origin.eyebrow": "Section 02 · Origin",
  "sec.origin.heritageTitle": "Where I'm rooted",
  "sec.origin.milestones": "Milestones",
  "sec.origin.entries": "{n} entries · 2014 → now",
  "sec.origin.chips": "Bahir Dar|Enkutatesh|Coffee ceremony|Amharic",

  // ── Section 04 · The interior ─────────────────────────────
  "sec.mind.eyebrow": "Section 03 · The interior",
  "sec.mind.title": "What I think about\nwhen I'm not building",
  "sec.mind.lead":
    "The work is the visible half. These are the things underneath it — and they are not hobbies, they are the source code.",
  "sec.mind.youtube": "YouTube · {handle}",
  "sec.mind.watch": "Watch",

  // ── Section 05 · The vault ────────────────────────────────
  "sec.vault.eyebrow": "Section 04 · The Vault",
  "sec.vault.title": "Every page,\nin three dimensions",
  "sec.vault.lead":
    "These frames are the actual rendered pages of [[cv.pdf]], extracted from the source document and mapped onto a volumetric carousel. Drag to rotate.",
  "sec.vault.download": "Download PDF",
  "sec.vault.drag": "Drag",
  "sec.vault.advance": "Scroll to advance",
  "sec.vault.rotate": "Rotate",

  // ── Section 06 · Awards ───────────────────────────────────
  "sec.awards.eyebrow": "Section 05 · Record",
  "sec.awards.title": "Placed, ranked,\ncertified",
  "sec.awards.competitions": "Competitions",
  "sec.awards.certifications": "Certifications",
  "sec.awards.communities": "Communities",
  "sec.awards.entries": "{n} entries",
  "sec.awards.docs": "{n} docs",
  "sec.awards.download": "Download full CV ↓",

  // ── Section 07 · Photos ───────────────────────────────────
  "sec.photos.eyebrow": "Off-screen · personal",
  "sec.photos.title": "The person,\nnot the profile",
  "sec.photos.lead":
    "Personal photos, no retouching. They start in grayscale and come back to colour on hover — the same rule as everything else here: you only get the signal when you go looking for it.",
  "sec.photos.caption": "Natnael Wubet",
  "sec.photos.alt": "Natnael Wubet — personal photo {n}",

  // ── Section 08 · Contact ──────────────────────────────────
  "sec.connect.eyebrow": "Section 06 · Contact",
  "sec.connect.title": "Let's build\nsomething\n{{that ships.}}",
  "sec.connect.termTitle": "naty — contact",
  "sec.connect.whoami": "whoami",
  "sec.connect.whoamiOut": "natnael wubet — software engineer",
  "sec.connect.location": "location",
  "sec.connect.locationOut": "bahir dar, ethiopia · UTC+3",
  "sec.connect.status": "status",
  "sec.connect.open": "open to work",
  "sec.connect.termPlaceholder": "type 'hire' or 'help'…",
  "sec.connect.copyHint": "Click an answer to copy it",
  "sec.connect.cmd.hire": "email natyw4122@gmail.com — usually replies within a day.",
  "sec.connect.cmd.help": "commands: hire · work · stack · github · tg · copy · clear",
  "sec.connect.cmd.work": "{live} live deployments · {repos} repos · {awards} competition placements",
  "sec.connect.cmd.stack": "react · typescript · ionic · capacitor · next · vue · python · three.js · firebase · supabase",
  "sec.connect.cmd.github": "→ github.com/natnael-wubet",
  "sec.connect.cmd.tg": "→ t.me/nnaty_w20",
  "sec.connect.cmd.hi": "hello. type 'help'.",
  "sec.connect.cmd.unknown": "command not found: {cmd} — try 'help'",
  "sec.connect.copy": "Copy",
  "sec.connect.copied": "Copied ✓",

  // ── Footer ────────────────────────────────────────────────
  "footer.blurb":
    "Software engineer working across games, protocols, platforms and security tooling. Based in Bahir Dar, shipping worldwide.",
  "footer.operational": "All systems operational",
  "footer.sections": "Sections",
  "footer.direct": "Direct",
  "footer.work": "Deployments",
  "footer.repos": "Repositories",
  "footer.origin": "Origin",
  "footer.vault": "CV Vault",
  "footer.mind": "The interior",
  "footer.awards": "Awards",
  "footer.photos": "Photos",
  "footer.contact": "Contact",
  "footer.built": "© {year} Natnael Wubet · Built with Astro, Three.js & Tailwind",
  "footer.probed": "Probed live at build · {{v3.0}}",

  // ── Command palette ───────────────────────────────────────
  "palette.aria": "Command palette",
  "palette.placeholder": "Search projects, repositories, awards, links…",
  "palette.empty": "No matches. Try “game”, “security”, “award”, “telegram”.",
  "palette.kind.Deploy": "Deploy",
  "palette.kind.Repo": "Repo",
  "palette.kind.Award": "Award",
  "palette.kind.Cert": "Cert",
  "palette.kind.Link": "Link",
  "palette.kind.Doc": "Doc",
  "palette.kind.Play": "Play",
  "palette.kind.Mind": "Mind",
  "palette.kind.Jump": "Jump",
  "palette.kind.Option": "Option",
  "palette.kind.Match": "Match",
  "palette.cv": "Download CV",
  "palette.cvMeta": "Complete curriculum vitae (PDF)",
  "palette.github": "GitHub profile",
  "palette.telegram": "Telegram",
  "palette.bigxo": "Big XO Mini App",
  "palette.bigxoMeta": "Play in Telegram",
  "palette.interior": "The interior",
  "palette.jump.work": "Deployments",
  "palette.jump.workMeta": "Section 01 · shipped & reachable",
  "palette.jump.origin": "Origin",
  "palette.jump.originMeta": "Section 02 · the story",
  "palette.jump.vault": "CV Vault",
  "palette.jump.vaultMeta": "Section 04 · every page in 3D",
  "palette.jump.awards": "Awards",
  "palette.jump.awardsMeta": "Section 05 · record",
  "palette.jump.photos": "Photos",
  "palette.jump.photosMeta": "Off-screen · personal",
  "palette.jump.contact": "Contact",
  "palette.jump.contactMeta": "Section 06 · let's build",
  "palette.opt.toggleTheme": "Toggle theme",
  "palette.opt.toggleThemeMeta": "Dark ↔ light ↔ system",
  "palette.opt.darkTheme": "Dark theme",
  "palette.opt.darkThemeMeta": "Display · instrument mode",
  "palette.opt.lightTheme": "Light theme",
  "palette.opt.lightThemeMeta": "Display · daylight mode",
  "palette.opt.systemTheme": "System theme",
  "palette.opt.systemThemeMeta": "Display · follow the OS",
  "palette.opt.accent": "Accent · {name}",
  "palette.opt.accentMeta": "Signal colour",
  "palette.opt.shortcuts": "Keyboard shortcuts",
  "palette.opt.shortcutsMeta": "Every key on this site",
  "palette.opt.share": "Copy view link",
  "palette.opt.shareMeta": "Theme, accent and section",
  "palette.opt.diag": "Diagnostics",
  "palette.opt.diagMeta": "Live measurements for this page",
  "palette.opt.xray": "X-ray mode",
  "palette.opt.xrayMeta": "Section bounds, grid and colour tokens",
  "palette.opt.brief": "Tailored brief",
  "palette.opt.briefMeta": "Compose a brief for a team",
  "palette.opt.langAm": "Switch to Amharic",
  "palette.opt.langAmMeta": "ድር ጣቢያውን በአማርኛ አሳይ",
  "palette.opt.langEn": "Switch to English",
  "palette.opt.langEnMeta": "Show this site in English",

  // ── Language switcher ─────────────────────────────────────
  "lang.am": "አማ",
  "lang.en": "EN",

  // ── UI feedback ───────────────────────────────────────────
  "ui.linkCopied": "Link copied",
  "ui.xrayOn": "X-ray on · press I to exit",
  "ui.xrayOff": "X-ray off",

  // ── Diagnostics drawer ────────────────────────────────────
  "diag.chip": "SYS",
  "diag.title": "Diagnostics",
  "diag.sub": "This page, measured in this browser",
  "diag.close": "Close",
  "diag.build": "Build",
  "diag.language": "Language",
  "diag.theme": "Theme",
  "diag.accent": "Accent",
  "diag.viewport": "Viewport",
  "diag.dpr": "Pixel ratio",
  "diag.connection": "Connection",
  "diag.ttfb": "TTFB",
  "diag.dom": "DOM ready",
  "diag.load": "Load",
  "diag.weight": "Transfer",
  "diag.requests": "Requests",
  "diag.heap": "JS heap",
  "diag.fps": "Frames",
  "diag.scroll": "Scroll",
  "diag.clock": "Local time",
  "diag.xray": "X-ray",
  "diag.empty": "unavailable",

  // ── Tailored brief ────────────────────────────────────────
  "brief.chip": "Brief",
  "brief.title": "Tailored brief",
  "brief.sub": "Choose the lens that matches your team. The page composes a one-page brief from the work below.",
  "brief.close": "Close",
  "brief.role": "Role",
  "brief.work": "Selected work",
  "brief.awards": "Recognition",
  "brief.also": "Also relevant",
  "brief.why": "Why this lens",
  "brief.stack": "Stack",
  "brief.contact": "Bahir Dar, Ethiopia",
  "brief.copy": "Copy as Markdown",
  "brief.download": "Download .md",
  "brief.link": "Copy link",
  "brief.print": "Print / PDF",
  "brief.copied": "Brief copied",
  "brief.downloaded": "Brief downloaded",
  "brief.linked": "Link copied",
  "brief.open": "Tailor this page",
  "brief.openMeta": "Compose a brief for your team",
  "brief.lens.product": "Product engineer",
  "brief.lens.productBlurb":
    "I take products from a rough idea to a paying user: schema, auth, payments, admin, and the interface that ties them together. The work below is live, not a case study.",
  "brief.lens.productWhy":
    "You need one person who can own the whole path — database to deploy, checkout to support console — and keep shipping after launch.",
  "brief.lens.games": "Game engineer",
  "brief.lens.gamesBlurb":
    "Games with real stakes: a 3D tic-tac-toe with an AI opponent, a real-money bingo room, and a Telegram-native client. Mechanics, game loops, and the unglamorous parts that keep them honest.",
  "brief.lens.gamesWhy":
    "Gameplay is a systems problem and a psychology problem at once. I build both, and I ship to real players.",
  "brief.lens.security": "Security engineer",
  "brief.lens.securityBlurb":
    "I started in offensive security: scanners, payload delivery and credential tooling in PowerShell, Python and C. The tools are public; the discipline is still how I read systems.",
  "brief.lens.securityWhy":
    "You get someone who thinks like an attacker while designing auth, payments or a deploy pipeline.",
  "brief.lens.protocols": "Protocol & research engineer",
  "brief.lens.protocolsBlurb":
    "Verifiable attribution for scientific work: content hashed to IPFS, anchored on Bitcoin with OpenTimestamps, contributions settled in audited contracts on Base L2, linked to ORCID. Also physics and philosophy, self-taught and in public.",
  "brief.lens.protocolsWhy":
    "You need someone comfortable with cryptography, incentive design and the long tail of edge cases — and who can explain all three to people who are not cryptographers.",
  "brief.lens.founding": "Founding engineer",
  "brief.lens.foundingBlurb":
    "I have been the engineer, the ops, the person on the phone with a payment provider, and the one answering support at 2am. Real-money bingo, a nationwide bus ticketing system, a car marketplace.",
  "brief.lens.foundingWhy":
    "Early teams need range and judgement more than a specialisation. I bring both, plus a bias for shipping something real this month.",
} as const;

export type Dict = typeof en;
