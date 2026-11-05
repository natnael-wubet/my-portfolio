import type { APIRoute } from "astro";
import { profileSchema } from "../lib/profile-schema";

/** The profile's own schema, published next to it. */
export const GET: APIRoute = () =>
  new Response(JSON.stringify(profileSchema, null, 2), {
    headers: {
      "Content-Type": "application/schema+json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
