"use client";

import { Button } from "@/components/ui/Button";

export interface ProductMode {
  id: string;
  name: string;
  badge: string;
  image: string;
  description: string;
  bestFor: string[];
}

interface Props {
  modes: ProductMode[];
  slug: string;
  sectionLabel: string;
  headline: string;
  quoteLabel: string;
  viewSpecsLabel: string;
  bestForLabel: string;
}

export function ProductModesBrowser({
  modes,
  slug,
  sectionLabel,
  headline,
  quoteLabel,
  viewSpecsLabel,
  bestForLabel,
}: Props) {
  const first = modes[0];
  if (!first) return null;

  return (
    <section className="bg-white py-20 md:py-28" id="modes">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-vtm-red mb-4">
          {sectionLabel}
        </p>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-vtm-dark tracking-tight mb-12">
          {headline}
        </h2>

        <div className="border-t border-vtm-gray-border pt-8 grid md:grid-cols-2 gap-8 items-start">
          {/* Static image */}
          <div className="bg-vtm-gray-light overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={first.image}
              alt={first.name}
              className="w-full h-auto block"
            />
          </div>

          {/* Info panel */}
          <div>
            <div className="mb-6">
              <p className="font-headline text-2xl font-bold text-vtm-dark mb-0.5">
                {first.name}
              </p>
              <p className="text-vtm-gray-mid text-sm mb-4 leading-relaxed">
                {first.description}
              </p>
              <div className="flex gap-3 flex-wrap">
                <Button href={`/quote?machine=${slug}-${first.id}`} variant="primary" size="sm">
                  {quoteLabel}
                </Button>
                <Button href="#specs" variant="outline" size="sm">
                  {viewSpecsLabel}
                </Button>
              </div>
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-vtm-gray-mid mb-3">
              {bestForLabel}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {first.bestFor.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-vtm-dark">
                  <span className="text-vtm-red mt-0.5 flex-shrink-0" aria-hidden="true">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
