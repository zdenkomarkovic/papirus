import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getProductBySlug, getProducts } from "@/lib/sanity";
import { buildMetadata } from "@/lib/metadata";
import { ProductDetail } from "./ProductDetail";
import type { PageParams } from "@/types";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageParams<{ slug: string }>) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.name,
    description: product.description ?? `${product.name} – Papirus STR`,
  });
}

export default async function ProductPage({ params }: PageParams<{ slug: string }>) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-primary-800 text-white py-6">
        <div className="max-w-5xl mx-auto px-4">
          <Link
            href="/prodavnica"
            className="inline-flex items-center gap-1 text-primary-200 hover:text-white transition-colors text-sm"
          >
            <ChevronLeft size={16} />
            Nazad na prodavnicu
          </Link>
        </div>
      </div>
      <ProductDetail product={product} />
    </div>
  );
}
