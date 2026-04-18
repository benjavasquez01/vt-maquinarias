"use client";
import { useRef, useEffect } from "react";

interface ComparisonRow {
  feature: string;
  left: string;
  right: string;
}

interface AnimatedComparisonTableProps {
  rows: ComparisonRow[];
  leftLabel: string;
  rightLabel: string;
  leftLabelClass?: string;
  rightLabelClass?: string;
  headerClass?: string;
}

/**
 * Comparison table where rows animate in one by one on scroll enter.
 * Used on automation pages (cobot vs industrial arm).
 */
export function AnimatedComparisonTable({
  rows,
  leftLabel,
  rightLabel,
  leftLabelClass = "text-vtm-red",
  rightLabelClass = "text-white/60",
  headerClass = "bg-vtm-dark",
}: AnimatedComparisonTableProps) {
  const tbodyRef = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    const tbody = tbodyRef.current;
    if (!tbody || typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const tableRows = tbody.querySelectorAll("tr");
      gsap.fromTo(
        tableRows,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tbody,
            start: "top 85%",
            once: true,
          },
        }
      );
    })();
  }, []);

  return (
    <div className="border border-vtm-gray-border overflow-hidden max-w-4xl">
      <table className="w-full text-sm">
        <thead>
          <tr className={`border-b border-vtm-gray-border ${headerClass}`}>
            <th className="text-left px-4 py-3 text-xs font-semibold tracking-wider uppercase text-white/60">
              Feature
            </th>
            <th className={`text-left px-4 py-3 text-xs font-semibold tracking-wider uppercase ${leftLabelClass}`}>
              {leftLabel}
            </th>
            <th className={`text-left px-4 py-3 text-xs font-semibold tracking-wider uppercase ${rightLabelClass}`}>
              {rightLabel}
            </th>
          </tr>
        </thead>
        <tbody ref={tbodyRef}>
          {rows.map((row, i) => (
            <tr
              key={row.feature}
              className={`border-b border-vtm-gray-border last:border-0 ${
                i % 2 === 1 ? "bg-vtm-gray-light/50" : "bg-white"
              }`}
            >
              <td className="px-4 py-3 text-vtm-gray-mid">{row.feature}</td>
              <td className="px-4 py-3 font-semibold text-vtm-dark">{row.left}</td>
              <td className="px-4 py-3 text-vtm-gray-mid">{row.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
