import type { MetadataRoute } from "next";
import { services } from "@/data/services";

/* ============================================================
   CONFIGURATION
============================================================ */

const SITE_URL = "https://www.eventslocation.fr";

/* ============================================================
   SITEMAP
============================================================ */

export default function sitemap(): MetadataRoute.Sitemap {
  /* ==========================================================
     PAGES DES PRESTATIONS
  ========================================================== */

  const servicePages: MetadataRoute.Sitemap =
    services.map((service) => ({
      url: `${SITE_URL}/prestations/${service.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  /* ==========================================================
     PAGES DU SITE
  ========================================================== */

  return [
    /* ACCUEIL */

    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    /* PRESTATIONS */

    ...servicePages,

    /* MENTIONS LÉGALES */

    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },

    /* POLITIQUE DE CONFIDENTIALITÉ */

    {
      url: `${SITE_URL}/politique-de-confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}