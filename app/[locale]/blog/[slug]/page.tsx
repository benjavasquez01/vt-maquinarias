import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/lib/navigation";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

// Static post data — replace with Sanity fetch once CMS is populated
const POSTS: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageId: string;
  author: string;
  body: { type: "h2" | "p" | "ul"; content: string | string[] }[];
  related: { title: string; slug: string; imageId: string; category: string }[];
}> = {
  "cobot-welding-roi-checklist": {
    title: "Checklist de ROI de Soldadura con Cobots: 8 Preguntas Antes de Comprar",
    excerpt: "No todos los talleres están listos para un cobot. Y no todos los que están listos compran el correcto. Este checklist lo guía por las preguntas que determinan si una celda de soldadura con cobot será rentable — y qué tan rápido.",
    category: "Guía de Compra",
    date: "10 de abril de 2026",
    readTime: "7 min de lectura",
    imageId: "/images/blog-cobot-roi.webp",
    author: "VT Maquinarias",
    body: [
      { type: "p", content: "El mercado de soldadura con cobots crece rápido, y también crece el número de talleres que compraron uno y no obtuvieron el retorno que esperaban. Por lo general, no es porque la máquina falle — es porque el taller no estaba preparado para usarla con eficacia. Este checklist existe para que lo descubra antes de invertir USD 85.000–120.000." },
      { type: "h2", content: "1. ¿Tiene piezas repetibles?" },
      { type: "p", content: "Los cobots sobresalen en el trabajo repetitivo. Si produce las mismas 10–20 configuraciones de piezas semana tras semana, es un candidato fuerte. Si cada trabajo es a medida, único y sin pedidos repetidos, el cobot pasará más tiempo siendo reprogramado que soldando. El umbral que usan la mayoría de los integradores: al menos el 30% de sus horas de soldadura deberían ser en piezas que produce más de una vez al mes." },
      { type: "h2", content: "2. ¿Cuál es su costo actual por hora-soldadura?" },
      { type: "p", content: "Sume el costo horario completamente cargado de su soldador: sueldo, beneficios, gastos generales y supervisión. Un cobot que funciona a 2.5× la velocidad manual en una pieza que a un soldador le toma 6 minutos le cuesta aproximadamente lo equivalente a la electricidad por pieza, en lugar del costo de mano de obra. Esa diferencia es el motor de su retorno." },
      { type: "h2", content: "3. ¿Qué tan buena es su situación de fijación (fixturing)?" },
      { type: "p", content: "Este es el factor más subestimado en el ROI de un cobot. Un cobot suelda exactamente donde usted le indica. Si sus piezas quedan 3mm fuera de posición en el dispositivo cada tercer ciclo, el cobot soldará en el lugar equivocado. Los talleres con dispositivos sólidos y consistentes obtienen un retorno rápido. Los talleres con dispositivos desgastados o mal diseñados pasan sus primeros meses arreglando el verdadero problema antes de que el cobot pueda rendir." },
      { type: "h2", content: "4. ¿Puede identificar sus 5 trabajos de soldadura de mayor volumen?" },
      { type: "p", content: "Antes de comprar, liste sus cinco trabajos de soldadura de mayor volumen. Estime las horas mensuales que consume cada uno. Si esos cinco trabajos juntos representan más del 40% de sus horas de soldadura mensuales, tiene un conjunto objetivo claro para el cobot. Si no puede nombrarlos, necesita mejores datos de producción antes de tomar una decisión de capital de esta magnitud." },
      { type: "h2", content: "5. ¿Tiene un soldador que pueda convertirse en operador de cobot?" },
      { type: "p", content: "Los mejores operadores de cobot son soldadores existentes — entienden la calidad de la soldadura, saben cuándo algo se ve mal y pueden resolver problemas de ajuste de juntas. No necesita un ingeniero en robótica. Sí necesita a alguien que se sienta cómodo aprendiendo nueva tecnología y se haga responsable de la máquina. Los talleres que asignan un encargado dedicado del cobot en los primeros 90 días consistentemente superan a los que lo tratan como equipo compartido." },
      { type: "h2", content: "6. ¿Cuál es su situación de espacio en planta?" },
      { type: "p", content: "Una celda de cobot requiere aproximadamente 2,5 × 2,5 m de espacio para el brazo, el posicionador y el acceso del operador. A diferencia de una celda robótica tradicional, no se requiere jaula — el cobot usa detección de fuerza para detenerse si entra en contacto con una persona. Pero sí necesita un área de trabajo definida y un flujo de material consistente hacia dentro y fuera de la celda. Si su planta es caótica y la disposición cambia con frecuencia, planifique la ubicación de la celda antes de ordenar." },
      { type: "h2", content: "7. ¿Cómo es su tasa de rechazo en las piezas objetivo?" },
      { type: "p", content: "Si su tasa actual de rechazo de soldadura manual en las piezas objetivo está por encima del 2%, un cobot casi con seguridad la reducirá — el ángulo de antorcha y la velocidad de avance del cobot son consistentes a ±0.05mm en cada pieza, en cada turno. Si su tasa de rechazo ya está por debajo del 0,5%, la mejora de calidad no es su motor de retorno. Lo son la velocidad y el costo de mano de obra." },
      { type: "h2", content: "8. ¿Cuál es su meta de recuperación?" },
      { type: "p", content: "La mayoría de los talleres medianos apuntan a una recuperación de 24–36 meses en equipos de capital. Según nuestros datos de clientes, las celdas de soldadura con cobot promedian una recuperación de 15–22 meses en talleres con buena disciplina de fijación y más del 30% de volumen de piezas repetidas. Si su análisis de recuperación requiere menos de 12 meses, necesita un volumen de soldadura muy alto o un costo de mano de obra actual muy alto para lograrlo. Sea honesto con los números antes de comprometerse." },
      { type: "h2", content: "La respuesta honesta" },
      { type: "p", content: "Si respondió que sí a las preguntas 1, 3, 4 y 5, probablemente sea un buen candidato para un cobot. Si respondió que no a la calidad de la fijación o no puede nombrar sus piezas de alto volumen, resuelva esos problemas primero — también mejorarán su operación de soldadura manual, y son requisitos previos para el éxito del cobot. Preferimos decírselo ahora que después de la instalación." },
    ],
    related: [
      { title: "ROI de Soldadura con Cobots: Números Reales de 3 Talleres", slug: "cobot-welding-roi-real-numbers", imageId: "/images/blog-cobot-roi.webp", category: "Caso de Estudio" },
      { title: "Soldadura Láser vs. Soldadura TIG", slug: "laser-welding-vs-tig-welding-comparison", imageId: "/images/blog-laser-vs-tig.webp", category: "Guía Técnica" },
    ],
  },
  "press-brake-throughput-signs": {
    title: "5 Señales de que Su Plegadora es el Cuello de Botella de Su Taller",
    excerpt: "Una plegadora lenta no se anuncia sola. Se manifiesta como horas extra, plazos incumplidos y cotizaciones que teme aceptar. Así diagnostica el problema antes de que le cueste más trabajo.",
    category: "Guía Técnica",
    date: "3 de abril de 2026",
    readTime: "6 min de lectura",
    imageId: "/images/blog-press-brake-tonnage.webp",
    author: "VT Maquinarias",
    body: [
      { type: "p", content: "En la mayoría de los talleres de fabricación, la plegadora no es la máquina más vistosa. El láser de fibra se lleva la atención. El cobot se lleva las demostraciones. La plegadora simplemente está ahí plegando piezas — hasta que no da abasto, y de repente toda operación posterior queda esperándola." },
      { type: "p", content: "Estas son las cinco señales más claras de que su plegadora se ha convertido en la restricción de producción de su taller." },
      { type: "h2", content: "1. Las piezas se acumulan frente a ella" },
      { type: "p", content: "Recorra su planta al final de un turno. Si hay una fila constante de piezas cortadas esperando ser plegadas mientras la plegadora sigue funcionando, tiene un desbalance de rendimiento. O su capacidad de corte aguas arriba superó su capacidad de plegado, o el tiempo de preparación de su plegadora es demasiado alto para su mezcla de trabajos. Ambos tienen solución — pero necesita identificar cuál está ocurriendo." },
      { type: "h2", content: "2. El tiempo de preparación se está comiendo su día" },
      { type: "p", content: "En una plegadora CNC moderna con controlador gráfico, un operador capacitado debería poder preparar un nuevo trabajo en 10–20 minutos: cargar el programa, cambiar herramientas, verificar la posición del tope trasero y correr una primera pieza. Si su operador gasta 45–60 minutos en la preparación de trabajos que realiza regularmente, el problema suele ser una de tres cosas: no hay programas guardados, no hay herramientas de cambio rápido, o la configuración del tope trasero no es la adecuada para la complejidad de sus piezas." },
      { type: "h2", content: "3. Está rechazando piezas plegadas complejas" },
      { type: "p", content: "Si sus cotizadores evitan presupuestar piezas con múltiples pliegues, tolerancias estrechas o geometrías de pestaña complejas — no porque su gente no pueda hacerlo, sino porque la máquina no puede mantener la tolerancia o el tope trasero no soporta el programa — está dejando ingresos sobre la mesa. Una plegadora CNC con tope trasero de 4+1 a 8+1 ejes y repetibilidad de ±0.01mm habilita trabajos que una máquina manual o un CNC antiguo simplemente no puede producir de forma confiable." },
      { type: "h2", content: "4. Su repetibilidad es inconsistente entre operadores" },
      { type: "p", content: "Si un operador produce piezas plegadas que necesitan retrabajo y las de otro salen de la máquina listas para soldar, el problema no es la gente — es la máquina. Las plegadoras antiguas sin compensación automática de arqueado producen resultados distintos a medida que el carnero y la bancada se deflectan bajo tonelaje. Una plegadora CNC moderna con monitoreo activo de ángulo y arqueado automático produce resultados consistentes sin importar qué operador la maneje." },
      { type: "h2", content: "5. Está haciendo horas extra para cumplir con las entregas" },
      { type: "p", content: "Las horas extra en la plegadora son una señal clara de que las horas de producción disponibles no alcanzan la demanda. Antes de comprar una segunda máquina, analice su relación preparación-a-producción. En muchos talleres, entre el 40% y 50% del tiempo de la plegadora es preparación, no plegado real. Un controlador más rápido, herramientas de cambio rápido y programas guardados a menudo pueden recuperar entre el 30% y 40% de la capacidad efectiva sin inversión de capital. Si ya hizo eso y aún hace horas extra de forma constante, es momento de evaluar agregar tonelaje o una segunda máquina." },
      { type: "h2", content: "Qué hacer al respecto" },
      { type: "p", content: "Comience midiendo el tiempo real de preparación y de producción de sus 10 trabajos más comunes durante dos semanas. Los datos le dirán si tiene un problema de capacidad o de preparación. Un problema de capacidad requiere inversión. Un problema de preparación requiere cambios de proceso — y a veces una actualización de máquina a un controlador y sistema de herramientas que haga posibles esos cambios. Con gusto revisamos sus datos de producción con usted y le damos una evaluación honesta." },
    ],
    related: [
      { title: "Cálculo de Tonelaje de Plegadora", slug: "press-brake-tonnage-calculator", imageId: "/images/blog-press-brake-tonnage.webp", category: "Guía Técnica" },
      { title: "Soldadura Láser vs. Soldadura TIG", slug: "laser-welding-vs-tig-welding-comparison", imageId: "/images/blog-laser-vs-tig.webp", category: "Guía Técnica" },
    ],
  },
  "fiber-laser-vs-co2-2026": {
    title: "Láser de Fibra vs. Láser CO₂: ¿Cuál Conviene a Su Taller en 2026?",
    excerpt: "Eficiencia energética, velocidad de corte en plancha delgada y costo operativo — desglosamos cada diferencia relevante para que elija correctamente según su mezcla de materiales.",
    category: "Guía de Compra",
    date: "28 de marzo de 2026",
    readTime: "8 min de lectura",
    imageId: "/images/blog-fiber-vs-co2.webp",
    author: "VT Maquinarias",
    body: [
      { type: "p", content: "Si está evaluando equipos de corte láser, encontrará opciones de fibra y de CO₂ de casi todos los fabricantes. Las especificaciones se parecen en el papel. Las realidades operativas no." },
      { type: "h2", content: "La diferencia fundamental" },
      { type: "p", content: "Los láseres de CO₂ generan su haz dentro de una cavidad resonadora llena de gas y lo entregan a través de una serie de espejos hasta el cabezal de corte. Los láseres de fibra generan el haz dentro de un cable de fibra óptica usando diodos semiconductores y lo entregan a través de ese mismo cable hasta el cabezal de corte — sin espejos." },
      { type: "p", content: "Esta diferencia en la entrega del haz es lo que determina casi todas las distinciones prácticas entre ambas tecnologías." },
      { type: "h2", content: "Velocidad de corte: la fibra gana en material delgado, el CO₂ resiste en grueso" },
      { type: "p", content: "Para plancha metálica de menos de 10mm, el láser de fibra corta 2–3× más rápido que el CO₂ a la misma potencia. Esto se debe a que la fibra produce una longitud de onda más corta (1,07 μm vs. 10,6 μm del CO₂), que es mejor absorbida por los metales, en particular los no ferrosos como el cobre y el latón." },
      { type: "p", content: "En placa gruesa sobre 25mm, el CO₂ aún tiene una ventaja marginal en la calidad del borde de corte. Pero la mayoría de los talleres de fabricación pasan entre el 80% y 90% de su tiempo de corte en material de menos de 12mm, donde la fibra es claramente más rápida." },
      { type: "h2", content: "Costo operativo: la fibra gana de forma decisiva" },
      { type: "ul", content: [
        "Eficiencia energética: 30% para fibra vs. 10–15% para CO₂ — costo de electricidad drásticamente menor",
        "Sin gas láser: las máquinas de CO₂ consumen gas CO₂ como parte de la generación del haz; la fibra no requiere ninguno",
        "Sin mantenimiento de espejos: las trayectorias ópticas del CO₂ requieren limpieza regular y eventual reemplazo; la fibra no tiene espejos",
        "Tiempo de calentamiento: la fibra arranca al instante; el CO₂ requiere 15–30 minutos",
      ]},
      { type: "h2", content: "¿Cuándo considerar CO₂?" },
      { type: "p", content: "Si corta principalmente placa gruesa (>25mm) de acero al carbono y la calidad del borde en ese material grueso es crítica, el CO₂ aún produce una leve ventaja en la suavidad de la cara de corte. Si corta materiales no metálicos como acrílico, madera o tela además de metal, el CO₂ es la única opción — la fibra no puede cortar estos materiales de forma efectiva." },
      { type: "h2", content: "En resumen" },
      { type: "p", content: "Para un taller de fabricación metálica que corta acero, inoxidable, aluminio y material no ferroso ocasional bajo 25mm, el láser de fibra es la elección clara en 2026. Menor costo operativo, mayor velocidad en plancha delgada y cero mantenimiento de espejos. Los únicos casos donde el CO₂ sigue siendo competitivo son los especialistas en placa gruesa y los talleres que cortan materiales no metálicos." },
    ],
    related: [
      { title: "Cálculo de Tonelaje de Plegadora", slug: "press-brake-tonnage-calculator", imageId: "/images/blog-press-brake-tonnage.webp", category: "Guía Técnica" },
      { title: "Limpieza Láser vs. Arenado", slug: "laser-cleaning-vs-sandblasting", imageId: "/images/blog-laser-cleaning-compariso.webp", category: "Guía Técnica" },
    ],
  },
  "fiber-laser-vs-co2-laser-cutting": {
    title: "Láser de Fibra vs. Láser CO₂: ¿Cuál Conviene a Su Taller en 2026?",
    excerpt: "Eficiencia energética, velocidad de corte en plancha delgada y costo operativo — desglosamos cada diferencia relevante para que elija correctamente según su mezcla de materiales.",
    category: "Guía de Compra",
    date: "28 de marzo de 2026",
    readTime: "8 min de lectura",
    imageId: "/images/blog-fiber-vs-co2.webp",
    author: "VT Maquinarias",
    body: [
      { type: "p", content: "Si está evaluando equipos de corte láser, encontrará opciones de fibra y de CO₂ de casi todos los fabricantes. Las especificaciones se parecen en el papel. Las realidades operativas no." },
      { type: "h2", content: "La diferencia fundamental" },
      { type: "p", content: "Los láseres de CO₂ generan su haz dentro de una cavidad resonadora llena de gas y lo entregan a través de una serie de espejos hasta el cabezal de corte. Los láseres de fibra generan el haz dentro de un cable de fibra óptica usando diodos semiconductores y lo entregan a través de ese mismo cable hasta el cabezal de corte — sin espejos." },
      { type: "p", content: "Esta diferencia en la entrega del haz es lo que determina casi todas las distinciones prácticas entre ambas tecnologías." },
      { type: "h2", content: "Velocidad de corte: la fibra gana en material delgado, el CO₂ resiste en grueso" },
      { type: "p", content: "Para plancha metálica de menos de 10mm, el láser de fibra corta 2–3× más rápido que el CO₂ a la misma potencia. Esto se debe a que la fibra produce una longitud de onda más corta (1,07 μm vs. 10,6 μm del CO₂), que es mejor absorbida por los metales, en particular los no ferrosos como el cobre y el latón." },
      { type: "p", content: "En placa gruesa sobre 25mm, el CO₂ aún tiene una ventaja marginal en la calidad del borde de corte. Pero la mayoría de los talleres de fabricación pasan entre el 80% y 90% de su tiempo de corte en material de menos de 12mm, donde la fibra es claramente más rápida." },
      { type: "h2", content: "Costo operativo: la fibra gana de forma decisiva" },
      { type: "ul", content: [
        "Eficiencia energética: 30% para fibra vs. 10–15% para CO₂ — costo de electricidad drásticamente menor",
        "Sin gas láser: las máquinas de CO₂ consumen gas CO₂ como parte de la generación del haz; la fibra no requiere ninguno",
        "Sin mantenimiento de espejos: las trayectorias ópticas del CO₂ requieren limpieza regular y eventual reemplazo; la fibra no tiene espejos",
        "Tiempo de calentamiento: la fibra arranca al instante; el CO₂ requiere 15–30 minutos",
      ]},
      { type: "h2", content: "¿Cuándo considerar CO₂?" },
      { type: "p", content: "Si corta principalmente placa gruesa (>25mm) de acero al carbono y la calidad del borde en ese material grueso es crítica, el CO₂ aún produce una leve ventaja en la suavidad de la cara de corte. Si corta materiales no metálicos como acrílico, madera o tela además de metal, el CO₂ es la única opción — la fibra no puede cortar estos materiales de forma efectiva." },
      { type: "h2", content: "En resumen" },
      { type: "p", content: "Para un taller de fabricación metálica que corta acero, inoxidable, aluminio y material no ferroso ocasional bajo 25mm, el láser de fibra es la elección clara en 2026. Menor costo operativo, mayor velocidad en plancha delgada y cero mantenimiento de espejos. Los únicos casos donde el CO₂ sigue siendo competitivo son los especialistas en placa gruesa y los talleres que cortan materiales no metálicos." },
    ],
    related: [
      { title: "Cálculo de Tonelaje de Plegadora", slug: "press-brake-tonnage-calculator", imageId: "/images/blog-press-brake-tonnage.webp", category: "Guía Técnica" },
      { title: "Limpieza Láser vs. Arenado", slug: "laser-cleaning-vs-sandblasting", imageId: "/images/blog-laser-cleaning-compariso.webp", category: "Guía Técnica" },
    ],
  },
  "cobot-welding-roi-real-numbers": {
    title: "ROI de Soldadura con Cobots: Números Reales de 3 Talleres",
    excerpt: "Medimos el período de recuperación, las tasas de rechazo por calidad y la retención de soldadores en tres talleres que implementaron brazos de soldadura colaborativos en los últimos 18 meses.",
    category: "Caso de Estudio",
    date: "14 de marzo de 2026",
    readTime: "11 min de lectura",
    imageId: "/images/blog-cobot-roi.webp",
    author: "VT Maquinarias",
    body: [
      { type: "p", content: "Antes de que un taller invierta USD 85.000–120.000 en una celda de soldadura con cobot, necesita números reales — no proyecciones del fabricante. Seguimos a tres clientes de VT Maquinarias durante sus primeros 18 meses de operación con cobot y documentamos los resultados reales." },
      { type: "h2", content: "Taller 1: Fabricante de componentes HVAC, Santiago" },
      { type: "p", content: "Este taller produce una mezcla estable de soportes HVAC, accesorios de ducto y bastidores de equipos en acero galvanizado calibre 14–16. Antes del cobot, dos soldadores manejaban la producción repetitiva de soportes mientras otros dos hacían trabajo a medida." },
      { type: "p", content: "Resultado a los 18 meses: El cobot maneja toda la producción de soportes — 120–140 piezas por turno. Un soldador fue reasignado al trabajo de ajuste a medida que antes se subcontrataba. El otro fue promovido a supervisor y programador de la celda del cobot. Recuperación lograda a los 14 meses." },
      { type: "h2", content: "Taller 2: Fabricante de acero estructural, Concepción" },
      { type: "p", content: "Trabajo de mayor variedad y menor volumen, con foco en bastidores y plataformas de acero. Preocupación inicial: que el cobot no fuera lo suficientemente flexible para su variedad de piezas." },
      { type: "p", content: "Realidad: El taller identificó un conjunto central de 22 configuraciones de bastidor que representaban el 65% de sus horas de soldadura. Esas se programaron primero. El cobot ahora las maneja, mientras los soldadores calificados se enfocan en el trabajo a medida. Recuperación proyectada a los 22 meses." },
      { type: "h2", content: "Taller 3: Proveedor de piezas automotrices, Antofagasta" },
      { type: "p", content: "Producción de alto volumen y repetitiva — el escenario ideal para un cobot. 240 piezas por turno, soportes y subconjuntos de acero al carbono. El cobot alcanzó su velocidad plena de producción en la semana 3." },
      { type: "p", content: "Resultado: La tasa de rechazo por calidad bajó del 1,8% al 0,3%. El ángulo de antorcha y la velocidad de avance del cobot son consistentes a ±0.05mm — algo que incluso los soldadores experimentados no pueden sostener durante un turno completo. Recuperación a los 11 meses." },
      { type: "h2", content: "Qué muestran realmente los números" },
      { type: "ul", content: [
        "Período de recuperación promedio en los tres talleres: 15,7 meses",
        "Mejora en la tasa de rechazo por calidad: reducción del 50–85%",
        "Retención de soldadores: los tres talleres mantuvieron a todos sus soldadores empleados — reasignados a trabajo de mayor valor",
        "Reducción de horas extra: reducción promedio del 40% en horas extra de soldadura",
      ]},
    ],
    related: [
      { title: "Láser de Fibra vs. Láser CO₂", slug: "fiber-laser-vs-co2-laser-cutting", imageId: "/images/blog-fiber-vs-co2.webp", category: "Guía de Compra" },
      { title: "Soldadura Láser vs. Soldadura TIG", slug: "laser-welding-vs-tig-welding-comparison", imageId: "/images/blog-laser-vs-tig.webp", category: "Guía Técnica" },
    ],
  },
  "press-brake-tonnage-calculator": {
    title: "Tonelaje de Plegadora: Cómo Calcular lo que Realmente Necesita",
    excerpt: "Subdimensionar una plegadora es caro. Sobredimensionarla es dinero desperdiciado. Esta es la fórmula que usan los fabricantes para especificar el tonelaje correcto según su mezcla de materiales.",
    category: "Guía Técnica",
    date: "28 de febrero de 2026",
    readTime: "7 min de lectura",
    imageId: "/images/blog-press-brake-tonnage.webp",
    author: "VT Maquinarias",
    body: [
      { type: "p", content: "Comprar una plegadora sin calcular el tonelaje requerido es uno de los errores más comunes — y costosos — en la compra de equipos de fabricación. Muy poco tonelaje y la máquina no puede conformar su material. Demasiado, y gastó decenas de miles de dólares extra en una capacidad que nunca usará." },
      { type: "h2", content: "La fórmula básica de tonelaje" },
      { type: "p", content: "Tonelaje requerido = (Resistencia a la tracción del material × Espesor del material² × Longitud del pliegue) ÷ (Ancho de apertura del troquel × 5,33)" },
      { type: "p", content: "Para acero al carbono (resistencia a la tracción ~420 MPa), 3,4 mm de espesor, 1.200 mm de longitud de pliegue, apertura de troquel en V de 25 mm: el resultado es de aproximadamente 9,7 toneladas por metro, o unas 39 toneladas en total. Su asesor de VT Maquinarias puede hacer este cálculo con sus valores exactos." },
      { type: "h2", content: "Valores de resistencia a la tracción del material" },
      { type: "ul", content: [
        "Acero al carbono (A36): 400–550 MPa — use 420 MPa para estimaciones",
        "Acero inoxidable (304): 515–655 MPa — requiere ~50% más tonelaje que el acero al carbono",
        "Aluminio (6061-T6): 290–310 MPa",
        "Acero laminado en caliente: similar al acero al carbono a igual espesor",
        "Acero de alta resistencia (HSLA): puede superar los 700 MPa — verifique con el certificado de fábrica",
      ]},
      { type: "h2", content: "Agregue un margen de seguridad" },
      { type: "p", content: "Nunca compre una plegadora con una capacidad exactamente igual a su tonelaje calculado. El material varía — una plancha certificada a 420 MPa podría medir 450 MPa. La selección del troquel en V cambia los requerimientos. Operar la máquina al 100% de su capacidad nominal reduce significativamente la vida útil de los componentes." },
      { type: "p", content: "Regla práctica: compre una máquina con capacidad para un 20–30% más de tonelaje que su requerimiento máximo calculado. Si su trabajo más exigente calcula 80 toneladas, compre una máquina de 100 toneladas." },
      { type: "h2", content: "La longitud de la bancada importa tanto como el tonelaje" },
      { type: "p", content: "Una máquina de 100 toneladas con una bancada de 3 m le permite distribuir la fuerza a lo largo de toda la bancada. Si pliega piezas cortas en una máquina larga, aplica 100 toneladas sobre 600 mm en lugar de 3.000 mm — creando una fuerza concentrada que puede dañar la máquina. Ajuste la longitud de la bancada a la longitud de su pieza más común, no a su pieza más larga." },
      { type: "h2", content: "Gama de Plegadoras CNC de VT Maquinarias" },
      { type: "p", content: "Nuestras plegadoras hidráulicas CNC van desde 40 toneladas/1,2 m hasta 400 toneladas/4,3 m. Todas vienen con controlador gráfico CNC, tope trasero de 4 ejes y repetibilidad de ±0.01mm. Le ayudamos a especificar la máquina correcta para su mezcla de materiales antes de que se comprometa con una compra." },
    ],
    related: [
      { title: "Láser de Fibra vs. Láser CO₂", slug: "fiber-laser-vs-co2-laser-cutting", imageId: "/images/blog-fiber-vs-co2.webp", category: "Guía de Compra" },
      { title: "Limpieza Láser vs. Arenado", slug: "laser-cleaning-vs-sandblasting", imageId: "/images/blog-laser-cleaning-compariso.webp", category: "Guía Técnica" },
    ],
  },
  "laser-cleaning-vs-sandblasting": {
    title: "Limpieza Láser vs. Arenado: Una Comparación Lado a Lado",
    excerpt: "El arenado ha sido la opción por defecto para eliminar óxido, cascarilla y recubrimientos durante décadas. La limpieza láser está cambiando eso — pero no es la opción correcta en toda situación.",
    category: "Guía Técnica",
    date: "12 de febrero de 2026",
    readTime: "6 min de lectura",
    imageId: "/images/blog-laser-cleaning-compariso.webp",
    author: "VT Maquinarias",
    body: [
      { type: "p", content: "El arenado y el granallado han dominado la preparación de superficies por más de un siglo. La limpieza láser entró a los talleres de fabricación en la última década — y está desplazando al arenado en aplicaciones específicas donde la limpieza, la precisión y el costo operativo importan." },
      { type: "h2", content: "Cómo funciona la limpieza láser" },
      { type: "p", content: "Un láser de fibra pulsado entrega pulsos de alta energía a la superficie de la pieza. Los contaminantes — óxido, cascarilla de laminación, pintura, capas de óxido — absorben la energía del láser y se vaporizan o expulsan como partículas finas. El metal base debajo refleja el láser (distinta absorción de longitud de onda) y no se ve afectado. El resultado: metal base limpio sin abrasión mecánica." },
      { type: "h2", content: "Diferencias clave" },
      { type: "ul", content: [
        "Abrasivo: el arenado genera grandes volúmenes de abrasivo gastado que debe recolectarse y disponerse; la limpieza láser solo produce extracción de partículas finas (manejada por una pequeña aspiradora)",
        "Perfil de superficie: el arenado crea un perfil rugoso útil para la adherencia de recubrimientos; la limpieza láser deja el metal base liso — mejor para preparación de soldadura de precisión",
        "Fatiga del operador: el arenado requiere EPP completo y es físicamente exigente; la limpieza láser es manual con una pistola liviana",
        "Limpieza selectiva: el láser puede limpiar a 0,5mm de una soldadura o borde de pieza; el arenado no es selectivo",
        "Costo de capital: el equipo de arenado es más barato de adquirir; el retorno de la limpieza láser proviene del costo eliminado de abrasivo, disposición y mano de obra",
      ]},
      { type: "h2", content: "Dónde gana la limpieza láser" },
      { type: "p", content: "Eliminación de óxido pre-soldadura en aluminio y acero inoxidable, donde la limpieza afecta directamente la calidad de la soldadura. Limpieza de moldes en herramientas de precisión — sin riesgo de cambio dimensional. Eliminación de óxido en piezas pintadas o recubiertas donde necesita limpiar un área específica sin afectar el entorno. Trabajos aeroespaciales y automotrices con especificaciones estrictas de acabado superficial." },
      { type: "h2", content: "Dónde el arenado sigue siendo competitivo" },
      { type: "p", content: "Acero estructural de alto volumen donde el perfil superficial para adherencia de recubrimiento es el objetivo y el costo por pieza es el factor principal. Áreas de superficie muy grandes (cascos de barcos completos, secciones de puentes) donde el rendimiento de la limpieza láser es demasiado lento. Aplicaciones donde la rugosidad superficial inducida es beneficiosa." },
      { type: "h2", content: "Comparación de costo operativo" },
      { type: "p", content: "Una operación de arenado que consume cientos de kilos de abrasivo al día representa un costo significativo solo en abrasivo — antes de la disposición, la mano de obra y el mantenimiento del equipo. El costo operativo principal de un sistema de limpieza láser es la electricidad. Para la mayoría de los talleres de fabricación, el retorno de la limpieza láser es de 18–36 meses." },
    ],
    related: [
      { title: "Soldadura Láser vs. Soldadura TIG", slug: "laser-welding-vs-tig-welding-comparison", imageId: "/images/blog-laser-vs-tig.webp", category: "Guía Técnica" },
      { title: "Láser de Fibra vs. Láser CO₂", slug: "fiber-laser-vs-co2-laser-cutting", imageId: "/images/blog-fiber-vs-co2.webp", category: "Guía de Compra" },
    ],
  },
  "laser-welding-vs-tig-welding-comparison": {
    title: "Soldadura Láser vs. Soldadura TIG: Una Comparación Honesta",
    excerpt: "La soldadura TIG ha sido el estándar de oro para soldadura de precisión durante 70 años. La soldadura láser la está desafiando. Aquí explicamos dónde gana realmente cada tecnología.",
    category: "Guía Técnica",
    date: "15 de enero de 2026",
    readTime: "9 min de lectura",
    imageId: "/images/blog-laser-vs-tig.webp",
    author: "VT Maquinarias",
    body: [
      { type: "p", content: "El TIG dominó la fabricación de precisión por buenas razones: bajo aporte de calor, apariencia de cordón limpia y la capacidad de soldar prácticamente cualquier metal. La soldadura láser no intenta reemplazar al TIG en todas partes — pero lo está reemplazando en aplicaciones específicas donde la velocidad, el aporte de calor y el costo de consumibles importan." },
      { type: "h2", content: "Velocidad: sin competencia" },
      { type: "p", content: "La soldadura láser es 3–5× más rápida que el TIG en la misma junta. En un tubo de inoxidable de 1mm con una costura de 200mm, un soldador TIG hábil tarda aproximadamente 4–5 minutos. Un soldador láser completa la misma junta en menos de 1 minuto. A escala de producción, esta diferencia de tiempo se vuelve el principal argumento económico a favor del láser." },
      { type: "h2", content: "Aporte de calor: gana el láser" },
      { type: "p", content: "El punto focalizado del láser entrega energía solo donde se necesita. El ancho de la zona afectada por el calor (ZAC) en inoxidable de 1,5mm con láser es típicamente de 0,3–0,5mm. El TIG en el mismo material produce una ZAC de 1,5–3mm. Para piezas de pared delgada, conjuntos estéticos o cualquier cosa donde el alabeo sea una preocupación, esta diferencia es significativa." },
      { type: "h2", content: "Trabajo posterior: el láser gana en soldaduras estéticas" },
      { type: "p", content: "Un cordón de soldadura láser en inoxidable o aluminio es angosto, consistente y casi al ras del material base. Muchas piezas estéticas pueden ir directamente a pulido sin esmerilado. El TIG produce un cordón más ancho con más variación entre operadores — la mayoría del trabajo estético en inoxidable requiere esmerilado o lijado después de soldar. Para talleres que hacen gabinetes de inoxidable de gama alta o metalistería arquitectónica, esto representa una reducción importante de mano de obra." },
      { type: "h2", content: "Rango de materiales: el TIG es más amplio" },
      { type: "p", content: "El TIG puede soldar prácticamente todo metal soldable, incluyendo aleaciones exóticas, metales disímiles con la selección correcta de aporte e incluso algunos materiales no ferrosos que son difíciles para el láser. Para talleres con un amplio rango de materiales que incluye aleaciones inusuales, el TIG sigue siendo esencial. La soldadura láser sobresale en los metales industriales más comunes — acero al carbono, inoxidable, aluminio, cobre, latón." },
      { type: "h2", content: "Habilidad del operador: el láser es mucho más fácil" },
      { type: "p", content: "Un soldador TIG hábil tarda entre 6 y 18 meses en formarse. El soldador láser portátil con cabezal oscilante mueve el haz automáticamente — el operador controla la velocidad y dirección de avance. La mayoría de los operadores alcanzan una calidad de producción aceptable en 1–2 días. Esto no se trata de reemplazar a los soldadores calificados — se trata de reducir su dependencia de una fuerza laboral cada vez más escasa y costosa." },
      { type: "h2", content: "Cuándo conservar el TIG" },
      { type: "p", content: "Pasadas de raíz en tubería gruesa, placa muy gruesa (>12mm en una sola pasada), aleaciones exóticas fuera del rango óptimo del láser y trabajos de reparación en metales base desconocidos. El TIG también sigue siendo superior cuando el ajuste de la junta es deficiente — el baño fundido más grande puede salvar separaciones más amplias que un láser." },
      { type: "h2", content: "La respuesta práctica" },
      { type: "p", content: "La mayoría de los talleres de fabricación no reemplazan su capacidad TIG — agregan soldadura láser para el trabajo de producción que se beneficia de ella, y conservan el TIG para el trabajo complejo, exótico o de sección gruesa. Las dos tecnologías son complementarias, no competitivas." },
    ],
    related: [
      { title: "Limpieza Láser vs. Arenado", slug: "laser-cleaning-vs-sandblasting", imageId: "/images/blog-laser-cleaning-compariso.webp", category: "Guía Técnica" },
      { title: "ROI de Soldadura con Cobots: Números Reales", slug: "cobot-welding-roi-real-numbers", imageId: "/images/blog-cobot-roi.webp", category: "Caso de Estudio" },
    ],
  },
};

