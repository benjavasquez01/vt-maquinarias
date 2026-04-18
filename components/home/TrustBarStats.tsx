"use client";
import { CountUp } from "@/components/ui/CountUp";

export function TrustBarStats() {
  return (
    <section className="bg-white border-b border-vtm-gray-border">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="text-center">
            <p className="font-headline text-5xl font-bold text-vtm-dark">
              <CountUp target={15} suffix="+" />
            </p>
            <p className="text-vtm-gray-mid text-sm mt-1 font-body">Years of Industry Experience</p>
          </div>
          <div className="text-center">
            <p className="font-headline text-5xl font-bold text-vtm-dark">
              <CountUp target={1000} suffix="+" />
            </p>
            <p className="text-vtm-gray-mid text-sm mt-1 font-body">Machines Installed</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 border border-vtm-gray-border px-4 py-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#CB1C1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-headline font-semibold text-vtm-dark text-sm">ISO 9001 Certified</p>
            </div>
            <p className="text-vtm-gray-mid text-xs mt-2 font-body">Equipment Quality Management</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 border border-vtm-gray-border px-4 py-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#CB1C1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-headline font-semibold text-vtm-dark text-sm">CE Certified</p>
            </div>
            <p className="text-vtm-gray-mid text-xs mt-2 font-body">European Safety Compliance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
