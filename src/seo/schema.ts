import type { CollectionEntry } from "astro:content";
import type { Lang } from "../i18n/ui";
import { getProjectSlug, localizedPath } from "../i18n/utils";
import { seoContent, type SeoFaqItem } from "./content";
import {
  CONTACT_EMAIL,
  DEFAULT_OG_IMAGE,
  LOCALE_CODES,
  PERSON_ID,
  SAME_AS_LINKS,
  SITE_BRAND,
  SITE_NAME,
  WEBSITE_ID,
  toAbsoluteUrl,
} from "./site";

export type JsonLd = Record<string, unknown>;

function getProjectTags(project: CollectionEntry<"projects">, lang: Lang) {
  const tagMap = {
    en: {
      design: "web design",
      development: "frontend development",
    },
    es: {
      design: "diseño web",
      development: "desarrollo frontend",
    },
  } as const;

  return project.data.tags.map((tag) => tagMap[lang][tag]);
}

export function buildProjectKeywords(
  project: CollectionEntry<"projects">,
  lang: Lang,
): string[] {
  return [
    project.data.title,
    ...getProjectTags(project, lang),
    ...project.data.techStack,
  ];
}

export function buildPersonSchema(lang: Lang): JsonLd {
  const person = seoContent[lang].person;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    url: toAbsoluteUrl("/"),
    image: toAbsoluteUrl(DEFAULT_OG_IMAGE),
    email: `mailto:${CONTACT_EMAIL}`,
    jobTitle: person.jobTitle,
    description: person.description,
    sameAs: SAME_AS_LINKS,
    knowsAbout: person.knowsAbout,
  };
}

export function buildWebsiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: toAbsoluteUrl("/"),
    name: SITE_NAME,
    alternateName: SITE_BRAND,
    inLanguage: Object.values(LOCALE_CODES),
    publisher: { "@id": PERSON_ID },
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

function buildWebPageSchema({
  url,
  title,
  description,
  lang,
  pageType = "WebPage",
  image = DEFAULT_OG_IMAGE,
  mainEntityId,
}: {
  url: string;
  title: string;
  description: string;
  lang: Lang;
  pageType?: "WebPage" | "CollectionPage" | "ContactPage";
  image?: string;
  mainEntityId?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: LOCALE_CODES[lang],
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: toAbsoluteUrl(image),
    },
    ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
  };
}

export function buildFaqSchema(faqs: SeoFaqItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildHomeSchemas({
  lang,
  title,
  description,
  featuredProjects,
}: {
  lang: Lang;
  title: string;
  description: string;
  featuredProjects: CollectionEntry<"projects">[];
}): JsonLd[] {
  const pageUrl = toAbsoluteUrl(localizedPath(lang, "/"));
  const faqs = seoContent[lang].home.faqs;

  return [
    buildPersonSchema(lang),
    buildWebsiteSchema(),
    buildWebPageSchema({
      url: pageUrl,
      title,
      description,
      lang,
      image: DEFAULT_OG_IMAGE,
    }),
    buildFaqSchema(faqs),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: lang === "es" ? "Proyectos destacados" : "Featured projects",
      itemListElement: featuredProjects.map((project, index) => {
        const slug = getProjectSlug(project.id);

        return {
          "@type": "ListItem",
          position: index + 1,
          url: toAbsoluteUrl(localizedPath(lang, `/projects/${slug}/`)),
          name: project.data.title,
        };
      }),
    },
  ];
}

export function buildProjectsSchemas({
  lang,
  title,
  description,
  projects,
  homeLabel,
  projectsLabel,
}: {
  lang: Lang;
  title: string;
  description: string;
  projects: CollectionEntry<"projects">[];
  homeLabel: string;
  projectsLabel: string;
}): JsonLd[] {
  const pagePath = localizedPath(lang, "/projects/");
  const pageUrl = toAbsoluteUrl(pagePath);

  return [
    buildPersonSchema(lang),
    buildWebsiteSchema(),
    buildWebPageSchema({
      url: pageUrl,
      title,
      description,
      lang,
      pageType: "CollectionPage",
      image: DEFAULT_OG_IMAGE,
    }),
    buildBreadcrumbSchema([
      { name: homeLabel, path: localizedPath(lang, "/") },
      { name: projectsLabel, path: pagePath },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: projectsLabel,
      itemListElement: projects.map((project, index) => {
        const slug = getProjectSlug(project.id);

        return {
          "@type": "ListItem",
          position: index + 1,
          url: toAbsoluteUrl(localizedPath(lang, `/projects/${slug}/`)),
          name: project.data.title,
        };
      }),
    },
  ];
}

export function buildContactSchemas({
  lang,
  title,
  description,
  homeLabel,
  contactLabel,
}: {
  lang: Lang;
  title: string;
  description: string;
  homeLabel: string;
  contactLabel: string;
}): JsonLd[] {
  const pagePath = localizedPath(lang, "/contact/");
  const pageUrl = toAbsoluteUrl(pagePath);

  return [
    buildPersonSchema(lang),
    buildWebsiteSchema(),
    buildWebPageSchema({
      url: pageUrl,
      title,
      description,
      lang,
      pageType: "ContactPage",
      image: DEFAULT_OG_IMAGE,
    }),
    buildBreadcrumbSchema([
      { name: homeLabel, path: localizedPath(lang, "/") },
      { name: contactLabel, path: pagePath },
    ]),
  ];
}

export function buildProjectSchemas({
  lang,
  project,
  title,
  description,
  homeLabel,
  projectsLabel,
}: {
  lang: Lang;
  project: CollectionEntry<"projects">;
  title: string;
  description: string;
  homeLabel: string;
  projectsLabel: string;
}): JsonLd[] {
  const slug = getProjectSlug(project.id);
  const pagePath = localizedPath(lang, `/projects/${slug}/`);
  const pageUrl = toAbsoluteUrl(pagePath);
  const workId = `${pageUrl}#project`;
  const image = `/images/projects/${slug}.png`;

  return [
    buildPersonSchema(lang),
    buildWebsiteSchema(),
    buildWebPageSchema({
      url: pageUrl,
      title,
      description,
      lang,
      image,
      mainEntityId: workId,
    }),
    buildBreadcrumbSchema([
      { name: homeLabel, path: localizedPath(lang, "/") },
      { name: projectsLabel, path: localizedPath(lang, "/projects/") },
      { name: project.data.title, path: pagePath },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": workId,
      name: project.data.title,
      headline: project.data.title,
      description,
      url: pageUrl,
      image: toAbsoluteUrl(image),
      inLanguage: LOCALE_CODES[lang],
      datePublished: project.data.date.toISOString(),
      dateModified: project.data.date.toISOString(),
      creator: { "@id": PERSON_ID },
      author: { "@id": PERSON_ID },
      keywords: buildProjectKeywords(project, lang),
      genre: getProjectTags(project, lang),
      ...(project.data.role ? { abstract: project.data.role } : {}),
      ...(project.data.links.live ? { sameAs: project.data.links.live } : {}),
    },
  ];
}
