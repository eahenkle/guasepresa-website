import Link from "next/link";

interface MinimalFooterProps {
  legalHref: string;
  legalLabel: string;
}

export function MinimalFooter({ legalHref, legalLabel }: MinimalFooterProps) {
  return (
    <footer className="site-footer band-ink wm-camo">
      <div className="container">
        <div className="footer-bottom" style={{ paddingTop: "var(--space-5)" }}>
          <span>&copy; {new Date().getFullYear()} Guatemala Security Premier, S.A. Todos los derechos reservados.</span>
          <span className="footer-legal">
            <Link href={legalHref}>{legalLabel}</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
