/**
 * Local role-fit analysis.
 *
 * Pure, synchronous, and dependency-free: the same function runs in the
 * browser (inside Fit.astro) and in a Node test. The job description never
 * leaves the page; only the profile's own vocabulary is compared with it.
 *
 * The point is honesty, not a score to game. Terms are split into:
 *   tech      — counted in coverage; absence is a real gap
 *   domain    — counted when present, never shown as a gap
 *   practice  — shown when present, never punished for absence
 */
import type { LensDef } from "./lenses";

export type TermKind = "tech" | "domain" | "practice";

export type TermCategory =
  | "Frontend"
  | "Backend"
  | "Data"
  | "Cloud"
  | "Mobile"
  | "Security"
  | "Protocols"
  | "Games"
  | "AI"
  | "Domain"
  | "Practice";

export interface FitTerm {
  name: string;
  kind: TermKind;
  category: TermCategory;
  aliases: string[];
}

export interface FitProject {
  slug: string;
  name: string;
  tagline: string;
  taglineLocal?: string;
  description: string;
  descriptionLocal?: string;
  url: string;
  year: string;
  category: string;
  stack: string[];
  status: string;
}

export interface FitRepo {
  name: string;
  description: string;
  descriptionLocal?: string;
  language: string;
  group: string;
  url: string;
  stars: number;
  fork: boolean;
}

export interface FitData {
  projects: FitProject[];
  repos: FitRepo[];
  skills: { name: string; keywords: string[] }[];
  domains: { name: string; summary: string; nameLocal?: string; summaryLocal?: string }[];
  interests: {
    name: string;
    description: string;
    keywords: string[];
    nameLocal?: string;
    descriptionLocal?: string;
  }[];
  awards: { title: string; summary: string; year: string; titleLocal?: string; summaryLocal?: string }[];
  lenses: (LensDef & { title: string })[];
  contact: {
    name: string;
    email: string;
    telegram: string;
    github: string;
    linkedin: string;
    location: string;
    timezone: string;
  };
}

export interface FitSignal {
  name: string;
  category: TermCategory;
  kind: TermKind;
}

export interface FitEvidence {
  kind: "project" | "repo";
  id: string;
  name: string;
  score: number;
  hits: string[];
}

export interface FitResult {
  roleTitle: string;
  wordCount: number;
  coverage: number;
  matched: string[];
  gaps: string[];
  signals: FitSignal[];
  evidence: FitEvidence[];
  lens: { id: string; score: number } | null;
  noTerms: boolean;
  mentionedCount: number;
}

/**
 * Lowercase, and treat "-" and "_" as spaces, so a repo called
 * "windows--password-cracker" matches the phrase "password cracker" and a JD
 * that writes "full-stack" matches the "full stack" alias.
 */
const norm = (value: string) =>
  value
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const term = (
  name: string,
  category: TermCategory,
  kind: TermKind,
  aliases: string[]
): FitTerm => ({ name, category, kind, aliases: aliases.map(norm) });

/**
 * A curated vocabulary. It is deliberately opinionated: words that are common
 * outside engineering ("rest", "go", "spring", "processing") only appear in
 * unambiguous phrases, so the result does not hallucinate a match.
 */
