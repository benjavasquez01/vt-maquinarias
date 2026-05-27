import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es"],
  defaultLocale: "es",
  // Single-language site: no locale prefix in URLs (clean root paths).
  localePrefix: "never",
});
