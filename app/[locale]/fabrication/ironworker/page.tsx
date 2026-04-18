import type { Metadata } from "next";

import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Hydraulic Ironworker",
  description:
    "Hydraulic ironworker machines, 55–110 ton. Five work stations: punching, notching, flat bar shearing, angle iron shearing, and tube notching — all in one machine.",
};

export default async function IronworkerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  return <ProductPageTemplate data={content[locale]} />;
}
