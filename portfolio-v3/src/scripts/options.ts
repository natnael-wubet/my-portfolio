/**
 * Display options: theme (dark / light / system) + accent colour.
 *
 * State lives in localStorage and is re-applied before first paint by the
 * inline script in Base.astro (kept in sync manually, see that file).
 * Everything else talks to this module through document events, so the nav
 * panel, the command palette and the keyboard can all drive it without
 * importing each other:
 *
 *   opt:theme         detail: "dark" | "light" | "system"
 *   opt:cycle-theme
 *   opt:accent        detail: Accent
 *   opt:cycle-accent
 *
 * which answer with `theme:change` / `accent:change` for anyone who wants
 * to repaint (the WebGL canvases listen to these).
 */

export type ThemePref = "dark" | "light" | "system";
export type Accent = "lime" | "cyan" | "amber" | "rose" | "violet";

export const THEME_PREFS: ThemePref[] = ["dark", "light", "system"];
export const ACCENTS: Accent[] = ["lime", "cyan", "amber", "rose", "violet"];

const THEME_KEY = "cv:theme";
const ACCENT_KEY = "cv:accent";

const isTheme = (v: string | null): v is ThemePref =>
  v === "dark" || v === "light" || v === "system";

const isAccent = (v: string | null): v is Accent =>
  v === "lime" || v === "cyan" || v === "amber" || v === "rose" || v === "violet";

const read = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const write = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode, the session still works, it just won't remember */
  }
};

export const themePref = (): ThemePref => {
  const v = read(THEME_KEY);
  return isTheme(v) ? v : "system";
};

export const accent = (): Accent => {
  const v = read(ACCENT_KEY);
  return isAccent(v) ? v : "lime";
};

export const resolvedTheme = (): "dark" | "light" =>
  themePref() === "system" ? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark") : themePref();

/** Apply current prefs to <html> and announce it. Safe to call repeatedly. */
export const apply = () => {
  const root = document.documentElement;
  const theme = resolvedTheme();
  root.dataset.theme = theme;
  root.dataset.accent = accent();
  root.style.colorScheme = theme;

  const meta = document.getElementById("theme-color-meta");
  meta?.setAttribute("content", theme === "light" ? "#f7f8f6" : "#08090a");

  document.dispatchEvent(new CustomEvent("theme:change", { detail: { theme, pref: themePref() } }));
  document.dispatchEvent(new CustomEvent("accent:change", { detail: { accent: accent() } }));
};

export const setTheme = (pref: ThemePref) => {
  write(THEME_KEY, pref);
  apply();
};

export const setAccent = (next: Accent) => {
  write(ACCENT_KEY, next);
  apply();
};

export const cycleTheme = () => {
  const i = THEME_PREFS.indexOf(themePref());
  setTheme(THEME_PREFS[(i + 1) % THEME_PREFS.length]);
};

export const cycleAccent = () => {
  const i = ACCENTS.indexOf(accent());
  setAccent(ACCENTS[(i + 1) % ACCENTS.length]);
};

let booted = false;

/** Wire up system-theme watching and the event bus. Call once per page. */
export const initOptions = () => {
  if (booted) return;
  booted = true;

  // Shareable views: ?theme=light&accent=cyan applies the incoming state and
  // remembers it, so a link copied from the palette reproduces the exact
  // palette someone was looking at.
  try {
    const params = new URLSearchParams(location.search);
    const themeParam = params.get("theme");
    const accentParam = params.get("accent");
    if (isTheme(themeParam)) write(THEME_KEY, themeParam);
    if (isAccent(accentParam)) write(ACCENT_KEY, accentParam);
  } catch {
    /* malformed URL, keep whatever is stored */
  }

  apply();

  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
    if (themePref() === "system") apply();
  });

  const on = <T>(name: string, fn: (detail: T) => void) =>
    document.addEventListener(name, (e) => fn((e as CustomEvent<T>).detail));

  on<ThemePref>("opt:theme", setTheme);
  on<Accent>("opt:accent", setAccent);
  document.addEventListener("opt:cycle-theme", cycleTheme);
  document.addEventListener("opt:cycle-accent", cycleAccent);
};
