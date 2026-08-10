"use client";

import { ChevronUp, MessageCircle } from "lucide-react";
import { useScrollPast } from "@/hooks/use-scroll-past";

export function FloatActions() {
  const showBackToTop = useScrollPast(600);

  return (
    <div className="float-actions">
      <button
        type="button"
        className={`float-btn float-top ${showBackToTop ? "show" : ""}`}
        aria-label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUp size={20} />
      </button>
      <a
        className="float-btn float-whatsapp"
        href="https://wa.me/50277927406"
        target="_blank"
        rel="noopener"
        aria-label="Escribir por WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