export const TERMS: FitTerm[] = [
  // Frontend
  term("TypeScript", "Frontend", "tech", ["typescript", "ts"]),
  term("JavaScript", "Frontend", "tech", ["javascript", "js", "ecmascript"]),
  term("React", "Frontend", "tech", ["react", "react.js", "reactjs"]),
  term("Vue", "Frontend", "tech", ["vue", "vue.js", "vuejs"]),
  term("Next.js", "Frontend", "tech", ["next.js", "nextjs", "next js"]),
  term("Angular", "Frontend", "tech", ["angular"]),
  term("Svelte", "Frontend", "tech", ["svelte", "sveltekit"]),
  term("Astro", "Frontend", "tech", ["astro"]),
  term("Tailwind", "Frontend", "tech", ["tailwind", "tailwindcss"]),
  term("HTML", "Frontend", "tech", ["html", "html5"]),
  term("CSS", "Frontend", "tech", ["css", "css3"]),
  term("WebGL", "Frontend", "tech", ["webgl"]),
  term("Three.js", "Frontend", "tech", ["three.js", "threejs", "three js"]),
  term("p5.js", "Frontend", "tech", ["p5.js", "p5js"]),
  term("Vite", "Frontend", "tech", ["vite"]),
  term("Accessibility", "Frontend", "tech", ["accessibility", "a11y", "wcag"]),
  term("Design systems", "Frontend", "tech", ["design system", "design systems", "component library"]),
  term("i18n", "Frontend", "tech", ["i18n", "internationalization", "internationalisation", "localization", "localisation"]),
  term("Storybook", "Frontend", "tech", ["storybook"]),
  term("Figma", "Frontend", "tech", ["figma"]),

  // Backend & data
  term("Node.js", "Backend", "tech", ["node.js", "nodejs", "node js", "node"]),
  term("Python", "Backend", "tech", ["python"]),
  term("C", "Backend", "tech", ["c language", "c programming"]),
  term("C++", "Backend", "tech", ["c++", "cpp"]),
  term("C#", "Backend", "tech", ["c#", "csharp", ".net", "dotnet"]),
  term("Java", "Backend", "tech", ["java"]),
  term("Go", "Backend", "tech", ["golang", "go language"]),
  term("Rust", "Backend", "tech", ["rust"]),
  term("PHP", "Backend", "tech", ["php"]),
  term("Ruby", "Backend", "tech", ["ruby", "rails"]),
  term("PostgreSQL", "Data", "tech", ["postgresql", "postgres", "psql"]),
  term("SQL", "Data", "tech", ["sql"]),
  term("Supabase", "Data", "tech", ["supabase"]),
  term("Firebase", "Data", "tech", ["firebase", "firestore"]),
  term("REST", "Backend", "tech", ["rest api", "restful", "restful api"]),
  term("GraphQL", "Backend", "tech", ["graphql"]),
  term("Redis", "Data", "tech", ["redis"]),
  term("Kafka", "Data", "tech", ["kafka"]),
  term("RabbitMQ", "Data", "tech", ["rabbitmq"]),
  term("Prisma", "Data", "tech", ["prisma", "orm", "drizzle"]),
  term("Auth", "Backend", "tech", ["auth", "authentication", "authorization", "oauth"]),
  term("WebAuthn", "Backend", "tech", ["webauthn", "passkeys"]),
  term("Payments", "Backend", "tech", ["payments", "payment rails", "payment processing"]),
  term("Stripe", "Backend", "tech", ["stripe"]),
  term("Chapa", "Backend", "tech", ["chapa"]),
  term("Realtime", "Backend", "tech", ["realtime", "real-time", "websockets", "websocket"]),
  term("Mapbox", "Frontend", "tech", ["mapbox", "google maps", "gis", "geospatial"]),

  // Cloud & delivery
  term("Docker", "Cloud", "tech", ["docker", "containers", "containerization"]),
  term("Kubernetes", "Cloud", "tech", ["kubernetes", "k8s"]),
  term("AWS", "Cloud", "tech", ["aws", "amazon web services", "ec2", "s3", "lambda"]),
  term("GCP", "Cloud", "tech", ["gcp", "google cloud"]),
  term("Azure", "Cloud", "tech", ["azure"]),
  term("Vercel", "Cloud", "tech", ["vercel"]),
  term("CI/CD", "Cloud", "tech", ["ci/cd", "cicd", "continuous integration", "github actions"]),
  term("Git", "Cloud", "tech", ["git", "github", "version control"]),
  term("Testing", "Cloud", "tech", ["unit testing", "integration testing", "e2e testing", "playwright", "cypress", "jest", "vitest"]),
  term("Observability", "Cloud", "tech", ["observability", "monitoring", "sentry", "datadog"]),
  term("Serverless", "Cloud", "tech", ["serverless", "edge functions"]),

  // Mobile & mini apps
  term("Ionic", "Mobile", "tech", ["ionic"]),
  term("Capacitor", "Mobile", "tech", ["capacitor"]),
  term("Tauri", "Mobile", "tech", ["tauri"]),
  term("Android", "Mobile", "tech", ["android"]),
  term("iOS", "Mobile", "tech", ["ios", "swift", "swiftui"]),
  term("Kotlin", "Mobile", "tech", ["kotlin"]),
  term("Telegram Mini Apps", "Mobile", "tech", ["telegram mini app", "telegram mini apps", "mini app", "mini apps"]),
  term("Haptics", "Mobile", "tech", ["haptics", "haptic"]),

  // Games
  term("Game loops", "Games", "tech", ["game loop", "game loops", "gameplay"]),
  term("Game AI", "Games", "tech", ["game ai", "ai opponent", "ai opponents"]),
  term("Unity", "Games", "tech", ["unity", "unity3d"]),
  term("Unreal", "Games", "tech", ["unreal", "unreal engine"]),
  term("Godot", "Games", "tech", ["godot"]),
  term("Creative coding", "Games", "tech", ["creative coding", "processing.js"]),

  // Security
  term("PowerShell", "Security", "tech", ["powershell", "pwsh"]),
  term("Penetration testing", "Security", "tech", ["penetration testing", "pentest", "pentesting", "offensive security", "red team", "exploit", "exploits"]),
  term("Network scanning", "Security", "tech", ["network scanning", "network scanner", "port scanning"]),
  term("Credential tooling", "Security", "tech", ["credential", "credentials", "brute force", "brute-force", "password cracking", "password cracker", "password attack", "hash cracking", "hash cracker"]),
  term("Payload delivery", "Security", "tech", ["payload", "payloads", "payload delivery"]),
  term("Linux", "Security", "tech", ["linux", "unix", "bash", "shell"]),
  term("Burp Suite", "Security", "tech", ["burp", "burp suite"]),
  term("Nmap", "Security", "tech", ["nmap"]),
  term("Metasploit", "Security", "tech", ["metasploit"]),
  term("Wireshark", "Security", "tech", ["wireshark"]),
  term("OWASP", "Security", "tech", ["owasp"]),

  // Protocols & research
  term("Bitcoin", "Protocols", "tech", ["bitcoin", "btc"]),
  term("OpenTimestamps", "Protocols", "tech", ["opentimestamps", "timestamping"]),
  term("IPFS", "Protocols", "tech", ["ipfs", "content addressing"]),
  term("Base L2", "Protocols", "tech", ["base l2", "base network", "layer 2", "l2"]),
  term("EVM", "Protocols", "tech", ["evm", "ethereum"]),
  term("Cryptography", "Protocols", "tech", ["cryptography", "encryption", "aes", "hashing"]),
  term("Solidity", "Protocols", "tech", ["solidity"]),
  term("Smart contracts", "Protocols", "tech", ["smart contract", "smart contracts"]),
  term("ORCID", "Protocols", "tech", ["orcid"]),

  // AI
  term("AI", "AI", "tech", ["ai", "artificial intelligence"]),
  term("Machine learning", "AI", "tech", ["machine learning", "ml"]),
  term("LLM", "AI", "tech", ["llm", "large language model"]),
  term("RAG", "AI", "tech", ["rag", "retrieval augmented generation"]),
  term("Diffusion", "AI", "tech", ["diffusion", "stable diffusion"]),
  term("PyTorch", "AI", "tech", ["pytorch"]),
  term("TensorFlow", "AI", "tech", ["tensorflow"]),
  term("OpenAI", "AI", "tech", ["openai", "gpt"]),
  term("Computer vision", "AI", "tech", ["computer vision"]),

  // Domains — counted when present, never listed as gaps
  term("Full-stack", "Domain", "domain", ["full-stack", "full stack", "fullstack"]),
  term("Frontend", "Domain", "domain", ["frontend", "front-end", "front end"]),
  term("Backend", "Domain", "domain", ["backend", "back-end", "back end"]),
  term("Mobile", "Domain", "domain", ["mobile", "mobile development"]),
  term("Game development", "Domain", "domain", ["game development", "game engineer", "gameplay engineer"]),
  term("Security", "Domain", "domain", ["security", "application security", "appsec"]),
  term("Protocols", "Domain", "domain", ["protocols", "protocol engineering"]),
  term("Blockchain", "Domain", "domain", ["blockchain", "web3", "distributed ledger"]),
  term("Fintech", "Domain", "domain", ["fintech", "financial technology"]),
  term("Marketplace", "Domain", "domain", ["marketplace", "e-commerce", "ecommerce"]),
  term("Ticketing", "Domain", "domain", ["ticketing", "e-ticket", "eticketing"]),
  term("Research", "Domain", "domain", ["research", "academic", "scientific"]),
  term("Physics", "Domain", "domain", ["physics", "simulation"]),
  term("Product", "Domain", "domain", ["product", "product engineer"]),

  // Practice — shown when present, never punished for absence
  term("Leadership", "Practice", "practice", ["lead", "leadership", "mentor", "mentoring"]),
  term("Communication", "Practice", "practice", ["communication", "writing", "documentation"]),
  term("Open source", "Practice", "practice", ["open source", "open-source", "oss"]),
  term("Startup", "Practice", "practice", ["startup", "founding", "founder", "0 to 1", "zero to one"]),
  term("Remote", "Practice", "practice", ["remote", "distributed team"]),
  term("Design", "Practice", "practice", ["design", "ux", "ui/ux"]),
  term("Performance", "Practice", "practice", ["performance", "web vitals", "core web vitals"]),
  term("Teaching", "Practice", "practice", ["teaching", "teacher", "explainer", "youtube"]),
];

