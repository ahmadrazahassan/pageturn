import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Newsletter } from "@/components/newsletter";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { RelatedLinks, type RelatedLink } from "@/components/related-links";
import { ServiceLogo } from "@/components/service-card";
import { AffiliateBanner } from "@/components/affiliate-banner";
import { getVersus, versusPages } from "@/lib/versus";
import { getService, type Service } from "@/lib/services";
import { roundupsForService } from "@/lib/roundups";
import {
  seo,
  jsonLd,
  breadcrumbSchema,
  faqSchema,
  PUBLISHER,
  absoluteUrl,
  type Crumb,
} from "@/lib/seo";

export const Route = createFileRoute("/compare/$slug")({
  loader: ({ params }) => {
    const versus = getVersus(params.slug);
    if (!versus) throw notFound();
    const a = getService(versus.a);
    const b = getService(versus.b);
    // A comparison referencing a service we no longer publish would render a
    // half-empty page, which is worse than a 404.
    if (!a || !b) throw notFound();
    return { versus, a, b };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Comparison unavailable — PageTurn" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { versus } = loaderData;
    const path = `/compare/${params.slug}`;
    const crumbs: Crumb[] = [
      { name: "Home", path: "/" },
      { name: "Compare", path: "/compare" },
      { name: versus.h1, path },
    ];

    return {
      ...seo({
        title: versus.title,
        description: versus.description,
        path,
        type: "article",
        publishedTime: versus.updatedISO,
        modifiedTime: versus.updatedISO,
      }),
      scripts: [
        jsonLd([
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: versus.h1,
            description: versus.description,
            datePublished: versus.updatedISO,
            dateModified: versus.updatedISO,
            mainEntityOfPage: absoluteUrl(path),
            author: { "@type": "Organization", name: PUBLISHER },
            publisher: { "@type": "Organization", name: PUBLISHER },
          },
          breadcrumbSchema(crumbs),
          faqSchema(versus.faqs),
        ]),
      ],
    };
  },
  component: VersusPage,
  notFoundComponent: VersusNotFound,
});

function VersusNotFound() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display font-bold text-4xl">We haven't run that comparison</h1>
        <p className="mt-4 text-ink/70 font-body">Here is every head-to-head we have published.</p>
        <Link
          to="/compare"
          className="mt-8 inline-flex font-bold bg-coral text-coral-foreground px-7 py-3.5 rounded-full"
        >
          All comparisons
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

/** Rows of the at-a-glance table. Pulled from service records so they never drift. */
const specRows: { label: string; get: (s: Service) => string }[] = [
  { label: "How it works", get: (s) => s.model },
  { label: "Price", get: (s) => s.price },
  { label: "Free trial", get: (s) => s.freeTrial },
  { label: "Catalogue", get: (s) => s.catalogue },
  { label: "Keep your books?", get: (s) => s.keepBooks },
  { label: "Files", get: (s) => s.drm },
  { label: "Where it works", get: (s) => s.countries },
  { label: "Our score", get: (s) => s.score },
];

function ServiceCta({ service }: { service: Service }) {
  return (
    <a
      href={service.url}
      target="_blank"
      rel={service.affiliate ? "sponsored noopener noreferrer" : "noopener noreferrer nofollow"}
      className="inline-flex items-center gap-2 font-body font-bold bg-coral text-coral-foreground px-6 py-3.5 rounded-full hover:brightness-105 transition"
    >
      Try {service.name} <ArrowUpRight className="w-4 h-4" />
    </a>
  );
}

