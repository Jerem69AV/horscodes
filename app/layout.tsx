import type { Metadata, Viewport } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

// Hors Codes — typographie legal-tech edgy
// Fraunces = serif éditorial expressif (display/H1)
// Inter = sans-serif clean (body)
// JetBrains Mono = mono code-like (kickers, signature visuelle)
const newsreader = Newsreader({
  variable: "--font-fraunces", // on garde la variable name pour éviter de tout réécrire
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

export const metadata: Metadata = {
  title: {
    default: "Hors Codes — Collectif d'avocats du numérique AURA",
    template: "%s | Hors Codes",
  },
  description:
    "Collectif d'avocats indépendants spécialisés en droit du numérique, IA, cybersécurité, données personnelles, crypto-actifs et propriété intellectuelle. Annecy · Annemasse · Lyon · Grenoble.",
  keywords: [
    "avocat droit du numérique",
    "avocat IA",
    "avocat cybersécurité",
    "avocat RGPD",
    "avocat crypto",
    "avocat propriété intellectuelle",
    "Annecy", "Annemasse", "Lyon", "Grenoble",
    "Auvergne-Rhône-Alpes",
    "association avocats numérique",
    "Hors Codes",
  ],
  authors: [{ name: "Hors Codes" }],
  creator: "Hors Codes",
  metadataBase: new URL("https://horscodes.fr"),
  alternates: { canonical: "https://horscodes.fr" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://horscodes.fr",
    title: "Hors Codes — Collectif d'avocats du numérique AURA",
    description:
      "Le droit, à la vitesse du code. Avocats du numérique, IA, cyber, données et crypto sur Annecy · Annemasse · Lyon · Grenoble.",
    siteName: "Hors Codes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hors Codes — Collectif d'avocats du numérique",
    description:
      "Le droit, à la vitesse du code.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: "#faf8f3", color: "#1a2238" }}
      >
        <Navigation />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
