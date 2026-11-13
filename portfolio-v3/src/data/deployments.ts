/**
 * Live deployment registry.
 * Each entry is verified at BUILD TIME by hitting the URL, so the badges
 * on the site reflect real reachability, not vibes.
 */

export type Platform = "Firebase" | "Vercel" | "Telegram";

export interface Deployment {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  platform: Platform;
  year: string;
  stack: string[];
  category: "Product" | "Game" | "Protocol" | "Tool" | "Platform";
  accent: string;
  featured?: boolean;
  /** Telegram Mini App */
  telegram?: boolean;
  /**
   * The hosting for this project is no longer up, but the work is real and
   * documented. Archived entries are never probed and never shown as broken.
   * they link to source instead of a dead URL.
   */
  archived?: boolean;
}

export const deployments: Deployment[] = [
  {
    slug: "bigxo",
    name: "Big XO",
    tagline: "Ultimate Tic Tac Toe",
    description:
      "3×3×3 spatial tic-tac-toe with a single-player AI opponent and local pass-and-play multiplayer. Ships as a Telegram Mini App and a native Android build via Capacitor, with Supabase-backed auth and WebAuthn.",
    url: "https://bigxo.vercel.app",
    platform: "Vercel",
    year: "2026",
    stack: ["Ionic", "React", "TypeScript", "Capacitor", "Tailwind", "Supabase", "Telegram"],
    category: "Game",
    accent: "#8b5cf6",
    featured: true,
    telegram: true,
  },
  {
    slug: "gameo",
    name: "GameO",
    tagline: "Real-money Ethiopian Bingo",
    description:
      "Live bingo rooms with buy-ins, a 5% platform rake, in-app wallets, Chapa payment rails for deposits and Ethiopian bank payouts for withdrawals, plus a full Amharic/English locale switch and a live admin console.",
    url: "https://gameo-five.vercel.app",
    platform: "Vercel",
    year: "2026",
    stack: ["React", "TypeScript", "Tailwind", "Chapa", "Telegram", "i18n"],
    category: "Game",
    accent: "#22c55e",
    featured: true,
    telegram: true,
  },
  {
    slug: "cite-chain",
    name: "Cite-Chain",
    tagline: "Blockchain-verified research attribution",
    description:
      "Provenance protocol for scientific contributions. Hashes are anchored on Bitcoin via OpenTimestamps, pinned content-addressed to IPFS, and contribution splits with royalty distribution settle in audited smart contracts on Base L2. ORCID-linked.",
    url: "https://cite-chain.vercel.app",
    platform: "Vercel",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Bitcoin", "IPFS", "Base L2", "wagmi"],
    category: "Protocol",
    accent: "#f59e0b",
    featured: true,
  },
  {
    slug: "ticketye",
    name: "Ticketye",
    tagline: "Nationwide bus e-ticketing",
    description:
      "Ethiopia's nationwide bus e-ticket system. Route discovery, seat selection, live operator and fare mapping, ticket lifecycle management, and localised multi-language checkout across the national network.",
    url: "https://ticketye.web.app",
    platform: "Firebase",
    year: "2025",
    stack: ["Vue", "Mapbox", "Google Maps", "Semantic UI", "i18n"],
    category: "Platform",
    accent: "#06b6d4",
    featured: true,
  },
  {
    slug: "rim-addis",
    name: "Rim Addis",
    tagline: "Automotive marketplace",
    description:
      "Cross-platform car marketplace for the Ethiopian market. Rich listing detail, geo-based discovery, seller dashboards and Firebase-backed realtime data for vehicle inventory.",
    url: "https://cars-7d4f4.web.app",
    platform: "Firebase",
    year: "2025",
    stack: ["Vue", "Mapbox", "Material Design", "Firebase"],
    category: "Product",
    accent: "#ec4899",
    featured: true,
  },
  {
    slug: "day-flow",
    name: "Day Flow",
    tagline: "Calendar, journal and todos",
    description:
      "A focused daily planner fusing a month calendar, journalling and a task list into one surface, with optimistic writes, keyboard-first entry and undo on destructive actions.",
    url: "https://day-flow-teal-nine.vercel.app",
    platform: "Vercel",
    year: "2026",
    stack: ["React", "Vite", "Radix UI", "Tailwind", "date-fns"],
    category: "Product",
    accent: "#a855f7",
  },
  {
    slug: "scribble-diffusion",
    name: "Scribble Diffusion",
    tagline: "Sketch to refined image",
    description:
      "Draw a rough scribble on any canvas and an AI model refines it into a finished piece. A compact demo of the sketch-conditioning diffusion pipeline end to end.",
    url: "https://scribble-diffusion-nine-pied.vercel.app",
    platform: "Vercel",
    year: "2025",
    stack: ["Next.js", "Diffusion", "Canvas"],
    category: "Tool",
    accent: "#38bdf8",
  },
  {
    slug: "objective-log",
    name: "ObjectiveLog",
    tagline: "Goal tracking with rich text",
    description:
      "Objective journaling built on Aurelia with a rangy rich-text editor, drag-and-drop goal manipulation via interact.js, and a deliberate offline-tolerant architecture.",
    url: "https://ol.web.app",
    platform: "Firebase",
    year: "2024",
    stack: ["Aurelia", "rangy", "interact.js", "JSPM"],
    category: "Tool",
    accent: "#fb923c",
  },
  {
    slug: "bookreader",
    name: "BookReader",
    tagline: "Digital reading client",
    description:
      "A focused reading application with a paginated reader, library management and persistent reading progress. Shipped to Firebase Hosting.",
    url: "https://bookreader.web.app",
    platform: "Firebase",
    year: "2025",
    stack: ["React", "TypeScript", "Firebase"],
    category: "Tool",
    accent: "#14b8a6",
  },
  {
    slug: "eliteconnect",
    name: "EliteConnectET",
    tagline: "Ethiopia's networking platform",
    description:
      "Professional networking for Ethiopia: profiles, connection graphs, event discovery and an admin console, delivered as an installable Capacitor app across Android, iOS and web.",
    url: "https://github.com/natnael-wubet/eliteconnectet",
    platform: "Firebase",
    year: "2026",
    stack: ["React", "TypeScript", "Tailwind", "Capacitor", "Firebase", "Cypress"],
    category: "Platform",
    accent: "#eab308",
    archived: true,
  },
  {
    slug: "abyss-studio",
    name: "Abyss Studio",
    tagline: "Desktop creative studio",
    description:
      "A general-purpose creative studio built as a Vue 3 + Electron desktop app with Three.js/TroisJS 3D scene composition, scroll-driven animation via ScrollMagic and Firebase backend.",
    url: "https://github.com/natnael-wubet/abyss-studio",
    platform: "Firebase",
    year: "2023",
    stack: ["Vue 3", "Electron", "Three.js", "TroisJS", "Firebase"],
    category: "Tool",
    accent: "#d946ef",
    archived: true,
  },
  {
    slug: "bigxo-mini",
    name: "Big XO Mini",
    tagline: "Telegram-native game client",
    description:
      "The stripped, Telegram-first build of Big XO: haptic feedback, custom keyboard handling and safe-area aware layout for running inside a Mini App viewport.",
    url: "https://bigxo-mini-app.web.app",
    platform: "Firebase",
    year: "2026",
    stack: ["Ionic", "Vite", "Capacitor", "Telegram"],
    category: "Game",
    accent: "#a855f7",
    telegram: true,
  },
];

