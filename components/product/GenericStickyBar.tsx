"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useAgent } from "@/components/ai/AgentProvider";

interface GenericStickyBarProps {
  productName: string;
  slug: string;
  ctaText?: string;
}

export function GenericStickyBar({ productName, ctaText = "Get a Quote" }: GenericStickyBarProps) {
  const [visible, setVisible] = useState(false);
  const { openAgent } = useAgent();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-vtm-gray-border px-4 py-3 flex items-center justify-between gap-4 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <p className="text-sm font-semibold text-vtm-dark leading-tight">{productName}</p>
      <Button
        onClick={() => openAgent("quote")}
        variant="primary"
        size="sm"
        className="whitespace-nowrap"
      >
        {ctaText}
      </Button>
    </div>
  );
}
