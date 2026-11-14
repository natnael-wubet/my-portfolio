/**
 * One place for facts that must not drift between the human page, the
 * machine-readable endpoints and structured data.
 */
export const SITE = {
  // Astro injects the configured `site` here, so astro.config.mjs is the one
  // place that decides the indexed origin.
  url: (import.meta.env.SITE ?? "https://my-portfolio-three-lime-27.vercel.app").replace(/\/$/, ""),
  name: "Natnael Wubet",
  role: "Software Engineer",
  email: "natyw4122@gmail.com",
  phone: "+251918191930",
  telegram: "https://t.me/nnaty_w20",
  github: "https://github.com/natnael-wubet",
  linkedin: "https://www.linkedin.com/in/naty-wubet-65bb5b193/",
  repo: "https://github.com/natnael-wubet/naty-wubet",
  location: {
    city: "Bahir Dar",
    region: "Amhara",
    country: "Ethiopia",
    countryCode: "ET",
  },
  locales: {
    en: "/",
    am: "/am/",
  },
  timezone: "Africa/Addis_Ababa",
  utcOffset: "+03:00",
} as const;
