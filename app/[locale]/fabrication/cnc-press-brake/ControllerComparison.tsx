"use client";

import Image from "next/image";

const copy = {
  en: {
    sectionLabel: "CNC Controllers",
    headline: "Two Controller Options",
    subheadline: "Both machines ship with a DELEM graphical CNC controller running real-time embedded Linux. Choose based on your shop's programming workflow and automation needs.",
    col1: "DA-53T",
    col1sub: "Standard Controller",
    col2: "DA-69S",
    col2sub: "Advanced Controller",
    rows: [
      { feature: "Display",              c1: "15.6\" TFT touch (1366 × 768)",                       c2: "24\" full touch (1920 × 1080, 32-bit color)" },
      { feature: "Operating System",     c1: "Real-time embedded Linux",                            c2: "Real-time embedded Linux (multitasking)" },
      { feature: "Programming",          c1: "2D graphical (optional) + alphanumeric",              c2: "2D + 3D graphical programming & simulation" },
      { feature: "Programming features", c1: "Bend sequence · radius/bumping · one-page",           c2: "Auto bend sequence · job list · DXF import · sequence optimization" },
      { feature: "3D visualization",     c1: "—",                                                   c2: "Real-scale 3D part simulation" },
      { feature: "Auto calculations",    c1: "Force · allowance · crowning · bottoming · hemming",  c2: "Force · allowance · crowning · developed length · bottoming · hemming" },
      { feature: "Angle correction",     c1: "Learned angle correction database",                   c2: "Advanced learned angle correction database" },
      { feature: "Tooling support",      c1: "Tool library (30 punches / 30 dies)",                 c2: "Graphical tool setup · segmentation visualization · tool library" },
      { feature: "Crowning control",     c1: "CNC crowning",                                        c2: "CNC crowning (automatic compensation available)" },
      { feature: "Connectivity",         c1: "USB · optional network",                              c2: "Multiple network ports · USB · optional OPC-UA" },
      { feature: "File integration",     c1: "—",                                                   c2: "DXF import (parts & tooling)" },
      { feature: "Automation",           c1: "Auto bumping calculation",                            c2: "Auto sequence optimization · auto bumping · stock counter" },
      { feature: "Remote diagnostics",   c1: "—",                                                   c2: "Yes — remote diagnostics + onboard analysis" },
      { feature: "Safety",               c1: "Safety PLC interfacing (RS232)",                      c2: "Safety PLC interfacing" },
      { feature: "Protection / Weight",  c1: "IP54 · ~7 kg",                                       c2: "IP54 · ~14.5 kg housing / ~9 kg panel" },
    ],
    best1: "Best for shops that need a proven, fast DELEM interface on embedded Linux. Handles standard and complex bending with full auto-calculations, bumping, and CNC crowning.",
    best2: "Best for high-mix production, 3D part simulation, DXF-to-bend workflows, and shops that need sequence optimization and remote diagnostics.",
  },
  es: {
    sectionLabel: "Controladores CNC",
    headline: "Dos Opciones de Controlador",
    subheadline: "Ambas máquinas incluyen un controlador CNC gráfico DELEM con Linux embebido en tiempo real. Elija según el flujo de programación y las necesidades de automatización de su taller.",
    col1: "DA-53T",
    col1sub: "Controlador Estándar",
    col2: "DA-69S",
    col2sub: "Controlador Avanzado",
    rows: [
      { feature: "Pantalla",                   c1: "TFT táctil de 15.6\" (1366 × 768)",                      c2: "Táctil completa de 24\" (1920 × 1080, color 32 bits)" },
      { feature: "Sistema Operativo",          c1: "Linux embebido en tiempo real",                          c2: "Linux embebido en tiempo real (multitarea)" },
      { feature: "Programación",               c1: "Gráfico 2D (opcional) + alfanumérico",                   c2: "Programación y simulación gráfica 2D + 3D" },
      { feature: "Funciones de programación",  c1: "Secuencia · radio/bombeo · página única",                c2: "Secuencia automática · lista de trabajos · importación DXF · optimización" },
      { feature: "Visualización 3D",           c1: "—",                                                      c2: "Simulación 3D a escala real de la pieza" },
      { feature: "Cálculos automáticos",       c1: "Fuerza · deducción · coronamiento · fondo · dobladillo", c2: "Fuerza · deducción · coronamiento · longitud · fondo · dobladillo" },
      { feature: "Corrección de ángulo",       c1: "Base de datos de corrección aprendida",                  c2: "Base de datos avanzada de corrección aprendida" },
      { feature: "Herramientas",               c1: "Biblioteca: 30 punzones / 30 matrices",                  c2: "Configuración gráfica · visualización de segmentos · biblioteca" },
      { feature: "Coronamiento",               c1: "Coronamiento CNC",                                       c2: "Coronamiento CNC (compensación automática disponible)" },
      { feature: "Conectividad",               c1: "USB · red opcional",                                     c2: "Múltiples puertos de red · USB · OPC-UA opcional" },
      { feature: "Integración de archivos",    c1: "—",                                                      c2: "Importación DXF (piezas y herramientas)" },
      { feature: "Automatización",             c1: "Cálculo automático de bombeo",                           c2: "Optimización de secuencia · bombeo auto · contador de stock" },
      { feature: "Diagnóstico remoto",         c1: "—",                                                      c2: "Sí — diagnóstico remoto + herramientas de análisis" },
      { feature: "Seguridad",                  c1: "Interfaz con PLC de seguridad (RS232)",                  c2: "Interfaz con PLC de seguridad" },
      { feature: "Protección / Peso",          c1: "IP54 · ~7 kg",                                          c2: "IP54 · ~14.5 kg carcasa / ~9 kg panel" },
    ],
    best1: "Ideal para talleres que buscan una interfaz DELEM probada en Linux embebido. Maneja plegado estándar y complejo con cálculos automáticos, bombeo y coronamiento CNC.",
    best2: "Ideal para producción de alta variedad, simulación 3D, flujos DXF-a-doblado, optimización de secuencias y diagnóstico remoto.",
  },
};

