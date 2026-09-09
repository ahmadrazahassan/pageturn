import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z
  .string()
  .trim()
  .min(5, { message: "Please enter your email address." })
  .max(255, { message: "That email address is too long." })
  .email({ message: "That does not look like a valid email address." });

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your email address.");
      return;
    }

    setBusy(true);
    const { error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: parsed.data, source: "sunday-shelf" });
    setBusy(false);

    if (insertError && insertError.code !== "23505") {
      setError("Something went wrong saving your address. Please try again in a moment.");
      return;
    }
    setSent(true);
  }

  return (
    <section id="newsletter" className="max-w-6xl mx-auto px-6 py-16">
      <div className="bg-ink/90 rounded-[2.5rem] px-8 py-14 text-center relative overflow-hidden">
        <div className="absolute -top-8 -left-8 w-40 h-40 bg-coral/30 rounded-full" />
        <div className="absolute -bottom-10 -right-6 w-48 h-48 bg-lilac/30 rounded-full" />
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-cream">The Sunday Shelf</h2>
          <p className="mt-3 text-cream/70">
            Ten hand-picked audiobooks in your inbox each week. No spam, just good listening.
          </p>
          {sent ? (
            <p className="mt-8 font-bold text-cream">
              Thanks — you're on the list. Look out for Sunday's shelf.
            </p>
          ) : (
            <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center" onSubmit={handleSubmit}>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full sm:w-72 bg-cream/95 text-ink font-semibold px-5 py-3.5 rounded-full outline-none placeholder:text-ink/40 focus:ring-2 focus:ring-coral"
              />
              <button
                type="submit"
                disabled={busy}
                className="font-bold bg-coral text-coral-foreground px-7 py-3.5 rounded-full hover:brightness-105 transition whitespace-nowrap disabled:opacity-60"
              >
                {busy ? "Adding you…" : "Join free"}
              </button>
            </form>
          )}
          {error && <p className="mt-4 text-sm font-bold text-peach">{error}</p>}
          <p className="mt-4 text-xs text-cream/50">Unsubscribe any time — one link in every email.</p>
        </div>
      </div>
    </section>
  );
}
