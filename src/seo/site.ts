import type { Lang } from "../i18n/ui";

export const SITE_URL = "https://jesusvillar.dev";
export const SITE_NAME = "Jesús Villar";
export const SITE_BRAND = "JV Portfolio";
export const DEFAULT_OG_IMAGE = "/images/projects/jv-portfolio.png";
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const SAME_AS_LINKS = [
  "https://github.com/jesusvillar",
  "https://linkedin.com/in/jesusvillar",
];

export const CONTACT_EMAIL = "hello@jesusvillar.dev";

export const LOCALE_CODES: Record<Lang, string> = {
  en: "en-US",
  es: "es-ES",
};

export function toAbsoluteUrl(pathOrUrl: string): string {
  try {
    return new URL(pathOrUrl).toString();
  } catch {
    return new URL(pathOrUrl, SITE_URL).toString();
  }
}

export function getDefaultRobots(noindex = false): string {
  if (noindex) {
    return "noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";
  }

  return "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";
}
