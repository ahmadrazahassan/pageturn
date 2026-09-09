import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Newsletter } from "@/components/newsletter";
import { ServiceCard } from "@/components/service-card";
import { services, comparisonGroups, getService } from "@/lib/services";

const title = "Audiobook Services Reviewed & Compared — PageTurn";
const description =
  "Independent reviews of 12 audiobook services — Audiobooks.com, Audible, Libro.fm, Everand, Chirp, Kobo, Spotify, Storytel, Apple Books, Downpour, AudiobookSTORE and Libby.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pageturn.cloud/services" },
    ],
    links: [{ rel: "canonical", href: "https://pageturn.cloud/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Audiobook services reviewed by PageTurn",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            url: `/services/${s.slug}`,
          })),
        }),
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="max-w-6xl mx-auto px-6 pt-14 pb-6">
        <span className="inline-flex items-center gap-2 bg-butter px-4 py-1.5 rounded-full font-bold text-sm">
          <span className="w-2 h-2 rounded-full bg-coral" /> 12 services tested
        </span>
        <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl leading-tight max-w-3xl">
          Where to listen: every audiobook service, reviewed side by side.
        </h1>
        <p className="mt-4 text-lg text-ink/70 max-w-2xl leading-relaxed font-body">
          We paid for each of these accounts, listened through at least one full book on every one,
          and cancelled the ones we did not keep. Prices are the US list price at the time of
          testing.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/compare"
            className="font-body font-bold bg-coral text-coral-foreground px-6 py-3 rounded-full hover:bg-coral/90 transition-colors"
          >
            Open the comparison table
          </Link>
          <Link
            to="/disclosure"
            className="font-body font-bold bg-soft px-6 py-3 rounded-full hover:bg-lilac/60 transition-colors"
          >
            How we make money
          </Link>
        </div>
      </section>

      {comparisonGroups.map((group) => (
        <section key={group.title} className="max-w-6xl mx-auto px-6 py-10">
          <h2 className="font-display font-bold text-3xl">{group.title}</h2>
          <p className="mt-2 text-ink/60 font-body max-w-2xl">{group.blurb}</p>
          <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.slugs.map((slug) => {
              const service = getService(slug);
              return service ? <ServiceCard key={slug} service={service} /> : null;
            })}
          </div>
        </section>
      ))}

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
