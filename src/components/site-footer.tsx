import { Link } from "@tanstack/react-router";
import { WaveMark } from "./site-header";
import { AffiliateBanner } from "@/components/affiliate-banner";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <WaveMark size="sm" />
            <span className="font-display font-bold text-xl">PageTurn</span>
          </div>
          <p className="mt-4 text-sm text-ink/60">
            Founder-run audiobook reviews, guides, and long lists. Made for the curious.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-ink/60">
            <li>
              <Link to="/reviews" className="hover:text-ink transition-colors">
                Latest reviews
              </Link>
            </li>
            <li>
              <Link to="/guides" className="hover:text-ink transition-colors">
                Genre guides
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-ink transition-colors">
                Where to listen
              </Link>
            </li>
            <li>
              <Link to="/compare" className="hover:text-ink transition-colors">
                Compare services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-ink transition-colors">
                How we rate
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-ink/60">
            <li>
              <Link to="/about" className="hover:text-ink transition-colors">
                About PageTurn
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-ink transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-ink transition-colors">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-ink transition-colors">
                Terms of use
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Transparency</h4>
          <ul className="space-y-2 text-sm text-ink/60">
            <li>
              <Link to="/disclosure" className="hover:text-ink transition-colors">
                Affiliate disclosure
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-ink transition-colors">
                Editorial standards
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-ink transition-colors">
                Review requests
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-8 text-xs text-ink/40">
        <AffiliateBanner id="mobile" className="mb-8 mx-auto max-w-[320px]" />
        <p>
          PageTurn participates in affiliate programs, including Audiobooks.com. As an independent
          reviewer, we may earn a commission on qualifying purchases at no extra cost to you. All
          opinions are our own.
        </p>
        <p className="mt-3">© 2026 PageTurn Media. All rights reserved.</p>
      </div>
    </footer>
  );
}
