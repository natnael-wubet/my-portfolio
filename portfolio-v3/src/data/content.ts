export interface Repo {
  name: string;
  description: string;
  language: string;
  url: string;
  group: "Security" | "Game" | "Tool" | "Config" | "Web";
  stars?: number;
  /** True when the repo is someone else's project he mirrored. */
  fork?: boolean;
}

export const repos: Repo[] = [
  // Game
  { name: "myProcessingArchive", description: "Processing sketches archive", language: "Processing", url: "https://github.com/natnael-wubet/myProcessingArchive", group: "Game" },
  { name: "dessert_jumper", description: "Endless runner inspired by the Chrome dinosaur", language: "Processing", url: "https://github.com/natnael-wubet/dessert_jumper", group: "Game" },
  { name: "royal_balz_3D", description: "3D brick breaker shipped as an Android APK", language: "Processing", url: "https://github.com/natnael-wubet/royal_balz_3D", group: "Game" },
  { name: "pong", description: "Classic pong rebuilt from scratch", language: "Processing", url: "https://github.com/natnael-wubet/pong", group: "Game" },

  // Security
  { name: "PAYLOADer", description: "Craft and deliver custom payload scripts", language: "PowerShell", url: "https://github.com/natnael-wubet/PAYLOADer", group: "Security", stars: 1 },
  { name: "Ddos", description: "DDoS attack script for web servers", language: "PowerShell", url: "https://github.com/natnael-wubet/Ddos", group: "Security", stars: 8 },
  { name: "windows--password-cracker", description: "Numeric + dictionary attack on locked Windows accounts", language: "PowerShell", url: "https://github.com/natnael-wubet/windows--password-cracker", group: "Security", stars: 8 },
  { name: "exploit_over_http", description: "Deliver scripts across HTTP", language: "PowerShell", url: "https://github.com/natnael-wubet/exploit_over_http", group: "Security", stars: 2 },
  { name: "exploit_over_tcp", description: "Deliver PowerShell over raw TCP", language: "PowerShell", url: "https://github.com/natnael-wubet/exploit_over_tcp", group: "Security", stars: 1 },
  { name: "web-credential-password-attack", description: "Credential attacks against web auth (routers, APs)", language: "PowerShell", url: "https://github.com/natnael-wubet/web-credential-password-attack", group: "Security", stars: 3 },
  { name: "ssh-password-attack", description: "SSH brute-force toolkit", language: "PowerShell", url: "https://github.com/natnael-wubet/ssh-password-attack", group: "Security", stars: 1 },
  { name: "ftp-password-attack", description: "FTP credential cracker", language: "Other", url: "https://github.com/natnael-wubet/ftp-password-attack", group: "Security", stars: 1 },
  { name: "hash_cracker", description: "Hash cracking utility", language: "PowerShell", url: "https://github.com/natnael-wubet/hash_cracker", group: "Security", stars: 1 },
  { name: "file-locker", description: "Encrypt and lock any file with AES", language: "PowerShell", url: "https://github.com/natnael-wubet/file-locker", group: "Security", stars: 1 },
  { name: "Powershell_compiler", description: "Compile PowerShell into standalone executables", language: "PowerShell", url: "https://github.com/natnael-wubet/Powershell_compiler", group: "Security", stars: 1 },
  { name: "payloads", description: "Reusable payload script collection", language: "PowerShell", url: "https://github.com/natnael-wubet/payloads", group: "Security" },
  { name: "windows-password-cracker", description: "Numeric + dictionary attack on locked Windows user accounts", language: "Other", url: "https://github.com/natnael-wubet/windows-password-cracker", group: "Security", stars: 1 },

  // Tool
  { name: "ConAnim", description: "Console graphics engine with a Processing/p5 API", language: "Python", url: "https://github.com/natnael-wubet/ConAnim", group: "Tool", stars: 3 },
  { name: "Abyss-koffee", description: "Open-source studio for video editors, coders and artists", language: "JavaScript", url: "https://github.com/natnael-wubet/Abyss-koffee", group: "Tool" },
  { name: "abyss-studio", description: "Web studio for simulating game and animation worlds", language: "Other", url: "https://github.com/natnael-wubet/abyss-studio", group: "Tool" },
  { name: "creative_manim", description: "Opinionated video-making pipeline with Manim", language: "HTML", url: "https://github.com/natnael-wubet/creative_manim", group: "Tool" },
  { name: "manimexperiment", description: "Animation experiments with Manim", language: "Python", url: "https://github.com/natnael-wubet/manimexperiment", group: "Tool" },
  { name: "image_processing_demos", description: "Image processing algorithms, implemented plainly", language: "Processing", url: "https://github.com/natnael-wubet/image_processing_demos", group: "Tool" },
  { name: "imaging-processing", description: "Image processing scratchpad", language: "Other", url: "https://github.com/natnael-wubet/imaging-processing", group: "Tool" },
  { name: "cpu-scheduling-assignment", description: "CPU scheduling algorithm simulator", language: "Python", url: "https://github.com/natnael-wubet/cpu-scheduling-assignment", group: "Tool" },
  { name: "videsk", description: "Desktop video application", language: "TypeScript", url: "https://github.com/natnael-wubet/videsk", group: "Tool" },
  { name: "tauriApp", description: "Tauri experiment for native Android", language: "TypeScript", url: "https://github.com/natnael-wubet/tauriApp", group: "Tool" },

  // Web
  { name: "ticketye_app", description: "Nationwide Ethiopian bus e-ticket system", language: "JavaScript", url: "https://github.com/natnael-wubet/ticketye_app", group: "Web" },
  { name: "academia-iq-web", description: "Academic intelligence platform", language: "Python", url: "https://github.com/natnael-wubet/academia-iq-web", group: "Web" },
  { name: "BookReader", description: "Digital book reading client", language: "TypeScript", url: "https://github.com/natnael-wubet/BookReader", group: "Web" },
  { name: "amecoassets", description: "Asset management platform", language: "Other", url: "https://github.com/natnael-wubet/amecoassets", group: "Web" },
  { name: "hallo_reminder", description: "Reminder app, 2nd place at SolveIT", language: "Other", url: "https://github.com/natnael-wubet/hallo_reminder", group: "Web" },
  { name: "pubbet", description: "Betting platform", language: "Other", url: "https://github.com/natnael-wubet/pubbet", group: "Web" },
  { name: "shama", description: "Web application", language: "JavaScript", url: "https://github.com/natnael-wubet/shama", group: "Web" },
  { name: "ubaj", description: "Web project", language: "Other", url: "https://github.com/natnael-wubet/ubaj", group: "Web" },
  { name: "naty-wubet", description: "This portfolio", language: "JavaScript", url: "https://github.com/natnael-wubet/naty-wubet", group: "Web" },
  { name: "scribble-diffusion", description: "Turn a rough sketch into a refined image using AI", language: "JavaScript", url: "https://github.com/natnael-wubet/scribble-diffusion", group: "Web", fork: true },

  // Config
  { name: "natis_neovim_config", description: "Personal Neovim configuration", language: "Lua", url: "https://github.com/natnael-wubet/natis_neovim_config", group: "Config" },
  { name: "my-dooit-config", description: "Dooit configuration", language: "Other", url: "https://github.com/natnael-wubet/my-dooit-config", group: "Config" },
  { name: "myAwesomewm", description: "AwesomeWM configuration", language: "Lua", url: "https://github.com/natnael-wubet/myAwesomewm", group: "Config" },
  { name: "myneovim", description: "Neovim configuration", language: "Lua", url: "https://github.com/natnael-wubet/myneovim", group: "Config" },
  { name: "myomarchylocal", description: "Omarchy local configuration", language: "Other", url: "https://github.com/natnael-wubet/myomarchylocal", group: "Config" },
  { name: "zenbrowserconfig", description: "Zen Browser configuration", language: "CSS", url: "https://github.com/natnael-wubet/zenbrowserconfig", group: "Config" },
  { name: "css_basic", description: "CSS fundamentals", language: "HTML", url: "https://github.com/natnael-wubet/css_basic", group: "Config" },
  { name: "public_p", description: "Public scratch projects", language: "Other", url: "https://github.com/natnael-wubet/public_p", group: "Config" },
  { name: "AstroNvim", description: "Aesthetic, feature-rich Neovim distribution", language: "Other", url: "https://github.com/natnael-wubet/AstroNvim", group: "Config", fork: true },
  { name: "kickstart.nvim", description: "Launch point for a personal Neovim configuration", language: "Other", url: "https://github.com/natnael-wubet/kickstart.nvim", group: "Config", fork: true },
  { name: "zeninternet", description: "Website theming for the Zen browser", language: "Other", url: "https://github.com/natnael-wubet/zeninternet", group: "Config", fork: true },
];

