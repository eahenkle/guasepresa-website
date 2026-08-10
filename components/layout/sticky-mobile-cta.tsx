import { Phone } from "lucide-react";

export function StickyMobileCta() {
  return (
    <div className="sticky-cta band-ink" aria-label="Acciones rápidas">
      <a href="tel:+50277927406" className="btn btn-outline">
        <Phone size={16} /> Llamar
      </a>
      <a href="#contacto" className="btn btn-primary">
        Solicitar cotización
      </a>
    </div>
  );
}
