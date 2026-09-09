import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ReviewCard } from "@/components/review-card";
import { Newsletter } from "@/components/newsletter";
import { reviews } from "@/lib/reviews";

const title = "All Audiobook Reviews — PageTurn";
const description =
  "Every PageTurn audiobook review, with ratings, narrator notes and listening times across fiction, memoir, mystery, romance and more.";

export const Route = createFileRoute("/reviews/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pageturn.cloud/reviews" },
    ],
    links: [{ rel: "canonical", href: "https://pageturn.cloud/reviews" }],
  }),
  component: ReviewsIndex,
});

function ReviewsIndex() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="max-w-6xl mx-auto px-6 pt-14 pb-6">
        <span className="inline-flex items-center gap-2 bg-butter px-4 py-1.5 rounded-full font-bold text-sm">
          <span className="w-2 h-2 rounded-full bg-coral" /> The full shelf
        </span>
        <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl leading-tight">
          Every review, in one place.
        </h1>
        <p className="mt-4 text-lg text-ink/70 max-w-2xl leading-relaxed">
          Each title below was listened to in full before we wrote a word. We score the writing and
          the narration separately in our notes, because a great book can still be a difficult
          listen.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
      </section>

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
