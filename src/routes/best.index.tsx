import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Newsletter } from "@/components/newsletter";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { serviceRoundups, reviewRoundups, roundups, unresolvedPicks } from "@/lib/roundups";
import { seo, jsonLd, breadcrumbSchema, itemListSchema, type Crumb } from "@/lib/seo";

// Roundup picks reference reviews and services by slug string, which is exactly
// how the sitemap rotted last time. A pick pointing at a renamed slug renders as
// a silently shorter list, so surface it loudly in development instead.
if (import.meta.env.DEV) {
  const missing = unresolvedPicks();
  if (missing.length) {
    console.warn(
      `[roundups] ${missing.length} pick(s) reference a slug that no longer exists:\n  ` +
        missing.join("\n  "),
    );
  }
}

const title = "Best Audiobooks and Audiobook Services — Every List | PageTurn";
const description =
  "Our tested rankings: the best audiobook apps, the best Audible alternatives, the cheapest ways to listen, and the best audiobooks by genre and by occasion.";

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Best of", path: "/best" },
];

export const Route = createFileRoute("/best/")({
  head: () => ({
    ...seo({ title, description, path: "/best" }),
    scripts: [
      jsonLd([
        itemListSchema(
          "PageTurn best-of lists",
          roundups.map((r) => ({ name: r.h1, path: `/best/${r.slug}` })),
        ),
        breadcrumbSchema(crumbs),
      ]),
    ],
  }),
  component: BestIndex,
});

function RoundupCard({
  slug,
  heading,
  blurb,
  tint,
}: {
  slug: string;
  heading: string;
  blurb: string;
  tint: string;
}) {
  return (
    <li>
      <Link
        to="/best/$slug"
        params={{ slug }}
        className={`group flex h-full flex-col ${tint} rounded-[2rem] p-7 transition hover:-translate-y-1`}
      >
        <h3 className="font-display font-bold text-2xl leading-tight flex items-start gap-2">
          <span className="min-w-0">{heading}</span>
          <ArrowRight className="mt-1.5 w-5 h-5 shrink-0 transition-transform group-hover:translate-x-0.5" />
        </h3>
        <p className="mt-3 font-body text-[15px] leading-relaxed text-ink/70">{blurb}</p>
      </Link>
    </li>
  );
}

const serviceTints = ["bg-peach", "bg-mint", "bg-lilac", "bg-butter"];
const reviewTints = ["bg-mint", "bg-butter", "bg-peach", "bg-lilac", "bg-soft/40", "bg-coral/25"];

function BestIndex() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="max-w-6xl mx-auto px-6 pt-10 pb-6">
        <Breadcrumbs crumbs={crumbs} />
        <span className="mt-6 inline-flex items-center gap-2 bg-butter px-4 py-1.5 rounded-full font-bold text-sm">
          <span className="w-2 h-2 rounded-full bg-coral" /> {roundups.length} tested lists
        </span>
        <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl leading-tight max-w-3xl">
          Every list we have actually tested.
        </h1>
        <p className="mt-4 text-lg text-ink/70 max-w-2xl leading-relaxed font-body">
          Service rankings come from paid accounts we used for at least one complete audiobook.
          Audiobook rankings come from titles we listened to end to end. Nothing here is assembled
          from press releases, and nobody pays for a placement.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="font-display font-bold text-3xl">Choosing a service</h2>
        <p className="mt-2 font-body text-ink/60 max-w-2xl">
          Which app, which subscription, and how to spend less.
        </p>
        <ul className="mt-8 grid md:grid-cols-2 gap-5">
          {serviceRoundups.map((roundup, i) => (
            <RoundupCard
              key={roundup.slug}
              slug={roundup.slug}
              heading={roundup.h1}
              blurb={roundup.description}
              tint={serviceTints[i % serviceTints.length] ?? "bg-peach"}
            />
          ))}
        </ul>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="font-display font-bold text-3xl">Choosing what to listen to</h2>
        <p className="mt-2 font-body text-ink/60 max-w-2xl">
          Ranked from the audiobooks we have reviewed in full, by genre and by occasion.
        </p>
        <ul className="mt-8 grid md:grid-cols-2 gap-5">
          {reviewRoundups.map((roundup, i) => (
            <RoundupCard
              key={roundup.slug}
              slug={roundup.slug}
              heading={roundup.h1}
              blurb={roundup.description}
              tint={reviewTints[i % reviewTints.length] ?? "bg-mint"}
            />
          ))}
        </ul>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white/70 rounded-[2rem] p-8 shadow-pastel flex flex-wrap items-center justify-between gap-5">
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-2xl">
              Want the raw numbers instead of a ranking?
            </h2>
            <p className="mt-2 font-body text-ink/70 leading-relaxed">
              Our comparison table puts all twelve services side by side on price, free trial,
              catalogue, ownership and file format.
            </p>
          </div>
          <Link
            to="/compare"
            className="font-body font-bold bg-coral text-coral-foreground px-6 py-3.5 rounded-full hover:brightness-105 transition"
          >
            Open the comparison table
          </Link>
        </div>
      </section>

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
