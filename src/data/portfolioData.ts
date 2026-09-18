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

export const projectCategories = [
  {
    name: "Software, AI & Web Development",
    projects: [
      {
        title: "Scout AI / Scout_Content_OS",
        category: "Local-First AI Content Platform",
        tools: "Python, FastAPI, Next.js, TypeScript, Ollama (Qwen 3.5), REST APIs, Tailwind CSS",
        description: "Architected a local-first content automation platform connecting Next.js dashboards and FastAPI microservices with local LLM execution environments. Features automated execution pipelines, prompt logic, and output validation.",
      },
      {
        title: "CurvyGirlExchange / Plus Closet",
        category: "Algonquin College Capstone Client Project (Team of 4)",
        tools: "Python, MySQL, Supabase, AI/ML, REST APIs, 3D Avatar Modeling",
        description: "Built backend recommendation logic for personalized sizing predictions and integrated 3D avatar body-modeling features according to client specs.",
      },
      {
        title: "Legion Remote",
        category: "Systems & Remote Access Utility",
        tools: "Python, Windows OS, Tailscale, Ngrok, Localtunnel, REST APIs",
        description: "Developed a custom remote access utility for Windows environments. Configured local service endpoints, port connectivity, and secure tunneling endpoints for remote system interaction.",
      },
      {
        title: "FairShare",
        category: "Expense-Sharing Web Application",
        tools: "PHP, MySQL (PDO), JavaScript, HTML/CSS",
        description: "Developed a group expense-sharing platform featuring receipt photo uploads, group access code authentication, and dynamic expense splitting logic.",
      },
      {
        title: "Online Bookstore Project",
        category: "Database Systems Project",
        tools: "SQL Server, T-SQL, Database Design",
        description: "Designed and implemented a relational database schema for an online bookstore featuring custom query pipelines for search, reviews, and user recommendations.",
      },
    ],
  },
  {
    name: "IoT, Robotics & Embedded Systems",
    projects: [
      {
        title: "Smart Safety Helmet Prototype",
        category: "IoT Safety Device",
        tools: "Arduino Uno, MQ-2 Gas/Smoke Sensor, Buzzer, LEDs, Embedded C/C++",
        description: "Built a mine worker safety helmet prototype that detects toxic gas/smoke levels. Triggers an audible alarm and toggles visual indicator LEDs from green to flashing red upon threshold breach.",
      },
      {
        title: "\"Honk More, Wait More\" Smart Traffic Light",
        category: "Smart Traffic Control System",
        tools: "Arduino, Sound/Noise Sensors, Traffic Control Logic",
        description: "Prototype traffic light system designed to discourage unnecessary honking. Uses sound sensors to measure ambient noise; exceeding noise thresholds automatically penalizes drivers by extending red light timers by 60 seconds.",
      },
      {
        title: "Otto-Style Bipedal Walking & Dancing Robot",
        category: "Autonomous Robotics",
        tools: "Arduino Uno, Servo Motors, Ultrasonic Sensor, PLA 3D Printing, C++",
        description: "3D-printed and programmed an autonomous bipedal robot capable of walking, dancing, and moonwalking moves while using ultrasonic sensors for real-time obstacle avoidance.",
      },
      {
        title: "RFID-Based Attendance System",
        category: "Hardware Attendance Logging",
        tools: "Arduino Mini, RFID Reader Module, LCD Display, RFID Tags",
        description: "Hardware attendance logging device that reads RFID tag IDs, verifies credentials, and displays real-time attendance verification status on an LCD screen.",
      },
      {
        title: "Assistive Blind Stick",
        category: "Assistive Technology Device",
        tools: "Arduino Nano, Ultrasonic Sensor, Buzzer",
        description: "Assistive hardware device designed to detect obstacles up to 3 meters away and alert visually impaired users via real-time variable audio cues.",
      },
      {
        title: "Wireless ECG Monitoring System",
        category: "Remote Health Telemetry",
        tools: "Wireless Communication Modules, Microcontroller, Sensor Integration",
        description: "Developed to capture patient ECG data remotely and transmit health metrics across the internet to healthcare providers with 80% telemetry accuracy.",
      },
      {
        title: "Custom Functional 3D Printer Build",
        category: "Hardware Fabrication Project",
        tools: "RAMPS 1.4, Arduino Mega, Stepper Motors, Thermal Sensors",
        description: "Built a functional 3D printer hardware rig from scratch using Arduino Mega and RAMPS 1.4 controller boards, reaching 70% operational accuracy in physical part generation.",
      },
    ],
  },
] as const;

export const education = [
  "Computer Programming — Algonquin College, Ottawa, ON | Graduated May 2026",
  "Diploma in Computer Engineering — Ganpat University, Gujarat, India | Graduated April 2023",
] as const;

export const publications = [] as const;

export const certifications = [] as const;
