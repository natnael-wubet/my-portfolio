export interface Repo {
  name: string;
  description: string;
  language: string;
  url: string;
  group: "Security" | "Game" | "Tool" | "Config" | "Web";
  stars?: number;
}

export const repos: Repo[] = [
  // Game
  { name: "myProcessingArchive", description: "Processing sketches archive", language: "Processing", url: "https://github.com/natnael-wubet/myProcessingArchive", group: "Game" },
  { name: "dessert_jumper", description: "Endless runner inspired by the Chrome dinosaur", language: "Processing", url: "https://github.com/natnael-wubet/dessert_jumper", group: "Game" },
  { name: "royal_balz_3D", description: "3D brick breaker shipped as an Android APK", language: "Processing", url: "https://github.com/natnael-wubet/royal_balz_3D", group: "Game" },
  { name: "pong", description: "Classic pong rebuilt from scratch", language: "Processing", url: "https://github.com/natnael-wubet/pong", group: "Game" },

  // Security
  { name: "PAYLOADer", description: "Craft and deliver custom payload scripts", language: "PowerShell", url: "https://github.com/natnael-wubet/PAYLOADer", group: "Security", stars: 8 },
  { name: "Ddos", description: "DDoS attack script for web servers", language: "PowerShell", url: "https://github.com/natnael-wubet/Ddos", group: "Security", stars: 8 },
  { name: "windows--password-cracker", description: "Numeric + dictionary attack on locked Windows accounts", language: "PowerShell", url: "https://github.com/natnael-wubet/windows--password-cracker", group: "Security", stars: 8 },
  { name: "exploit_over_http", description: "Deliver scripts across HTTP", language: "PowerShell", url: "https://github.com/natnael-wubet/exploit_over_http", group: "Security", stars: 2 },
  { name: "exploit_over_tcp", description: "Deliver PowerShell over raw TCP", language: "PowerShell", url: "https://github.com/natnael-wubet/exploit_over_tcp", group: "Security" },
  { name: "web-credential-password-attack", description: "Credential attacks against web auth (routers, APs)", language: "PowerShell", url: "https://github.com/natnael-wubet/web-credential-password-attack", group: "Security", stars: 3 },
  { name: "ssh-password-attack", description: "SSH brute-force toolkit", language: "PowerShell", url: "https://github.com/natnael-wubet/ssh-password-attack", group: "Security" },
  { name: "ftp-password-attack", description: "FTP credential cracker", language: "—", url: "https://github.com/natnael-wubet/ftp-password-attack", group: "Security" },
  { name: "hash_cracker", description: "Hash cracking utility", language: "PowerShell", url: "https://github.com/natnael-wubet/hash_cracker", group: "Security" },
  { name: "file-locker", description: "Encrypt and lock any file with AES", language: "PowerShell", url: "https://github.com/natnael-wubet/file-locker", group: "Security" },
  { name: "Powershell_compiler", description: "Compile PowerShell into standalone executables", language: "PowerShell", url: "https://github.com/natnael-wubet/Powershell_compiler", group: "Security" },
  { name: "payloads", description: "Reusable payload script collection", language: "PowerShell", url: "https://github.com/natnael-wubet/payloads", group: "Security" },

  // Tool
  { name: "ConAnim", description: "Console graphics engine with a Processing/p5 API", language: "Python", url: "https://github.com/natnael-wubet/ConAnim", group: "Tool", stars: 3 },
  { name: "Abyss-koffee", description: "Open-source studio for video editors, coders and artists", language: "JavaScript", url: "https://github.com/natnael-wubet/Abyss-koffee", group: "Tool" },
  { name: "abyss-studio", description: "Web studio for simulating game and animation worlds", language: "—", url: "https://github.com/natnael-wubet/abyss-studio", group: "Tool" },
  { name: "creative_manim", description: "Opinionated video-making pipeline with Manim", language: "HTML", url: "https://github.com/natnael-wubet/creative_manim", group: "Tool" },
  { name: "manimexperiment", description: "Animation experiments with Manim", language: "Python", url: "https://github.com/natnael-wubet/manimexperiment", group: "Tool" },
  { name: "image_processing_demos", description: "Image processing algorithms, implemented plainly", language: "Processing", url: "https://github.com/natnael-wubet/image_processing_demos", group: "Tool" },
  { name: "imaging-processing", description: "Image processing scratchpad", language: "—", url: "https://github.com/natnael-wubet/imaging-processing", group: "Tool" },
  { name: "cpu-scheduling-assignment", description: "CPU scheduling algorithm simulator", language: "Python", url: "https://github.com/natnael-wubet/cpu-scheduling-assignment", group: "Tool" },
  { name: "videsk", description: "Desktop video application", language: "TypeScript", url: "https://github.com/natnael-wubet/videsk", group: "Tool" },
  { name: "tauriApp", description: "Tauri experiment for native Android", language: "TypeScript", url: "https://github.com/natnael-wubet/tauriApp", group: "Tool" },

  // Web
  { name: "ticketye_app", description: "Nationwide Ethiopian bus e-ticket system", language: "JavaScript", url: "https://github.com/natnael-wubet/ticketye_app", group: "Web" },
  { name: "academia-iq-web", description: "Academic intelligence platform", language: "Python", url: "https://github.com/natnael-wubet/academia-iq-web", group: "Web" },
  { name: "BookReader", description: "Digital book reading client", language: "TypeScript", url: "https://github.com/natnael-wubet/BookReader", group: "Web" },
  { name: "amecoassets", description: "Asset management platform", language: "—", url: "https://github.com/natnael-wubet/amecoassets", group: "Web" },
  { name: "hallo_reminder", description: "Reminder app — 3rd place at SolveIT", language: "—", url: "https://github.com/natnael-wubet/hallo_reminder", group: "Web" },
  { name: "pubbet", description: "Betting platform", language: "—", url: "https://github.com/natnael-wubet/pubbet", group: "Web" },
  { name: "shama", description: "Web application", language: "JavaScript", url: "https://github.com/natnael-wubet/shama", group: "Web" },
  { name: "ubaj", description: "Web project", language: "—", url: "https://github.com/natnael-wubet/ubaj", group: "Web" },
  { name: "naty-wubet", description: "This portfolio", language: "JavaScript", url: "https://github.com/natnael-wubet/naty-wubet", group: "Web" },

  // Config
  { name: "natis_neovim_config", description: "Personal Neovim configuration", language: "Lua", url: "https://github.com/natnael-wubet/natis_neovim_config", group: "Config" },
  { name: "my-dooit-config", description: "Dooit configuration", language: "—", url: "https://github.com/natnael-wubet/my-dooit-config", group: "Config" },
  { name: "myAwesomewm", description: "AwesomeWM configuration", language: "Lua", url: "https://github.com/natnael-wubet/myAwesomewm", group: "Config" },
  { name: "myneovim", description: "Neovim configuration", language: "Lua", url: "https://github.com/natnael-wubet/myneovim", group: "Config" },
  { name: "myomarchylocal", description: "Omarchy local configuration", language: "—", url: "https://github.com/natnael-wubet/myomarchylocal", group: "Config" },
  { name: "zenbrowserconfig", description: "Zen Browser configuration", language: "CSS", url: "https://github.com/natnael-wubet/zenbrowserconfig", group: "Config" },
  { name: "css_basic", description: "CSS fundamentals", language: "HTML", url: "https://github.com/natnael-wubet/css_basic", group: "Config" },
  { name: "public_p", description: "Public scratch projects", language: "—", url: "https://github.com/natnael-wubet/public_p", group: "Config" },
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
    rank: "3rd",
    title: "SolveIT",
    org: "icogLabs · US Embassy · Humanity+",
    detail: "Shipped “Hallo Reminder” with my team",
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
}

export const certifications: Certification[] = [
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Systems",
    detail: "Networking fundamentals, IP services, security and automation.",
    file: "/assets/ccna.pdf",
  },
  {
    name: "CCNA ITN — Updated Course Completion",
    issuer: "Cisco Networking Academy",
    detail: "Refreshed curriculum completion certificate.",
    file: "/assets/ccna-itn.pdf",
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
