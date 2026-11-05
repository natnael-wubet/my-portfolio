/**
 * The canonical public record.
 *
 * One object, built from the same data modules the page renders, consumed by
 * /profile.json, /llms.txt, /llms-full.txt, /resume.md and the JSON-LD graph.
 * If a deployment, repo or award changes, every representation changes with it.
 */
import { deployments } from "../data/deployments";
import {
  awards,
  certifications,
  communities,
  disciplines,
  domains,
  repos,
  socials,
  timeline,
  youtube,
} from "../data/content";
import { buildInfo } from "./build";
import { SITE } from "./site";

const social = (label: string) => socials.find((s) => s.label === label);

const email = social("Email")?.handle ?? SITE.email;
const phone = social("Phone")?.handle ?? SITE.phone;
const telegram = social("Telegram")?.href ?? SITE.telegram;
const github = social("GitHub")?.href ?? SITE.github;
const linkedin = social("LinkedIn")?.href ?? SITE.linkedin;

const SUMMARY =
  "Software engineer and full-stack developer in Bahir Dar, Ethiopia. I build games with real stakes, protocols that prove things, and platforms that ship — from a Telegram bingo room taking real money, to a Bitcoin-anchored citation ledger, to the offensive-security tooling I started with. More than a decade of code, from batch scripts and cryptography to TypeScript, Rust and three.js, with a parallel practice in physics and philosophy.";

const SKILLS = [
  {
    name: "Full-stack",
    keywords: ["TypeScript", "JavaScript", "React", "Vue", "Next.js", "Node.js", "Tailwind", "REST"],
  },
  {
    name: "Mobile & mini apps",
    keywords: ["Ionic", "Capacitor", "Telegram Mini Apps", "Tauri", "Android"],
  },
  {
    name: "Data & backend",
    keywords: ["Firebase", "Supabase", "PostgreSQL", "WebAuthn", "Auth", "Payments"],
  },
  {
    name: "Games & graphics",
    keywords: ["Processing", "p5.js", "three.js", "WebGL", "Game loops", "AI opponents"],
  },
  {
    name: "Security",
    keywords: ["PowerShell", "Python", "C", "Linux", "Network scanning", "Credential tooling", "AES"],
  },
  {
    name: "Protocols",
    keywords: ["Bitcoin", "OpenTimestamps", "IPFS", "Base L2", "EVM", "Cryptography"],
  },
];

const LANGUAGES = [
  { language: "Amharic", code: "am", fluency: "Native" },
  { language: "English", code: "en", fluency: "Professional working proficiency" },
];

export const buildProfile = () => {
  const build = buildInfo();

  return {
    $schema: `${SITE.url}/profile.schema.json`,
    meta: {
      version: "1.0.0",
      generated: build.time,
      commit: build.commit,
      canonical: `${SITE.url}/profile.json`,
      source: SITE.repo,
      license: "CC-BY-4.0",
      locales: {
        en: `${SITE.url}${SITE.locales.en}`,
        am: `${SITE.url}${SITE.locales.am}`,
      },
      counts: {
        projects: deployments.length,
        repositories: repos.length,
        awards: awards.length,
        certificates: certifications.length,
      },
    },
    basics: {
      name: SITE.name,
      label: SITE.role,
      image: `${SITE.url}/og.png`,
      email,
      phone,
      url: `${SITE.url}/`,
      summary: SUMMARY,
      location: {
        city: SITE.location.city,
        region: SITE.location.region,
        country: SITE.location.country,
        countryCode: SITE.location.countryCode,
      },
      profiles: socials
        .filter((s) => !["Email", "Phone"].includes(s.label))
        .map((s) => ({
          network: s.label,
          username: s.handle.replace(/^@/, ""),
          url: s.href,
        })),
    },
    availability: {
      status: "open",
      roles: ["Software Engineer", "Full-stack Engineer", "Founding Engineer"],
      arrangement: "Remote or Bahir Dar, Ethiopia",
      timezone: SITE.timezone,
      utcOffset: SITE.utcOffset,
      note: "Open to ambitious engineering work. Email is the fastest route; Telegram is the fastest conversation.",
    },
    projects: deployments.map((d) => ({
      slug: d.slug,
      name: d.name,
      tagline: d.tagline,
      description: d.description,
      url: d.url,
      year: d.year,
      category: d.category,
      platform: d.platform,
      status: d.archived ? "archived" : "deployed",
      keywords: d.stack,
      telegram: Boolean(d.telegram),
      featured: Boolean(d.featured),
    })),
    openSource: repos.map((r) => ({
      name: r.name,
      description: r.description,
      language: r.language,
      group: r.group,
      url: r.url,
      stars: r.stars ?? 0,
      fork: Boolean(r.fork),
    })),
    skills: SKILLS,
    languages: LANGUAGES,
    awards: awards.map((a) => ({
      title: a.title,
      rank: a.rank,
      awarder: a.org,
      summary: a.detail,
      prize: a.prize ?? null,
      year: a.year,
    })),
    certificates: certifications.map((c) => ({
      name: c.name,
      issuer: c.issuer,
      summary: c.detail,
      url: `${SITE.url}${c.file}`,
    })),
    interests: disciplines.map((d) => ({
      name: d.name,
      description: d.blurb,
      keywords: d.tags,
    })),
    timeline: timeline.map((m) => ({
      year: m.year,
      title: m.title,
      summary: m.detail,
      tag: m.tag,
    })),
    domains: domains.map((d) => ({ name: d.label, summary: d.detail })),
    communities: communities.map((c) => ({ name: c.name, url: c.href ?? null })),
    media: {
      youtube: {
        title: youtube.title,
        url: youtube.url,
        summary: youtube.blurb,
      },
    },
    contact: {
      email,
      phone,
      telegram,
      github,
      linkedin,
      location: `${SITE.location.city}, ${SITE.location.country}`,
      timezone: SITE.timezone,
    },
    agent: {
      readFirst: `${SITE.url}/llms.txt`,
      fullText: `${SITE.url}/llms-full.txt`,
      profile: `${SITE.url}/profile.json`,
      resume: `${SITE.url}/resume.md`,
      human: `${SITE.url}/`,
      amharic: `${SITE.url}/am/`,
      citation: `${SITE.name} — ${SITE.role}, ${SITE.location.city}, ${SITE.location.country}. ${SITE.url}/`,
      note: "Generated at build time from the same source as the site. Project URLs are the evidence; prefer them over prose. Archived projects are real work whose hosting is gone, and link to source. The site is static: no cookies, no trackers, no client analytics.",
    },
  };
};

export const profile = buildProfile();
export type Profile = ReturnType<typeof buildProfile>;
