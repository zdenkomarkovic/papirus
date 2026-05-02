import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <Star size={16} className="text-accent-400 fill-accent-400" />
              <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
                Temerin, Novosadska 365
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Papirus Temerin –{" "}
              <span className="text-accent-400">sve na jednom mestu</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-200 mb-10 leading-relaxed">
              3D štampa, graviranje, lasersko sečenje, izrada ključeva, pečata, medalja i pehara –
              plus bogata prodavnica kancelarijskog i školskog materijala.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/usluge">
                <Button size="lg" variant="secondary">
                  Naše usluge <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/prodavnica">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Prodavnica
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-[520px]">
            <Image
              src="/logo.jpg"
              alt="Papirus Temerin logo"
              width={520}
              height={520}
              className="rounded-2xl object-contain w-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="h-12 bg-slate-50" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
    </section>
  );
}
