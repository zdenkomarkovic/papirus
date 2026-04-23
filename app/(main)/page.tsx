import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";

export const metadata = buildMetadata({
  title: "Početna",
  description:
    "Papirus STR. Temerin – 3D štampa, graviranje, lasersko sečenje, izrada ključeva, pečata, medalja, pehara i prodavnica materijala.",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
    </>
  );
}
