import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ReviewCard } from "@/components/review-card";
import { AFFILIATE_URL, getReview, reviews } from "@/lib/reviews";
import { getLongform, longformWordCount } from "@/lib/longform";
import { PricingHighlight } from "@/components/pricing-highlight";
import { getService } from "@/lib/services";
import { AffiliateBanner } from "@/components/affiliate-banner";
import { RelatedLinks, type RelatedLink } from "@/components/related-links";
import { roundupsForReview } from "@/lib/roundups";
import { seo, jsonLd, breadcrumbSchema, absoluteUrl, PUBLISHER } from "@/lib/seo";

/**
 * "16h 10m" -> "PT16H10M" for schema.org `duration`, which requires ISO 8601.
 * Returns undefined rather than a malformed value if the shape is unexpected.
 */
function isoDuration(length: string): string | undefined {
  const match = length.match(/(?:(\d+)h)?\s*(?:(\d+)m)?/);
  if (!match) return undefined;
  const [, hours, minutes] = match;
  if (!hours && !minutes) return undefined;
  return `PT${hours ? `${hours}H` : ""}${minutes ? `${minutes}M` : ""}`;
}

export const Route = createFileRoute("/reviews/$slug")({
  loader: ({ params }) => {
    const review = getReview(params.slug);
    if (!review) throw notFound();
    return { review };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Review unavailable — PageTurn" }, { name: "robots", content: "noindex" }],
      };
    }
    const r = loaderData.review;
    const path = `/reviews/${params.slug}`;
    const title = `${r.title} by ${r.author} — Audiobook Review | PageTurn`;
    const description = `${r.excerpt} Narrated by ${r.narrator}. ${r.length}, rated ${r.score}.`;
    return {
      ...seo({
        title,
        description,
        path,
        type: "article",
        // The cover is a far better share card than the generic site image.
        image: r.cover,
        publishedTime: r.dateISO,
        modifiedTime: r.dateISO,
      }),
      scripts: [
        jsonLd([
          {
            "@context": "https://schema.org",
            "@type": "Review",
            headline: r.title,
            datePublished: r.dateISO,
            dateModified: r.dateISO,
            mainEntityOfPage: absoluteUrl(path),
            author: { "@type": "Person", name: r.reviewer },
            publisher: { "@type": "Organization", name: PUBLISHER },
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
              bestRating: 5,
              worstRating: 1,
            },
            itemReviewed: {
              "@type": "Audiobook",
              name: r.title,
              image: r.cover,
              isbn: r.isbn,
              bookFormat: "https://schema.org/AudiobookFormat",
              duration: isoDuration(r.length),
              author: { "@type": "Person", name: r.author },
              readBy: { "@type": "Person", name: r.narrator },
            },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Reviews", path: "/reviews" },
            { name: r.title, path },
          ]),
        ]),
      ],
    };
  },
  component: ReviewDetail,
  notFoundComponent: ReviewNotFound,
});

function ReviewNotFound() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display font-bold text-4xl">We couldn't find that review</h1>
        <p className="mt-4 text-ink/70">It may have moved. The full shelf is still right here.</p>
        <Link
          to="/reviews"
          className="mt-8 inline-flex font-bold bg-coral text-coral-foreground px-7 py-3.5 rounded-full"
        >
          Browse all reviews
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="font-bold text-coral" aria-label={`Rated ${rating} out of 5`}>
      {"★".repeat(Math.round(rating))}
      <span className="text-ink/20">{"★".repeat(5 - Math.round(rating))}</span>
    </span>
  );
}

