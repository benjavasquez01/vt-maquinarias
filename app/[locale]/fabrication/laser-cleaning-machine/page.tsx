import type { Metadata } from "next";

import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { CleaningModelBrowser } from "./CleaningModelBrowser";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Máquina de Limpieza Láser",
  description:
    "Sistemas de limpieza láser de fibra pulsada, 50W–500W. Elimina óxido, recubrimientos y óxidos sin químicos, sin chorro abrasivo y sin daño al sustrato. Soporte en Chile incluido.",
};

export default async function LaserCleaningPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  return (
    <ProductPageTemplate data={content[locale]} hideSpecs hideConfigure>
      <CleaningModelBrowser locale={locale} />
    </ProductPageTemplate>
  );
}
