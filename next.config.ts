import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n.ts");

const nextConfig: NextConfig = {
  images: {
    // Next.js 16.2.2 dev image optimizer crashes with an LRUCache
    // ("calculateSize returned 0") unhandledRejection that can take down the
    // dev server and make images (logo included) vanish. Bypass the optimizer
    // in development only — production keeps full optimization. Our images are
    // already pre-optimized WebP, so dev loses nothing.
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "customer-*.cloudflarestream.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default withNextIntl(nextConfig);
