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
    "Papirus STR. – 3D štampa, graviranje, lasersko sečenje, izrada ključeva, pečata, medalja, pehara, sublimacijska štampa i prodavnica kancelarijskog materijala u Temerinu.",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  keywords: [
    "3D štampa Temerin",
    "graviranje Temerin",
    "lasersko sečenje",
    "izrada ključeva",
    "izrada pečata",
    "sublimacijska štampa",
    "kancelarijski materijal",
    COMPANY.city,
  ],
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
