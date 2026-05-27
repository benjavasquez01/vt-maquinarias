import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de VT Maquinarias — cómo recopilamos, usamos y protegemos su información.",
};

const SECTIONS = [
  {
    title: "Información que Recopilamos",
    body: [
      "Información de contacto que usted proporciona: nombre, nombre de la empresa, correo electrónico, número de teléfono y número de WhatsApp opcional cuando envía una solicitud de cotización, un formulario de contacto o descarga una ficha técnica.",
      "Datos de interés en máquinas: las categorías de equipos y máquinas específicas en las que expresa interés, incluyendo preferencias de configuración e información de volumen de producción compartida durante las conversaciones de cotización.",
      "Datos de uso: páginas visitadas, tiempo en el sitio, fuente de referencia, tipo de navegador y tipo de dispositivo, recopilados automáticamente mediante Google Analytics 4 y Microsoft Clarity.",
      "Transcripciones de chat y conversaciones con IA: las conversaciones con nuestro Asistente de Ventas con IA se almacenan para mejorar la calidad de las respuestas y permitir que nuestro equipo de ventas haga un seguimiento preciso.",
    ],
  },
  {
    title: "Cómo Usamos Su Información",
    body: [
      "Para responder a sus solicitudes de cotización y consultas con precios, plazos de entrega y recomendaciones de equipos precisos.",
      "Para enviarle correos de seguimiento relacionados con los equipos en los que expresó interés. Puede darse de baja en cualquier momento usando el enlace en cualquier correo.",
      "Para notificar a nuestro equipo de ventas vía WhatsApp cuando se envía un nuevo contacto, para que puedan hacer un seguimiento oportuno.",
      "Para mejorar la experiencia de nuestro sitio web analizando cómo los visitantes navegan e interactúan con nuestro contenido.",
      "Para enviar nuestro boletín si usted se ha suscrito. Esto es independiente de los correos de cotización y puede darse de baja por separado.",
    ],
  },
  {
    title: "Servicios de Terceros",
    body: [
      "HubSpot CRM: Su información de contacto y datos de contacto se almacenan en HubSpot para la gestión del equipo de ventas. Las prácticas de privacidad de HubSpot se rigen por su propia política de privacidad.",
      "Google Analytics 4: Usamos GA4 para la analítica del sitio web. Los datos se recopilan de forma anónima y no identifican a visitantes individuales. Puede optar por no participar usando el complemento de exclusión de Google Analytics.",
      "Microsoft Clarity: Usamos Clarity para análisis de mapas de calor y grabación de sesiones. Las grabaciones no capturan contraseñas ni información de pago.",
      "Crisp Chat: Nuestro widget de chat en vivo funciona con Crisp. Las conversaciones de chat se almacenan en el sistema de Crisp.",
      "Claude (Anthropic): Nuestro Asistente de Ventas con IA usa la API Claude de Anthropic para procesar y responder a sus mensajes. Los datos de las conversaciones están sujetos a las políticas de uso de Anthropic.",
    ],
  },
  {
    title: "Retención de Datos",
    body: [
      "Los datos de contacto en HubSpot se conservan durante 3 años desde la última actividad, tras lo cual se archivan o eliminan.",
      "Los datos de analítica web (GA4) se conservan durante 14 meses según la configuración de retención predeterminada de Google.",
      "Las bajas de marketing por correo se respetan de forma inmediata y permanente.",
    ],
  },
  {
    title: "Sus Derechos",
    body: [
      "Puede solicitar una copia de los datos personales que tenemos sobre usted escribiéndonos a la dirección indicada más abajo.",
      "Puede solicitar la eliminación de sus datos personales en cualquier momento. Atenderemos las solicitudes de eliminación dentro de 30 días, salvo cuando la ley exija la conservación de los datos.",
      "Puede darse de baja del marketing por correo en cualquier momento usando el enlace de cancelación en cualquier correo o contactándonos directamente.",
    ],
  },
  {
    title: "Contacto",
    body: [
      "Para consultas relacionadas con la privacidad o solicitudes de datos, contáctenos en: privacy@vtmaquinarias.cl",
      "VT Maquinarias — operaciones en Chile.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-md mx-auto px-6 py-32">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-4">Política de Privacidad</h1>
        <p className="text-vtm-gray-mid mb-12">Última actualización: 1 de abril de 2026</p>

        <p className="text-vtm-gray-mid leading-relaxed mb-12">
          VT Maquinarias (&quot;nosotros&quot;) se compromete a proteger su privacidad. Esta política explica qué información recopilamos, cómo la usamos y qué derechos tiene respecto a sus datos.
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
