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
