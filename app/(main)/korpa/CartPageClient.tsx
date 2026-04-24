"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { CheckoutForm } from "@/components/shop/CheckoutForm";
import { Button } from "@/components/ui/Button";

export function CartPageClient() {
  const { items, totalPrice, totalItems, updateQuantity, removeItem } = useCart();

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-primary-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-1">Korpa</h1>
          <p className="text-primary-200">
            {totalItems > 0 ? `${totalItems} artikal(a) u korpi` : "Vaša korpa je prazna"}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag size={56} className="text-slate-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-primary-900 mb-3">Korpa je prazna</h2>
            <p className="text-slate-500 mb-8">Dodajte proizvode iz naše prodavnice.</p>
            <Link href="/prodavnica">
              <Button size="lg">Idi u prodavnicu</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Items list */}
            <div className="lg:col-span-3 space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product._id} className="bg-white rounded-2xl p-4 shadow-sm flex gap-4">
                  {product.image ? (
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-xl shrink-0 bg-slate-100" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-primary-600 font-medium">{product.category}</p>
                    <h3 className="font-semibold text-primary-900 truncate">{product.name}</h3>
                    <p className="text-accent-600 font-bold mt-1">
                      {(product.price * quantity).toLocaleString("sr-RS")} RSD
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between shrink-0">
                    <button
                      onClick={() => removeItem(product._id)}
                      className="text-slate-400 hover:text-red-500 transition-colors p-1"
                      aria-label="Ukloni"
                    >
                      <Trash2 size={16} />
                    </button>
                    <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-2 py-1">
                      <button
                        onClick={() => updateQuantity(product._id, quantity - 1)}
                        className="text-slate-600 hover:text-primary-800 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-semibold w-5 text-center">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product._id, quantity + 1)}
                        className="text-slate-600 hover:text-primary-800 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                <CheckoutForm />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
