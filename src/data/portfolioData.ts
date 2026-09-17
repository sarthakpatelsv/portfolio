export const profile = {
  initials: "SP",
  firstName: "SARTHAK",
  lastName: "PATEL",
  title: "Sarthak Patel — Software & AI Developer",
  email: "sarthakpatel.sv@gmail.com",
  phone: "",
  phoneHref: "",
  emailHref: "mailto:sarthakpatel.sv@gmail.com",
  address: "Ottawa, Ontario, Canada",
  location: "Ottawa, Ontario, Canada",
  nationality: "Canadian",
  birthDate: "",
  gender: "",
  rolePrefix: "Software & AI",
  rolePrimary: "Developer",
  roleSecondary: "Full-Stack Developer",
  about:
    "Computer Programming graduate from Algonquin College with a strong foundation in software development, backend engineering, full-stack web applications, and local AI/LLM automation. Experienced in building practical software, REST APIs, and client-focused solutions.",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Ottawa+Ontario+Canada",
  githubHref: "https://github.com/sarthakpatel",
  linkedinHref: "https://www.linkedin.com/in/sarthak-patel-sv/",
  linkedinLabel: "linkedin.com/in/sarthak-patel-sv/",
  youtubeHref: "",
  instagramHref: "",
  instagramLabel: "",
  udemyHref: "",
} as const;

export const careerEntries = [
  {
    role: "Clerk",
    company: "Loblaws",
    meta: "Retail Operations · Kanata, ON",
    period: "July 2024 – April 2026",
    description:
      "Provided customer service, managed inventory, handled cash transactions, and supported day-to-day store operations in a fast-paced retail environment.",
  },
  {
    role: "Associate",
    company: "Home Depot",
    meta: "Customer Service · Ottawa, ON",
    period: "March 2024 – June 2024",
    description:
      "Assisted customers with product inquiries, maintained store displays, and contributed to sales targets through strong product knowledge and engagement.",
  },
  {
    role: "Associate",
    company: "Farm Boy",
    meta: "Customer Service · Ottawa, ON",
    period: "January 2024 – March 2024",
    description:
      "Delivered personalized customer support, restocked products, and ensured a clean and organized shopping environment.",
  },
] as const;

export const serviceCards = [
  {
    title: "FULL-STACK DEVELOPMENT",
    subtitle: "Web Applications, APIs, and Backend Systems",
    description:
      "I design and build full-stack web applications, REST APIs, and backend systems using modern frameworks. From database design to deployment, I deliver practical, scalable solutions.",
    tags: [
      "Python",
      "FastAPI",
      "Spring Boot",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "REST APIs",
    ],
  },
  {
    title: "AI & LLM AUTOMATION",
    subtitle: "Local AI Workflows, Prompting, and Integration",
    description:
      "I work with local large language models and AI automation tools to build intelligent workflows, content systems, and automation pipelines that solve real problems.",
    tags: [
      "Ollama",
      "Qwen 3.5",
      "LLMs",
      "AI Automation",
      "Prompt Engineering",
      "Workflow Design",
    ],
  },
] as const;

type ProjectCard = {
  title: string;
  category: string;
  tools: string;
};

export const projectCards: ProjectCard[] = [
  {
    title: "Scout AI / Scout_Content_OS",
    category: "Personal AI Platform",
    tools: "Python, FastAPI, Next.js, TypeScript, Ollama, Qwen 3.5, REST APIs",
  },
  {
    title: "CurvyGirlExchange / Plus Closet",
    category: "Client Project — Team of 4",
    tools: "Python, MySQL, Supabase, AI/ML, REST APIs, 3D Modeling",
  },
  {
    title: "Legion Remote",
    category: "Personal System Project",
    tools: "Python, Windows OS, REST APIs, Tailscale, Ngrok, Git",
  },
] as const;

export const education = [
  "Computer Programming — Algonquin College, Ottawa, ON | Graduated May 2026",
  "Diploma in Computer Engineering — Ganpat University, Gujarat, India | Graduated April 2023",
] as const;

export const publications = [] as const;

export const certifications = [] as const;
