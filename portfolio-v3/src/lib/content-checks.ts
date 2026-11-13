/**
 * Build-time content checks.
 *
 * The homepage hierarchy is data, not markup: a project becomes the hero or a
 * featured card by setting `tier` in `src/data/deployments.ts`. That only works
 * if the entry carries the copy its treatment needs, so this module fails the
 * build on a thin hero/featured entry and reports missing metrics instead of
 * shipping an empty card.
 *
 * It runs during render (Site.astro and the archive page call it), which means
 * `npm run build` is the check: no extra script, no extra dependency.
 */
import { existsSync } from "node:fs";
import { deployments } from "../data/deployments";

const devices = ["desktop", "tablet", "phone"] as const;

const hasCapture = (slug: string) =>
  devices.some((device) => existsSync(`public/shots/${slug}-${device}.webp`));

export interface ContentCheckResult {
  errors: string[];
  warnings: string[];
}

export function checkDeployments(): ContentCheckResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  const heroes = deployments.filter((d) => d.tier === "hero");
  if (heroes.length !== 1) {
    errors.push(`expected exactly one tier: "hero" deployment, found ${heroes.length}`);
  }

  deployments.forEach((d) => {
    const tier = d.tier ?? "standard";
    if (tier === "standard") return;

    const where = `${d.slug} (${tier})`;
    if (!d.tagline.trim()) errors.push(`${where}: missing tagline`);
    if (!d.outcome?.trim()) errors.push(`${where}: missing outcome`);
    if (!d.metric?.trim()) errors.push(`${where}: missing metric`);
    if (!hasCapture(d.slug)) errors.push(`${where}: no screenshot in public/shots/`);
    if (d.metric?.startsWith("TODO(")) warnings.push(`${where}: metric is ${d.metric}`);
  });

  return { errors, warnings };
}

export function validateDeployments(): void {
  const { errors, warnings } = checkDeployments();
  warnings.forEach((warning) => console.warn(`[content] ${warning}`));
  if (errors.length) {
    throw new Error(`Deployment content failed validation:\n  - ${errors.join("\n  - ")}`);
  }
}