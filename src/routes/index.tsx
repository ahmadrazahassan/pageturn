import { createFileRoute, Link } from "@tanstack/react-router";
import heroShelf from "@/assets/hero-shelf.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ReviewCard } from "@/components/review-card";
import { Newsletter } from "@/components/newsletter";
import { reviews } from "@/lib/reviews";
import { services } from "@/lib/services";
import { ServiceLogo } from "@/components/service-card";
import { AffiliateBanner } from "@/components/affiliate-banner";
import { serviceRoundups } from "@/lib/roundups";
import { versusPages } from "@/lib/versus";
import { seo, jsonLd, absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/seo";

const title = "PageTurn — Independent Audiobook Reviews & Narrator Guides";
const description =
  "Honest audiobook reviews with narrator notes, listening times and ratings. Reader-run, updated every weekend.";

export const Route = createFileRoute("/")({
  head: () => ({
    ...seo({ title, description, path: "/" }),
    scripts: [
      jsonLd([
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: SITE_NAME,
          description,
          url: absoluteUrl("/"),
          isPartOf: { "@id": `${SITE_URL}/#website` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          // Point the crawler at the hubs, so the homepage advertises the
          // site's four content types rather than just describing itself.
          hasPart: [
            { "@type": "WebPage", name: "Audiobook reviews", url: absoluteUrl("/reviews") },
            { "@type": "WebPage", name: "Best-of lists", url: absoluteUrl("/best") },
            { "@type": "WebPage", name: "Service comparisons", url: absoluteUrl("/compare") },
            { "@type": "WebPage", name: "Listening guides", url: absoluteUrl("/guides") },
          ],
        },
      ]),
    ],
  }),
  component: Index,
});

/**
 * Every tile used to point at /reviews, which wasted six internal links from
 * the strongest page on the site. Each now lands on the list that answers it.
 */
const browseTiles = [
  { label: "Best audiobooks", to: "/best/best-audiobooks", className: "bg-mint" },
  {
    label: "Thriller & mystery",
    to: "/best/best-thriller-and-mystery-audiobooks",
    className: "bg-peach",
  },
  { label: "Sci-fi", to: "/best/best-sci-fi-audiobooks", className: "bg-coral/30" },
  { label: "Memoir", to: "/best/best-memoir-audiobooks", className: "bg-lilac" },
  { label: "For beginners", to: "/best/best-audiobooks-for-beginners", className: "bg-butter" },
  { label: "Under 10 hours", to: "/best/best-short-audiobooks", className: "bg-soft/40" },
];

function Index() {
  const fresh = reviews.slice(0, 3);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-12 gap-10 items-center overflow-hidden">
        <div className="absolute -top-10 -right-6 w-56 h-56 bg-butter rounded-full animate-floaty" />
        <div className="absolute bottom-0 -left-10 w-44 h-44 bg-peach rounded-full animate-floaty-slow" />

        <div className="lg:col-span-7 relative z-10">
          <span className="inline-flex items-center gap-2 bg-mint px-4 py-1.5 rounded-full font-bold text-sm text-ink">
            <span className="w-2 h-2 rounded-full bg-coral" /> Independent Audio Reviews
          </span>
          <h1 className="mt-6 font-display font-bold text-5xl sm:text-6xl leading-[1.05]">
            Find your next <span className="text-coral">listen</span>, one happy{" "}
            <span className="text-soft">story</span> at a time.
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-xl leading-relaxed">
            PageTurn is a reader-run guide to the best audiobooks, narrators, and long lists worth
            your commute. We listen so you can pick the perfect voice.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/reviews"
              className="font-bold bg-coral text-coral-foreground px-7 py-3.5 rounded-full shadow-pastel hover:brightness-105 transition"
            >
              Start reading
            </Link>
            <Link
              to="/guides"
              className="font-bold bg-card border-2 border-border px-7 py-3.5 rounded-full hover:border-input transition"
            >
              Browse our guides
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm font-semibold text-ink/60">
            <span>{reviews.length} full reviews</span>
            <span className="w-1 h-1 rounded-full bg-ink/20" />
            <span>Narrator notes on every title</span>
            <span className="w-1 h-1 rounded-full bg-ink/20" />
            <span>Weekly digest</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative z-10">
          <img
            src={heroShelf}
            alt="A stack of pastel audiobook covers with plush headphones resting on top"
            width={1024}
            height={1280}
            className="w-full aspect-[4/5] object-cover rounded-[2.5rem]"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-4">
        <AffiliateBanner id="leaderboard" className="mx-auto max-w-3xl" />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl">Fresh on the shelf</h2>
            <p className="mt-2 text-ink/60">New reviews, updated every weekend.</p>
          </div>
          <Link
            to="/reviews"
            className="hidden sm:inline font-bold text-soft hover:text-ink transition-colors"
          >
            See all reviews
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {fresh.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-8">Browse by mood</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {browseTiles.map((tile) => (
            <Link
              key={tile.label}
              to={tile.to}
              className={`${tile.className} rounded-3xl p-5 font-display font-semibold text-lg hover:-translate-y-1 transition-transform`}
            >
              {tile.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl">Where to listen</h2>
            <p className="mt-2 text-ink/60">
              We paid for {services.length} audiobook services and tested each one. Prices, trials
              and whether you keep your books.
            </p>
          </div>
          <Link
            to="/compare"
            className="hidden sm:inline font-bold text-soft hover:text-ink transition-colors"
          >
            Compare all
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="bg-white/70 rounded-3xl p-5 flex items-center gap-3 shadow-pastel hover:-translate-y-1 transition-transform"
            >
              <ServiceLogo service={s} className="w-20 h-20 sm:w-24 sm:h-24" />
              <span className="min-w-0">
                <span className="block font-display font-bold leading-tight truncate">
                  {s.name}
                </span>
                <span className="block text-xs text-ink/50 font-body">{s.score}</span>
                <span className="mt-1.5 block text-xs font-body font-bold">
                  <span className="bg-peach/70 rounded-full px-2 py-0.5">{s.freeTrial}</span>
                </span>
                <span className="mt-1 block text-xs text-ink/60 font-body">then {s.price}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Homepage is the strongest page on the site; these are the pages that
          most need its authority. */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl">
              Deciding what to pay for
            </h2>
            <p className="mt-2 text-ink/60">
              Our tested rankings and the head-to-heads people ask about most.
            </p>
          </div>
          <Link
            to="/best"
            className="hidden sm:inline font-bold text-soft hover:text-ink transition-colors"
          >
            All lists
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {serviceRoundups.slice(0, 4).map((roundup) => (
            <Link
              key={roundup.slug}
              to="/best/$slug"
              params={{ slug: roundup.slug }}
              className="bg-white/70 rounded-3xl p-6 shadow-pastel hover:-translate-y-0.5 transition-transform"
            >
              <h3 className="font-display font-bold text-xl leading-snug">{roundup.h1}</h3>
              <p className="mt-2 font-body text-sm text-ink/65 leading-relaxed">
                {roundup.description}
              </p>
            </Link>
          ))}
        </div>

        <ul className="mt-5 flex flex-wrap gap-3">
          {versusPages.slice(0, 5).map((v) => (
            <li key={v.slug}>
              <Link
                to="/compare/$slug"
                params={{ slug: v.slug }}
                className="inline-flex bg-soft hover:bg-lilac/60 px-4 py-2.5 rounded-full font-body font-semibold text-sm transition-colors"
              >
                {v.h1}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <AffiliateBanner id="wide" className="mx-auto max-w-3xl" />
      </section>

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
