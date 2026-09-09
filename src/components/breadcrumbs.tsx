import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { Crumb } from "@/lib/seo";

/**
 * Visible breadcrumb trail. Pair it with `breadcrumbSchema` in the route head —
 * Google wants the markup and the visible trail to agree.
 *
 * The final crumb is the current page and is not linked.
 */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-body text-sm text-ink/55">
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-ink/70 font-semibold">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link
                    to={crumb.path}
                    className="hover:text-ink underline-offset-2 hover:underline transition-colors"
                  >
                    {crumb.name}
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-ink/30" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
