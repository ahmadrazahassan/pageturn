import type { Faq } from "@/lib/seo";
import { reviews } from "@/lib/reviews";
import { services } from "@/lib/services";

/**
 * "Best X" roundup pages.
 *
 * Two kinds:
 *  - `kind: "service"` ranks audiobook services (commercial intent, affiliate value)
 *  - `kind: "review"`  ranks audiobooks we have reviewed in full (traffic intent)
 *
 * Picks reference existing records by slug rather than restating their facts, so
 * a price change in `services.ts` propagates everywhere instead of going stale
 * in a dozen hand-written lists.
 */
export type RoundupPick = {
  /** Slug of a service (kind "service") or a review (kind "review"). */
  ref: string;
  /** Superlative label, e.g. "Best overall". Kept short — it renders as a badge. */
  award: string;
  /** Our reason for the placement, in our own words. */
  blurb: string;
};

export type Roundup = {
  slug: string;
  kind: "service" | "review";
  title: string;
  h1: string;
  description: string;
  /** Direct answer paragraph, rendered above the fold. */
  shortAnswer: string;
  intro: string[];
  picks: RoundupPick[];
  /** Methodology section — the E-E-A-T load-bearing part. */
  howWeChose: string[];
  /**
   * Genres whose reviews are surfaced under "more in this category". Lets a
   * genre roundup grow automatically as new reviews land.
   */
  relatedGenres?: string[];
  faqs: Faq[];
  updated: string;
  updatedISO: string;
};

