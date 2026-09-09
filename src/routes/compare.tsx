import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Newsletter } from "@/components/newsletter";
import { ServiceLogo } from "@/components/service-card";
import { services, headToHeads } from "@/lib/services";

const title = "Audiobook Service Comparison 2026 — Price, Trials & Ownership | PageTurn";
const description =
  "Compare 12 audiobook services on price, free trial, catalogue size, whether you keep your books, and where each one works. Independent, hands-on testing.";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pageturn.cloud/compare" },
    ],
    links: [{ rel: "canonical", href: "https://pageturn.cloud/compare" }],
  }),
  component: Compare,
});

const columns = ["Service", "How it works", "Price", "Free trial", "Keep your books?", "Files", "Our score"];

function Compare() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="max-w-6xl mx-auto px-6 pt-14 pb-6">
        <span className="inline-flex items-center gap-2 bg-butter px-4 py-1.5 rounded-full font-bold text-sm">
          <span className="w-2 h-2 rounded-full bg-coral" /> Updated September 2026
        </span>
        <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl leading-tight max-w-3xl">
          Audiobook services compared, without the sales pitch.
        </h1>
        <p className="mt-4 text-lg text-ink/70 max-w-2xl leading-relaxed font-body">
          Every figure below comes from an account we paid for. One entry — Audiobooks.com — is an
          affiliate partner, and it is labelled everywhere it appears.{" "}
          <Link to="/disclosure" className="underline underline-offset-2">
            Here is exactly how that works.
          </Link>
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white/70 rounded-3xl shadow-pastel overflow-x-auto">
          <table className="w-full text-left font-body text-sm min-w-[880px]">
            <caption className="sr-only">Audiobook services compared on price, trial, ownership and score</caption>
            <thead>
              <tr className="bg-soft">
                {columns.map((c) => (
                  <th key={c} scope="col" className="px-5 py-4 font-bold whitespace-nowrap">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.slug} className="border-t border-border align-top">
                  <th scope="row" className="px-5 py-4 font-bold">
                    <span className="flex items-center gap-3">
                      <ServiceLogo service={s} className="w-20 h-20" />
                      <span>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="hover:text-coral transition-colors"
                        >
                          {s.name}
                        </Link>
                        {s.affiliate && (
                          <span className="block text-xs text-ink/45 font-semibold">Affiliate partner</span>
                        )}
                      </span>
                    </span>
                  </th>
                  <td className="px-5 py-4 text-ink/75">{s.model}</td>
                  <td className="px-5 py-4 text-ink/75">{s.price}</td>
                  <td className="px-5 py-4 text-ink/75">{s.freeTrial}</td>
                  <td className="px-5 py-4 text-ink/75">{s.keepBooks}</td>
                  <td className="px-5 py-4 text-ink/75">{s.drm}</td>
                  <td className="px-5 py-4 font-bold whitespace-nowrap">{s.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="font-display font-bold text-3xl">Straight answers</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {headToHeads.map((m) => (
            <div key={m.question} className="bg-white/70 rounded-3xl p-6 shadow-pastel">
              <h3 className="font-display font-bold text-xl">{m.question}</h3>
              <p className="mt-2 text-ink/75 font-body leading-relaxed">{m.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="font-display font-bold text-3xl">Official pages</h2>
        <p className="mt-2 text-ink/60 font-body">
          Straight links to each company, so you can check current pricing yourself.
        </p>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((s) => (
            <li key={s.slug}>
              <a
                href={s.url}
                target="_blank"
                rel={s.affiliate ? "sponsored noopener noreferrer" : "noopener noreferrer nofollow"}
                className="flex items-center gap-3 bg-white/70 hover:bg-soft rounded-2xl px-4 py-3 transition-colors"
              >
                <ServiceLogo service={s} className="w-20 h-20" />
                <span className="font-body font-semibold">{s.domain}</span>
                <ArrowUpRight className="w-4 h-4 ml-auto text-ink/40" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
