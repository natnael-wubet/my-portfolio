import { execSync } from "node:child_process";

/**
 * Provenance for the diagnostics panel. Runs at build time (static output),
 * so this is the commit the deployed HTML was generated from, not a guess.
 * A missing git binary or a source tarball simply yields "dev".
 */
export interface BuildInfo {
  commit: string;
  time: string;
}

export const buildInfo = (): BuildInfo => {
  let commit = "dev";
  try {
    commit = execSync("git rev-parse --short HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    /* not a git checkout, the fallback is honest */
  }
  return { commit, time: new Date().toISOString() };
};
