import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export type RelatedLink = {
  to: string;
  label: string;
  blurb?: string;
};

/**
 * Contextual internal links.
 *
 * Every money page should be reachable in one or two clicks from the pages that
 * feed it — roundup to comparison to service review to trial. These blocks are
 * how that graph gets built, so they carry descriptive anchor text rather than
 * "read more".
 */
export function RelatedLinks({
  links,
  heading = "Keep reading",
  className = "",
}: {
  links: RelatedLink[];
  heading?: string;
  className?: string;
}) {
  if (!links.length) return null;

  return (
    <section className={`max-w-4xl mx-auto px-6 py-12 ${className}`}>
      <h2 className="font-display font-bold text-2xl sm:text-3xl">{heading}</h2>
      <ul className="mt-6 grid sm:grid-cols-2 gap-4">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="group flex h-full flex-col rounded-3xl bg-white/70 p-5 shadow-pastel transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="font-display font-bold text-lg leading-snug flex items-start gap-2">
                <span className="min-w-0">{link.label}</span>
                <ArrowRight className="mt-1 w-4 h-4 shrink-0 text-coral transition-transform group-hover:translate-x-0.5" />
              </span>
              {link.blurb && (
                <span className="mt-2 font-body text-sm leading-relaxed text-ink/60">
                  {link.blurb}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
