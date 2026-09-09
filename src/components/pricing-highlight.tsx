import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Gift, Tag, Library, RefreshCcw } from "lucide-react";
import type { Service } from "@/lib/services";
import { ServiceLogo } from "@/components/service-card";

/**
 * Prominent price / free-trial panel. Used at the top of every service review
 * and inside book reviews so the cost and trial are impossible to miss.
 */
export function PricingHighlight({ service, heading }: { service: Service; heading?: string }) {
  const tiles = [
    { icon: Gift, label: "Free trial", value: service.freeTrial, tone: "bg-peach/70" },
    { icon: Tag, label: "After the trial", value: service.price, tone: "bg-mint/70" },
    { icon: Library, label: "Catalogue", value: service.catalogue, tone: "bg-butter/70" },
    { icon: RefreshCcw, label: "Cancel anytime", value: service.keepBooks, tone: "bg-lilac/70" },
  ];

  return (
    <div className="bg-white/80 rounded-[2rem] p-6 sm:p-8 shadow-pastel">
      <div className="flex items-center gap-5 flex-wrap">
        <ServiceLogo service={service} className="w-20 h-20 sm:w-24 sm:h-24" />
        <div className="min-w-0">
          <p className="text-xs font-body font-bold tracking-widest uppercase text-ink/45">
            Pricing at a glance
          </p>
          <h2 className="mt-1 font-display font-bold text-2xl sm:text-3xl leading-tight">
            {heading ?? `${service.name} — cost and free trial`}
          </h2>
        </div>
      </div>

      <dl className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 font-body">
        {tiles.map(({ icon: Icon, label, value, tone }) => (
          <div key={label} className={`${tone} rounded-2xl px-4 py-4`}>
            <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink/55">
              <Icon className="w-3.5 h-3.5" /> {label}
            </dt>
            <dd className="mt-1.5 font-display font-bold text-lg leading-snug">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={service.url}
          target="_blank"
          rel={service.affiliate ? "sponsored noopener noreferrer" : "noopener noreferrer nofollow"}
          className="inline-flex items-center gap-2 font-body font-bold bg-coral text-coral-foreground px-6 py-3.5 rounded-full hover:brightness-105 transition"
        >
          Start the free trial <ArrowUpRight className="w-4 h-4" />
        </a>
        <Link
          to="/compare"
          className="font-body font-bold bg-soft px-6 py-3.5 rounded-full hover:bg-lilac/60 transition-colors"
        >
          Compare prices side by side
        </Link>
      </div>
      <p className="mt-3 text-sm text-ink/50 font-body">
        {service.affiliate ? (
          <>
            Affiliate link — we may earn a commission if you subscribe, at no extra cost to you, and it
            never changes our score.{" "}
            <Link to="/disclosure" className="underline underline-offset-2">
              Read our disclosure
            </Link>
            .
          </>
        ) : (
          <>Not an affiliate link — we earn nothing if you sign up here.</>
        )}{" "}
        Prices checked {service.reviewedOn}; always confirm on the provider's own page.
      </p>
    </div>
  );
}
