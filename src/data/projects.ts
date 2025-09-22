export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo?: string;
  github: string;
  category: string;
  featured: boolean;
  order: number;
  status: 'completed' | 'in-progress' | 'archived';
  year: number;
}

export const projects: Project[] = [
  {
    id: "cloudmesa",
    title: "CloudMesa",
    description: "Cloud E2E, Zero Trust, y Zero knowledge, enfocado en la seguridad, almacenamiento de archivos y contraseñas de manera segura.",
    image: "/LLMICON.png",
    technologies: ["Nest.js", "React", "MongoDB", "Redis", "JWT", "Cifrados asimétricos y simétricos"],
    demo: "https://github.com/sgm1018/CloudMesa",
    github: "https://github.com/sgm1018/CloudMesa",
    category: "Full stack/Ciberseguridad",
    featured: true,
    order: 1,
    status: 'completed',
    year: 2024
  },
  {
    id: "gitllmtrainer",
    title: "GitLLMTrainer",
    description: "Herramienta para scrapear repositorios de GitHub y generar conjuntos de datos para entrenar LLMs.",
    image: "/gitllmtrainer.png",
    technologies: ["Python"],
    demo: "https://github.com/sgm1018/GitLLMTrainer",
    github: "https://github.com/sgm1018/GitLLMTrainer",
    category: "AI/ML",
    featured: true,
    order: 2,
    status: 'completed',
    year: 2024
  },
  {
    id: "web-app-builder",
    title: "Web App Builder",
    description: "Generador de aplicaciones web completas con base de datos, API, UI moderna, autentificación con token JWT, chat, gestión de roles y despliegue.",
    image: "/builder.png",
    technologies: [".NET", "Angular", "Docker", "WebSockets", "JWT", "MongoDB", "Tailwind CSS"],
    demo: "https://github.com/tfgsergiogonzalezmartinez/stack_generador",
    github: "https://github.com/tfgsergiogonzalezmartinez/stack_generador",
    category: "Full Stack",
    featured: true,
    order: 3,
    status: 'completed',
    year: 2023
  },
  {
    id: "star-repo-graph",
    title: "Star Repo Graph",
    description: "Aplicación para capturar stars de repositorios de GitHub y generar gráficos elegantes.",
    image: "/stars.png",
    technologies: ["Astro", "Redis", "Tailwind CSS"],
    demo: "https://github.com/sgm1018/star-repo-graph",
    github: "https://github.com/sgm1018/star-repo-graph",
    category: "Data Viz",
    featured: false,
    order: 4,
    status: 'completed',
    year: 2024
  },
  {
    id: "teachercloud",
    title: "TeacherCloud",
    description: "Plataforma de gestión de cursos en línea para profesores y estudiantes.",
    image: "/teachercloud.png",
    technologies: ["Spring Boot", "Angular", "MySQL", "Docker", "Tailwind CSS"],
    demo: "https://github.com/sgm1018/TeacherCloud/tree/desarrollo",
    github: "https://github.com/sgm1018/TeacherCloud/tree/desarrollo",
    category: "Education",
    featured: false,
    order: 5,
    status: 'completed',
    year: 2023
  }
] as const;

export const projectCategories = [
  "Todos",
  "Full Stack",
  "AI/ML",
  "Ciberseguridad",
  "Data Viz",
  "Education"
] as const;
