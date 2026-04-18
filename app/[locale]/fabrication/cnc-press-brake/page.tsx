import type { Metadata } from "next";

import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "CNC Press Brake",
  description:
    "CNC hydraulic press brakes, 40–400 ton, with graphic CNC controller and 3D bend simulation, 4-axis back gauge, and ±0.01mm repeatability. Full US installation and support.",
};

export default async function CncPrakeePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  return <ProductPageTemplate data={content[locale]} />;
}
