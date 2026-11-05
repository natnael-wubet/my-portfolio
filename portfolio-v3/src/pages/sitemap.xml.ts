import type { APIRoute } from "astro";
import { SITE } from "../lib/site";

/** Two locales, one canonical. The alternate links mirror the page head. */
const text = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${SITE.url}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE.url}/" />
    <xhtml:link rel="alternate" hreflang="am" href="${SITE.url}/am/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE.url}/" />
  </url>
  <url>
    <loc>${SITE.url}/am/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE.url}/" />
    <xhtml:link rel="alternate" hreflang="am" href="${SITE.url}/am/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE.url}/" />
  </url>
</urlset>
`;

export const GET: APIRoute = () =>
  new Response(text(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
