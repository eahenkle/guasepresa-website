"use client";

import { Suspense, useEffect, useState } from "react";
import { hasWebGPU } from "@/lib/webgpu-support";
import { HeroFuturistic } from "@/components/ui/hero-futuristic";
import { HeroCanvasBoundary } from "@/components/hero/hero-canvas-boundary";
import { RadarGraphic } from "@/components/hero/radar-graphic";

/**
 * Decides, client-side only, whether to mount the WebGPU hero or fall back
 * to the CSS radar graphic — required because the given hero-futuristic.tsx
 * code has no feature detection of its own, and WebGPU is unsupported in
 * Safari/Firefox without flags (see plan Fase 4).
 */
export function HeroCanvas() {
  const [mode, setMode] = useState<"checking" | "webgpu" | "fallback">("checking");

  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    // Deferred one microtask so this isn't a synchronous setState-in-effect;
    // imperceptible delay, first paint already shows the RadarGraphic fallback.
    queueMicrotask(() => setMode(hasWebGPU() && !reduceMotion ? "webgpu" : "fallback"));
  }, []);

  if (mode !== "webgpu") {
    return <RadarGraphic />;
  }

  return (
    <div className="hero-canvas-host">
      <HeroCanvasBoundary fallback={<RadarGraphic />}>
        <Suspense fallback={<RadarGraphic />}>
          <HeroFuturistic className="w-full h-full" />
        </Suspense>
      </HeroCanvasBoundary>
    </div>
  );
}
