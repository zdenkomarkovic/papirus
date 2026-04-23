import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const HIGHLIGHTS = [
  "Profesionalna oprema i iskusno osoblje",
  "Brza izrada i dostava",
  "Prilagođena rešenja za firme i fizička lica",
  "Vlastita prodavnica kancelarijskog materijala",
];

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Ko smo mi?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              <strong>{COMPANY.name}</strong> je specijalizovana komisiona prodavnica u Temerinu sa dugogodišnjim iskustvom
              u pružanju usluga 3D štampe, graviranja, laserskog sečenja, fotokopiranja i izrade raznih
              personalizovanih proizvoda.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Pored usluga, nudimo i bogat asortiman kancelarijskog i školskog materijala.
              Naša misija je da svakom klijentu pružimo kvalitetnu uslugu po pristupačnoj ceni.
            </p>

            <ul className="space-y-3 mb-10">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={18} className="text-accent-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary-50 rounded-2xl p-8 space-y-5">
            <h3 className="text-xl font-bold text-primary-800 mb-6">Pronađite nas</h3>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-800 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-primary-900">{COMPANY.address}</p>
                <p className="text-slate-500 text-sm">{COMPANY.city}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-800 rounded-xl flex items-center justify-center shrink-0">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-primary-900">Pozovite nas</p>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-accent-600 hover:text-accent-500 text-sm font-medium">
                  {COMPANY.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-800 rounded-xl flex items-center justify-center shrink-0">
                <Mail size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-primary-900">Email</p>
                <a href={`mailto:${COMPANY.email}`} className="text-accent-600 hover:text-accent-500 text-sm font-medium">
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-primary-200 text-sm text-slate-600 space-y-1">
              <p>{COMPANY.workingHours.weekdays}</p>
              <p>{COMPANY.workingHours.saturday}</p>
              <p className="text-slate-400">{COMPANY.workingHours.sunday}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
