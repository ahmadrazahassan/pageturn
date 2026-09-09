import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const title = "Affiliate Disclosure — PageTurn";
const description =
  "How PageTurn makes money: affiliate links to Audiobooks.com and other listening platforms, clearly labelled and never able to influence a review score.";

export const Route = createFileRoute("/disclosure")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pageturn.cloud/disclosure" },
    ],
    links: [{ rel: "canonical", href: "https://pageturn.cloud/disclosure" }],
  }),
  component: DisclosurePage,
});

function DisclosurePage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 pt-14 pb-16">
        <span className="inline-flex items-center gap-2 bg-butter px-4 py-1.5 rounded-full font-bold text-sm">
          <span className="w-2 h-2 rounded-full bg-coral" /> Last updated 6 September 2026
        </span>
        <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl leading-tight">
          Affiliate disclosure
        </h1>

        <div className="mt-8 space-y-6 text-[17px] leading-[1.8] text-ink/80">
          <p>
            PageTurn is free to read. We fund the site through clearly labelled partner placements
            and affiliate links: when you follow a link from a review, guide, or banner to a listening
            platform and start a membership or buy a title, we may receive a small commission. You
            pay the same price either way.
          </p>

          <h2 className="font-display font-bold text-2xl text-ink pt-4">Programmes we take part in</h2>
          <p>
            We are a participant in the Audiobooks.com affiliate programme, and we may join similar
            programmes run by other audiobook retailers and subscription services. Any link that can
            earn us a commission is marked as sponsored in the page code and labelled in plain
            English next to the button.
          </p>

          <h2 className="font-display font-bold text-2xl text-ink pt-4">
            What affiliate income does not buy
          </h2>
          <p>
            No advertiser, retailer or publisher sees a review before publication, and none can
            request changes to a score. Commission rates play no part in which titles we cover or how
            we rank them. We regularly publish scores below 3.5 for books that are available through
            the programmes we take part in.
          </p>
          <p>
            Where a publisher provides a review copy, we say so inside that review. We never accept
            payment in exchange for coverage or for a positive score.
          </p>

          <h2 className="font-display font-bold text-2xl text-ink pt-4">How links are labelled</h2>
          <p>
            Every commercial link uses a <code className="text-sm">rel=&quot;sponsored&quot;</code>{" "}
            attribute, opens in a new tab, and sits beside a short note explaining the relationship.
            The footer of every page carries a permanent disclosure line as well.
          </p>

          <h2 className="font-display font-bold text-2xl text-ink pt-4">Questions</h2>
          <p>
            If anything here is unclear, or you think a link is not labelled properly, please{" "}
            <Link to="/contact" className="font-bold text-coral underline">
              contact the editors
            </Link>
            . We will fix labelling issues the same week they are reported.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
