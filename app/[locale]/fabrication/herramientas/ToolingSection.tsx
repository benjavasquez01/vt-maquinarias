import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Punch = {
  name: string;
  front: string;
  side: string;
};

// Order follows the VTM Herramientas catalog page.
const PUNCHES: Punch[] = [
  {
    name: "Punzón Cuello de Cisne",
    front: "/images/herramientas/punzon-cuello-cisne.webp",
    side: "/images/herramientas/punzon-cuello-cisne-side.webp",
  },
  {
    name: "Punzón Punta de Lápiz 30°",
    front: "/images/herramientas/punzon-punta-lapiz-30.webp",
    side: "/images/herramientas/punzon-punta-lapiz-30-side.webp",
  },
  {
    name: "Punzón Riel",
    front: "/images/herramientas/punzon-riel.webp",
    side: "/images/herramientas/punzon-riel-side.webp",
  },
  {
    name: "Punzón Aplastado",
    front: "/images/herramientas/punzon-aplastado.webp",
    side: "/images/herramientas/punzon-aplastado-side.webp",
  },
  {
    name: "Punzón Estándar",
    front: "/images/herramientas/punzon-estandar.webp",
    side: "/images/herramientas/punzon-estandar-side.webp",
  },
];

const HIGHLIGHTS = [
  { label: "Stock", value: "Inmediato" },
  { label: "Tratamiento", value: "Térmico" },
  { label: "Matrices", value: "Multi-V" },
  { label: "Seccionado", value: "Según cliente" },
];

export function ToolingSection({ locale }: { locale: "en" | "es" }) {
  // Spanish-only site today; the locale prop keeps the signature consistent
  // with the rest of the press-brake components.
  void locale;

  return (
    <section className="bg-vtm-gray-light py-20 md:py-28" id="herramientas">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <SectionLabel className="mb-4">Herramientas y Repuestos para Plegadoras</SectionLabel>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-4">
          VTM Herramientas — Punzones y Matrices
        </h2>
        <p className="text-vtm-gray-mid font-body max-w-2xl mb-4 leading-relaxed">
          Punzones y matrices para plegadoras CNC, disponibles para reposición, trabajos
          repetitivos y aplicaciones especiales según el tipo de pieza.
        </p>
        <p className="text-vtm-gray-mid font-body text-sm max-w-2xl mb-10">
          Herramientas intercambiables con tratamiento térmico para mayor resistencia al
          desgaste. Disponibles como punzones, matrices y repuestos seccionados para trabajo
          por tramos, reposición rápida y fabricación de piezas repetitivas.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="bg-white border border-vtm-gray-border px-4 py-3">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-vtm-gray-mid mb-0.5">{h.label}</p>
              <p className="font-headline font-semibold text-vtm-dark text-sm">{h.value}</p>
            </div>
          ))}
        </div>

        {/* Punzones disponibles */}
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-vtm-gray-mid mb-5">
          Punzones Disponibles
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PUNCHES.map((p) => (
            <div key={p.name} className="bg-white border border-vtm-gray-border p-5">
              <p className="font-headline font-semibold text-vtm-dark text-sm mb-4">{p.name}</p>
              <div className="grid grid-cols-2 gap-3">
                <figure>
                  <div className="relative aspect-[3/4] bg-vtm-gray-light/60">
                    <Image
                      src={p.front}
                      alt={`${p.name} — vista frontal`}
                      fill
                      sizes="(max-width: 640px) 45vw, 15vw"
                      className="object-contain p-3"
                    />
                  </div>
                  <figcaption className="text-vtm-gray-mid text-xs font-body text-center mt-2">Frente</figcaption>
                </figure>
                <figure>
                  <div className="relative aspect-[3/4] bg-vtm-gray-light/60">
                    <Image
                      src={p.side}
                      alt={`${p.name} — vista lateral`}
                      fill
                      sizes="(max-width: 640px) 45vw, 15vw"
                      className="object-contain p-3"
                    />
                  </div>
                  <figcaption className="text-vtm-gray-mid text-xs font-body text-center mt-2">Lado</figcaption>
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
