import type { MetadataRoute } from "next";
import { services } from "@/data/services";

const SITE_URL = "https://www.eventslocation.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  /* ============================================================
     PAGES PRESTATIONS
  ============================================================ */

  const servicePages: MetadataRoute.Sitemap = services.map(
    (service) => ({
      url: `${SITE_URL}/prestations/${service.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  /* ============================================================
     PAGES LOCALES
  ============================================================ */

  const localPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/location-evenementiel-auxerre`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/location-evenementiel-avallon`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/location-evenementiel-clamecy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/location-evenementiel-cosne-cours-sur-loire`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/location-evenementiel-nevers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/location-evenementiel-la-charite-sur-loire`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  /* ============================================================
     SITEMAP COMPLET
  ============================================================ */

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    ...servicePages,
    ...localPages,

    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },

    {
      url: `${SITE_URL}/politique-de-confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}