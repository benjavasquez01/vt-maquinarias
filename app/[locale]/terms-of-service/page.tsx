import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio",
  description: "Términos de servicio de VT Maquinarias que rigen el uso de nuestro sitio web.",
};

const SECTIONS = [
  {
    title: "Uso de Este Sitio Web",
    body: [
      "Este sitio web es operado por VT Maquinarias con el propósito de proporcionar información sobre nuestros productos y servicios y facilitar solicitudes de cotización y contacto.",
      "Usted puede usar este sitio web únicamente con fines lícitos. No puede usarlo para transmitir spam, contenido malicioso ni para intentar accesos no autorizados a nuestros sistemas.",
      "Todo el contenido de este sitio web — incluyendo texto, imágenes, especificaciones de productos, información de precios y documentos descargables — es propiedad de VT Maquinarias y no puede reproducirse sin autorización por escrito.",
    ],
  },
  {
    title: "Información de Productos y Exactitud",
    body: [
      "Las especificaciones de productos en este sitio web tienen fines informativos. Las especificaciones, precios y disponibilidad reales se confirman al momento de la cotización formal.",
      "Hacemos esfuerzos razonables para mantener la información de productos exacta y actualizada. Sin embargo, las especificaciones pueden cambiar sin previo aviso a medida que los productos se actualizan.",
      "La información de precios, cuando se muestra, es solo indicativa. Las cotizaciones formales reflejan los precios vigentes, los tipos de cambio y los impuestos o aranceles aplicables.",
    ],
  },
  {
    title: "Asistente de Ventas con IA",
    body: [
      "Nuestro sitio web incluye un asistente de ventas impulsado por IA basado en el modelo de lenguaje Claude de Anthropic. Este asistente está diseñado para ayudarle a explorar nuestros productos y enviar solicitudes de cotización.",
      "El asistente de IA proporciona información general de productos basada en su entrenamiento. Para especificaciones técnicas y precios vinculantes, consulte siempre una cotización formal por escrito de VT Maquinarias.",
      "Las conversaciones con el asistente de IA pueden ser revisadas por nuestro equipo de ventas para asegurar exactitud y calidad. Los datos de las conversaciones se manejan según nuestra Política de Privacidad.",
    ],
  },
  {
    title: "Limitación de Responsabilidad",
    body: [
      "VT Maquinarias proporciona este sitio web y su contenido tal cual. No ofrecemos garantías, expresas o implícitas, respecto a la exactitud o integridad de la información de este sitio.",
      "VT Maquinarias no será responsable de daños indirectos, incidentales o consecuentes que surjan del uso de este sitio web o de la confianza en la información aquí contenida.",
    ],
  },
  {
    title: "Ley Aplicable",
    body: [
      "Estos términos se rigen por las leyes de la República de Chile, sin atender a disposiciones sobre conflictos de leyes.",
      "Cualquier controversia derivada de estos términos o de su uso de este sitio web se resolverá ante los tribunales competentes de Chile.",
    ],
  },
  {
    title: "Cambios a Estos Términos",
    body: [
      "Podemos actualizar estos términos periódicamente. La fecha en la parte superior de esta página indica cuándo se revisaron por última vez. El uso continuo de este sitio web tras un cambio constituye la aceptación de los términos revisados.",
    ],
  },
  {
    title: "Contacto",
    body: [
      "Consultas sobre estos términos: legal@vtmaquinarias.cl",
      "VT Maquinarias — operaciones en Chile.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-md mx-auto px-6 py-32">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-4">Términos de Servicio</h1>
        <p className="text-vtm-gray-mid mb-12">Última actualización: 1 de abril de 2026</p>

        <p className="text-vtm-gray-mid leading-relaxed mb-12">
          Al usar el sitio web de VT Maquinarias (vtmaquinarias.cl), usted acepta estos términos. Si no está de acuerdo, por favor no use este sitio web.
        </p>

        <div className="space-y-12">
          {SECTIONS.map(({ title, body }) => (
            <section key={title}>
              <h2 className="font-headline text-2xl font-bold text-vtm-dark mb-4">{title}</h2>
              <ul className="space-y-3">
                {body.map((item, i) => (
                  <li key={i} className="flex gap-3 text-vtm-gray-mid leading-relaxed">
                    <span className="text-vtm-red mt-1 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
