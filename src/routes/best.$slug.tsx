import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Newsletter } from "@/components/newsletter";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { RelatedLinks, type RelatedLink } from "@/components/related-links";
import { ReviewCard } from "@/components/review-card";
import { ServiceLogo } from "@/components/service-card";
import { AffiliateBanner } from "@/components/affiliate-banner";
import { getRoundup, roundups, additionalReviewsFor, type Roundup } from "@/lib/roundups";
import { getService } from "@/lib/services";
import { getReview } from "@/lib/reviews";
import { versusForService } from "@/lib/versus";
import {
  seo,
  jsonLd,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  PUBLISHER,
  absoluteUrl,
  type Crumb,
} from "@/lib/seo";

export const Route = createFileRoute("/best/$slug")({
  loader: ({ params }) => {
    const roundup = getRoundup(params.slug);
    if (!roundup) throw notFound();
    return { roundup };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "List unavailable — PageTurn" }, { name: "robots", content: "noindex" }],
      };
    }
    const { roundup } = loaderData;
    const path = `/best/${params.slug}`;
    const crumbs: Crumb[] = [
      { name: "Home", path: "/" },
      { name: "Best of", path: "/best" },
      { name: roundup.h1, path },
    ];

    // ItemList entries point at the underlying review or service page, which is
    // where the detail actually lives.
    const listItems = roundup.picks.flatMap((pick) => {
      if (roundup.kind === "service") {
        const service = getService(pick.ref);
        return service ? [{ name: service.name, path: `/services/${service.slug}` }] : [];
      }
      const review = getReview(pick.ref);
      return review ? [{ name: review.title, path: `/reviews/${review.slug}` }] : [];
    });

    return {
      ...seo({
        title: roundup.title,
        description: roundup.description,
        path,
        type: "article",
        publishedTime: roundup.updatedISO,
        modifiedTime: roundup.updatedISO,
      }),
      scripts: [
        jsonLd([
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: roundup.h1,
            description: roundup.description,
            datePublished: roundup.updatedISO,
            dateModified: roundup.updatedISO,
            mainEntityOfPage: absoluteUrl(path),
            author: { "@type": "Organization", name: PUBLISHER },
            publisher: { "@type": "Organization", name: PUBLISHER },
          },
          itemListSchema(roundup.h1, listItems),
          breadcrumbSchema(crumbs),
          faqSchema(roundup.faqs),
        ]),
      ],
    };
  },
  component: RoundupPage,
  notFoundComponent: RoundupNotFound,
});

function RoundupNotFound() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display font-bold text-4xl">We haven't published that list</h1>
        <p className="mt-4 text-ink/70 font-body">Here is every roundup we have.</p>
        <Link
          to="/best"
          className="mt-8 inline-flex font-bold bg-coral text-coral-foreground px-7 py-3.5 rounded-full"
        >
          All best-of lists
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

/** One numbered entry in a service roundup. */
function ServicePick({ rank, pick }: { rank: number; pick: Roundup["picks"][number] }) {
  const service = getService(pick.ref);
  if (!service) return null;

  return (
    <li className="bg-white/75 rounded-[2rem] p-6 sm:p-8 shadow-pastel">
      <div className="flex items-start gap-4 flex-wrap">
        <span className="grid place-items-center w-11 h-11 shrink-0 rounded-full bg-coral text-coral-foreground font-display font-bold text-lg">
          {rank}
        </span>
        <ServiceLogo service={service} className="w-16 h-16" />
        <div className="min-w-0 flex-1">
          <span className="inline-block bg-butter px-3 py-1 rounded-full font-body font-bold text-xs">
            {pick.award}
          </span>
          <h3 className="mt-2 font-display font-bold text-2xl leading-tight">
            <Link
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="hover:text-coral transition-colors"
            >
              {service.name}
            </Link>
          </h3>
          <p className="mt-1 font-body text-sm text-ink/55">
            {service.price} · Trial: {service.freeTrial} · Our score {service.score}
            {service.affiliate && " · Affiliate partner"}
          </p>
        </div>
      </div>

      <p className="mt-5 font-body text-[17px] leading-[1.8] text-ink/80">{pick.blurb}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={service.url}
          target="_blank"
          rel={service.affiliate ? "sponsored noopener noreferrer" : "noopener noreferrer nofollow"}
          className="inline-flex items-center gap-2 font-body font-bold bg-coral text-coral-foreground px-5 py-3 rounded-full hover:brightness-105 transition"
        >
          Visit {service.name} <ArrowUpRight className="w-4 h-4" />
        </a>
        <Link
          to="/services/$slug"
          params={{ slug: service.slug }}
          className="font-body font-bold bg-soft px-5 py-3 rounded-full hover:bg-lilac/60 transition-colors"
        >
          Read our full review
        </Link>
      </div>
    </li>
  );
}

