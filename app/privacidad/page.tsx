import type { Metadata } from "next";
import Link from "next/link";
import { MinimalHeader } from "@/components/layout/minimal-header";
import { MinimalFooter } from "@/components/layout/minimal-footer";

export const metadata: Metadata = {
  title: "Política de privacidad | Guasepresa",
  description: "Cómo Guasepresa (Guatemala Security Premier, S.A.) recopila, usa y protege la información que usted comparte a través de este sitio.",
};

export default function Privacidad() {
  return (
    <>
      <MinimalHeader />
      <main id="main">
        <section className="band-paper wm-dark">
          <div className="container">
            <nav className="breadcrumb" aria-label="Ruta de navegación" style={{ paddingTop: "calc(72px + var(--space-6))" }}>
              <Link href="/">Inicio</Link>
              <span className="sep">/</span>
              <span className="current">Política de privacidad</span>
            </nav>

            <article className="legal-page" style={{ paddingTop: 0 }}>
              <h1>Política de privacidad</h1>
              <p className="updated">
                Última actualización: agosto de 2026 · Este documento es una plantilla informativa de referencia; se
                recomienda validarla con un asesor legal antes de su uso comercial definitivo.
              </p>

              <p>
                Guatemala Security Premier, S.A. (&quot;Guasepresa&quot;, &quot;nosotros&quot;) opera el sitio web
                guasepresa.com. Esta política explica qué información recopilamos cuando usted lo visita o utiliza
                nuestro formulario de contacto, y cómo la usamos.
              </p>

              <h2>Información que recopilamos</h2>
              <p>A través del formulario de contacto podemos recopilar los datos que usted decide compartir voluntariamente:</p>
              <ul>
                <li>Nombre completo</li>
                <li>Nombre de la empresa o institución (opcional)</li>
                <li>Número de teléfono</li>
                <li>Correo electrónico</li>
                <li>Servicio de interés y el mensaje que usted redacte</li>
              </ul>
              <p>
                Este sitio no utiliza cuentas de usuario, pasarelas de pago ni almacena esta información en una base
                de datos: el formulario prepara un correo que se envía directamente a Guasepresa a través de su
                propio cliente de correo.
              </p>

              <h2>Cómo usamos su información</h2>
              <p>
                Utilizamos los datos que usted comparte únicamente para responder a su solicitud de información o
                cotización, y para dar seguimiento comercial relacionado con los servicios de seguridad privada que
                ofrecemos.
              </p>

              <h2>Con quién compartimos su información</h2>
              <p>
                No vendemos ni compartimos sus datos con terceros con fines publicitarios. Solo se comparten
                internamente entre el personal de Guasepresa involucrado en atender su solicitud.
              </p>

              <h2>Cookies y tecnologías similares</h2>
              <p>
                Este sitio no utiliza cookies de rastreo publicitario. Puede utilizarse almacenamiento técnico mínimo
                del navegador únicamente para el funcionamiento de la interfaz (por ejemplo, recordar que un aviso
                fue cerrado).
              </p>

              <h2>Sus derechos</h2>
              <p>
                Usted puede solicitarnos en cualquier momento que le confirmemos qué información suya conservamos,
                que la corrijamos, o que la eliminemos de nuestros registros, escribiendo a los datos de contacto
                indicados abajo.
              </p>

              <h2>Contacto</h2>
              <p>
                Para consultas sobre esta política, comuníquese con Guasepresa al teléfono{" "}
                <a href="tel:+50277927406">7792 7406</a> o en la dirección RD-ESC-27, Tiquisate, Escuintla,
                Guatemala.
              </p>

              <h2>Cambios a esta política</h2>
              <p>Podemos actualizar esta política ocasionalmente. La fecha de la última actualización se indica al inicio de este documento.</p>
            </article>
          </div>
        </section>
      </main>
      <MinimalFooter legalHref="/" legalLabel="Inicio" />
    </>
  );
}
