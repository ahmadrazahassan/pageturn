import { Link } from "@tanstack/react-router";
import { Star, ArrowUpRight, Gift, Tag } from "lucide-react";
import type { Service } from "@/lib/services";

export function ServiceLogo({ service, className = "w-20 h-20" }: { service: Service; className?: string }) {
  return (
    <img
      src={service.logo}
      alt={`${service.name} logo`}
      width={256}
      height={256}
      loading="lazy"
      className={`${className} object-contain shrink-0`}
    />
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="bg-white/70 rounded-3xl p-6 shadow-pastel flex flex-col">
      <div className="flex items-start gap-5">
        <ServiceLogo service={service} className="w-20 h-20 sm:w-24 sm:h-24" />
        <div className="min-w-0">
          <h3 className="font-display font-bold text-xl leading-tight">
            <Link to="/services/$slug" params={{ slug: service.slug }} className="hover:text-coral transition-colors">
              {service.name}
            </Link>
          </h3>
          <p className="text-sm text-ink/50 font-body">{service.company}</p>
        </div>
        <span className="ml-auto inline-flex items-center gap-1 bg-butter px-3 py-1 rounded-full font-bold text-sm shrink-0">
          <Star className="w-3.5 h-3.5" /> {service.rating}
        </span>
      </div>

      <p className="mt-4 text-ink/70 leading-relaxed font-body">{service.tagline}</p>

      <dl className="mt-5 grid grid-cols-2 gap-3 text-sm font-body">
        <div className="bg-mint/70 rounded-2xl px-4 py-3">
          <dt className="flex items-center gap-1.5 text-ink/55 font-semibold">
            <Tag className="w-3.5 h-3.5" /> Price
          </dt>
          <dd className="mt-1 font-display font-bold text-lg leading-tight">{service.price}</dd>
        </div>
        <div className="bg-peach/70 rounded-2xl px-4 py-3">
          <dt className="flex items-center gap-1.5 text-ink/55 font-semibold">
            <Gift className="w-3.5 h-3.5" /> Free trial
          </dt>
          <dd className="mt-1 font-display font-bold text-lg leading-tight">{service.freeTrial}</dd>
        </div>
      </dl>

      <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-3">
        <Link
          to="/services/$slug"
          params={{ slug: service.slug }}
          className="font-body font-bold text-sm bg-lilac hover:bg-lilac/70 px-4 py-2.5 rounded-full transition-colors"
        >
          Read our review
        </Link>
        <a
          href={service.url}
          target="_blank"
          rel={service.affiliate ? "sponsored noopener noreferrer" : "noopener noreferrer nofollow"}
          className="inline-flex items-center gap-1 font-body font-semibold text-sm text-ink/60 hover:text-ink transition-colors"
        >
          {service.domain} <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
      {service.affiliate && (
        <p className="mt-3 text-xs text-ink/45 font-body">Affiliate partner — we may earn a commission.</p>
      )}
    </article>
  );
}
