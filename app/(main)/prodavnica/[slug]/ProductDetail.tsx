"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/types";

export function ProductDetail({ product }: { product: Product }) {
  const { addItem, updateQuantity, items } = useCart();
  const [qty, setQty] = useState(1);

  const cartItem = items.find((i) => i.product._id === product._id);

  const handleAddToCart = () => {
    if (cartItem) {
      updateQuantity(product._id, cartItem.quantity + qty);
    } else {
      for (let i = 0; i < qty; i++) addItem(product);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Slika */}
      <div className="relative aspect-square bg-slate-100 rounded-2xl overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            Nema slike
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">
              Rasprodato
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <span className="text-sm text-primary-600 font-semibold uppercase tracking-wide mb-2">
          {product.category}
        </span>
        <h1 className="text-3xl font-bold text-primary-900 mb-4">{product.name}</h1>

        {product.description && (
          <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>
        )}

        <div className="text-3xl font-bold text-primary-800 mb-8">
          {product.price.toLocaleString("sr-RS")}{" "}
          <span className="text-lg font-normal text-slate-500">RSD</span>
        </div>

        {/* Količina */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm font-medium text-slate-700">Količina:</span>
          <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="p-2 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Smanji količinu"
            >
              <Minus size={16} />
            </button>
            <span className="w-12 text-center font-semibold text-primary-900">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="p-2 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Povećaj količinu"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full sm:w-auto"
        >
          <ShoppingCart size={18} />
          Dodaj u korpu
        </Button>

        {cartItem && (
          <p className="mt-3 text-sm text-slate-500">
            U korpi: {cartItem.quantity} kom
          </p>
        )}
      </div>
    </div>
  );
}
