import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, X, Star, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Newsletter } from "@/components/newsletter";
import { ServiceLogo, ServiceCard } from "@/components/service-card";
import { PricingHighlight } from "@/components/pricing-highlight";
import { getService, services, headToHeads } from "@/lib/services";
import { AffiliateBanner } from "@/components/affiliate-banner";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service unavailable — PageTurn" }, { name: "robots", content: "noindex" }],
      };
    }
    const s = loaderData.service;
    const title = `${s.name} Review ${new Date(s.reviewedOnISO).getFullYear()} — Price, Catalogue & Verdict | PageTurn`;
    const description = `${s.summary} ${s.price}. Free trial: ${s.freeTrial}. Rated ${s.score} by PageTurn.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://pageturn.cloud/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `https://pageturn.cloud/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Review",
              headline: `${s.name} review`,
              datePublished: s.reviewedOnISO,
              author: { "@type": "Person", name: s.reviewer },
              publisher: { "@type": "Organization", name: "PageTurn Media" },
              reviewRating: { "@type": "Rating", ratingValue: s.rating, bestRating: 5, worstRating: 1 },
              itemReviewed: {
                "@type": "Service",
                name: s.name,
                url: s.url,
                provider: { "@type": "Organization", name: s.company },
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
                { "@type": "ListItem", position: 3, name: s.name, item: `/services/${s.slug}` },
              ],
            },
          ]),
        },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
});

function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display font-bold text-4xl">We haven't reviewed that one yet</h1>
        <p className="mt-4 text-ink/70 font-body">Here is everything we have tested so far.</p>
        <Link
          to="/services"
          className="inline-block mt-8 font-body font-bold bg-lilac px-6 py-3 rounded-full hover:bg-lilac/70 transition-colors"
        >
          All services
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const facts: [string, string][] = [
    ["How it works", s.model],
    ["Price", s.price],
    ["Free trial", s.freeTrial],
    ["Catalogue", s.catalogue],
    ["Do you keep books?", s.keepBooks],
    ["Offline listening", s.offline],
    ["Devices", s.devices],
    ["File restrictions", s.drm],
    ["Where it works", s.countries],
  ];
  const related = services.filter((o) => o.slug !== s.slug).slice(0, 3);
  const matchups = headToHeads.filter((h) => h.slugs.includes(s.slug));

  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 pt-8 text-sm font-body text-ink/50">
        <Link to="/" className="hover:text-ink">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/services" className="hover:text-ink">
          Services
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink/70">{s.name}</span>
      </nav>

      <header className="max-w-5xl mx-auto px-6 pt-8 pb-4">
        <div className="flex items-start gap-5 flex-wrap">
          <ServiceLogo service={s} className="w-24 h-24 sm:w-28 sm:h-28" />
          <div className="min-w-0">
            <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight">{s.name} review</h1>
            <p className="mt-3 text-lg text-ink/70 font-body max-w-2xl">{s.tagline}</p>
            <p className="mt-3 text-sm text-ink/50 font-body">
              By {s.reviewer} · Tested and updated {s.reviewedOn} · {s.company}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 bg-butter px-5 py-2.5 rounded-full font-bold shrink-0">
            <Star className="w-4 h-4" /> {s.score}
          </span>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={s.url}
            target="_blank"
            rel={s.affiliate ? "sponsored noopener noreferrer" : "noopener noreferrer nofollow"}
            className="inline-flex items-center gap-2 font-body font-bold bg-coral text-coral-foreground px-6 py-3 rounded-full hover:bg-coral/90 transition-colors"
          >
            Visit {s.domain} <ArrowUpRight className="w-4 h-4" />
          </a>
          <Link
            to="/compare"
            className="font-body font-bold bg-soft px-6 py-3 rounded-full hover:bg-lilac/60 transition-colors"
          >
            Compare with the others
          </Link>
        </div>
        <p className="mt-3 text-sm text-ink/50 font-body">
          {s.affiliate ? (
            <>
              Affiliate link — PageTurn may earn a commission if you subscribe, at no cost to you. It
              never changes our score.{" "}
              <Link to="/disclosure" className="underline underline-offset-2">
                Read our disclosure
              </Link>
              .
            </>
          ) : (
            <>Not an affiliate link. We earn nothing if you sign up here.</>
          )}
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 pt-4 pb-2">
        <PricingHighlight service={s} />
      </section>

      {s.affiliate && (
        <section className="max-w-5xl mx-auto px-6 pt-6">
          <AffiliateBanner id="landscape" className="mx-auto max-w-[480px]" />
        </section>
      )}

      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white/70 rounded-3xl p-7 shadow-pastel">
          <h2 className="font-display font-bold text-2xl">The short version</h2>
          <p className="mt-3 text-lg text-ink/80 font-body leading-relaxed">{s.summary}</p>
          <dl className="mt-6 grid sm:grid-cols-2 gap-3 text-sm font-body">
            {facts.map(([label, value], i) => (
              <div key={label} className={`rounded-2xl px-4 py-3 ${i % 2 === 0 ? "bg-mint/50" : "bg-peach/50"}`}>
                <dt className="text-ink/50">{label}</dt>
                <dd className="font-bold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-6">
        <div className="bg-mint/60 rounded-3xl p-7">
          <h2 className="font-display font-bold text-2xl">What we liked</h2>
          <ul className="mt-4 space-y-3 font-body">
            {s.pros.map((p) => (
              <li key={p} className="flex gap-3">
                <Check className="w-5 h-5 shrink-0 mt-0.5" /> <span className="text-ink/80">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-peach/60 rounded-3xl p-7">
          <h2 className="font-display font-bold text-2xl">What held it back</h2>
          <ul className="mt-4 space-y-3 font-body">
            {s.cons.map((c) => (
              <li key={c} className="flex gap-3">
                <X className="w-5 h-5 shrink-0 mt-0.5" /> <span className="text-ink/80">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="font-display font-bold text-3xl">How it felt to use</h2>
        {s.body.map((para) => (
          <p key={para.slice(0, 24)} className="mt-5 text-lg text-ink/80 font-body leading-relaxed">
            {para}
          </p>
        ))}

        <h2 className="mt-12 font-display font-bold text-3xl">Best for</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {s.bestFor.map((b) => (
            <li key={b} className="bg-lilac/60 px-4 py-2 rounded-full font-body font-semibold text-sm">
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-10 bg-butter/70 rounded-3xl p-7">
          <h2 className="font-display font-bold text-2xl">Our verdict</h2>
          <p className="mt-3 text-lg text-ink/80 font-body leading-relaxed">{s.verdict}</p>
        </div>
      </section>

      {matchups.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 py-8">
          <h2 className="font-display font-bold text-3xl">Head to head</h2>
          <div className="mt-6 space-y-5">
            {matchups.map((m) => (
              <div key={m.question} className="bg-white/70 rounded-3xl p-6 shadow-pastel">
                <h3 className="font-display font-bold text-xl">{m.question}</h3>
                <p className="mt-2 text-ink/75 font-body leading-relaxed">{m.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-display font-bold text-3xl">Other services we tested</h2>
        <div className="mt-7 grid md:grid-cols-3 gap-6">
          {related.map((o) => (
            <ServiceCard key={o.slug} service={o} />
          ))}
        </div>
      </section>

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
