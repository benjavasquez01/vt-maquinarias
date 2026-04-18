"use client";
import { useState, useRef, useEffect } from "react";

export interface Spec { label: string; imperial: string; metric: string; }
/** Alias for backward compatibility */
export type SpecRow = Spec;
type Unit = "imperial" | "metric";

export function GenericSpecsTable({ specs }: { specs: Spec[] }) {
  const [unit, setUnit] = useState<Unit>("imperial");
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

      const rows = tbody.querySelectorAll("tr");
      gsap.fromTo(
        rows,
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.04,
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
    <div>
      <div className="flex gap-1 mb-6 border border-vtm-gray-border p-1 w-fit">
        {(["imperial", "metric"] as Unit[]).map((u) => (
          <button
            key={u}
            onClick={() => setUnit(u)}
            className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors ${
              unit === u ? "bg-vtm-dark text-white" : "text-vtm-gray-mid hover:text-vtm-dark"
            }`}
          >
            {u}
          </button>
        ))}
      </div>
      <div className="border border-vtm-gray-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-vtm-gray-light border-b border-vtm-gray-border">
              <th className="text-left px-4 py-3 font-semibold text-vtm-dark text-xs tracking-wider uppercase">
                Specification
              </th>
              <th className="text-left px-4 py-3 font-semibold text-vtm-dark text-xs tracking-wider uppercase">
                Value
              </th>
            </tr>
          </thead>
          <tbody ref={tbodyRef}>
            {specs.map((s, i) => (
              <tr
                key={s.label}
                className={`border-b border-vtm-gray-border last:border-0 ${
                  i % 2 === 0 ? "bg-white" : "bg-vtm-gray-light/40"
                }`}
              >
                <td className="px-4 py-3 text-vtm-gray-mid font-medium">{s.label}</td>
                <td className="px-4 py-3 text-vtm-dark font-medium">
                  {unit === "imperial" ? s.imperial : s.metric}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
