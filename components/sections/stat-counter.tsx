"use client";

import { useCountUp } from "@/hooks/use-count-up";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface StatCounterProps {
  target: number;
  finalText: string;
  prefix?: string;
  label: string;
}

export function StatCounter({ target, finalText, prefix = "", label }: StatCounterProps) {
  const { ref: countRef, text } = useCountUp<HTMLDivElement>(target, finalText, prefix);
  const { ref: revealRef, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className={`data-cell js-reveal ${isVisible ? "is-visible" : ""}`}>
      <div className="data-cell__value" ref={countRef}>
        {text}
      </div>
      <div className="data-cell__label">{label}</div>
    </div>
  );
}
