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

const title = "PageTurn — Independent Audiobook Reviews & Narrator Guides";
const description =
  "Honest audiobook reviews with narrator notes, listening times and ratings. Reader-run, updated every weekend.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pageturn.cloud/" },
      { property: "og:image", content: "https://pageturn.cloud/og-image.jpg" },
      { name: "twitter:image", content: "https://pageturn.cloud/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://pageturn.cloud/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "PageTurn",
          description,
          publisher: { "@type": "Organization", name: "PageTurn Media" },
        }),
      },
    ],
  }),
  component: Index,
});

const moods = [
  { label: "Romance", className: "bg-mint" },
  { label: "Mystery", className: "bg-peach" },
  { label: "History", className: "bg-lilac" },
  { label: "Self-Help", className: "bg-butter" },
  { label: "Sci-Fi", className: "bg-coral/30" },
  { label: "Business", className: "bg-soft/20" },
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
          {moods.map((mood) => (
            <Link
              key={mood.label}
              to="/reviews"
              className={`${mood.className} rounded-3xl p-5 font-display font-semibold text-lg hover:-translate-y-1 transition-transform`}
            >
              {mood.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl">Where to listen</h2>
            <p className="mt-2 text-ink/60">
              We paid for {services.length} audiobook services and tested each one. Prices, trials and
              whether you keep your books.
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
                <span className="block font-display font-bold leading-tight truncate">{s.name}</span>
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

      <section className="max-w-6xl mx-auto px-6 py-8">
        <AffiliateBanner id="wide" className="mx-auto max-w-3xl" />
      </section>

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
