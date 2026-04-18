import type { Metadata } from "next";

import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Laser Cleaning Machine",
  description:
    "Pulsed fiber laser cleaning systems, 50W–500W. Remove rust, coatings, and oxides with no chemicals, no media blasting, and zero substrate damage. US support included.",
};

export default async function LaserCleaningPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  return <ProductPageTemplate data={content[locale]} />;
}
