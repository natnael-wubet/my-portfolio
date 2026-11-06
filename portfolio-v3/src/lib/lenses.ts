/**
 * The five hiring lenses, in one place.
 *
 * Brief.astro renders them as a document; Fit.astro uses the same project
 * mapping to decide which lens a role description points at. A slug that no
 * longer exists simply drops out at render time.
 */
export interface LensDef {
  id: string;
  deploy: string[];
  repos: string[];
  awards: string[];
  skills: string[];
}

export const LENS_DEFS: LensDef[] = [
  {
    id: "product",
    deploy: ["bigxo", "gameo", "ticketye", "day-flow"],
    repos: ["hallo_reminder", "amecoassets", "ticketye_app"],
    awards: ["SolveIT"],
    skills: ["TypeScript", "React", "Next", "Vue", "Ionic", "Capacitor", "Firebase", "Supabase", "Node"],
  },
  {
    id: "games",
    deploy: ["bigxo", "bigxo-mini", "gameo"],
    repos: ["ConAnim", "royal_balz_3D", "dessert_jumper", "pong"],
    awards: ["D5 GameCon", "GDC"],
    skills: ["Processing", "p5.js", "Three.js", "TypeScript", "AI opponents", "Game loops"],
  },
  {
    id: "security",
    deploy: [],
    repos: [
      "PAYLOADer",
      "windows--password-cracker",
      "ssh-password-attack",
      "hash_cracker",
      "file-locker",
      "payloads",
    ],
    awards: ["World Science Day"],
    skills: ["PowerShell", "Python", "C", "Linux", "Network scanning", "Credential tooling"],
  },
  {
    id: "protocols",
    deploy: ["cite-chain"],
    repos: [],
    awards: ["SolveIT"],
    skills: ["Bitcoin", "OpenTimestamps", "IPFS", "Base L2", "Cryptography", "TypeScript"],
  },
  {
    id: "founding",
    deploy: ["gameo", "bigxo", "ticketye", "rim-addis"],
    repos: ["ticketye_app", "hallo_reminder", "amecoassets"],
    awards: ["Software Development Competition"],
    skills: ["TypeScript", "Node", "React", "PostgreSQL", "Firebase", "Chapa", "Linux"],
  },
];
