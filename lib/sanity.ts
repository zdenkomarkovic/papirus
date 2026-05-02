import { createClient } from "@sanity/client";
import type { Product } from "@/types";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  useCdn: false,
  apiVersion: "2024-01-01",
});

export async function getProducts(): Promise<Product[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return MOCK_PRODUCTS;
  }
  return sanityClient.fetch(`
    *[_type == "product"] | order(_createdAt desc) {
      _id,
      name,
      "slug": slug.current,
      price,
      "category": category->name,
      "image": image.asset->url,
      description,
      inStock
    }
  `);
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return MOCK_PRODUCTS.filter((p) => p.category === category);
  }
  return sanityClient.fetch(`
    *[_type == "product" && category->name == $category] | order(_createdAt desc) {
      _id,
      name,
      "slug": slug.current,
      price,
      "category": category->name,
      "image": image.asset->url,
      description,
      inStock
    }
  `, { category });
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return MOCK_PRODUCTS.find((p) => p.slug === slug) ?? null;
  }
  const result = await sanityClient.fetch<Product[]>(`
    *[_type == "product" && slug.current == $slug] {
      _id,
      name,
      "slug": slug.current,
      price,
      "category": category->name,
      "image": image.asset->url,
      description,
      inStock
    }
  `, { slug });
  return result[0] ?? null;
}

export async function getCategories(): Promise<string[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return [...new Set(MOCK_PRODUCTS.map((p) => p.category))];
  }
  const result = await sanityClient.fetch<{ name: string }[]>(`
    *[_type == "category"] | order(name asc) { name }
  `);
  return result.map((c) => c.name);
}

const MOCK_PRODUCTS: Product[] = [
  {
    _id: "1",
    name: "Hemijska olovka Pilot",
    slug: "hemijska-olovka-pilot",
    price: 80,
    category: "Pisaći pribor",
    image: "/kancelarijski materijal.png",
    description: "Kvalitetna hemijska olovka za svakodnevnu upotrebu.",
    inStock: true,
  },
  {
    _id: "2",
    name: "Sveska A4 80 lista",
    slug: "sveska-a4",
    price: 150,
    category: "Papir i sveske",
    image: "/školski pribor.png",
    description: "Kvadratna sveska A4 formata, 80 listova.",
    inStock: true,
  },
  {
    _id: "3",
    name: "Flomasteri set 12 boja",
    slug: "flomasteri-12",
    price: 280,
    category: "Školski Pribor",
    image: "/školski pribor.png",
    description: "Set od 12 flomastera u raznim bojama.",
    inStock: true,
  },
  {
    _id: "4",
    name: "Registrator A4",
    slug: "registrator-a4",
    price: 220,
    category: "Kancelarijski Materijal",
    image: "/kancelarijski materijal.png",
    description: "Registrator A4 formata, širina 7.5cm.",
    inStock: true,
  },
  {
    _id: "5",
    name: "Selotejp providni",
    slug: "selotejp",
    price: 60,
    category: "Kancelarijski Materijal",
    image: "/kancelarijski materijal.png",
    description: "Providna selotejp traka 19mm x 33m.",
    inStock: true,
  },
  {
    _id: "6",
    name: "Geometrijski set",
    slug: "geometrijski-set",
    price: 350,
    category: "Školski Pribor",
    image: "/školski pribor.png",
    description: "Komplet geometrijskog pribora za učenike.",
    inStock: true,
  },
];
