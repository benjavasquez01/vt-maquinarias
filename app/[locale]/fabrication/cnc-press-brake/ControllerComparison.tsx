"use client";

import Image from "next/image";

const copy = {
  en: {
    sectionLabel: "CNC Controllers",
    headline: "EL15T and E310P Controller Options",
    subheadline:
      "The updated press brake catalog offers two CNC controller options for different levels of automation, programming speed, and production control.",
    col1: "E310P",
    col1sub: "Standard Controller",
    col2: "EL15T",
    col2sub: "Advanced Controller",
    rows: [
      { feature: "Display", c1: "10.1\" touchscreen", c2: "15.6\" touchscreen" },
      { feature: "Operating system", c1: "Simple touch operation", c2: "Stable Linux system" },
      { feature: "Programming", c1: "Simple and intuitive operation", c2: "2D graphical programming" },
      { feature: "Drawing", c1: "Tool library for bending setup", c2: "Direct drawing on the controller" },
      { feature: "Angle control", c1: "Angle control included", c2: "Collision alert for safer programming" },
      { feature: "Best use", c1: "Standard production and straightforward bending jobs", c2: "Higher automation, complex parts, and faster programming workflow" },
    ],
    best1:
      "Best for workshops that need a simple, reliable controller for day-to-day bending operations with touch control, angle control, and tool library support.",
    best2:
      "Best for higher-productivity shops that need a larger touch screen, Linux stability, 2D graphical programming, direct drawing, and collision alerts.",
  },
  es: {
    sectionLabel: "Controladores CNC",
    headline: "Controladores EL15T y E310P",
    subheadline:
      "El catálogo actualizado ofrece dos soluciones de control para distintos niveles de automatización, productividad y complejidad de plegado.",
    col1: "E310P",
    col1sub: "Controlador Estándar",
    col2: "EL15T",
    col2sub: "Controlador Avanzado",
    rows: [
      { feature: "Pantalla", c1: "Pantalla táctil de 10.1\"", c2: "Pantalla táctil de 15.6\"" },
      { feature: "Sistema", c1: "Operación táctil simple", c2: "Sistema Linux estable" },
      { feature: "Programación", c1: "Operación simple e intuitiva", c2: "Programación gráfica 2D" },
      { feature: "Dibujo y herramientas", c1: "Biblioteca de herramientas de plegado", c2: "Dibujo directo en el control" },
      { feature: "Control de proceso", c1: "Control de ángulo", c2: "Alerta de colisión" },
      { feature: "Uso recomendado", c1: "Producción estándar y trabajos de plegado recurrentes", c2: "Mayor automatización, piezas complejas y programación más rápida" },
    ],
    best1:
      "Ideal para talleres que buscan una operación sencilla, intuitiva y confiable para trabajos habituales de plegado, con control de ángulo y biblioteca de herramientas.",
    best2:
      "Ideal para producción con mayor exigencia, programación gráfica 2D, dibujo directo en el control y alertas de colisión para trabajar con más seguridad y eficiencia.",
  },
};