export interface Award {
  rank: string;
  title: string;
  org: string;
  detail: string;
  prize?: string;
  year: string;
}

export const awards: Award[] = [
  {
    rank: "1st",
    title: "D5 GameCon",
    org: "D5 GameCon",
    detail: "First place overall with Big XO",
    prize: "Top ranking",
    year: "2026",
  },
  {
    rank: "3rd",
    title: "GDC",
    org: "GDC",
    detail: "Third place with the team",
    prize: "Top 3",
    year: "2026",
  },
  {
    rank: "1st",
    title: "Software Development Competition",
    org: "Bahir Dar University STEM Center",
    detail: "A month-long intensive build sprint, won outright",
    prize: "Samsung Galaxy A1",
    year: "2024",
  },
  {
    rank: "2nd",
    title: "SolveIT",
    org: "icogLabs · US Embassy · Humanity+",
    detail: "Second place with “Hallo Reminder”, shipped with my team",
    prize: "25,000 ETB",
    year: "2024",
  },
  {
    rank: "3rd",
    title: "World Science Day",
    org: "Addis Ababa · Bahir Dar STEM Center",
    detail: "Presented my penetration testing and network scanner suite",
    prize: "Dell Core i7 laptop for the STEM Center",
    year: "2024",
  },
  {
    rank: "Eng",
    title: "UNESCO Innovation Competition",
    org: "UNESCO",
    detail: "Selected to represent as software engineer",
    year: "2024",
  },
];

