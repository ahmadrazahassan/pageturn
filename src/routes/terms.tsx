import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const title = "Terms of Use — PageTurn";
const description =
  "The terms that apply when you use PageTurn: how our audiobook reviews may be used, affiliate links, accuracy, and limits of liability.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pageturn.cloud/terms" },
    ],
    links: [{ rel: "canonical", href: "https://pageturn.cloud/terms" }],
  }),
  component: TermsPage,
});

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "1. Who we are",
    body: [
      "PageTurn is an independent audiobook review publication. You can reach the editors at info@pageturn.cloud. By using this site you agree to these terms. If you do not agree with them, please stop using the site.",
    ],
  },
  {
    heading: "2. Our reviews are opinions",
    body: [
      "Every review, score and comparison on PageTurn is the honest editorial opinion of the named reviewer at the time of publication. Prices, catalogue sizes, trial lengths and app features change often; we re-check service pages periodically but we cannot guarantee that every figure is current.",
      "Nothing here is financial, legal or contractual advice. Always confirm price and terms on the retailer's own page before you buy or subscribe.",
    ],
  },
  {
    heading: "3. Affiliate links",
    body: [
      "Some outbound links are affiliate links, which means we may earn a commission if you subscribe or buy after clicking. Affiliate links are labelled at the point of use and never change a reviewer's score or verdict. Our full policy is on the affiliate disclosure page.",
      "We are not the seller. Any purchase, subscription, refund, cancellation or customer-service matter is between you and the retailer, under their terms.",
    ],
  },
  {
    heading: "4. Using our content",
    body: [
      "The words, scores and original artwork on PageTurn belong to us. You may quote up to 100 words from a review with a clear credit and a working link to the page you quoted. Republishing whole reviews, scraping the site, or using our content to train models without written permission is not permitted.",
      "Book titles, narrator names, service names and logos belong to their respective owners and are used for identification and commentary only.",
    ],
  },
  {
    heading: "5. Messages and subscriptions you send us",
    body: [
      "When you use the contact form or join the newsletter, you are asking us to store the details you type so we can reply or send the newsletter. Do not send confidential information through the form. You can unsubscribe from any email with one click, and you can ask us to delete your details at any time by emailing info@pageturn.cloud.",
      "You agree not to submit unlawful, abusive or deliberately misleading content, and not to use the form for bulk marketing.",
    ],
  },
  {
    heading: "6. Availability and third-party sites",
    body: [
      "We aim to keep PageTurn available but we do not promise uninterrupted access, and we may change or remove pages at any time. Where we link to another website, we do not control that site and are not responsible for its content, pricing or privacy practices.",
    ],
  },
  {
    heading: "7. Limits of liability",
    body: [
      "To the extent the law allows, PageTurn is not liable for any loss arising from your use of this site or from a purchase you make after following a link from it. Nothing in these terms limits liability that cannot lawfully be limited.",
    ],
  },
  {
    heading: "8. Changes to these terms",
    body: [
      "We may update these terms as the site changes. The date below always shows the current version, and material changes will be noted on this page.",
    ],
  },
];

function TermsPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <article className="max-w-3xl mx-auto px-6 pt-14 pb-20">
        <span className="inline-flex items-center gap-2 bg-mint px-4 py-1.5 rounded-full font-bold text-sm">
          <span className="w-2 h-2 rounded-full bg-ink/40" /> The small print
        </span>
        <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl leading-tight">
          Terms of Use
        </h1>
        <p className="mt-4 text-sm text-ink/50">Last updated 6 September 2026</p>
        <p className="mt-6 text-lg text-ink/70 leading-relaxed">
          Plain-English terms for using PageTurn. They sit alongside our{" "}
          <Link to="/privacy" className="underline hover:text-coral">
            privacy policy
          </Link>{" "}
          and our{" "}
          <Link to="/disclosure" className="underline hover:text-coral">
            affiliate disclosure
          </Link>
          .
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display font-bold text-2xl">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-ink/75 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-14 bg-butter/60 border border-border rounded-[2rem] p-7">
          <h2 className="font-display font-bold text-xl">Questions about these terms?</h2>
          <p className="mt-3 text-ink/75 leading-relaxed">
            Email{" "}
            <a href="mailto:info@pageturn.cloud" className="underline hover:text-coral">
              info@pageturn.cloud
            </a>{" "}
            or use the{" "}
            <Link to="/contact" className="underline hover:text-coral">
              contact form
            </Link>
            . We answer most messages within three working days.
          </p>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