/** One numbered entry in an audiobook roundup. */
function ReviewPick({ rank, pick }: { rank: number; pick: Roundup["picks"][number] }) {
  const review = getReview(pick.ref);
  if (!review) return null;

  return (
    <li className="bg-white/75 rounded-[2rem] p-6 sm:p-8 shadow-pastel">
      <div className="flex gap-5 flex-wrap sm:flex-nowrap">
        <Link
          to="/reviews/$slug"
          params={{ slug: review.slug }}
          className="shrink-0"
          aria-label={`Read our review of ${review.title}`}
        >
          <img
            src={review.coverSmall}
            alt={`Cover art for the audiobook ${review.title} by ${review.author}`}
            width={120}
            height={180}
            loading="lazy"
            decoding="async"
            className="w-[120px] aspect-[2/3] object-contain bg-soft rounded-2xl"
          />
        </Link>

        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="grid place-items-center w-9 h-9 shrink-0 rounded-full bg-coral text-coral-foreground font-display font-bold">
              {rank}
            </span>
            <span className="inline-block bg-butter px-3 py-1 rounded-full font-body font-bold text-xs">
              {pick.award}
            </span>
          </div>
          <h3 className="mt-3 font-display font-bold text-2xl leading-tight">
            <Link
              to="/reviews/$slug"
              params={{ slug: review.slug }}
              className="hover:text-coral transition-colors"
            >
              {review.title}
            </Link>
          </h3>
          <p className="mt-1 font-body text-sm text-ink/55">
            {review.author} · Narrated by {review.narrator} · {review.length} · {review.score}
          </p>
          <p className="mt-4 font-body text-[17px] leading-[1.8] text-ink/80">{pick.blurb}</p>
          <Link
            to="/reviews/$slug"
            params={{ slug: review.slug }}
            className="mt-5 inline-flex font-body font-bold bg-soft px-5 py-3 rounded-full hover:bg-lilac/60 transition-colors"
          >
            Read the full review
          </Link>
        </div>
      </div>
    </li>
  );
}

function RoundupPage() {
  const { roundup } = Route.useLoaderData();
  const alsoReviewed = additionalReviewsFor(roundup);

  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Best of", path: "/best" },
    { name: roundup.h1, path: `/best/${roundup.slug}` },
  ];

  // Service roundups feed the comparison pages; audiobook roundups feed the
  // other roundups. Both link back to the hub.
  const related: RelatedLink[] =
    roundup.kind === "service"
      ? [
          ...roundup.picks
            .flatMap((p) => versusForService(p.ref))
            .filter((v, i, all) => all.findIndex((x) => x.slug === v.slug) === i)
            .slice(0, 4)
            .map((v) => ({
              to: `/compare/${v.slug}`,
              label: v.h1,
              blurb: v.description,
            })),
          {
            to: "/compare",
            label: "All 12 services in one table",
            blurb: "Price, trial, catalogue and ownership side by side.",
          },
        ]
      : roundups
          .filter((r) => r.slug !== roundup.slug && r.kind === "review")
          .slice(0, 4)
          .map((r) => ({ to: `/best/${r.slug}`, label: r.h1, blurb: r.description }));

  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <article>
        <header className="max-w-4xl mx-auto px-6 pt-10 pb-6">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl leading-tight">
            {roundup.h1}
          </h1>
          <p className="mt-4 font-body text-sm text-ink/50">
            Updated {roundup.updated} ·{" "}
            {roundup.kind === "service"
              ? "Every service tested on a paid account"
              : "Every title listened to in full"}
          </p>
        </header>

        <section className="max-w-4xl mx-auto px-6 pb-4">
          <div className="bg-butter rounded-[2rem] p-7 sm:p-9">
            <h2 className="font-display font-bold text-2xl">The short answer</h2>
            <p className="mt-4 font-body text-[17px] leading-[1.8] text-ink/85">
              {roundup.shortAnswer}
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-8 space-y-5">
          {roundup.intro.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="font-body text-[17px] leading-[1.8] text-ink/80"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <section className="max-w-4xl mx-auto px-6 py-6">
          <ol className="space-y-6">
            {roundup.picks.map((pick, i) =>
              roundup.kind === "service" ? (
                <ServicePick key={pick.ref} rank={i + 1} pick={pick} />
              ) : (
                <ReviewPick key={pick.ref} rank={i + 1} pick={pick} />
              ),
            )}
          </ol>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-6">
          <AffiliateBanner id="wide" className="mx-auto max-w-2xl" />
        </section>

        {alsoReviewed.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 py-10">
            <h2 className="font-display font-bold text-3xl">Also reviewed in this category</h2>
            <p className="mt-2 font-body text-ink/60 max-w-2xl">
              Titles we have listened to in full that did not make the ranked list above.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {alsoReviewed.map((review) => (
                <ReviewCard key={review.slug} review={review} />
              ))}
            </div>
          </section>
        )}

        {/* Methodology — the part that separates a tested list from a scraped one. */}
        <section className="max-w-4xl mx-auto px-6 py-10">
          <div className="bg-mint/60 rounded-[2rem] p-7 sm:p-9">
            <h2 className="font-display font-bold text-3xl">How we chose</h2>
            <div className="mt-5 space-y-4">
              {roundup.howWeChose.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="font-body text-[17px] leading-[1.8] text-ink/80"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-6 font-body text-sm text-ink/60">
              <Link to="/disclosure" className="underline underline-offset-2">
                How PageTurn makes money
              </Link>{" "}
              ·{" "}
              <Link to="/about" className="underline underline-offset-2">
                Who writes these
              </Link>
            </p>
          </div>
        </section>

        <FaqSection faqs={roundup.faqs} />
      </article>

      <RelatedLinks links={related} heading="Where to go next" />

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
