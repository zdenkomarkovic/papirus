import { buildMetadata } from "@/lib/metadata";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES, COMPANY } from "@/lib/constants";
import { Phone, Mail } from "lucide-react";

export const metadata = buildMetadata({
  title: "Usluge",
  description:
    "Sve usluge Papirus STR. Temerin: 3D štampa, graviranje, lasersko sečenje, izrada ključeva, pečata, medalja, pehara, sublimacijska štampa i fotokopiranje. Novosadska 365, Temerin.",
  path: "/usluge",
});

export default function UsluePage() {
  return (
    <div className="bg-slate-50">
      {/* Header */}
      <div className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Naše usluge</h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            Profesionalna oprema i iskusno osoblje za sve vaše potrebe – od personalizovanih
            poklona do industrijskih rešenja.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Imate pitanje ili zahtev?</h2>
          <p className="text-primary-200 mb-8">
            Kontaktirajte nas i naš tim će vam pomoći da pronađete pravo rešenje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              <Phone size={18} /> {COMPANY.phone}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              <Mail size={18} /> {COMPANY.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
