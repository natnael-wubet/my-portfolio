/**
 * A real JSON Schema for /profile.json.
 *
 * The profile is self-describing: it points at this schema, so an agent (or a
 * human with a validator) can check the shape instead of guessing. Keep this
 * in step with src/lib/profile.ts, it is intentionally strict at the root.
 */
import { SITE } from "./site";

const str = { type: "string" } as const;
const nullableStr = { type: ["string", "null"] } as const;
const stringArray = { type: "array", items: { type: "string" } } as const;

export const profileSchema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: `${SITE.url}/profile.schema.json`,
  title: "Natnael Wubet · public profile",
  description:
    "Canonical machine-readable profile, generated from the portfolio's source data at build time.",
  type: "object",
  additionalProperties: false,
  required: [
    "$schema",
    "meta",
    "basics",
    "availability",
    "projects",
    "openSource",
    "skills",
    "languages",
    "awards",
    "certificates",
    "interests",
    "timeline",
    "domains",
    "communities",
    "media",
    "contact",
    "agent",
  ],
  properties: {
    $schema: { type: "string", format: "uri-reference" },
    meta: {
      type: "object",
      additionalProperties: false,
      required: ["version", "generated", "commit", "canonical", "source", "license", "locales", "counts"],
      properties: {
        version: str,
        generated: { type: "string", format: "date-time" },
        commit: str,
        canonical: { type: "string", format: "uri" },
        source: { type: "string", format: "uri" },
        license: str,
        locales: {
          type: "object",
          additionalProperties: false,
          required: ["en", "am"],
          properties: { en: { type: "string", format: "uri" }, am: { type: "string", format: "uri" } },
        },
        counts: {
          type: "object",
          additionalProperties: false,
          required: ["projects", "repositories", "awards", "certificates"],
          properties: {
            projects: { type: "integer", minimum: 0 },
            repositories: { type: "integer", minimum: 0 },
            awards: { type: "integer", minimum: 0 },
            certificates: { type: "integer", minimum: 0 },
          },
        },
      },
    },
    basics: {
      type: "object",
      additionalProperties: false,
      required: ["name", "label", "image", "email", "phone", "url", "summary", "location", "profiles"],
      properties: {
        name: str,
        label: str,
        image: { type: "string", format: "uri" },
        email: { type: "string", format: "email" },
        phone: str,
        url: { type: "string", format: "uri" },
        summary: str,
        location: {
          type: "object",
          additionalProperties: false,
          required: ["city", "region", "country", "countryCode"],
          properties: { city: str, region: str, country: str, countryCode: str },
        },
        profiles: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            required: ["network", "username", "url"],
            properties: { network: str, username: str, url: { type: "string", format: "uri" } },
          },
        },
      },
    },
    availability: {
      type: "object",
      additionalProperties: false,
      required: ["status", "roles", "arrangement", "timezone", "utcOffset", "note"],
      properties: {
        status: { type: "string", enum: ["open", "closed"] },
        roles: stringArray,
        arrangement: str,
        timezone: str,
        utcOffset: str,
        note: str,
      },
    },
    projects: { type: "array", items: { $ref: "#/$defs/project" } },
    openSource: { type: "array", items: { $ref: "#/$defs/repository" } },
    skills: { type: "array", items: { $ref: "#/$defs/skill" } },
    languages: { type: "array", items: { $ref: "#/$defs/language" } },
    awards: { type: "array", items: { $ref: "#/$defs/award" } },
    certificates: { type: "array", items: { $ref: "#/$defs/certificate" } },
    interests: { type: "array", items: { $ref: "#/$defs/interest" } },
    timeline: { type: "array", items: { $ref: "#/$defs/milestone" } },
    domains: { type: "array", items: { $ref: "#/$defs/domain" } },
    communities: { type: "array", items: { $ref: "#/$defs/community" } },
    media: {
      type: "object",
      additionalProperties: false,
      required: ["youtube"],
      properties: {
        youtube: {
          type: "object",
          additionalProperties: false,
          required: ["title", "url", "summary"],
          properties: { title: str, url: { type: "string", format: "uri" }, summary: str },
        },
      },
    },
    contact: {
      type: "object",
      additionalProperties: false,
      required: ["email", "phone", "telegram", "github", "linkedin", "location", "timezone"],
      properties: {
        email: { type: "string", format: "email" },
        phone: str,
        telegram: { type: "string", format: "uri" },
        github: { type: "string", format: "uri" },
        linkedin: { type: "string", format: "uri" },
        location: str,
        timezone: str,
      },
    },
    agent: {
      type: "object",
      additionalProperties: false,
      required: ["readFirst", "fullText", "profile", "resume", "human", "amharic", "citation", "note"],
      properties: {
        readFirst: { type: "string", format: "uri" },
        fullText: { type: "string", format: "uri" },
        profile: { type: "string", format: "uri" },
        resume: { type: "string", format: "uri" },
        human: { type: "string", format: "uri" },
        amharic: { type: "string", format: "uri" },
        citation: str,
        note: str,
      },
    },
  },
  $defs: {
    project: {
      type: "object",
      additionalProperties: false,
      required: [
        "slug",
        "name",
        "tagline",
        "description",
        "url",
        "year",
        "category",
        "platform",
        "status",
        "keywords",
        "telegram",
        "featured",
      ],
      properties: {
        slug: str,
        name: str,
        tagline: str,
        description: str,
        url: { type: "string", format: "uri" },
        year: str,
        category: { type: "string", enum: ["Product", "Game", "Protocol", "Tool", "Platform"] },
        platform: { type: "string", enum: ["Firebase", "Vercel", "Telegram"] },
        status: { type: "string", enum: ["deployed", "archived"] },
        keywords: stringArray,
        telegram: { type: "boolean" },
        featured: { type: "boolean" },
      },
    },
    repository: {
      type: "object",
      additionalProperties: false,
      required: ["name", "description", "language", "group", "url", "stars", "fork"],
      properties: {
        name: str,
        description: str,
        language: str,
        group: { type: "string", enum: ["Security", "Game", "Tool", "Config", "Web"] },
        url: { type: "string", format: "uri" },
        stars: { type: "integer", minimum: 0 },
        fork: { type: "boolean" },
      },
    },
    skill: {
      type: "object",
      additionalProperties: false,
      required: ["name", "keywords"],
      properties: { name: str, keywords: stringArray },
    },
    language: {
      type: "object",
      additionalProperties: false,
      required: ["language", "code", "fluency"],
      properties: { language: str, code: str, fluency: str },
    },
    award: {
      type: "object",
      additionalProperties: false,
      required: ["title", "rank", "awarder", "summary", "prize", "year"],
      properties: {
        title: str,
        rank: str,
        awarder: str,
        summary: str,
        prize: nullableStr,
        year: str,
      },
    },
    certificate: {
      type: "object",
      additionalProperties: false,
      required: ["name", "issuer", "summary", "url"],
      properties: {
        name: str,
        issuer: str,
        summary: str,
        url: { type: "string", format: "uri" },
      },
    },
    interest: {
      type: "object",
      additionalProperties: false,
      required: ["name", "description", "keywords"],
      properties: { name: str, description: str, keywords: stringArray },
    },
    milestone: {
      type: "object",
      additionalProperties: false,
      required: ["year", "title", "summary", "tag"],
      properties: { year: str, title: str, summary: str, tag: str },
    },
    domain: {
      type: "object",
      additionalProperties: false,
      required: ["name", "summary"],
      properties: { name: str, summary: str },
    },
    community: {
      type: "object",
      additionalProperties: false,
      required: ["name", "url"],
      properties: { name: str, url: nullableStr },
    },
  },
} as const;

export type ProfileSchema = typeof profileSchema;
