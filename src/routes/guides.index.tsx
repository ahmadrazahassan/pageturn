import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Newsletter } from "@/components/newsletter";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { guides } from "@/lib/guides";
import { seo, jsonLd, breadcrumbSchema, itemListSchema, type Crumb } from "@/lib/seo";

const title = "Audiobook Listening Guides — How to Choose Well | PageTurn";
const description =
  "Practical guides to listening: judging a narrator from a sample, matching running time to your week, where to start in each genre, listening free, and who really owns your books.";

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Guides", path: "/guides" },
];

export const Route = createFileRoute("/guides/")({
  head: () => ({
    ...seo({ title, description, path: "/guides" }),
    scripts: [
      jsonLd([
        itemListSchema(
          "PageTurn audiobook listening guides",
          guides.map((g) => ({ name: g.h1, path: `/guides/${g.slug}` })),
        ),
        breadcrumbSchema(crumbs),
      ]),
    ],
  }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="max-w-6xl mx-auto px-6 pt-10 pb-6">
        <Breadcrumbs crumbs={crumbs} />
        <span className="mt-6 inline-flex items-center gap-2 bg-lilac px-4 py-1.5 rounded-full font-bold text-sm">
          <span className="w-2 h-2 rounded-full bg-coral" /> {guides.length} listening guides
        </span>
        <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl leading-tight">
          Learn to pick well, not just pick fast.
        </h1>
        <p className="mt-4 text-lg text-ink/70 max-w-2xl leading-relaxed font-body">
          Everything here comes out of listening to books we did not enjoy. These are the checks we
          now run before committing ten hours to a title — and the things about pricing, ownership
          and free access that nobody explains when you sign up.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <ul className="grid md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link
                to="/guides/$slug"
                params={{ slug: guide.slug }}
                className={`group flex h-full flex-col ${guide.tint} rounded-[2.5rem] p-8 transition hover:-translate-y-1`}
              >
                <h2 className="font-display font-bold text-2xl sm:text-3xl leading-tight flex items-start gap-2">
                  <span className="min-w-0">{guide.h1}</span>
                  <ArrowRight className="mt-2 w-5 h-5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </h2>
                <p className="mt-4 font-body text-[16px] leading-relaxed text-ink/75">
                  {guide.summary}
                </p>
                <span className="mt-5 font-body text-xs text-ink/50">
                  Updated {guide.updated} · {guide.sections.length} sections
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white/70 rounded-[2rem] p-8 shadow-pastel flex flex-wrap items-center justify-between gap-5">
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-2xl">See the checks applied</h2>
            <p className="mt-2 font-body text-ink/70 leading-relaxed">
              Every review on PageTurn scores the narration separately from the writing, using
              exactly the tests in these guides.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/reviews"
              className="font-body font-bold bg-coral text-coral-foreground px-6 py-3.5 rounded-full hover:brightness-105 transition"
            >
              Read our reviews
            </Link>
            <Link
              to="/best"
              className="font-body font-bold bg-soft px-6 py-3.5 rounded-full hover:bg-lilac/60 transition-colors"
            >
              Browse the best-of lists
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
