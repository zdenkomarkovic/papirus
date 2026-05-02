import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, COMPANY } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Početna",
  description:
    "Papirus STR. Temerin – 3D štampa, graviranje, lasersko sečenje, izrada ključeva, pečata, medalja, pehara i prodavnica kancelarijskog i školskog materijala. Novosadska 365, Temerin.",
  path: "/",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: COMPANY.name,
  alternateName: "Papirus Temerin",
  url: SITE_URL,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  image: `${SITE_URL}/logo.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address,
    addressLocality: "Temerin",
    postalCode: "21235",
    addressCountry: "RS",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  hasMap: "https://maps.google.com/?q=Novosadska+365+Temerin",
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Hero />
      <CategoriesSection />
      <ServicesSection />
      <AboutSection />
    </>
  );
}
