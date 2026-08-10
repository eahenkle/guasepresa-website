(function () {
  "use strict";

  var header = document.getElementById("siteHeader");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  var backToTop = document.getElementById("backToTop");
  var yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Sticky header state ---- */
  function onScroll() {
    if (window.scrollY > 12) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    if (backToTop) {
      if (window.scrollY > 600) backToTop.classList.add("show");
      else backToTop.classList.remove("show");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav toggle ---- */
  function closeNav() {
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
  function toggleNav() {
    var isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("no-scroll", isOpen);
  }
  if (navToggle) {
    navToggle.addEventListener("click", toggleNav);
  }
  if (navLinks) {
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeNav();
        document.body.classList.remove("no-scroll");
      });
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeNav();
      document.body.classList.remove("no-scroll");
    }
  });

  /* ---- Back to top ---- */
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---- Scroll reveal ----
     Elements already carry the .js-reveal (hidden-until-shown) class in the
     markup, so CSS never depends on JS to become visible in the first place —
     if this script fails to run at all, content stays visible by default.
     What's left here is just: (a) trigger the fade-in, and (b) guarantee it
     always resolves, even if IntersectionObserver never fires (fast
     programmatic scrolling, odd viewport sizes, browser quirks). */
  var revealEls = document.querySelectorAll(".js-reveal");
  if (revealEls.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -10% 0px" }
      );
      revealEls.forEach(function (el) { io.observe(el); });

      // Safety net: if an element is already in (or near) the viewport at
      // load, or the observer simply never reports it, reveal it anyway
      // shortly after load so nothing can stay invisible indefinitely.
      window.addEventListener("load", function () {
        setTimeout(function () {
          revealEls.forEach(function (el) { el.classList.add("is-visible"); });
        }, 1200);
      });
    } else {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }
  }

  /* ---- Count-up numbers ----
     Each .counter already holds its correct final text (e.g. "+12",
     "Q305,600") straight from the HTML, so a no-JS visitor — or this script
     failing outright — still sees the right number. Only once we're sure we
     can finish the animation do we blank it and count up, restoring the
     exact original string at the end. */
  var counters = document.querySelectorAll(".counter[data-count-to]");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (counters.length && "IntersectionObserver" in window && !reduceMotion) {
    var countIo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          countIo.unobserve(entry.target);
          var el = entry.target;
          var finalText = el.textContent;
          var target = parseInt(el.getAttribute("data-count-to"), 10);
          var prefix = el.getAttribute("data-prefix") || "";
          if (!isFinite(target)) return;
          var duration = 1200;
          var start = null;
          function step(ts) {
            if (start === null) start = ts;
            var progress = Math.min((ts - start) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var value = Math.round(target * eased);
            el.textContent = prefix + value.toLocaleString("es-GT");
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              el.textContent = finalText;
            }
          }
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) { countIo.observe(el); });
  }

  /* ---- Contact form: build a mailto with the submitted details ---- */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  var DEST_EMAIL = "info@guasepresa.com";

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var data = new FormData(form);
      var name = String(data.get("name") || "").trim();
      var company = String(data.get("company") || "").trim();
      var phone = String(data.get("phone") || "").trim();
      var email = String(data.get("email") || "").trim();
      var service = String(data.get("service") || "").trim();
      var message = String(data.get("message") || "").trim();

      var subject = "Solicitud de cotizacion - " + name;
      var bodyLines = [
        "Nombre: " + name,
        "Empresa/Institucion: " + (company || "-"),
        "Telefono: " + phone,
        "Correo: " + email,
        "Servicio de interes: " + service,
        "",
        "Mensaje:",
        message
      ];

      var mailto =
        "mailto:" + encodeURIComponent(DEST_EMAIL) +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;

      if (status) {
        status.textContent = "Su cliente de correo se abrió con la solicitud lista para enviar. Si no ocurre nada, escríbanos directamente a " + DEST_EMAIL + " o al 7792 7406.";
        status.classList.add("show", "ok");
      }

      // Give the mailto handler a moment to open before moving to the
      // confirmation page — a plain internal navigation, not a claim that
      // the email itself was sent (there is no backend to confirm that).
      setTimeout(function () {
        window.location.href = "gracias.html";
      }, 600);
    });
  }

  /* ---- Sticky mobile CTA: reserve space so it never covers page content ---- */
  if (document.querySelector(".sticky-cta")) {
    document.body.classList.add("has-sticky-cta");
  }
})();
