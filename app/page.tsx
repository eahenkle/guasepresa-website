import Image from "next/image";
import { Eye, Briefcase, ShieldCheck, MapPin, Phone, MessageCircle, Mail, Clock, ChevronDown } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OpsTicker } from "@/components/layout/ops-ticker";
import { FloatActions } from "@/components/layout/float-actions";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { Reveal } from "@/components/ui/reveal";
import { RadarGraphic } from "@/components/hero/radar-graphic";
import { ServiceCard } from "@/components/sections/service-card";
import { ServiceMoreCard } from "@/components/sections/service-more-card";
import { AboutBlock } from "@/components/sections/about-block";
import { StatCounter } from "@/components/sections/stat-counter";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <>
      <Header />
      <OpsTicker />

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="hero band-paper wm-dark" id="top">
          <span className="hero-hud-corner hud-label">
            Cobertura <span className="hud-value">Guatemala</span>
          </span>

          <div className="container hero-grid">
            <Reveal>
              <span className="eyebrow">Seguridad privada desde 2013</span>
              <h1 className="hero-heading">
                <span className="hero-heading__brand">Guasepresa</span>
                <span className="hero-heading__tagline">
                  Seguridad y vigilancia <span className="accent">en la que Guatemala confía</span>
                </span>
              </h1>
              <p className="lede">
                Guasepresa (Guatemala Security Premier, S.A.) protege entidades públicas y privadas en toda
                Guatemala desde 2013, con sede en Tiquisate, Escuintla. Personal capacitado, turnos de 12 y 24
                horas, y experiencia comprobada con instituciones del Estado.
              </p>
              <div className="hero-actions">
                <a href="#contacto" className="btn btn-primary">
                  Solicitar cotización
                </a>
                <a href="tel:+50277927406" className="btn btn-outline">
                  <Phone size={18} />
                  Llamar ahora
                </a>
              </div>
            </Reveal>

            <Reveal>
              <RadarGraphic />
              <div className="fact-card">
                <div className="fact-card__head">
                  <Image src="/assets/logo-192.png" alt="" width={44} height={44} />
                  <div>
                    <strong>Guasepresa</strong>
                    <span>Guatemala Security Premier, S.A.</span>
                  </div>
                </div>
                <dl className="fact-card__rows">
                  <div className="row">
                    <dt>Fundación</dt>
                    <dd>2013</dd>
                  </div>
                  <div className="row">
                    <dt>Actividad</dt>
                    <dd>ISIC 8010</dd>
                  </div>
                  <div className="row">
                    <dt>Domicilio</dt>
                    <dd>Tiquisate, Escuintla</dd>
                  </div>
                  <div className="row">
                    <dt>Calificación</dt>
                    <dd>4.4 / 5 en Cybo</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>

          <span className="hero-hud-year">
            <span className="hud-label">Operando desde</span>
            <strong>2013</strong>
          </span>

          <span className="hero-scroll-hint hud-label">
            Desplazar
            <ChevronDown />
          </span>
        </section>

        {/* ============ STATS STRIP ============ */}
        <section className="data-band band-ink wm-camo">
          <div className="container">
            <div className="data-row">
              <StatCounter index="01" target={12} finalText="+12" prefix="+" label="Años de experiencia" />
              <Reveal as="div" className="data-cell">
                <span className="data-cell__index">02</span>
                <div className="data-cell__value">2013</div>
                <div className="data-cell__label">Año de fundación</div>
              </Reveal>
              <Reveal as="div" className="data-cell">
                <span className="data-cell__index">03</span>
                <div className="data-cell__value">4.4 / 5</div>
                <div className="data-cell__label">Calificación en Cybo</div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ NOSOTROS ============ */}
        <section className="section-pad band-paper wm-dark" id="nosotros">
          <div className="container">
            <Reveal as="div" className="about-intro">
              <span className="eyebrow">Nosotros</span>
              <h2 style={{ fontSize: "clamp(26px, 3.4vw, 38px)", marginBottom: "var(--space-3)" }}>Quiénes somos</h2>
              <p className="lede">
                Guatemala Security Premier, S.A. fue constituida en 2013 y opera bajo el código ISIC 8010,
                actividades de seguridad privada. Con sede en Tiquisate, Escuintla, brindamos vigilancia a clientes
                públicos y privados en toda Guatemala.
              </p>
            </Reveal>

            <div className="about-blocks">
              <Reveal as="div">
                <AboutBlock
                  title="Trayectoria"
                  description="Más de 12 años operando en el sector de seguridad privada en Guatemala."
                />
              </Reveal>
              <Reveal as="div">
                <AboutBlock
                  title="Turnos flexibles"
                  description="Cobertura en turnos de 12 y 24 horas, adaptados a cada cliente."
                />
              </Reveal>
              <Reveal as="div">
                <AboutBlock
                  title="Sector público"
                  description="Experiencia comprobada con instituciones del Estado, incluido el IGSS."
                />
              </Reveal>
              <Reveal as="div">
                <AboutBlock
                  title="Cobertura nacional"
                  description="Sede en Tiquisate, Escuintla, con operaciones y cobertura en todo el territorio de Guatemala."
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ SERVICIOS ============ */}
        <section className="section-pad band-pine wm-camo" id="servicios">
          <div className="container">
            <Reveal as="div" className="section-head">
              <span className="eyebrow">Servicios</span>
              <h2>Servicios de seguridad privada</h2>
              <p>Soluciones de vigilancia para entidades públicas, empresas privadas y propiedades en toda Guatemala.</p>
            </Reveal>

            <div className="services-grid">
              <Reveal as="div">
                <ServiceCard
                  icon={Eye}
                  title="Vigilancia física"
                  description="Agentes apostados con turnos de 12 y 24 horas para el resguardo permanente de instalaciones."
                />
              </Reveal>
              <Reveal as="div">
                <ServiceCard
                  icon={Briefcase}
                  title="Entidades públicas"
                  description="Vigilancia para direcciones departamentales de instituciones del Estado."
                />
              </Reveal>
              <Reveal as="div">
                <ServiceCard
                  icon={ShieldCheck}
                  title="Seguridad corporativa"
                  description="Protección de empresas privadas, oficinas y centros de operación."
                />
              </Reveal>
              <Reveal as="div">
                <ServiceMoreCard
                  title="Más servicios"
                  items={["Custodia y patrullaje", "Seguridad para eventos", "Respuesta y supervisión"]}
                  href="#contacto"
                  linkLabel="Consultar disponibilidad"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ CONTACTO ============ */}
        <section className="section-pad band-paper wm-dark" id="contacto">
          <div className="container">
            <Reveal as="div" className="section-head">
              <span className="eyebrow">Contacto</span>
              <h2>Solicite información</h2>
              <p>Escríbanos y un asesor de Guasepresa se pondrá en contacto para conocer las necesidades de seguridad de su empresa o institución.</p>
            </Reveal>

            <div className="contact-grid">
              <Reveal as="div" className="contact-info">
                <div className="map-embed">
                  <iframe
                    src="https://www.google.com/maps?q=RD-ESC-27%2C%20Tiquisate%2C%20Escuintla%2C%20Guatemala&output=embed"
                    title="Ubicación de Guasepresa en Tiquisate, Escuintla"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="contact-item">
                  <MapPin />
                  <div>
                    <h4>Dirección</h4>
                    <p>RD-ESC-27, Tiquisate, Escuintla, Guatemala</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=RD-ESC-27%2C%20Tiquisate%2C%20Escuintla%2C%20Guatemala"
                      target="_blank"
                      rel="noopener"
                      style={{ fontSize: "14px", color: "var(--pine)", textDecoration: "underline", minHeight: "44px" }}
                    >
                      Cómo llegar
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone />
                  <div>
                    <h4>Teléfono</h4>
                    <a href="tel:+50277927406">7792 7406</a>
                  </div>
                </div>
                <div className="contact-item">
                  <MessageCircle />
                  <div>
                    <h4>WhatsApp</h4>
                    <a href="https://wa.me/50277927406" target="_blank" rel="noopener">
                      Escribir mensaje
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail />
                  <div>
                    <h4>Sitio web</h4>
                    <a href="https://www.guasepresa.com" target="_blank" rel="noopener">
                      www.guasepresa.com
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <Clock />
                  <div>
                    <h4>Atención</h4>
                    <p>Vigilancia operativa 24/7. Oficina: lunes a viernes.</p>
                  </div>
                </div>
              </Reveal>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCta />
      <FloatActions />
    </>
  );
}
