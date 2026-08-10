"use client";

import { ElementType, HTMLAttributes, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
}

export function Reveal({ children, as: Tag = "div", className = "", ...props }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  // Polymorphic "as" components can't be typed precisely against JSX.IntrinsicElements'
  // per-tag prop unions without the compiler giving up on the resulting union, so the
  // element is constructed as `any` here; call sites still get full RevealProps typing.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- see comment above
  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={`js-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
