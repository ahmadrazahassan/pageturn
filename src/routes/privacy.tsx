import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { seo } from "@/lib/seo";

const title = "Privacy Policy — PageTurn";
const description =
  "What PageTurn collects, how newsletter sign-ups and affiliate links work, and how to ask us to delete your data.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    ...seo({ title, description, path: "/privacy" }),
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 pt-14 pb-16">
        <span className="inline-flex items-center gap-2 bg-mint px-4 py-1.5 rounded-full font-bold text-sm">
          <span className="w-2 h-2 rounded-full bg-coral" /> Last updated 6 September 2026
        </span>
        <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl leading-tight">
          Privacy policy
        </h1>

        <div className="mt-8 space-y-6 text-[17px] leading-[1.8] text-ink/80">
          <p>
            PageTurn is a small independent review site. We collect as little as possible and never
            sell personal information.
          </p>

          <h2 className="font-display font-bold text-2xl text-ink pt-4">Newsletter</h2>
          <p>
            If you sign up for The Sunday Shelf we store your email address for the sole purpose of
            sending that newsletter. Every issue includes a one-click unsubscribe link, and
            unsubscribing deletes the address from our list.
          </p>

          <h2 className="font-display font-bold text-2xl text-ink pt-4">Messages you send us</h2>
          <p>
            Messages sent through the contact page are kept only as long as needed to reply and to
            track any correction that results from them.
          </p>

          <h2 className="font-display font-bold text-2xl text-ink pt-4">Affiliate links</h2>
          <p>
            When you follow an affiliate link, the destination retailer may set its own cookie to
            attribute the visit. That happens on their site under their privacy policy, not ours.
            Our practice on labelling those links is described in our{" "}
            <Link to="/disclosure" className="font-bold text-coral underline">
              affiliate disclosure
            </Link>
            .
          </p>

          <h2 className="font-display font-bold text-2xl text-ink pt-4">Analytics and cookies</h2>
          <p>
            We use aggregate, privacy-friendly traffic measurement to see which reviews are read. It
            does not build profiles of individual readers and we do not run advertising trackers.
          </p>

          <h2 className="font-display font-bold text-2xl text-ink pt-4">Your choices</h2>
          <p>
            You can ask us at any time what we hold about you, or ask us to delete it, by writing to
            the editors through the{" "}
            <Link to="/contact" className="font-bold text-coral underline">
              contact page
            </Link>
            . We act on those requests within 30 days.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
