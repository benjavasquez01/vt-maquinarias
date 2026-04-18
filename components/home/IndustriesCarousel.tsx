"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Link } from "@/lib/navigation";

const industries = [
  {
    name: "Metal Fabrication",
    slug: "metal-fabrication",
    description:
      "From job shops to contract manufacturers — laser cutting, press brakes, and welding automation that scale with your workload.",
    image: "/images/solution-metal-fabrication.png",
  },
  {
    name: "Automotive",
    slug: "automotive",
    description:
      "High-repeatability stamping supports, precision laser cutting of brackets and structural components, and cobot welding for high-volume production lines.",
    image: "/images/solution-automotive.png",
  },
  {
    name: "Aerospace",
    slug: "aerospace",
    description:
      "Tight-tolerance fabrication for aerospace-grade aluminum, titanium, and stainless steel. Our machines meet the precision demands of the industry.",
    image: "/images/solution-aerospace.png",
  },
  {
    name: "HVAC & Construction",
    slug: "hvac-construction",
    description:
      "Sheet metal ductwork, structural components, and framing fabricated faster and more accurately with our laser and press brake solutions.",
    image: "/images/solution-hvac-construction.png",
  },
];

export function IndustriesCarousel() {
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
        {industries.map((industry, i) => (
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
                Learn More
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
          onClick={() => scrollTo(Math.min(industries.length - 1, activeIndex + 1))}
          disabled={activeIndex === industries.length - 1}
          className="w-10 h-10 border border-vtm-gray-border flex items-center justify-center hover:border-vtm-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next industry"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 4l4 4-4 4" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="flex gap-2 ml-2">
          {industries.map((_, i) => (
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
  );
}
