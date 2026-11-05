/**
 * Amharic dictionary (አማርኛ).
 *
 * Typed as `Dict & Record<string, string>`: every chrome key from en.ts is
 * mandatory (a missing key is a compile error), while `repo.*` / `deploy.*`
 * keys are optional data prose that falls back to the English in src/data.
 *
 * Amharic typography notes that matter here:
 *  - Ethiopic has no case, so uppercase/tracking utilities are neutralised
 *    for [lang="am"] in Base.astro;
 *  - technical terms (stack names, handles, commands) stay in Latin script,
 *    which is how Ethiopian technical writing actually reads.
 */
import type { Dict } from "./en";

export const am: Dict & Record<string, string> = {
  // ── Document metadata ─────────────────────────────────────
  "meta.title": "ናትናኤል ውቤት — ሶፍትዌር ኢንጂነር",
  "meta.description":
    "ናትናኤል ውቤት — ከኢትዮጵያ ባህር ዳር ጨዋታዎች፣ መድረኮች፣ ፕሮቶኮሎችና የደህንነት መሣሪያዎች የሚሠራ ሶፍትዌር ኢንጂነር እና ፊል-ስታክ ወይዘር።",
  "meta.descriptionCounted":
    "ከተለይተው አደጋ ያላቸው ጨዋታዎች፣ ምስክር የሚያደርጉ ፕሮቶኮሎች፣ የሚሸጡ መድረኮች። {live} ቀጥታ የሚሰሩ ማስተላለፊያዎች፣ {repos} የግል ማከማቻዎች፣ የተወዳደሩ ሽጥራዎች — እና ከባህር ዳር፣ ኢትዮጵያ የአስራ አንድ ዓመት ሥራ።",

  // ── Nav ───────────────────────────────────────────────────
  "nav.role": "ሶፍትዌር ኢንጂነር",
  "nav.skip": "ወደ ዋናው ይዘት ዝለል",
  "nav.work": "ስራዎች",
  "nav.origin": "መነሻ",
  "nav.mind": "ሕሳብ",
  "nav.vault": "ሲቪ",
  "nav.awards": "ሽጥራዎች",
  "nav.contact": "አግኙኝ",
  "nav.search": "ፈልግ",
  "nav.cv": "ሲቪ ↓",
  "nav.menu": "ዝርዝር",
  "nav.langSwitch": "ቋንቋ ቀይር",

  // ── Display options ───────────────────────────────────────
  "options.aria": "የማሳያ አማራጭ",
  "options.theme": "ገጽታ",
  "options.theme.dark": "ጨለማ",
  "options.theme.light": "ብርሃን",
  "options.theme.system": "የስርዓቱ",
  "options.accent": "የምልክት ቀለም",
  "options.saved": "በዚህ መሳሪያ ውስጥ ተቀምጧል · በ T ጭነት ይቀይራል",

  // ── Shortcuts ─────────────────────────────────────────────
  "shortcuts.aria": "የቁልፍ አቁሮች",
  "shortcuts.title": "ቁልፎች",
  "shortcuts.close": "Esc · ዝጋ",
  "shortcuts.group.search": "ፈልግና ተዘዋወር",
  "shortcuts.group.display": "ማሳያ",
  "shortcuts.group.palette": "በትዕዛዣ ውስጥ",
  "shortcuts.palette": "የትዕዛዣ ሰሌዳ ክፈት",
  "shortcuts.slash": "ከማንኛውም ቦታ ፈልግ",
  "shortcuts.top": "ወደ ላይ ተመለስ",
  "shortcuts.theme": "ገጽታ ቀይር · ጨለማ → ብርሃን → ስርዓት",
  "shortcuts.accent": "የምልክት ቀለም ቀይር",
  "shortcuts.diag": "የምርመራ መሳቢያ ክፈት",
  "shortcuts.brief": "የተዘጋጀ መግለጫ አዘጋጅ",
  "shortcuts.xray": "የኤክስ-ሬይ / መሣሪያ ሁነታ ቀይር",
  "shortcuts.help": "ይህን ወረቀት አሳይ",
  "shortcuts.updown": "ምርጫውን አንቀሳቅስ",
  "shortcuts.enter": "ምርጫውን አስፈጥር",
  "shortcuts.esc": "ማንኛውንም ዝጋ",

  // ── Hero ──────────────────────────────────────────────────
  "hero.available": "ለሥራ ዝግጁ ነኝ",
  "hero.where": "ባህር ዳር፣ ኢትዮጵያ",
  "hero.utc": "EAT",
  "hero.liveCount": "{n} ቀጥታ ማስተላለፊያ",
  "hero.lead":
    "የአደጋ ጋር የሚጫወቱ [[ጨዋታዎች]]፣ [[ምስክር የሚያደርጉ ፕሮቶኮሎች]] እና [[የሚሸጡ መድረኮች]] እየሠራሁ ነው — ከጥሬ ገንዘብ የሚቀበል የቴሌግራም ቢንጎ ክፍል፣ እስከ ባዊትኮይን ተመስርቶ የተጠቀሰ ማስመዝግቢያ መዝገብ፣ እስከ ከመጀመሪያውኔ የጀመርኩት የደህንነት መሣሪያዎች ድረስ። ከሥራ በኋላ [[አንፃራዊነትንና የመገለጥነትን]]፣ እንዲሁም [[ካንትንና ሄገል]] እየተከታከሁ ነው።",
  "hero.ctaWork": "ሥራውን አሳይ →",
  "hero.hint": "⌘K ወይም / ሁሉንም ፈልግ · ? ለቁልፍ አቁሮች",
  "hero.stat.deploy.k": "ቀጥታ ማስተላለፊያ",
  "hero.stat.deploy.s": "በبناء ጊዜ ተረጋግጧል",
  "hero.stat.repos.k": "የግል ማከማቻዎች",
  "hero.stat.repos.s": "በ GitHub ላይ",
  "hero.stat.awards.k": "የተወዳደሩ ውድድሮች",
  "hero.stat.awards.s": "1ኛ እና 3ኛ ቦታ",
  "hero.stat.years.k": "የሥራ ዓመታት",
  "hero.stat.years.s": "ከ2014 ጀምሮ",
  "hero.scroll": "አንስ",

  // ── Section 01 · Deployments ──────────────────────────────
  "sec.deployments.eyebrow": "ክፍል 01 · ማስተላለፊያዎች",
  "sec.deployments.title": "የተላከ\nና የሚደረስ",
  "sec.deployments.lead":
    "ከዚህ በታች ያሉት ሁሉም ድረ-ገጾች ይህ ገጽ በሚሠራበት ጊዜ ጠይቀዋል። የሚያዩት ሁኔታ ትውስታ አይደለም — የተገነባ የ HTTP መልስ ነው።",
  "sec.deployments.responding": "{{live}} / {total} የሚመልሱ",
  "sec.deployments.archived": "· <<{n}>> የተቀመጡ",
  "sec.deployments.probe": "በبناء ጊዜ የተመረመረ",
  "sec.deployments.archivedStatus": "የተቀመጠ · ምንጭ",
  "sec.deployments.source": "ምንጭ",

  // ── Status vocabulary ─────────────────────────────────────
  "status.live": "በሥራ ላይ",
  "status.down": "አልተገኘም",
  "status.unknown": "ያልተገኘ",

  // ── Section 02 · Repositories ─────────────────────────────
  "sec.repos.eyebrow": "ምንጭ · ሁሉም {n} ማከማቻዎች",
  "sec.repos.title": "እያንዳንዱ ማከማቻ",
  "sec.repos.lead":
    "በ GitHub ላይ ያለው ሙሉ የግል ሥራ — የመጥቃት መሣሪያዎች፣ ጨዋታዎች፣ የዴስክቶፕ መተግበሪያዎች፣ ማዋቀሪያዎችና ሙከራዎች። ምንም ያመለከተ የለም፣ ሁሉም እውነት ነው።",
  "sec.repos.open": "GitHub ክፈት ↗",
  "sec.repos.all": "ሁሉም",
  "sec.repos.fork": "ቅርንጫፍ",
  "sec.repos.empty": "ከዚህ ማጣሪያ ጋር ማከማቻ አልተገኘም",
  "sec.repos.sort": "ደርድር",
  "sec.repos.sortDefault": "የመጀመሪያ ቅደም",
  "sec.repos.sortName": "ስም",
  "sec.repos.sortStars": "ኮከቦች",
  "sec.repos.group.Security": "ደህንነት",
  "sec.repos.group.Game": "ጨዋታ",
  "sec.repos.group.Tool": "መሳሪያ",
  "sec.repos.group.Web": "ድረገጽ",
  "sec.repos.group.Config": "ማዋቀር",

  // ── Section 03 · Origin ───────────────────────────────────
  "sec.origin.eyebrow": "ክፍል 02 · መነሻ",
  "sec.origin.heritageTitle": "የመኩረት ቦታዬ",
  "sec.origin.milestones": "ማስታወሻዎች",
  "sec.origin.entries": "{n} ማስታወሻዎች · 2014 → አሁን",
  "sec.origin.chips": "ባህር ዳር|እንቁጣጣሽ|የቡና ሥነሥርዓት|አማርኛ",

  // ── Section 04 · The interior ─────────────────────────────
  "sec.mind.eyebrow": "ክፍል 03 · ውስጣዊው",
  "sec.mind.title": "ስላልሠራሁ\nየሚያሰብኩበት ነገር",
  "sec.mind.lead":
    "ሥራው የሚታየው ግማሽ ብቻ ነው። ከእነካቸው በታች ያሉት እነዚህ ናቸው — እና አትክልት አይደሉም፣ የሥራው ምንጭ ናቸው።",
  "sec.mind.youtube": "ዩቲዩብ · {handle}",
  "sec.mind.watch": "አሳይ",

  // ── Section 05 · The vault ────────────────────────────────
  "sec.vault.eyebrow": "ክፍል 04 · ቤተመዛግብት",
  "sec.vault.title": "እያንዳንዱ ገጽ፣\nበሦስት አቅጣጫ",
  "sec.vault.lead":
    "እነዚህ አጋዣዎች ባውታሪው [[cv.pdf]] የተቀረጹ ቀጥታ ገጾች ናቸው — ከእጅጉ ሰነድ ተውጣ በአካባቢ ማሰሪያ ዙር ላይ ተለጥፈዋል። ለማዞር ጎትት።",
  "sec.vault.download": "PDF አውርድ",
  "sec.vault.drag": "ጎትት",
  "sec.vault.advance": "ለቀጣይ ተንቀሳቅስ",
  "sec.vault.rotate": "አወርብ",

  // ── Section 06 · Awards ───────────────────────────────────
  "sec.awards.eyebrow": "ክፍል 05 · መዝገብ",
  "sec.awards.title": "ቦታ ያገኙ፣ ደረጃ ያገኙ፣\nማስረጃ ያገኙ",
  "sec.awards.competitions": "ውድድሮች",
  "sec.awards.certifications": "ማስረጃዎች",
  "sec.awards.communities": "ማህበረሰቦች",
  "sec.awards.entries": "{n} ሽጥራዎች",
  "sec.awards.docs": "{n} ሰነዶች",
  "sec.awards.download": "ሙሉ ሲቪ አውርድ ↓",

  // ── Section 07 · Photos ───────────────────────────────────
  "sec.photos.eyebrow": "ከመያያው ውጭ · የግል",
  "sec.photos.title": "ሰውዎ ነው፣\nመገለጫው አይደለም",
  "sec.photos.lead":
    "የግል ፎቶዎች፣ ምንም ማስተካከል የለም። በመጀመሪያ ግርጌ ይጀምራሉ፤ በማይዝ ግን ወደ ቀለም ይመለሳሉ — እዚህ ያሉት ሌሎች ሁሉም ደንብ እንደዚህ ነው: ስፈልግ ብቻ ምልክቱን ታገኛለህ።",
  "sec.photos.caption": "ናትናኤል ውቤት",
  "sec.photos.alt": "ናትናኤል ውቤት — የግል ፎቶ {n}",

  // ── Section 08 · Contact ──────────────────────────────────
  "sec.connect.eyebrow": "ክፍል 06 · አግኙኝ",
  "sec.connect.title": "እንሥራ\nማንኛውንም\n{{የሚላክ።}}",
  "sec.connect.termTitle": "ናቲ — አግኙኝ",
  "sec.connect.whoami": "ማንነቴ",
  "sec.connect.whoamiOut": "ናትናኤል ውቤት — ሶፍትዌር ኢንጂነር",
  "sec.connect.location": "አካባቢ",
  "sec.connect.locationOut": "ባህር ዳር፣ ኢትዮጵያ <<· UTC+3>>",
  "sec.connect.status": "ሁኔታ",
  "sec.connect.open": "ለሥራ ክፍት",
  "sec.connect.termPlaceholder": "'hire' ወይም 'help' ይጻፉ…",
  "sec.connect.copyHint": "ለመቅዳት መልሱን ይጫኑ",
  "sec.connect.cmd.hire": "natyw4122@gmail.com ይላኩ — ብዙ ጊዜ በቀን ውስጥ ይመልሳል።",
  "sec.connect.cmd.help": "ትዕዛዞች: hire · work · stack · github · tg · copy · clear",
  "sec.connect.cmd.work": "{live} ቀጥታ ማስተላለፊያ · {repos} ማከማቻ · {awards} የውድድር ቦታ",
  "sec.connect.cmd.stack": "react · typescript · ionic · capacitor · next · vue · python · three.js · firebase · supabase",
  "sec.connect.cmd.github": "→ github.com/natnael-wubet",
  "sec.connect.cmd.tg": "→ t.me/nnaty_w20",
  "sec.connect.cmd.hi": "ሰላም። 'help' ይጻፉ።",
  "sec.connect.cmd.unknown": "ትዕዛዝ አልተገኘም: {cmd} — 'help' ይሞክሩ",
  "sec.connect.copy": "ቅዳ",
  "sec.connect.copied": "ተቀድቷል ✓",

  // ── Footer ────────────────────────────────────────────────
  "footer.blurb":
    "በጨዋታዎች፣ ፕሮቶኮሎች፣ መድረኮችና የደህንነት መሣሪያዎች ላይ የሚሠራ ሶፍትዌር ኢንጂነር። ባህር ዳር ላይ ተመስርቶ ዓለም ዙሪያ ይልካል።",
  "footer.operational": "ሁሉም ስርዓት በሥራ ላይ ነው",
  "footer.sections": "ክፍሎች",
  "footer.direct": "ቀጥታ",
  "footer.work": "ማስተላለፊያዎች",
  "footer.repos": "ማከማቻዎች",
  "footer.origin": "መነሻ",
  "footer.vault": "የሲቪ ቤተመዛግብት",
  "footer.mind": "ውስጣዊው",
  "footer.awards": "ሽጥራዎች",
  "footer.photos": "ፎቶዎች",
  "footer.contact": "አግኙኝ",
  "footer.built": "© {year} ናትናኤል ውቤት · በ Astro፣ Three.js እና Tailwind የተገነባ",
  "footer.probed": "በبناء ጊዜ ቀጥታ ተመርመረ · {{v3.0}}",

  // ── Command palette ───────────────────────────────────────
  "palette.aria": "የትዕዛዣ ሰሌዳ",
  "palette.placeholder": "ፕሮጀክቶች፣ ማከማቻዎች፣ ሽጥራዎች፣ አገናኝዎች ፈልግ…",
  "palette.empty": "ማመሳሰል አልተገኘም። “ጨዋታ”፣ “ደህንነት”፣ “ሽጥራ”፣ “ቴሌግራም” ይሞክሩ።",
  "palette.kind.Deploy": "ላከ",
  "palette.kind.Repo": "ማከማቻ",
  "palette.kind.Award": "ሽጥራ",
  "palette.kind.Cert": "ማስረጃ",
  "palette.kind.Link": "አገናኝ",
  "palette.kind.Doc": "ሰነድ",
  "palette.kind.Play": "ጫወት",
  "palette.kind.Mind": "ሕሳብ",
  "palette.kind.Jump": "ዝለል",
  "palette.kind.Option": "አማራጭ",
  "palette.kind.Match": "ተዛማጅ",
  "palette.cv": "ሲቪ አውርድ",
  "palette.cvMeta": "ሙሉ የሥራ ታሪክ (PDF)",
  "palette.github": "የ GitHub መገለጫ",
  "palette.telegram": "ቴሌግራም",
  "palette.bigxo": "ቢግ XO ሚኒአፕ",
  "palette.bigxoMeta": "በቴሌግራም ውስጥ ያጫወቱ",
  "palette.interior": "ውስጣዊው",
  "palette.jump.work": "ማስተላለፊያዎች",
  "palette.jump.workMeta": "ክፍል 01 · የተላከና የሚደረስ",
  "palette.jump.origin": "መነሻ",
  "palette.jump.originMeta": "ክፍል 02 · ታሪኩ",
  "palette.jump.vault": "የሲቪ ቤተመዛግብት",
  "palette.jump.vaultMeta": "ክፍል 04 · እያንዳንዱ ገጽ በ 3D",
  "palette.jump.awards": "ሽጥራዎች",
  "palette.jump.awardsMeta": "ክፍል 05 · መዝገብ",
  "palette.jump.photos": "ፎቶዎች",
  "palette.jump.photosMeta": "ከመያያው ውጭ · የግል",
  "palette.jump.contact": "አግኙኝ",
  "palette.jump.contactMeta": "ክፍል 06 · እንሥራ",
  "palette.opt.toggleTheme": "ገጽታ ቀይር",
  "palette.opt.toggleThemeMeta": "ጨለማ ↔ ብርሃን ↔ ስርዓት",
  "palette.opt.darkTheme": "ጨለማ ጭነት",
  "palette.opt.darkThemeMeta": "ማሳያ · የመሣሪያ ሁነታ",
  "palette.opt.lightTheme": "ብርሃን ጭነት",
  "palette.opt.lightThemeMeta": "ማሳያ · የቀን ሁነታ",
  "palette.opt.systemTheme": "የስርዓቱ ጭነት",
  "palette.opt.systemThemeMeta": "ማሳያ · የስርዓቱን ተከተል",
  "palette.opt.accent": "ምልክት · {name}",
  "palette.opt.accentMeta": "የምልክት ቀለም",
  "palette.opt.shortcuts": "የቁልፍ አቁሮች",
  "palette.opt.shortcutsMeta": "በዚህ ገጽ ላይ ያሉት ሁሉም ቁልፎች",
  "palette.opt.share": "የእይታ አገናኝ ቅዳ",
  "palette.opt.shareMeta": "ገጽታ፣ ቀለምና ክፍል",
  "palette.opt.diag": "ምርመራ",
  "palette.opt.diagMeta": "ለዚህ ገጽ ቀጥታ መለኪያዎች",
  "palette.opt.xray": "የኤክስ-ሬይ ሁነታ",
  "palette.opt.xrayMeta": "የክፍል ወሰኖች፣ ፍርግርግና የቀለም ቶከኖች",
  "palette.opt.brief": "የተዘጋጀ መግለጫ",
  "palette.opt.briefMeta": "ለቡድን መግለጫ ያዘጋጁ",
  "palette.opt.langAm": "ወደ አማርኛ ቀይር",
  "palette.opt.langAmMeta": "ድር ጣቢያውን በአማርኛ አሳይ",
  "palette.opt.langEn": "ወደ እንግሊዝኛ ቀይር",
  "palette.opt.langEnMeta": "ይህን ገጽ በእንግሊዝኛ አሳይ",

  // ── Language switcher ─────────────────────────────────────
  "lang.am": "አማ",
  "lang.en": "EN",

  // ── UI feedback ───────────────────────────────────────────
  "ui.linkCopied": "አገናኝ ተቀድቷል",
  "ui.xrayOn": "ኤክስ-ሬይ በርቷል · ለመውጣት I ይጫኑ",
  "ui.xrayOff": "ኤክስ-ሬይ ጠፍቷል",

  // ── Diagnostics drawer ────────────────────────────────────
  "diag.chip": "SYS",
  "diag.title": "ምርመራ",
  "diag.sub": "ይህ ገጽ፣ በዚህ አሳሽ ተለክቷል",
  "diag.close": "ዝጋ",
  "diag.build": "ግንባታ",
  "diag.language": "ቋንቋ",
  "diag.theme": "ገጽታ",
  "diag.accent": "የምልክት ቀለም",
  "diag.viewport": "እይታ",
  "diag.dpr": "የፒክሰል ሬሾ",
  "diag.connection": "ግንኙነት",
  "diag.ttfb": "TTFB",
  "diag.dom": "DOM ዝግጁ",
  "diag.load": "ጭነት",
  "diag.weight": "የተላለፈ",
  "diag.requests": "ጥያቄዎች",
  "diag.heap": "JS ክምር",
  "diag.fps": "ፍሬሞች",
  "diag.scroll": "ሸብልል",
  "diag.clock": "የአካባቢ ሰዓት",
  "diag.xray": "ኤክስ-ሬይ",
  "diag.empty": "አይገኝም",

  // ── Tailored brief ────────────────────────────────────────
  "brief.chip": "መግለጫ",
  "brief.title": "የተዘጋጀ መግለጫ",
  "brief.sub": "ለቡድንዎ የሚስማማውን እይታ ይምረጡ። ገጹ ከታች ካለው ሥራ የአንድ ገጽ መግለጫ ይሠራል።",
  "brief.close": "ዝጋ",
  "brief.role": "ሚና",
  "brief.work": "የተመረጠ ሥራ",
  "brief.awards": "እውቅና",
  "brief.also": "ተዛማጅ ሌሎች",
  "brief.why": "ይህ እይታ ለምን",
  "brief.stack": "ቴክኖሎጂ",
  "brief.contact": "ባህር ዳር፣ ኢትዮጵያ",
  "brief.copy": "እንደ Markdown ቅዳ",
  "brief.download": ".md አውርድ",
  "brief.link": "አገናኝ ቅዳ",
  "brief.print": "አትም / PDF",
  "brief.copied": "መግለጫው ተቀድቷል",
  "brief.downloaded": "መግለጫው ወርዷል",
  "brief.linked": "አገናኝ ተቀድቷል",
  "brief.open": "ይህን ገጽ አስተካክል",
  "brief.openMeta": "ለቡድንዎ መግለጫ ያዘጋጁ",
  "brief.lens.product": "የምርት ኢንጂነር",
  "brief.lens.productBlurb":
    "ምርቶችን ከሻካራ ሐሳብ እስከ ክፍያ የሚከፍል ተጠቃሚ እወስዳለሁ፡ ስኪማ፣ ማረጋገጫ፣ ክፍያ፣ አስተዳዳሪና ሁሉንም የሚያገናኘው ገጽታ። ከታች ያለው ሥራ በሥራ ላይ ነው፣ የጥናት ምሳሌ አይደለም።",
  "brief.lens.productWhy":
    "ከዳታቤዝ እስከ ማሰማራት፣ ከክፍያ እስከ ድጋፍ ኮንሶል ድረስ መላውን መንገድ የሚይዝ እና ከልቀት በኋላም መላክን የሚቀጥል አንድ ሰው ያስፈልግዎታል።",
  "brief.lens.games": "የጨዋታ ኢንጂነር",
  "brief.lens.gamesBlurb":
    "እውነተኛ አደጋ ያላቸው ጨዋታዎች፡ ከAI ተቀናቃኝ ጋር ባለ ሶስት አቅጣጫ ቲክ-ታክ-ቶ፣ በእውነተኛ ገንዘብ የሚጫወት የቢንጎ ክፍል፣ እና ለTelegram የተዘጋጀ ደንበኛ። ሜካኒኮች፣ የጨዋታ ዑደቶች እና ታማኝ እንዲሆኑ የሚያደርጉት ደስ የማይሉ ክፍሎች።",
  "brief.lens.gamesWhy":
    "ጨዋታ በአንድ ጊዜ የሥርዓት ችግርና የሳይኮሎጂ ችግር ነው። ሁለቱንም እገነባለሁ፣ እና ለእውነተኛ ተጫዋቾች አደርሳለሁ።",
  "brief.lens.security": "የደህንነት ኢንጂነር",
  "brief.lens.securityBlurb":
    "የጀመርኩት በጥቃት ደህንነት ነበር፡ መቃኛዎች፣ የpayload ማድረስና በPowerShell፣ Python እና C የተጻፉ የምስክር መሣሪያዎች። መሣሪያዎቹ ይፋዊ ናቸው፤ የሥርዓት አንባቢነቴ አሁንም ከዚያ የመጣ ነው።",
  "brief.lens.securityWhy":
    "ማረጋገጫ፣ ክፍያ ወይም የማሰማራት መስመር ሲነድፉ እንደ አጥቂ የሚያስብ ሰው ያገኛሉ።",
  "brief.lens.protocols": "የፕሮቶኮልና ምርምር ኢንጂነር",
  "brief.lens.protocolsBlurb":
    "ለሳይንሳዊ ሥራ የሚረጋገጥ ምስክርነት፡ ይዘት ወደ IPFS ተሃሽቶ፣ በOpenTimestamps በቢትኮይን ላይ የተሰካ፣ አስተዋጽኦዎች በBase L2 ላይ በተመረመሩ ኮንትራቶች የሚጠናቀቁ፣ ከORCID ጋር የተሳሰሩ። እንዲሁም ፊዚክስና ፍልስፍና፣ በራስ ተምሬ በአደባባይ።",
  "brief.lens.protocolsWhy":
    "በምስጢራዊ ጽሑፍ፣ በማበረታቻ ንድፍና በረዥሙ የጠርዝ ጉዳዮች ውስጥ የሚመች እና ሁሉንም ለምስጢራዊ-ጽሑፍ ባለሙያዎች ላልሆኑ ሰዎች ማስረዳት የሚችል ሰው ያስፈልግዎታል።",
  "brief.lens.founding": "መስራች ኢንጂነር",
  "brief.lens.foundingBlurb":
    "ኢንጂነሩ፣ ኦፕሬሽኑ፣ ከክፍያ አገልግሎት አቅራቢ ጋር በስልክ የተነጋገረው፣ እና ሌሊቱን ሁለት ሰዓት ላይ ድጋፍ የመለሰው ሰው ሆኛለሁ። በእውነተኛ ገንዘብ የሚጫወት ቢንጎ፣ በአገር አቀፍ ደረጃ የአውቶቡስ ቲኬት ሥርዓት፣ የመኪና ገበያ።",
  "brief.lens.foundingWhy":
    "ቀደምት ቡድኖች ከልዩ ሙያ ይልቅ ስፋትና ብልህነት ይፈልጋሉ። ሁለቱንም አመጣለሁ፣ ከዚህ ወር ውስጥ እውነተኛ ነገር የመላክ ዝንባሌ ጋር።",
};
