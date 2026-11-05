/**
 * schema.org graph, emitted once per page.
 *
 * Generated from the profile rather than hand-written, so the structured data
 * cannot describe a different person from the one on screen.
 */
import { profile } from "./profile";
import { SITE } from "./site";

const personId = `${SITE.url}/#person`;
const websiteId = `${SITE.url}/#website`;

export const structuredData = () => {
  const p = profile;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: p.basics.name,
        jobTitle: p.basics.label,
        description: p.basics.summary,
        url: p.basics.url,
        image: p.basics.image,
        email: p.basics.email,
        telephone: p.basics.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: p.basics.location.city,
          addressRegion: p.basics.location.region,
          addressCountry: p.basics.location.countryCode,
        },
        sameAs: p.basics.profiles.map((profileLink) => profileLink.url),
        knowsAbout: [...new Set([...p.domains.map((d) => d.name), ...p.skills.flatMap((s) => s.keywords)])],
        knowsLanguage: p.languages.map((language) => language.code),
        award: p.awards.map(
          (award) => `${award.title} — ${award.summary} (${award.awarder}, ${award.year})`
        ),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${SITE.url}/`,
        name: `${SITE.name} — ${SITE.role}`,
        description: p.basics.summary,
        inLanguage: ["en", "am"],
        author: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE.url}/#profile`,
        url: `${SITE.url}/`,
        name: `${SITE.name} — ${SITE.role}`,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        about: { "@id": personId },
      },
    ],
  };
};
