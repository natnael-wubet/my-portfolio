/**
 * Amharic prose for `src/data/*.ts`.
 *
 * The English data file stays the single source of truth: entries are keyed by
 * their exact English string, and `td()` falls back to English when a key is
 * missing. That keeps the data files readable and means adding a repo or a
 * deployment never breaks a build, it just renders in English until someone
 * adds a line here.
 *
 * Keys therefore must match the data strings byte for byte, including curly
 * quotes and em dashes.
 */
export const amData: Record<string, string> = {
  /* ─── Repositories ───────────────────────────────────────── */
  "Processing sketches archive": "የProcessing ፕሮግራሞች መዝገብ",
  "Endless runner inspired by the Chrome dinosaur": "በChrome ዳይኖሰር የተነሳሳ መጨረሻ የሌለው ሩጫ ጨዋታ",
  "3D brick breaker shipped as an Android APK": "እንደ Android APK የተለቀቀ ባለ ሶስት አቅጣጫ ጡብ ሰባሪ",
  "Classic pong rebuilt from scratch": "ከባዶ የተገነባ ክላሲክ ፖንግ",
  "Craft and deliver custom payload scripts": "ብጁ የpayload ስክሪፕቶችን መሥራትና ማድረስ",
  "DDoS attack script for web servers": "ለድረ አገልጋዮች የDDoS ጥቃት ስክሪፕት",
  "Numeric + dictionary attack on locked Windows accounts": "በተቆለፉ የWindows መለያዎች ላይ የቁጥርና የመዝገበ ቃላት ጥቃት",
  "Deliver scripts across HTTP": "ስክሪፕቶችን በHTTP ማድረስ",
  "Deliver PowerShell over raw TCP": "PowerShell በጥሬ TCP ማድረስ",
  "Credential attacks against web auth (routers, APs)": "በድረ ማረጋገጫ ላይ የምስክር መረጃ ጥቃቶች (ራውተሮች፣ APዎች)",
  "SSH brute-force toolkit": "የSSH የግዳጅ መግቢያ መሣሪያ ስብስብ",
  "FTP credential cracker": "የFTP ምስክር መረጃ ሰባሪ",
  "Hash cracking utility": "የhash መሰባበሪያ መሣሪያ",
  "Encrypt and lock any file with AES": "ማንኛውንም ፋይል በAES ማመስጠርና መቆለፍ",
  "Compile PowerShell into standalone executables": "PowerShellን ወደ ራሱን የቻለ አስፈጻሚ ፋይሎች ማጠናቀር",
  "Reusable payload script collection": "እንደገና የሚያገለግሉ የpayload ስክሪፕቶች ስብስብ",
  "Numeric + dictionary attack on locked Windows user accounts": "በተቆለፉ የWindows የተጠቃሚ መለያዎች ላይ የቁጥርና የመዝገበ ቃላት ጥቃት",
  "Console graphics engine with a Processing/p5 API": "የProcessing/p5 API ያለው የኮንሶል ግራፊክስ ሞተር",
  "Open-source studio for video editors, coders and artists": "ለቪዲዮ አርታኢዎች፣ ፕሮግራመሮችና አርቲስቶች የተከፈተ ምንጭ ስቱዲዮ",
  "Web studio for simulating game and animation worlds": "የጨዋታና የአኒሜሽን ዓለሞችን ለመምሰል የድረ ስቱዲዮ",
  "Opinionated video-making pipeline with Manim": "በManim የተሠራ አስተያየት ያለው የቪዲዮ ማምረቻ መስመር",
  "Animation experiments with Manim": "በManim የአኒሜሽን ሙከራዎች",
  "Image processing algorithms, implemented plainly": "በቀላሉ የተተገበሩ የምስል ማቀነባበሪያ አልጎሪዝሞች",
  "Image processing scratchpad": "የምስል ማቀነባበሪያ ማስታወሻ ደብተር",
  "CPU scheduling algorithm simulator": "የCPU መርሃ ግብር አልጎሪዝም አስመሳይ",
  "Desktop video application": "የዴስክቶፕ ቪዲዮ መተግበሪያ",
  "Tauri experiment for native Android": "ለኔቲቭ Android የTauri ሙከራ",
  "Nationwide Ethiopian bus e-ticket system": "በአገር አቀፍ ደረጃ የኢትዮጵያ አውቶቡስ ኢ-ቲኬት ሥርዓት",
  "Academic intelligence platform": "የአካዳሚክ ኢንተለጀንስ መድረክ",
  "Digital book reading client": "ዲጂታል መጽሐፍ አንባቢ",
  "Asset management platform": "የንብረት አስተዳደር መድረክ",
  "Reminder app, 2nd place at SolveIT": "የማስታወሻ መተግበሪያ፣ በSolveIT 2ኛ ደረጃ",
  "Betting platform": "የውርርድ መድረክ",
  "Web application": "የድረ መተግበሪያ",
  "Web project": "የድረ ፕሮጀክት",
  "This portfolio": "ይህ ፖርትፎሊዮ",
  "Turn a rough sketch into a refined image using AI": "ሻካራ ስዕልን በAI ወደ የተጣራ ምስል መቀየር",
  "Personal Neovim configuration": "የግል Neovim ማዋቀር",
  "Dooit configuration": "የDooit ማዋቀር",
  "AwesomeWM configuration": "የAwesomeWM ማዋቀር",
  "Neovim configuration": "የNeovim ማዋቀር",
  "Omarchy local configuration": "የOmarchy አካባቢያዊ ማዋቀር",
  "Zen Browser configuration": "የZen Browser ማዋቀር",
  "CSS fundamentals": "የCSS መሠረታዊ ነገሮች",
  "Public scratch projects": "የጋራ ሙከራ ፕሮጀክቶች",
  "Aesthetic, feature-rich Neovim distribution": "ውብና በባህሪ የበለጸገ የNeovim ስርጭት",
  "Launch point for a personal Neovim configuration": "ለግል Neovim ማዋቀር መነሻ",
  "Website theming for the Zen browser": "ለZen አሳሽ የድረ ገጽ ገጽታ ማዋቀር",

  /* ─── Deployments ────────────────────────────────────────── */
  "Ultimate Tic Tac Toe": "የመጨረሻው ቲክ ታክ ቶ",
  "3×3×3 spatial tic-tac-toe with a single-player AI opponent and local pass-and-play multiplayer. Ships as a Telegram Mini App and a native Android build via Capacitor, with Supabase-backed auth and WebAuthn.":
    "ባለ 3×3×3 አካባቢያዊ ቲክ-ታክ-ቶ ከአንድ ተጫዋች AI ተቀናቃኝና ከአካባቢ ፈረቃ ተጫዋችነት ጋር። እንደ Telegram Mini App እና በCapacitor እንደ ኔቲቭ Android ግንባታ ይላካል፣ ከSupabase የተመሠረተ ማረጋገጫና WebAuthn ጋር።",
  "Real-money Ethiopian Bingo": "በእውነተኛ ገንዘብ የሚጫወት የኢትዮጵያ ቢንጎ",
  "Live bingo rooms with buy-ins, a 5% platform rake, in-app wallets, Chapa payment rails for deposits and Ethiopian bank payouts for withdrawals, plus a full Amharic/English locale switch and a live admin console.":
    "በመግቢያ ክፍያ፣ በ5% የመድረክ ክፍያ፣ በመተግበሪያ ውስጥ ቦርሳዎች፣ ለተቀማጭ በChapa የክፍያ መስመሮችና ለወጪ በኢትዮጵያ ባንኮች ክፍያ፣ እንዲሁም ሙሉ የአማርኛ/እንግሊዝኛ ቋንቋ መቀየሪያና ቀጥታ የአስተዳዳሪ ኮንሶል ያላቸው ቀጥታ የቢንጎ ክፍሎች።",
  "Blockchain-verified research attribution": "በብሎክቸይን የተረጋገጠ የምርምር ምስክርነት",
  "Provenance protocol for scientific contributions. Hashes are anchored on Bitcoin via OpenTimestamps, pinned content-addressed to IPFS, and contribution splits with royalty distribution settle in audited smart contracts on Base L2. ORCID-linked.":
    "ለሳይንሳዊ አስተዋጽኦዎች የመነሻ ምስክር ፕሮቶኮል። ሃሽዎች በOpenTimestamps በቢትኮይን ላይ ይሰካሉ፣ ይዘት በIPFS ላይ በይዘት-አድራሻ ይያዛል፣ የአስተዋጽኦ ክፍፍልና የሮያሊቲ ስርጭት በBase L2 ላይ በተመረመሩ ስማርት ኮንትራቶች ይጠናቀቃሉ። ከORCID ጋር የተሳሰረ።",
  "Nationwide bus e-ticketing": "በአገር አቀፍ ደረጃ የአውቶቡስ ኢ-ቲኬት",
  "Ethiopia's nationwide bus e-ticket system. Route discovery, seat selection, live operator and fare mapping, ticket lifecycle management, and localised multi-language checkout across the national network.":
    "የኢትዮጵያ በአገር አቀፍ ደረጃ የአውቶቡስ ኢ-ቲኬት ሥርዓት። የመስመር ፍለጋ፣ የመቀመጫ ምርጫ፣ ቀጥታ የአገልግሎት አቅራቢና የታሪፍ ካርታ፣ የቲኬት ዑደት አስተዳደር፣ እና በአገር አቀፍ መረቡ ላይ በአካባቢ ቋንቋ የተዘጋጀ ግዢ።",
  "Automotive marketplace": "የመኪና ገበያ",
  "Cross-platform car marketplace for the Ethiopian market. Rich listing detail, geo-based discovery, seller dashboards and Firebase-backed realtime data for vehicle inventory.":
    "ለኢትዮጵያ ገበያ የተዘጋጀ በሁሉም መድረኮች የሚሠራ የመኪና ገበያ። የበለጸገ የማስታወቂያ ዝርዝር፣ በአካባቢ ላይ የተመሠረተ ፍለጋ፣ የሻጭ ዳሽቦርዶችና በFirebase የተደገፈ ቀጥታ የመኪና ክምችት መረጃ።",
  "Calendar, journal and todos": "የቀን መቁጠሪያ፣ ማስታወሻ መጽሐፍና ተግባራት",
  "A focused daily planner fusing a month calendar, journalling and a task list into one surface, with optimistic writes, keyboard-first entry and undo on destructive actions.":
    "የወር የቀን መቁጠሪያ፣ ማስታወሻ መጻፍና የተግባር ዝርዝርን በአንድ ገጽ ላይ የሚያዋህድ ያተኮረ የዕለት እቅድ አዘጋጅ፣ በብሩህ ተስፋ የሚጻፉ ማስቀመጦች፣ በቁልፍ ሰሌዳ ቀዳሚ ግቤትና አጥፊ ተግባራት ላይ መመለሻ።",
  "Sketch to refined image": "ከስዕል ወደ የተጣራ ምስል",
  "Draw a rough scribble on any canvas and an AI model refines it into a finished piece. A compact demo of the sketch-conditioning diffusion pipeline end to end.":
    "በማንኛውም ሸራ ላይ ሻካራ ስዕል ይሳሉ፤ የAI ሞዴል ወደ የተጠናቀቀ ሥራ ያጣራዋል። የስዕል-ሁኔታ ማመንጨት (diffusion) መስመርን ከመጀመሪያ እስከ መጨረሻ የሚያሳይ አነስተኛ ማሳያ።",
  "Goal tracking with rich text": "በሀብታም ጽሑፍ የግብ ክትትል",
  "Objective journaling built on Aurelia with a rangy rich-text editor, drag-and-drop goal manipulation via interact.js, and a deliberate offline-tolerant architecture.":
    "በAurelia ላይ የተገነባ የግብ ማስታወሻ መጽሐፍ፣ ከrangy ሀብታም-ጽሑፍ አርታኢ፣ በinteract.js የጎትትና-ጣል የግብ አያያዝ፣ እና ከመስመር ውጭም የሚሠራ ሆን ተብሎ የተነደፈ አርክቴክቸር ጋር።",
  "Digital reading client": "ዲጂታል አንባቢ",
  "A focused reading application with a paginated reader, library management and persistent reading progress. Shipped to Firebase Hosting.":
    "በገጽ የተከፋፈለ አንባቢ፣ የቤተ-መጽሐፍት አስተዳደርና የሚቀጥል የንባብ ሂደት ያለው ያተኮረ የንባብ መተግበሪያ፣ ወደ Firebase Hosting የተላከ።",
  "Ethiopia's networking platform": "የኢትዮጵያ የመረብ መድረክ",
  "Professional networking for Ethiopia: profiles, connection graphs, event discovery and an admin console, delivered as an installable Capacitor app across Android, iOS and web.":
    "ለኢትዮጵያ ሙያዊ መረብ፣ መገለጫዎች፣ የግንኙነት ግራፎች፣ የዝግጅት ፍለጋና የአስተዳዳሪ ኮንሶል፣ በAndroid፣ iOS እና ድረ ላይ እንደሚጫን የCapacitor መተግበሪያ ቀርቧል።",
  "Desktop creative studio": "የዴስክቶፕ የፈጠራ ስቱዲዮ",
  "A general-purpose creative studio built as a Vue 3 + Electron desktop app with Three.js/TroisJS 3D scene composition, scroll-driven animation via ScrollMagic and Firebase backend.":
    "በVue 3 + Electron የዴስክቶፕ መተግበሪያ ሆኖ የተገነባ አጠቃላይ የፈጠራ ስቱዲዮ፣ ከThree.js/TroisJS ባለ ሶስት አቅጣጫ ትእይንት ውህደት፣ በScrollMagic የሚመራ አኒሜሽንና የFirebase የኋላ ጫፍ ጋር።",
  "Telegram-native game client": "ለTelegram የተዘጋጀ የጨዋታ ደንበኛ",
  "The stripped, Telegram-first build of Big XO: haptic feedback, custom keyboard handling and safe-area aware layout for running inside a Mini App viewport.":
    "የBig XO ቀጭን፣ Telegram-ቀዳሚ ግንባታ፣ የመዳሰሻ ግብረ-መልስ፣ ብጁ የቁልፍ ሰሌዳ አያያዝና በMini App እይታ ውስጥ ለመሮጥ የቦታ-ደህንነት ንቁ አቀማመጥ።",

  Product: "ምርት",
  Game: "ጨዋታ",
  Protocol: "ፕሮቶኮል",
  Tool: "መሣሪያ",
  Platform: "መድረክ",

  "Mobile phone insurance, end to end": "የሞባይል ስልክ ዋስትና፣ ከመጀመሪያ እስከ መጨረሻ",
  "A public insurance site and a staff console for phone cover in Ethiopia. Policy and product pages, claim intake, approved-account onboarding behind reCAPTCHA, and a downloads shelf for claim forms. The customer site and the internal console are separate Firebase Hosting targets over one backend.":
    "ለኢትዮጵያ የስልክ ዋስትና ይፋዊ ድረ ገጽና የሠራተኛ ኮንሶል። የፖሊሲና የምርት ገጾች፣ የይገባኛል ጥያቄ መቀበል፣ ከreCAPTCHA በስተጀርባ የተፈቀደ የመለያ ምዝገባ፣ እና ለይገባኛል ቅጾች የማውረጃ መደርደሪያ። የደንበኛው ድረ ገጽና የውስጥ ኮንሶሉ በአንድ የኋላ ጫፍ ላይ የተለያዩ የFirebase Hosting ጣቢያዎች ናቸው።",
  "A week of events, one screen": "የአንድ ሳምንት ዝግጅቶች፣ በአንድ ገጽ",
  "A weekly and daily events calendar for Georgetown University's School of Foreign Service in Qatar. Firebase holds the schedule; the client renders a seven-day grid with previous and next week navigation, a day view, and event detail cards. A separate admin view signs in with Google to manage the schedule.":
    "ለጆርጅታውን ዩኒቨርሲቲ የውጭ ጉዳይ ትምህርት ቤት በኳታር ሳምንታዊና ዕለታዊ የዝግጅት ቀን መቁጠሪያ። መርሃ ግብሩን Firebase ይይዛል፤ ደንበኛው ባለ ሰባት ቀን ፍርግርግ ከቀዳሚና ቀጣይ ሳምንት አሰሳ፣ የቀን እይታና የዝግጅት ዝርዝር ካርዶች ጋር ያሳያል።",
  "Amharic radio, on the phone": "የአማርኛ ሬዲዮ፣ በስልክ ላይ",
  "An Amharic podcast and radio app with a short guided onboarding, programme discovery by show, and episode playback in an Ionic shell. Built mobile-first and shipped to Firebase Hosting.":
    "የአማርኛ ፖድካስትና ሬዲዮ መተግበሪያ፣ አጭር የሚመራ መግቢያ፣ ፕሮግራሞችን በዝግጅት መፈለግ፣ እና በIonic ቅርፊት ውስጥ የክፍል ማጫወት። ሞባይል-ቀዳሚ ሆኖ የተሠራና ወደ Firebase Hosting የተላከ።",
  "Chat that keeps your data yours": "መረጃዎን ለእርስዎ የሚያስቀምጥ ውይይት",
  "A landing and sign-in surface for a chat platform that keeps identity and message history with the user while still reaching third-party chat services. A React page on Firebase Hosting.":
    "መለያና የመልእክት ታሪክን ከተጠቃሚው ጋር የሚያስቀምጥ የውይይት መድረክ መግቢያና ማረጋገጫ ገጽ፣ አሁንም የሶስተኛ ወገን የውይይት አገልግሎቶችን የሚደርስ። በFirebase Hosting ላይ የReact ገጽ።",
  "The previous site, still online": "የቀድሞው ጣቢያ፣ አሁንም በመስመር ላይ",
  "The first portfolio: a React build with a cosmic hero, an eleven-year introduction and a project index. Kept live as a reference point for how the work, and the telling of it, have changed.":
    "የመጀመሪያው ፖርትፎሊዮ፦ በReact የተሠራ፣ የጠፈር ጀግና ምስል፣ የአስራ አንድ ዓመት መግቢያና የፕሮጀክት መዝገብ ያለው። ሥራውና አቀራረቡ እንዴት እንደተለወጡ የሚያሳይ ማጣቀሻ ሆኖ በመስመር ላይ ተጠብቆ ነው።",
  "Amharic text translation in the browser": "የአማርኛ ጽሑፍ ትርጉም በአሳሽ ውስጥ",
  "A small translation desk: paste or compose rich text, pick a target language, and read the result without leaving the page. Built as an Ionic app with a tabbed mobile shell and a Firebase Hosting deploy.":
    "ትንሽ የትርጉም ጠረጴዛ፦ ሀብታም ጽሑፍ ይለጥፉ ወይም ይጻፉ፣ የመድረሻ ቋንቋ ይምረጡ፣ ከገጹ ሳይወጡ ውጤቱን ያንብቡ። በIonic መተግበሪያ፣ በታብ የተደረደረ የሞባይል ቅርፊትና በFirebase Hosting ማሰማራት የተሠራ።",

  /* ─── Awards ─────────────────────────────────────────────── */
  "Software Development Competition": "የሶፍትዌር ልማት ውድድር",
  "World Science Day": "የዓለም ሳይንስ ቀን",
  "UNESCO Innovation Competition": "የUNESCO ፈጠራ ውድድር",
  "Bahir Dar University STEM Center": "ባህር ዳር ዩኒቨርሲቲ STEM ማዕከል",
  "Addis Ababa · Bahir Dar STEM Center": "አዲስ አበባ · ባህር ዳር STEM ማዕከል",
  "Second place with “Hallo Reminder”, shipped with my team": "ከቡድኔ ጋር “Hallo Reminder”ን አውጥተን ሁለተኛ ደረጃ አገኘን",
  "1st": "1ኛ",
  "2nd": "2ኛ",
  "3rd": "3ኛ",
  Eng: "መሐንድ",
  "First place overall with Big XO": "ከBig XO ጋር በአጠቃላይ አንደኛ ደረጃ",
  "Third place with the team": "ከቡድኑ ጋር ሶስተኛ ደረጃ",
  "A month-long intensive build sprint, won outright": "የአንድ ወር ከባድ የግንባታ ሩጫ፣ በቀጥታ አሸንፏል",
  "Shipped “Hallo Reminder” with my team": "ከቡድኔ ጋር “Hallo Reminder”ን አወጣን",
  "Presented my penetration testing and network scanner suite": "የመፈተሻ ሙከራና የመረብ መቃኛ ስብስቤን አቅርቤያለሁ",
  "Selected to represent as software engineer": "እንደ ሶፍትዌር ኢንጂነር እንድወክል ተመረጥኩ",
  "Top ranking": "ከፍተኛ ደረጃ",
  "Top 3": "ከፍተኛ 3",
  "Dell Core i7 laptop for the STEM Center": "ለSTEM ማዕከሉ የDell Core i7 ላፕቶፕ",

  /* ─── Certifications ─────────────────────────────────────── */
  "Networking fundamentals, IP services, security and automation.": "የመረብ መሠረታዊ ነገሮች፣ የIP አገልግሎቶች፣ ደህንነትና አውቶሜሽን።",
  "Refreshed curriculum completion certificate.": "የተሻሻለው ሥርዓተ ትምህርት ማጠናቀቂያ ሰነድ።",

  /* ─── Domains ────────────────────────────────────────────── */
  "Simulation Programming": "የማስመሰያ ፕሮግራም",
  "Physics, agents and systems modelling": "ፊዚክስ፣ ወኪሎችና የሥርዓት ሞዴሊንግ",
  "Full-Stack Engineering": "ሙሉ-ስታክ ምህንድስና",
  "Design through to deployment and scale": "ከንድፍ እስከ ማሰማራትና ማስፋፋት",
  "Mobile & Mini Apps": "ሞባይልና ሚኒ መተግበሪያዎች",
  "Capacitor, Ionic, Telegram Web Apps": "Capacitor፣ Ionic፣ Telegram Web Apps",
  "Game Development": "የጨዋታ ልማት",
  "Mechanics, AI opponents, live game loops": "ሜካኒኮች፣ የAI ተቀናቃኞች፣ ቀጥታ የጨዋታ ዑደቶች",
  "Applied AI": "የተግባራዊ AI",
  "Diffusion pipelines and model-backed UX": "የDiffusion መስመሮችና በሞዴል የተደገፈ UX",
  "Offensive Security": "የጥቃት ደህንነት",
  "Scanners, payload delivery, credential tooling": "መቃኛዎች፣ የpayload ማድረስ፣ የምስክር መሣሪያዎች",
  "Linux & Customisation": "Linuxና ማበጀት",
  "Neovim, AwesomeWM, Omarchy, dotfiles": "Neovim፣ AwesomeWM፣ Omarchy፣ dotfiles",
  "Hardware Integration": "የሃርድዌር ውህደት",
  "Robotics, C++, embedded control": "ሮቦቲክስ፣ C++፣ የተካተተ መቆጣጠሪያ",
  "Systems Building": "የሥርዓት ግንባታ",
  "From bare metal to production infra": "ከመሠረታዊ ሃርድዌር እስከ የምርት መሠረተ ልማት",

  /* ─── Origin ─────────────────────────────────────────────── */
  "Thirteen years of code, one straight line from a novel about symbols to writing the symbols myself.":
    "የአስራ ሦስት ዓመት ኮድ፣ ከምልክቶች ስለሚናገር ልብወለድ ወደ ምልክቶችን ራሴ መጻፍ የሚወስድ አንድ ቀጥተኛ መስመር።",
  "I wrote my first batch code. A calculator, then a manager that copied and moved files in bulk. Small things, but they taught me that a machine will do exactly what you tell it, and nothing more.":
    "የመጀመሪያዬን batch ኮድ ጻፍኩ። ካልኩሌተር፣ ከዚያ ፋይሎችን በጅምላ የሚቀዳና የሚያንቀሳቅስ አስተዳዳሪ፣ ትንንሽ ነገሮች፣ ግን ማሽን የምትነግራትን በትክክል እንደምትሠራና ከዚያ በላይ እንደማትሠራ አስተማሩኝ።",
  "The hook": "መስህቡ",
  "What pulled me in was cryptography. I read The Da Vinci Code and could not let go of the idea that a string of characters could hold a secret. So I started writing my own encryption algorithms, moved into .NET, and then fell for Processing, enough that I rebuilt the whole thing for the terminal. That rebuild became ConAnim.":
    "ወደ ውስጥ የሳበኝ ምስጢራዊ ጽሑፍ (cryptography) ነበር። The Da Vinci Code አንብቤ የቁምፊዎች ሕብረት ምስጢር ሊይዝ ይችላል የሚለውን ሐሳብ ልተው አልቻልኩም። ስለዚህ የራሴን የምስጠራ አልጎሪዝሞች መጻፍ ጀመርኩ፣ ወደ .NET ተዛወርኩ፣ ከዚያ በProcessing ተደሰትኩ፣ በቂ ስለነበር ሙሉውን ነገር ለተርሚናል እንደገና ገነባሁት። ያ ግንባታ ConAnim ሆነ።",
  "Linux, C, Python. Then JavaScript stole my heart and never gave it back. Node for servers, Tauri with Rust for native, and three.js and p5.js for the experimental territory where code stops being utilitarian and starts being fun.":
    "Linux፣ C፣ Python። ከዚያ JavaScript ልቤን ሰረቀችና አልመለሰችም፣ Node ለአገልጋዮች፣ Tauri ከRust ጋር ለኔቲቭ፣ three.js እና p5.js ደግሞ ኮድ ከጥቅም ማለፍ ወደ ደስታ ለሚቀየርበት የሙከራ ግዛት።",
  "The AI wave fascinates me regardless of the hype: we can reach a pseudo-mind, make it dream, talk and reason. I have been deep in AI art since before it had a polite name. I believe it will sit beside photography the way photography sits beside painting.":
    "የAI ማዕበል ከጩኸቱ ውጪ ያስደንቀኛል፡ ሐሰተኛ-አእምሮ ልንደርስ፣ እንዲያልም፣ እንዲናገርና እንዲያስብ ማድረግ እንችላለን። ጥሩ ስም ከመኖሩ በፊት ጀምሮ በAI ጥበብ ውስጥ ጠልቄ ነበር፣ ፎቶግራፊ ከሥዕል ጎን እንደምትቀመጥ ሁሉ እሱም ከፎቶግራፊ ጎን እንደሚቀመጥ አምናለሁ።",
  "I grew up in Bahir Dar, in a family that valued hard work, community and respect for elders. Ethiopian cuisine, music and the coffee ceremony are not decoration on my life. They are the structure of it. My grandfather was a farmer and craftsman who told stories of ancestors who fought for independence, and every Enkutatesh the whole family still gathers for dance, music and food.":
    "በባህር ዳር አደግሁ፣ ጠንካራ ሥራን፣ ማህበረሰብንና ለአዛውንት አክብሮትን በሚያከብር ቤተሰብ ውስጥ። የኢትዮጵያ ምግብ፣ ሙዚቃና የቡና ሥነ ሥርዓት በሕይወቴ ላይ ጌጥ አይደሉም፣ የሕይወቴ መዋቅር ናቸው። አያቴ ለነጻነት ስለተጋደሉ ቅድመ አያቶች ተረት የሚናገር ገበሬና የእጅ ባለሙያ ነበር፣ በየእንቁጣጣሹም መላው ቤተሰብ ለዳንስ፣ ሙዚቃና ምግብ አብሮ ይሰበሰባል።",

  /* ─── Timeline ───────────────────────────────────────────── */
  "First batch code": "የመጀመሪያ ባች ኮድ",
  "A calculator, then a bulk copy-and-move manager. The first time software did something for me that I had asked it to do.":
    "ካልኩሌተር፣ ከዚያ ፋይሎችን በጅምላ የሚቀዳና የሚያንቀሳቅስ አስተዳዳሪ። ሶፍትዌር የጠየቅኩትን ለመጀመሪያ ጊዜ ያደረገልኝ ጊዜ።",
  Origin: "መነሻ",
  "Fell for cryptography": "በምስጢራዊ ጽሑፍ ተደሰትኩ",
  "The Da Vinci Code started it. Wrote my own encryption algorithms, moved into .NET, and became obsessed with Processing, later rebuilding it for the terminal as ConAnim.":
    "The Da Vinci Code ጀመረው። የራሴን የምስጠራ አልጎሪዝሞች ጻፍኩ፣ ወደ .NET ተዛወርኩ፣ በProcessingም ተማረክሁ፣ በኋላም ለተርሚናል እንደ ConAnim ገነባሁት።",
  Security: "ደህንነት",
  "Left the comfortable path. Systems level, robotics with Lego Mindstorm in C++, and Processing/Java for anything visual.":
    "ምቹ መንገዱን ተውኩ። የሥርዓት ደረጃ፣ ከLego Mindstorm ጋር በC++ ሮቦቲክስ፣ እና ለማንኛውም የሚታይ ነገር Processing/Java።",
  Systems: "ሥርዓቶች",
  "JavaScript stole my heart": "JavaScript ልቤን ሰረቀች",
  "Node for servers, Tauri with Rust for native apps, three.js and p5.js for the experimental kick. Still the language I reach for.":
    "Node ለአገልጋዮች፣ Tauri ከRust ጋር ለኔቲቭ መተግበሪያዎች፣ three.js እና p5.js ለሙከራ ስሜት። አሁንም የምመርጠው ቋንቋ እሱ ነው።",
  Web: "ድረገጽ",
  "The AI wave": "የAI ማዕበል",
  "Fascinated that we can access a pseudo-mind: make it dream, talk, reason. Deep in AI art long before it had a polite name.":
    "ሐሰተኛ-አእምሮ መድረስ ስንችል አስደንቆኛል፣ እንዲያልም፣ እንዲናገር፣ እንዲያስብ። ጥሩ ስም ከመኖሩ በፊት በAI ጥበብ ውስጥ ጠልቄ ነበር።",
  AI: "AI",
  "Physics, philosophy, and combining them": "ፊዚክስ፣ ፍልስፍናና ሁለቱን ማዋሃድ",
  "Self-studying philosophy, teaching physics on YouTube, and building the systems that tie all of it together. I see no reason to stop.":
    "ፍልስፍናን ራሴ እያጠናሁ፣ ፊዚክስን በYouTube እያስተማርኩ፣ ሁሉንም የሚያገናኙ ሥርዓቶችን እየገነባሁ። ለማቆም ምንም ምክንያት አላየሁም።",
  Now: "አሁን",
  Mind: "አእምሮ",

  /* ─── Disciplines ────────────────────────────────────────── */
  Physics: "ፊዚክስ",
  "Relativity, emergence, simulation, quantum mechanics. Not as metaphor. I actually build the models. It started as self-study and turned into a channel I teach on.":
    "አንፃራዊነት፣ መገለጥ፣ ማስመሰል፣ የኳንተም ሜካኒክስ። እንደ ምሳሌ አይደለም፣ ሞዴሎቹን በእውነት እገነባለሁ። በራስ ጥናት ተጀምሮ ወደምሰራበት ቻናል ተቀየረ።",
  Relativity: "አንፃራዊነት",
  Emergence: "መገለጥ",
  Simulation: "ማስመሰል",
  Quantum: "ኳንተም",
  Philosophy: "ፍልስፍና",
  "Hegel, Kant, German idealism. Self-taught, and it rewired how I think about systems: nothing exists in isolation, everything is relation all the way down.":
    "ሄገል፣ ካንት፣ የጀርመን ኢዲያሊዝም። በራስ የተማረ፣ እና ስለ ሥርዓቶች ያለኝን አስተሳሰብ እንደገና አዋቀረ፡ ምንም ነገር ተነጥሎ አይኖርም፣ ሁሉም ነገር እስከ መጨረሻው ግንኙነት ነው።",
  Hegel: "ሄገል",
  Kant: "ካንት",
  "German idealism": "የጀርመን ኢዲያሊዝም",
  Dialectics: "ዲያሌክቲክስ",
  Psychology: "ሳይኮሎጂ",
  "How minds actually work: attention, bias, motivation. The reason interfaces are hard and the reason games are fun are the same reason.":
    "አእምሮ በእውነት እንዴት እንደሚሠራ፣ ትኩረት፣ አድልዎ፣ ተነሳሽነት። በይነገጾች አስቸጋሪ የሆኑበት ምክንያትና ጨዋታዎች አስደሳች የሆኑበት ምክንያት አንድ ነው።",
  Cognition: "ዕውቀት",
  Bias: "አድልዎ",
  Motivation: "ተነሳሽነት",
  Ecology: "ኢኮሎጂ",
  "Feedback loops, interdependence, carrying capacity. Every distributed system I have built is an ecology, whether I meant it to be or not.":
    "የግብረ-መልስ ዑደቶች፣ መደጋገፍ፣ የመሸከም አቅም። የገነባሁት ማንኛውም የተከፋፈለ ሥርዓት ኢኮሎጂ ነው፣ በሆን ቁጥርም ቢሆን።",
  Feedback: "ግብረ-መልስ",
  Interdependence: "መደጋገፍ",
  Humanism: "ሂዩማኒዝም",
  "People first, and the answer does not come from above. It is the reason I build anything at all, including the games that put real money on the line.":
    "ሰዎች ቀዳሚ፣ መልሱም ከላይ አይመጣም። በእውነት የምገነባው ነገር ሁሉ ምክንያት እሱ ነው፣ በእውነተኛ ገንዘብ የሚወረውሩ ጨዋታዎችን ጨምሮ።",
  Secular: "ዓለማዊ",
  Ethical: "ሥነ ምግባራዊ",
  Progress: "ዕድገት",

  /* ─── Repository dossiers ─────────────────────────────────── */
  "ConAnim is a p5-style drawing API that renders into a terminal framebuffer. You call size(), point(), line(), rect() and display(); it resolves those calls into a character grid and prints the frame. Around that idea sits a sketchbook of waveform plots, Lissajous line art, a snake, pong, a recursive tree and gravity, each one a single Script class.":
    "ConAnim በp5 መልክ የተሠራ የስዕል API ነው፣ ወደ ተርሚናል ፍሬምባፈር የሚያቀርብ። size()፣ point()፣ line()፣ rect() እና display() ትጠራለህ፤ እሱም ጥሪዎቹን ወደ ቁምፊ ሰንጠረዥ ቀይሮ ፍሬሙን ያትማል። ማከማቻው በዚያ ሐሳብ ዙሪያ ያለ የስዕል ደብተር ነው፣ የሞገድ ግራፎች፣ የLissajous መስመር ጥበብ፣ እባብ፣ ፖንግ፣ ተደጋጋሚ ዛፍ፣ ስበት፣ እያንዳንዱ አንድ Script ክላስ።",
  "A small P5py class holds a two-dimensional array of characters. point() writes one cell, line() samples every cell between two coordinates, rect() fills a range, and display() prints the grid. A sketch subclasses a Script object, sets a canvas size in cells, and draws inside the engine's loop.":
    "ትንሽ P5py ክላስ ባለ ሁለት አቅጣጫ የቁምፊ ድርድር ይይዛል። point() አንድ ሕዋስ ይጽፋል፣ line() በሁለት መጋጠሚያዎች መካከል ያሉትን ሕዋሶች ይነሳል፣ rect() ክልል ይሞላል፣ display() ደግሞ ሰንጠረዡን ያትማል። ስዕል የScript ነገርን ይወርሳል፣ የሸራ መጠን በሕዋሶች ያዘጋጃል፣ ከዚያ በኤንጂኑ ዑደት ውስጥ ይስላል።",
  "It is the Processing instinct applied to the one surface that never needs a GPU: the terminal. The constraint does the work. At 200 by 30 cells you cannot hide behind resolution, so motion has to read as characters, and the frame budget is whatever clear and print cost.":
    "የProcessing ውስጣዊ ስሜት በጭራሽ GPU የማይፈልገው ገጽ ላይ ተተግብሯል፦ ተርሚናል። ገደቡ ራሱ ዓላማው ነው። በ200 በ30 ሕዋሶች በጥራት መደበቅ አትችልም፤ ስለዚህ እንቅስቃሴ በቁምፊዎች መነበብ አለበት፣ የፍሬም በጀቱም clear እና print የሚያስከፍሉት ነው።",
  "The README is 174 bytes and a video. The repository commits __pycache__, and several files are leftovers from the workbench: runner.py hard-codes one demo, and drawtest.py.save contains an unrelated Colorama example. The engine is real and readable; the packaging has not caught up.":
    "READMEው 174 ባይትና አንድ ቪዲዮ ነው፣ ማከማቻው __pycache__ ያካትታል፣ አንዳንድ ፋይሎችም የሥራ ጠረጴዛ ቅሪቶች ናቸው (runner.py አንድ ማሳያ ብቻ ይጽፋል፣ drawtest.py.save የማይገናኝ የColorama ምሳሌ ይዟል)። ኤንጂኑ እውነተኛና ሊነበብ የሚችል ነው፤ ማሸጊያው ግን አሁንም የሥራ ጠረጴዛ ነው።",
  "A Windows GUI that repackages a .ps1 payload as .hta, .bat or .js, and can serve the result over HTTP. It is a delivery-format switcher for red-team style scripts.":
    "የWindows GUI .ps1 ጭነትን እንደ .hta፣ .bat ወይም .js እንደገና የሚያሸግብ እና ውጤቱን በHTTP የሚያቀርብ፣ ለቀይ ቡድን መሰል ስክሪፕቶች የማድረሻ ቅርጽ ቀያይሪ።",
  "The README is a five-line note with an email address. The premise is clear: one payload, several execution surfaces. The wrappers and the HTTP delivery carry the engineering; the interface is a shell around them.":
    "READMEው አምስት መስመር ማስታወሻና ኢሜይል ነው፣ ግን ሐሳቡ ግልጽ ነው፦ አንድ ጭነት፣ ብዙ የማስፈጸሚያ ገጾች። ሊነበብ የሚገባው ምህንድስና በመጠቅለያዎቹና በHTTP ማድረስ ውስጥ ነው፣ በገጹ አይደለም።",
  "A nationwide Ethiopian bus e-ticket system: search intercity routes, choose a seat, book it.":
    "በአገር አቀፍ ደረጃ የኢትዮጵያ አውቶቡስ ኢ-ቲኬት ሥርዓት፦ የከተማ መካከል መስመሮችን ፈልግ፣ መቀመጫ ምረጥ፣ ያዝ።",
  "The README is a title and a Heroku link, so the repository has to speak for itself. Intercity bus inventory and seat allocation are harder than a CRUD demo, and they are the part to judge.":
    "READMEው አርዕስትና የHeroku አገናኝ ነው፣ ስለዚህ ማከማቻው ራሱ መናገር አለበት። የከተማ መካከል አውቶቡስ ክምችትና የመቀመጫ ድልድል ከCRUD ማሳያ የበለጠ ከባድ ነው፣ ሊመዘን የሚገባውም ያ ክፍል ነው።",
  "A research intelligence platform over OpenAlex, Semantic Scholar, Crossref and ORCID, with hybrid search and a free-tier stack from ingestion to deployment.":
    "በOpenAlex፣ Semantic Scholar፣ Crossref እና ORCID ላይ የተመሠረተ የምርምር ኢንተለጀንስ መድረክ፣ በድብልቅ ፍለጋና ከመጀመሪያ እስከ መጨረሻ በነጻ ደረጃ መሠረተ ልማት።",
  "The most system-shaped repository in the list. Its README works as an architecture document: folder map, ingestion packages, and a retrieval pipeline that fuses BM25 with vector search before reranking. It describes the machine, not only the idea.":
    "ይህ በዝርዝሩ ውስጥ በጣም ሥርዓታዊ ቅርጽ ያለው ማከማቻ ነው፣ READMEውም የሥነ ሕንፃ ሰነድ ነው፦ የአቃፊ ካርታ፣ የመረጃ መግቢያ ጥቅሎች፣ እና BM25ን ከቬክተር ፍለጋ ጋር አዋህዶ ከዚያ ደግሞ የሚደረድር የመረጃ ቱቦ። ሐሳቡን ብቻ ሳይሆን መላውን ማሽን ይናገራል።",
  "Four CPU schedulers (FCFS, SJF, SRTF and Round Robin) plus Banker's deadlock-avoidance algorithm, each in its own Python file.":
    "አራት የCPU መርሐግብሮች፣ FCFS፣ SJF፣ SRTF እና Round Robin፣ እንዲሁም የBanker የመጨናነቅ መከላከያ ስልተ ቀመር፣ እያንዳንዱ በራሱ የPython ፋይል።",
  "The best-documented repository here: a table of algorithms, inputs, outputs and exact run commands. It is coursework, and it reads like coursework done properly. Each program is named after its mechanism and prints its metrics.":
    "በዚህ ዝርዝር ውስጥ በተሻለ የተሰነደው ማከማቻ፦ የስልተ ቀመሮች ሰንጠረዥ፣ ግብዓቶች፣ ውጤቶችና ትክክለኛ የሩጫ ትዕዛዞች። የትምህርት ሥራ ነው፣ እናም በአግባቡ የተሠራ የትምህርት ሥራ ይመስላል፣ በስልቱ የተሰየሙ ትንሽ ፕሮግራሞች፣ መለኪያዎቹም ታትመዋል።",

  /* ─── YouTube ────────────────────────────────────────────── */
  "Physics, taught out loud. Relativity, simulation and emergence, explained the way I wish someone had explained them to me.":
    "ፊዚክስ፣ በአደባባይ ተነግሮ። አንፃራዊነት፣ ማስመሰልና መገለጥ፣ አንድ ሰው ለእኔ ቢያስረዳኝ በሚፈልገው መንገድ ተብራርቷል።",

  /* ─── Domains ────────────────────────────────────────────── */
  "Engines from Scratch": "ከባዶ የተገነቡ ሞተሮች",
  "CPU graphics, game loops, physics, branchless paths": "የCPU ግራፊክስ፣ የጨዋታ ዑደቶች፣ ፊዚክስ፣ ያለ if መንገዶች",

  /* ─── Deployment categories ─────────────────────────────── */
  Product: "ምርት",
  Platform: "መድረክ",
  Tool: "መሣሪያ",
  Game: "ጨዋታ",
  Protocol: "ፕሮቶኮል",

  /* ─── Socials ────────────────────────────────────────────── */
  Email: "ኢሜይል",
  Phone: "ስልክ",
};
