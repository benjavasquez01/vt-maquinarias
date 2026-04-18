// Centralized GSAP registration — import this module once in client components that use GSAP
// Tree-shaking note: only imported plugins are bundled

let registered = false;

export async function registerGSAP() {
  if (registered || typeof window === "undefined") return;
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  // Global defaults
  gsap.defaults({ ease: "power2.out", duration: 0.7 });

  // Refresh ScrollTrigger on route changes
  ScrollTrigger.config({ limitCallbacks: true });

  registered = true;
}

export { gsap } from "gsap";
