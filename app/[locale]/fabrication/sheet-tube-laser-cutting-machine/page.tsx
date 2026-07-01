import type { Metadata } from "next";

import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { SheetTubeModelBrowser } from "./SheetTubeModelBrowser";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Máquina de Corte Láser Combinada Plancha y Tubo — Serie VTM-ST",
  description:
    "Láser de fibra combinado VTM-ST — corta plancha plana y tubo/perfiles estructurales en una sola máquina. 3–6 kW, mesas hasta 4020, tubo redondo hasta 180 mm, largos hasta 6 m. Una máquina, dos capacidades.",
};

export default async function SheetTubeLaserPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  return (
    <ProductPageTemplate data={content[locale]} hideSpecs hideConfigure>
      <SheetTubeModelBrowser locale={locale} />
    </ProductPageTemplate>
  );
}
