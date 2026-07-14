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
    <div
      ref={ref}
      style={{ opacity: 0 }}
      className="flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4"
    >
      <Button href="#products" variant="primary" size="lg" className="justify-center text-center">
        {t("cta1")}
      </Button>
      <Button
        onClick={() => openAgent("quote")}
        variant="outline"
        size="lg"
        className="justify-center border-white/40 text-center text-white hover:bg-white/10 hover:border-white/70"
      >
        {t("cta2")}
      </Button>
    </div>
  );
}
