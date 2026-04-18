"use client";
import { Button } from "@/components/ui/Button";
import { useAgent } from "@/components/ai/AgentProvider";

interface ProductHeroCTAProps {
  slug: string;
  ctaLabel?: string;
  align?: "left" | "right";
}

export function ProductHeroCTA({ ctaLabel = "Request a Quote", align = "left" }: ProductHeroCTAProps) {
  const { openAgent } = useAgent();
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${align === "right" ? "justify-end" : ""}`}>
      <Button onClick={() => openAgent("quote")} variant="primary" size="lg">
        {ctaLabel}
      </Button>
      <Button
        href="#specs"
        variant="outline"
        size="lg"
        className="border-white/30 text-white hover:bg-white/10 hover:border-white/60"
      >
        View Specifications
      </Button>
    </div>
  );
}
