"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/shop/ProductCard";
import type { Product } from "@/types";

interface ProductsClientProps {
  products: Product[];
  categories: string[];
}

const PAGE_SIZE = 12;

export function ProductsClient({ products, categories }: ProductsClientProps) {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>(
    searchParams.get("kategorija") ?? "sve"
  );
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    activeCategory === "sve"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  function handleCategoryChange(cat: string) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  function getPageNumbers() {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 4) return [1, 2, 3, 4, 5, "...", totalPages];
    if (currentPage >= totalPages - 3) return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Category filter */}
      <div className="mb-10">
        <select
          value={activeCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
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
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginated.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                &#8592;
              </button>

              {getPageNumbers().map((page, idx) =>
                page === "..." ? (
                  <span key={`ellipsis-${idx}`} className="px-2 py-2 text-slate-400 text-sm select-none">
                    &hellip;
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page as number)}
                    className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-primary-700 text-white"
                        : "text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                &#8594;
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
