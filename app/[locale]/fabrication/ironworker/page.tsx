import type { Metadata } from "next";

import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Punzonadora Hidráulica VTM-IW",
  description:
    "Punzonadora hidráulica VTM-IW de 60–120 toneladas. Cinco estaciones para perforar, escantonar, cortar planchas, cortar ángulos y cortar macizos en una sola máquina.",
};

export default async function IronworkerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  return <ProductPageTemplate data={content[locale]} />;
}
