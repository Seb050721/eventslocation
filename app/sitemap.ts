
import type { MetadataRoute } from "next";
import { services } from "@/data/services";

/* ============================================================
   CONFIGURATION
============================================================ */

const SITE_URL = "https://www.eventsemotions.fr";

/* ============================================================
   SITEMAP
============================================================ */

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  /* ============================================================
     PAGES PRESTATIONS
  ============================================================ */

  const servicePages: MetadataRoute.Sitemap = services.map(
    (service) => ({
      url: `${SITE_URL}/prestations/${service.id}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  /* ============================================================
     PAGES LOCALES
  ============================================================ */

  const localSlugs = [
    "location-evenementiel-auxerre",
    "location-evenementiel-avallon",
    "location-evenementiel-clamecy",
    "location-evenementiel-cosne-cours-sur-loire",
    "location-evenementiel-nevers",
    "location-evenementiel-la-charite-sur-loire",
  ];

  const localPages: MetadataRoute.Sitemap = localSlugs.map(
    (slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  /* ============================================================
     PAGES RÉALISATIONS
  ============================================================ */

  // Ajouter ici uniquement les réalisations réellement publiées.
  const realisationSlugs = [
    "anniversaire-18-ans-auxerre",
  ];

  const realisationPages: MetadataRoute.Sitemap =
    realisationSlugs.map((slug) => ({
      url: `${SITE_URL}/realisations/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  /* ============================================================
     PAGES LÉGALES
  ============================================================ */

  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/politique-de-confidentialite`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  /* ============================================================
     SITEMAP COMPLET
  ============================================================ */

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    ...servicePages,
    ...localPages,
    ...realisationPages,
    ...legalPages,
  ];
}
