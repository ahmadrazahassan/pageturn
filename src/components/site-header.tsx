import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Search } from "lucide-react";
import brandMark from "@/assets/pageturn-mark.png";

function WaveMark({ size = "md" }: { size?: "sm" | "md" }) {
  const outer = size === "md" ? "w-11 h-11" : "w-10 h-10";
  return (
    <img
      src={brandMark}
      alt="PageTurn logo"
      width={512}
      height={512}
      className={`${outer} rounded-2xl`}
    />
  );
}

export { WaveMark };

const navItems = [
  { to: "/reviews", label: "Reviews" },
  { to: "/services", label: "Where to listen" },
  { to: "/compare", label: "Compare" },
  { to: "/guides", label: "Guides" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md border-b border-border">
      {/* announcement strip */}
      <div className="bg-ink text-cream">
        <div className="max-w-6xl mx-auto px-6 py-2 text-center text-xs font-body tracking-wide">
          Independent audiobook reviews — some links are affiliate links.{" "}
          <Link to="/disclosure" className="underline underline-offset-2 hover:text-butter">
            How we work
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-18 py-4 flex items-center gap-6">
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
            <WaveMark />
            <span className="font-display font-bold text-2xl text-ink leading-none">PageTurn</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 ml-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-body font-semibold text-sm text-ink/70 hover:text-ink px-4 py-2 rounded-full hover:bg-soft transition-colors"
                activeProps={{ className: "text-ink bg-soft" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 ml-auto">
            <Link
              to="/reviews"
              aria-label="Browse all reviews"
              className="hidden sm:grid w-10 h-10 place-items-center rounded-full text-ink/60 hover:text-ink hover:bg-soft transition-colors"
            >
              <Search className="w-5 h-5" />
            </Link>
            <a
              href="#newsletter"
              className="hidden sm:inline-flex font-body font-bold text-sm text-ink bg-lilac hover:bg-lilac/70 px-5 py-2.5 rounded-full transition-colors"
            >
              Subscribe
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid w-10 h-10 place-items-center rounded-full text-ink hover:bg-soft transition-colors"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-cream">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-body font-semibold text-ink/80 hover:text-ink px-4 py-3 rounded-2xl hover:bg-soft transition-colors"
                activeProps={{ className: "text-ink bg-soft" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#newsletter"
              onClick={() => setOpen(false)}
              className="mt-2 text-center font-body font-bold text-ink bg-lilac hover:bg-lilac/70 px-5 py-3 rounded-full transition-colors"
            >
              Subscribe
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
