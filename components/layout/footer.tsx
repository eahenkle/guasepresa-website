import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer band-ink wm-camo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <Image src="/assets/logo-64.png" alt="" width={34} height={34} />
              <strong>Guasepresa</strong>
            </div>
            <p>
              Guatemala Security Premier, S.A. Servicios de vigilancia y seguridad privada en Tiquisate, Escuintla
              desde 2013.
            </p>
          </div>
          <div className="footer-col">
            <h5>Enlaces</h5>
            <ul>
              <li>
                <a href="#nosotros">Nosotros</a>
              </li>
              <li>
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contacto</h5>
            <ul>
              <li>
                <a href="tel:+50277927406">7792 7406</a>
              </li>
              <li>
                <a href="https://wa.me/50277927406" target="_blank" rel="noopener">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.guasepresa.com" target="_blank" rel="noopener">
                  www.guasepresa.com
                </a>
              </li>
              <li>RD-ESC-27, Tiquisate, Escuintla</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Guatemala Security Premier, S.A. Todos los derechos reservados.</span>
          <span className="footer-legal">
            ISIC 8010. Actividades de seguridad privada. <Link href="/privacidad">Política de privacidad</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
