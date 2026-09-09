import { affiliateBanners, type AffiliateBannerId } from "@/lib/affiliate";
import { cn } from "@/lib/utils";

export function AffiliateBanner({ id, className }: { id: AffiliateBannerId; className?: string }) {
  const creative = affiliateBanners[id];

  return (
    <aside className={cn("relative", className)} aria-label="Sponsored Audiobooks.com promotion">
      <a
        href={creative.href}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="block overflow-hidden rounded-[1.5rem] bg-white/70 p-2 shadow-pastel transition hover:-translate-y-0.5 hover:shadow-lg"
      >
        <img
          src={creative.imageSrc}
          alt={creative.alt}
          width={creative.width}
          height={creative.height}
          loading="lazy"
          decoding="async"
          className="mx-auto h-auto w-full object-contain"
        />
      </a>
      <img
        src={creative.trackingPixel}
        width="1"
        height="1"
        alt=""
        aria-hidden="true"
        className="absolute h-px w-px opacity-0"
      />
      <p className="mt-2 text-center text-xs text-ink/45">
        Sponsored link · PageTurn may earn a commission.
      </p>
    </aside>
  );
}
