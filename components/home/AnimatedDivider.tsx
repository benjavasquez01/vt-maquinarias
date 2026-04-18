"use client";
import { useEffect, useRef } from "react";

export function AnimatedDivider() {
  const pathRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const el = pathRef.current;
    if (!el || typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const length = el.getTotalLength?.() ?? 800;
      gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });

      if (prefersReduced) {
        gsap.set(el, { strokeDashoffset: 0 });
        return;
      }

      gsap.to(el, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });
    })();
  }, []);

  return (
    <div className="hidden lg:flex w-px flex-shrink-0 relative overflow-visible">
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 1 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          ref={pathRef}
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="800"
          stroke="#CB1C1D"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
