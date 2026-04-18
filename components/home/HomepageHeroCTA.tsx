"use client";
import { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useAgent } from "@/components/ai/AgentProvider";
import { Button } from "@/components/ui/Button";

export function HomepageHeroCTA() {
  const t = useTranslations("home.hero");
  const { openAgent } = useAgent();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.style.opacity = "1";
      return;
    }
    (async () => {
      const { gsap } = await import("gsap");
      gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 1.0 });
    })();
  }, []);

  return (
    <div ref={ref} style={{ opacity: 0 }} className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button href="#products" variant="primary" size="lg">
        {t("cta1")}
      </Button>
      <Button
        onClick={() => openAgent("quote")}
        variant="outline"
        size="lg"
        className="border-white/40 text-white hover:bg-white/10 hover:border-white/70"
      >
        {t("cta2")}
      </Button>
    </div>
  );
}
