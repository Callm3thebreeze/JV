export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Home
    'home.title': 'Jesús Villar — Dev & Design',
    'home.hero.headline': 'I develop digital experiences',
    'home.hero.cta.projects': 'See my work',
    'home.hero.cta.contact': 'Get in touch',
    'home.featured.title': 'Featured Projects',
    'home.featured.viewAll': 'View all projects',

    // Projects
    'projects.title': 'Projects',
    'projects.description':
      'Some of the projects I have worked on. In some I worked as a developer, and in others I handled both design and development.',
    'projects.filter.all': 'All',
    'projects.filter.design': 'Design',
    'projects.filter.development': 'Development',
    'projects.tag.design': 'Design',
    'projects.tag.development': 'Development',

    // Project detail
    'project.techStack': 'Tech Stack',
    'project.links.live': 'Live Site',
    'project.links.repo': 'Repository',
    'project.links.figma': 'Figma',
    'project.back': 'Back to projects',
    'project.otherLang': 'Leer en español',

    // Contact
    'contact.title': 'Contact',
    'contact.description': "Let's work together. Send me a message.",
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent! I will get back to you soon.',
    'contact.form.error': 'Something went wrong. Please try again.',
    'contact.alternative': 'Or reach me at',

    // Footer
    'footer.copyright': '© {year} Jesús Villar. All rights reserved.',

    // 404
    '404.title': 'Page Not Found',
    '404.description': "The page you're looking for doesn't exist.",
    '404.back': 'Go back home',

    // Meta
    'meta.description':
      'Jesús Villar — Developer & Designer. Portfolio showcasing web design and development projects.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Home
    'home.title': 'Jesús Villar — Dev & Design',
    'home.hero.headline': 'Desarrollo experiencias digitales',
    'home.hero.cta.projects': 'Ver mi trabajo',
    'home.hero.cta.contact': 'Contactar',
    'home.featured.title': 'Proyectos Destacados',
    'home.featured.viewAll': 'Ver todos los proyectos',

    // Projects
    'projects.title': 'Proyectos',
    'projects.description':
      'Algunos de los proyectos en los que he trabajado, en algunos he trabajado como desarrollador, y en otros he llevado a cabo tanto diseño como desarrollo.',
    'projects.filter.all': 'Todos',
    'projects.filter.design': 'Diseño',
    'projects.filter.development': 'Desarrollo',
    'projects.tag.design': 'Diseño',
    'projects.tag.development': 'Desarrollo',

    // Project detail
    'project.techStack': 'Tecnologías',
    'project.links.live': 'Sitio Web',
    'project.links.repo': 'Repositorio',
    'project.links.figma': 'Figma',
    'project.back': 'Volver a proyectos',
    'project.otherLang': 'Read in English',

    // Contact
    'contact.title': 'Contacto',
    'contact.description': 'Trabajemos juntos. Envíame un mensaje.',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Mensaje enviado! Te responderé pronto.',
    'contact.form.error': 'Algo salió mal. Por favor, inténtalo de nuevo.',
    'contact.alternative': 'O contáctame en',

    // Footer
    'footer.copyright': '© {year} Jesús Villar. Todos los derechos reservados.',

    // 404
    '404.title': 'Página No Encontrada',
    '404.description': 'La página que buscas no existe.',
    '404.back': 'Volver al inicio',

    // Meta
    'meta.description':
      'Jesús Villar — Desarrollador y Diseñador. Portfolio con proyectos de diseño y desarrollo web.',
  },
} as const;
