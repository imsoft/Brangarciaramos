import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // The CV PDF lives at public/cv.pdf and is served from /cv.
  async rewrites() {
    return [{ source: "/cv", destination: "/cv.pdf" }];
  },
};

export default withNextIntl(nextConfig);
