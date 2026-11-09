
import type { MetadataRoute } from "next";

/* ============================================================
   CONFIGURATION ROBOTS.TXT - EVENT'S EMOTIONS
============================================================ */

const SITE_URL = "https://www.eventsemotions.fr";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },

    sitemap: `${SITE_URL}/sitemap.xml`,

    host: SITE_URL,
  };
}
