import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Kancelarijski materijal",
    image: "/kancelarijski materijal.png",
    href: "/prodavnica?kategorija=Kancelarijski Materijal",
  },
  {
    name: "Školski pribor",
    image: "/školski pribor.png",
    href: "/prodavnica?kategorija=Školski pribor",
  },
];

export function CategoriesSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8">
          Kategorije proizvoda
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary-900/50" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-3xl font-semibold text-center px-4">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/prodavnica"
            className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-900 transition-colors"
          >
            Vidi sve proizvode <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
