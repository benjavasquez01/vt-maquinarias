import type { Metadata } from "next";

import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { HeroScroll } from "@/app/[locale]/fabrication/fiber-laser-cutting-machine/HeroScroll";
import { ControllerComparison } from "./ControllerComparison";
import { PressBrakeModelBrowser } from "./PressBrakeModelBrowser";
import { content } from "./content";

export const metadata: Metadata = {
  title: "CNC Press Brake",
  description:
    "CNC press brakes — hydraulic 63–1600T single-machine and servo electric 160–800T tandem pairs. Graphic CNC controller with 3D bend simulation, 4-axis back gauge, and ±0.01mm repeatability. Full US installation and support.",
};

const HERO_CONTENT = {
  en: {
    sectionLabel: "Fabrication",
    headline: "CNC\nPress Brake",
    subheadline:
      "Two drive platforms — hydraulic single machines from 63 to 1600 tons for heavy plate, and servo electric tandem pairs from 160 to 800 tons per machine for synchronized bending up to 16 m.",
    cta1: "Request a Quote",
    cta2: "View Models",
  },
  es: {
    sectionLabel: "Fabricación",
    headline: "Plegadora\nCNC",
    subheadline:
      "Dos plataformas de accionamiento — máquinas hidráulicas de 63 a 1600 toneladas para placa pesada, y pares servo eléctricos en tándem de 160 a 800 toneladas por máquina para plegado sincronizado hasta 16 m.",
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
        locale={locale}
        image="/images/cnc-press-brake-hero-2.png"
        quoteHref="/quote?machine=cnc-press-brake"
      />
      <ProductPageTemplate
        data={content[locale]}
        featureSlots={{ 0: <ControllerComparison key="controller-comparison" locale={locale} /> }}
        hideHero
        hideSpecs
      >
        <PressBrakeModelBrowser locale={locale} />
      </ProductPageTemplate>
    </>
  );
}
