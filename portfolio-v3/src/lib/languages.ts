/**
 * Language colours and the repository breakdown shared by the shelf and the
 * GitHub panel. Counts are repositories, not bytes, so the bar says what it
 * measures.
 */

export const langColor: Record<string, string> = {
  PowerShell: "#012456",
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Processing: "#0096d6",
  Lua: "#000080",
  HTML: "#e34c26",
  CSS: "#663399",
  Other: "var(--color-line-2)",
};

export interface LanguageSlice {
  language: string;
  count: number;
  share: number;
  color: string;
}

export function languageBreakdown(repos: { language: string }[]): LanguageSlice[] {
  const counts = new Map<string, number>();
  for (const repo of repos) counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
  return [...counts.entries()]
    .map(([language, count]) => ({
      language,
      count,
      share: count / repos.length,
      color: langColor[language] ?? "var(--color-line-2)",
    }))
    .sort((a, b) => b.count - a.count || a.language.localeCompare(b.language));
}
