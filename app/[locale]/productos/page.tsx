import type { Metadata } from "next";

// Alias route: /productos renders the same listing as /fabrication.
// Both URLs are kept live; this re-exports the fabrication page component.
export { default } from "../fabrication/page";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Maquinaria industrial de fabricación para talleres metálicos en Chile — corte láser de fibra (plancha, tubo, combo), láser portátil 4 en 1, soldadura láser, limpieza láser, plegadoras CNC, paneladoras, punzonadoras y compresores de aire. Instalación y soporte en Chile incluidos.",
};
