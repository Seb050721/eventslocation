import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",

      disallow: [
        "/api/",
      ],
    },

    sitemap: "https://eventslocation.fr/sitemap.xml",

    host: "https://eventslocation.fr",
  };
}