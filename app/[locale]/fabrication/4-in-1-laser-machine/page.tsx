import type { Metadata } from "next";

import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { WeldingModelBrowser } from "./WeldingModelBrowser";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Máquina Láser 4 en 1 — Láser de Fibra Portátil VTM-4W",
  description:
    "Láser de fibra portátil VTM-4W: soldadura, corte, limpieza y soldadura con aporte de alambre en un solo equipo. 1.5–3 kW. Funciona en acero al carbono, inoxidable, aluminio, latón, cobre y galvanizado. Sin consumibles.",
};

export default async function FourInOneLaserPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  return (
    <ProductPageTemplate data={content[locale]} hideModes hideSpecs hideConfigure>
      <WeldingModelBrowser locale={locale} />
    </ProductPageTemplate>
  );
}