export function ControllerComparison({ locale }: { locale: "en" | "es" }) {
  const t = copy[locale] ?? copy.en;

  return (
    <section className="bg-white py-20 md:py-28 border-b border-vtm-gray-border" id="controllers">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-xs font-bold tracking-widest uppercase text-vtm-gray-mid mb-3">{t.sectionLabel}</p>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-4">
          {t.headline}
        </h2>
        <p className="text-vtm-gray-mid text-lg max-w-3xl mb-12 leading-relaxed">{t.subheadline}</p>

        {/* Mobile: stacked cards — a hidden horizontal scroll gave no hint that
            the second controller existed, so each controller gets its own card. */}
        <div className="md:hidden space-y-6">
          {[
            { name: t.col1, sub: t.col1sub, img: "/images/cnc-controller-e310p.png", alt: "E310P CNC Controller", accent: false, get: (r: (typeof t.rows)[number]) => r.c1 },
            { name: t.col2, sub: t.col2sub, img: "/images/cnc-controller-el15t.webp", alt: "EL15T CNC Controller", accent: true, get: (r: (typeof t.rows)[number]) => r.c2 },
          ].map((c) => (
            <div key={c.name} className={`border ${c.accent ? "border-vtm-red/40" : "border-vtm-gray-border"}`}>
              <div className="p-5 border-b border-vtm-gray-border bg-vtm-gray-light/40">
                <div className="relative w-full aspect-[4/3] mb-4 bg-white">
                  <Image src={c.img} alt={c.alt} fill className="object-contain" sizes="90vw" />
                </div>
                <span className={`inline-flex text-[10px] font-bold tracking-widest uppercase px-2 py-1 mb-2 ${c.accent ? "bg-vtm-red text-white" : "bg-vtm-gray-border/70 text-vtm-dark"}`}>
                  {c.sub}
                </span>
                <span className="block font-headline font-bold text-vtm-dark text-2xl">{c.name}</span>
              </div>
              <dl>
                {t.rows.map((row, i) => (
                  <div key={row.feature} className={`px-5 py-3 ${i % 2 === 0 ? "bg-white" : "bg-vtm-gray-light/40"}`}>
                    <dt className="text-[11px] font-semibold tracking-wide uppercase text-vtm-gray-mid mb-0.5">{row.feature}</dt>
                    <dd className="text-sm text-vtm-dark">{c.get(row)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        {/* Desktop: side-by-side comparison table */}
        <div className="hidden md:block border border-vtm-gray-border overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="border-b border-vtm-gray-border bg-vtm-gray-light">
                <th className="text-left px-5 py-6 text-xs font-semibold tracking-wider uppercase text-vtm-gray-mid w-[30%] align-bottom">
                  {locale === "es" ? "Característica" : "Feature"}
                </th>
                <th className="text-left px-5 py-6 w-[35%] align-bottom">
                  <div className="relative w-full aspect-[4/3] mb-4 bg-white">
                    <Image
                      src="/images/cnc-controller-e310p.png"
                      alt="E310P CNC Controller"
                      fill
                      className="object-contain"
                      sizes="300px"
                    />
                  </div>
                  <span className="inline-flex text-[10px] font-bold tracking-widest uppercase bg-vtm-gray-border/70 text-vtm-dark px-2 py-1 mb-4">
                    {t.col1sub}
                  </span>
                  <span className="block font-headline font-bold text-vtm-dark text-2xl">{t.col1}</span>
                </th>
                <th className="text-left px-5 py-6 bg-vtm-dark/[0.03] border-l border-vtm-gray-border w-[35%] align-bottom">
                  <div className="relative w-full aspect-[4/3] mb-4 bg-white">
                    <Image
                      src="/images/cnc-controller-el15t.webp"
                      alt="EL15T CNC Controller"
                      fill
                      className="object-contain"
                      sizes="300px"
                    />
                  </div>
                  <span className="inline-flex text-[10px] font-bold tracking-widest uppercase bg-vtm-red text-white px-2 py-1 mb-4">
                    {t.col2sub}
                  </span>
                  <span className="block font-headline font-bold text-vtm-dark text-2xl">{t.col2}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {t.rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-vtm-gray-border last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-vtm-gray-light/40"}`}
                >
                  <td className="px-5 py-3.5 text-vtm-gray-mid font-medium">{row.feature}</td>
                  <td className="px-5 py-3.5 text-vtm-dark">{row.c1}</td>
                  <td className="px-5 py-3.5 text-vtm-dark bg-vtm-dark/[0.03] border-l border-vtm-gray-border">{row.c2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="border border-vtm-gray-border p-5">
            <p className="text-xs font-bold tracking-widest uppercase text-vtm-gray-mid mb-2">{t.col1}</p>
            <p className="text-sm text-vtm-gray-mid leading-relaxed">{t.best1}</p>
          </div>
          <div className="border border-vtm-red/30 bg-vtm-red/[0.02] p-5">
            <p className="text-xs font-bold tracking-widest uppercase text-vtm-red mb-2">{t.col2}</p>
            <p className="text-sm text-vtm-gray-mid leading-relaxed">{t.best2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
