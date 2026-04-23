"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <Link href={`/prodavnica/${product.slug}`} className="relative h-48 bg-slate-100 overflow-hidden block">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold text-sm bg-black/60 px-3 py-1 rounded-full">
              Rasprodato
            </span>
          </div>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-primary-600 font-semibold uppercase tracking-wide mb-1">
          {product.category}
        </span>
        <Link href={`/prodavnica/${product.slug}`}>
          <h3 className="font-semibold text-primary-900 mb-2 flex-1 hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        {product.description && (
          <p className="text-slate-500 text-xs mb-3 line-clamp-2">{product.description}</p>
        )}

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
          <span className="text-xl font-bold text-primary-800">
            {product.price.toLocaleString("sr-RS")} <span className="text-sm font-normal text-slate-500">RSD</span>
          </span>
          <Button
            size="sm"
            onClick={() => addItem(product)}
            disabled={!product.inStock}
          >
            <ShoppingCart size={15} />
            Dodaj
          </Button>
        </div>
      </div>
    </div>
  );
}
