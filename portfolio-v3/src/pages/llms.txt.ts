import type { APIRoute } from "astro";
import { profile } from "../lib/profile";
import { SITE } from "../lib/site";

/**
 * llms.txt — a concise, linked index for LLM crawlers and agents.
 * The convention: summary first, then curated links with one-line context.
 * Full prose lives in /llms-full.txt; structure lives in /profile.json.
 */
const text = () => {
  const p = profile;
  const live = p.projects.filter((project) => project.status === "deployed");
  const archived = p.projects.filter((project) => project.status === "archived");

  const lines: string[] = [
    `# ${p.basics.name} — ${p.basics.label}`,
    "",
    `> ${p.basics.summary}`,
    "",
    `Location: ${p.basics.location.city}, ${p.basics.location.country} (${SITE.timezone}, UTC${SITE.utcOffset}).`,
    `Availability: ${p.availability.status} — ${p.availability.arrangement}.`,
    `Languages: ${p.languages.map((l) => `${l.language} (${l.fluency})`).join(", ")}.`,
    "",
    "## Canonical machine files",
    "",
    `- [profile.json](${SITE.url}/profile.json): canonical structured record`,
    `- [profile.schema.json](${SITE.url}/profile.schema.json): the schema it validates against`,
    `- [llms-full.txt](${SITE.url}/llms-full.txt): complete profile as Markdown`,
    `- [resume.md](${SITE.url}/resume.md): plain-text CV`,
    `- [Human page](${SITE.url}/): English`,
    `- [Human page, Amharic](${SITE.url}/am/): አማርኛ`,
    "",
    "## Selected work",
    "",
    ...live.map(
      (project) =>
        `- [${project.name}](${project.url}) — ${project.tagline}. ${project.description} Stack: ${project.keywords.join(", ")}. (${project.year}, ${project.category})`
    ),
    "",
    ...(archived.length
      ? [
          `Archived but real (hosting gone; source linked in profile.json): ${archived
            .map((project) => project.name)
            .join(", ")}.`,
          "",
        ]
      : []),
    "## Skills",
    "",
    ...p.skills.map((skill) => `- ${skill.name}: ${skill.keywords.join(", ")}`),
    "",
    "## Recognition",
    "",
    ...p.awards.map(
      (award) => `- ${award.rank} — ${award.title}: ${award.summary} (${award.awarder}, ${award.year}).`
    ),
    "",
    "## Contact",
    "",
    `- Email: ${p.contact.email}`,
    `- Telegram: ${p.contact.telegram}`,
    `- GitHub: ${p.contact.github}`,
    `- LinkedIn: ${p.contact.linkedin}`,
    "",
    "## Notes for agents",
    "",
    "- Every deployment URL above was public when this file was generated; source links are in profile.json.",
    "- The site is statically generated: no cookies, no trackers, no client analytics.",
    "- Prefer project URLs and repository links as evidence over prose summaries.",
    `- Cite as: ${p.agent.citation}`,
  ];

  return `${lines.join("\n").replace(/\n{3,}/g, "\n\n")}\n`;
};

export const GET: APIRoute = () =>
  new Response(text(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