type BlogPost = (typeof POSTS)[string];

const FIBER_VS_CO2_ES_CL: BlogPost = {
  title: "Láser de Fibra vs. CO₂: Qué Conviene en una Maestranza Chilena",
  excerpt: "Comparamos consumo eléctrico, velocidad en plancha delgada, mantención, gases y costo por hora para talleres que cortan acero carbono, inoxidable y aluminio todos los días.",
  category: "Guía de Compra",
  date: "28 de marzo de 2026",
  readTime: "8 min de lectura",
  imageId: "/images/blog-fiber-vs-co2.webp",
  author: "Equipo Técnico VT Maquinarias",
  body: [
    { type: "p", content: "Si su taller está evaluando una mesa de corte láser, la pregunta real no es cuál tecnología se ve mejor en el catálogo. La pregunta es cuál le baja el costo por pieza, reduce mantenciones y se adapta a la mezcla de materiales que usted corta en Chile: acero carbono, inoxidable, aluminio y, cada cierto tiempo, cobre o latón." },
    { type: "h2", content: "Dónde gana el láser de fibra" },
    { type: "p", content: "En plancha delgada y media, el láser de fibra suele cortar bastante más rápido que un CO₂ de potencia equivalente. Además, consume menos energía, no usa gas láser para generar el haz y elimina la mantención de espejos. Para una maestranza con producción diaria, esa diferencia se nota en la cuenta de luz, en las horas disponibles de máquina y en la estabilidad del corte." },
    { type: "h2", content: "Cuándo el CO₂ todavía puede tener sentido" },
    { type: "p", content: "El CO₂ puede seguir siendo una alternativa si el taller corta principalmente materiales no metálicos o si tiene una aplicación muy específica en placa gruesa donde la terminación del borde sea más importante que la productividad. Pero para el metalmecánico promedio —plancha de acero carbono, inoxidable y aluminio bajo 25 mm— la fibra suele ser la decisión más lógica." },
    { type: "h2", content: "Mire el costo por hora, no solo el precio de compra" },
    { type: "ul", content: [
      "Consumo eléctrico real de la fuente y del chiller.",
      "Tiempo de puesta en marcha antes de comenzar a cortar.",
      "Costo y frecuencia de mantención óptica.",
      "Disponibilidad de servicio técnico y repuestos en Chile.",
      "Velocidad efectiva en los espesores que más vende su taller.",
    ] },
    { type: "h2", content: "Conclusión de taller" },
    { type: "p", content: "Para la mayoría de las maestranzas chilenas, el láser de fibra es la opción más rentable: corta más rápido la plancha delgada, exige menos mantención y permite operar con menor costo por pieza. El CO₂ queda para nichos específicos; la fibra es la plataforma de producción moderna para metal." },
  ],
  related: [
    { title: "Tonelaje de Plegadora CNC", slug: "press-brake-tonnage-calculator", imageId: "/images/blog-press-brake-tonnage.webp", category: "Guía Técnica" },
    { title: "Limpieza Láser vs. Arenado", slug: "laser-cleaning-vs-sandblasting", imageId: "/images/blog-laser-cleaning-compariso.webp", category: "Guía Técnica" },
  ],
};

