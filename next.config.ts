import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/en/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;