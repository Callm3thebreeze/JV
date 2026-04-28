import { getCollection } from 'astro:content';
import { ui, defaultLang, type Lang } from './ui';

/**
 * Extract the language from a URL pathname.
 * Returns 'es' for paths starting with /es/, otherwise 'en'.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/**
 * Returns a translation function for the given language.
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

/**
 * True when pathname is localized under /es.
 */
export function isSpanishPath(pathname: string): boolean {
  return pathname === '/es' || pathname.startsWith('/es/');
}

/**
 * True when pathname points to either localized home route.
 */
export function isHomePath(pathname: string): boolean {
  return pathname === '/' || pathname === '/es' || pathname === '/es/';
}

/**
 * Convert pathname to English route (default locale, no /es prefix).
 */
export function toEnglishPath(pathname: string): string {
  if (!isSpanishPath(pathname)) return pathname || '/';
  return pathname.replace(/^\/es(?=\/|$)/, '') || '/';
}

/**
 * Convert pathname to Spanish route (/es prefix).
 */
export function toSpanishPath(pathname: string): string {
  if (isSpanishPath(pathname)) return pathname || '/es/';
  return pathname === '/' ? '/es/' : `/es${pathname}`;
}

/**
 * Get path for target language while preserving current route.
 */
export function getAlternatePath(pathname: string, targetLang: Lang): string {
  return targetLang === defaultLang
    ? toEnglishPath(pathname)
    : toSpanishPath(pathname);
}

/**
 * Build a localized path. English paths have no prefix, Spanish paths are under /es/.
 */
export function localizedPath(lang: Lang, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return cleanPath;
  return `/${lang}${cleanPath}`;
}

/**
 * Get all projects filtered by locale, sorted by date descending.
 */
export async function getProjectsByLocale(locale: Lang) {
  const allProjects = await getCollection('projects');
  return allProjects
    .filter((p) => p.data.lang === locale)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * Get featured projects for a locale.
 */
export async function getFeaturedProjects(locale: Lang, limit = 3) {
  const projects = await getProjectsByLocale(locale);
  return projects.filter((p) => p.data.featured).slice(0, limit);
}

/**
 * Find the translation of a project by its translationId.
 */
export async function getProjectTranslation(
  translationId: string,
  targetLocale: Lang,
) {
  const allProjects = await getCollection('projects');
  return allProjects.find(
    (p) => p.data.translationId === translationId && p.data.lang === targetLocale,
  );
}

/**
 * Get slug from a project id (strip the locale folder prefix).
 */
export function getProjectSlug(projectId: string): string {
  // ids look like "en/my-project" or "es/my-project"
  const parts = projectId.split('/');
  return parts.length > 1 ? parts.slice(1).join('/') : projectId;
}