export interface Certification {
  name: string;
  issuer: string;
  detail: string;
  file: string;
  /** First page of the PDF, rendered to WebP for the card preview. */
  thumb: string;
}

export const certifications: Certification[] = [
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Systems",
    detail: "Networking fundamentals, IP services, security and automation.",
    file: "/assets/ccna.pdf",
    thumb: "/assets/cert-ccna.webp",
  },
  {
    name: "CCNA ITN: Updated Course Completion",
    issuer: "Cisco Networking Academy",
    detail: "Refreshed curriculum completion certificate.",
    file: "/assets/ccna-itn.pdf",
    thumb: "/assets/cert-ccna-itn.webp",
  },
];

export interface Community {
  name: string;
  href?: string;
}

export const communities: Community[] = [
  { name: "BDU STEM Center" },
  { name: "GDC Bahir Dar" },
  { name: "Bahir Dar American Corner" },
  { name: "BIT Club" },
  { name: "Rotract Bahir Dar" },
  { name: "Rotract Bahir Dar Channel", href: "https://t.me/RacBD" },
];

export interface Social {
  label: string;
  handle: string;
  href: string;
  icon: string;
}

export const socials: Social[] = [
  { label: "GitHub", handle: "@natnael-wubet", href: "https://github.com/natnael-wubet", icon: "github" },
  { label: "LinkedIn", handle: "naty-wubet", href: "https://www.linkedin.com/in/naty-wubet-65bb5b193/", icon: "linkedin" },
  { label: "Telegram", handle: "@nnaty_w20", href: "https://t.me/nnaty_w20", icon: "telegram" },
  { label: "Instagram", handle: "@natu.wubet", href: "https://www.instagram.com/natu.wubet/", icon: "instagram" },
  { label: "YouTube", handle: "@abyssscience8601", href: "https://www.youtube.com/@abyssscience8601", icon: "youtube" },
  { label: "TikTok", handle: "@natynatyw", href: "https://www.tiktok.com/@natynatyw", icon: "tiktok" },
  { label: "Reddit", handle: "u/natyw", href: "https://www.reddit.com/user/natyw/", icon: "reddit" },
  { label: "Email", handle: "natyw4122@gmail.com", href: "mailto:natyw4122@gmail.com", icon: "mail" },
  { label: "Phone", handle: "+251 91 819 1930", href: "tel:+251918191930", icon: "phone" },
];

export interface Domain {
  label: string;
  detail: string;
}

export const domains: Domain[] = [
  { label: "Simulation Programming", detail: "Physics, agents and systems modelling" },
  { label: "Full-Stack Engineering", detail: "Design through to deployment and scale" },
  { label: "Mobile & Mini Apps", detail: "Capacitor, Ionic, Telegram Web Apps" },
  { label: "Game Development", detail: "Mechanics, AI opponents, live game loops" },
  { label: "Applied AI", detail: "Diffusion pipelines and model-backed UX" },
  { label: "Offensive Security", detail: "Scanners, payload delivery, credential tooling" },
  { label: "Linux & Customisation", detail: "Neovim, AwesomeWM, Omarchy, dotfiles" },
  { label: "Hardware Integration", detail: "Robotics, C++, embedded control" },
  { label: "Systems Building", detail: "From bare metal to production infra" },
];

export const cvPages = [
  "/pdf/cvimg-000.jpg",
  "/pdf/cvimg-001.jpg",
  "/pdf/cvimg-002.jpg",
  "/pdf/cvimg-003.jpg",
  "/pdf/cvimg-004.jpg",
  "/pdf/cvimg-005.jpg",
  "/pdf/cvimg-006.jpg",
  "/pdf/cvimg-007.jpg",
];

/* ─── Origin story ───────────────────────────────────────────────
   Drawn from Natnael's earlier portfolios, in his own framing.     */

