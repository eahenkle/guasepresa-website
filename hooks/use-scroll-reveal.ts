"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mirrors script.js's .js-reveal behavior: reveals once on first
 * intersection, plus a 1200ms post-load safety net in case the observer
 * never fires (fast programmatic scrolling, odd viewports, browser quirks).
 * Falls back to immediately-visible when IntersectionObserver is unsupported.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      // Deferred one microtask so this isn't a synchronous setState-in-effect;
      // imperceptible delay, same behavior as the IO/setTimeout callbacks below.
      queueMicrotask(() => setIsVisible(true));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);

    const safetyNet = window.setTimeout(() => setIsVisible(true), 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(safetyNet);
    };
  }, []);

  return { ref, isVisible };
}
