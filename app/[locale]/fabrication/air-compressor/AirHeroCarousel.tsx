"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = [
  { src: "/images/vtm-air-1.webp", alt: "Compresor de tornillo integrado VTM-AIR" },
  { src: "/images/vtm-air-2.webp", alt: "Estación de aire VTM-AIR montada en patín con doble acumulador" },
];

export function AirHeroCarousel() {
  const [active, setActive] = useState(0);
  // Bump this to reset the autoplay timer after a manual interaction.
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % IMAGES.length), 2000);
    return () => clearInterval(id);
  }, [tick]);

  const go = (i: number) => {
    setActive(((i % IMAGES.length) + IMAGES.length) % IMAGES.length);
    setTick((t) => t + 1);
  };

  return (
    <div className="relative w-full aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-2xl group">
      {IMAGES.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          priority={i === 0}
          className="object-contain p-6 transition-opacity duration-500"
          style={{ opacity: i === active ? 1 : 0 }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ))}

      {/* Manual arrows */}
      <button
        onClick={() => go(active - 1)}
        aria-label="Imagen anterior"
        className="absolute top-1/2 left-3 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-vtm-dark shadow flex items-center justify-center transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={() => go(active + 1)}
        aria-label="Imagen siguiente"
        className="absolute top-1/2 right-3 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-vtm-dark shadow flex items-center justify-center transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Manual dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Ver imagen ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === active ? "bg-vtm-red" : "bg-vtm-gray-border hover:bg-vtm-gray-mid"}`}
          />
        ))}
      </div>
    </div>
  );
}
