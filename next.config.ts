import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cursumi.com" },
      { protocol: "https", hostname: "www.cursumi.com" },
      { protocol: "https", hostname: "imsoft.io" },
      { protocol: "https", hostname: "www.imsoft.io" },
      { protocol: "https", hostname: "brandonbybran.com" },
      { protocol: "https", hostname: "www.brandonbybran.com" },
    ],
  },
};

export default withNextIntl(nextConfig);
