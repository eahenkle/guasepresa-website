"use client";

import { useEffect } from "react";

const CYCLE_PX = 900;

/**
 * Drives a global --shine-x CSS variable from scroll position, used by
 * .wm-dark/.wm-camo to sweep a gold holo-foil glint across the background
 * watermark as the page scrolls (Pokémon-card holo effect, scroll-linked
 * instead of pointer-tilt-linked since this is a page, not a card).
 */
export function useScrollShine() {
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    function apply() {
      const progress = ((window.scrollY % CYCLE_PX) / CYCLE_PX) * 100;
      document.documentElement.style.setProperty("--shine-x", `${progress}%`);
      ticking = false;
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    }

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
