import type { Lang } from './ui';

export interface ProjectsPageTexts {
  title: string;
  description: string;
  filters: {
    all: string;
    design: string;
    development: string;
  };
  tags: {
    design: string;
    development: string;
  };
}

export const projectsPageTexts: Record<Lang, ProjectsPageTexts> = {
  en: {
    title: 'Projects',
    description:
      'Some of the projects I have worked on. In some I worked as a developer, and in others I handled both design and development.',
    filters: {
      all: 'All',
      design: 'Design',
      development: 'Development',
    },
    tags: {
      design: 'Design',
      development: 'Development',
    },
  },
  es: {
    title: 'Proyectos',
    description:
      'Algunos de los proyectos en los que he trabajado, en algunos he trabajado como desarrollador, y en otros he llevado a cabo tanto diseño como desarrollo.',
    filters: {
      all: 'Todos',
      design: 'Diseño',
      development: 'Desarrollo',
    },
    tags: {
      design: 'Diseño',
      development: 'Desarrollo',
    },
  },
};
