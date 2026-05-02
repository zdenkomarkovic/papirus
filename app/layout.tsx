import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, COMPANY } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Specijalizovana prodavnica, Temerin`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Papirus STR. Temerin – 3D štampa, graviranje, lasersko sečenje, izrada ključeva, pečata, medalja, pehara, sublimacijska štampa i prodavnica kancelarijskog i školskog materijala. Novosadska 365, Temerin.",
  keywords: [
    "Papirus Temerin",
    "3D štampa Temerin",
    "graviranje Temerin",
    "lasersko sečenje Temerin",
    "izrada ključeva Temerin",
    "izrada pečata Temerin",
    "sublimacijska štampa Temerin",
    "kancelarijski materijal Temerin",
    "školski pribor Temerin",
    "medalje i pehari Temerin",
    "fotokopiranje Temerin",
    "prodavnica Temerin",
    COMPANY.city,
  ],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/logo.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