const COBOT_CHECKLIST_ES_CL: BlogPost = {
  title: "Checklist de ROI para Soldadura con Cobot: Antes de Comprar",
  excerpt: "Ocho preguntas prácticas para saber si una celda colaborativa se paga con su mix de piezas, sus horas-hombre y su capacidad real de producción.",
  category: "Guía de Compra",
  date: "10 de abril de 2026",
  readTime: "7 min de lectura",
  imageId: "/images/blog-cobot-roi.webp",
  author: "Equipo Técnico VT Maquinarias",
  body: [
    { type: "p", content: "Un cobot de soldadura no se compra solo porque falta mano de obra. Se justifica cuando hay piezas repetitivas, dispositivos bien hechos y suficiente volumen para mantener la celda trabajando. Si la máquina pasa el día esperando material o siendo reprogramada, el ROI se cae." },
    { type: "h2", content: "1. ¿Tiene piezas repetitivas?" },
    { type: "p", content: "El mejor caso para un cobot es una pieza que vuelve todas las semanas: soportes, bastidores, marcos, subensambles o lotes chicos repetidos. Si cada trabajo es único, el operador gastará demasiado tiempo programando y ajustando." },
    { type: "h2", content: "2. ¿Sus dispositivos son confiables?" },
    { type: "p", content: "La celda suelda donde usted le enseña. Si la pieza queda corrida 2 o 3 mm por un mal útil de posicionamiento, el problema no es el robot: es la preparación. Antes de automatizar, asegure topes, prensas, escuadras y repetibilidad." },
    { type: "h2", content: "3. ¿Tiene quién lo opere?" },
    { type: "p", content: "No necesita un ingeniero en robótica. Necesita un soldador u operador ordenado, capaz de entender cordón, velocidad, antorcha y calidad. En Chile, donde el soldador calificado es escaso, convertir a un buen soldador en operador de celda suele ser la mejor estrategia." },
    { type: "h2", content: "4. ¿Cómo se paga?" },
    { type: "ul", content: [
      "Menos horas-hombre en piezas repetitivas.",
      "Menor retrabajo por cordones inconsistentes.",
      "Mayor producción por turno sin depender de horas extra.",
      "Mejor uso de soldadores expertos en trabajos complejos.",
    ] },
    { type: "h2", content: "Conclusión de compra" },
    { type: "p", content: "Si tiene volumen, dispositivos repetibles y un encargado claro, el cobot puede pagarse rápido. Si todavía no controla sus tiempos de preparación ni sus rechazos, primero ordene el proceso; después automatice." },
  ],
  related: [
    { title: "ROI de Soldadura con Cobots", slug: "cobot-welding-roi-real-numbers", imageId: "/images/blog-cobot-roi.webp", category: "Caso de Estudio" },
    { title: "Soldadura Láser vs. TIG", slug: "laser-welding-vs-tig-welding-comparison", imageId: "/images/blog-laser-vs-tig.webp", category: "Guía Técnica" },
  ],
};

