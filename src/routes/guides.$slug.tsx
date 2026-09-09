import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Newsletter } from "@/components/newsletter";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { RelatedLinks, type RelatedLink } from "@/components/related-links";
import { AffiliateBanner } from "@/components/affiliate-banner";
import { getGuide, guides } from "@/lib/guides";
import { reviewRoundups } from "@/lib/roundups";
import {
  seo,
  jsonLd,
  breadcrumbSchema,
  faqSchema,
  PUBLISHER,
  absoluteUrl,
  type Crumb,
} from "@/lib/seo";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    return { guide };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Guide unavailable — PageTurn" }, { name: "robots", content: "noindex" }],
      };
    }
    const { guide } = loaderData;
    const path = `/guides/${params.slug}`;
    const crumbs: Crumb[] = [
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides" },
      { name: guide.h1, path },
    ];

    return {
      ...seo({
        title: guide.title,
        description: guide.description,
        path,
        type: "article",
        publishedTime: guide.updatedISO,
        modifiedTime: guide.updatedISO,
      }),
      scripts: [
        jsonLd([
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: guide.h1,
            description: guide.description,
            datePublished: guide.updatedISO,
            dateModified: guide.updatedISO,
            mainEntityOfPage: absoluteUrl(path),
            publisher: { "@type": "Organization", name: PUBLISHER },
            step: guide.sections.map((section, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: section.heading,
              text: section.paragraphs[0],
              url: `${absoluteUrl(path)}#${slugifyHeading(section.heading)}`,
            })),
          },
          breadcrumbSchema(crumbs),
          faqSchema(guide.faqs),
        ]),
      ],
    };
  },
  component: GuideDetail,
  notFoundComponent: GuideNotFound,
});

function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function GuideNotFound() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display font-bold text-4xl">We haven't written that guide</h1>
        <p className="mt-4 text-ink/70 font-body">Here is everything we have published so far.</p>
        <Link
          to="/guides"
          className="mt-8 inline-flex font-bold bg-coral text-coral-foreground px-7 py-3.5 rounded-full"
        >
          All guides
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function GuideDetail() {
  const { guide } = Route.useLoaderData();

  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: guide.h1, path: `/guides/${guide.slug}` },
  ];

  const related: RelatedLink[] = [
    ...guides
      .filter((g) => g.slug !== guide.slug)
      .slice(0, 3)
      .map((g) => ({ to: `/guides/${g.slug}`, label: g.h1, blurb: g.summary })),
    ...reviewRoundups.slice(0, 1).map((r) => ({
      to: `/best/${r.slug}`,
      label: r.h1,
      blurb: r.description,
    })),
  ];

  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <article>
        <header className={`${guide.tint}`}>
          <div className="max-w-3xl mx-auto px-6 pt-10 pb-12">
            <Breadcrumbs crumbs={crumbs} />
            <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl leading-tight">
              {guide.h1}
            </h1>
            <p className="mt-4 font-body text-sm text-ink/55">Updated {guide.updated}</p>
            <p className="mt-6 font-body text-[18px] leading-[1.8] text-ink/85">
              {guide.shortAnswer}
            </p>
          </div>
        </header>

        {/* On-page contents — helps long guides and gives Google anchor targets. */}
        <nav aria-label="On this page" className="max-w-3xl mx-auto px-6 pt-10">
          <h2 className="font-body font-bold text-xs uppercase tracking-widest text-ink/45">
            On this page
          </h2>
          <ul className="mt-3 space-y-1.5">
            {guide.sections.map((section) => (
              <li key={section.heading}>
                <a
                  href={`#${slugifyHeading(section.heading)}`}
                  className="font-body text-[15px] text-ink/70 hover:text-coral underline-offset-2 hover:underline transition-colors"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {guide.sections.map((section) => (
          <section
            key={section.heading}
            id={slugifyHeading(section.heading)}
            className="max-w-3xl mx-auto px-6 py-8 scroll-mt-28"
          >
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

        <section className="max-w-3xl mx-auto px-6 py-6">
          <AffiliateBanner id="wide" className="mx-auto max-w-2xl" />
        </section>

        <FaqSection faqs={guide.faqs} />
      </article>

      <RelatedLinks links={related} heading="More listening guides" />

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
