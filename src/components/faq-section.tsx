import type { Faq } from "@/lib/seo";

/**
 * Renders FAQs as real, always-visible text.
 *
 * Deliberately not an accordion: Google requires FAQPage answers to be present
 * in the rendered HTML, and collapsed content is also worse for people skimming
 * on a phone. The `<details>` alternative hides answers from selection and find-
 * in-page, which is exactly what someone scanning for one number does not want.
 */
export function FaqSection({
  faqs,
  heading = "Frequently asked questions",
  id = "faq",
}: {
  faqs: Faq[];
  heading?: string;
  id?: string;
}) {
  if (!faqs.length) return null;

  return (
    <section id={id} className="max-w-3xl mx-auto px-6 py-14">
      <h2 className="font-display font-bold text-3xl sm:text-4xl">{heading}</h2>
      <dl className="mt-8 space-y-7">
        {faqs.map((faq) => (
          <div key={faq.question} className="bg-white/70 rounded-3xl p-6 sm:p-7 shadow-pastel">
            <dt className="font-display font-bold text-lg sm:text-xl leading-snug">
              {faq.question}
            </dt>
            <dd className="mt-3 font-body text-[17px] leading-[1.75] text-ink/75">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