const COBOT_ROI_ES_CL: BlogPost = {
  title: "ROI de Soldadura con Cobots: Números Reales de Taller",
  excerpt: "Cómo estimar recuperación de inversión mirando horas-hombre, piezas repetitivas, rechazo por soldadura y disponibilidad real de soldadores calificados.",
  category: "Caso de Estudio",
  date: "14 de marzo de 2026",
  readTime: "10 min de lectura",
  imageId: "/images/blog-cobot-roi.webp",
  author: "Equipo Técnico VT Maquinarias",
  body: [
    { type: "p", content: "El retorno de una celda de soldadura colaborativa no se calcula con promesas de catálogo. Se calcula con datos de piso: cuántas piezas repite al mes, cuánto demora cada cordón, cuántas horas extra paga y cuánto retrabajo aparece por variación entre operadores." },
    { type: "h2", content: "La variable principal: horas-hombre liberadas" },
    { type: "p", content: "Cuando una pieza repetitiva pasa de soldadura manual a cobot, el operador ya no está todo el ciclo con la antorcha en la mano. Puede preparar la siguiente pieza, revisar calidad o atender otra operación. Ahí aparece el ahorro: no solo en velocidad, sino en mejor uso del personal calificado." },
    { type: "h2", content: "Calidad y rechazo" },
    { type: "p", content: "En piezas con buen posicionamiento, el cobot mantiene velocidad, distancia y ángulo de antorcha mucho más estables que una operación manual. Eso reduce cordones fuera de especificación, salpicadura excesiva y retrabajo antes de pintura o armado." },
    { type: "h2", content: "Dónde se cae el ROI" },
    { type: "ul", content: [
      "Piezas sin repetición o con cambios constantes.",
      "Útiles de posicionamiento débiles o improvisados.",
      "Falta de responsable interno para programación y mantenimiento básico.",
      "Subestimar el espacio de trabajo y el flujo de material.",
    ] },
    { type: "h2", content: "Resultado esperable" },
    { type: "p", content: "En talleres ordenados, con piezas repetidas y buena preparación, el retorno suele venir por mayor producción por turno y menor dependencia de horas extra. En talleres desordenados, el cobot termina mostrando los problemas que ya existían: falta de método, mala fijación y datos de producción incompletos." },
  ],
  related: [
    { title: "Checklist de ROI para Soldadura con Cobot", slug: "cobot-welding-roi-checklist", imageId: "/images/blog-cobot-roi.webp", category: "Guía de Compra" },
    { title: "Soldadura Láser vs. TIG", slug: "laser-welding-vs-tig-welding-comparison", imageId: "/images/blog-laser-vs-tig.webp", category: "Guía Técnica" },
  ],
};

