export type Review = {
  slug: string;
  title: string;
  author: string;
  narrator: string;
  genre: string;
  length: string;
  rating: number;
  score: string;
  reviewer: string;
  date: string;
  dateISO: string;
  /** ISBN-13 of the edition we listened to, used for the cover and structured data. */
  isbn: string;
  cover: string;
  /** Smaller cover file used in grids so listings load fast. */
  coverSmall: string;
  excerpt: string;
  verdict: string;
  body: string[];
  narratorNotes: string;
  bestFor: string[];
};

/** Open Library serves cover art from an ISBN-13, so covers stay tied to a real edition. */
export function coverForIsbn(isbn: string): string {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
}

/** Medium file (roughly a quarter of the bytes) for grid thumbnails. */
export function coverThumbForIsbn(isbn: string): string {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
}

const REVIEWER = "Ahmad Raza Hassan";

type ReviewSeed = Omit<Review, "cover" | "coverSmall" | "reviewer" | "score">;

const seeds: ReviewSeed[] = [
  {
    slug: "project-hail-mary",
    title: "Project Hail Mary",
    author: "Andy Weir",
    narrator: "Ray Porter",
    genre: "Sci-Fi",
    length: "16h 10m",
    rating: 4.8,
    date: "12 August 2026",
    dateISO: "2026-08-12",
    isbn: "9781713630296",
    excerpt:
      "The single best argument for listening rather than reading. Ray Porter turns a problem-solving novel into a performance.",
    verdict:
      "Our top recommendation for a first audiobook. Funny, tense and genuinely moving, with narration that carries the whole thing.",
    body: [
      "A science teacher wakes up alone on a spacecraft with no memory of how he got there, and has to rebuild both his identity and a plan to save Earth from the evidence in front of him. Weir writes the way an engineer thinks: try something, watch it fail, adjust. In print that can read dry. Out loud it is oddly gripping, because you are listening to somebody talk themselves through a problem in real time.",
      "Ray Porter is the reason this is a five-star listen for many people. He plays Ryland Grace as a slightly manic, self-deprecating man who jokes when he is frightened, and the shift between his internal monologue and his spoken lines is completely clear without any vocal gimmickry. The performance also handles the book's second major character — whose voice is one of the production's real pleasures and best left unspoiled — with a warmth that could easily have tipped into novelty and never does.",
      "The middle third is where the audio format earns its keep. Long technical passages are broken up by dialogue, and Porter's timing turns explanation into comedy often enough that the science never feels like homework. The emotional turn late in the book lands harder in audio than on the page, largely because Porter has spent fifteen hours making you like this man.",
      "If you dislike heavy exposition, the physics and chemistry sequences will still test you, and the flashback structure means the first two hours jump around more than newcomers expect. Both settle quickly. This is the audiobook we hand to people who say they cannot get into audiobooks.",
    ],
    narratorNotes:
      "Porter's single-narrator performance is one of the most praised in modern audio. Clean, close recording; light sound treatment used sparingly for effect rather than decoration.",
    bestFor: ["First-time audiobook listeners", "Long drives and flights", "Anyone who liked The Martian"],
  },
  {
    slug: "educated",
    title: "Educated",
    author: "Tara Westover",
    narrator: "Julia Whelan",
    genre: "Memoir",
    length: "12h 10m",
    rating: 4.7,
    date: "6 August 2026",
    dateISO: "2026-08-06",
    isbn: "9781443452472",
    excerpt:
      "Westover's memoir of leaving a survivalist family for Cambridge, read by Julia Whelan with remarkable restraint.",
    verdict:
      "The strongest memoir narration on our shelf. Difficult subject matter handled without a trace of melodrama.",
    body: [
      "Westover grew up in rural Idaho in a family that avoided doctors, schools and government records, and set foot in a classroom for the first time at seventeen. The memoir tracks the slow, costly process of getting an education and the way that education pulls her away from the people who raised her. It is not a triumph narrative; the closing chapters are mostly about loss.",
      "Julia Whelan is the ideal narrator for this. Her reading is measured and quiet, and she resists every opportunity to editorialise. The scenes of injury in the family scrapyard, and the passages about her brother's violence, are read almost flatly — which is exactly why they are hard to listen to. A more performed reading would have let you off the hook.",
      "Whelan also handles the book's shifts in perspective well. Westover repeatedly questions her own memory, sometimes in footnote-style asides, and Whelan marks those moves with a small change in tone rather than anything theatrical, so the structure stays clear without interrupting the story.",
      "Fair warnings: there is sustained description of physical injury and emotional abuse, and the family conflict is genuinely distressing in stretches. It is also a book better taken in a few long sessions than in ten-minute commutes, because the chapters build on each other.",
    ],
    narratorNotes:
      "Whelan performs the whole book solo, with no cast or effects. Studio quality is excellent and chapter breaks are generous, which helps with a heavy listen.",
    bestFor: ["Memoir readers", "Book-club listening", "Listeners who prefer understated narration"],
  },
  {
    slug: "circe",
    title: "Circe",
    author: "Madeline Miller",
    narrator: "Perdita Weeks",
    genre: "Fiction",
    length: "12h 08m",
    rating: 4.6,
    date: "30 July 2026",
    dateISO: "2026-07-30",
    isbn: "9781526612519",
    excerpt:
      "Greek myth retold from the witch's side, in a narration that sounds like it is being remembered rather than performed.",
    verdict:
      "Beautiful prose that suits being read aloud. Slow in the middle, and worth staying with.",
    body: [
      "Miller retells the life of Circe, the minor goddess best known for turning Odysseus's crew into pigs, as a full biography: childhood in her father's palace, exile on Aiaia, motherhood, and a hard-won decision about what kind of life she wants. The famous episodes from the Odyssey occupy surprisingly little of the running time.",
      "Perdita Weeks reads it in a low, slightly weary register, which is a smart choice for a first-person narrator recounting centuries. Miller's sentences are long and image-heavy, and Weeks phrases them so the images land one at a time instead of piling up. The pace is unhurried throughout — this is a book to sink into, not to skim.",
      "The centuries on the island are where some listeners lose momentum. There is little external plot for a long stretch, and if you need incident to stay engaged you may drift. The reward is that the final third, once Telemachus arrives, is genuinely tense, and the ending is one of the most satisfying in recent literary fiction.",
      "Mythology knowledge is not required. Miller explains what matters as she goes, and Weeks pronounces the Greek names consistently, which is more helpful in audio than it sounds.",
    ],
    narratorNotes:
      "Weeks narrates solo with a soft English accent and very little vocal differentiation between characters — deliberate, since the whole book is Circe's recollection.",
    bestFor: ["Literary fiction listeners", "Bedtime listening", "Fans of The Song of Achilles"],
  },
  {
    slug: "born-a-crime",
    title: "Born a Crime",
    author: "Trevor Noah",
    narrator: "Trevor Noah",
    genre: "Memoir",
    length: "8h 44m",
    rating: 4.9,
    date: "24 July 2026",
    dateISO: "2026-07-24",
    isbn: "9781984897534",
    excerpt:
      "The rare memoir that is better in audio than in print, because the author reads it himself — accents, languages and all.",
    verdict:
      "Our highest-scored listen. Under nine hours, frequently very funny, and quietly devastating when it wants to be.",
    body: [
      "Noah grew up in Johannesburg as the mixed-race child of a Black Xhosa mother and a white Swiss father at a time when that relationship was illegal. The book is a set of linked essays rather than a straight chronology, moving between school, church, petty crime, and a long, complicated portrait of his mother Patricia, who is the real subject of the book.",
      "This is the strongest case on our shelf for author narration. Noah moves between English, Xhosa, Zulu, Afrikaans and Sotho, and no hired narrator could manage the code-switching or the accents that carry so much of the comedy and the social detail. His timing is a comedian's timing, and jokes that read as flat on the page get their laugh here.",
      "It is not a comedy record, though. The chapters about domestic violence in the final third are told plainly and without cushioning, and hearing them in Noah's own voice is a different experience from reading them. The tonal turn is abrupt by design.",
      "Only real caveat: the essay structure means it does not build tension the way a narrative memoir does, so it is easy to put down and easy to pick up. That makes it an excellent commute listen and a slightly less immersive one.",
    ],
    narratorNotes:
      "Author-read, with fluent multilingual delivery and stand-up timing. Recording is warm and close; no music or effects.",
    bestFor: ["Commutes and short sessions", "Listeners who like author-read memoir", "Anyone new to audiobooks"],
  },
  {
    slug: "the-seven-husbands-of-evelyn-hugo",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    narrator: "Alma Cuervo, Julia Whelan and Robin Miles",
    genre: "Fiction",
    length: "12h 10m",
    rating: 4.6,
    date: "18 July 2026",
    dateISO: "2026-07-18",
    isbn: "9781501139246",
    excerpt:
      "An old Hollywood star tells her real story to a junior journalist. The multi-narrator framing is what makes it work.",
    verdict:
      "Hugely enjoyable, well cast, and better paced in audio than the page count suggests.",
    body: [
      "Evelyn Hugo, a reclusive film legend, chooses an unknown magazine writer to hear her life story: seven marriages, a studio system that manufactured her, and the person she actually loved. The structure alternates between Evelyn's account of the past and the present-day interview, with fake press clippings between sections.",
      "The production splits those layers between narrators, and that is the smartest decision in the whole audiobook. Alma Cuervo voices Evelyn with a smoky, unhurried authority that sells both the glamour and the calculation; Julia Whelan takes the present-day journalist and gives her the slight defensiveness the character needs; Robin Miles reads the tabloid inserts with the right note of dryness. In print those inserts interrupt. Here they land as texture.",
      "The middle marriages are the weakest stretch — two of the seven husbands blur together, and the plot leans on coincidence more than once. Cuervo carries it, largely because Evelyn is so entertaining to listen to even when the story is treading water.",
      "Content notes: domestic abuse, a closeted relationship handled with real care, and grief in the final hours. The last two chapters land hard in audio.",
    ],
    narratorNotes:
      "Three narrators, cleanly divided by narrative layer rather than by character. Consistent levels between voices, which multi-narrator productions often get wrong.",
    bestFor: ["Book-club listening", "Fans of old Hollywood", "Listeners who like multi-narrator casts"],
  },
  {
    slug: "daisy-jones-and-the-six",
    title: "Daisy Jones & The Six",
    author: "Taylor Jenkins Reid",
    narrator: "Full cast, including Jennifer Beals, Benjamin Bratt and Judy Greer",
    genre: "Fiction",
    length: "9h 03m",
    rating: 4.7,
    date: "11 July 2026",
    dateISO: "2026-07-11",
    isbn: "9781804945957",
    excerpt:
      "A novel written as an oral history, performed by a full cast. This is the format doing something print simply cannot.",
    verdict:
      "The best full-cast production we have reviewed. If you only try one cast audiobook, make it this one.",
    body: [
      "The rise and sudden break-up of a 1970s rock band, told entirely through interview transcripts with the people who were there. Because the whole novel is people talking, it converts to audio more naturally than almost any other book on our shelf — the print version is arguably the adaptation.",
      "A large cast takes one character each, and the contradictions between accounts become genuinely funny when you can hear them. Two band members describe the same night, and the difference in tone tells you everything about who is protecting whom. Jennifer Beals's Daisy is all careless confidence with something breakable underneath; Benjamin Bratt's Billy is tight, defensive and increasingly sad.",
      "It is also the easiest listen here: nine hours, short interview segments, and natural stopping points every few minutes. That makes it ideal for commuting or chores, which is unusual for a book this emotionally effective.",
      "Two caveats. There are no songs — the lyrics are printed at the end and simply read aloud, which some listeners find anticlimactic. And with this many voices, the first half hour takes concentration before you have everyone straight.",
    ],
    narratorNotes:
      "Full cast, one actor per interviewee, cut together like a documentary. Levels and room tone are matched well across performers.",
    bestFor: ["Commutes and chores", "Music-history fans", "Listeners curious about full-cast audio"],
  },
  {
    slug: "where-the-crawdads-sing",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    narrator: "Cassandra Campbell",
    genre: "Mystery",
    length: "12h 12m",
    rating: 4.3,
    date: "4 July 2026",
    dateISO: "2026-07-04",
    isbn: "9780593103036",
    excerpt:
      "Part coming-of-age story, part courtroom mystery, held together by Cassandra Campbell's Southern narration.",
    verdict:
      "Strong narration and atmosphere; the mystery plot is the weakest part of the book. Still an easy recommendation.",
    body: [
      "Kya Clark raises herself in a North Carolina marsh after her family leaves, one by one, and years later becomes the suspect in a local man's death. The novel alternates between her childhood and the investigation, with a lot of close natural description of the marsh itself.",
      "Cassandra Campbell is one of the most reliable narrators working, and this is a good showcase. Her Southern accents are placed rather than generic, she keeps Kya's voice ageing believably across two decades, and she reads Owens's nature writing with enough patience that it becomes atmosphere instead of filler.",
      "The courtroom sections in the second half are more conventional than the marsh chapters, and the final twist has divided readers since publication — some find it earned, others think it belongs to a different book. Campbell plays it straight, which is the right call.",
      "Content notes: an abusive father in the early chapters, a sexual assault, and the trial itself. The poetry quoted throughout works better read aloud than it does on the page.",
    ],
    narratorNotes:
      "Solo narration with careful regional accent work and a slow, deliberate pace. Clean recording; suits low-volume listening.",
    bestFor: ["Listeners who want atmosphere", "Long-form evening listening", "Fans of Southern settings"],
  },
  {
    slug: "the-silent-patient",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    narrator: "Jack Hawkins and Louise Brealey",
    genre: "Mystery",
    length: "8h 43m",
    rating: 4.2,
    date: "27 June 2026",
    dateISO: "2026-06-27",
    isbn: "9781250230782",
    excerpt:
      "A tight psychological thriller with a twist you either see coming or absolutely do not. Two narrators, cleanly split.",
    verdict:
      "Under nine hours and very hard to stop. The ending is the whole point, so go in unspoiled.",
    body: [
      "A painter shoots her husband and then never speaks again. A psychotherapist takes a job at the secure unit where she is held, convinced he can reach her. Her diary entries run alongside his account, and the two threads converge on a reveal the entire book is engineered around.",
      "Jack Hawkins reads Theo, the therapist, with a controlled, faintly self-satisfied calm that is doing more work than it first appears. Louise Brealey reads Alicia's diary with a jumpier, more fragile energy. Splitting the voices across the two timelines makes the structure obvious in audio, which matters, because the trick depends on you not questioning how the two fit together.",
      "The middle third sags. Theo's marital subplot takes up more time than it earns and several supporting characters at the clinic are thin. The book is short enough that this never becomes fatal.",
      "Whether you rate it depends almost entirely on the ending, which is cleverly built and, on a second listen, fairly clued. Content notes: suicide, self-harm and domestic abuse.",
    ],
    narratorNotes:
      "Two narrators, one per timeline. Both English, both restrained; no effects, and short chapters make it easy to listen in pieces.",
    bestFor: ["Short commutes", "Thriller readers", "Listeners who want a fast finish"],
  },
  {
    slug: "gone-girl",
    title: "Gone Girl",
    author: "Gillian Flynn",
    narrator: "Julia Whelan and Kirby Heyborne",
    genre: "Mystery",
    length: "19h 11m",
    rating: 4.4,
    date: "20 June 2026",
    dateISO: "2026-06-20",
    isbn: "9780307588388",
    excerpt:
      "The two-narrator structure was built for audio, and Julia Whelan's diary sections are a masterclass in unreliable narration.",
    verdict:
      "Nineteen hours that do not feel it. Still the benchmark for dual-narrator thrillers.",
    body: [
      "A woman disappears on her fifth wedding anniversary and her husband becomes the obvious suspect. Flynn alternates his present-tense account with her diary, and the pleasure of the book is watching two versions of one marriage fail to line up.",
      "Julia Whelan reads Amy and Kirby Heyborne reads Nick, and the casting is what makes the audiobook work. Whelan's diary voice is bright, likeable and just slightly too polished — and when the book turns, the change in her delivery is one of the most satisfying moments in thriller audio. Heyborne plays Nick as defensive and evasive from the first chapter, which keeps you suspicious without the text having to insist.",
      "The book is long, and the middle stretch of media circus and legal manoeuvring is where the pace dips. The final third recovers completely, and the ending remains as uncomfortable as it was on publication.",
      "Content notes: sustained emotional abuse, sexual violence and a lot of contempt. It is a nasty book on purpose; if you want anyone to root for, look elsewhere.",
    ],
    narratorNotes:
      "Dual narration split by character, not timeline. Both performances are naturalistic; well-matched levels across a long running time.",
    bestFor: ["Long commutes", "Fans of unreliable narrators", "Listeners who like dual narration"],
  },
  {
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    narrator: "James Clear",
    genre: "Self-Help",
    length: "5h 35m",
    rating: 4.4,
    date: "13 June 2026",
    dateISO: "2026-06-13",
    isbn: "9781804222133",
    excerpt:
      "The clearest habit book in print, read by its author in five and a half hours. Efficient rather than inspiring.",
    verdict:
      "The best use of five hours in the self-help category, with one honest caveat about the format.",
    body: [
      "Clear's argument is that behaviour change comes from systems rather than goals, organised around four steps: make a habit obvious, attractive, easy and satisfying. Each chapter ends with a summary, and the examples are concrete — dentists, cyclists, gym members — rather than motivational.",
      "Author narration suits it. Clear reads plainly, without the pushed enthusiasm that ruins a lot of business audio, and at five and a half hours there is no padding. If you have bounced off self-help books that spend three chapters on their own importance, this one starts giving you something to use inside twenty minutes.",
      "The honest caveat: this is a book with checklists, tables and a habit scorecard, and none of that translates to audio. If you intend to actually run the exercises, listen first and keep a text or PDF copy for the worksheets. The chapter summaries partly cover for this, and they are genuinely useful as a re-listen.",
      "Not everything is new — much of it is habit-loop research repackaged — but the packaging is the value. It is the version of this material you will remember.",
    ],
    narratorNotes:
      "Author-read, level and unhurried. Works well at 1.25x. Chapter-end summaries make it easy to dip back into single sections.",
    bestFor: ["Gym and walking listening", "Listeners short on time", "Anyone rebuilding a routine"],
  },
  {
    slug: "becoming",
    title: "Becoming",
    author: "Michelle Obama",
    narrator: "Michelle Obama",
    genre: "Memoir",
    length: "19h 03m",
    rating: 4.8,
    date: "6 June 2026",
    dateISO: "2026-06-06",
    isbn: "9780241982976",
    excerpt:
      "Nineteen hours in the author's own voice, and the South Side chapters are the best part — not the White House ones.",
    verdict:
      "One of the great author-read memoirs. Long, warm and far more candid than the subtitle suggests.",
    body: [
      "Three parts: growing up on the South Side of Chicago, building a legal career and a marriage, and eight years in the White House. The early sections are the most intimate — a family in a small upstairs apartment, a piano teacher great-aunt, a father with multiple sclerosis who never missed work.",
      "Obama reads the whole thing herself and that is the reason to choose audio. Her delivery is conversational, she laughs at her own asides, and passages about IVF, marriage counselling and grief are read with a directness a hired narrator could not claim. When she describes her father's decline, the pause before she moves on tells you more than the sentence does.",
      "The political years are the least surprising stretch. Once the campaign starts, the book becomes more careful and more official, and the pace slows noticeably around the middle of the final third. It is still absorbing; it is simply less revealing than what comes before.",
      "At nineteen hours this is a commitment. It divides well, though — the three parts work almost as separate listens, so it suits a fortnight of commutes.",
    ],
    narratorNotes:
      "Author-read with excellent studio quality across a very long recording. Consistent energy; no cast, no music.",
    bestFor: ["Long-haul listening", "Memoir readers", "Listeners who value author narration"],
  },
  {
    slug: "the-night-circus",
    title: "The Night Circus",
    author: "Erin Morgenstern",
    narrator: "Jim Dale",
    genre: "Fiction",
    length: "13h 39m",
    rating: 4.5,
    date: "30 May 2026",
    dateISO: "2026-05-30",
    isbn: "9780307744432",
    excerpt:
      "Jim Dale narrating a circus that appears without warning. A production more concerned with atmosphere than plot.",
    verdict:
      "Worth it for the narration and the world. Do not come for the story mechanics.",
    body: [
      "Two magicians are bound into a competition neither fully understands, played out inside a black-and-white circus that opens at nightfall and vanishes again. Morgenstern's real interest is in the tents themselves, described in long set pieces, and the plot proceeds sideways through a non-linear timeline.",
      "Jim Dale, best known to audio listeners for the Harry Potter recordings, is perfectly cast. He gives the circus an old-fashioned ringmaster grandeur that would be too much in another book, and his character voices are broad and instantly identifiable — helpful, because the timeline jumps constantly and the voices become your anchor.",
      "The middle is where opinions split. There are long stretches of pure description with no forward motion, and the central rivalry stays vague for a long time. If you want the atmosphere, this is a feature. If you want stakes, it will frustrate you.",
      "Second-person interludes addressed to the listener sit oddly at first and end up being a highlight, mainly because Dale reads them as if he is standing next to you.",
    ],
    narratorNotes:
      "Solo narration in a theatrical register with distinct, sometimes broad character voices. Light music at part breaks; recording is warm and slightly reverberant, which fits.",
    bestFor: ["Evening and bedtime listening", "Listeners who prize atmosphere", "Fans of Jim Dale's narration"],
  },
  {
    slug: "dune",
    title: "Dune",
    author: "Frank Herbert",
    narrator: "Scott Brick, Simon Vance, Ilyana Kadushin and cast",
    genre: "Sci-Fi",
    length: "21h 02m",
    rating: 4.4,
    date: "23 May 2026",
    dateISO: "2026-05-23",
    isbn: "9780425064344",
    excerpt:
      "Twenty-one hours of politics, ecology and prophecy, in a hybrid production that switches between solo narration and a cast.",
    verdict:
      "The best way into a famously dense novel, with a production style that takes some getting used to.",
    body: [
      "A noble family is handed control of the only planet producing the most valuable substance in the universe, and walks into a trap that has been set for generations. Herbert spends as much time on ecology, religion and imperial politics as on action, and the internal monologue-heavy prose is a real obstacle for some print readers.",
      "Audio helps with that. Hearing the scheming spoken aloud makes the political layers much easier to follow, and the constant unspoken thoughts read as natural in performance. Scott Brick handles the bulk of the narration in a deliberate, slightly grave style, with Simon Vance, Ilyana Kadushin and others taking specific characters in dramatised passages.",
      "The hybrid approach is the production's most divisive feature. Some chapters are straight narration, others switch to a cast with distinct performances, and the transition between the two modes can feel abrupt in the first few hours. Once your ear adjusts, the cast sections are the highlight — the Bene Gesserit scenes in particular.",
      "Set expectations on pace: the first six hours are largely setup, and the invented vocabulary comes at you fast. There is a glossary in the print edition and no equivalent here, so newcomers may want a text copy alongside.",
    ],
    narratorNotes:
      "Hybrid production: solo narration plus dramatised cast passages. Occasional music and effects. Levels are good, but the mode switching is noticeable.",
    bestFor: ["Long-term listening projects", "Science-fiction readers", "Anyone who stalled on the print edition"],
  },
  {
    slug: "the-martian",
    title: "The Martian",
    author: "Andy Weir",
    narrator: "R. C. Bray",
    genre: "Sci-Fi",
    length: "10h 53m",
    rating: 4.7,
    date: "16 May 2026",
    dateISO: "2026-05-16",
    isbn: "9780091956448",
    excerpt:
      "An astronaut stranded on Mars, narrated with exactly the dry sarcasm the log entries need.",
    verdict:
      "Eleven hours of problem-solving that plays like a thriller. Our pick for a first science-fiction listen.",
    body: [
      "Mark Watney is left behind on Mars and has to keep himself alive with the equipment a departed crew abandoned. Most of the book is his mission log: an inventory, a calculation, a plan, and then the plan going wrong. Interleaved chapters follow NASA on the ground.",
      "R. C. Bray's narration is the reason this became an audio landmark. He plays Watney as a wisecracking engineer who uses humour as a coping mechanism, and the deadpan delivery makes the technical passages genuinely entertaining. When the tone finally drops — and it does, a few times — the contrast is startling.",
      "Bray also keeps the NASA cast distinct without pantomime, which matters because those chapters introduce a dozen minor characters quickly. The pacing is relentless: chapters are short, each ends with a problem, and it is very easy to lose an evening to it.",
      "Two caveats. There is a lot of arithmetic spoken aloud, which some listeners find tedious in audio, and the profanity is constant from the opening line, so it is not a family listen.",
    ],
    narratorNotes:
      "Solo narration with strong comic timing and clean character separation. Straightforward production, no effects; holds up well at 1.25x.",
    bestFor: ["First-time sci-fi listeners", "Commutes", "Fans of Project Hail Mary"],
  },
  {
    slug: "sapiens",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    narrator: "Derek Perkins",
    genre: "History",
    length: "15h 18m",
    rating: 4.5,
    date: "9 May 2026",
    dateISO: "2026-05-09",
    isbn: "9781494506902",
    excerpt:
      "Big-history storytelling read by one of the clearest narrators in nonfiction audio.",
    verdict:
      "Excellent narration of a provocative book. Listen for the argument, check the details elsewhere.",
    body: [
      "Harari runs from the emergence of Homo sapiens to the present in four movements: the cognitive revolution, the agricultural revolution, the unification of humankind, and the scientific revolution. His central claim is that shared fictions — money, nations, religions, corporations — are what let large numbers of strangers cooperate.",
      "Derek Perkins is a superb fit. His pacing is steady, his emphasis falls on the argument rather than the phrasing, and he pronounces an intimidating range of names and terms without hesitation. Fifteen hours of dense nonfiction can turn into wallpaper with the wrong narrator; Perkins keeps it legible.",
      "Audio suits the structure, because Harari writes in self-contained arguments with clear signposting. It is easy to follow a chapter on a walk and pick the thread back up the next day. The agricultural revolution section — his case that farming was a trap rather than a triumph — is the most quotable stretch.",
      "One honest note: historians have contested a number of Harari's specifics and his taste for the sweeping generalisation. Treat it as a stimulating argument rather than a settled reference, and note that the charts and maps in the print edition simply are not here.",
    ],
    narratorNotes:
      "Solo narration, precise and even, with reliable pronunciation across many languages. Works well at 1.25x to 1.5x for experienced listeners.",
    bestFor: ["Walking and gym listening", "Nonfiction listeners", "Anyone who likes big-picture history"],
  },
  {
    slug: "klara-and-the-sun",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    narrator: "Sura Siu",
    genre: "Fiction",
    length: "10h 16m",
    rating: 4.3,
    date: "2 May 2026",
    dateISO: "2026-05-02",
    isbn: "9780571364916",
    excerpt:
      "A solar-powered android narrates a story she does not fully understand. The narration is the entire experience.",
    verdict:
      "Quiet, strange and slow by design. Superb performance; not a book to listen to distracted.",
    body: [
      "Klara is an Artificial Friend in a shop window who is bought as a companion for an ill teenager, and she tells the story herself with a limited grasp of what the adults around her are actually arranging. Ishiguro withholds almost everything, so the plot arrives through implication rather than event.",
      "Sura Siu's narration is the standout element. She reads Klara with a flat, courteous precision — every sentence polite, every observation slightly off-centre — and never begs for sympathy. The restraint pays off: when Klara misreads a scene the listener understands perfectly, the effect is far more moving than a warmer reading would be.",
      "This demands attention. Crucial information is often a single clause in a mild sentence, and if your mind wanders for a minute you can miss the point of a chapter. It is a poor choice for noisy environments or half-listening while working.",
      "Pace is the main reservation. The middle section in the house circles the same domestic scenes for a long time, and readers who need momentum will find it airless. If you liked Never Let Me Go, you already know whether this is for you.",
    ],
    narratorNotes:
      "Solo narration in a deliberately affectless register that suits the narrator's perspective. Clean, close recording with no music or effects.",
    bestFor: ["Attentive, quiet listening", "Literary fiction readers", "Fans of Never Let Me Go"],
  },
];

export const reviews: Review[] = seeds.map((seed) => ({
  ...seed,
  reviewer: REVIEWER,
  score: `${seed.rating.toFixed(1)} / 5`,
  cover: coverForIsbn(seed.isbn),
  coverSmall: coverThumbForIsbn(seed.isbn),
}));

export const genres = [
  "Fiction",
  "Memoir",
  "Mystery",
  "Sci-Fi",
  "History",
  "Self-Help",
] as const;

export function getReview(slug: string): Review | undefined {
  return reviews.find((r) => r.slug === slug);
}

export { AUDIOBOOKS_AFFILIATE_URL as AFFILIATE_URL } from "@/lib/affiliate";
