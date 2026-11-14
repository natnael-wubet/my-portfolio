/**
 * One view of the deployment registry, shared by every section that shows it.
 *
 * Health is probed once per build (the probe caches its promise), captures are
 * checked on disk, and the copy is translated here so components never have to
 * remember which field needs `td()`.
 */
import { existsSync } from "node:fs";
import { checkHealth, deployments, type Deployment } from "../data/deployments";
import { caseStudies, type CaseStudy } from "../data/caseStudies";
import { td, type T } from "../i18n";
import type { ProjectRecord } from "../components/ProjectDialog.astro";

export interface WorkRow extends Deployment {
  health: { status: "live" | "down" | "unknown" | "archived"; ms?: number };
  shots: { desktop: boolean; tablet: boolean; phone: boolean };
  captures: number;
  host: string;
  taglineText: string;
  outcomeText: string;
  descriptionText: string;
  categoryText: string;
  statusLabel: string;
}

const devices = ["desktop", "tablet", "phone"] as const;

const hasShot = (slug: string, device: (typeof devices)[number]) =>
  existsSync(`public/shots/${slug}-${device}.webp`);

export async function getWorkRows(t: T): Promise<WorkRow[]> {
  const health = await checkHealth();
  return deployments.map((d) => {
    const shots = {
      desktop: hasShot(d.slug, "desktop"),
      tablet: hasShot(d.slug, "tablet"),
      phone: hasShot(d.slug, "phone"),
    };
    const state = health[d.slug] ?? { status: "unknown" as const };
    return {
      ...d,
      health: state,
      shots,
      captures: Object.values(shots).filter(Boolean).length,
      host: new URL(d.url).host,
      taglineText: td(t, d.tagline),
      outcomeText: td(t, d.outcome ?? ""),
      descriptionText: td(t, d.description),
      categoryText: td(t, d.category),
      statusLabel: d.archived ? t("sec.deployments.archivedStatus") : t(`status.${state.status}`),
    };
  });
}

export const toProjectRecords = (rows: WorkRow[]): ProjectRecord[] =>
  rows.map((d) => ({
    slug: d.slug,
    name: d.name,
    tagline: d.taglineText,
    description: d.descriptionText,
    url: d.url,
    platform: d.platform,
    year: d.year ?? null,
    stack: d.stack,
    category: d.categoryText,
    accent: d.accent,
    archived: Boolean(d.archived),
    status: d.health.status,
    statusLabel: d.statusLabel,
    ms: d.health.ms ?? null,
    host: d.host,
    shots: d.shots,
    study: caseStudies[d.slug] ?? null,
  }));