const PRESS_BRAKE_SIGNS_ES_CL: BlogPost = {
  title: "5 Señales de que la Plegadora es el Cuello de Botella del Taller",
  excerpt: "Piezas acumuladas, cambios lentos, retrabajo y horas extra: señales concretas de que el plegado está frenando la producción.",
  category: "Guía Técnica",
  date: "3 de abril de 2026",
  readTime: "6 min de lectura",
  imageId: "/images/blog-press-brake-tonnage.webp",
  author: "Equipo Técnico VT Maquinarias",
  body: [
    { type: "p", content: "En muchas maestranzas el láser corta rápido, pero las piezas quedan esperando frente a la plegadora. Cuando eso pasa, el problema no está en ventas ni en corte: está en la capacidad real de plegado, en los cambios de herramienta o en la falta de programación CNC." },
    { type: "h2", content: "1. Se acumulan piezas cortadas" },
    { type: "p", content: "Si al final del turno hay carros completos esperando pliegue, la plegadora no está siguiendo el ritmo de corte. Puede faltar tonelaje, largo útil, herramientas o simplemente método de preparación." },
    { type: "h2", content: "2. Cada cambio de trabajo toma demasiado" },
    { type: "p", content: "Una plegadora CNC moderna, con programas guardados y herramientas adecuadas, no debería perder una hora completa en cada preparación repetitiva. Si eso ocurre, está pagando capacidad improductiva todos los días." },
    { type: "h2", content: "3. La calidad depende demasiado del operador" },
    { type: "p", content: "Cuando una pieza sale bien con un operador y mal con otro, normalmente falta control CNC, compensación de coronado, topes confiables o un proceso estándar. La máquina debe ayudar a repetir, no obligar a adivinar." },
    { type: "h2", content: "4. Está rechazando trabajos complejos" },
    { type: "p", content: "Si evita cotizar piezas con varias pestañas, pliegues cerrados o tolerancias exigentes, está dejando plata afuera. Una plegadora bien configurada abre trabajos de mayor margen." },
    { type: "h2", content: "Qué hacer" },
    { type: "p", content: "Mida durante dos semanas: tiempo de preparación, tiempo efectivo de plegado, piezas rechazadas y horas extra. Con esos datos se define si necesita una máquina nueva, más tonelaje, mejor herramental o simplemente ordenar el proceso." },
  ],
  related: [
    { title: "Tonelaje de Plegadora CNC", slug: "press-brake-tonnage-calculator", imageId: "/images/blog-press-brake-tonnage.webp", category: "Guía Técnica" },
    { title: "Láser de Fibra vs. CO₂", slug: "fiber-laser-vs-co2-laser-cutting", imageId: "/images/blog-fiber-vs-co2.webp", category: "Guía de Compra" },
  ],
};

