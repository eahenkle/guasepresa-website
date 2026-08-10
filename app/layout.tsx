import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guasepresa.com"),
  title: "Guasepresa | Seguridad Privada en Tiquisate, Escuintla",
  description:
    "Guasepresa (Guatemala Security Premier, S.A.) brinda servicios de vigilancia y seguridad privada para entidades públicas y privadas en Tiquisate, Escuintla y Guatemala. Más de 12 años de experiencia.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.guasepresa.com/",
    locale: "es_GT",
    siteName: "Guasepresa",
    title: "Guasepresa | Seguridad Privada en Tiquisate, Escuintla",
    description: "Vigilancia y seguridad privada para entidades públicas y privadas. Más de 12 años de experiencia en Guatemala.",
    images: [{ url: "/assets/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guasepresa | Seguridad Privada en Tiquisate, Escuintla",
    description: "Vigilancia y seguridad privada para entidades públicas y privadas. Más de 12 años de experiencia en Guatemala.",
    images: ["/assets/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/assets/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: "/assets/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#edf1e7",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Guasepresa",
  alternateName: "Guatemala Security Premier, S.A.",
  description: "Servicios de vigilancia y seguridad privada para entidades públicas y privadas en Tiquisate, Escuintla y Guatemala.",
  url: "https://www.guasepresa.com/",
  telephone: "+502-7792-7406",
  foundingDate: "2013-03-25",
  image: "https://www.guasepresa.com/assets/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "RD-ESC-27",
    addressLocality: "Tiquisate",
    addressRegion: "Escuintla",
    addressCountry: "GT",
  },
  areaServed: ["Tiquisate", "Escuintla", "Retalhuleu", "Guatemala"],
  priceRange: "$$",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-GT" className={`${barlow.variable} ${barlowCondensed.variable} ${ibmPlexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip-link" href="#main">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
