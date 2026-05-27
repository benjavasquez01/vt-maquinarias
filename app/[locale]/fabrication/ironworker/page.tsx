import type { Metadata } from "next";

import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Punzonadora Hidráulica",
  description:
    "Punzonadoras hidráulicas de 55–110 toneladas. Cinco estaciones de trabajo: punzonado, muescado, corte de barra plana, corte de ángulo y muescado de tubo — todo en una sola máquina.",
};

export default async function IronworkerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };
  return <ProductPageTemplate data={content[locale]} />;
}
