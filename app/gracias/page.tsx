import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { MinimalHeader } from "@/components/layout/minimal-header";
import { MinimalFooter } from "@/components/layout/minimal-footer";

export const metadata: Metadata = {
  title: "Gracias por contactarnos | Guasepresa",
  description: "Hemos recibido su solicitud. Un asesor de Guasepresa se pondrá en contacto para conocer las necesidades de seguridad de su empresa o institución.",
  robots: { index: false, follow: true },
};

export default function Gracias() {
  return (
    <>
      <MinimalHeader />
      <main id="main">
        <section className="band-paper wm-dark">
          <div className="container">
            <nav className="breadcrumb" aria-label="Ruta de navegación" style={{ paddingTop: "calc(72px + var(--space-5))" }}>
              <Link href="/">Inicio</Link>
              <span className="sep">/</span>
              <span className="current">Gracias</span>
            </nav>
            <div className="status-page" style={{ minHeight: "auto", paddingTop: 0 }}>
              <div>
                <div className="status-icon">
                  <CheckCircle2 size={40} />
                </div>
                <h1>Gracias por contactarnos</h1>
                <p>
                  Recibimos su solicitud. Un asesor de Guasepresa la revisará y se pondrá en contacto a la brevedad
                  para conocer las necesidades de seguridad de su empresa o institución.
                </p>
                <p style={{ fontSize: "15px" }}>
                  ¿Prefiere hablar de inmediato? Llámenos o escríbanos por WhatsApp al{" "}
                  <a href="tel:+50277927406" style={{ color: "var(--pine)", textDecoration: "underline" }}>
                    7792 7406
                  </a>
                  .
                </p>
                <div className="actions">
                  <a href="tel:+50277927406" className="btn btn-primary">
                    <Phone size={18} /> Llamar ahora
                  </a>
                  <Link href="/" className="btn btn-outline">
                    Volver al inicio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MinimalFooter legalHref="/privacidad" legalLabel="Política de privacidad" />
    </>
  );
}
