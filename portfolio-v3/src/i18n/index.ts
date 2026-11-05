/**
 * i18n core.
 *
 * Two statically rendered locales: English at "/" and Amharic at "/am/".
 * There is no client-side dictionary swap — each page is pre-rendered in its
 * language, so the right script, the right <html lang> and the right font all
 * ship with the HTML. Components receive `t` as a prop (rendering is build
 * time, so there is no shared mutable state to worry about).
 */
import { en, type Dict } from "./en";
import { am } from "./am";
import { amData } from "./data";

export type Lang = "en" | "am";
export type Vars = Record<string, string | number>;
/**
 * Translate a chrome key, interpolating {placeholders}.
 *
 * The function also carries its `lang`, so data-prose helpers (`td`) can work
 * from the same prop without every component needing a second prop.
 */
export type T = ((key: string, vars?: Vars) => string) & { lang: Lang };

export const langs: Lang[] = ["en", "am"];

export const locales: Record<
  Lang,
  { htmlLang: string; native: string; href: string; alternate: Lang; ogLocale: string }
> = {
  en: { htmlLang: "en", native: "English", href: "/", alternate: "am", ogLocale: "en_US" },
  am: { htmlLang: "am", native: "አማርኛ", href: "/am/", alternate: "en", ogLocale: "am_ET" },
};

const dicts: Record<Lang, Dict> = { en, am };

const interpolate = (raw: string, vars?: Vars): string => {
  if (!vars) return raw;
  return (
    raw
      // Double braces are `rich()` markers: fill the placeholder but keep the
      // marker so `{{live}}` becomes `{{12}}`, not a bare `{12}`.
      .replace(/\{\{(\w+)\}\}/g, (m, k) => (k in vars ? `{{${String(vars[k])}}}` : m))
      // Single braces are plain placeholders. The lookarounds skip braces that
      // belong to a `{{…}}` marker, so the two passes never fight.
      .replace(/(?<!\{)\{(\w+)\}(?!\})/g, (m, k) => (k in vars ? String(vars[k]) : m))
  );
};

export const makeT = (lang: Lang): T => {
  const dict = dicts[lang];
  const t = ((key, vars) => interpolate(dict[key as keyof Dict] ?? key, vars)) as T;
  t.lang = lang;
  return t;
};

/**
 * Translate data prose (repos, deployments, awards, timeline, disciplines).
 * English is the source of truth; unknown strings fall back to themselves.
 */
export const td = (t: T, source: string): string =>
  t.lang === "am" ? amData[source] ?? source : source;

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/**
 * Render a dictionary string's tiny markup conventions to HTML:
 *   {{text}}  → accent colour      [[text]] → chalk (bright)
 *   <<text>>  → muted fog          \n       → <br />
 * Everything else is escaped, so dictionaries can never inject markup.
 */
export const rich = (raw: string): string =>
  escapeHtml(raw)
    .replace(/\{\{([^}]+)\}\}/g, '<span class="text-[var(--color-signal)]">$1</span>')
    .replace(/\[\[([^\]]+)\]\]/g, '<span class="text-[var(--color-chalk)]">$1</span>')
    .replace(/<<([^<]+)>>/g, '<span class="text-[var(--color-fog)]">$1</span>')
    .replace(/\n/g, "<br />");
