"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { clsx } from "clsx";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  return (
    <header className="bg-primary-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-end gap-6 py-1.5 border-b border-primary-700 text-sm text-primary-200">
          <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={13} />
            {COMPANY.phone}
          </a>
          <a href={`tel:${COMPANY.phone2.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={13} />
            {COMPANY.phone2}
          </a>
          <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
            {COMPANY.email}
          </a>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpg" alt="Papirus logo" width={140} height={50} className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary-700 text-white"
                    : "text-primary-100 hover:bg-primary-700 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart + Mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/korpa"
              className="relative flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <ShoppingCart size={20} />
              <span className="hidden sm:inline text-sm font-medium">Korpa</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-primary-700 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Meni"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-primary-700 pt-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary-700 text-white"
                    : "text-primary-100 hover:bg-primary-700"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-primary-700 space-y-1 text-sm text-primary-200">
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 px-4 py-2">
                <Phone size={14} /> {COMPANY.phone}
              </a>
              <a href={`tel:${COMPANY.phone2.replace(/\s/g, "")}`} className="flex items-center gap-2 px-4 py-2">
                <Phone size={14} /> {COMPANY.phone2}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
