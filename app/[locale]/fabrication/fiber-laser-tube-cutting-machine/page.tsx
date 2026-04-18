import type { Metadata } from "next";

import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Fiber Laser Tube Cutting Machine — VTM-T / VTM-MT Series",
  description: "CNC fiber laser tube cutting machines, 1.5–6 kW. Round tube up to 220 mm, lengths to 9 m. Cuts round, square, rectangular, angle, channel, H-beam. Bochu CypTube controller. Full US installation.",
};

export default async function FiberLaserTubePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  return <ProductPageTemplate data={content[locale]} />;
}
