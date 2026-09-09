import type { Faq } from "@/lib/seo";

/**
 * Listening guides.
 *
 * These used to live as three untitled blocks inside a single `/guides` page,
 * which meant three separate search intents competed for one URL and none of
 * them could rank. Each guide now owns a page.
 */
export type Guide = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  /** Card blurb on the guides index. */
  summary: string;
  /** Pastel tint used on the index card and hero. */
  tint: string;
  /** Direct answer, rendered above the fold. */
  shortAnswer: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqs: Faq[];
  updated: string;
  updatedISO: string;
};

export const guides: Guide[] = [
  {
    slug: "how-to-choose-an-audiobook-narrator",
    title: "How to Judge an Audiobook Narrator in Five Minutes | PageTurn",
    h1: "How to judge a narrator in five minutes",
    description:
      "Narration is the main reason an audiobook fails. Four checks you can run on a free sample before committing ten hours to a voice you will resent.",
    summary:
      "Four checks on a free sample that predict whether you can stand a voice for ten hours.",
    tint: "bg-peach",
    shortAnswer:
      "Play the sample twice — once at normal speed and once at 1.25x — then skip to a dialogue-heavy chapter rather than the prologue. A narrator who still sounds natural sped up will stay comfortable across ten hours; one who blurs or breathes heavily will become unbearable by hour three.",
    sections: [
      {
        heading: "Play the sample at 1.25x, not just at 1x",
        paragraphs: [
          "Most listeners eventually drift up to 1.25x or 1.5x, and narration that sounds rich and deliberate at normal speed can turn into mush when sped up. Checking this first costs you thirty seconds and saves you the discovery at hour four.",
          "What you are listening for is whether consonants stay crisp and whether the phrasing still has shape. A narrator who relies on long pauses for effect loses those pauses first when you speed up, and what is left often sounds rushed and flat.",
          "If a sample only works at 1x, that is fine — just know you have committed to listening at 1x, which makes a twenty-hour book a genuinely twenty-hour book.",
        ],
      },
      {
        heading: "Listen for the breath",
        paragraphs: [
          "Audible inhales between lines of dialogue are the single most common reason people abandon a narrator. You will not notice them in a two-minute sample and you will notice nothing else by hour three.",
          "Good production edits most breaths out or masks them. Cheaper productions leave them in, and once you have heard them you cannot stop hearing them.",
          "Turn the volume up slightly higher than you would normally listen and pay attention to the gaps between sentences rather than the sentences themselves. That is where the problem lives.",
        ],
      },
      {
        heading: "Skip the prologue",
        paragraphs: [
          "The opening of any recording is the most rehearsed part of it. Narrators arrive fresh, directors are paying closest attention, and retakes are cheapest. It is not representative.",
          "Where a service lets you sample from further in, choose a chapter with several characters talking to each other. Dialogue is where narration is hardest and where weaknesses show up.",
          "If you can only sample the opening, discount what you hear slightly and weight the other three checks more heavily.",
        ],
      },
      {
        heading: "Ask whether they are acting or describing",
        paragraphs: [
          "Broadly, narrators either perform characters — distinct voices, accents, full commitment — or they read the text and let the prose do the work. Both approaches are legitimate and both can be superb.",
          "The failure is a mismatch. A full-cast-style performance in a quiet literary novel fights the writing; a flat, neutral reading of a comic novel strands every joke. Julia Whelan's deliberately restrained reading of Educated is the right call for that book, and would be the wrong call for Daisy Jones & The Six.",
          "Decide what the book seems to want before you judge whether the narrator is delivering it.",
        ],
      },
      {
        heading: "When you get it wrong anyway",
        paragraphs: [
          "You will sometimes get four hours in and realise it is not working. Whether that costs you anything depends on where you bought it.",
          "Audible lets you return or exchange a title yourself from the app, which is the most forgiving policy in the category. Audiobooks.com returns go through customer support case by case. Chirp and Apple purchases are essentially final.",
          "If you are experimenting with unfamiliar narrators, that difference is worth more than it looks — and it is a good argument for borrowing through Libby, where an abandoned book costs nothing at all.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I know if I will like an audiobook narrator?",
        answer:
          "Play the free sample twice, once at 1x and once at 1.25x, and listen to the gaps between sentences rather than the sentences. If the voice stays clear when sped up and you cannot hear breathing, it will hold up across ten hours.",
      },
      {
        question: "Are author-narrated audiobooks better?",
        answer:
          "For memoir, usually, when the author can sustain a pace — Trevor Noah and Michelle Obama both can. For fiction, usually not. Authors are writers rather than performers, and a professional narrator will normally serve the text better.",
      },
      {
        question: "What listening speed should I use?",
        answer:
          "Start at 1x for your first few books. Most regular listeners settle between 1.25x and 1.5x. Speeding up too early makes narration harder to follow and is a common reason people conclude the format does not work for them.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "how-long-should-an-audiobook-be",
    title: "Audiobook Length: Matching Running Time to Your Week | PageTurn",
    h1: "Matching audiobook length to your week",
    description:
      "How long an audiobook should be depends on how you listen. What works for a commute, a road trip and a bedtime habit — and which lengths reliably fail.",
    summary: "Which running times survive commutes, which need long sessions, and why it matters.",
    tint: "bg-mint",
    shortAnswer:
      "Under 7 hours suits a week of commuting or a couple of long walks. Between 8 and 12 hours is the sweet spot for fiction — long enough for a narrator to settle, short enough to hold the plot between sessions. Anything over 15 hours needs blocks of at least 45 minutes, because long books fall apart in ten-minute fragments.",
    sections: [
      {
        heading: "Under 7 hours: interruption-proof",
        paragraphs: [
          "This is a single week of commuting, or two or three long walks. Memoir and self-help sit here most comfortably because they are usually built from self-contained sections.",
          "Short books survive interruption far better than long ones, which makes them the right choice if your listening is genuinely fragmented — school runs, ten-minute walks, washing up.",
          "Atomic Habits at 5h 35m is the clearest example on our shelf: short numbered sections, nothing to remember, finishable inside a week even at a casual pace.",
        ],
      },
      {
        heading: "8 to 12 hours: the sweet spot",
        paragraphs: [
          "This is where most fiction should live. It is long enough for a narrator to settle into the voice and for you to stop noticing the performance, and short enough that you still remember the plot when you come back the next morning.",
          "Practically, 8–12 hours is about two weeks of a normal commute, or one long weekend. That is a period over which most people can hold a story in their head without re-listening.",
          "Born a Crime at 8h 44m, The Silent Patient at 8h 43m, Daisy Jones at 9h 03m and The Martian at 10h 53m all sit in this band, and all four are among the easiest listens we have reviewed.",
        ],
      },
      {
        heading: "Over 15 hours: needs a plan",
        paragraphs: [
          "Long books are not harder because they are long. They are harder because the gap between sessions grows relative to how much you have to remember.",
          "Historical fiction and epic fantasy are the worst offenders, because they combine length with large casts and unfamiliar names. Dune at 21h 02m is the clearest case: it works beautifully in 45-minute blocks and becomes genuinely confusing in ten-minute fragments.",
          "If you want to listen to a long book, schedule it. Long drives, long walks, a repetitive task at work. Do not start Dune on a school run.",
        ],
      },
      {
        heading: "How speed changes the arithmetic",
        paragraphs: [
          "Listening speed changes running time more than most people expect. A 15-hour book takes 12 hours at 1.25x and 10 hours at 1.5x, which moves it from the 'needs a plan' band into the sweet spot.",
          "That is a real strategy for long books, but it has a cost: dense prose and unfamiliar vocabulary get harder to absorb as speed rises, which is exactly what long epics are full of.",
          "The rule of thumb we use is to speed up plot-driven books and slow down anything where the sentences are the point. Speeding through Circe defeats the purpose of reading Circe.",
        ],
      },
      {
        heading: "Working out your own numbers",
        paragraphs: [
          "Count the minutes you actually listen in a normal week — commute both ways, walks, gym, chores. Most people land between three and eight hours, and most people overestimate before they count.",
          "Divide the running time by that number and you have the number of weeks the book will take. If the answer is more than three, you will probably lose momentum, whatever the book is.",
          "This is also the number that tells you whether a subscription is worth it. At four hours of listening a week you finish roughly one 10-hour book a fortnight, which makes a monthly credit plan look generous and Spotify's 15-hour cap look sufficient.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long is the average audiobook?",
        answer:
          "Most run between 8 and 13 hours. Of the titles we have reviewed, the shortest is Atomic Habits at 5h 35m and the longest is Dune at 21h 02m, with the bulk of the fiction landing between 10 and 13 hours.",
      },
      {
        question: "How long does it take to finish an audiobook?",
        answer:
          "Divide the running time by the hours you genuinely listen each week — for most people three to eight. A 10-hour book at four hours a week takes about two and a half weeks at normal speed, or two weeks at 1.25x.",
      },
      {
        question: "Are long audiobooks worth it?",
        answer:
          "Only if you can give them long sessions. A 20-hour book listened to in ten-minute fragments is a much worse experience than a 9-hour book in the same fragments, because you spend most of each session remembering where you were.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "where-to-start-in-each-genre",
    title: "Where to Start With Audiobooks in Each Genre | PageTurn",
    h1: "Where to start in each genre",
    description:
      "Some genres are transformed by audio and some are damaged by it. What to pick first in mystery, memoir, science fiction, literary fiction and self-help.",
    summary: "Which genres audio improves, which it hurts, and what to try first in each.",
    tint: "bg-lilac",
    shortAnswer:
      "Start with memoir or contemporary mystery — both are built from clear voices and survive distracted listening. Science fiction is best entered through a full-cast production or a single-voice book like The Martian. Save literary fiction and epic fantasy until you are used to the format, because both punish interrupted listening.",
    sections: [
      {
        heading: "Memoir: the format's home ground",
        paragraphs: [
          "Memoir is the genre audio helps most. It is already someone telling you about their life, so a first-person voice is not an adaptation of the form — it is the form.",
          "Author-read is the classic recommendation and it is broadly right, with a caveat: only when the author can hold a pace. If the sample drifts or flattens, take the professional narration instead. Educated is narrated by Julia Whelan rather than Tara Westover and is better for it.",
          "Start with something under ten hours built from self-contained chapters. Born a Crime at 8h 44m is close to the ideal first audiobook in any genre.",
        ],
      },
      {
        heading: "Mystery and thriller: choose contemporary first",
        paragraphs: [
          "Momentum makes thrillers forgiving of interruption, which is why they work so well on commutes. But not all of them do.",
          "Choose a single narrator and a contemporary setting for your first listen. Period mysteries lean on dense description and large casts of similarly named characters, both of which are much harder to follow by ear than on a page you can glance back at.",
          "The other thing to listen for is whether the narrator telegraphs the twist. A reader who shifts tone before the text does will give the game away, and it is the most common way a thriller audiobook fails.",
        ],
      },
      {
        heading: "Science fiction: cast solves the hard problem",
        paragraphs: [
          "Science fiction's biggest audio problem is keeping a large crew of characters distinct, and full-cast productions solve it directly. Start there before attempting single-narrator epics.",
          "The other route in is a book with a small cast and a strong voice. The Martian is essentially one man's log entries and is correspondingly easy to follow; Project Hail Mary works the same way.",
          "What to postpone is anything with heavy invented vocabulary. Dune is a superb production and a demanding listen, because unfamiliar terms are much harder to absorb spoken than written.",
        ],
      },
      {
        heading: "Literary fiction: not a beginner's genre",
        paragraphs: [
          "This is the genre where audio helps least, and it is worth being honest about that. Prose you would want to reread is prose you cannot easily reread while driving, and non-linear timelines are considerably harder to hold without page numbers.",
          "That does not mean avoid it — Circe is one of the best listens on our shelf — but it does mean choosing conditions. Literary fiction wants long, undistracted sessions and a slower playback speed than you would use for a thriller.",
          "Wait until you have finished three or four audiobooks and know your own attention span before starting here.",
        ],
      },
      {
        heading: "Self-help and business: short sections win",
        paragraphs: [
          "These are the most interruption-tolerant books there are, because they are usually structured as short standalone ideas with headings.",
          "That structure makes them ideal for genuinely fragmented listening — the ten minutes while cooking, the walk to the station — where fiction would be a waste.",
          "The risk is the opposite one: author-read business books are frequently narrated flatly, and a flat six hours is worse than an engaging twelve. Sample carefully. Atomic Habits at 5h 35m is the version of this genre that works.",
        ],
      },
    ],
    faqs: [
      {
        question: "What genre is best for audiobooks?",
        answer:
          "Memoir, especially author-read, because the form is already someone telling you about their life. Thrillers and self-help follow, for opposite reasons — momentum in one, short self-contained sections in the other.",
      },
      {
        question: "What genres do not work well as audiobooks?",
        answer:
          "Anything you would want to reread sentences of, and anything with dense invented vocabulary or intricate non-linear timelines. Literary fiction and epic fantasy are both superb in audio under the right conditions and frustrating in fragmented listening.",
      },
      {
        question: "Should I start with fiction or non-fiction?",
        answer:
          "Non-fiction, specifically memoir, if you have never finished an audiobook. It is the most forgiving of divided attention. If you want fiction, choose something plot-driven with a small cast rather than literary fiction.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "how-to-listen-to-audiobooks-free",
    title: "How to Listen to Audiobooks Free (Legally) in 2026 | PageTurn",
    h1: "How to listen to audiobooks free",
    description:
      "Library apps, public-domain recordings and free trials — every legitimate way to listen to audiobooks without paying, and what each one actually covers.",
    summary: "Library cards, public-domain archives and trials — what free actually gets you.",
    tint: "bg-butter",
    shortAnswer:
      "A public library card and the Libby app is the best free option by a distance: real, current, licensed audiobooks at no cost, with waiting lists on popular titles. LibriVox adds volunteer-read public-domain classics, and most paid services run 30-day free trials you can use once each.",
    sections: [
      {
        heading: "A library card and Libby",
        paragraphs: [
          "This is the answer, and it is chronically underused. Libby connects to your public library and lends licensed audiobooks — current bestsellers, prize winners, the same productions the paid services sell — for nothing.",
          "The catch is licensing. Your library buys a limited number of simultaneous loans, so popular titles carry waiting lists that can run to weeks, and the catalogue varies enormously between library systems. Loans expire and nothing is ever yours.",
          "The way to use it well is to place holds on several books at once and treat whatever arrives as your next listen. Used that way it comfortably covers a book a month for most people, at zero cost. We rank it as one of the best audiobook services we have tested, and it earns us nothing.",
        ],
      },
      {
        heading: "More than one library card",
        paragraphs: [
          "Libby supports multiple cards in one app, and many library systems offer cards to anyone who lives, works or studies in the area — some offer non-resident cards for a modest annual fee.",
          "Two or three cards meaningfully changes the experience, because a title with a twelve-week wait at one system is often available immediately at another.",
          "Hoopla, offered by many of the same libraries, is worth checking alongside Libby. It typically has no waiting lists at all, in exchange for a monthly borrow limit and a smaller catalogue.",
        ],
      },
      {
        heading: "Public-domain recordings",
        paragraphs: [
          "LibriVox offers volunteer-recorded readings of public-domain books — the classics, essentially anything published early enough to be out of copyright. It is genuinely free with no card required.",
          "Quality varies a great deal, because the readers are volunteers rather than professionals. Some recordings are excellent; others are difficult to listen to for long. Sample before committing.",
          "This is a supplement rather than a substitute. It cannot give you anything published recently.",
        ],
      },
      {
        heading: "Free trials, used honestly",
        paragraphs: [
          "Most paid services run a 30-day free trial you can use once. Audiobooks.com's is the most generous at 30 days with up to three titles on most offers; Audible, Everand, Kobo and Downpour each give you 30 days and a single credit.",
          "Run end to end, the trials across several services add up to a few months of free listening, and on credit-based services the books you take during the trial are generally yours to keep even after cancelling.",
          "Two practical warnings. Set a calendar reminder for the day before each trial ends, because every one of these renews automatically. And cancel through the account settings rather than by deleting the app.",
        ],
      },
      {
        heading: "What to be careful of",
        paragraphs: [
          "Sites offering current bestsellers as free downloads are not licensed, and the files are a common vector for malware. If a brand-new release is available free outside a library, something is wrong.",
          "'Free with ads' audiobook apps generally carry public-domain material rather than the catalogue they advertise on the front page.",
          "The genuinely free options are the ones above: library apps, public-domain archives, and time-limited trials from the services themselves.",
        ],
      },
    ],
    faqs: [
      {
        question: "How can I listen to audiobooks for free?",
        answer:
          "A public library card with the Libby app is the best route — it lends the same licensed audiobooks the paid services sell, at no cost, with waiting lists on popular titles. Hoopla, LibriVox for public-domain classics, and the 30-day free trials from paid services are the other legitimate options.",
      },
      {
        question: "Is Libby completely free?",
        answer:
          "Yes. Libby costs nothing beyond a library card, which is free for residents of most systems. The limits are licensing-based: waiting lists on popular titles, a catalogue that varies by library, and loans that expire rather than being kept.",
      },
      {
        question: "Do you keep books from a free trial?",
        answer:
          "On credit-based services, generally yes — a title bought with a trial credit stays in your library after you cancel. Anything you only streamed from an included catalogue, such as Audible's Plus Catalog or the Audiobooks.com VIP library, goes away.",
      },
      {
        question: "Are free audiobook download sites safe?",
        answer:
          "Sites offering current bestsellers as free downloads are not licensed to do so, and those files are a common malware vector. Stick to library apps, LibriVox for public-domain titles, and official free trials.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
  {
    slug: "audiobook-drm-and-ownership",
    title: "Do You Actually Own Your Audiobooks? DRM Explained | PageTurn",
    h1: "Do you actually own your audiobooks?",
    description:
      "Most audiobook services let you keep your books in a way that stops working if you leave. What DRM means in practice, and which services give you real files.",
    summary: "What 'keep your books' means on each service, and who gives you a real file.",
    tint: "bg-soft/40",
    shortAnswer:
      "On most services, 'keeping' a book means it stays in that company's library and plays only in their app. Only Libro.fm and Downpour give you DRM-free files you can back up and play anywhere. Audible, Audiobooks.com, Chirp, Spotify, Kobo and Apple are all DRM-protected and app-locked.",
    sections: [
      {
        heading: "Two different meanings of 'keep'",
        paragraphs: [
          "Every credit-based subscription advertises that you keep the books you buy, and every one of them is telling the truth — but they mean two very different things by it.",
          "On Audible, Audiobooks.com, Kobo and Chirp, keeping a book means the licence stays attached to your account. Cancel the subscription and the title remains in your library and still plays. What you cannot do is move it: the file is DRM-protected and only decodes inside that company's app.",
          "On Libro.fm and Downpour, keeping a book means you downloaded an actual audio file. It plays in any app, you can back it up, and it does not care whether the company still exists.",
        ],
      },
      {
        heading: "Why it matters more than it sounds",
        paragraphs: [
          "For most people, most of the time, this is abstract. Audible is not going anywhere and its app works well.",
          "It stops being abstract in three situations: when a service withdraws from your country, when an account is closed or locked for any reason, and when you simply want to listen in a different app than the one you were given.",
          "A library built over ten years on a DRM platform is a library you can only ever use on that platform's terms. Whether that is acceptable is a genuine judgement call rather than an obvious one — but it should be a decision rather than a surprise.",
        ],
      },
      {
        heading: "Which services give you real files",
        paragraphs: [
          "Libro.fm delivers DRM-free downloads on a $14.99 monthly credit or à la carte, from a catalogue of 500,000+ titles, and splits revenue with an independent bookshop you choose. It is the most complete answer to this problem.",
          "Downpour also delivers DRM-free files, at $12.99 a month for a credit, and additionally offers rentals from about $5 — useful for a long book you want to hear once. Its catalogue and app are both weaker than Libro.fm's.",
          "Everything else we have tested — Audible, Audiobooks.com, Chirp, Kobo, Spotify, Apple Books, Storytel, AudiobookSTORE and Libby — is DRM-protected.",
        ],
      },
      {
        heading: "Subscriptions where you keep nothing",
        paragraphs: [
          "A separate category is worth naming: services where nothing is retained at all, because nothing was ever bought.",
          "Everand and Storytel are all-you-can-listen subscriptions. Spotify's included 15 hours a month works the same way. Libby lends books that expire. In every case, stopping the subscription ends your access completely.",
          "That is not a criticism — it is simply a different product, and often better value per hour. It just means those services build no library, and the difference compounds over years.",
        ],
      },
      {
        heading: "A reasonable compromise",
        paragraphs: [
          "Most listeners we know do not resolve this purely. They use a library card for the bulk of their listening, a DRM-free store for the small number of books they genuinely want to own permanently, and a subscription for convenience.",
          "If you only change one thing, make it deliberate: decide which books you actually want in ten years, and buy those from Libro.fm or Downpour rather than defaulting everything to one platform.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you own audiobooks you buy from Audible?",
        answer:
          "You keep them in your Audible library permanently, including after cancelling, but they are DRM-protected and play only in Audible's apps. You hold a licence tied to your account rather than a file you can move elsewhere.",
      },
      {
        question: "Which audiobook services are DRM-free?",
        answer:
          "Libro.fm and Downpour. Both deliver actual audio files you can back up and play in any app. Every other service we have tested — including Audible, Audiobooks.com, Chirp, Kobo, Spotify and Apple Books — is DRM-protected and app-locked.",
      },
      {
        question: "What happens to my audiobooks if a service shuts down?",
        answer:
          "DRM-free files from Libro.fm or Downpour keep working, because they are ordinary audio files on your own device. DRM-protected libraries depend on the company's servers and apps continuing to operate, so there is no guarantee beyond whatever wind-down that company chooses to offer.",
      },
      {
        question: "Can I move my audiobooks to another service?",
        answer:
          "Not for DRM-protected purchases — there is no supported way to transfer an Audible or Audiobooks.com library into another platform. DRM-free files from Libro.fm and Downpour can be played in any app you like, which is effectively the same thing.",
      },
    ],
    updated: "September 2026",
    updatedISO: "2026-09-02",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
