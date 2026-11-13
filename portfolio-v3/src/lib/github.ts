/**
 * GitHub activity, read at build time.
 *
 * The contribution graph is parsed from the public profile page and cached in
 * src/data/contributions.json. A build with network access refreshes it; a
 * build without network falls back to the snapshot, and the panel says which
 * one it used. Nothing here runs in the browser.
 */
import snapshot from "../data/contributions.json";

export interface ContributionDay {
  date: string;
  level: number;
  count: number;
}

export interface ContributionCalendar {
  days: ContributionDay[];
  weeks: (ContributionDay | null)[][];
  total: number;
  currentStreak: number;
  longestStreak: number;
  best: ContributionDay;
  source: "live" | "snapshot";
  fetched: string;
}

const URL = "https://github.com/users/natnael-wubet/contributions";
const TIMEOUT = 8_000;

const clampLevel = (value: number) => Math.max(0, Math.min(4, Math.round(value)));

function parse(html: string): ContributionDay[] {
  const counts = new Map<string, number>();
  for (const match of html.matchAll(/<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
    const count = /^\s*(\d+)/.exec(match[2]);
    if (count) counts.set(match[1], Number(count[1]));
  }

  const days: ContributionDay[] = [];
  for (const chunk of html.split("<td").slice(1)) {
    const date = /data-date="([^"]+)"/.exec(chunk)?.[1];
    const level = /data-level="([^"]+)"/.exec(chunk)?.[1];
    const id = /id="([^"]+)"/.exec(chunk)?.[1];
    if (!date || !level || !id) continue;
    days.push({ date, level: clampLevel(Number(level)), count: counts.get(id) ?? 0 });
  }
  return days.sort((a, b) => a.date.localeCompare(b.date));
}

async function live(): Promise<ContributionDay[] | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT);
  try {
    const response = await fetch(URL, {
      signal: controller.signal,
      headers: { "user-agent": "natnael-wubet-portfolio-build" },
    });
    if (!response.ok) return null;
    const days = parse(await response.text());
    return days.length > 200 ? days : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function stats(days: ContributionDay[]) {
  let total = 0;
  let longest = 0;
  let run = 0;
  let best = days[0];

  for (const day of days) {
    total += day.count;
    if (day.count > best.count) best = day;
    if (day.count > 0) {
      run += 1;
      longest = Math.max(longest, run);
    } else {
      run = 0;
    }
  }

  let current = 0;
  for (let i = days.length - 1; i >= 0 && days[i].count > 0; i--) current += 1;

  return { total, longest, current, best };
}

function weeksOf(days: ContributionDay[]) {
  const first = new Date(`${days[0].date}T00:00:00Z`);
  const pad = first.getUTCDay();
  const padded: (ContributionDay | null)[] = [
    ...(Array(pad).fill(null) as null[]),
    ...days,
  ];
  while (padded.length % 7 !== 0) padded.push(null);

  const weeks: (ContributionDay | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));
  return weeks;
}

let cached: Promise<ContributionCalendar> | null = null;

export function getContributions(): Promise<ContributionCalendar> {
  if (cached) return cached;

  cached = (async () => {
    const fresh = await live();
    const days =
      fresh ?? snapshot.days.map((day) => ({ date: day.d, level: clampLevel(day.l), count: day.c }));
    const { total, longest, current, best } = stats(days);
    return {
      days,
      weeks: weeksOf(days),
      total,
      currentStreak: current,
      longestStreak: longest,
      best,
      source: fresh ? "live" : "snapshot",
      fetched: fresh ? new Date().toISOString().slice(0, 10) : snapshot.fetched,
    };
  })();

  return cached;
}
