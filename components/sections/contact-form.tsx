"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const DEST_EMAIL = "info@guasepresa.com";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal<HTMLFormElement>();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = "Solicitud de cotizacion - " + name;
    const bodyLines = [
      "Nombre: " + name,
      "Empresa/Institucion: " + (company || "-"),
      "Telefono: " + phone,
      "Correo: " + email,
      "Servicio de interes: " + service,
      "",
      "Mensaje:",
      message,
    ];

    const mailto =
      "mailto:" + encodeURIComponent(DEST_EMAIL) +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(bodyLines.join("\n"));

    window.location.href = mailto;

    setStatus(
      "Su cliente de correo se abrió con la solicitud lista para enviar. Si no ocurre nada, escríbanos directamente a " +
        DEST_EMAIL +
        " o al 7792 7406."
    );

    setTimeout(() => {
      router.push("/gracias");
    }, 600);
  }

  return (
    <form
      ref={ref}
      className={`contact-form js-reveal ${isVisible ? "is-visible" : ""}`}
      id="contactForm"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Nombre completo</label>
          <input type="text" id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="company">Empresa / Institución</label>
          <input type="text" id="company" name="company" autoComplete="organization" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="phone">Teléfono</label>
          <input type="tel" id="phone" name="phone" required autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" required autoComplete="email" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="service">Servicio de interés</label>
        <select id="service" name="service" defaultValue="Vigilancia física">
          <option value="Vigilancia física">Vigilancia física</option>
          <option value="Seguridad corporativa">Seguridad corporativa</option>
          <option value="Custodia y patrullaje">Custodia y patrullaje</option>
          <option value="Seguridad residencial">Seguridad residencial</option>
          <option value="Seguridad para eventos">Seguridad para eventos</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Cuéntenos sobre sus necesidades de seguridad..."
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Enviar solicitud
      </button>
      <p className="field-note">
        Al enviar este formulario se abrirá su cliente de correo con la información lista para enviar a Guasepresa.
      </p>
      <p className={`form-status ok ${status ? "show" : ""}`} role="status">
        {status}
      </p>
    </form>
  );
}
