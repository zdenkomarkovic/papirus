"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Loader2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/Button";
import type { OrderFormData } from "@/types";

export function CheckoutForm() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<OrderFormData>({
    name: "",
    phone: "",
    address: "",
    note: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/narudzbina", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          customer: form,
          total: totalPrice,
          createdAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Greška pri slanju narudžbine.");

      clearCart();
      setSuccess(true);
    } catch {
      setError("Došlo je do greške. Molimo pokušajte ponovo ili nas pozovite direktno.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-16 px-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send size={28} className="text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-primary-900 mb-3">Narudžbina primljena!</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Hvala vam! Narudžbinu smo primili i kontaktiraćemo vas uskoro na broj koji ste naveli.
        </p>
        <Button onClick={() => router.push("/prodavnica")}>Nastavi kupovinu</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-bold text-primary-900">Podaci za dostavu</h2>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Ime i prezime <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Vaše ime i prezime"
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-700 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Telefon <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="06x xxx xxxx"
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-700 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Adresa <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="address"
          required
          value={form.address}
          onChange={handleChange}
          placeholder="Ulica, broj, mesto"
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-700 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Napomena (opciono)
        </label>
        <textarea
          name="note"
          value={form.note}
          onChange={handleChange}
          placeholder="Posebni zahtevi ili napomene..."
          rows={3}
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-700 focus:border-transparent resize-none"
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-3">{error}</p>
      )}

      <div className="pt-2 border-t border-slate-200">
        <div className="flex justify-between text-lg font-bold text-primary-900 mb-4">
          <span>Ukupno:</span>
          <span>{totalPrice.toLocaleString("sr-RS")} RSD</span>
        </div>
        <Button type="submit" fullWidth size="lg" disabled={loading || items.length === 0}>
          {loading ? (
            <><Loader2 size={18} className="animate-spin" /> Slanje...</>
          ) : (
            <><Send size={18} /> Pošalji narudžbinu</>
          )}
        </Button>
        <p className="text-xs text-slate-400 text-center mt-3">
          Narudžbina će biti poslata na naš email. Kontaktiraćemo vas za potvrdu.
        </p>
      </div>
    </form>
  );
}
