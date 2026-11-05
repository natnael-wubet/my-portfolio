import type { APIRoute } from "astro";
import { profile } from "../lib/profile";
import { SITE } from "../lib/site";

/**
 * The whole record as Markdown: every project, repository, award, certificate,
 * interest and milestone. This is what an agent should read when it needs more
 * than the index in /llms.txt.
 */
const text = () => {
  const p = profile;
  const groups = ["Security", "Game", "Tool", "Web", "Config"] as const;

  const lines: string[] = [
    `# ${p.basics.name} — complete profile`,
    "",
    `> ${p.basics.summary}`,
    "",
    `- Location: ${p.basics.location.city}, ${p.basics.location.region}, ${p.basics.location.country}`,
    `- Timezone: ${p.availability.timezone} (UTC${p.availability.utcOffset})`,
    `- Availability: ${p.availability.status} — ${p.availability.arrangement}`,
    `- Languages: ${p.languages.map((l) => `${l.language} (${l.fluency})`).join(", ")}`,
    `- Generated: ${p.meta.generated} from commit ${p.meta.commit}`,
    "",
    "## Contact",
    "",
    `- Email: ${p.contact.email}`,
    `- Phone: ${p.contact.phone}`,
    `- Telegram: ${p.contact.telegram}`,
    `- GitHub: ${p.contact.github}`,
    `- LinkedIn: ${p.contact.linkedin}`,
    "",
    "## Projects",
    "",
  ];

  p.projects.forEach((project) => {
    lines.push(
      `### ${project.name} — ${project.tagline}`,
      "",
      `${project.description}`,
      "",
      `- URL: ${project.url}`,
      `- Year: ${project.year}`,
      `- Category: ${project.category} · Platform: ${project.platform} · Status: ${project.status}`,
      `- Stack: ${project.keywords.join(", ")}`,
      ...(project.telegram ? ["- Telegram Mini App: yes"] : []),
      ""
    );
  });

  lines.push("## Open source", "");
  groups.forEach((group) => {
    const rows = p.openSource.filter((repo) => repo.group === group);
    if (!rows.length) return;
    lines.push(`### ${group}`, "");
    rows.forEach((repo) => {
      lines.push(
        `- [${repo.name}](${repo.url}) — ${repo.description}. Language: ${repo.language}${
          repo.fork ? " (fork)" : ""
        }${repo.stars ? ` · ${repo.stars} stars recorded` : ""}.`
      );
    });
    lines.push("");
  });

  lines.push("## Skills", "");
  p.skills.forEach((skill) => lines.push(`- **${skill.name}:** ${skill.keywords.join(", ")}`));
  lines.push("", "## Domains", "");
  p.domains.forEach((domain) => lines.push(`- **${domain.name}:** ${domain.summary}`));
  lines.push("", "## Recognition", "");
  p.awards.forEach((award) =>
    lines.push(
      `- ${award.rank} — **${award.title}** (${award.year}). ${award.summary}. Awarder: ${award.awarder}.${
        award.prize ? ` Prize: ${award.prize}.` : ""
      }`
    )
  );
  lines.push("", "## Certificates", "");
  p.certificates.forEach((cert) =>
    lines.push(`- **${cert.name}** — ${cert.issuer}. ${cert.summary} ${cert.url}`)
  );
  lines.push("", "## Timeline", "");
  p.timeline.forEach((milestone) =>
    lines.push(`- **${milestone.year} — ${milestone.title}** (${milestone.tag}): ${milestone.summary}`)
  );
  lines.push("", "## Interests", "");
  p.interests.forEach((interest) =>
    lines.push(
      `- **${interest.name}:** ${interest.description} Keywords: ${interest.keywords.join(", ")}.`
    )
  );
  lines.push("", "## Communities", "");
  p.communities.forEach((community) =>
    lines.push(`- ${community.name}${community.url ? ` — ${community.url}` : ""}`)
  );
  lines.push("", "## Media", "");
  lines.push(`- ${p.media.youtube.title}: ${p.media.youtube.summary} ${p.media.youtube.url}`);
  lines.push(
    "",
    "## Machine endpoints",
    "",
    `- [profile.json](${SITE.url}/profile.json) — canonical structured record`,
    `- [profile.schema.json](${SITE.url}/profile.schema.json) — its JSON Schema`,
    `- [llms.txt](${SITE.url}/llms.txt) — concise agent index`,
    `- [resume.md](${SITE.url}/resume.md) — Markdown CV`,
    `- [English page](${SITE.url}/) · [Amharic page](${SITE.url}/am/)`,
    "",
    `Cite as: ${p.agent.citation}`,
    ""
  );

  return `${lines.join("\n").replace(/\n{3,}/g, "\n\n")}\n`;
};

export const GET: APIRoute = () =>
  new Response(text(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