const PRESS_BRAKE_TONNAGE_ES_CL: BlogPost = {
  title: "Tonelaje de Plegadora CNC: Cómo Dimensionar Sin Comprar de Más",
  excerpt: "Espesor, largo de plegado, apertura de matriz, tipo de acero y margen de seguridad: los criterios que una maestranza debe revisar antes de cotizar una plegadora.",
  category: "Guía Técnica",
  date: "26 de febrero de 2026",
  readTime: "7 min de lectura",
  imageId: "/images/blog-press-brake-tonnage.webp",
  author: "Equipo Técnico VT Maquinarias",
  body: [
    { type: "p", content: "Comprar una plegadora solo por tonelaje es una mala forma de invertir. Una máquina sobredimensionada inmoviliza capital; una chica queda corta en los trabajos rentables. El cálculo correcto parte por las piezas reales que su taller fabrica." },
    { type: "h2", content: "Variables que mandan" },
    { type: "ul", content: [
      "Espesor y tipo de material: acero carbono, inoxidable o aluminio no se comportan igual.",
      "Largo efectivo del pliegue: no es lo mismo plegar 500 mm que 3 metros.",
      "Apertura de matriz V: mientras menor la V, mayor tonelaje requerido.",
      "Radio interior y calidad esperada del pliegue.",
      "Margen para trabajos futuros, sin comprar capacidad que nunca usará.",
    ] },
    { type: "h2", content: "Cuidado con la mezcla de trabajos" },
    { type: "p", content: "Una maestranza que trabaja inoxidable fino necesita precisión, repetibilidad y buen herramental. Un taller estructural que pliega plancha gruesa necesita tonelaje, garganta, largo útil y una estructura robusta. La misma tonelada nominal puede servir muy distinto según la aplicación." },
    { type: "h2", content: "No olvide el herramental" },
    { type: "p", content: "La mejor plegadora se desperdicia con punzones y matrices incorrectos. Antes de cerrar la compra, revise qué herramientas necesitará para sus espesores, radios y series de producción. Muchas veces el cuello de botella no es la prensa, sino el herramental." },
    { type: "h2", content: "Conclusión" },
    { type: "p", content: "Dimensione desde sus piezas, no desde una ficha comercial. Tonelaje, largo, control, tope trasero y herramientas deben calzar con su producción real y con los trabajos que quiere salir a buscar." },
  ],
  related: [
    { title: "5 Señales de Cuello de Botella en Plegado", slug: "press-brake-throughput-signs", imageId: "/images/blog-press-brake-tonnage.webp", category: "Guía Técnica" },
    { title: "Láser de Fibra vs. CO₂", slug: "fiber-laser-vs-co2-laser-cutting", imageId: "/images/blog-fiber-vs-co2.webp", category: "Guía de Compra" },
  ],
};

