"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mirrors script.js's .counter[data-count-to] behavior: counts up from 0 to
 * `target` once the element scrolls into view, easing over 1200ms. Skipped
 * entirely under prefers-reduced-motion, where `finalText` renders immediately.
 */
export function useCountUp<T extends HTMLElement>(target: number, finalText: string, prefix = "") {
  const ref = useRef<T | null>(null);
  const [text, setText] = useState(finalText);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window) || !isFinite(target)) {
      // Deferred one microtask so this isn't a synchronous setState-in-effect;
      // imperceptible delay, same behavior as the IO callback's setText below.
      queueMicrotask(() => setText(finalText));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);

          const duration = 1200;
          let start: number | null = null;

          function step(ts: number) {
            if (start === null) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(target * eased);
            setText(prefix + value.toLocaleString("es-GT"));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setText(finalText);
            }
          }
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);

    return () => io.disconnect();
  }, [target, finalText, prefix]);

  return { ref, text };
}
