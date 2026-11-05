/**
 * Amharic prose for `src/data/*.ts`.
 *
 * The English data file stays the single source of truth: entries are keyed by
 * their exact English string, and `td()` falls back to English when a key is
 * missing. That keeps the data files readable and means adding a repo or a
 * deployment never breaks a build — it just renders in English until someone
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
  "Reminder app — 3rd place at SolveIT": "የማስታወሻ መተግበሪያ — በSolveIT 3ኛ ደረጃ",
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
  "A focused daily planner fusing a month calendar, journalling and a task list into one surface — with optimistic writes, keyboard-first entry and undo on destructive actions.":
    "የወር የቀን መቁጠሪያ፣ ማስታወሻ መጻፍና የተግባር ዝርዝርን በአንድ ገጽ ላይ የሚያዋህድ ያተኮረ የዕለት እቅድ አዘጋጅ — በብሩህ ተስፋ የሚጻፉ ማስቀመጦች፣ በቁልፍ ሰሌዳ ቀዳሚ ግቤትና አጥፊ ተግባራት ላይ መመለሻ።",
  "Sketch to refined image": "ከስዕል ወደ የተጣራ ምስል",
  "Draw a rough scribble on any canvas and an AI model refines it into a finished piece. A compact demo of the sketch-conditioning diffusion pipeline end to end.":
    "በማንኛውም ሸራ ላይ ሻካራ ስዕል ይሳሉ፤ የAI ሞዴል ወደ የተጠናቀቀ ሥራ ያጣራዋል። የስዕል-ሁኔታ ማመንጨት (diffusion) መስመርን ከመጀመሪያ እስከ መጨረሻ የሚያሳይ አነስተኛ ማሳያ።",
  "Goal tracking with rich text": "በሀብታም ጽሑፍ የግብ ክትትል",
  "Objective journaling built on Aurelia with a rangy rich-text editor, drag-and-drop goal manipulation via interact.js, and a deliberate offline-tolerant architecture.":
    "በAurelia ላይ የተገነባ የግብ ማስታወሻ መጽሐፍ፣ ከrangy ሀብታም-ጽሑፍ አርታኢ፣ በinteract.js የጎትትና-ጣል የግብ አያያዝ፣ እና ከመስመር ውጭም የሚሠራ ሆን ተብሎ የተነደፈ አርክቴክቸር ጋር።",
  "Digital reading client": "ዲጂታል አንባቢ",
  "A focused reading application with a paginated reader, library management and persistent reading progress — shipped to Firebase Hosting.":
    "በገጽ የተከፋፈለ አንባቢ፣ የቤተ-መጽሐፍት አስተዳደርና የሚቀጥል የንባብ ሂደት ያለው ያተኮረ የንባብ መተግበሪያ — ወደ Firebase Hosting የተላከ።",
  "Ethiopia's networking platform": "የኢትዮጵያ የመረብ መድረክ",
  "Professional networking for Ethiopia — profiles, connection graphs, event discovery and an admin console, delivered as an installable Capacitor app across Android, iOS and web.":
    "ለኢትዮጵያ ሙያዊ መረብ — መገለጫዎች፣ የግንኙነት ግራፎች፣ የዝግጅት ፍለጋና የአስተዳዳሪ ኮንሶል፣ በAndroid፣ iOS እና ድረ ላይ እንደሚጫን የCapacitor መተግበሪያ ቀርቧል።",
  "Desktop creative studio": "የዴስክቶፕ የፈጠራ ስቱዲዮ",
  "A general-purpose creative studio built as a Vue 3 + Electron desktop app with Three.js/TroisJS 3D scene composition, scroll-driven animation via ScrollMagic and Firebase backend.":
    "በVue 3 + Electron የዴስክቶፕ መተግበሪያ ሆኖ የተገነባ አጠቃላይ የፈጠራ ስቱዲዮ፣ ከThree.js/TroisJS ባለ ሶስት አቅጣጫ ትእይንት ውህደት፣ በScrollMagic የሚመራ አኒሜሽንና የFirebase የኋላ ጫፍ ጋር።",
  "Telegram-native game client": "ለTelegram የተዘጋጀ የጨዋታ ደንበኛ",
  "The stripped, Telegram-first build of Big XO — haptic feedback, custom keyboard handling and safe-area aware layout for running inside a Mini App viewport.":
    "የBig XO ቀጭን፣ Telegram-ቀዳሚ ግንባታ — የመዳሰሻ ግብረ-መልስ፣ ብጁ የቁልፍ ሰሌዳ አያያዝና በMini App እይታ ውስጥ ለመሮጥ የቦታ-ደህንነት ንቁ አቀማመጥ።",

  /* ─── Awards ─────────────────────────────────────────────── */
  "1st": "1ኛ",
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
  "Eleven years of code, one straight line from a novel about symbols to writing the symbols myself.":
    "የአስራ አንድ ዓመት ኮድ፣ ከምልክቶች ስለሚናገር ልብወለድ ወደ ምልክቶችን ራሴ መጻፍ የሚወስድ አንድ ቀጥተኛ መስመር።",
  "I wrote my first batch code. A calculator, then a manager that copied and moved files in bulk — small things, but they taught me that a machine will do exactly what you tell it, and nothing more.":
    "የመጀመሪያዬን batch ኮድ ጻፍኩ። ካልኩሌተር፣ ከዚያ ፋይሎችን በጅምላ የሚቀዳና የሚያንቀሳቅስ አስተዳዳሪ — ትንንሽ ነገሮች፣ ግን ማሽን የምትነግራትን በትክክል እንደምትሠራና ከዚያ በላይ እንደማትሠራ አስተማሩኝ።",
  "The hook": "መስህቡ",
  "What pulled me in was cryptography. I read The Da Vinci Code and could not let go of the idea that a string of characters could hold a secret. So I started writing my own encryption algorithms, moved into .NET, and then fell for Processing — enough that I rebuilt the whole thing for the terminal. That rebuild became ConAnim.":
    "ወደ ውስጥ የሳበኝ ምስጢራዊ ጽሑፍ (cryptography) ነበር። The Da Vinci Code አንብቤ የቁምፊዎች ሕብረት ምስጢር ሊይዝ ይችላል የሚለውን ሐሳብ ልተው አልቻልኩም። ስለዚህ የራሴን የምስጠራ አልጎሪዝሞች መጻፍ ጀመርኩ፣ ወደ .NET ተዛወርኩ፣ ከዚያ በProcessing ተደሰትኩ — በቂ ስለነበር ሙሉውን ነገር ለተርሚናል እንደገና ገነባሁት። ያ ግንባታ ConAnim ሆነ።",
  "Linux, C, Python. Then JavaScript stole my heart and never gave it back — Node for servers, Tauri with Rust for native, and three.js and p5.js for the experimental territory where code stops being utilitarian and starts being fun.":
    "Linux፣ C፣ Python። ከዚያ JavaScript ልቤን ሰረቀችና አልመለሰችም — Node ለአገልጋዮች፣ Tauri ከRust ጋር ለኔቲቭ፣ three.js እና p5.js ደግሞ ኮድ ከጥቅም ማለፍ ወደ ደስታ ለሚቀየርበት የሙከራ ግዛት።",
  "The AI wave fascinates me regardless of the hype: we can reach a pseudo-mind, make it dream, talk and reason. I have been deep in AI art since before it had a polite name — I believe it will sit beside photography the way photography sits beside painting.":
    "የAI ማዕበል ከጩኸቱ ውጪ ያስደንቀኛል፡ ሐሰተኛ-አእምሮ ልንደርስ፣ እንዲያልም፣ እንዲናገርና እንዲያስብ ማድረግ እንችላለን። ጥሩ ስም ከመኖሩ በፊት ጀምሮ በAI ጥበብ ውስጥ ጠልቄ ነበር — ፎቶግራፊ ከሥዕል ጎን እንደምትቀመጥ ሁሉ እሱም ከፎቶግራፊ ጎን እንደሚቀመጥ አምናለሁ።",
  "I grew up in Bahir Dar, in a family that valued hard work, community and respect for elders. Ethiopian cuisine, music and the coffee ceremony are not decoration on my life — they are the structure of it. My grandfather was a farmer and craftsman who told stories of ancestors who fought for independence, and every Enkutatesh the whole family still gathers for dance, music and food.":
    "በባህር ዳር አደግሁ፣ ጠንካራ ሥራን፣ ማህበረሰብንና ለአዛውንት አክብሮትን በሚያከብር ቤተሰብ ውስጥ። የኢትዮጵያ ምግብ፣ ሙዚቃና የቡና ሥነ ሥርዓት በሕይወቴ ላይ ጌጥ አይደሉም — የሕይወቴ መዋቅር ናቸው። አያቴ ለነጻነት ስለተጋደሉ ቅድመ አያቶች ተረት የሚናገር ገበሬና የእጅ ባለሙያ ነበር፣ በየእንቁጣጣሹም መላው ቤተሰብ ለዳንስ፣ ሙዚቃና ምግብ አብሮ ይሰበሰባል።",

  /* ─── Timeline ───────────────────────────────────────────── */
  "First batch code": "የመጀመሪያ ባች ኮድ",
  "A calculator, then a bulk copy-and-move manager. The first time software did something for me that I had asked it to do.":
    "ካልኩሌተር፣ ከዚያ ፋይሎችን በጅምላ የሚቀዳና የሚያንቀሳቅስ አስተዳዳሪ። ሶፍትዌር የጠየቅኩትን ለመጀመሪያ ጊዜ ያደረገልኝ ጊዜ።",
  Origin: "መነሻ",
  "Fell for cryptography": "በምስጢራዊ ጽሑፍ ተደሰትኩ",
  "The Da Vinci Code started it. Wrote my own encryption algorithms, moved into .NET, and became obsessed with Processing — later rebuilding it for the terminal as ConAnim.":
    "The Da Vinci Code ጀመረው። የራሴን የምስጠራ አልጎሪዝሞች ጻፍኩ፣ ወደ .NET ተዛወርኩ፣ በProcessingም ተማረክሁ — በኋላም ለተርሚናል እንደ ConAnim ገነባሁት።",
  Security: "ደህንነት",
  "Left the comfortable path. Systems level, robotics with Lego Mindstorm in C++, and Processing/Java for anything visual.":
    "ምቹ መንገዱን ተውኩ። የሥርዓት ደረጃ፣ ከLego Mindstorm ጋር በC++ ሮቦቲክስ፣ እና ለማንኛውም የሚታይ ነገር Processing/Java።",
  Systems: "ሥርዓቶች",
  "JavaScript stole my heart": "JavaScript ልቤን ሰረቀች",
  "Node for servers, Tauri with Rust for native apps, three.js and p5.js for the experimental kick. Still the language I reach for.":
    "Node ለአገልጋዮች፣ Tauri ከRust ጋር ለኔቲቭ መተግበሪያዎች፣ three.js እና p5.js ለሙከራ ስሜት። አሁንም የምመርጠው ቋንቋ እሱ ነው።",
  Web: "ድረገጽ",
  "The AI wave": "የAI ማዕበል",
  "Fascinated that we can access a pseudo-mind — make it dream, talk, reason. Deep in AI art long before it had a polite name.":
    "ሐሰተኛ-አእምሮ መድረስ ስንችል አስደንቆኛል — እንዲያልም፣ እንዲናገር፣ እንዲያስብ። ጥሩ ስም ከመኖሩ በፊት በAI ጥበብ ውስጥ ጠልቄ ነበር።",
  AI: "AI",
  "Physics, philosophy, and combining them": "ፊዚክስ፣ ፍልስፍናና ሁለቱን ማዋሃድ",
  "Self-studying philosophy, teaching physics on YouTube, and building the systems that tie all of it together. I see no reason to stop.":
    "ፍልስፍናን ራሴ እያጠናሁ፣ ፊዚክስን በYouTube እያስተማርኩ፣ ሁሉንም የሚያገናኙ ሥርዓቶችን እየገነባሁ። ለማቆም ምንም ምክንያት አላየሁም።",
  Now: "አሁን",
  Mind: "አእምሮ",

  /* ─── Disciplines ────────────────────────────────────────── */
  Physics: "ፊዚክስ",
  "Relativity, emergence, simulation, quantum mechanics. Not as metaphor — I actually build the models. It started as self-study and turned into a channel I teach on.":
    "አንፃራዊነት፣ መገለጥ፣ ማስመሰል፣ የኳንተም ሜካኒክስ። እንደ ምሳሌ አይደለም — ሞዴሎቹን በእውነት እገነባለሁ። በራስ ጥናት ተጀምሮ ወደምሰራበት ቻናል ተቀየረ።",
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
  "How minds actually work — attention, bias, motivation. The reason interfaces are hard and the reason games are fun are the same reason.":
    "አእምሮ በእውነት እንዴት እንደሚሠራ — ትኩረት፣ አድልዎ፣ ተነሳሽነት። በይነገጾች አስቸጋሪ የሆኑበት ምክንያትና ጨዋታዎች አስደሳች የሆኑበት ምክንያት አንድ ነው።",
  Cognition: "ዕውቀት",
  Bias: "አድልዎ",
  Motivation: "ተነሳሽነት",
  Ecology: "ኢኮሎጂ",
  "Feedback loops, interdependence, carrying capacity. Every distributed system I have built is an ecology, whether I meant it to be or not.":
    "የግብረ-መልስ ዑደቶች፣ መደጋገፍ፣ የመሸከም አቅም። የገነባሁት ማንኛውም የተከፋፈለ ሥርዓት ኢኮሎጂ ነው፣ በሆን ቁጥርም ቢሆን።",
  Feedback: "ግብረ-መልስ",
  Interdependence: "መደጋገፍ",
  Humanism: "ሂዩማኒዝም",
  "People first, and the answer does not come from above. It is the reason I build anything at all — including the games that put real money on the line.":
    "ሰዎች ቀዳሚ፣ መልሱም ከላይ አይመጣም። በእውነት የምገነባው ነገር ሁሉ ምክንያት እሱ ነው — በእውነተኛ ገንዘብ የሚወረውሩ ጨዋታዎችን ጨምሮ።",
  Secular: "ዓለማዊ",
  Ethical: "ሥነ ምግባራዊ",
  Progress: "ዕድገት",

  /* ─── YouTube ────────────────────────────────────────────── */
  "Physics, taught out loud. Relativity, simulation and emergence, explained the way I wish someone had explained them to me.":
    "ፊዚክስ፣ በአደባባይ ተነግሮ። አንፃራዊነት፣ ማስመሰልና መገለጥ፣ አንድ ሰው ለእኔ ቢያስረዳኝ በሚፈልገው መንገድ ተብራርቷል።",

  /* ─── Socials ────────────────────────────────────────────── */
  Email: "ኢሜይል",
  Phone: "ስልክ",
};
