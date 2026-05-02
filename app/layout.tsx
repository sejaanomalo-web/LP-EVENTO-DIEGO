import type { Metadata, Viewport } from "next";
import { Titillium_Web } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import "./globals.css";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-titillium",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lidermagnetico.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Líder Magnético | Diego Knebel",
  description:
    "Imersão presencial de 2 dias em Cascavel/PR. Para líderes que sabem muito e querem se fazer ouvir como deveriam. 04 e 05 de julho de 2026.",
  openGraph: {
    title: "Líder Magnético | Diego Knebel",
    description:
      "Imersão presencial de 2 dias em Cascavel/PR. 04 e 05 de julho de 2026.",
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Líder Magnético",
  },
  twitter: {
    card: "summary_large_image",
    title: "Líder Magnético | Diego Knebel",
    description:
      "Imersão presencial de 2 dias em Cascavel/PR. 04 e 05 de julho de 2026.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#201747",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="pt-BR" className={titillium.variable}>
      <body className="bg-navy text-white antialiased overflow-x-clip">
        {children}
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
        <MetaPixel />
      </body>
    </html>
  );
}
