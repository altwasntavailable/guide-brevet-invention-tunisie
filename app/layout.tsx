import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://guide-brevet-tunisie.vercel.app"),
  title: {
    default: "Guide du brevet d'invention en Tunisie",
    template: "%s | Guide du brevet d'invention",
  },
  description:
    "Guide pratique en français pour comprendre, préparer et déposer un brevet d'invention en Tunisie : conditions, pièces, coûts, délais, droits et recours.",
  keywords: [
    "brevet d'invention",
    "Tunisie",
    "INNORPI",
    "propriété industrielle",
    "loi 2000-84",
    "dépôt de brevet",
  ],
  authors: [{ name: "Guide du brevet d'invention" }],
  openGraph: {
    type: "website",
    locale: "fr_TN",
    title: "Guide du brevet d'invention en Tunisie",
    description:
      "De l'idée au brevet : conditions de brevetabilité, dossier de dépôt, redevances, délais et droits du titulaire.",
    siteName: "Guide du brevet d'invention",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1524",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col">
        <a className="skip-link" href="#contenu">
          Aller au contenu principal
        </a>
        <Header />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