export const originIntro =
  "Thirteen years of code, one straight line from a novel about symbols to writing the symbols myself.";

export const originBody: { lead?: string; text: string }[] = [
  {
    lead: "2013",
    text: "I wrote my first batch code. A calculator, then a manager that copied and moved files in bulk. Small things, but they taught me that a machine will do exactly what you tell it, and nothing more.",
  },
  {
    lead: "The hook",
    text: "What pulled me in was cryptography. I read The Da Vinci Code and could not let go of the idea that a string of characters could hold a secret. So I started writing my own encryption algorithms, moved into .NET, and then fell for Processing, enough that I rebuilt the whole thing for the terminal. That rebuild became ConAnim.",
  },
  {
    lead: "2019–2020",
    text: "Linux, C, Python. Then JavaScript stole my heart and never gave it back. Node for servers, Tauri with Rust for native, and three.js and p5.js for the experimental territory where code stops being utilitarian and starts being fun.",
  },
  {
    lead: "2024 →",
    text: "The AI wave fascinates me regardless of the hype: we can reach a pseudo-mind, make it dream, talk and reason. I have been deep in AI art since before it had a polite name. I believe it will sit beside photography the way photography sits beside painting.",
  },
];

export const heritage = {
  title: "Where I'm from",
  text: "I grew up in Bahir Dar, in a family that valued hard work, community and respect for elders. Ethiopian cuisine, music and the coffee ceremony are not decoration on my life. They are the structure of it. My grandfather was a farmer and craftsman who told stories of ancestors who fought for independence, and every Enkutatesh the whole family still gathers for dance, music and food.",
};

export interface Milestone {
  year: string;
  title: string;
  detail: string;
  tag: string;
}

export const timeline: Milestone[] = [
  { year: "2013", title: "First batch code", detail: "A calculator, then a bulk copy-and-move manager. The first time software did something for me that I had asked it to do.", tag: "Origin" },
  { year: "2016", title: "Fell for cryptography", detail: "The Da Vinci Code started it. Wrote my own encryption algorithms, moved into .NET, and became obsessed with Processing, later rebuilding it for the terminal as ConAnim.", tag: "Security" },
  { year: "2019", title: "Linux, C, Python", detail: "Left the comfortable path. Systems level, robotics with Lego Mindstorm in C++, and Processing/Java for anything visual.", tag: "Systems" },
  { year: "2020", title: "JavaScript stole my heart", detail: "Node for servers, Tauri with Rust for native apps, three.js and p5.js for the experimental kick. Still the language I reach for.", tag: "Web" },
  { year: "2024", title: "The AI wave", detail: "Fascinated that we can access a pseudo-mind: make it dream, talk, reason. Deep in AI art long before it had a polite name.", tag: "AI" },
  { year: "Now", title: "Physics, philosophy, and combining them", detail: "Self-studying philosophy, teaching physics on YouTube, and building the systems that tie all of it together. I see no reason to stop.", tag: "Mind" },
];

/* ─── The interior ─────────────────────────────────────────────── */

export interface Discipline {
  key: string;
  name: string;
  blurb: string;
  tags: string[];
}

export const disciplines: Discipline[] = [
  {
    key: "physics",
    name: "Physics",
    blurb:
      "Relativity, emergence, simulation, quantum mechanics. Not as metaphor. I actually build the models. It started as self-study and turned into a channel I teach on.",
    tags: ["Relativity", "Emergence", "Simulation", "Quantum"],
  },
  {
    key: "philosophy",
    name: "Philosophy",
    blurb:
      "Hegel, Kant, German idealism. Self-taught, and it rewired how I think about systems: nothing exists in isolation, everything is relation all the way down.",
    tags: ["Hegel", "Kant", "German idealism", "Dialectics"],
  },
  {
    key: "psychology",
    name: "Psychology",
    blurb:
      "How minds actually work: attention, bias, motivation. The reason interfaces are hard and the reason games are fun are the same reason.",
    tags: ["Cognition", "Bias", "Motivation"],
  },
  {
    key: "ecology",
    name: "Ecology",
    blurb:
      "Feedback loops, interdependence, carrying capacity. Every distributed system I have built is an ecology, whether I meant it to be or not.",
    tags: ["Systems", "Feedback", "Interdependence"],
  },
  {
    key: "humanism",
    name: "Humanism",
    blurb:
      "People first, and the answer does not come from above. It is the reason I build anything at all, including the games that put real money on the line.",
    tags: ["Secular", "Ethical", "Progress"],
  },
];

export const youtube = {
  handle: "@abyssscience8601",
  url: "https://www.youtube.com/@abyssscience8601",
  title: "Abyss Science",
  blurb: "Physics, taught out loud. Relativity, simulation and emergence, explained the way I wish someone had explained them to me.",
};
