
import type { NextConfig } from "next";

const NEW_DOMAIN = "https://www.eventsemotions.fr";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Ancienne redirection conservée
      {
        source: "/en/home",
        destination: "/",
        permanent: true,
      },

      // Ancien domaine avec www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.eventslocation.fr",
          },
        ],
        destination: `${NEW_DOMAIN}/:path*`,
        permanent: true,
      },

      // Ancien domaine sans www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "eventslocation.fr",
          },
        ],
        destination: `${NEW_DOMAIN}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
