import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { TubeModelBrowser } from "./TubeModelBrowser";
import { TubeHeroScroll } from "./TubeHeroScroll";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Fiber Laser Tube Cutting Machine — VTM Tube Series",
  description: "CNC fiber laser tube cutting machines. Round tube, square, rectangular, angle iron, channel, H-beam. Full US installation.",
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