const WEIGHT: Record<TermKind, number> = { tech: 3, domain: 2, practice: 1 };

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const regexCache = new Map<string, RegExp>();

/**
 * Two-letter aliases need a dot guard: "js" is JavaScript, but ".js" in
 * "Next.js" is not. The lookbehind keeps the common abbreviations useful
 * without turning every framework into a JavaScript match.
 */
const SPECIAL_PATTERNS: Record<string, string> = {
  js: "(?<![.a-z0-9])js(?![a-z0-9])",
  ts: "(?<![.a-z0-9])ts(?![a-z0-9])",
};

/** Word-ish boundaries that still work for "c++", "c#", ".net" and "node.js". */
const phraseRegex = (phrase: string): RegExp => {
  const special = SPECIAL_PATTERNS[phrase];
  if (special) return new RegExp(special, "i");
  const escaped = escapeRegExp(phrase);
  const start = /^[a-z0-9]/i.test(phrase) ? "(?<![a-z0-9])" : "";
  const end = /[a-z0-9]$/i.test(phrase) ? "(?![a-z0-9])" : "";
  return new RegExp(`${start}${escaped}${end}`, "i");
};

const hasPhrase = (text: string, phrase: string): boolean => {
  let regex = regexCache.get(phrase);
  if (!regex) {
    regex = phraseRegex(phrase);
    regexCache.set(phrase, regex);
  }
  return regex.test(text);
};