export interface Health {
  status: "live" | "down" | "unknown" | "archived";
  code?: number;
  ms?: number;
  title?: string;
}

const PROBE_TIMEOUT_MS = 15_000;

async function probeOnce(url: string): Promise<{ code: number; ms: number; title?: string }> {
  const started = Date.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PROBE_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "portfolio-healthcheck/1.0" },
    });
    const body = await res.text();
    const title = (body.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1]?.trim();
    return { code: res.status, ms: Date.now() - started, title };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Hits every deployment URL at build time and reports reachability + latency.
 *
 * - Archived projects are never probed: their hosting is gone, so they get a
 *   neutral "archived" state and link to source instead of pretending.
 * - Failed probes are retried once, Firebase Hosting cold starts routinely
 *   blow past a single-shot timeout.
 * - Failures are swallowed, a dead host must never break the build.
 */
export async function checkHealth(): Promise<Record<string, Health>> {
  const entries = await Promise.all(
    deployments.map(async (d): Promise<readonly [string, Health]> => {
      if (d.archived) return [d.slug, { status: "archived" } as Health];

      let result: { code: number; ms: number; title?: string } | null = null;
      for (let attempt = 0; attempt < 2 && !result; attempt++) {
        try {
          result = await probeOnce(d.url);
        } catch {
          // transient, fall through to the retry
        }
      }

      if (!result) return [d.slug, { status: "unknown" } as Health];
      return [
        d.slug,
        {
          status: result.code >= 200 && result.code < 400 ? "live" : "down",
          code: result.code,
          ms: result.ms,
          title: result.title,
        } as Health,
      ];
    })
  );
  return Object.fromEntries(entries);
}
