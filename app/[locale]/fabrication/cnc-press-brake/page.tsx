import type { Metadata } from "next";

import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { ControllerComparison } from "./ControllerComparison";
import { PressBrakeModelBrowser } from "./PressBrakeModelBrowser";
import { content } from "./content";

export const metadata: Metadata = {
  title: "CNC Press Brake",
  description:
    "CNC press brakes — hydraulic 63–1600T single-machine and servo electric 160–800T tandem pairs. Graphic CNC controller with 3D bend simulation, 4-axis back gauge, and ±0.01mm repeatability. Full US installation and support.",
};

export default async function CncPrakeePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  return (
    <ProductPageTemplate
      data={content[locale]}
      featureSlots={{ 0: <ControllerComparison key="controller-comparison" locale={locale} /> }}
      hideSpecs
    >
      <PressBrakeModelBrowser locale={locale} />
    </ProductPageTemplate>
  );
}