const unique = <T>(values: T[]): T[] => [...new Set(values)];

const profileCorpus = (data: FitData): string =>
  norm(
    [
      ...data.skills.flatMap((skill) => [skill.name, ...skill.keywords]),
      ...data.projects.flatMap((project) => [
        project.name,
        project.tagline,
        project.description,
        ...project.stack,
      ]),
      ...data.repos.flatMap((repo) => [
        repo.name,
        repo.description,
        repo.language,
        repo.group,
      ]),
      ...data.domains.flatMap((domain) => [domain.name, domain.summary]),
      ...data.interests.flatMap((interest) => [
        interest.name,
        interest.description,
        ...interest.keywords,
      ]),
      ...data.awards.flatMap((award) => [award.title, award.summary]),
      // The site itself is evidence: it is an Astro build, deployed on
      // Firebase/Vercel, with an i18n layer and an accessibility pass.
      "Astro Vite GSAP Lenis accessibility i18n GitHub Linux Vercel Firebase Hosting design",
    ].join(" \n ")
  );

const extractRoleTitle = (text: string): string => {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const labelled = lines.find((line) => /^(role|job title|position|title)\s*[:\-–]\s*\S/i.test(line));
  if (labelled) {
    return labelled.replace(/^[^:\-–]+[:\-–]\s*/, "").slice(0, 90).trim();
  }

  const first = lines[0]?.replace(/^#+\s*/, "").replace(/[*_`]/g, "").trim();
  return first ? first.slice(0, 90) : "";
};

export const analyzeFit = (raw: string, data: FitData): FitResult => {
  const text = norm(raw);
  const roleTitle = extractRoleTitle(raw);
  const wordCount = raw.trim() ? raw.trim().split(/\s+/).length : 0;

  const corpus = profileCorpus(data);
  const has = new Map<string, boolean>();
  TERMS.forEach((entry) => {
    has.set(entry.name, entry.aliases.some((alias) => hasPhrase(corpus, alias)));
  });

  const mentioned = TERMS.filter((entry) => entry.aliases.some((alias) => hasPhrase(text, alias)));
  const matched = mentioned.filter((entry) => has.get(entry.name));
  const gaps = mentioned.filter((entry) => !has.get(entry.name) && entry.kind === "tech");

  const countedMatched = matched.filter((entry) => entry.kind !== "practice");
  const denominator = countedMatched.length + gaps.length;
  const coverage = denominator ? Math.round((countedMatched.length / denominator) * 100) : 0;

  const projectScores = data.projects
    .map((project) => {
      const projectText = norm(
        [project.name, project.tagline, project.description, ...project.stack].join(" \n ")
      );
      const hits = mentioned.filter((entry) =>
        entry.aliases.some((alias) => hasPhrase(projectText, alias))
      );
      const stackHits = mentioned.filter((entry) =>
        project.stack.some((skill) => entry.aliases.some((alias) => hasPhrase(norm(skill), alias)))
      );
      const score =
        hits.reduce((sum, entry) => sum + WEIGHT[entry.kind], 0) + stackHits.length * 2;
      return { project, score, hits: unique(hits.map((entry) => entry.name)) };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || a.project.name.localeCompare(b.project.name));

  // Repositories are evidence too — especially for security, where the work
  // lives in code rather than in a live deployment.
  const repoScores = data.repos
    .map((repo) => {
      const repoText = norm(
        [repo.name, repo.description, repo.language, repo.group].join(" \n ")
      );
      const hits = mentioned.filter((entry) =>
        entry.aliases.some((alias) => hasPhrase(repoText, alias))
      );
      const score = hits.reduce((sum, entry) => sum + WEIGHT[entry.kind], 0);
      return { repo, score, hits: unique(hits.map((entry) => entry.name)) };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || a.repo.name.localeCompare(b.repo.name));

  const scoreBySlug = new Map(projectScores.map((row) => [row.project.slug, row.score]));
  const scoreByName = new Map(repoScores.map((row) => [row.repo.name, row.score]));
  const lensScores = data.lenses
    .map((lens) => {
      const projectPart = lens.deploy.reduce(
        (sum, slug) => sum + (scoreBySlug.get(slug) ?? 0),
        0
      );
      const repoPart = lens.repos.reduce(
        (sum, name) => sum + (scoreByName.get(name) ?? 0),
        0
      );
      const skillPart = lens.skills.reduce((sum, skill) => {
        const normalized = norm(skill);
        return (
          sum +
          (mentioned.some((entry) =>
            entry.aliases.some((alias) => hasPhrase(normalized, alias))
          )
            ? 2
            : 0)
        );
      }, 0);
      return { id: lens.id, score: projectPart + repoPart + skillPart };
    })
    .sort((a, b) => b.score - a.score);

  const signals = [...matched].sort(
    (a, b) => WEIGHT[b.kind] - WEIGHT[a.kind] || a.name.localeCompare(b.name)
  );

  const winningLens = lensScores[0] && lensScores[0].score > 0 ? lensScores[0] : null;
  const lensDef = winningLens
    ? data.lenses.find((lens) => lens.id === winningLens.id) ?? null
    : null;

  // Evidence ordering: the winning lens first (its deployments, then its
  // repositories), then everything else by score. A games role sees games;
  // a security role sees the security repos even though it has no deployment.
  const evidence: FitEvidence[] = [];
  const seen = new Set<string>();

  const addProject = (row: (typeof projectScores)[number]) => {
    const key = `project:${row.project.slug}`;
    if (seen.has(key) || evidence.length >= 5) return;
    seen.add(key);
    evidence.push({
      kind: "project",
      id: row.project.slug,
      name: row.project.name,
      score: row.score,
      hits: row.hits,
    });
  };

  const addRepo = (row: (typeof repoScores)[number]) => {
    const key = `repo:${row.repo.name}`;
    if (seen.has(key) || evidence.length >= 5) return;
    seen.add(key);
    evidence.push({
      kind: "repo",
      id: row.repo.name,
      name: row.repo.name,
      score: row.score,
      hits: row.hits,
    });
  };

  if (lensDef) {
    lensDef.deploy.forEach((slug) => {
      const row = projectScores.find((entry) => entry.project.slug === slug);
      if (row) addProject(row);
    });
    lensDef.repos.forEach((name) => {
      const row = repoScores.find((entry) => entry.repo.name === name);
      if (row) addRepo(row);
    });
  }

  projectScores.forEach(addProject);
  repoScores.forEach(addRepo);

  return {
    roleTitle,
    wordCount,
    coverage,
    matched: matched.map((entry) => entry.name),
    gaps: gaps.map((entry) => entry.name),
    signals: signals.map((entry) => ({
      name: entry.name,
      category: entry.category,
      kind: entry.kind,
    })),
    evidence,
    lens: winningLens,
    noTerms: mentioned.length === 0,
    mentionedCount: mentioned.length,
  };
};