const LASER_CLEANING_ES_CL: BlogPost = {
  title: "Limpieza Láser vs. Arenado: Costos, Residuos y Terminación",
  excerpt: "Abrasivo, disposición de residuos, preparación de superficie, seguridad del operador y costo operativo en trabajos reales de acero oxidado.",
  category: "Guía Técnica",
  date: "12 de febrero de 2026",
  readTime: "7 min de lectura",
  imageId: "/images/blog-laser-cleaning-compariso.webp",
  author: "Equipo Técnico VT Maquinarias",
  body: [
    { type: "p", content: "El arenado y el granallado siguen siendo útiles, pero no siempre son la opción más limpia ni la más barata en operación. La limpieza láser gana terreno en talleres que necesitan remover óxido, pintura o cascarilla sin llenar la planta de abrasivo y residuos." },
    { type: "h2", content: "Qué cambia con el láser" },
    { type: "p", content: "El láser actúa sobre la contaminación superficial y deja el metal base prácticamente intacto. No golpea la pieza, no consume arena y reduce el trabajo posterior de limpieza. Para preparación antes de soldar o limpiar zonas puntuales, esa precisión vale mucho." },
    { type: "h2", content: "Dónde sigue ganando el arenado" },
    { type: "p", content: "Si necesita generar perfil de anclaje para pintura en grandes superficies estructurales, el arenado sigue siendo competitivo. También puede ser mejor cuando la terminación rugosa es parte de la especificación." },
    { type: "h2", content: "Compare el costo completo" },
    { type: "ul", content: [
      "Compra y reposición de abrasivo.",
      "Retiro y disposición de residuos.",
      "EPP, cabina, ventilación y limpieza de planta.",
      "Daño o cambio dimensional en piezas delicadas.",
      "Tiempo real de preparación y post-limpieza.",
    ] },
    { type: "h2", content: "Conclusión" },
    { type: "p", content: "Para limpieza localizada, preparación de soldadura, moldes, piezas de inoxidable o trabajos donde la contaminación secundaria es un problema, la limpieza láser puede bajar costos y mejorar el orden de planta. Para gran superficie con perfil de pintura, el arenado aún tiene espacio." },
  ],
  related: [
    { title: "Soldadura Láser vs. TIG", slug: "laser-welding-vs-tig-welding-comparison", imageId: "/images/blog-laser-vs-tig.webp", category: "Guía Técnica" },
    { title: "Láser de Fibra vs. CO₂", slug: "fiber-laser-vs-co2-laser-cutting", imageId: "/images/blog-fiber-vs-co2.webp", category: "Guía de Compra" },
  ],
};

const LASER_WELDING_ES_CL: BlogPost = {
  title: "Soldadura Láser vs. TIG: Dónde Gana Cada Proceso en Taller",
  excerpt: "Velocidad, deformación, terminación del cordón, capacitación del operador y cuándo sigue siendo mejor mantener TIG para trabajos especiales.",
  category: "Guía Técnica",
  date: "15 de enero de 2026",
  readTime: "9 min de lectura",
  imageId: "/images/blog-laser-vs-tig.webp",
  author: "Equipo Técnico VT Maquinarias",
  body: [
    { type: "p", content: "El TIG no desaparece: sigue siendo clave para trabajos especiales, raíz, reparaciones y materiales complejos. Pero en producción repetitiva de acero carbono, inoxidable o aluminio delgado, la soldadura láser portátil puede cambiar completamente el rendimiento del taller." },
    { type: "h2", content: "Velocidad y deformación" },
    { type: "p", content: "La soldadura láser concentra el calor y avanza mucho más rápido. En piezas delgadas, eso significa menos alabeo, menos enderezado y menos trabajo de terminación. Para muebles de inoxidable, gabinetes, ductos, perfiles livianos y piezas visibles, la diferencia se nota." },
    { type: "h2", content: "Terminación del cordón" },
    { type: "p", content: "Un cordón láser bien aplicado queda angosto y parejo. En muchos casos reduce esmerilado, pulido y retrabajo antes de pintura o terminación sanitaria. El TIG puede lograr excelente calidad, pero depende más del oficio del soldador y del tiempo disponible." },
    { type: "h2", content: "Capacitación" },
    { type: "p", content: "Formar un soldador TIG toma tiempo. Un operador puede aprender a usar una soldadora láser portátil mucho más rápido, especialmente en aplicaciones repetitivas. Eso ayuda cuando el taller tiene demanda pero le cuesta encontrar mano de obra calificada." },
    { type: "h2", content: "Cuándo mantener TIG" },
    { type: "ul", content: [
      "Tubería crítica y pasadas de raíz.",
      "Placa muy gruesa o juntas con mala preparación.",
      "Aleaciones especiales o trabajos de reparación inciertos.",
      "Piezas donde el procedimiento exige TIG por norma o cliente.",
    ] },
    { type: "h2", content: "Conclusión" },
    { type: "p", content: "La soldadura láser no reemplaza todo el TIG; lo complementa. La decisión correcta para una maestranza es usar láser donde hay producción, velocidad y terminación repetitiva, y reservar TIG para trabajos de mayor especialidad." },
  ],
  related: [
    { title: "Limpieza Láser vs. Arenado", slug: "laser-cleaning-vs-sandblasting", imageId: "/images/blog-laser-cleaning-compariso.webp", category: "Guía Técnica" },
    { title: "ROI de Soldadura con Cobots", slug: "cobot-welding-roi-real-numbers", imageId: "/images/blog-cobot-roi.webp", category: "Caso de Estudio" },
  ],
};

