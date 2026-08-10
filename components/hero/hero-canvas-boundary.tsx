"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * navigator.gpu can exist while WebGPU init still fails (driver/OS quirks),
 * and React Three Fiber surfaces that as a thrown error during render/effects.
 * Catches it so a real production visitor sees the CSS radar fallback instead
 * of a blank hero or a crashed page.
 */
export class HeroCanvasBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("WebGPU hero failed, falling back to static radar graphic:", error);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
