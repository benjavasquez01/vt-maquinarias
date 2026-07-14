"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Link } from "@/lib/navigation";
import { useLocale } from "next-intl";

const industries = {
  en: [
    {
      name: "Metalworking Shops",
      slug: "metal-fabrication",
      description:
        "Laser cutting, CNC bending, welding, and cleaning for metalworking shops (maestranzas) running tight tolerances and high throughput.",
      image: "/images/solution-metal-fabrication.webp",
    },
    {
      name: "Mining",
      slug: "mineria",
      description:
        "Structures, wear parts, and components for large and mid-scale mining — cutting and bending high-strength plate with industrial repeatability.",
      image: "/images/solution-mineria.webp",
    },
    {
      name: "Foodservice Equipment",
      slug: "equipo-gastronomico",
      description:
        "Counters, hoods, and stainless-steel kitchen equipment — clean laser cutting and precise bending for foodservice equipment manufacturers.",
      image: "/images/solution-equipo-gastronomico.webp",
    },
    {
      name: "Construction & Steel Structures",
      slug: "hvac-construction",
      description:
        "Steel structures, profiles, ductwork, and construction components — high-throughput sheet and profile processing.",
      image: "/images/solution-hvac-construction.webp",
    },
  ],
  es: [
    {
      name: "Maestranzas",
      slug: "metal-fabrication",
      description:
        "Corte láser, plegado CNC, soldadura y limpieza para maestranzas y talleres metalmecánicos que trabajan con tolerancias ajustadas y alto rendimiento.",
      image: "/images/solution-metal-fabrication.webp",
    },
    {
      name: "Minería",
      slug: "mineria",
      description:
        "Estructuras, piezas de desgaste y componentes para la gran y mediana minería — corte y plegado de planchas de alta resistencia con repetibilidad industrial.",
      image: "/images/solution-mineria.webp",
    },
    {
      name: "Equipo Gastronómico",
      slug: "equipo-gastronomico",
      description:
        "Mesones, campanas, cocinas y equipamiento en acero inoxidable — corte láser limpio y plegado preciso para fabricantes de equipo gastronómico.",
      image: "/images/solution-equipo-gastronomico.webp",
    },
    {
      name: "Construcción y Estructuras",
      slug: "hvac-construction",
      description:
        "Estructuras metálicas, perfilería, ductos y componentes para la construcción — procesamiento de plancha y perfil de alto rendimiento.",
      image: "/images/solution-hvac-construction.webp",
    },
  ],
};

export function IndustriesCarousel() {
  const locale = useLocale();
  const items = locale === "es" ? industries.es : industries.en;
  const learnMoreLabel = locale === "es" ? "Saber Más" : "Learn More";

  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const stopDragging = useCallback(() => {
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
    }
  }, []);

  const scrollTo = useCallback((index: number) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.offsetWidth * 0.8;
    trackRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  return (
    <div>
      {/* Draggable track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto px-6 lg:px-10 pb-4 scrollbar-hide"
        style={{ cursor: "grab", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >
        {items.map((industry, i) => (
          <div
            key={industry.slug}
            className="flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[30vw] bg-vtm-dark border border-vtm-gray-border/20 flex flex-col"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 45vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-0 left-0 p-6 font-headline font-bold text-white text-xl">{industry.name}</h3>
            </div>
            <div className="p-6 flex flex-col flex-1 bg-vtm-dark">
              <p className="text-white/60 font-body text-sm leading-relaxed flex-1 mb-6">
                {industry.description}
              </p>
              <Link
                href={`/solutions/${industry.slug}`}
                className="text-vtm-red text-sm font-semibold hover:underline inline-flex items-center gap-1 group"
              >
                {learnMoreLabel}
                <svg className="group-hover:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation controls */}
      <div className="flex items-center gap-4 px-6 lg:px-10 mt-6">
        <div className="flex gap-4 md:hidden" aria-hidden="true">
          <span className="flex h-10 w-10 items-center justify-center border border-vtm-gray-border text-vtm-dark/50">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="flex h-10 w-10 items-center justify-center border border-vtm-gray-border text-vtm-dark/50">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="w-10 h-10 border border-vtm-gray-border flex items-center justify-center hover:border-vtm-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous industry"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => scrollTo(Math.min(items.length - 1, activeIndex + 1))}
            disabled={activeIndex === items.length - 1}
            className="w-10 h-10 border border-vtm-gray-border flex items-center justify-center hover:border-vtm-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next industry"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="ml-2 flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? "bg-vtm-red" : "bg-vtm-gray-border"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
