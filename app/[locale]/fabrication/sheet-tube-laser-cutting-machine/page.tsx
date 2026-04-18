import type { Metadata } from "next";

import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Sheet & Tube Combo Laser Cutting Machine — VTM-ST Series",
  description:
    "VTM-ST combo fiber laser — cuts flat sheet and tube/structural profiles on one machine. 3–6 kW, bed sizes to 4020, round tube to 180 mm, lengths to 6 m. One machine, two capabilities.",
};

export default async function SheetTubeLaserPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  return <ProductPageTemplate data={content[locale]} />;
}
