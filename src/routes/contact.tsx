import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { supabase } from "@/integrations/supabase/client";

const title = "Contact PageTurn — Review Requests & Corrections";
const description =
  "Get in touch with the PageTurn editors about review requests, narrator suggestions, corrections or partnership enquiries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pageturn.cloud/contact" },
    ],
    links: [{ rel: "canonical", href: "https://pageturn.cloud/contact" }],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Please tell us your name." }).max(100, {
    message: "Name must be under 100 characters.",
  }),
  email: z
    .string()
    .trim()
    .min(5, { message: "Please enter your email address." })
    .max(255, { message: "Email must be under 255 characters." })
    .email({ message: "That does not look like a valid email address." }),
  subject: z.string().trim().max(150),
  message: z
    .string()
    .trim()
    .min(1, { message: "Please write a message." })
    .max(4000, { message: "Message must be under 4000 characters." }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      subject: String(form.get("subject") ?? ""),
      message: String(form.get("message") ?? ""),
    });

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form and try again.");
      return;
    }

    setBusy(true);
    const { error: insertError } = await supabase.from("contact_messages").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      subject: parsed.data.subject || null,
      message: parsed.data.message,
    });
    setBusy(false);

    if (insertError) {
      setError("We could not send that just now. Please try again in a moment.");
      return;
    }
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="max-w-6xl mx-auto px-6 pt-14 pb-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <span className="inline-flex items-center gap-2 bg-peach px-4 py-1.5 rounded-full font-bold text-sm">
            <span className="w-2 h-2 rounded-full bg-coral" /> We read everything
          </span>
          <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl leading-tight">
            Say hello.
          </h1>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            Review requests, narrator suggestions, corrections, or an audiobook you think we have
            unfairly ignored — all welcome. We reply to most messages within three working days.
          </p>

          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="font-bold">Editorial</dt>
              <dd className="text-ink/70">
                <a className="underline hover:text-coral" href="mailto:info@pageturn.cloud">
                  info@pageturn.cloud
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold">Review copies &amp; publicity</dt>
              <dd className="text-ink/70">
                <a className="underline hover:text-coral" href="mailto:info@pageturn.cloud">
                  info@pageturn.cloud
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold">Corrections</dt>
              <dd className="text-ink/70">
                Tell us the review and the line. We publish corrections with the date.
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-xs text-ink/50 leading-relaxed">
            Messages sent through this form are stored securely and read by the editors. We never
            pass your address to publishers or affiliate partners.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-card border border-border rounded-[2.5rem] p-8 shadow-sm">
            {sent ? (
              <div className="py-10 text-center">
                <h2 className="font-display font-bold text-2xl">Message received</h2>
                <p className="mt-3 text-ink/70">
                  Thanks for writing. One of the editors will come back to you shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block font-bold text-sm mb-2">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    className="w-full bg-cream border border-input rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-bold text-sm mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    className="w-full bg-cream border border-input rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block font-bold text-sm mb-2">
                    What's this about?
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-cream border border-input rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-coral"
                  >
                    <option>A review request</option>
                    <option>A correction</option>
                    <option>Review copy / publicity</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block font-bold text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    maxLength={4000}
                    className="w-full bg-cream border border-input rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-coral"
                  />
                </div>
                {error && <p className="text-sm font-bold text-coral">{error}</p>}
                <button
                  type="submit"
                  disabled={busy}
                  className="font-bold bg-coral text-coral-foreground px-7 py-3.5 rounded-full hover:brightness-105 transition disabled:opacity-60"
                >
                  {busy ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
