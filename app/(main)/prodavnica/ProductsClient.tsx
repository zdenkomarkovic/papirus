"use client";

import { useState } from "react";
import { ProductCard } from "@/components/shop/ProductCard";
import type { Product } from "@/types";

interface ProductsClientProps {
  products: Product[];
  categories: string[];
}

export function ProductsClient({ products, categories }: ProductsClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>("sve");

  const filtered =
    activeCategory === "sve"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveCategory("sve")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeCategory === "sve"
              ? "bg-primary-800 text-white"
              : "bg-white text-slate-600 border border-slate-200 hover:border-primary-400"
          }`}
        >
          Sve
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === cat
                ? "bg-primary-800 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:border-primary-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-slate-500">
          <p className="text-lg">Nema proizvoda u ovoj kategoriji.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
