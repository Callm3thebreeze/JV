import type { Lang } from "../i18n/ui";

export interface SeoFaqItem {
  question: string;
  answer: string;
}

interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
}

interface HomeSeoCopy {
  eyebrow: string;
  title: string;
  body: string;
  note: string;
  servicesTitle: string;
  services: string[];
  faqTitle: string;
  faqs: SeoFaqItem[];
}

interface LocaleSeoContent {
  metadata: {
    home: PageMetadata;
    projects: PageMetadata;
    contact: PageMetadata;
    componentsGallery: PageMetadata;
    notFound: PageMetadata;
  };
  person: {
    jobTitle: string;
    description: string;
    knowsAbout: string[];
  };
  home: HomeSeoCopy;
}

export const seoContent: Record<Lang, LocaleSeoContent> = {
  en: {
    metadata: {
      home: {
        title: "Jesús Villar | Frontend Developer & Web Designer",
        description:
          "Portfolio of Jesús Villar, frontend developer and web designer focused on fast, accessible and visually distinctive websites. Site in active growth with new case studies in English and Spanish.",
        keywords: [
          "jesus villar",
          "frontend developer",
          "web designer",
          "web developer portfolio",
          "astro developer",
          "ui designer",
          "accessible websites",
          "bilingual portfolio",
        ],
      },
      projects: {
        title: "Projects | Frontend Development & Web Design Case Studies",
        description:
          "Selected web design and frontend development projects by Jesús Villar, including bilingual portfolios, institutional websites and performance-focused digital experiences.",
        keywords: [
          "frontend case studies",
          "web design projects",
          "astro projects",
          "accessibility projects",
          "portfolio case studies",
          "ui design portfolio",
        ],
      },
      contact: {
        title: "Contact | Hire Jesús Villar for Web Design & Frontend Development",
        description:
          "Get in touch with Jesús Villar for frontend development, web design, portfolio websites, landing pages and accessible digital experiences.",
        keywords: [
          "hire frontend developer",
          "hire web designer",
          "contact jesus villar",
          "freelance web designer",
          "portfolio website designer",
          "frontend development services",
        ],
      },
      componentsGallery: {
        title: "Components Gallery | Internal UI Reference",
        description:
          "Internal component gallery used to evolve the portfolio design system while the site is still growing.",
        keywords: ["components gallery", "design system", "internal reference"],
      },
      notFound: {
        title: "Page Not Found | Jesús Villar",
        description:
          "The requested page could not be found on the Jesús Villar portfolio.",
        keywords: ["404", "page not found"],
      },
    },
    person: {
      jobTitle: "Frontend Developer and Web Designer",
      description:
        "Jesús Villar designs and develops fast, accessible and visually distinctive websites, portfolios and digital experiences.",
      knowsAbout: [
        "Frontend development",
        "Web design",
        "Astro",
        "TypeScript",
        "Accessibility",
        "Responsive design",
        "Design systems",
        "Performance optimization",
      ],
    },
    home: {
      eyebrow: "Full-Stack Developer & Designer",
      title: "Full-stack web development and design for brands, studios and teams that need accessible, efficient and visually striking websites.",
      body: "I build websites that balance performance, accessibility and visual character from concept to launch. The goal is not just to make something work, but to create a fast, clear and memorable digital experience that feels aligned with the identity behind the project.",
      note: "If you need a website with strong art direction, solid front-end architecture and careful implementation across the whole product, I can help shape it end to end.",
      servicesTitle: "What I can bring to your website",
      services: [
        "Full-stack development with a strong front-end focus, from structure and components to launch-ready implementation",
        "Web design with personality, clear hierarchy and a visual system tailored to the brand",
        "Accessible interfaces that are easier to use, maintain and scale",
        "Efficient websites built for performance, clarity and long-term growth",
      ],
      faqTitle: "Frequently asked questions",
      faqs: [
        {
          question: "What kind of websites do you build?",
          answer:
            "I work on websites, landing pages, branded digital experiences and content-driven builds that need a strong balance of design, performance, accessibility and personality.",
        },
        {
          question: "What can I expect if we work together?",
          answer:
            "You can expect a process that cares about visual direction, clean structure, usability and implementation quality at the same time. The aim is to deliver something that looks distinctive and also behaves well in the real world.",
        },
        {
          question: "Why focus so much on accessibility and performance?",
          answer:
            "Because accessible and efficient websites are better for users, easier to maintain and more resilient as a business asset. Good performance and usability are not extras; they are part of what makes a website feel premium.",
        },
      ],
    },
  },
  es: {
    metadata: {
      home: {
        title: "Jesús Villar | Desarrollador Frontend y Diseñador Web",
        description:
          "Portfolio de Jesús Villar, desarrollador frontend y diseñador web centrado en sitios rápidos, accesibles y con identidad visual propia. Web en crecimiento activo con nuevos casos de estudio en español e inglés.",
        keywords: [
          "jesus villar",
          "desarrollador frontend",
          "diseñador web",
          "portfolio desarrollador web",
          "astro developer",
          "diseño ui",
          "web accesible",
          "portfolio bilingüe",
        ],
      },
      projects: {
        title: "Proyectos | Casos de Estudio de Desarrollo Frontend y Diseño Web",
        description:
          "Selección de proyectos de diseño web y desarrollo frontend de Jesús Villar, con portfolios bilingües, webs institucionales y experiencias digitales centradas en rendimiento y accesibilidad.",
        keywords: [
          "casos de estudio frontend",
          "proyectos de diseño web",
          "proyectos astro",
          "proyectos accesibilidad",
          "portfolio de proyectos web",
          "portfolio diseñador web",
        ],
      },
      contact: {
        title: "Contacto | Contrata a Jesús Villar para Diseño Web y Desarrollo Frontend",
        description:
          "Contacta con Jesús Villar para proyectos de desarrollo frontend, diseño web, portfolios, landing pages y experiencias digitales accesibles.",
        keywords: [
          "contratar desarrollador frontend",
          "contratar diseñador web",
          "contacto jesus villar",
          "freelance diseñador web",
          "diseñador de portfolios web",
          "servicios frontend",
        ],
      },
      componentsGallery: {
        title: "Galería de Componentes | Referencia Interna de UI",
        description:
          "Galería interna de componentes usada para evolucionar el sistema visual del portfolio mientras la web sigue creciendo.",
        keywords: [
          "galería de componentes",
          "sistema de diseño",
          "referencia interna",
        ],
      },
      notFound: {
        title: "Página No Encontrada | Jesús Villar",
        description:
          "La página solicitada no existe dentro del portfolio de Jesús Villar.",
        keywords: ["404", "página no encontrada"],
      },
    },
    person: {
      jobTitle: "Desarrollador frontend y diseñador web",
      description:
        "Jesús Villar diseña y desarrolla sitios web rápidos, accesibles y con personalidad visual, incluyendo portfolios, landing pages y experiencias digitales a medida.",
      knowsAbout: [
        "Desarrollo frontend",
        "Diseño web",
        "Astro",
        "TypeScript",
        "Accesibilidad",
        "Diseño responsive",
        "Sistemas de diseño",
        "Optimización de rendimiento",
      ],
    },
    home: {
      eyebrow: "Desarrollador Full-Stack y Diseñador",
      title: "Desarrollo web full-stack y diseño para marcas, estudios y equipos que necesitan webs accesibles, eficientes y visualmente impactantes.",
      body: "Desarrollo webs que equilibran rendimiento, accesibilidad y carácter visual desde la idea hasta la implementación final. El objetivo no es solo que funcionen bien, sino construir una experiencia digital rápida, clara y memorable, alineada con la identidad de cada proyecto.",
      note: "Si buscas una web con dirección visual sólida, una arquitectura bien resuelta y una implementación cuidada de principio a fin, puedo ayudarte a construirla.",
      servicesTitle: "Lo que puedo aportar a tu web",
      services: [
        "Desarrollo full-stack con una base front-end sólida, desde la estructura y los componentes hasta una implementación lista para producción",
        "Diseño web con personalidad, jerarquía clara y un sistema visual adaptado a la marca",
        "Interfaces accesibles más fáciles de usar, mantener y escalar",
        "Webs eficientes construidas para rendir bien, comunicar mejor y crecer con el proyecto",
      ],
      faqTitle: "Preguntas frecuentes",
      faqs: [
        {
          question: "¿Qué tipo de webs desarrollo?",
          answer:
            "Trabajo en webs, landing pages, experiencias digitales de marca y proyectos basados en contenido que necesitan combinar diseño, rendimiento, accesibilidad y personalidad.",
        },
        {
          question: "¿Qué puedes esperar si trabajamos juntos?",
          answer:
            "Puedes esperar un proceso en el que conviven dirección visual, buena estructura, usabilidad y calidad de implementación. La idea es entregar una web con identidad propia que además funcione bien en condiciones reales.",
        },
        {
          question: "¿Por qué doy tanta importancia a la accesibilidad y al rendimiento?",
          answer:
            "Porque una web accesible y eficiente ofrece una mejor experiencia, resulta más fácil de mantener y tiene más valor a largo plazo. El buen rendimiento y la usabilidad no son extras: forman parte de lo que hace que una web se sienta realmente premium.",
        },
      ],
    },
  },
};
