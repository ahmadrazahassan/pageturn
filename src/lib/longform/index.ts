import type { LongformEntry, LongformMap } from "./types";
import { batch1 } from "./batch1";
import { batch2 } from "./batch2";
import { batch3 } from "./batch3";
import { batch4 } from "./batch4";

export type { LongformEntry, LongformMap, ReviewSection, ScoreLine } from "./types";

export const longform: LongformMap = {
  ...batch1,
  ...batch2,
  ...batch3,
  ...batch4,
};

export function getLongform(slug: string): LongformEntry | undefined {
  return longform[slug];
}

/** Rough word count of a review's long-form body, used for the "x-minute read" label. */
export function longformWordCount(entry: LongformEntry): number {
  return entry.sections.reduce(
    (total, section) =>
      total + section.paragraphs.reduce((sum, p) => sum + p.split(/\s+/).length, 0),
    0,
  );
}
