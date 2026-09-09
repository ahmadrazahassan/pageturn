import type { Faq } from "@/lib/seo";

/**
 * Head-to-head comparison pages.
 *
 * These exist because "x vs y" is a distinct search intent that needs its own
 * URL. Burying the same answer inside a service review does not rank for it —
 * every page currently holding these results is a dedicated comparison page.
 *
 * Every factual claim here must match the matching record in `services.ts`.
 */
export type VersusVerdictRow = {
  /** What the listener is optimising for. */
  need: string;
  /** Slug of the service that wins for that need. */
  winner: string;
  why: string;
};

export type Versus = {
  slug: string;
  /** Service slugs, in the order they appear in the headline. */
  a: string;
  b: string;
  title: string;
  h1: string;
  description: string;
  /** The direct answer, rendered above the fold for the featured snippet. */
  shortAnswer: string;
  intro: string[];
  verdictRows: VersusVerdictRow[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: Faq[];
  updated: string;
  updatedISO: string;
};

export const versusPages: Versus[] = [
  {
    slug: "audiobooks-com-vs-audible",
    a: "audiobooks-com",
    b: "audible",
    title: "Audiobooks.com vs Audible 2026: Which Is Better? | PageTurn",
    h1: "Audiobooks.com vs Audible",
    description:
      "We paid for both. Audiobooks.com vs Audible compared on price, free trial, catalogue, apps and what you keep when you cancel.",
    shortAnswer:
      "Both cost $14.95 a month and both let you keep credit purchases forever. Audible has the bigger catalogue and the better returns policy, so it wins for heavy listeners and anyone chasing exclusives. Audiobooks.com gives you a 30-day trial with up to three titles instead of Audible's 30 days and one credit, plus an included VIP library between credits — which makes it the better place to find out whether audiobooks work for you at all.",
    intro: [
      "These two services are priced identically, run the same credit model, and are marketed almost interchangeably. The differences that actually matter show up in three places: how much you get during the trial, what you can listen to in the weeks when your credit is already spent, and how easy it is to hand back a book you dislike.",
      "We have held paid accounts on both. What follows is the comparison we wanted when we were deciding — not a feature table where every row is a green tick.",
    ],
    verdictRows: [
      {
        need: "Trying audiobooks for the first time",
        winner: "audiobooks-com",
        why: "30 days with up to three titles is the most generous trial in the category. A month and three books is long enough to answer the real question — do you actually finish books by ear?",
      },
      {
        need: "The biggest possible catalogue",
        winner: "audible",
        why: "Audible's library is the largest in the market and holds the heaviest slate of exclusives. If you arrive with a specific list, it is the one most likely to have all of it.",
      },
      {
        need: "Returning a book you did not enjoy",
        winner: "audible",
        why: "Audible lets you return or exchange a title yourself from the app or site. Audiobooks.com returns go through customer support and are handled case by case.",
      },
      {
        need: "Listening between credits",
        winner: "audiobooks-com",
        why: "The included VIP library is genuinely usable, so the three weeks after you spend your credit are not dead time.",
      },
      {
        need: "Kindle and Alexa households",
        winner: "audible",
        why: "Whispersync and Echo playback only exist on the Amazon side, and they are real conveniences if you already live there.",
      },
    ],
    sections: [
      {
        heading: "Price: identical, so ignore it",
        paragraphs: [
          "Audiobooks.com is $14.95 a month in the US. Audible Premium Plus is $14.95 a month in the US. One credit each, every month, on both. Any comparison that declares a price winner here is inventing a difference that does not exist.",
          "Where cost does diverge is the first month. Audible's trial is 30 days and one credit. Audiobooks.com's trial is 30 days and, on most offers, three titles. If you cancel at the end of either trial you have paid nothing, so the honest framing is that Audiobooks.com hands you more books for the same zero dollars.",
          "Both services let you keep anything bought with a credit after you cancel. That matters more than the monthly figure: a cancelled subscription on either platform leaves you with a library rather than an empty app.",
        ],
      },
      {
        heading: "Catalogue: Audible is bigger, and it is not close",
        paragraphs: [
          "Audiobooks.com lists 400,000+ audiobooks and adds podcasts and summaries on top. Audible's catalogue is the largest in the market and carries a much heavier slate of exclusives — Audible Originals simply do not appear anywhere else.",
          "In practice the gap is invisible for mainstream listening. Every bestseller, every prize list, every book your friends are talking about is on both. The gap becomes visible at the edges: older backlist, niche non-fiction, and anything Amazon has commissioned itself.",
          "The test we would apply is boring but decisive. Write down the next five audiobooks you intend to listen to and search for them on both sites before signing up for either. If all five are on both, catalogue size is not a factor in your decision, and you should choose on trial length instead.",
        ],
      },
      {
        heading: "What happens between credits",
        paragraphs: [
          "This is the difference most comparisons skip. On a one-credit-a-month plan you spend the credit in the first few days and then have three weeks of nothing, unless the service gives you something to listen to.",
          "Both answer this. Audible has the Plus Catalog; Audiobooks.com has its included VIP library. Neither is a substitute for the main catalogue — both are curated selections that rotate — but both are large enough that you will find something. We found the Audiobooks.com VIP library slightly more useful for casual listening and the Plus Catalog slightly stronger on non-fiction.",
          "If you listen to more than one book a month, this section matters more to you than catalogue size does, because you will spend most of the month inside the included library rather than the paid one.",
        ],
      },
      {
        heading: "Apps, cars and devices",
        paragraphs: [
          "Both apps are good, and both cover the things that break a listening habit when they fail: granular playback speed, a sleep timer that works, bookmarks that sync, and reliable downloads for offline listening.",
          "Audiobooks.com runs on iOS, Android, a web player, CarPlay, Android Auto and Sonos. Audible has wider device reach overall, and the Amazon-native advantages are real if you own an Echo or read on a Kindle — Whispersync moving you between the ebook and the audiobook is a genuinely nice feature that Audiobooks.com has no answer to.",
          "Both are DRM-protected and app-only. Neither gives you a file you can move to a player of your choice. If that is the thing you care about, this is the wrong comparison entirely and you want Libro.fm or Downpour instead.",
        ],
      },
      {
        heading: "Who should pick which",
        paragraphs: [
          "Start with Audiobooks.com if you are not yet sure audiobooks are for you, if you want the most listening for a month of paying nothing, or if you expect to listen between credits rather than only once a month.",
          "Choose Audible if you already know you are a heavy listener, if your list includes exclusives, if you want to return books without asking anyone, or if you own a Kindle and an Echo and want everything to sync.",
          "The genuinely sensible move, since both trials are free and 30 days long, is to run them one after the other. Two months, no money, and you will know from experience rather than from a comparison table.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Audiobooks.com cheaper than Audible?",
        answer:
          "No. Both are $14.95 a month in the US for one credit. Audiobooks.com gives you more during the free trial — 30 days with up to three titles versus Audible's 30 days and one credit — but the ongoing monthly price is identical.",
      },
      {
        question: "Do you keep your audiobooks if you cancel?",
        answer:
          "On both services, yes, for anything bought with a credit. Titles you only listened to through Audible's Plus Catalog or the Audiobooks.com VIP library go away when the subscription ends, because those are access libraries rather than purchases.",
      },
      {
        question: "Which has the bigger library, Audiobooks.com or Audible?",
        answer:
          "Audible. Audiobooks.com lists 400,000+ titles; Audible's catalogue is the largest in the market and includes exclusives that are not licensed anywhere else. For mainstream bestsellers the difference is rarely noticeable.",
      },
      {
        question: "Can you return an audiobook on Audiobooks.com?",
        answer:
          "Returns are possible but they go through customer support and are decided case by case. Audible lets you return or exchange a title yourself from the app or website, which is the easier process of the two.",
      },
      {
        question: "Can I try both for free?",
        answer:
          "Yes. Both run 30-day free trials, and nothing stops you running one and then the other. That is two months of listening for nothing, and it settles the question better than any comparison can.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "audible-vs-spotify-audiobooks",
    a: "audible",
    b: "spotify-audiobooks",
    title: "Audible vs Spotify Audiobooks 2026: Which Is Better? | PageTurn",
    h1: "Audible vs Spotify Audiobooks",
    description:
      "Spotify includes 15 hours of audiobooks a month with Premium. Audible gives you a credit and a bigger catalogue. Which one suits how you actually listen?",
    shortAnswer:
      "If you already pay for Spotify Premium, its included audiobooks are effectively free and worth using — 15 hours a month covers roughly one average book. If audiobooks are your main listening habit, that cap will frustrate you within weeks and Audible is the better home, because a credit buys a book you keep no matter how long it runs.",
    intro: [
      "This comparison is unusual because for a lot of people the answer is 'you already have one of them'. Spotify bundled audiobooks into Premium rather than selling them separately, so the real question is not which service is better but whether the included allowance covers how much you listen.",
      "We tested both against a normal listening month rather than a feature list, because the 15-hour cap is the single fact that decides it.",
    ],
    verdictRows: [
      {
        need: "Occasional listening — a book every month or two",
        winner: "spotify-audiobooks",
        why: "You are already paying for Premium. 15 hours a month covers that pace at no extra cost, which no paid service can beat.",
      },
      {
        need: "Heavy listening",
        winner: "audible",
        why: "The 15-hour cap is roughly one average audiobook. Past that Spotify stops and Audible does not.",
      },
      {
        need: "Long books",
        winner: "audible",
        why: "A 21-hour Dune or a 19-hour Gone Girl burns Spotify's whole monthly allowance in one title. A credit covers any length.",
      },
      {
        need: "Keeping what you listen to",
        winner: "audible",
        why: "Audible credit purchases survive cancellation. Spotify's included listening ends with the subscription unless you buy the title separately.",
      },
      {
        need: "Paying nothing extra",
        winner: "spotify-audiobooks",
        why: "If Premium is already in your budget, the audiobooks cost zero additional dollars.",
      },
    ],
    sections: [
      {
        heading: "The 15-hour cap is the whole comparison",
        paragraphs: [
          "Spotify includes 15 hours of audiobook listening a month with Premium, drawn from a catalogue of 350,000+ included titles. Premium starts at $11.99 a month, and the audiobooks are bundled rather than charged for.",
          "Fifteen hours is about one average audiobook. Our own review shelf runs from 5h 35m for Atomic Habits to 21h 02m for Dune, with most literary fiction landing between 10 and 13 hours. So the cap comfortably covers one book a month, sometimes two short ones, and cannot cover one long one.",
          "Audible has no equivalent limit. Your credit buys a title of any length and you keep it. A 21-hour epic costs exactly the same credit as a six-hour self-help book, which quietly makes Audible far better value for long-form listeners.",
        ],
      },
      {
        heading: "Catalogue and what happens at the edges",
        paragraphs: [
          "Audible's catalogue is the largest in the market, with a heavy slate of exclusives that exist nowhere else. Spotify's included catalogue is 350,000+ titles and has expanded quickly, but it is a licensed selection rather than a complete store.",
          "The practical consequence is that Spotify is more likely to be missing a specific title you have decided on, and more likely to have it in a 'buy separately' tier rather than the included one. If you choose books by browsing, you will barely notice. If you arrive with a list, you will.",
          "Neither gives you DRM-free files. Both are app-locked.",
        ],
      },
      {
        heading: "Listening experience",
        paragraphs: [
          "Spotify's advantage is that audiobooks live in the app you already have open. No second app, no second account, no separate download queue — your book sits next to your playlists and picks up where you left it across devices.",
          "That convenience has a cost. Spotify's app was built for music, and its audiobook tooling is thinner: sleep timer, speed controls and bookmarking all exist but are less refined than Audible's, and finding your place in a long book is fiddlier than it should be.",
          "Audible's app is purpose-built and shows it, with better chapter navigation and the Amazon-ecosystem extras — Whispersync between Kindle and audio, Echo playback — that Spotify has no answer to.",
        ],
      },
      {
        heading: "Who should pick which",
        paragraphs: [
          "Keep Spotify if you already pay for Premium and listen to roughly a book a month or less. Paying $14.95 for Audible on top of a Premium subscription you already have makes no sense until you are regularly hitting the cap.",
          "Move to Audible when you notice the cap. That is the signal. If you finish your 15 hours in the first fortnight, or you keep postponing a long book because it would eat the whole month, you have outgrown the bundle.",
          "There is no reason both cannot coexist — Spotify for the casual listen, Audible for books you want to own, and a library card through Libby underneath both, which is free and which most listeners forget about entirely.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many audiobooks do you get with Spotify Premium?",
        answer:
          "Spotify Premium includes 15 hours of audiobook listening a month from its included catalogue. That is roughly one average-length audiobook, or two short ones, and it will not cover a single long title such as Dune at 21 hours.",
      },
      {
        question: "Are Spotify audiobooks free?",
        answer:
          "They are included with Premium at no extra charge, so if you already subscribe there is no additional cost. They are not free without Premium, which starts at $11.99 a month.",
      },
      {
        question: "Do you keep Spotify audiobooks if you cancel Premium?",
        answer:
          "No. Included listening ends with the subscription. Only titles you buy separately stay with you. Audible credit purchases, by contrast, remain in your library after you cancel.",
      },
      {
        question: "Is Audible worth it if I already have Spotify?",
        answer:
          "Only once you are regularly hitting Spotify's 15-hour cap, or if you want long books and exclusives. Below about one book a month, paying $14.95 on top of Premium buys you very little you do not already have.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "libro-fm-vs-audible",
    a: "libro-fm",
    b: "audible",
    title: "Libro.fm vs Audible 2026: DRM-Free vs the Biggest Catalogue | PageTurn",
    h1: "Libro.fm vs Audible",
    description:
      "Libro.fm sells DRM-free audiobooks and splits revenue with an independent bookshop. Audible has the biggest catalogue. Same price — here is the real trade-off.",
    shortAnswer:
      "The price is effectively the same — $14.99 at Libro.fm, $14.95 at Audible. The trade-off is ownership versus breadth. Libro.fm gives you DRM-free files you can play in any app, forever, and sends a share of your money to an independent bookshop you choose. Audible gives you a bigger catalogue, exclusives, easy returns and Kindle sync, in exchange for files that only ever work inside Audible's apps.",
    intro: [
      "These two are the clearest philosophical split in audiobooks. One is a store built to make your purchases permanent and portable. The other is a platform built to keep you inside a very good ecosystem.",
      "Neither is a scam and neither is a charity. The question is which limitation you would rather live with.",
    ],
    verdictRows: [
      {
        need: "Owning your files outright",
        winner: "libro-fm",
        why: "Downloads are DRM-free. They play in any app, on any device, and still work if Libro.fm stops existing.",
      },
      {
        need: "The biggest catalogue and exclusives",
        winner: "audible",
        why: "Audible's library is the largest in the market and its Originals are licensed nowhere else.",
      },
      {
        need: "Supporting an independent bookshop",
        winner: "libro-fm",
        why: "You pick a shop at signup and it receives a share of what you spend. Audible has no equivalent.",
      },
      {
        need: "Returning a book you disliked",
        winner: "audible",
        why: "Self-service returns and exchanges from the app. Libro.fm's model is a straightforward purchase.",
      },
      {
        need: "Kindle sync and Echo playback",
        winner: "audible",
        why: "Whispersync and Alexa only exist on the Amazon side.",
      },
    ],
    sections: [
      {
        heading: "DRM is the decision",
        paragraphs: [
          "Libro.fm downloads are DRM-free. You get the actual audio file, you can back it up, and you can play it in whatever app you prefer. Nothing about that file depends on Libro.fm continuing to exist, or continuing to like you.",
          "Audible files are DRM-protected and play only in Audible's apps. You keep credit purchases after cancelling, but 'keep' means the title stays in your Audible library — not that you hold a file you could move elsewhere.",
          "For most listeners this is abstract until the day it is not. If you have ever lost access to purchased media, or you keep a personal archive, or you simply dislike the arrangement on principle, Libro.fm is the answer and no catalogue advantage will change that.",
        ],
      },
      {
        heading: "Catalogue: closer than people assume",
        paragraphs: [
          "Libro.fm carries 500,000+ titles from both major and independent publishers — a genuinely large store, not a boutique. For mainstream new releases and bestsellers you will very rarely find a gap.",
          "Audible still wins on total size and wins decisively on exclusives. Audible Originals are commissioned by Amazon and are not licensed to Libro.fm or anyone else, so if a specific Original is on your list, that settles it.",
          "The gap also shows in deep backlist and unusual non-fiction, where Audible's sheer scale tells. But the common assumption that Libro.fm is missing normal books is wrong.",
        ],
      },
      {
        heading: "Price, credits and flexibility",
        paragraphs: [
          "Libro.fm is $14.99 a month for one credit, and it also sells à la carte, so you can stop subscribing and still buy the occasional book without losing anything. Audible is $14.95 a month for one credit.",
          "Libro.fm's first month gives you one credit. Audible's 30-day trial also gives you one credit. There is no meaningful trial advantage either way here.",
          "Where Audible pulls ahead on flexibility is returns. Being able to hand back a book with a bad narrator, yourself, in under a minute, is worth more than it sounds — narration is the main reason an audiobook fails, and a sample does not always reveal it.",
        ],
      },
      {
        heading: "Who should pick which",
        paragraphs: [
          "Choose Libro.fm if you want to own what you buy, if you want your money to reach an independent bookshop, or if you plan to keep a library for decades rather than months.",
          "Choose Audible if catalogue completeness matters most, if you want exclusives, if you value returning books freely, or if you already own a Kindle and an Echo.",
          "If you cannot decide, note that the ownership question is the one that gets harder to reverse. Books bought on Audible stay on Audible; books bought on Libro.fm can be moved anywhere later, including into an Audible-shaped listening habit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Libro.fm really DRM-free?",
        answer:
          "Yes. Purchases download as DRM-free files you can play in any audiobook app and back up yourself. That is the core reason to choose it over Audible, whose files only play in Audible's own apps.",
      },
      {
        question: "Is Libro.fm more expensive than Audible?",
        answer:
          "By four cents a month. Libro.fm is $14.99 for one credit; Audible is $14.95. Treat them as the same price and decide on ownership and catalogue instead.",
      },
      {
        question: "Does Libro.fm have the same books as Audible?",
        answer:
          "Mostly, for mainstream titles — Libro.fm carries 500,000+ books from major and indie publishers. The exception is Audible Originals and other Amazon exclusives, which are not licensed to any other retailer.",
      },
      {
        question: "Does buying from Libro.fm actually support bookshops?",
        answer:
          "Yes. You choose an independent bookshop when you sign up and it receives a share of what you spend. Audible has no equivalent programme.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "audiobooks-com-vs-spotify-audiobooks",
    a: "audiobooks-com",
    b: "spotify-audiobooks",
    title: "Audiobooks.com vs Spotify Audiobooks 2026 | PageTurn",
    h1: "Audiobooks.com vs Spotify Audiobooks",
    description:
      "A dedicated audiobook subscription against 15 included hours in an app you already have. Catalogue, cost, caps and apps compared.",
    shortAnswer:
      "Spotify wins on cost if you already pay for Premium, because the audiobooks are bundled and cost nothing extra. Audiobooks.com wins on everything a real audiobook habit needs: no monthly hour cap, a larger 400,000+ catalogue, an app built for long-form audio with proper car support, and a credit each month that buys a book you keep for good.",
    intro: [
      "This is a comparison between a specialist and a bundle. Spotify added audiobooks to a music subscription; Audiobooks.com does nothing else.",
      "The deciding fact is Spotify's 15-hour monthly cap, and whether your listening fits inside it.",
    ],
    verdictRows: [
      {
        need: "Cheapest way to listen",
        winner: "spotify-audiobooks",
        why: "Bundled into Premium at no additional cost if you already subscribe.",
      },
      {
        need: "Listening to more than about one book a month",
        winner: "audiobooks-com",
        why: "No hour cap. Spotify stops at 15 hours; a credit plus the included VIP library does not.",
      },
      {
        need: "Catalogue size",
        winner: "audiobooks-com",
        why: "400,000+ audiobooks plus podcasts and summaries, against Spotify's 350,000+ included titles.",
      },
      {
        need: "Free trial",
        winner: "audiobooks-com",
        why: "30 days with up to three titles, versus a general Premium trial where it is offered at all.",
      },
      {
        need: "Listening in the car",
        winner: "audiobooks-com",
        why: "CarPlay, Android Auto and Sonos support in an app built for long-form audio, with better chapter navigation.",
      },
    ],
    sections: [
      {
        heading: "Cost, honestly",
        paragraphs: [
          "Spotify Premium starts at $11.99 a month and includes 15 hours of audiobook listening. If you already pay for Premium for the music, the audiobooks are free in the only sense that matters — you are not writing a new cheque.",
          "Audiobooks.com is $14.95 a month for a credit plus the included VIP library. As a second subscription on top of Premium, that is real money, and it is only worth it if you use it.",
          "So the cost question is really a usage question. Under a book a month, Spotify is unbeatable. Over it, you are paying for a cap you keep hitting, and the specialist becomes cheaper per hour listened.",
        ],
      },
      {
        heading: "The cap versus the credit",
        paragraphs: [
          "Fifteen hours covers about one average audiobook. It does not cover Dune at 21 hours or Gone Girl at 19. It comfortably covers Atomic Habits at 5h 35m and Born a Crime at 8h 44m, with room left over.",
          "Audiobooks.com has no hour limit. The monthly credit buys any title regardless of length and you keep it after cancelling, and the included VIP library covers the rest of the month.",
          "That structural difference matters most to exactly the people trying to build a listening habit, because the habit is what pushes you past 15 hours.",
        ],
      },
      {
        heading: "The apps are not comparable",
        paragraphs: [
          "Spotify's strength is that it is already installed and your book sits beside your playlists. Its weakness is that it is a music app with audiobook features added: sleep timer, speed and bookmarks all exist, but navigating a long book is clumsier than in a dedicated app.",
          "Audiobooks.com runs on iOS, Android, a web player, CarPlay, Android Auto and Sonos, with granular speed control and bookmarks that sync quickly. Car integration in particular is reliable, which matters more than any feature list if most of your listening happens while driving.",
          "Both are DRM-protected and app-only, so neither lets you take files elsewhere.",
        ],
      },
      {
        heading: "Who should pick which",
        paragraphs: [
          "Stay with Spotify alone if audiobooks are an occasional thing and Premium is already in your budget. Adding a second subscription for a book every couple of months is money wasted.",
          "Take the Audiobooks.com trial if you want to find out whether you are actually a heavy listener. Thirty days and three titles is enough listening to hit — or comfortably clear — what Spotify would have allowed you in a month, which tells you what you need to know.",
          "The best combination for a lot of people is Premium for casual listening plus a library card in Libby, and a paid audiobook subscription only once the cap starts getting in the way.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Audiobooks.com better than Spotify for audiobooks?",
        answer:
          "For a real listening habit, yes — no 15-hour cap, a larger 400,000+ catalogue, a credit that buys any length of book, and an app built for long-form audio with proper CarPlay and Android Auto support. For occasional listening, Spotify's included hours are hard to argue with because they cost nothing extra.",
      },
      {
        question: "Does Spotify limit how many audiobooks you can listen to?",
        answer:
          "Yes — Premium includes 15 hours of audiobook listening per month, roughly one average book. Audiobooks.com has no hourly limit.",
      },
      {
        question: "Can I have both?",
        answer:
          "Yes, and plenty of people do. Spotify covers casual listening inside a subscription you already pay for; a dedicated audiobook service covers the longer books and the months where you listen properly.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "everand-vs-audible",
    a: "everand",
    b: "audible",
    title: "Everand vs Audible 2026: Unlimited vs Credits | PageTurn",
    h1: "Everand vs Audible",
    description:
      "Everand is all-you-can-read from $11.99 with throttling. Audible is one credit a month at $14.95 with books you keep. Which model suits your reading?",
    shortAnswer:
      "Everand is cheaper and far better value per hour if you read widely and can accept that availability is unpredictable — it throttles heavy users, and access ends when you stop paying. Audible costs more and gives you less volume, but the book you spend a credit on is yours permanently and the catalogue is reliably there.",
    intro: [
      "These two answer opposite questions. Everand asks how much you can consume for a flat fee. Audible asks which one book you want to own this month.",
      "Everand also includes ebooks, magazines and documents, so the comparison is not purely about audio.",
    ],
    verdictRows: [
      {
        need: "Volume for the money",
        winner: "everand",
        why: "All-you-can-read from $11.99, covering ebooks and magazines as well as audiobooks.",
      },
      {
        need: "Keeping what you listen to",
        winner: "audible",
        why: "Credit purchases stay after you cancel. Everand access ends with the subscription.",
      },
      {
        need: "Reliably getting a specific title",
        winner: "audible",
        why: "Everand throttles heavy users and rotates availability. If you need a particular book in a particular week, that unpredictability is a problem.",
      },
      {
        need: "Reading widely across formats",
        winner: "everand",
        why: "One subscription covering audiobooks, ebooks, magazines and documents.",
      },
      {
        need: "Exclusives and premium productions",
        winner: "audible",
        why: "Audible Originals and the deepest slate of high-budget narration.",
      },
    ],
    sections: [
      {
        heading: "Throttling is the catch, and it is a real one",
        paragraphs: [
          "Everand is marketed as unlimited and is not, quite. Heavy users find that the titles available to them narrow over time — the service manages licensing costs by making the most-borrowed books harder to reach for the people borrowing the most.",
          "This is not a scandal; it is how an all-you-can-read model survives. But it changes what the subscription is good for. Everand rewards a reader who browses and takes what is available, and frustrates one who arrives with a fixed list.",
          "Audible has no equivalent mechanic. Your credit buys the book you asked for, this month, every month.",
        ],
      },
      {
        heading: "Ownership",
        paragraphs: [
          "Everand is access, not ownership. Stop paying and your library is gone — nothing carries over, because nothing was ever bought.",
          "Audible credit purchases are kept. Cancel after a year and you still have twelve audiobooks. They remain DRM-locked to Audible's apps, so 'kept' is narrower than Libro.fm's DRM-free ownership, but it is a genuine library rather than a lapsed rental.",
          "Over several years this compounds. Twelve months of Audible at $14.95 leaves you with twelve books. Twelve months of Everand at $11.99 leaves you with none, having probably let you read considerably more than twelve.",
        ],
      },
      {
        heading: "Cost per hour versus cost per book",
        paragraphs: [
          "If you get through three or four books a month, Everand is dramatically cheaper per hour — $11.99 against Audible's $14.95 for a single credit, with no volume limit beyond the throttling.",
          "If you get through one book a month, the maths flips. You are paying $11.99 for one title you do not keep, against $14.95 for one you do.",
          "The break-even is roughly two books a month, adjusted for how much the ebooks and magazines are worth to you. Below that, Audible. Above it, Everand — provided you can tolerate not always getting the specific title you wanted.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Everand really unlimited?",
        answer:
          "Not strictly. It is an all-you-can-read subscription with throttling: heavy users find the range of available titles narrows over time, which is how the service controls licensing costs. Plan for unpredictable availability rather than a guaranteed catalogue.",
      },
      {
        question: "Do you keep Everand audiobooks?",
        answer:
          "No. Everand is access only, and it ends when the subscription does. Audible credit purchases stay in your library after you cancel.",
      },
      {
        question: "Is Everand cheaper than Audible?",
        answer:
          "Yes — from $11.99 a month against Audible's $14.95, with no per-book limit. It is much better value if you read two or more books a month, and worse value if you read one, because you keep nothing.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "chirp-vs-audible",
    a: "chirp",
    b: "audible",
    title: "Chirp vs Audible 2026: Cheap Deals vs a Monthly Credit | PageTurn",
    h1: "Chirp vs Audible",
    description:
      "Chirp has no monthly fee and sells limited-time audiobook deals from $0.99. Audible charges $14.95 for a credit. Which is cheaper depends on how picky you are.",
    shortAnswer:
      "Chirp has no subscription at all — you buy limited-time deals, often between $0.99 and $5.99, and keep them permanently. It is far cheaper than Audible if you are relaxed about what you listen to next. Audible costs $14.95 a month and is the right choice when you want a specific book now rather than whatever happens to be discounted.",
    intro: [
      "Chirp is not really a competitor to Audible so much as a different way of buying. There is no monthly fee to compare, no credit to spend, and no trial to start.",
      "That makes the comparison simple: you are trading choice for price.",
    ],
    verdictRows: [
      {
        need: "Spending as little as possible",
        winner: "chirp",
        why: "No monthly fee, and deals frequently land between $0.99 and $5.99 — often a fraction of a credit's worth.",
      },
      {
        need: "Getting the specific book you want, now",
        winner: "audible",
        why: "Chirp only sells what is currently discounted. If your book is not on deal, it is not available cheaply.",
      },
      {
        need: "Owning your purchases",
        winner: "chirp",
        why: "Purchases are permanent, and there is no subscription that can lapse.",
      },
      {
        need: "New releases",
        winner: "audible",
        why: "Deal sites discount backlist. New releases very rarely appear on Chirp at a discount.",
      },
      {
        need: "Not having to think about it",
        winner: "audible",
        why: "A credit arrives every month. Chirp rewards checking in regularly for deals, which is a small ongoing chore.",
      },
    ],
    sections: [
      {
        heading: "Two different purchases",
        paragraphs: [
          "Audible is a subscription: $14.95 a month, one credit, any title, kept after cancelling. Chirp has no monthly fee at all — you browse rotating limited-time deals across most major publishers and buy the ones you want.",
          "That means the honest cost comparison is not a table but a habit. A year of Audible costs about $180 and leaves you twelve books. A year of Chirp might cost $40 and leave you fifteen, all chosen from whatever happened to be on offer.",
          "Both are DRM-protected and app-locked, so neither wins on file ownership. Libro.fm and Downpour are the answer there.",
        ],
      },
      {
        heading: "The catch is choice, not quality",
        paragraphs: [
          "Chirp's deals come from real publishers and include plenty of excellent, well-narrated books. This is not a bargain bin of amateur productions.",
          "What it is not is a store where you can find any book at any time. Deals rotate, and what you want may simply not be discounted this month. If you have a reading list you intend to follow in order, Chirp will keep failing you.",
          "New releases are the clearest gap. Publishers discount backlist, not the book that came out last week, so if you listen to new releases a credit is doing something Chirp structurally cannot.",
        ],
      },
      {
        heading: "The combination most listeners actually want",
        paragraphs: [
          "These two are not mutually exclusive and they solve different problems. Plenty of listeners keep Chirp permanently — an account costs nothing — and add a subscription only when they have specific books to get through.",
          "If you are trying to spend less on audiobooks without listening less, the sequence we would suggest is: get a library card and use Libby first, keep Chirp for cheap permanent additions, and subscribe to a credit service only in the months you actually have a title in mind.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Chirp cheaper than Audible?",
        answer:
          "Usually by a lot. Chirp has no monthly fee and its deals often run $0.99–$5.99, against Audible's $14.95 a month. The trade-off is that you can only buy what is currently on deal.",
      },
      {
        question: "Do you keep Chirp audiobooks forever?",
        answer:
          "Yes, purchases are permanent. They remain DRM-protected and play in the Chirp app, so it is ownership in the same limited sense as Audible rather than the DRM-free ownership Libro.fm offers.",
      },
      {
        question: "Does Chirp have new releases?",
        answer:
          "Rarely at a discount. Chirp's model is limited-time deals, and publishers discount backlist rather than new releases. For a book that came out this month, a credit service is the realistic option.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "audiobooks-com-vs-libro-fm",
    a: "audiobooks-com",
    b: "libro-fm",
    title: "Audiobooks.com vs Libro.fm 2026: Which Should You Choose? | PageTurn",
    h1: "Audiobooks.com vs Libro.fm",
    description:
      "Audiobooks.com bundles a credit with an included listening library. Libro.fm sells DRM-free files and supports indie bookshops. Compared on price, trial and ownership.",
    shortAnswer:
      "Libro.fm is the choice if owning DRM-free files matters to you — downloads play in any app and outlive the service. Audiobooks.com is the better subscription to actually live inside: a longer 30-day trial with up to three titles, and an included VIP library so the weeks after you spend your credit are not empty.",
    intro: [
      "Both are credible alternatives to Audible at essentially the same price, and they are chosen for opposite reasons. One optimises for what you keep. The other optimises for how much you listen.",
    ],
    verdictRows: [
      {
        need: "Owning DRM-free files",
        winner: "libro-fm",
        why: "Downloads are DRM-free and play anywhere. Audiobooks.com is app-only playback.",
      },
      {
        need: "The most listening in the first month",
        winner: "audiobooks-com",
        why: "30 days with up to three titles, against Libro.fm's first month and one credit.",
      },
      {
        need: "Listening between credits",
        winner: "audiobooks-com",
        why: "The included VIP library covers the rest of the month; Libro.fm has no equivalent.",
      },
      {
        need: "Supporting independent bookshops",
        winner: "libro-fm",
        why: "You choose a shop at signup and it takes a share of your spending.",
      },
      {
        need: "Buying occasionally without subscribing",
        winner: "libro-fm",
        why: "Libro.fm sells à la carte, so you can stop the subscription and still buy the odd book.",
      },
    ],
    sections: [
      {
        heading: "Price and trial",
        paragraphs: [
          "Audiobooks.com is $14.95 a month; Libro.fm is $14.99. Four cents apart — treat the ongoing price as identical.",
          "The trials differ meaningfully. Audiobooks.com runs 30 days with up to three titles on most offers. Libro.fm gives you your first month with one credit. If you want to test a service by actually listening, Audiobooks.com hands you three times as much material to judge it on.",
          "Libro.fm's flexibility advantage arrives later: it sells à la carte, so lapsing the subscription does not lock you out of buying.",
        ],
      },
      {
        heading: "What you keep",
        paragraphs: [
          "Both let you keep credit purchases after cancelling. The difference is what 'keep' means.",
          "Libro.fm gives you a DRM-free file. You can back it up, move it, and play it in any app — it does not depend on Libro.fm still being in business.",
          "Audiobooks.com purchases stay in your Audiobooks.com library and play in its apps. That is a real library, but a tethered one. If permanence is the reason you are avoiding Audible, note that Audiobooks.com has the same limitation.",
        ],
      },
      {
        heading: "Catalogue and apps",
        paragraphs: [
          "Libro.fm carries 500,000+ titles from major and independent publishers. Audiobooks.com lists 400,000+ audiobooks plus podcasts and summaries. Both are large enough to cover mainstream listening comfortably, and neither has Audible's exclusives.",
          "On apps, Audiobooks.com is the stronger day-to-day experience for us — granular speed, sensible sleep timers, fast bookmark sync, and reliable CarPlay, Android Auto and Sonos support. Libro.fm's app is perfectly good, and its real answer is that you are not obliged to use it at all, because the files work anywhere.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which is better value, Audiobooks.com or Libro.fm?",
        answer:
          "They cost within four cents of each other monthly. Audiobooks.com gives more in the first month — 30 days and up to three titles versus one credit — and adds an included VIP library. Libro.fm gives better long-term value if you count owning DRM-free files as part of the value.",
      },
      {
        question: "Does Audiobooks.com give you DRM-free files?",
        answer:
          "No. Audiobooks.com playback is app-only and DRM-protected. Libro.fm and Downpour are the two services in our comparison that give you DRM-free downloads.",
      },
      {
        question: "Can I buy from Libro.fm without a subscription?",
        answer:
          "Yes. Libro.fm sells à la carte as well as on credits, so you can cancel the monthly plan and still buy individual audiobooks when you want them.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
];

export function getVersus(slug: string): Versus | undefined {
  return versusPages.find((v) => v.slug === slug);
}

/** Comparison pages featuring a given service, used for internal linking. */
export function versusForService(serviceSlug: string): Versus[] {
  return versusPages.filter((v) => v.a === serviceSlug || v.b === serviceSlug);
}
