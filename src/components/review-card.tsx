import { Link } from "@tanstack/react-router";
import type { Review } from "@/lib/reviews";

const genreChip: Record<string, string> = {
  Fiction: "bg-butter",
  Memoir: "bg-mint",
  "Sci-Fi": "bg-coral/30",
  Mystery: "bg-peach",
  Romance: "bg-coral/30",
  "Self-Help": "bg-lilac",
  History: "bg-lilac",
  Business: "bg-soft/20",
};

export function ReviewCard({ review, priority = false }: { review: Review; priority?: boolean }) {
  return (
    <article className="bg-card rounded-[2rem] p-3 border border-border shadow-sm hover:shadow-md transition-shadow">
      <Link to="/reviews/$slug" params={{ slug: review.slug }} className="block">
        <img
          src={review.coverSmall}
          srcSet={`${review.coverSmall} 300w, ${review.cover} 600w`}
          sizes="(min-width: 768px) 360px, 92vw"
          alt={`Cover art for the audiobook ${review.title} by ${review.author}`}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "low"}
          decoding="async"
          width={300}
          height={450}
          className="w-full aspect-[2/3] object-contain bg-soft rounded-3xl"
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-xs font-bold">
            <span className={`${genreChip[review.genre] ?? "bg-mint"} px-2.5 py-1 rounded-full`}>
              {review.genre}
            </span>
            <span className="text-ink/50">{review.length}</span>
          </div>
          <h3 className="mt-3 font-display font-semibold text-xl leading-tight">{review.title}</h3>
          <p className="mt-2 text-sm text-ink/60 leading-relaxed">{review.excerpt}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-bold text-coral">{review.score}</span>
            <span className="text-xs font-semibold text-ink/50">by {review.reviewer}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
