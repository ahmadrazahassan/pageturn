import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Newsletter } from "@/components/newsletter";

const title = "Audiobook Listening Guides — PageTurn";
const description =
  "Practical guides to listening: how to pick a narrator, the best audiobook lengths for commutes, and where to start in each genre.";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pageturn.cloud/guides" },
    ],
    links: [{ rel: "canonical", href: "https://pageturn.cloud/guides" }],
  }),
  component: GuidesPage,
});

const guides = [
  {
    tint: "bg-peach",
    heading: "How to judge a narrator in five minutes",
    body: [
      "Play the sample twice: once at normal speed, once at 1.25x. A narrator who still sounds natural sped up will stay comfortable across ten hours; one who blurs is usually over-performing.",
      "Listen for the breath. Audible inhales between every line of dialogue become exhausting on a long drive. Then check a dialogue-heavy chapter, not the prologue — prologues are the most rehearsed part of any recording.",
      "Finally, ask whether the narrator is acting the characters or describing them. Both work, but a full-cast style performance in a quiet literary novel will fight the writing.",
    ],
  },
  {
    tint: "bg-mint",
    heading: "Matching audiobook length to your week",
    body: [
      "Under 7 hours suits a single week of commuting or a couple of long walks. Memoir and self-help sit here most comfortably, and shorter books survive interruption better.",
      "Between 8 and 12 hours is the sweet spot for fiction: long enough for the narrator to settle, short enough that you keep the plot in your head between sessions.",
      "Anything over 15 hours needs a plan. Pick a title you can listen to in blocks of at least 45 minutes — long historical and epic fantasy fall apart in ten-minute fragments.",
    ],
  },
  {
    tint: "bg-lilac",
    heading: "Where to start in each genre",
    body: [
      "Mystery: choose a single narrator and a contemporary setting for your first listen. Period mysteries lean on dense description that is harder to follow by ear.",
      "Memoir: author-read is the classic recommendation, but only when the author can hold a pace. If the sample drifts, take the professional narration instead.",
      "Science fiction: full-cast productions solve the biggest audio problem in the genre — keeping a large crew of characters distinct. Start there before trying single-narrator epics.",
    ],
  },
];

function GuidesPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="max-w-6xl mx-auto px-6 pt-14 pb-6">
        <span className="inline-flex items-center gap-2 bg-lilac px-4 py-1.5 rounded-full font-bold text-sm">
          <span className="w-2 h-2 rounded-full bg-coral" /> Listening guides
        </span>
        <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl leading-tight">
          Learn to pick well, not just pick fast.
        </h1>
        <p className="mt-4 text-lg text-ink/70 max-w-2xl leading-relaxed">
          Everything here comes out of listening to books we did not enjoy. These are the checks we
          now run before committing ten hours to a title.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 space-y-6">
        {guides.map((guide) => (
          <article key={guide.heading} className={`${guide.tint} rounded-[2.5rem] p-8 sm:p-10`}>
            <h2 className="font-display font-bold text-2xl sm:text-3xl">{guide.heading}</h2>
            <div className="mt-4 space-y-4 text-[17px] leading-[1.8] text-ink/80 max-w-3xl">
              {guide.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-6">
        <Link to="/reviews" className="font-bold text-soft hover:text-ink transition-colors">
          See these checks applied — read our reviews
        </Link>
      </section>

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
