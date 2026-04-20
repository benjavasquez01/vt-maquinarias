import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vtmtechsolutions.com";
const LOCALES = ["en", "es"];

function makeUrls(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]) {
  return LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((l) => [l === "en" ? "en-US" : "es-US", `${BASE_URL}/${l}${path}`])
      ),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/fabrication", priority: 0.8, freq: "monthly" as const },
    { path: "/fabrication/fiber-laser-cutting-machine", priority: 0.9, freq: "monthly" as const },
    { path: "/fabrication/laser-welding-machine", priority: 0.9, freq: "monthly" as const },
    { path: "/fabrication/laser-cleaning-machine", priority: 0.9, freq: "monthly" as const },
    { path: "/fabrication/cnc-press-brake", priority: 0.9, freq: "monthly" as const },
    { path: "/fabrication/ironworker", priority: 0.9, freq: "monthly" as const },
    { path: "/automation", priority: 0.8, freq: "monthly" as const },
    { path: "/automation/collaborative-welding-arm", priority: 0.9, freq: "monthly" as const },
    { path: "/automation/industrial-welding-arm", priority: 0.9, freq: "monthly" as const },
    { path: "/solutions/metal-fabrication", priority: 0.7, freq: "monthly" as const },
    { path: "/solutions/automotive", priority: 0.7, freq: "monthly" as const },
    { path: "/solutions/aerospace", priority: 0.7, freq: "monthly" as const },
    { path: "/solutions/hvac-construction", priority: 0.7, freq: "monthly" as const },
    { path: "/about", priority: 0.6, freq: "monthly" as const },
    { path: "/contact", priority: 0.7, freq: "monthly" as const },
    { path: "/quote", priority: 0.8, freq: "monthly" as const },
    { path: "/support", priority: 0.6, freq: "monthly" as const },
    { path: "/blog", priority: 0.7, freq: "weekly" as const },
    { path: "/blog/fiber-laser-vs-co2-laser-cutting", priority: 0.6, freq: "monthly" as const },
    { path: "/blog/cobot-welding-roi-real-numbers", priority: 0.6, freq: "monthly" as const },
    { path: "/blog/press-brake-tonnage-calculator", priority: 0.6, freq: "monthly" as const },
    { path: "/blog/laser-cleaning-vs-sandblasting", priority: 0.6, freq: "monthly" as const },
    { path: "/blog/laser-welding-vs-tig-welding-comparison", priority: 0.6, freq: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" as const },
    { path: "/terms-of-service", priority: 0.3, freq: "yearly" as const },
  ];

  return pages.flatMap(({ path, priority, freq }) => makeUrls(path, priority, freq));
}
