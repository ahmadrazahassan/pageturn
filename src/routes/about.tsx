import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const title = "About PageTurn & How We Rate Audiobooks";
const description =
  "Who writes PageTurn, how we score audiobooks and narration, and the editorial standards behind every review we publish.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pageturn.cloud/about" },
    ],
    links: [{ rel: "canonical", href: "https://pageturn.cloud/about" }],
  }),
  component: AboutPage,
});

const founder = {
  initial: "A",
  tint: "bg-coral",
  name: "Ahmad Raza Hassan",
  role: "Founder & editor",
  bio: "Ahmad started PageTurn as a private listening notebook in 2018 and turned it into an independent audiobook review site in 2021. He reviews literary fiction, memoir, and the occasional locked-room mystery, and he still finishes every audiobook end to end before publishing a word.",
};

const standards = [
  {
    heading: "We finish the book",
    body: "No review is published from a sample or a summary. Every title on PageTurn was listened to end to end by the person whose name is on the review.",
  },
  {
    heading: "We score the writing and the narration",
    body: "The headline score is the listening experience overall. Narrator notes on each review tell you separately how the performance holds up, because the two often diverge.",
  },
  {
    heading: "We say when we didn't like it",
    body: "Low scores stay published. If a book has a weak stretch or a badly mixed production, that goes in the review even when the title is popular.",
  },
  {
    heading: "We buy or borrow the audiobooks",
    body: "We accept review copies but never payment for coverage, and a review copy is disclosed in the review itself. Affiliate income never influences a score.",
  },
  {
    heading: "We correct openly",
    body: "Factual errors are fixed and noted at the foot of the review with the date. If you spot one, tell us and we will credit the correction.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        <span className="inline-flex items-center gap-2 bg-mint px-4 py-1.5 rounded-full font-bold text-sm">
          <span className="w-2 h-2 rounded-full bg-coral" /> Est. 2021 · founder-run
        </span>
        <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl leading-tight max-w-3xl">
          One listener, one shelf, and a lot of notes.
        </h1>
        <p className="mt-5 text-lg text-ink/70 max-w-2xl leading-relaxed">
          PageTurn started as a private listening notebook in 2018. Ahmad Raza Hassan kept
          recommending audiobooks to friends, then forgetting why he had recommended them, so he
          began writing the reasons down. In 2021 he turned those notes into the independent review
          site you are reading now.
        </p>
        <p className="mt-4 text-lg text-ink/70 max-w-2xl leading-relaxed">
          This is not a store and it is not a publisher marketing channel. The only job here is to
          help you spend your next ten hours of listening well.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="font-display font-bold text-3xl mb-8">Who writes here</h2>
        <div className="max-w-xl">
          <article className="bg-card border border-border rounded-[2rem] p-6 shadow-sm">
            <span
              className={`${founder.tint} w-14 h-14 rounded-full grid place-items-center font-display font-bold text-2xl`}
            >
              {founder.initial}
            </span>
            <h3 className="mt-4 font-display font-semibold text-xl">{founder.name}</h3>
            <p className="text-sm font-bold text-coral">{founder.role}</p>
            <p className="mt-3 text-sm text-ink/70 leading-relaxed">{founder.bio}</p>
          </article>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="font-display font-bold text-3xl mb-8">How we rate, and what we promise</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {standards.map((item) => (
            <article key={item.heading} className="bg-lilac/40 rounded-[2rem] p-6">
              <h3 className="font-display font-semibold text-xl">{item.heading}</h3>
              <p className="mt-2 text-ink/75 leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-butter/70 rounded-[2.5rem] p-8 sm:p-10">
          <h2 className="font-display font-bold text-2xl">Our rating scale</h2>
          <ul className="mt-4 space-y-3 text-ink/80">
            <li>
              <strong>4.5 – 5.0</strong> — Exceptional. We would recommend it to someone who does
              not usually read the genre.
            </li>
            <li>
              <strong>4.0 – 4.4</strong> — Strongly recommended, with a caveat we name in the review.
            </li>
            <li>
              <strong>3.5 – 3.9</strong> — Worth your time if the subject appeals to you.
            </li>
            <li>
              <strong>Below 3.5</strong> — We finished it so you don't have to.
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/reviews"
              className="font-bold bg-coral text-coral-foreground px-6 py-3 rounded-full"
            >
              Read the reviews
            </Link>
            <Link
              to="/disclosure"
              className="font-bold bg-card border-2 border-border px-6 py-3 rounded-full"
            >
              Affiliate disclosure
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
