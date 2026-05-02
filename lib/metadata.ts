import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
}

export function buildMetadata({
  title,
  description,
  image,
  path,
  noIndex = false,
  type = "website",
  publishedTime,
}: BuildMetadataOptions = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = path ? `${SITE_URL}${path}` : SITE_URL;
  const ogImage = image ?? `${SITE_URL}/logo.jpg`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "sr_RS",
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