export const roundups: Roundup[] = [
  /* ---------------- service roundups: commercial intent ---------------- */
  {
    slug: "best-audiobook-apps",
    kind: "service",
    title: "The 8 Best Audiobook Apps in 2026, Tested | PageTurn",
    h1: "The best audiobook apps in 2026",
    description:
      "We paid for twelve audiobook services and listened through a full book on each. The apps that were actually worth keeping, and the ones we cancelled.",
    shortAnswer:
      "Audible has the best all-round app and the biggest catalogue. Audiobooks.com is the best place to start because its 30-day trial gives you up to three titles. Libby is the best value in audiobooks full stop, because it is free with a library card. Libro.fm is the pick if you want DRM-free files you actually own.",
    intro: [
      "Every list of 'best audiobook apps' looks the same because most of them are assembled from press releases. We did it the slow way: paid accounts on twelve services, at least one complete book listened to on each, and cancellations for the ones that did not survive the month.",
      "The ranking below is about the experience of using the thing daily — how it behaves in a car, whether the sleep timer works, how quickly bookmarks sync — as much as about catalogue size.",
    ],
    picks: [
      {
        ref: "audible",
        award: "Best overall",
        blurb:
          "The largest catalogue in the market, a purpose-built app with the best chapter navigation of the twelve, and self-service returns when a narrator turns out to be wrong for you. The Kindle and Echo integrations are genuine advantages if you already own either. At $14.95 a month it is not cheap, and the DRM means your library never leaves Audible.",
      },
      {
        ref: "audiobooks-com",
        award: "Best free trial",
        blurb:
          "Same $14.95 price as Audible, but the trial runs 30 days with up to three titles on most offers, which is the most listening anyone hands you for nothing. The included VIP library covers the weeks after your credit is spent, and CarPlay, Android Auto and Sonos support is reliable. Returns are slower than Audible's because they go through support.",
      },
      {
        ref: "libby",
        award: "Best free option",
        blurb:
          "Free with a library card, and the best value in audiobooks by a distance. The catalogue depends entirely on what your library has licensed, and popular titles carry real waiting lists, so it works best as the layer underneath a paid service rather than instead of one. Loans expire; nothing is yours.",
      },
      {
        ref: "libro-fm",
        award: "Best for owning your books",
        blurb:
          "$14.99 a month for a credit, and downloads arrive DRM-free — play them in any app, back them up, keep them if Libro.fm ever disappears. You also pick an independent bookshop that takes a share of your spending. The catalogue is 500,000+ titles and misses only Audible's exclusives.",
      },
      {
        ref: "chirp",
        award: "Best for cheap purchases",
        blurb:
          "No subscription at all. Chirp sells rotating limited-time deals, frequently $0.99–$5.99, and purchases are permanent. Superb if you are relaxed about what you listen to next; useless if you want a specific new release, because deals are drawn from backlist.",
      },
      {
        ref: "everand",
        award: "Best for reading widely",
        blurb:
          "From $11.99 for all-you-can-read across audiobooks, ebooks and magazines. The catch is throttling — heavy users find availability narrows over time — and access ends when the subscription does. Best value per hour of anything here if you consume two or more books a month.",
      },
      {
        ref: "spotify-audiobooks",
        award: "Best if you already subscribe",
        blurb:
          "15 hours of audiobook listening a month included with Premium, from 350,000+ titles. Effectively free if you already pay for the music, and genuinely convenient because the book sits beside your playlists. The cap is about one average book, and the app is a music app with audiobook features bolted on.",
      },
      {
        ref: "kobo-audiobooks",
        award: "Best outside the US",
        blurb:
          "$12.99 a month for a credit, wide international coverage, and ebooks and audiobooks in a single account. The friendliest of the big stores if you are not American, and a sensible Audible substitute in markets where Amazon's offer is thin.",
      },
    ],
    howWeChose: [
      "We bought a paid subscription to every service in this list and listened to at least one complete audiobook on each — not a sample, a whole book — before scoring anything.",
      "Scoring weighted the things that end listening habits: playback speed granularity, whether the sleep timer resumes correctly, bookmark sync between phone and web, download reliability offline, and car integration through CarPlay and Android Auto.",
      "Catalogue claims come from each provider's own published figures, checked in September 2026. Prices are US list prices at the time of testing and change often — confirm on the provider's own page before subscribing.",
      "One service here, Audiobooks.com, is an affiliate partner of ours. It is labelled everywhere it appears and it did not receive a placement it had not earned; Audible outranks it on this list.",
    ],
    faqs: [
      {
        question: "What is the best audiobook app overall?",
        answer:
          "Audible, on the strength of the largest catalogue, the best chapter navigation of the twelve services we tested, and self-service returns. It costs $14.95 a month and its DRM means the library never leaves the Audible apps.",
      },
      {
        question: "What is the best free audiobook app?",
        answer:
          "Libby. It is free with a library card and the catalogue is real, licensed material rather than public-domain filler. The trade-offs are waiting lists on popular titles and loans that expire.",
      },
      {
        question: "Which audiobook app has the best free trial?",
        answer:
          "Audiobooks.com — 30 days with up to three titles on most offers, versus 30 days and a single credit at Audible and Libro.fm. It is the most listening any service gives you before charging you.",
      },
      {
        question: "Which audiobook app lets you keep your files?",
        answer:
          "Libro.fm and Downpour both deliver DRM-free downloads you can play in any app. Audible, Audiobooks.com, Chirp, Spotify and the rest are DRM-protected and app-locked, so 'keeping' a book there means it stays in that service's library.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "best-audible-alternatives",
    kind: "service",
    title: "8 Best Audible Alternatives in 2026 (Tested) | PageTurn",
    h1: "The best Audible alternatives in 2026",
    description:
      "Cheaper, free, DRM-free and no-subscription alternatives to Audible — all tested with paid accounts. Which one replaces Audible depends on why you are leaving.",
    shortAnswer:
      "There is no single best Audible alternative, because people leave Audible for three different reasons. If you are leaving on price, use Libby (free) or Chirp (no subscription). If you are leaving because of DRM, use Libro.fm. If you just want a different service at the same price with a better trial, use Audiobooks.com.",
    intro: [
      "Almost every list of Audible alternatives ranks services as if they were interchangeable. They are not, and the ranking that matters depends entirely on why you want out.",
      "We have grouped the answers by reason below. All twelve services here were tested on paid accounts, so these are not catalogue-page summaries.",
    ],
    picks: [
      {
        ref: "audiobooks-com",
        award: "Closest like-for-like swap",
        blurb:
          "The same $14.95, the same one-credit model, the same 'keep what you buy' terms — but a 30-day trial with up to three titles instead of one, and an included VIP library to cover the rest of the month. The straightforward choice if you want Audible's shape without Amazon. Catalogue is 400,000+, so smaller, and returns go through support rather than a button.",
      },
      {
        ref: "libby",
        award: "Best free alternative",
        blurb:
          "Free with a library card, and the only genuinely free option on this page that carries real, current, licensed audiobooks. Popular titles have waiting lists and loans expire, so treat it as the foundation rather than the whole answer. Most people who cancel Audible on price should start here.",
      },
      {
        ref: "libro-fm",
        award: "Best if you are leaving because of DRM",
        blurb:
          "$14.99 a month, DRM-free downloads that play anywhere and outlive the service, 500,000+ titles, and a share of your money going to an independent bookshop you choose. This is the answer to 'I want to actually own my audiobooks', which Audible cannot give you at any price.",
      },
      {
        ref: "chirp",
        award: "Best for spending less without a subscription",
        blurb:
          "No monthly fee whatsoever. Rotating limited-time deals, often $0.99–$5.99, purchased permanently. A year of Chirp can cost less than three months of Audible. You only ever get to choose from what is discounted, and new releases essentially never are.",
      },
      {
        ref: "everand",
        award: "Best for volume",
        blurb:
          "From $11.99 for all-you-can-read across audiobooks, ebooks and magazines — much better value per hour than Audible if you get through two or more books a month. It throttles heavy users, availability is unpredictable, and you keep nothing when you stop paying.",
      },
      {
        ref: "spotify-audiobooks",
        award: "Best if you already pay for Premium",
        blurb:
          "15 included hours a month from 350,000+ titles, at no extra cost on a Premium subscription you may already have. For a listener who finishes about one book a month this replaces Audible entirely and saves $14.95. Past that the cap bites, and the app is not built for long-form audio.",
      },
      {
        ref: "kobo-audiobooks",
        award: "Best non-US alternative",
        blurb:
          "$12.99 a month for a credit with wide international coverage and ebooks in the same account. In markets where Audible's local catalogue is thin, Kobo is frequently the better store rather than merely the alternative one.",
      },
      {
        ref: "downpour",
        award: "Best for renting long books",
        blurb:
          "$12.99 a month for a credit, DRM-free files, and — unusually — rentals from about $5. Renting makes a 25-hour doorstop affordable when you are fairly sure you only want to hear it once. US-focused, and the app is the weakest part.",
      },
    ],
    howWeChose: [
      "We started from the three real reasons people cancel Audible — cost, DRM, and wanting out of the Amazon ecosystem — and tested whether each service actually solves one of them rather than scoring them all on a single scale.",
      "Every service listed was used on a paid account for at least one complete audiobook. Prices are US list prices checked in September 2026.",
      "We deliberately included Libby, which earns us nothing, at number two. Any list of Audible alternatives that omits the free option is selling you something.",
      "Audiobooks.com is an affiliate partner and is labelled as such wherever it appears. It is listed first because it is the closest structural replacement for Audible, not because of the commercial relationship — and we say plainly above that its catalogue is smaller and its returns process worse.",
    ],
    faqs: [
      {
        question: "What is the best alternative to Audible?",
        answer:
          "It depends why you are leaving. Audiobooks.com is the closest like-for-like swap at the same $14.95 with a more generous trial. Libby is the best free option. Libro.fm is the answer if you want DRM-free files you own. Chirp is the cheapest way to keep buying without a subscription.",
      },
      {
        question: "Is there a cheaper alternative to Audible?",
        answer:
          "Several. Libby is free with a library card. Chirp has no subscription and sells deals from $0.99. Everand is $11.99 a month for all-you-can-read. Spotify Premium includes 15 audiobook hours a month at no extra cost if you already subscribe.",
      },
      {
        question: "Can I keep my Audible books if I switch?",
        answer:
          "Yes — titles you bought with credits stay in your Audible library after you cancel, and you can keep listening to them in the Audible app. They are DRM-protected, so they cannot be moved into another service. Anything you only heard through the Plus Catalog goes away.",
      },
      {
        question: "Which Audible alternative has the biggest catalogue?",
        answer:
          "Libro.fm, at 500,000+ titles, is the largest of the alternatives, ahead of Audiobooks.com's 400,000+. None of them match Audible's total, and none carry Audible Originals, which are exclusive to Amazon.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "best-audiobook-subscriptions",
    kind: "service",
    title: "Best Audiobook Subscription Services in 2026 | PageTurn",
    h1: "The best audiobook subscriptions in 2026",
    description:
      "Credit plans, all-you-can-listen plans and bundled hours compared on price, what you keep, and what happens between credits. Twelve services, all paid for.",
    shortAnswer:
      "For most people the right subscription is a credit plan: Audible if you want the biggest catalogue, Audiobooks.com if you want the best trial and something to listen to between credits. Choose Everand instead if you get through two or more books a month and do not mind not keeping them, and skip subscriptions entirely in favour of Libby and Chirp if you are trying to spend less.",
    intro: [
      "Audiobook subscriptions come in three shapes and the shapes matter far more than the brands. A credit plan buys you one book a month that you keep. An all-you-can-listen plan buys you volume you do not keep. A bundle gives you a capped number of hours inside something you already pay for.",
      "Pick the shape first. The brand comparison only makes sense afterwards.",
    ],
    picks: [
      {
        ref: "audiobooks-com",
        award: "Best subscription to start with",
        blurb:
          "$14.95 a month for a credit plus an included VIP library, and a 30-day trial with up to three titles — the most generous entry point of any subscription here. Credit purchases stay yours after cancelling. Playback is app-only and DRM-protected, and the catalogue at 400,000+ is smaller than Audible's.",
      },
      {
        ref: "audible",
        award: "Best credit plan",
        blurb:
          "$14.95 a month, the largest catalogue in the market, the Plus Catalog for between-credit listening, and returns you can process yourself. The strongest subscription overall if you are certain you will use it, and the one with the deepest exclusives.",
      },
      {
        ref: "everand",
        award: "Best all-you-can-listen plan",
        blurb:
          "From $11.99 covering audiobooks, ebooks and magazines. Unbeatable per hour above about two books a month. Two honest caveats: heavy users get throttled, and you keep nothing at all when the subscription ends.",
      },
      {
        ref: "libro-fm",
        award: "Best for keeping what you buy",
        blurb:
          "$14.99 a month for a credit that arrives as a DRM-free download, plus à la carte buying so a lapsed subscription does not lock you out. The subscription to choose if you are building a library you intend to still have in ten years.",
      },
      {
        ref: "spotify-audiobooks",
        award: "Best bundled hours",
        blurb:
          "15 audiobook hours a month inside Premium from $11.99. If you already pay for Premium this is the cheapest real subscription in the category, because the marginal cost is zero. The cap is roughly one book and it does not roll over.",
      },
      {
        ref: "kobo-audiobooks",
        award: "Best international subscription",
        blurb:
          "$12.99 a month for a credit — two dollars under Audible — with wide international coverage and ebooks in the same account. Frequently the best available plan outside the US.",
      },
    ],
    howWeChose: [
      "Every subscription here was paid for, used for at least one complete audiobook, and cancelled at the end of testing so we could see how each service behaves on the way out.",
      "We weighted three questions heavily: what does the trial actually give you, what can you listen to in the three weeks after your credit is spent, and what remains in your library when you stop paying.",
      "Prices are US list prices checked in September 2026 and change regularly. Confirm current pricing on each provider's own page.",
      "Audiobooks.com is our affiliate partner and is labelled wherever it appears. Audible is ranked above it as the better credit plan, and Libby — which pays us nothing — is our standing recommendation for anyone trying to spend less.",
    ],
    faqs: [
      {
        question: "Which audiobook subscription is the best value?",
        answer:
          "Everand at $11.99 for all-you-can-read if you get through two or more books a month, and Spotify Premium if you already pay for it and listen to about one. For a single book a month that you want to keep, the $14.95 credit plans from Audible and Audiobooks.com are better value because you own the result.",
      },
      {
        question: "Do you keep audiobooks when you cancel a subscription?",
        answer:
          "On credit plans — Audible, Audiobooks.com, Libro.fm, Kobo, Downpour — yes, anything bought with a credit stays. On all-you-can-listen plans like Everand and Storytel, and on Spotify's included hours, no: access ends with the subscription.",
      },
      {
        question: "What is the cheapest audiobook subscription?",
        answer:
          "Everand and Spotify Premium both start at $11.99 a month, and Kobo is $12.99 for a credit. Cheaper still is no subscription at all: Libby is free with a library card and Chirp sells permanent purchases from $0.99 with no monthly fee.",
      },
      {
        question: "Which audiobook subscription has the longest free trial?",
        answer:
          "Audiobooks.com — 30 days with up to three titles on most offers. Audible, Everand, Kobo and Downpour all run 30-day trials that give you a single credit.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "cheapest-audiobook-services",
    kind: "service",
    title: "Cheapest Ways to Listen to Audiobooks in 2026 | PageTurn",
    h1: "The cheapest ways to listen to audiobooks",
    description:
      "Free and low-cost audiobook options ranked by what they actually cost per book — from a free library card to $0.99 deals to the cheapest subscriptions.",
    shortAnswer:
      "The cheapest way to listen to audiobooks is a library card and Libby, which costs nothing and carries current, licensed titles. After that, Chirp's limited-time deals from $0.99 with no subscription, then Everand or Spotify Premium at $11.99 a month. Paying $14.95 for a credit plan only makes sense when you want a specific book and want to keep it.",
    intro: [
      "Audiobooks have a reputation for being expensive that a single library card mostly dissolves. Before subscribing to anything, it is worth knowing what the free and near-free options actually cover.",
      "This list is ordered by real cost per book, not by monthly price, because a $12 subscription you use once is more expensive than a $6 purchase you keep.",
    ],
    picks: [
      {
        ref: "libby",
        award: "Free",
        blurb:
          "A library card and the Libby app, and you are listening for nothing. The catalogue is whatever your library has licensed, so it varies enormously by region, and popular titles carry waits of weeks. Loans expire and nothing is yours. Still the best value in audiobooks by a very large margin, and the first thing anyone trying to spend less should set up.",
      },
      {
        ref: "chirp",
        award: "Cheapest purchases",
        blurb:
          "No monthly fee. Rotating limited-time deals, commonly $0.99–$5.99, bought permanently. Build a library for the price of a couple of months of Audible. The constraint is that you choose from what is discounted, and new releases are not.",
      },
      {
        ref: "spotify-audiobooks",
        award: "Cheapest if you already subscribe",
        blurb:
          "Premium from $11.99 includes 15 audiobook hours a month. If music already justifies the subscription, your audiobooks cost nothing extra — about one book a month for £0 marginal spend, which nothing paid can beat.",
      },
      {
        ref: "everand",
        award: "Cheapest for heavy listening",
        blurb:
          "From $11.99 for all-you-can-read including ebooks and magazines. At three or four books a month this is comfortably the lowest cost per hour of any paid option here. You keep nothing, and heavy use gets throttled.",
      },
      {
        ref: "audiobookstore-com",
        award: "Cheapest mainstream store",
        blurb:
          "Frequent sales and a free audiobook on signup, with club credits around $12.99. Prices are the reason to be here; the apps and the mid-sized catalogue are the compromise you accept for them.",
      },
      {
        ref: "downpour",
        award: "Cheapest way to hear a long book once",
        blurb:
          "Rentals from about $5, which is the right answer for a 25-hour book you are curious about but do not want to own. Purchases are DRM-free. US-focused and the app lags the competition.",
      },
    ],
    howWeChose: [
      "We ranked by realistic cost per finished audiobook rather than by advertised monthly price, because a cheap subscription you underuse costs more per book than an occasional discounted purchase.",
      "Free options are listed first and given the space they deserve. Libby earns us nothing and is our top recommendation on this page.",
      "Every service was tested on a paid account except Libby, which was tested on a genuine library card. Prices are US list prices checked in September 2026.",
    ],
    faqs: [
      {
        question: "What is the cheapest way to listen to audiobooks?",
        answer:
          "A library card and the Libby app — free, with real licensed audiobooks rather than public-domain recordings. The trade-offs are waiting lists on popular titles and loans that expire.",
      },
      {
        question: "How can I get audiobooks for free legally?",
        answer:
          "Libby and Hoopla through a public library card give you free access to licensed audiobooks. LibriVox offers volunteer-read public-domain classics at no cost. Most paid services also run 30-day free trials, which you can use once each.",
      },
      {
        question: "Is a subscription cheaper than buying audiobooks?",
        answer:
          "Only if you use it. A $14.95 credit plan is good value at one book a month and poor value at one book a quarter. If you listen occasionally, Chirp's $0.99–$5.99 deals with no monthly fee will cost you far less over a year.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },

  /* ---------------- review roundups: traffic intent ---------------- */
  {
    slug: "best-audiobooks",
    kind: "review",
    title: "The Best Audiobooks of 2026, Reviewed in Full | PageTurn",
    h1: "The best audiobooks we have reviewed",
    description:
      "Every audiobook on this list was listened to end to end before we wrote about it. Ranked with narrator notes, running times and honest reasons to skip.",
    shortAnswer:
      "Born a Crime, read by Trevor Noah himself, is the best audiobook we have reviewed — a memoir that is genuinely better heard than read. Project Hail Mary is the best argument for the format overall thanks to Ray Porter's narration, and Becoming and Educated lead the rest of the non-fiction.",
    intro: [
      "This is not a list of books we think you should have read. It is a list of audiobooks — productions, performances, running times — assembled from titles we listened to in full and scored on the narration as well as the writing.",
      "A great book can be a poor listen and a middling book can be a superb one. Where those two come apart, we say so.",
    ],
    picks: [
      {
        ref: "born-a-crime",
        award: "Best overall",
        blurb:
          "Trevor Noah reads his own memoir and performs every voice, accent and language in it, which no other narrator could have done. At 8h 44m it is also short enough to finish in a week. The rare audiobook that is unambiguously better than the printed book.",
      },
      {
        ref: "project-hail-mary",
        award: "Best first audiobook",
        blurb:
          "Ray Porter's performance turns a problem-solving novel into something genuinely gripping, and the book's second major character is one of the great audio-only pleasures. The title we hand to anyone who says they cannot get into audiobooks.",
      },
      {
        ref: "becoming",
        award: "Best non-fiction",
        blurb:
          "Michelle Obama reading her own life at 19h 03m. Long, but the author-narration does something a professional reading could not, and the pacing never sags the way most celebrity memoirs do in the second half.",
      },
      {
        ref: "educated",
        award: "Best memoir narration",
        blurb:
          "Julia Whelan reads Westover's account of leaving a survivalist family with complete restraint, and the flatness is exactly why the hardest passages land. Difficult listening in stretches, and worth it.",
      },
      {
        ref: "daisy-jones-and-the-six",
        award: "Best full-cast production",
        blurb:
          "An oral-history novel given an actual cast, including Jennifer Beals, Benjamin Bratt and Judy Greer. The format and the medium fit so well that the print edition feels like a transcript of this rather than the other way round.",
      },
      {
        ref: "the-martian",
        award: "Best for long drives",
        blurb:
          "R. C. Bray's narration is funny and propulsive across 10h 53m, and the log-entry structure means you can lose ten minutes to traffic and pick the thread straight back up. Close to the ideal road-trip listen.",
      },
      {
        ref: "circe",
        award: "Best literary fiction",
        blurb:
          "Perdita Weeks reads Miller's sentences slowly enough to let the images land one at a time. The centuries on the island test some listeners; the final third repays staying with it.",
      },
      {
        ref: "gone-girl",
        award: "Best thriller",
        blurb:
          "Two narrators for two unreliable accounts is the correct structural choice, and Julia Whelan and Kirby Heyborne both play it straight enough that the mid-book turn genuinely lands. At 19h 11m it is a commitment.",
      },
    ],
    howWeChose: [
      "Every title here was listened to in full — not sampled, not skimmed, not summarised from reviews — before it was written about.",
      "We score the writing and the narration separately in our notes, because they fail independently. A book with a five-star text and a two-star reader is a bad audiobook, and we say so rather than averaging it into something respectable.",
      "Running times are for the editions we actually listened to and are stated on every review, because length is the single most useful fact when choosing what to start next.",
      "Nobody pays for a placement on this list. One audiobook service we link to, Audiobooks.com, is an affiliate partner; publishers and authors are not.",
    ],
    relatedGenres: ["Fiction", "Memoir", "Mystery", "Sci-Fi", "Self-Help", "History"],
    faqs: [
      {
        question: "What is the best audiobook to start with?",
        answer:
          "Project Hail Mary, narrated by Ray Porter, or Born a Crime, read by Trevor Noah. Both are performances rather than readings, both are easy to follow while doing something else, and Born a Crime is under nine hours, which is short enough to finish before enthusiasm fades.",
      },
      {
        question: "What makes a good audiobook, as opposed to a good book?",
        answer:
          "Narration you can listen to for ten hours without irritation, a structure that survives interruption, and prose that works by ear. Dense footnotes, complex timelines and large casts of similarly named characters all make excellent books into difficult listens.",
      },
      {
        question: "How long is an average audiobook?",
        answer:
          "Most sit between 8 and 13 hours. Our shortest reviewed title is Atomic Habits at 5h 35m and the longest is Dune at 21h 02m. Anything over 15 hours needs a plan — those books fall apart in ten-minute fragments.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "best-audiobooks-for-beginners",
    kind: "review",
    title: "Best Audiobooks for Beginners: 6 First Listens That Work | PageTurn",
    h1: "The best audiobooks for first-time listeners",
    description:
      "Starting with the wrong audiobook is why most people decide the format is not for them. Six titles chosen specifically to survive a distracted first listen.",
    shortAnswer:
      "Start with Born a Crime or Project Hail Mary. Both are performances rather than readings, both survive being listened to while you are doing something else, and Born a Crime is under nine hours — short enough to finish before your enthusiasm runs out, which is the real failure mode for a first audiobook.",
    intro: [
      "Most people who conclude that audiobooks are not for them started with the wrong book. Usually it is long, usually the narrator is doing something mannered, and usually they were driving through traffic while trying to keep nine characters straight.",
      "The titles below were chosen against a specific brief: a narrator who rewards half-attention, a structure that forgives interruption, and a running time you can realistically finish.",
    ],
    picks: [
      {
        ref: "born-a-crime",
        award: "Start here",
        blurb:
          "8h 44m, read by the author, and structured as self-contained chapters — which means losing the thread for five minutes costs you nothing. Trevor Noah performs it rather than reads it. If you only try one audiobook, try this one.",
      },
      {
        ref: "project-hail-mary",
        award: "Best if you want fiction",
        blurb:
          "Ray Porter is doing the most engaging narration on our shelf, and the book is essentially one likeable man talking himself through problems, which is very easy to follow by ear. Longer at 16h 10m, but the momentum carries it.",
      },
      {
        ref: "atomic-habits",
        award: "Shortest commitment",
        blurb:
          "5h 35m, read by James Clear, and built from short self-contained sections. The lowest-risk way to find out whether you finish books by ear, because you will know inside a week.",
      },
      {
        ref: "the-martian",
        award: "Best for commutes",
        blurb:
          "The log-entry structure is practically designed for interrupted listening — every entry is a fresh start. R. C. Bray is funny and clear at 10h 53m, and no chapter demands you remember much from the last one.",
      },
      {
        ref: "daisy-jones-and-the-six",
        award: "Best full cast",
        blurb:
          "9h 03m with a real cast, so every character has a genuinely different voice. That removes the single most common beginner complaint — losing track of who is speaking — almost entirely.",
      },
      {
        ref: "the-silent-patient",
        award: "Best page-turner",
        blurb:
          "8h 43m of straightforward, propulsive thriller with two clear narrators. It is not the most sophisticated book on this list, and it is very hard to stop listening to, which is exactly what a first audiobook needs to be.",
      },
    ],
    howWeChose: [
      "We picked against the three things that make beginners give up: running times over about twelve hours, narrators whose performance style demands full attention, and structures that punish you for missing five minutes.",
      "Every title was listened to in full by us before it was recommended, and the running times quoted are for the editions we actually heard.",
      "Where a book on this list has a real drawback — Project Hail Mary's flashback-heavy opening two hours, for instance — it is stated in the full review rather than hidden.",
    ],
    faqs: [
      {
        question: "What is the best audiobook for someone who has never listened to one?",
        answer:
          "Born a Crime by Trevor Noah. It is 8h 44m, read by the author, and built from self-contained chapters, so missing a few minutes costs you nothing. It is also a performance rather than a reading, which is what wins most sceptics over.",
      },
      {
        question: "How long should my first audiobook be?",
        answer:
          "Under about ten hours. The most common reason a first audiobook fails is that it was never finished, and a twenty-hour epic is a very large first commitment. Atomic Habits at 5h 35m and Born a Crime at 8h 44m are both realistically finishable inside a fortnight.",
      },
      {
        question: "What speed should I listen at?",
        answer:
          "Start at 1x and stay there for your first book. Most listeners drift up to 1.25x or 1.5x once they are used to the format, but speeding up early makes narration harder to follow and is a common reason people conclude audiobooks 'do not work' for them.",
      },
      {
        question: "Should I pay for a subscription to try audiobooks?",
        answer:
          "Not immediately. Try a library card through Libby first, which is free. If you want a paid trial, Audiobooks.com's 30 days with up to three titles gives you the most listening before any money changes hands.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "best-short-audiobooks",
    kind: "review",
    title: "Best Short Audiobooks Under 10 Hours | PageTurn",
    h1: "The best short audiobooks you can actually finish",
    description:
      "Audiobooks under ten hours, reviewed in full. Short enough for a week of commuting, and none of them feel abridged.",
    shortAnswer:
      "The best short audiobooks we have reviewed are Born a Crime (8h 44m), Daisy Jones & The Six (9h 03m), The Silent Patient (8h 43m) and Atomic Habits (5h 35m). All four are complete, unabridged productions — short because the books are short, not because anything was cut.",
    intro: [
      "A short audiobook is not a lesser one. Under ten hours is roughly a week of commuting or two long walks, and it is the length most likely to actually get finished.",
      "Everything here is unabridged. We do not review abridged editions, because an abridgement is a different book with the same title.",
    ],
    picks: [
      {
        ref: "atomic-habits",
        award: "Shortest — 5h 35m",
        blurb:
          "James Clear reading his own book in short, self-contained sections. Finishable in a few commutes, and the structure means stopping mid-chapter costs nothing.",
      },
      {
        ref: "the-silent-patient",
        award: "8h 43m",
        blurb:
          "A tight, propulsive thriller with two narrators keeping the perspectives clean. Hard to stop listening to, which makes the running time feel shorter than it is.",
      },
      {
        ref: "born-a-crime",
        award: "8h 44m",
        blurb:
          "Trevor Noah performing his own memoir. Self-contained chapters, no plot to lose track of, and the best single audiobook on our shelf regardless of length.",
      },
      {
        ref: "daisy-jones-and-the-six",
        award: "9h 03m",
        blurb:
          "A full-cast oral history that moves quickly because it is built from short spoken fragments. The cast makes it effortless to follow at speed.",
      },
    ],
    howWeChose: [
      "Everything here runs under ten hours in the unabridged edition we listened to. We do not include abridged versions of longer books, which are a different product sold under the same name.",
      "We favoured books whose structure suits short listening sessions — self-contained chapters, clear speaker changes, and no dependence on remembering fine detail from six hours earlier.",
      "Running times are taken from the editions we heard and are listed on every individual review.",
    ],
    faqs: [
      {
        question: "What is the shortest good audiobook?",
        answer:
          "Of the titles we have reviewed in full, Atomic Habits at 5h 35m, read by James Clear. Its short self-contained sections also make it unusually easy to listen to in fragments.",
      },
      {
        question: "How long does it take to finish a 9-hour audiobook?",
        answer:
          "About a week at a typical 45-minute daily commute each way, or two to three long walks or drives. At 1.25x speed a nine-hour book takes just over seven hours of real time.",
      },
      {
        question: "Are short audiobooks abridged?",
        answer:
          "Not necessarily, and none of the ones on this page are. These books are short because the texts are short. Abridged editions do exist and are usually labelled — we do not review them, because an abridgement is a materially different work.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "best-audiobooks-for-road-trips",
    kind: "review",
    title: "Best Audiobooks for Road Trips and Long Drives | PageTurn",
    h1: "The best audiobooks for a long drive",
    description:
      "Long drives need a specific kind of audiobook: forgiving structure, one clear narrator, and enough momentum to keep you awake. Six that work.",
    shortAnswer:
      "The Martian and Project Hail Mary are the two best road-trip audiobooks we have reviewed — both are funny, propulsive, and built so that losing five minutes to a junction costs you nothing. For longer trips, Dune at 21h 02m will cover a genuinely serious amount of motorway.",
    intro: [
      "Driving is the hardest listening environment there is. Your attention keeps leaving, the road noise eats quiet passages, and a book that needs concentration becomes either a bad book or a dangerous drive.",
      "What works is momentum, one clear voice, and a structure that lets you drop out and rejoin without confusion. Literary novels with intricate timelines do not qualify, however good they are.",
    ],
    picks: [
      {
        ref: "the-martian",
        award: "Best road-trip audiobook",
        blurb:
          "Log entries mean every few minutes is a natural re-entry point, R. C. Bray is consistently funny, and nothing in it depends on remembering a detail from four hours ago. Close to a perfect driving book at 10h 53m.",
      },
      {
        ref: "project-hail-mary",
        award: "Best for a very long trip",
        blurb:
          "16h 10m of Ray Porter narrating one man talking himself through problems out loud — which is exactly the register that survives road noise. The first two hours jump between timelines; after that it is plain sailing.",
      },
      {
        ref: "born-a-crime",
        award: "Best for shared listening",
        blurb:
          "Funny, self-contained chapters that work for a car with more than one person in it, and no plot to spoil if someone dozes off. 8h 44m covers most single-day drives.",
      },
      {
        ref: "gone-girl",
        award: "Best to stay awake",
        blurb:
          "19h 11m of steadily tightening tension with two narrators keeping the two accounts distinct. The mid-book turn is genuinely startling, which is worth a lot at hour six of a motorway.",
      },
      {
        ref: "dune",
        award: "Longest haul",
        blurb:
          "21h 02m with a partial cast. Not a book to start on a two-hour drive — but on a multi-day trip, the scale is the point. The large cast of names is the one real risk while driving.",
      },
      {
        ref: "daisy-jones-and-the-six",
        award: "Best for a passenger-heavy car",
        blurb:
          "A full cast means everybody in the car can tell who is speaking without concentrating. 9h 03m, and the oral-history format tolerates conversation breaks better than almost anything else on our shelf.",
      },
    ],
    howWeChose: [
      "We prioritised structure over literary merit. Books with self-contained chapters, log entries or distinct cast voices survive driving; books with intricate non-linear timelines do not, no matter how good they are on the page.",
      "Single-narrator or full-cast productions both work; what fails is a narrator who drops to a near-whisper for emphasis, because road noise erases it.",
      "Every title was listened to in full, and a good part of that listening was genuinely done in a car.",
    ],
    faqs: [
      {
        question: "What is the best audiobook for a long drive?",
        answer:
          "The Martian, narrated by R. C. Bray. Its log-entry structure gives you a natural re-entry point every few minutes, which is exactly what driving needs, and at 10h 53m it covers a full day on the road.",
      },
      {
        question: "How many hours of audiobook do I need for a road trip?",
        answer:
          "Roughly match the running time to your driving hours and add a little. A ten-hour drive is comfortably covered by one 10–12 hour audiobook; a multi-day trip is better served by something like Dune at 21h 02m, or by two shorter books so you get a clean break.",
      },
      {
        question: "Can I download audiobooks for offline listening in the car?",
        answer:
          "Yes, on every service we tested. Download before you leave — motorway coverage is unreliable and streaming a book over patchy signal is the fastest way to ruin a drive. Audiobooks.com, Audible and Libby all support offline downloads in their apps.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "best-thriller-and-mystery-audiobooks",
    kind: "review",
    title: "Best Thriller and Mystery Audiobooks, Reviewed | PageTurn",
    h1: "The best thriller and mystery audiobooks",
    description:
      "Thrillers live or die on narration. The mystery and thriller audiobooks we have listened to in full, with honest notes on which twists survive the format.",
    shortAnswer:
      "Gone Girl is the best thriller audiobook we have reviewed — two narrators for two unreliable accounts is the right structural choice and the mid-book turn genuinely lands. The Silent Patient is the better pick if you want something shorter and faster at 8h 43m.",
    intro: [
      "Thrillers are unusually sensitive to narration. A twist depends on the reader not telegraphing it, and plenty of otherwise good performances give the game away with a change in tone three chapters early.",
      "These are the mystery and thriller audiobooks we have heard in full, with notes on how well each production keeps its secrets.",
    ],
    picks: [
      {
        ref: "gone-girl",
        award: "Best thriller",
        blurb:
          "Julia Whelan and Kirby Heyborne split the two accounts, and both play it straight enough that the turn arrives properly. 19h 11m is a real commitment, and the second half is where the audio format earns it.",
      },
      {
        ref: "the-silent-patient",
        award: "Best short thriller",
        blurb:
          "8h 43m, two narrators, and relentless forward motion. Not the most sophisticated writing here, and very difficult to stop listening to — which for this genre is most of the job.",
      },
      {
        ref: "where-the-crawdads-sing",
        award: "Best atmosphere",
        blurb:
          "Cassandra Campbell's narration is the reason to choose audio for this one; the marsh setting works far better spoken than on the page. The mystery plot is the weaker half of the book, and 12h 12m is slower than the two above.",
      },
    ],
    howWeChose: [
      "We listened to each title in full and paid particular attention to whether the narration preserves the twist — the most common failure in thriller audio is a reader who signals the turn before the text does.",
      "Multi-narrator productions were assessed on whether the voices stay distinguishable at speed, since most listeners run thrillers at 1.25x or faster.",
      "This is a short list because it only contains books we have actually finished. It grows as we review more; it does not get padded with titles we have not heard.",
    ],
    relatedGenres: ["Mystery"],
    faqs: [
      {
        question: "What is the best thriller audiobook?",
        answer:
          "Gone Girl, narrated by Julia Whelan and Kirby Heyborne. Splitting the two unreliable accounts between two narrators is exactly right for the structure, and neither of them telegraphs the mid-book turn.",
      },
      {
        question: "Do audiobook thrillers spoil their own twists?",
        answer:
          "Badly narrated ones do. A reader who shifts tone before the text does will give a twist away several chapters early. It is the single thing we listen hardest for when reviewing this genre, and it is why we score narration separately from writing.",
      },
      {
        question: "Are thrillers good audiobooks for commuting?",
        answer:
          "Generally yes — momentum survives interruption well. The exception is thrillers with large casts or intricate timelines, which are hard to reassemble after a five-minute break. The Silent Patient at 8h 43m is a better commute choice than Gone Girl at 19h 11m.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "best-sci-fi-audiobooks",
    kind: "review",
    title: "Best Sci-Fi Audiobooks, Reviewed in Full | PageTurn",
    h1: "The best science fiction audiobooks",
    description:
      "Science fiction is the genre audio helps most and hurts most. The sci-fi audiobooks we have listened to end to end, with notes on cast, pace and difficulty.",
    shortAnswer:
      "Project Hail Mary, narrated by Ray Porter, is the best science fiction audiobook we have reviewed and one of the best audiobooks of any kind. The Martian is the easier, funnier entry point at 10h 53m, and Dune at 21h 02m is the one to attempt once you are comfortable with long, name-heavy listening.",
    intro: [
      "Science fiction gains more from audio than almost any genre and also suffers more. A full cast solves the format's biggest problem — keeping a large crew of characters distinct — while dense invented vocabulary is far harder to absorb by ear than on a page you can glance back at.",
      "These three are what we have listened to in full, ordered by how easy they are to start with.",
    ],
    picks: [
      {
        ref: "project-hail-mary",
        award: "Best sci-fi audiobook",
        blurb:
          "Ray Porter's performance is the reason to choose audio here, and the book's second major character is a genuinely audio-first pleasure. 16h 10m, with a flashback-heavy opening couple of hours that settles quickly.",
      },
      {
        ref: "the-martian",
        award: "Best starting point",
        blurb:
          "10h 53m, log-entry structure, and R. C. Bray keeping it funny throughout. The most forgiving science fiction audiobook on our shelf if you are listening while doing something else.",
      },
      {
        ref: "dune",
        award: "Best epic",
        blurb:
          "21h 02m with Scott Brick, Simon Vance, Ilyana Kadushin and a partial cast. The scale is the appeal and the invented vocabulary is the obstacle — this one needs blocks of at least 45 minutes to work properly.",
      },
    ],
    howWeChose: [
      "Every title was listened to in full. We weighted how well each production handles the genre's specific audio problem: large casts, invented terminology and long stretches of technical explanation.",
      "Where a book demands sustained attention — Dune in particular — we say so rather than recommending it as commute listening, because the format mismatch is what makes people abandon it.",
      "This is a short list because it contains only what we have finished. It grows with each new review rather than being padded out.",
    ],
    relatedGenres: ["Sci-Fi"],
    faqs: [
      {
        question: "What is the best science fiction audiobook?",
        answer:
          "Project Hail Mary, narrated by Ray Porter. The performance carries sixteen hours of problem-solving without flagging, and one of the book's central characters is realised through voice in a way the printed edition simply cannot match.",
      },
      {
        question: "Is Dune a good audiobook?",
        answer:
          "It is a good production and a demanding listen. At 21h 02m with a partial cast and a great deal of invented vocabulary, it rewards long uninterrupted sessions and falls apart in ten-minute fragments. Start with The Martian or Project Hail Mary if you are new to the format.",
      },
      {
        question: "Are full-cast audiobooks better for sci-fi?",
        answer:
          "Often, yes. The genre's biggest audio problem is keeping a large crew of characters distinct, and a cast solves it directly. Single-narrator productions can work superbly too — Project Hail Mary is one narrator — when the book is built around a small number of voices.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "best-memoir-audiobooks",
    kind: "review",
    title: "Best Memoir Audiobooks (Author-Read and Otherwise) | PageTurn",
    h1: "The best memoir audiobooks",
    description:
      "Memoir is the genre where author narration matters most — and where it sometimes goes wrong. The memoirs we have listened to in full, honestly assessed.",
    shortAnswer:
      "Born a Crime, read by Trevor Noah, is the best memoir audiobook we have reviewed and one of the few audiobooks that is clearly better than its printed edition. Becoming is the best of the long author-read memoirs at 19h 03m, and Educated is the strongest professional narration, with Julia Whelan reading it almost flat by design.",
    intro: [
      "Memoir is the one genre where the received wisdom — always choose the author-read edition — is roughly right, but only when the author can hold a pace. Plenty cannot, and a flat authorial reading is worse than a good professional one.",
      "All three below were listened to in full. Two are author-read and one is not, and the one that is not is arguably the best-narrated of the three.",
    ],
    picks: [
      {
        ref: "born-a-crime",
        award: "Best memoir audiobook",
        blurb:
          "Trevor Noah performing his own life, including the accents and languages that no other narrator could deliver. 8h 44m, self-contained chapters, and genuinely funny. If you listen to one memoir, this is it.",
      },
      {
        ref: "becoming",
        award: "Best long memoir",
        blurb:
          "19h 03m of Michelle Obama reading her own account. Long, and the author narration earns the length — the second half does not sag the way most celebrity memoirs do.",
      },
      {
        ref: "educated",
        award: "Best narration",
        blurb:
          "Julia Whelan reads Westover's memoir with complete restraint, refusing every chance to editorialise, which is precisely why the hardest passages hit. Contains sustained description of injury and abuse; it is a difficult listen by design.",
      },
    ],
    howWeChose: [
      "We assessed author-read editions on whether the author can actually sustain a pace across ten or more hours, not on the assumption that author narration is automatically better.",
      "Content warnings are stated plainly in the individual reviews. Memoir carries more of them than any other genre we cover, and burying them would be a disservice.",
      "Each title was listened to end to end before being written about.",
    ],
    relatedGenres: ["Memoir"],
    faqs: [
      {
        question: "What is the best memoir audiobook?",
        answer:
          "Born a Crime, read by Trevor Noah. At 8h 44m he performs the accents and languages the book describes, which a professional narrator could not have done, and the self-contained chapters make it unusually easy to listen to in fragments.",
      },
      {
        question: "Are author-narrated memoirs better?",
        answer:
          "Usually, when the author can hold a pace across ten hours or more — Trevor Noah and Michelle Obama both can. When they cannot, a professional reading is better. Educated, narrated by Julia Whelan rather than Tara Westover, is the best-narrated memoir on our shelf.",
      },
      {
        question: "What is a good memoir audiobook to start with?",
        answer:
          "Born a Crime at 8h 44m. It is short, funny, structured as standalone chapters, and does not require you to hold a timeline in your head — everything that makes a first audiobook work.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
];

export function getRoundup(slug: string): Roundup | undefined {
  return roundups.find((r) => r.slug === slug);
}

export const serviceRoundups = roundups.filter((r) => r.kind === "service");
export const reviewRoundups = roundups.filter((r) => r.kind === "review");

/**
 * Reviews in a roundup's related genres that are not already an explicit pick.
 * Lets genre roundups deepen automatically as the review shelf grows, instead of
 * needing every list edited by hand.
 */
export function additionalReviewsFor(roundup: Roundup) {
  if (!roundup.relatedGenres?.length) return [];
  const picked = new Set(roundup.picks.map((p) => p.ref));
  return reviews.filter((r) => roundup.relatedGenres!.includes(r.genre) && !picked.has(r.slug));
}

/** Roundups that feature a given service, used for internal linking on service pages. */
export function roundupsForService(serviceSlug: string): Roundup[] {
  return serviceRoundups.filter((r) => r.picks.some((p) => p.ref === serviceSlug));
}

/** Roundups that feature a given review, used for internal linking on review pages. */
export function roundupsForReview(reviewSlug: string): Roundup[] {
  return reviewRoundups.filter((r) => r.picks.some((p) => p.ref === reviewSlug));
}

/** Guard against a pick referencing a slug that no longer exists. */
export function unresolvedPicks(): string[] {
  const missing: string[] = [];
  for (const roundup of roundups) {
    const known =
      roundup.kind === "service"
        ? new Set(services.map((s) => s.slug))
        : new Set(reviews.map((r) => r.slug));
    for (const pick of roundup.picks) {
      if (!known.has(pick.ref)) missing.push(`${roundup.slug} → ${pick.ref}`);
    }
  }
  return missing;
}
