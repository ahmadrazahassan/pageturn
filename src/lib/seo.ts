/**
 * Central SEO helpers.
 *
 * Every route builds its head tags through here so canonical URLs, Open Graph
 * and Twitter cards stay consistent. Before this existed each route hand-rolled
 * its own meta list and most of them silently shipped without an og:image.
 */

export const SITE_URL = "https://pageturn.cloud";
export const SITE_NAME = "PageTurn";
export const PUBLISHER = "PageTurn Media";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Absolute URL for a site-relative path. Schema.org and og:url both require absolute. */
export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type MetaTag = Record<string, string>;

export type SeoInput = {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/best/best-audiobook-apps". */
  path: string;
  image?: string;
  type?: "website" | "article";
  /** ISO date — emitted as article:published_time for article pages. */
  publishedTime?: string;
  modifiedTime?: string;
  /** Set true on thin or duplicate-risk pages we do not want indexed. */
  noindex?: boolean;
};

/**
 * Full meta tag set for a page. Returns the array TanStack Start's `head.meta`
 * expects, including the Open Graph and Twitter tags most routes were missing.
 */
export function buildMeta(input: SeoInput): MetaTag[] {
  const url = absoluteUrl(input.path);
  const image = input.image ?? DEFAULT_OG_IMAGE;

  const tags: MetaTag[] = [
    { title: input.title },
    { name: "description", content: input.description },

    { property: "og:title", content: input.title },
    { property: "og:description", content: input.description },
    { property: "og:type", content: input.type ?? "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: input.title },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_US" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: input.title },
    { name: "twitter:description", content: input.description },
    { name: "twitter:image", content: image },
  ];

  if (input.publishedTime) {
    tags.push({ property: "article:published_time", content: input.publishedTime });
  }
  if (input.modifiedTime) {
    tags.push({ property: "article:modified_time", content: input.modifiedTime });
  }
  if (input.noindex) {
    tags.push({ name: "robots", content: "noindex, follow" });
  }

  return tags;
}

/** Canonical link for a page. Always absolute, always self-referencing. */
export function canonical(path: string) {
  return [{ rel: "canonical", href: absoluteUrl(path) }];
}

/** Convenience: meta + canonical in one call, since they always travel together. */
export function seo(input: SeoInput) {
  return { meta: buildMeta(input), links: canonical(input.path) };
}

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/* ------------------------------------------------------------------ */

/** Wraps a schema object as the script entry TanStack Start's head expects. */
export function jsonLd(schema: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(schema) };
}

export type Crumb = { name: string; path: string };

/**
 * BreadcrumbList. The `item` value must be an absolute URL — the previous
 * version emitted "/" and "/services", which Google discards as invalid.
 */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export type Faq = { question: string; answer: string };

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function itemListSchema(name: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: PUBLISHER,
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
  description:
    "Independent, hands-on audiobook reviews and audiobook service comparisons, published by PageTurn Media.",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
};