export function ControllerComparison({ locale }: { locale: "en" | "es" }) {
  const t = copy[locale] ?? copy.en;

  return (
    <section className="bg-white py-20 md:py-28 border-b border-vtm-gray-border" id="controllers">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <p className="text-xs font-bold tracking-widest uppercase text-vtm-gray-mid mb-3">{t.sectionLabel}</p>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-4">
          {t.headline}
        </h2>
        <p className="text-vtm-gray-mid text-lg max-w-2xl mb-12 leading-relaxed">{t.subheadline}</p>

        {/* Comparison table */}
        <div className="border border-vtm-gray-border overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="border-b border-vtm-gray-border bg-vtm-gray-light">
                <th className="text-left px-5 py-6 text-xs font-semibold tracking-wider uppercase text-vtm-gray-mid w-[30%] align-bottom">
                  {locale === "es" ? "Característica" : "Feature"}
                </th>
                <th className="text-left px-5 py-6 w-[35%] align-bottom">
                  <div className="relative w-full aspect-[4/3] mb-4 bg-white">
                    <Image
                      src="/images/DA-53T.webp"
                      alt="DELEM DA-53T CNC Controller"
                      fill
                      className="object-contain"
                      sizes="300px"
                    />
                  </div>
                  <span className="font-headline font-bold text-vtm-dark text-base">{t.col1}</span>
                  <span className="block text-xs font-medium text-vtm-gray-mid tracking-wide mt-0.5">{t.col1sub}</span>
                </th>
                <th className="text-left px-5 py-6 bg-vtm-dark/[0.03] border-l border-vtm-gray-border w-[35%] align-bottom">
                  <div className="relative w-full aspect-[4/3] mb-4 bg-white">
                    <Image
                      src="/images/DA-69S.webp"
                      alt="DELEM DA-69S CNC Controller"
                      fill
                      className="object-contain"
                      sizes="300px"
                    />
                  </div>
                  <span className="font-headline font-bold text-vtm-dark text-base">{t.col2}</span>
                  <span className="block text-xs font-medium text-vtm-red tracking-wide mt-0.5">{t.col2sub}</span>
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
                  <td className="px-5 py-3.5 text-vtm-dark">{row.c1 === "—" ? <span className="text-vtm-gray-border">—</span> : row.c1}</td>
                  <td className="px-5 py-3.5 text-vtm-dark bg-vtm-dark/[0.03] border-l border-vtm-gray-border">{row.c2 === "—" ? <span className="text-vtm-gray-border">—</span> : row.c2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Best-for callouts */}
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
