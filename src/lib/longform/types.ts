export type ReviewSection = {
  /** Section heading, rendered as an h2 in the review page. */
  heading: string;
  paragraphs: string[];
};

export type ScoreLine = {
  label: string;
  score: string;
  note: string;
};

export type LongformEntry = {
  /** In-depth sections appended after the short opening take. */
  sections: ReviewSection[];
  /** One short quotable line pulled out mid-article. */
  pullQuote: string;
  /** Category-by-category scoring for the rating breakdown table. */
  scoreBreakdown: ScoreLine[];
  /** Titles a listener who liked this one should queue next. */
  alsoTry: string[];
  /** Honest reason to skip this listen. */
  skipIf: string;
};

export type LongformMap = Record<string, LongformEntry>;
