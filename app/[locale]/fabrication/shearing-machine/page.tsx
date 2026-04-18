import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Guillotine & Swing Beam Shearing Machines — VTM Tech Solutions",
  description:
    "Hydraulic guillotine shearing up to 16 mm and swing beam shearing up to 12 mm. CNC back gauge, adjustable rake angle, full US support.",
};

export default async function ShearingMachinePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  return <ProductPageTemplate data={content[locale]} />;
}
