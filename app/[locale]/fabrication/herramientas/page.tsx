import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ToolingSection } from "./ToolingSection";

export const metadata: Metadata = {
  title: "Herramientas para Plegadoras — Punzones y Matrices",
  description:
    "VTM Herramientas: punzones y matrices para plegadoras CNC con tratamiento térmico. Punzón estándar, aplastado, cuello de cisne, punta de lápiz 30° y riel. Matrices multi-V y seccionado según cliente. Stock inmediato en Chile.",
};

export default async function HerramientasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: "en" | "es" };

  return (
    <>
      {/* Hero */}
      <section className="bg-vtm-dark pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel light className="mb-4">Herramientas y Repuestos</SectionLabel>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            VTM Herramientas
          </h1>
          <p className="text-white/60 font-body text-lg max-w-2xl mb-8">
            Punzones y matrices para plegadoras CNC, disponibles para reposición, trabajos
            repetitivos y aplicaciones especiales según el tipo de pieza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/quote?machine=cnc-press-brake" variant="primary" size="lg">
              Consultar Disponibilidad
            </Button>
            <Button
              href="/fabrication/cnc-press-brake"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/60"
            >
              Ver Plegadoras CNC
            </Button>
          </div>
        </div>
      </section>

      <ToolingSection locale={locale} />
    </>
  );
}