function ReviewDetail() {
  const { review } = Route.useLoaderData();
  const more = reviews.filter((r) => r.slug !== review.slug).slice(0, 3);

  // Reviews are the leaves of the site graph; without these links they would
  // have nothing pointing back up at the roundups that rank them.
  const listedIn: RelatedLink[] = roundupsForReview(review.slug).map((r) => ({
    to: `/best/${r.slug}`,
    label: r.h1,
    blurb: r.description,
  }));
  const deep = getLongform(review.slug);
  const partner = getService("audiobooks-com");
  const words = (deep ? longformWordCount(deep) : 0) + review.body.join(" ").split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));

  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <article className="max-w-6xl mx-auto px-6 pt-12 pb-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <img
            src={review.cover}
            alt={`Cover art for ${review.title} by ${review.author}`}
            width={400}
            height={600}
            className="w-full aspect-[2/3] object-contain bg-soft rounded-[2rem]"
          />
          <div className="mt-6 bg-card border border-border rounded-[2rem] p-6">
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-ink/50 font-semibold">Narrator</dt>
                <dd className="font-bold text-right">{review.narrator}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink/50 font-semibold">Length</dt>
                <dd className="font-bold">{review.length}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink/50 font-semibold">Genre</dt>
                <dd className="font-bold">{review.genre}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink/50 font-semibold">Our score</dt>
                <dd className="font-bold text-coral">{review.score}</dd>
              </div>
            </dl>
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="mt-6 w-full inline-flex justify-center font-bold bg-coral text-coral-foreground px-6 py-3.5 rounded-full hover:brightness-105 transition"
            >
              Listen on Audiobooks.com
            </a>
            <p className="mt-3 text-xs text-ink/50 leading-relaxed">
              Affiliate link. If you start a membership through it we may earn a commission, at no
              extra cost to you. It never changes our score —{" "}
              <Link to="/disclosure" className="underline">
                read our disclosure
              </Link>
              .
            </p>
          </div>
          <AffiliateBanner id="portrait" className="mt-6 mx-auto max-w-[320px]" />
        </div>

        <div className="lg:col-span-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
            <span className="bg-mint px-2.5 py-1 rounded-full">{review.genre}</span>
            <span className="text-ink/50">{review.length}</span>
            <span className="text-ink/50">·</span>
            <span className="text-ink/50">
              Reviewed by {review.reviewer} · {review.date}
            </span>
          </div>
          <h1 className="mt-5 font-display font-bold text-4xl sm:text-5xl leading-tight">
            {review.title}
          </h1>
          <p className="mt-3 text-lg text-ink/60 font-semibold">
            by {review.author} · narrated by {review.narrator}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <Stars rating={review.rating} />
            <span className="font-bold">{review.score}</span>
          </div>

          <div className="mt-8 bg-butter/60 rounded-[2rem] p-6">
            <h2 className="font-display font-bold text-xl">The verdict</h2>
            <p className="mt-2 text-ink/80 leading-relaxed">{review.verdict}</p>
          </div>

          {deep && (
            <nav
              aria-label="In this review"
              className="mt-8 bg-white/70 rounded-[2rem] p-6 shadow-pastel"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-ink/45">
                In this review · {words.toLocaleString()} words · about {minutes} min read
              </p>
              <ol className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {deep.sections.map((section, i) => (
                  <li key={section.heading} className="flex gap-2">
                    <span className="text-coral font-bold">{i + 1}.</span>
                    <a
                      href={`#${slugifyHeading(section.heading)}`}
                      className="hover:text-coral underline-offset-4 hover:underline"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-ink/80">
            {review.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          {deep && (
            <>
              <figure className="mt-10 bg-lilac/50 rounded-[2rem] p-7">
                <blockquote className="font-display font-bold text-2xl leading-snug">
                  “{deep.pullQuote}”
                </blockquote>
                <figcaption className="mt-3 text-sm text-ink/55">
                  {review.reviewer}, PageTurn
                </figcaption>
              </figure>

              {deep.sections.map((section, i) => (
                <section key={section.heading} className="mt-12">
                  <h2
                    id={slugifyHeading(section.heading)}
                    className="font-display font-bold text-2xl sm:text-3xl scroll-mt-28"
                  >
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-5 text-[17px] leading-[1.8] text-ink/80">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 28)}>{paragraph}</p>
                    ))}
                  </div>
                  {i === 1 && partner && (
                    <div className="mt-10">
                      <PricingHighlight
                        service={partner}
                        heading={`Where to listen to ${review.title} — price and free trial`}
                      />
                    </div>
                  )}
                </section>
              ))}

              <section className="mt-12">
                <h2
                  id="rating-breakdown"
                  className="font-display font-bold text-2xl sm:text-3xl scroll-mt-28"
                >
                  How we scored it
                </h2>
                <div className="mt-4 overflow-hidden rounded-[2rem] border border-border bg-white/70">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-soft">
                      <tr>
                        <th scope="col" className="px-5 py-3 font-display font-bold">
                          Category
                        </th>
                        <th scope="col" className="px-5 py-3 font-display font-bold">
                          Score
                        </th>
                        <th scope="col" className="px-5 py-3 font-display font-bold">
                          Why
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {deep.scoreBreakdown.map((line) => (
                        <tr key={line.label} className="border-t border-border align-top">
                          <th scope="row" className="px-5 py-4 font-bold whitespace-nowrap">
                            {line.label}
                          </th>
                          <td className="px-5 py-4 font-bold text-coral whitespace-nowrap">
                            {line.score}
                          </td>
                          <td className="px-5 py-4 text-ink/75 leading-relaxed">{line.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                <div className="bg-butter/60 rounded-[2rem] p-6">
                  <h2 className="font-display font-bold text-xl">Listen to this next</h2>
                  <ul className="mt-3 space-y-2 text-sm text-ink/80">
                    {deep.alsoTry.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-coral font-bold">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-peach/60 rounded-[2rem] p-6">
                  <h2 className="font-display font-bold text-xl">Skip it if</h2>
                  <p className="mt-3 text-sm text-ink/80 leading-relaxed">{deep.skipIf}</p>
                </div>
              </div>
            </>
          )}

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="bg-lilac/50 rounded-[2rem] p-6">
              <h2 className="font-display font-bold text-xl">Narrator notes</h2>
              <p className="mt-2 text-sm text-ink/80 leading-relaxed">{review.narratorNotes}</p>
            </div>
            <div className="bg-mint/60 rounded-[2rem] p-6">
              <h2 className="font-display font-bold text-xl">Best for</h2>
              <ul className="mt-2 space-y-2 text-sm text-ink/80">
                {review.bestFor.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-coral font-bold">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="font-display font-bold text-3xl mb-8">More from the shelf</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {more.map((r) => (
            <ReviewCard key={r.slug} review={r} />
          ))}
        </div>
      </section>

      <RelatedLinks links={listedIn} heading={`Lists featuring ${review.title}`} />

      <SiteFooter />
    </div>
  );
}
