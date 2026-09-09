const TRACKING_HOST = "https://audiobookscom.postaffiliatepro.com";
const AFFILIATE_ID = "0r1zy6ucuydc9";

export const AUDIOBOOKS_AFFILIATE_URL = `${TRACKING_HOST}/scripts/kcd5fq4o7?a_aid=${AFFILIATE_ID}&a_bid=6de39593`;

export type AffiliateBannerId = "leaderboard" | "wide" | "landscape" | "portrait" | "mobile";

type AffiliateBanner = {
  id: AffiliateBannerId;
  href: string;
  imageSrc: string;
  trackingPixel: string;
  width: number;
  height: number;
  alt: string;
};

const banner = (
  id: AffiliateBannerId,
  bid: string,
  width: number,
  height: number,
  alt: string,
): AffiliateBanner => ({
  id,
  href: `${TRACKING_HOST}/scripts/kcd5fq4o7?a_aid=${AFFILIATE_ID}&a_bid=${bid}`,
  imageSrc: `${TRACKING_HOST}/accounts/default1/kbd5fq4o7/${bid}.jpg`,
  trackingPixel: `${TRACKING_HOST}/scripts/kid5fq4o7?a_aid=${AFFILIATE_ID}&a_bid=${bid}`,
  width,
  height,
  alt,
});

export const affiliateBanners: Record<AffiliateBannerId, AffiliateBanner> = {
  leaderboard: banner(
    "leaderboard",
    "affe750f",
    728,
    90,
    "Audiobooks.com partner offer — start a free trial",
  ),
  wide: banner(
    "wide",
    "d284eae8",
    700,
    390,
    "Audiobooks.com partner offer — discover your next audiobook",
  ),
  landscape: banner(
    "landscape",
    "33e70d85",
    480,
    320,
    "Audiobooks.com partner offer for audiobook listeners",
  ),
  portrait: banner(
    "portrait",
    "2381299b",
    320,
    480,
    "Audiobooks.com partner offer — listen anywhere",
  ),
  mobile: banner("mobile", "1910f142", 320, 50, "Audiobooks.com partner offer"),
};
