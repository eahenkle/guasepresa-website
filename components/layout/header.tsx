"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { useScrollPast } from "@/hooks/use-scroll-past";

const NAV_LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const scrolled = useScrollPast(12);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
    document.body.classList.toggle("no-scroll", navOpen);
  }, [navOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setNavOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={`site-header band-ink wm-camo ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-bar">
        <a href="#top" className="brand">
          <Image src="/assets/logo-64.png" alt="" width={40} height={40} />
          <span>Guasepresa</span>
        </a>

        <div className="nav-right">
          <nav className="nav-links" id="navLinks" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a key={link.href} className="navlink" href={link.href} onClick={() => setNavOpen(false)}>
                {link.label}
              </a>
            ))}
            <div className="nav-drawer-contact">
              <a className="btn btn-outline btn-block" href="tel:+50277927406" onClick={() => setNavOpen(false)}>
                <Phone size={18} /> Llamar: 7792 7406
              </a>
              <a className="btn btn-primary btn-block" href="#contacto" onClick={() => setNavOpen(false)}>
                Solicitar cotización
              </a>
            </div>
          </nav>

          <div className="nav-actions">
            <a className="nav-phone-icon" href="tel:+50277927406" aria-label="Llamar al 7792 7406">
              <Phone size={18} />
            </a>
            <a className="btn btn-primary btn-sm" href="#contacto">
              Solicitar cotización
            </a>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={navOpen}
              aria-controls="navLinks"
              aria-label={navOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setNavOpen((open) => !open)}
            >
              {navOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
