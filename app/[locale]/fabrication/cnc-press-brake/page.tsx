import type { Metadata } from "next";

import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { HeroScroll } from "@/app/[locale]/fabrication/fiber-laser-cutting-machine/HeroScroll";
import { ControllerComparison } from "./ControllerComparison";
import { PressBrakeModelBrowser } from "./PressBrakeModelBrowser";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Plegadora CNC",
  description:
    "Plegadoras CNC VTM-PB hidráulicas y VTM-EPB eléctricas full servo para fabricación metálica de alta precisión. Modelos hidráulicos de 63T a 1000T, eléctricos con ahorro energético de hasta 80%, control CNC gráfico y soporte técnico local en Chile.",
};

const HERO_CONTENT = {
  en: {
    sectionLabel: "Fabrication",
    headline: "CNC\nPress Brake",
    subheadline:
      "VTM-PB hydraulic and VTM-EPB full servo electric CNC press brakes for precise, repeatable, and efficient metal bending.",
    cta1: "Request a Quote",
    cta2: "View Models",
  },
  es: {
    sectionLabel: "Fabricación",
    headline: "Plegadora\nCNC",
    subheadline:
      "Potencia, precisión y productividad para llevar tu fabricación al siguiente nivel. Nuestras plegadoras CNC están diseñadas para realizar plegados complejos, precisos y repetibles, optimizando los tiempos de producción y reduciendo errores.",
    cta1: "Solicitar Cotización",
    cta2: "Ver Modelos",
  },
};

export default async function CncPrakeePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  return (
    <>
      <HeroScroll
        c={HERO_CONTENT[locale]}
        image="/images/cnc-press-brake-hero-2.webp"
        quoteHref="/quote?machine=cnc-press-brake"
        initialOverlayOpacity={0.82}
      />
      <ProductPageTemplate
        data={content[locale]}
        featureSlots={{ 0: <ControllerComparison key="controller-comparison" locale={locale} /> }}
        hideHero
        hideSpecs
        hideConfigure
      >
        <PressBrakeModelBrowser locale={locale} />
      </ProductPageTemplate>
    </>
  );
}
