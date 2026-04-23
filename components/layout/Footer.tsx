import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image src="/logo.jpg" alt="Papirus logo" width={140} height={50} className="h-20 w-auto object-contain mb-4" />
            </Link>
            <p className="text-sm text-primary-300 leading-relaxed">
              Vaš partner za 3D štampu, graviranje, lasersko sečenje, fotokopiranje, izradu ključeva, pečata, medalja, pehara i sublimacijsku štampu.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigacija</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="kontakt">
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-primary-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-accent-400" />
                <span>{COMPANY.address}<br />{COMPANY.city}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-accent-400" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-accent-400" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock size={15} className="mt-0.5 shrink-0 text-accent-400" />
                <div>
                  <div>{COMPANY.workingHours.weekdays}</div>
                  <div>{COMPANY.workingHours.saturday}</div>
                  <div>{COMPANY.workingHours.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-800 text-center text-xs text-primary-500">
          © {new Date().getFullYear()} {COMPANY.fullName}. Sva prava zadržana.
          <span className="block mt-1">Izrada sajta: <a href="https://manikamwebsolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-300 transition-colors">Manikam Web Solutions</a></span>
        </div>
      </div>
    </footer>
  );
}
