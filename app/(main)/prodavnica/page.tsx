import { Suspense } from "react";
import { buildMetadata } from "@/lib/metadata";
import { getProducts, getCategories } from "@/lib/sanity";
import { ProductsClient } from "./ProductsClient";

export const metadata = buildMetadata({
  title: "Prodavnica",
  description:
    "Prodavnica kancelarijskog i školskog materijala u Temerinu – Papirus STR. Novosadska 365, Temerin. Veliki izbor pribora, sveske, flomasteri, registratori i još mnogo toga.",
  path: "/prodavnica",
});

export const revalidate = 30;

export default async function ProdavnicaPage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Prodavnica</h1>
          <p className="text-primary-200 text-lg">
            Kancelarijski materijal, školski pribor i još mnogo toga.
          </p>
        </div>
      </div>
      <Suspense fallback={<div className="py-20 text-center text-slate-400">Učitavanje...</div>}>
        <ProductsClient products={products} categories={categories} />
      </Suspense>
    </div>
  );
}
