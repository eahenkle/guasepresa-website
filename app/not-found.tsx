import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { MinimalHeader } from "@/components/layout/minimal-header";
import { MinimalFooter } from "@/components/layout/minimal-footer";

export const metadata: Metadata = {
  title: "Página no encontrada | Guasepresa",
  description: "La página que busca no existe o fue movida. Vuelva al inicio de Guasepresa, seguridad privada en Tiquisate, Escuintla.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <MinimalHeader />
      <main id="main">
        <section className="band-paper wm-dark">
          <div className="container">
            <nav className="breadcrumb" aria-label="Ruta de navegación" style={{ paddingTop: "calc(72px + var(--space-5))" }}>
              <Link href="/">Inicio</Link>
              <span className="sep">/</span>
              <span className="current">Página no encontrada</span>
            </nav>
            <div className="status-page" style={{ minHeight: "auto", paddingTop: 0 }}>
              <div>
                <div className="status-icon">
                  <AlertTriangle size={40} />
                </div>
                <div className="code">404</div>
                <h1>No encontramos esa página</h1>
                <p>El enlace puede estar roto o la página fue movida. Vuelva al inicio o contáctenos directamente si necesita ayuda.</p>
                <div className="actions">
                  <Link href="/" className="btn btn-primary">
                    Volver al inicio
                  </Link>
                  <Link href="/#contacto" className="btn btn-outline">
                    Contactar a Guasepresa
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