const POSTS_ES_CL: typeof POSTS = {
  ...POSTS,
  "cobot-welding-roi-checklist": COBOT_CHECKLIST_ES_CL,
  "press-brake-throughput-signs": PRESS_BRAKE_SIGNS_ES_CL,
  "fiber-laser-vs-co2-2026": FIBER_VS_CO2_ES_CL,
  "fiber-laser-vs-co2-laser-cutting": FIBER_VS_CO2_ES_CL,
  "cobot-welding-roi-real-numbers": COBOT_ROI_ES_CL,
  "press-brake-tonnage-calculator": PRESS_BRAKE_TONNAGE_ES_CL,
  "laser-cleaning-vs-sandblasting": LASER_CLEANING_ES_CL,
  "laser-welding-vs-tig-welding-comparison": LASER_WELDING_ES_CL,
};

// Fallback for slugs not in our static data
const DEFAULT_POST = {
  title: "Artículo No Encontrado",
  excerpt: "Esta guía técnica todavía no está disponible.",
  category: "General",
  date: "",
  readTime: "",
  imageId: "/images/blog-fiber-vs-co2.webp",
  author: "VT Maquinarias",
  body: [{ type: "p" as const, content: "Esta guía aún no ha sido publicada. Vuelva pronto o revise el resto de nuestro contenido técnico para talleres y maestranzas." }],
  related: [],
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS_ES_CL[slug] ?? DEFAULT_POST;
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Blog VT Maquinarias`,
      description: post.excerpt,
      images: [{ url: `https://images.unsplash.com/photo-${post.imageId}?w=1200&q=80` }],
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug } = await params;
  const post = POSTS_ES_CL[slug] ?? DEFAULT_POST;

  return (
    <>
      {/* Hero */}
      <section className="bg-vtm-dark pt-32 pb-0 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="inline-flex min-h-11 items-center text-white/40 text-sm hover:text-white/70 transition-colors">
              ← Blog
            </Link>
            <span className="text-white/20">/</span>
            <Tag>{post.category}</Tag>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-4xl mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/40 text-sm mb-10">
            <span className="whitespace-nowrap">{post.author}</span>
            <span aria-hidden="true">·</span>
            <span className="whitespace-nowrap">{post.date}</span>
            <span aria-hidden="true">·</span>
            <span className="whitespace-nowrap">{post.readTime}</span>
          </div>
        </div>
        <div className="relative aspect-[21/9] max-h-[500px] overflow-hidden">
          <Image
            src={post.imageId.startsWith("/") ? post.imageId : `https://images.unsplash.com/photo-${post.imageId}?w=1600&q=80&fit=crop`}
            alt={post.title}
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_320px] gap-16">
            {/* Main content */}
            <article className="prose prose-lg max-w-none">
              {post.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="font-headline text-2xl md:text-3xl font-bold text-vtm-dark mt-10 mb-4">
                      {block.content as string}
                    </h2>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="space-y-3 my-6">
                      {(block.content as string[]).map((item, j) => (
                        <li key={j} className="flex gap-3 text-vtm-gray-mid">
                          <span className="text-vtm-red mt-1 flex-shrink-0">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-vtm-gray-mid leading-relaxed mb-4">
                    {block.content as string}
                  </p>
                );
              })}

              {/* Article CTA */}
              <div className="mt-12 border-t border-vtm-gray-border pt-12">
                <SectionLabel className="mb-4">¿Listo para Conversar sobre Su Proyecto?</SectionLabel>
                <h3 className="font-headline text-2xl font-bold text-vtm-dark mb-4">
                  Hable con un especialista en máquinas de VT Maquinarias
                </h3>
                <p className="text-vtm-gray-mid mb-6">
                  Sin guion de ventas — solo una conversación directa sobre su taller, sus piezas y la máquina correcta para su trabajo.
                </p>
                <div className="flex gap-4 flex-col sm:flex-row">
                  <Button href="/quote" variant="primary">Solicitar Cotización</Button>
                  <Button href="/contact" variant="outline">Contáctenos</Button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Related products */}
              <div className="bg-vtm-gray-light p-6">
                <SectionLabel className="mb-4">Máquinas Relacionadas</SectionLabel>
                <div className="space-y-4">
                  <Link href="/fabrication/fiber-laser-cutting-machine" className="group flex gap-4 items-start">
                    <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden bg-vtm-gray-border">
                      <Image
                        src="/images/fiber-laser-hero.webp"
                        alt="Láser de Fibra"
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-vtm-dark text-sm group-hover:text-vtm-red transition-colors">Cortadora Láser de Plancha</p>
                      <p className="text-vtm-gray-mid text-xs mt-1">3–20 kW · precisión ±0.05mm</p>
                    </div>
                  </Link>
                  <Link href="/automation/collaborative-welding-arm" className="group flex gap-4 items-start">
                    <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden bg-vtm-gray-border">
                      <Image
                        src="/images/cobot-welding-hero-2.webp"
                        alt="Cobot"
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-vtm-dark text-sm group-hover:text-vtm-red transition-colors">Brazo Soldador Colaborativo</p>
                      <p className="text-vtm-gray-mid text-xs mt-1">Implementación en 6 semanas · Sin jaula</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Related articles */}
              {post.related.length > 0 && (
                <div>
                  <SectionLabel className="mb-4">Artículos Relacionados</SectionLabel>
                  <div className="space-y-4">
                    {post.related.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group flex gap-4 items-start"
                      >
                        <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden bg-vtm-gray-light border border-vtm-gray-border">
                          <Image
                            src={related.imageId.startsWith("/") ? related.imageId : `https://images.unsplash.com/photo-${related.imageId}?w=120&q=80&fit=crop`}
                            alt={related.title}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <Tag className="mb-1">{related.category}</Tag>
                          <p className="font-semibold text-vtm-dark text-sm mt-1 group-hover:text-vtm-red transition-colors leading-snug">
                            {related.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quote CTA sidebar */}
              <div className="bg-vtm-dark p-6">
                <h3 className="font-headline font-bold text-white mb-3">Solicitar Cotización</h3>
                <p className="text-white/50 text-sm mb-4">Obtenga precios, plazos de entrega y asesoría experta de un especialista en máquinas de VT Maquinarias.</p>
                <Button href="/quote" variant="primary" className="w-full text-center justify-center">
                  Obtener Cotización
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: { "@type": "Organization", name: "VT Maquinarias" },
            publisher: { "@type": "Organization", name: "VT Maquinarias" },
            datePublished: post.date,
            image: `https://images.unsplash.com/photo-${post.imageId}?w=1200&q=80`,
          }),
        }}
      />
    </>
  );
}
