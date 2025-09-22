export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  achievements: string[];
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  current: boolean;
  order: number;
}

export const experience: Experience[] = [
  {
    id: "tch-labs",
    company: "TCH Labs",
    position: "Full Stack DevSecOps Developer",
    period: "2024 - Presente",
    startDate: "2024-01-01",
    endDate: undefined,
    description: "Diseño y desarrollo de APIs avanzadas con seguridad robusta, interfaces modernas con Angular y Astro, despliegue en Kubernetes, optimización con Redis y Memcached, y creación de aplicaciones complejas. Implementación de pipelines CI/CD con GitLab.",
    technologies: [
      "Angular",
      "Astro",
      "Tailwind CSS",
      ".NET",
      "Nest.js",
      "Kubernetes",
      "Docker",
      "Redis",
      "GitLab CI/CD",
      "ROS2",
      "LIDAR"
    ],
    achievements: [
      "Implementación de pipelines CI/CD con GitLab",
      "Optimización de aplicaciones con Redis y Memcached",
      "Desarrollo de APIs REST, SOAP, MQTT",
      "Experiencia en visión artificial y robótica",
      "Control de almacenes automáticos",
      "Trabajo con modelos de lenguaje (LLMs, RAG, Fine-tuning)",
      "Despliegue en Kubernetes con Ansible y Terraform"
    ],
    type: 'full-time',
    current: true,
    order: 1
  },
  {
    id: "csa",
    company: "CSA - Centro Regional de Servicios Avanzados",
    position: "DevSecOps",
    period: "2023 - 2024",
    startDate: "2023-01-01",
    endDate: "2024-01-01",
    description: "Especializado en despliegues seguros con Docker con un perfil DevSecOps en el departamento de ciberseguridad. Participación en desarrollo y despliegue de aplicaciones con importante enfoque en la seguridad.",
    technologies: [
      "Docker",
      "Linux",
      "Security Tools",
      "CI/CD",
      "Python",
      "Bash"
    ],
    achievements: [
      "Implementación de prácticas DevSecOps",
      "Despliegues seguros con Docker",
      "Desarrollo con enfoque en seguridad",
      "Auditorías de seguridad en aplicaciones",
      "Automatización de procesos de seguridad"
    ],
    type: 'full-time',
    current: false,
    order: 2
  }
] as const;