function VersusPage() {
  const { versus, a, b } = Route.useLoaderData();
  const pair = [a, b];
  const affiliatePartner = pair.find((s) => s.affiliate);

  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: versus.h1, path: `/compare/${versus.slug}` },
  ];

  // Link out to the roundups these two services appear in, plus the other
  // comparisons involving either of them.
  const relatedRoundups = [...roundupsForService(a.slug), ...roundupsForService(b.slug)].filter(
    (r, i, all) => all.findIndex((x) => x.slug === r.slug) === i,
  );

  const otherComparisons = versusPages
    .filter((v) => v.slug !== versus.slug && [v.a, v.b].some((s) => s === a.slug || s === b.slug))
    .slice(0, 4);

  const related: RelatedLink[] = [
    ...relatedRoundups.slice(0, 2).map((r) => ({
      to: `/best/${r.slug}`,
      label: r.h1,
      blurb: r.description,
    })),
    ...otherComparisons.map((v) => ({
      to: `/compare/${v.slug}`,
      label: v.h1,
      blurb: v.description,
    })),
    { to: `/services/${a.slug}`, label: `Full ${a.name} review`, blurb: a.summary },
    { to: `/services/${b.slug}`, label: `Full ${b.name} review`, blurb: b.summary },
  ];

  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <article>
        <header className="max-w-4xl mx-auto px-6 pt-10 pb-6">
          <Breadcrumbs crumbs={crumbs} />

          <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl leading-tight">
            {versus.h1}
          </h1>
          <p className="mt-4 font-body text-sm text-ink/50">
            Updated {versus.updated} · Both services tested on paid accounts
          </p>

          {/* Logo pair */}
          <div className="mt-8 flex items-center gap-5 flex-wrap">
            <div className="flex items-center gap-3">
              <ServiceLogo service={a} className="w-16 h-16" />
              <span className="font-display font-bold text-xl">{a.name}</span>
            </div>
            <span className="font-display font-bold text-2xl text-coral">vs</span>
            <div className="flex items-center gap-3">
              <ServiceLogo service={b} className="w-16 h-16" />
              <span className="font-display font-bold text-xl">{b.name}</span>
            </div>
          </div>
        </header>

        {/* The direct answer, kept high on the page. */}
        <section className="max-w-4xl mx-auto px-6 pb-4">
          <div className="bg-butter rounded-[2rem] p-7 sm:p-9">
            <h2 className="font-display font-bold text-2xl">The short answer</h2>
            <p className="mt-4 font-body text-[17px] leading-[1.8] text-ink/85">
              {versus.shortAnswer}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {pair.map((service) => (
                <ServiceCta key={service.slug} service={service} />
              ))}
            </div>
            {affiliatePartner && (
              <p className="mt-4 font-body text-sm text-ink/55">
                The {affiliatePartner.name} link is an affiliate link — we may earn a commission at
                no extra cost to you, and it never changes a score or a placement.{" "}
                <Link to="/disclosure" className="underline underline-offset-2">
                  How we make money
                </Link>
                .
              </p>
            )}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-8 space-y-5">
          {versus.intro.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="font-body text-[17px] leading-[1.8] text-ink/80"
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* Side-by-side specs, straight from the service records. */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <h2 className="font-display font-bold text-3xl">Side by side</h2>
          <div className="mt-6 bg-white/70 rounded-3xl shadow-pastel overflow-x-auto">
            <table className="w-full text-left font-body text-sm min-w-[640px]">
              <caption className="sr-only">
                {a.name} and {b.name} compared on price, trial, catalogue and ownership
              </caption>
              <thead>
                <tr className="bg-soft">
                  <th scope="col" className="px-5 py-4 font-bold w-40">
                    &nbsp;
                  </th>
                  {pair.map((service) => (
                    <th key={service.slug} scope="col" className="px-5 py-4 font-bold">
                      {service.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specRows.map((row) => (
                  <tr key={row.label} className="border-t border-border align-top">
                    <th scope="row" className="px-5 py-4 font-bold text-ink/70">
                      {row.label}
                    </th>
                    {pair.map((service) => (
                      <td key={service.slug} className="px-5 py-4 text-ink/75">
                        {row.get(service)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 font-body text-sm text-ink/50">
            Prices are US list prices checked {versus.updated}. Always confirm on the provider's own
            page before subscribing.
          </p>
        </section>

        {/* Which one wins for which need. */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <h2 className="font-display font-bold text-3xl">Which one wins, and for what</h2>
          <ul className="mt-6 space-y-4">
            {versus.verdictRows.map((row) => {
              const winner = getService(row.winner);
              return (
                <li
                  key={row.need}
                  className="bg-white/70 rounded-3xl p-6 shadow-pastel flex gap-4 items-start"
                >
                  <span className="mt-1 grid place-items-center w-8 h-8 shrink-0 rounded-full bg-mint">
                    <Check className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display font-bold text-lg leading-snug">{row.need}</p>
                    <p className="mt-1 font-body font-bold text-coral">
                      {winner ? winner.name : row.winner}
                    </p>
                    <p className="mt-2 font-body text-[16px] leading-[1.75] text-ink/75">
                      {row.why}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-4">
          <AffiliateBanner id="wide" className="mx-auto max-w-2xl" />
        </section>

        {versus.sections.map((section) => (
          <section key={section.heading} className="max-w-4xl mx-auto px-6 py-8">
            <h2 className="font-display font-bold text-3xl leading-tight">{section.heading}</h2>
            <div className="mt-5 space-y-5">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="font-body text-[17px] leading-[1.8] text-ink/80"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/* Final CTA pair */}
        <section className="max-w-4xl mx-auto px-6 py-10">
          <div className="grid sm:grid-cols-2 gap-5">
            {pair.map((service) => (
              <div key={service.slug} className="bg-white/80 rounded-[2rem] p-7 shadow-pastel">
                <ServiceLogo service={service} className="w-16 h-16" />
                <h3 className="mt-4 font-display font-bold text-2xl">{service.name}</h3>
                <p className="mt-2 font-body text-ink/70 leading-relaxed">{service.summary}</p>
                <dl className="mt-4 font-body text-sm space-y-1 text-ink/70">
                  <div className="flex gap-2">
                    <dt className="font-bold">Trial:</dt>
                    <dd>{service.freeTrial}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-bold">Then:</dt>
                    <dd>{service.price}</dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-3">
                  <ServiceCta service={service} />
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="font-body font-bold bg-soft px-5 py-3.5 rounded-full hover:bg-lilac/60 transition-colors"
                  >
                    Read the review
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <FaqSection faqs={versus.faqs} />
      </article>

      <RelatedLinks links={related} heading="Related comparisons and guides" />

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
