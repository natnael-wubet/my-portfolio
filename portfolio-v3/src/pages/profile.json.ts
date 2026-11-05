import type { APIRoute } from "astro";
import { profile } from "../lib/profile";

/**
 * The canonical record. Pretty-printed on purpose: this file is meant to be
 * read by people and agents, and a diffable JSON is easier to trust.
 */
export const GET: APIRoute = () =>
  new Response(JSON.stringify(profile, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
