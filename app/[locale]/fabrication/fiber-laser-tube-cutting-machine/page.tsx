import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { TubeModelBrowser } from "./TubeModelBrowser";
import { TubeHeroScroll } from "./TubeHeroScroll";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Máquina de Corte Láser de Fibra para Tubo — Serie VTM Tube",
  description: "Máquinas CNC de corte láser de fibra para tubo. Tubo redondo, cuadrado, rectangular, ángulo, canal y viga H. Instalación en Chile incluida.",
};

export default async function FiberLaserTubePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  const c = content[locale];

  return (
    <>
      <TubeHeroScroll
        category={c.category}
        machineName={c.machineName}
        subheadline={c.heroSubheadline}
        locale={locale}
      />
      <ProductPageTemplate data={c} hideHero hideFeatures hideSpecs hideConfigure>
        <TubeModelBrowser locale={locale} />
      </ProductPageTemplate>
    </>
  );
}
