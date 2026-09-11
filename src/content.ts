// All site copy lives here. Edit this file to update the site; no component changes needed.
import type { Locale } from "@/i18n/config";

export const sectionIds = [
  "experience",
  "products",
  "skills",
  "education",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

export interface ExternalLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  email: string;
  phone: ExternalLink;
  linkedin: ExternalLink;
  github: ExternalLink;
  siteUrl: string;
  /** Served from /public/cv.pdf through the /cv rewrite in next.config.ts. */
  cv: { href: string; fileName: string };
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyNote?: string;
  period: string;
  bullets: string[];
  clients?: string[];
}

export interface Product {
  name: string;
  url: string;
  domain: string;
  description: string;
  stack: string;
}

export interface SkillGroup {
  group: string;
  items: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

export interface Content {
  meta: { title: string; description: string };
  ui: {
    skipToContent: string;
    navLabel: string;
    nav: Record<SectionId, string>;
    /** Short label for the link to the other language, e.g. "ES". */
    otherLanguage: string;
    switchLanguage: string;
    toggleTheme: string;
    clients: string;
  };
  hero: {
    title: string;
    location: string;
    summary: string;
    ctaCv: string;
    ctaEmail: string;
  };
  experience: ExperienceItem[];
  products: Product[];
  skills: SkillGroup[];
  education: EducationItem[];
  additional: { title: string; items: string[] };
  contact: { email: string; phone: string; linkedin: string; github: string };
}

export const profile: Profile = {
  name: "Brandon Uriel García Ramos",
  email: "brangarciaramos@gmail.com",
  phone: { label: "+52 333 410 9866", href: "tel:+523334109866" },
  linkedin: {
    label: "linkedin.com/in/brangarciaramos",
    href: "https://www.linkedin.com/in/brangarciaramos",
  },
  github: { label: "github.com/imsoft", href: "https://github.com/imsoft" },
  siteUrl: "https://brangarciaramos.com",
  cv: { href: "/cv", fileName: "Brandon-Garcia-Ramos-CV.pdf" },
};

const enClients = [
  "Construcción Inteligente (eCommerce site, +30% sales in the first quarter)",
  "Ferreacabados Jalisco (+25% conversions, +15% sales)",
  "Club de Estirpe (+30% traffic, +20% leads)",
  "Starfilters",
];

const esClients = [
  "Construcción Inteligente (eCommerce, +30% de ventas en el primer trimestre)",
  "Ferreacabados Jalisco (+25% de conversiones, +15% de ventas)",
  "Club de Estirpe (+30% de tráfico, +20% de leads)",
  "Starfilters",
];

const enSummary =
  "Full-stack engineer, 6+ years shipping web and mobile products end to end. 20+ projects delivered across six industries — SaaS platforms, marketplaces and internal tools — in TypeScript, React/Next.js, Node/NestJS and PostgreSQL.";

const esSummary =
  "Ingeniero full-stack con más de 6 años entregando productos web y móviles de principio a fin. Más de 20 proyectos entregados en seis industrias — plataformas SaaS, marketplaces y herramientas internas — con TypeScript, React/Next.js, Node/NestJS y PostgreSQL.";

const en: Content = {
  meta: {
    title: "Brandon Uriel García Ramos — Senior Full-Stack Engineer",
    description: enSummary,
  },
  ui: {
    skipToContent: "Skip to content",
    navLabel: "Sections",
    nav: {
      experience: "Experience",
      products: "Products",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    otherLanguage: "ES",
    switchLanguage: "Ver en español",
    toggleTheme: "Toggle dark mode",
    clients: "Clients",
  },
  hero: {
    title: "Senior Full-Stack Engineer",
    location: "Guadalajara, Mexico · Remote (US / EU / LATAM)",
    summary: enSummary,
    ctaCv: "Download CV",
    ctaEmail: "Email me",
  },
  experience: [
    {
      role: "Full-Stack Engineer",
      company: "imSoft",
      companyNote: "software studio, Guadalajara",
      period: "May 2019 – Present",
      bullets: [
        "Shipped 20+ web and mobile products for clients in logistics, customs, construction, retail, healthcare and education, owning architecture, implementation and support on each.",
        "Built a customs and logistics operations tool that automated document handling and reporting, removing ~10 hours of manual work per week for the client.",
        "Launched multi-tenant SaaS platforms on Next.js, NestJS and PostgreSQL with Stripe billing, role-based access, automated test suites and CI/CD.",
        "Integrated REST and GraphQL APIs across payments, CRM and logistics services; client projects typically delivered ~30% improvements in sales or process throughput.",
      ],
      clients: enClients,
    },
    {
      role: "Chief Technology Officer",
      company: "Holistia",
      companyNote: "wellness platform",
      period: "Jul 2024 – Dec 2025",
      bullets: [
        "Defined the technical roadmap and architecture for a booking and wellness platform on Next.js, Supabase and Stripe.",
        "Led a 5-person development team; set the delivery process, code review standards and release cadence.",
        "Owned infrastructure decisions for scalability, data security and cost control.",
      ],
    },
    {
      role: "Instructor, IT & Robotics",
      company: "AWL",
      period: "Aug 2016 – Feb 2020",
      bullets: [
        "Taught programming, robotics and English; designed the curriculum used across groups.",
      ],
    },
  ],
  products: [
    {
      name: "Cursumi",
      url: "https://cursumi.com",
      domain: "cursumi.com",
      description:
        "Course marketplace for LATAM: 5,000 users, instructor dashboards, local-payment checkout, certificates.",
      stack: "Next.js, PostgreSQL, Stripe.",
    },
    {
      name: "Explora Inmuebles",
      url: "https://explorainmuebles.com",
      domain: "explorainmuebles.com",
      description:
        "Real-estate portal merging public safety, flood and seismic-risk data into each listing; map-polygon search and agent CRM.",
      stack: "Next.js, PostgreSQL, Supabase.",
    },
    {
      name: "imSoft",
      url: "https://imsoft.io",
      domain: "imsoft.io",
      description: "Software studio; site and client intake platform.",
      stack: "Next.js.",
    },
  ],
  skills: [
    {
      group: "Languages",
      items: "TypeScript, JavaScript, Python, C, C++, SQL",
    },
    {
      group: "Frontend",
      items: "React, Next.js, Tailwind CSS, shadcn/ui, Astro, HTML, CSS",
    },
    {
      group: "Backend & Data",
      items:
        "Node.js, NestJS, Express, PostgreSQL, Supabase, Prisma, REST, GraphQL",
    },
    {
      group: "Infrastructure",
      items:
        "Docker, CI/CD, Vercel, Git & GitHub, Stripe; unit, integration and E2E testing",
    },
    {
      group: "Practices",
      items:
        "System architecture, API design, performance and security optimisation, Agile/Scrum, OKRs",
    },
  ],
  education: [
    {
      degree: "B.Eng. in Software Development Engineering",
      school: "CETI, Guadalajara",
      period: "2017 – 2021",
    },
    {
      degree: "Technologist in IT & Computing",
      school: "CETI, Guadalajara",
      period: "2012 – 2016",
    },
  ],
  additional: {
    title: "Additional",
    items: [
      "Languages: Spanish (native), English (C1)",
      "Cursumi selected for the Reto Zapopan incubation programme",
      "Courses: Next.js for Production (DevTalles), OpenAI with React + NestJS, Agile Team Management, OKRs for Managers, Business Strategy Design with AI",
    ],
  },
  contact: {
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
};

const es: Content = {
  meta: {
    title: "Brandon Uriel García Ramos — Ingeniero Full-Stack Senior",
    description: esSummary,
  },
  ui: {
    skipToContent: "Saltar al contenido",
    navLabel: "Secciones",
    nav: {
      experience: "Experiencia",
      products: "Productos",
      skills: "Habilidades",
      education: "Educación",
      contact: "Contacto",
    },
    otherLanguage: "EN",
    switchLanguage: "View in English",
    toggleTheme: "Cambiar modo oscuro",
    clients: "Clientes",
  },
  hero: {
    title: "Ingeniero Full-Stack Senior",
    location: "Guadalajara, México · Remoto (EE. UU. / UE / LATAM)",
    summary: esSummary,
    ctaCv: "Descargar CV",
    ctaEmail: "Escríbeme",
  },
  experience: [
    {
      role: "Ingeniero Full-Stack",
      company: "imSoft",
      companyNote: "estudio de software, Guadalajara",
      period: "may. 2019 – actualidad",
      bullets: [
        "Entregué más de 20 productos web y móviles para clientes de logística, aduanas, construcción, retail, salud y educación, a cargo de la arquitectura, la implementación y el soporte de cada uno.",
        "Construí una herramienta de operaciones aduanales y logísticas que automatizó el manejo de documentos y los reportes, eliminando ~10 horas de trabajo manual por semana para el cliente.",
        "Lancé plataformas SaaS multi-tenant sobre Next.js, NestJS y PostgreSQL con cobro vía Stripe, control de acceso por roles, suites de pruebas automatizadas y CI/CD.",
        "Integré APIs REST y GraphQL de servicios de pagos, CRM y logística; los proyectos de clientes lograron típicamente mejoras de ~30% en ventas o en el rendimiento de sus procesos.",
      ],
      clients: esClients,
    },
    {
      role: "Director de Tecnología (CTO)",
      company: "Holistia",
      companyNote: "plataforma de bienestar",
      period: "jul. 2024 – dic. 2025",
      bullets: [
        "Definí el roadmap técnico y la arquitectura de una plataforma de reservas y bienestar sobre Next.js, Supabase y Stripe.",
        "Lideré un equipo de desarrollo de 5 personas; establecí el proceso de entrega, los estándares de code review y la cadencia de releases.",
        "Fui responsable de las decisiones de infraestructura en escalabilidad, seguridad de datos y control de costos.",
      ],
    },
    {
      role: "Instructor de TI y Robótica",
      company: "AWL",
      period: "ago. 2016 – feb. 2020",
      bullets: [
        "Impartí programación, robótica e inglés; diseñé el plan de estudios usado en todos los grupos.",
      ],
    },
  ],
  products: [
    {
      name: "Cursumi",
      url: "https://cursumi.com",
      domain: "cursumi.com",
      description:
        "Marketplace de cursos para LATAM: 5,000 usuarios, paneles para instructores, checkout con pagos locales y certificados.",
      stack: "Next.js, PostgreSQL, Stripe.",
    },
    {
      name: "Explora Inmuebles",
      url: "https://explorainmuebles.com",
      domain: "explorainmuebles.com",
      description:
        "Portal inmobiliario que integra datos públicos de seguridad, inundaciones y riesgo sísmico en cada propiedad; búsqueda por polígono en mapa y CRM para agentes.",
      stack: "Next.js, PostgreSQL, Supabase.",
    },
    {
      name: "imSoft",
      url: "https://imsoft.io",
      domain: "imsoft.io",
      description: "Estudio de software; sitio y plataforma de captación de clientes.",
      stack: "Next.js.",
    },
  ],
  skills: [
    {
      group: "Lenguajes",
      items: "TypeScript, JavaScript, Python, C, C++, SQL",
    },
    {
      group: "Frontend",
      items: "React, Next.js, Tailwind CSS, shadcn/ui, Astro, HTML, CSS",
    },
    {
      group: "Backend y datos",
      items:
        "Node.js, NestJS, Express, PostgreSQL, Supabase, Prisma, REST, GraphQL",
    },
    {
      group: "Infraestructura",
      items:
        "Docker, CI/CD, Vercel, Git y GitHub, Stripe; pruebas unitarias, de integración y E2E",
    },
    {
      group: "Prácticas",
      items:
        "Arquitectura de sistemas, diseño de APIs, optimización de rendimiento y seguridad, Agile/Scrum, OKRs",
    },
  ],
  education: [
    {
      degree: "Ingeniería en Desarrollo de Software",
      school: "CETI, Guadalajara",
      period: "2017 – 2021",
    },
    {
      degree: "Tecnólogo en Informática y Computación",
      school: "CETI, Guadalajara",
      period: "2012 – 2016",
    },
  ],
  additional: {
    title: "Adicional",
    items: [
      "Idiomas: español (nativo), inglés (C1)",
      "Cursumi fue seleccionado para el programa de incubación Reto Zapopan",
      "Cursos: Next.js for Production (DevTalles), OpenAI with React + NestJS, Gestión de equipos ágiles, OKRs para managers, Diseño de estrategia de negocio con IA",
    ],
  },
  contact: {
    email: "Correo",
    phone: "Teléfono",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
};

export const content: Record<Locale, Content> = { en, es };
