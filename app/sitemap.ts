import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getProducts } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/usluge`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/prodavnica`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  try {
    const products = await getProducts();
    const productPages: MetadataRoute.Sitemap = products.map((product) => ({
      url: `${SITE_URL}/prodavnica/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
    return [...staticPages, ...productPages];
  } catch {
    return staticPages;
  }
}
