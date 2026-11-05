import type { APIRoute } from "astro";
import { profile } from "../lib/profile";
import { SITE } from "../lib/site";

/**
 * A Markdown CV that stays true to the page: same projects, same awards,
 * same contact details. Fitting on one screen beats inventing a template.
 */
const text = () => {
  const p = profile;
  const featured = p.projects.filter((project) => project.featured);
  const rest = p.projects.filter((project) => !project.featured && project.status === "deployed");
  const archived = p.projects.filter((project) => project.status === "archived");

  const lines: string[] = [
    `# ${p.basics.name}`,
    "",
    `**${p.basics.label}** · ${p.basics.location.city}, ${p.basics.location.country} · ${p.availability.timezone} (UTC${p.availability.utcOffset})`,
    "",
    `${p.basics.email} · ${p.basics.phone} · [GitHub](${p.basics.profiles.find((x) => x.network === "GitHub")?.url}) · [LinkedIn](${p.basics.profiles.find((x) => x.network === "LinkedIn")?.url}) · [Telegram](${p.contact.telegram})`,
    "",
    p.basics.summary,
    "",
    "## Selected work",
    "",
  ];

  featured.forEach((project) => {
    lines.push(
      `### ${project.name} — ${project.tagline}`,
      "",
      `${project.description}`,
      "",
      `**Stack:** ${project.keywords.join(", ")} · **Year:** ${project.year} · **Link:** ${project.url}`,
      ""
    );
  });

  if (rest.length) {
    lines.push("## Also shipped", "");
    rest.forEach((project) => {
      lines.push(
        `- **${project.name}** — ${project.tagline}. ${project.description} (${project.url})`
      );
    });
    lines.push("");
  }

  if (archived.length) {
    lines.push(
      `Archived but real: ${archived.map((project) => project.name).join(", ")}. Source is linked from ${SITE.url}/profile.json.`,
      ""
    );
  }

  lines.push("## Open source", "");
  const highlights = p.openSource.filter((repo) => repo.group !== "Config" && !repo.fork);
  highlights.forEach((repo) => {
    lines.push(
      `- **${repo.name}** (${repo.language}) — ${repo.description}. ${repo.url}`
    );
  });
  lines.push("");

  lines.push("## Skills", "");
  p.skills.forEach((skill) => lines.push(`- **${skill.name}:** ${skill.keywords.join(", ")}`));
  lines.push("");

  lines.push("## Recognition", "");
  p.awards.forEach((award) => {
    lines.push(
      `- **${award.rank} — ${award.title}** (${award.year}, ${award.awarder}). ${award.summary}${
        award.prize ? ` Prize: ${award.prize}.` : ""
      }`
    );
  });
  lines.push("");

  lines.push("## Certifications", "");
  p.certificates.forEach((cert) => lines.push(`- ${cert.name} — ${cert.issuer}`));
  lines.push("");

  lines.push("## Languages", "");
  p.languages.forEach((language) => lines.push(`- ${language.language} — ${language.fluency}`));
  lines.push("");

  lines.push(
    "---",
    "",
    `Generated from ${SITE.url}/ at commit ${p.meta.commit}. Canonical JSON: ${SITE.url}/profile.json · Full text: ${SITE.url}/llms-full.txt`,
    ""
  );

  return `${lines.join("\n").replace(/\n{3,}/g, "\n\n")}\n`;
};

export const GET: APIRoute = () =>
  new Response(text(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
