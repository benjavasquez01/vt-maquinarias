import type { Metadata } from "next";

import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "4-in-1 Laser Machine — VTM-4W Handheld Fiber Laser",
  description:
    "VTM-4W handheld fiber laser: welding, cutting, cleaning, and wire-feed welding in one unit. 1.5–3 kW. Works on carbon steel, stainless, aluminum, brass, copper, galvanized. No consumables.",
};

export default async function FourInOneLaserPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  return <ProductPageTemplate data={content[locale]} />;
}
