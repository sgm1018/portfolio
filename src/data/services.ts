export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
  order: number;
}

export const services: Service[] = [
  {
    id: "fullstack",
    title: "Desarrollo Web Full Stack",
    description: "Aplicaciones web completas con arquitecturas modernas, APIs robustas y interfaces de usuario excepcionales.",
    features: [
      "Frontend Moderno",
      "APIs RESTful",
      "Bases de Datos",
      "UI/UX Design"
    ],
    icon: "devicon-react-original",
    color: "primary",
    order: 1
  },
  {
    id: "devsecops",
    title: "DevSecOps & Cloud",
    description: "Automatización de despliegues, infraestructura como código y implementación de prácticas de seguridad desde el desarrollo.",
    features: [
      "SDLC",
      "SAST",
      "DAST",
      "Docker",
      "Kubernetes",
      "HELM",
      "CI/CD Pipelines",
      "Containerización",
      "Security First"
    ],
    icon: "devicon-docker-plain",
    color: "primary",
    order: 2
  },
  {
    id: "consulting",
    title: "Consultoría Técnica",
    description: "Asesoramiento estratégico en arquitectura de software, selección de tecnologías y optimización de procesos de desarrollo.",
    features: [
      "Arquitectura de Software",
      "Code Reviews",
      "Tech Stack",
      "Best Practices"
    ],
    icon: "devicon-github-original",
    color: "primary",
    order: 3
  },
  {
    id: "mobile",
    title: "Aplicaciones Móviles",
    description: "Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android con rendimiento óptimo.",
    features: [
      "React Native",
      "Flutter",
      "Native iOS/Android",
      "Cross-platform"
    ],
    icon: "devicon-android-plain",
    color: "primary",
    order: 4
  }
] as const;
