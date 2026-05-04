"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface FeatureBlock {
  label: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

interface PinnedFeatureSectionProps {
  blocks: FeatureBlock[];
}

function FeatureRow({ block, index }: { block: FeatureBlock; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "";
      return;
    }

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    })();
  }, []);

  const isReverse = block.reverse ?? index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-0 min-h-[520px] ${isReverse ? "" : ""}`}
    >
      {/* Image side */}
      <div className={`relative min-h-[300px] lg:min-h-[520px] ${isReverse ? "lg:order-2" : ""}`}>
        <Image
          src={block.image.startsWith("/") ? block.image : `https://images.unsplash.com/photo-${block.image}?w=1200&q=80&fit=crop`}
          alt={block.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Text side */}
      <div className={`flex items-center bg-vtm-dark px-8 py-16 lg:px-14 xl:px-20 ${isReverse ? "lg:order-1" : ""}`}>
        <div>
          <SectionLabel light className="mb-4">{block.label}</SectionLabel>
          <h2 className="font-headline text-3xl xl:text-4xl font-bold text-white mb-6 leading-tight">
            {block.title}
          </h2>
          <p className="text-white/60 leading-relaxed text-lg max-w-md">
            {block.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export function PinnedFeatureSection({ blocks }: PinnedFeatureSectionProps) {
  return (
    <div className="bg-vtm-dark">
      {blocks.map((block, i) => (
        <FeatureRow key={block.title} block={block} index={i} />
      ))}
    </div>
  );
}
