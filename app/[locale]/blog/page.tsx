import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/lib/navigation";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { NewsletterForm } from "@/components/blog/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog — Conocimiento sobre Fabricación Metálica y Automatización",
  description:
    "Artículos técnicos, guías de compra e información del sector para talleres de fabricación metálica en Chile. Láser de fibra, plegadora CNC, soldadura con cobots y más.",
};

const POSTS = [
  {
    slug: "fiber-laser-vs-co2-laser-cutting",
    title: "Láser de Fibra vs. Láser CO₂: ¿Cuál Conviene a Su Taller en 2026?",
    excerpt:
      "Eficiencia energética, velocidad de corte en chapa delgada y costo operativo — desglosamos cada diferencia relevante para que elija correctamente según su mezcla de materiales.",
    category: "Guía de Compra",
    date: "28 de marzo de 2026",
    readTime: "8 min de lectura",
    imageId: "/images/blog-fiber-vs-co2.webp",
  },
  {
    slug: "cobot-welding-roi-real-numbers",
    title: "ROI de Soldadura con Cobots: Números Reales de 3 Talleres",
    excerpt:
      "Medimos el período de recuperación, las tasas de rechazo por calidad y la retención de soldadores en tres talleres que implementaron brazos de soldadura colaborativos en los últimos 18 meses. Esto fue lo que realmente pasó.",
    category: "Caso de Estudio",
    date: "14 de marzo de 2026",
    readTime: "11 min de lectura",
    imageId: "/images/blog-cobot-roi.webp",
  },
  {
    slug: "press-brake-tonnage-calculator",
    title: "Cálculo de Tonelaje de Plegadora: Cómo Dimensionar Su Máquina Sin Adivinar",
    excerpt:
      "La fórmula, los factores de seguridad y las variables de material que importan. Además, una tabla de tonelaje descargable gratis para los 20 espesores más comunes de acero al carbono e inoxidable.",
    category: "Guía Técnica",
    date: "26 de febrero de 2026",
    readTime: "6 min de lectura",
    imageId: "/images/blog-press-brake-tonnage.webp",
  },
  {
    slug: "laser-cleaning-vs-sandblasting",
    title: "Limpieza Láser vs. Arenado: La Comparación Completa de Costos",
    excerpt:
      "Costo del abrasivo, disposición de residuos, daño superficial y tiempo de preparación. Realizamos ambos procesos lado a lado sobre el mismo lote de acero al carbono oxidado y documentamos cada variable.",
    category: "Guía Técnica",
    date: "12 de febrero de 2026",
    readTime: "7 min de lectura",
    imageId: "/images/blog-laser-cleaning-compariso.webp",
  },
  {
    slug: "laser-welding-vs-tig-welding-comparison",
    title: "Soldadura Láser vs. Soldadura TIG: Cuándo Cambiar y Cuándo Quedarse",
    excerpt:
      "Velocidad, apariencia del cordón, distorsión por calor y rango de aplicación. El TIG no va a desaparecer — pero para ciertos trabajos, la soldadura láser es dramáticamente mejor. Explicamos exactamente cuáles.",
    category: "Guía Técnica",
    date: "15 de enero de 2026",
    readTime: "9 min de lectura",
    imageId: "/images/blog-laser-vs-tig.webp",
  },
];

const CATEGORIES = ["Todos", "Guía de Compra", "Guía Técnica", "Caso de Estudio", "Noticias del Sector"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-vtm-dark pt-32 pb-20 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-auto">
          <SectionLabel light className="mb-4">Conocimiento</SectionLabel>
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-white tracking-tight max-w-3xl">
            Conocimiento sobre fabricación metálica, sin el discurso de venta.
          </h1>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-vtm-gray-border sticky top-[72px] z-30">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex gap-1 overflow-x-auto py-4 no-scrollbar">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
                  i === 0
                    ? "bg-vtm-dark text-white"
                    : "text-vtm-gray-mid hover:text-vtm-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          {/* Featured post */}
          <Link
            href={`/blog/${POSTS[0].slug}`}
            className="group grid md:grid-cols-2 gap-8 mb-16 border-b border-vtm-gray-border pb-16"
          >
            <div className="relative aspect-[16/9] md:aspect-auto overflow-hidden bg-vtm-gray-light">
              <Image
                src={POSTS[0].imageId.startsWith("/") ? POSTS[0].imageId : `https://images.unsplash.com/photo-${POSTS[0].imageId}?w=900&q=80&fit=crop`}
                alt={POSTS[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Tag>{POSTS[0].category}</Tag>
                <span className="text-vtm-gray-mid text-xs">{POSTS[0].date}</span>
                <span className="text-vtm-gray-border">·</span>
                <span className="text-vtm-gray-mid text-xs">{POSTS[0].readTime}</span>
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-vtm-dark tracking-tight mb-4 group-hover:text-vtm-red transition-colors">
                {POSTS[0].title}
              </h2>
              <p className="text-vtm-gray-mid leading-relaxed mb-6">{POSTS[0].excerpt}</p>
              <span className="text-vtm-red text-sm font-semibold">Leer artículo →</span>
            </div>
          </Link>

          {/* Remaining posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-vtm-gray-border hover:border-vtm-dark transition-colors"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-vtm-gray-light">
                  <Image
                    src={post.imageId.startsWith("/") ? post.imageId : `https://images.unsplash.com/photo-${post.imageId}?w=600&q=80&fit=crop`}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Tag>{post.category}</Tag>
                    <span className="text-vtm-gray-mid text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="font-headline font-bold text-vtm-dark text-lg mb-3 leading-snug group-hover:text-vtm-red transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-vtm-gray-mid text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <p className="text-vtm-gray-mid text-xs mt-4">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-vtm-gray-light py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl">
            <SectionLabel className="mb-4">Manténgase al Día</SectionLabel>
            <h2 className="font-headline text-3xl font-bold text-vtm-dark tracking-tight mb-4">
              Nuevos artículos, cada dos semanas.
            </h2>
            <p className="text-vtm-gray-mid mb-6">
              Guías técnicas, comparaciones de máquinas y noticias del sector para fabricantes metálicos en Chile. Sin correos de venta — solo contenido útil.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
