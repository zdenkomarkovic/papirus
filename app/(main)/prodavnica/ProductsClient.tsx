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
      <div className="mb-10">
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-medium shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400"
        >
          <option value="sve">Sve kategorije</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
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
