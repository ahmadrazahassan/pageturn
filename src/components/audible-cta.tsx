import { Link } from "@tanstack/react-router";
import { AUDIBLE_AFFILIATE_URL } from "@/lib/affiliate";

export function AudibleCta() {
  return (
    <aside className="max-w-5xl mx-auto px-6 py-10" aria-label="Audible affiliate offer">
      <div className="bg-butter/70 rounded-3xl p-7 sm:p-10">
        <p className="text-xs font-bold uppercase tracking-wide text-ink/60">
          Audible · Affiliate link
        </p>
        <h2 className="mt-3 font-display font-bold text-3xl">Ready for your next listen?</h2>
        <p className="mt-3 max-w-2xl text-ink/75 leading-relaxed">
          Explore Audible's audiobooks and check the current membership offers. Availability, trial
          eligibility and renewal terms are shown on Audible before you sign up.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 items-center">
          <a
            href={AUDIBLE_AFFILIATE_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex bg-ink text-cream font-bold px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Explore Audible offers ↗
          </a>
          <Link
            to="/services/$slug"
            params={{ slug: "audible" }}
            className="font-bold underline underline-offset-4"
          >
            Read our Audible review
          </Link>
        </div>
        <p className="mt-5 text-xs text-ink/60">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
      </div>
    </aside>
  );
}
