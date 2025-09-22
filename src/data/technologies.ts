export interface Technology {
  name: string;
  icon: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado' | 'Experto';
  category: string;
  experience: number; // años de experiencia
  color?: string;
}

export interface TechnologyCategory {
  id: string;
  name: string;
  icon: string;
  technologies: Technology[];
}

export const technologies: TechnologyCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: "devicon-html5-plain",
    technologies: [
      {
        name: "JavaScript",
        icon: "devicon-javascript-plain",
        level: "Avanzado",
        category: "frontend",
        experience: 3,
        color: "#F7DF1E"
      },
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain",
        level: "Avanzado",
        category: "frontend",
        experience: 2,
        color: "#3178C6"
      },
      {
        name: "React",
        icon: "devicon-react-original",
        level: "Avanzado",
        category: "frontend",
        experience: 2,
        color: "#61DAFB"
      },
      {
        name: "Angular",
        icon: "devicon-angularjs-plain",
        level: "Avanzado",
        category: "frontend",
        experience: 2,
        color: "#DD0031"
      },
      {
        name: "Vue.js",
        icon: "devicon-vuejs-plain",
        level: "Intermedio",
        category: "frontend",
        experience: 1,
        color: "#4FC08D"
      },
      {
        name: "Astro",
        icon: "devicon-astro-plain",
        level: "Avanzado",
        category: "frontend",
        experience: 1,
        color: "#FF5D01"
      },
      {
        name: "Next.js",
        icon: "devicon-nextjs-plain",
        level: "Intermedio",
        category: "frontend",
        experience: 1,
        color: "#000000"
      },
      {
        name: "Tailwind CSS",
        icon: "devicon-tailwindcss-plain",
        level: "Avanzado",
        category: "frontend",
        experience: 2,
        color: "#06B6D4"
      }
    ]
  },
  {
    id: "backend",
    name: "Backend",
    icon: "devicon-nodejs-plain",
    technologies: [
      {
        name: "Python",
        icon: "devicon-python-plain",
        level: "Avanzado",
        category: "backend",
        experience: 3,
        color: "#3776AB"
      },
      {
        name: ".NET",
        icon: "devicon-dot-net-plain",
        level: "Avanzado",
        category: "backend",
        experience: 2,
        color: "#512BD4"
      },
      {
        name: "Java",
        icon: "devicon-java-plain",
        level: "Avanzado",
        category: "backend",
        experience: 3,
        color: "#ED8B00"
      },
      {
        name: "Node.js",
        icon: "devicon-nodejs-plain",
        level: "Avanzado",
        category: "backend",
        experience: 2,
        color: "#339933"
      },
      {
        name: "Spring",
        icon: "devicon-spring-plain",
        level: "Avanzado",
        category: "backend",
        experience: 2,
        color: "#6DB33F"
      },
      {
        name: "NestJS",
        icon: "devicon-nestjs-plain",
        level: "Avanzado",
        category: "backend",
        experience: 2,
        color: "#E0234E"
      },
      {
        name: "Flask",
        icon: "devicon-flask-original",
        level: "Intermedio",
        category: "backend",
        experience: 1,
        color: "#000000"
      },
      {
        name: "Express",
        icon: "devicon-express-original",
        level: "Avanzado",
        category: "backend",
        experience: 2,
        color: "#000000"
      }
    ]
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: "devicon-docker-plain",
    technologies: [
      {
        name: "Docker",
        icon: "devicon-docker-plain",
        level: "Avanzado",
        category: "devops",
        experience: 2,
        color: "#2496ED"
      },
      {
        name: "Kubernetes",
        icon: "devicon-kubernetes-plain",
        level: "Avanzado",
        category: "devops",
        experience: 1,
        color: "#326CE5"
      },
            {
        name: "GitLab",
        icon: "devicon-gitlab-plain",
        level: "Avanzado",
        category: "tools",
        experience: 2,
        color: "#FCA326"
      },
      {
        name: "Nginx",
        icon: "devicon-nginx-plain",
        level: "Intermedio",
        category: "tools",
        experience: 1,
        color: "#009639"
      },
      {
        name: "Linux",
        icon: "devicon-linux-plain",
        level: "Avanzado",
        category: "tools",
        experience: 3,
        color: "#FCC624"
      },
      {
        name: "MongoDB",
        icon: "devicon-mongodb-plain",
        level: "Avanzado",
        category: "devops",
        experience: 2,
        color: "#47A248"
      },
      {
        name: "PostgreSQL",
        icon: "devicon-postgresql-plain",
        level: "Avanzado",
        category: "devops",
        experience: 2,
        color: "#336791"
      },
      {
        name: "Redis",
        icon: "devicon-redis-plain",
        level: "Avanzado",
        category: "devops",
        experience: 2,
        color: "#DC382D"
      },
      {
        name: "AWS",
        icon: "devicon-amazonwebservices-plain",
        level: "Intermedio",
        category: "devops",
        experience: 1,
        color: "#FF9900"
      },
      {
        name: "Google Cloud",
        icon: "devicon-googlecloud-plain",
        level: "Intermedio",
        category: "devops",
        experience: 1,
        color: "#4285F4"
      },
      {
        name: "Git",
        icon: "devicon-git-plain",
        level: "Avanzado",
        category: "devops",
        experience: 4,
        color: "#F05032"
      }
    ]
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: "devicon-android-plain",
    technologies: [
      {
        name: "React Native",
        icon: "devicon-react-original",
        level: "Intermedio",
        category: "mobile",
        experience: 1,
        color: "#61DAFB"
      },
      {
        name: "Flutter",
        icon: "devicon-flutter-plain",
        level: "Intermedio",
        category: "mobile",
        experience: 1,
        color: "#02569B"
      },
      {
        name: "Android",
        icon: "devicon-android-plain",
        level: "Básico",
        category: "mobile",
        experience: 0,
        color: "#3DDC84"
      }
    ]
  },
  {
    id: "tools",
    name: "Herramientas",
    icon: "devicon-vscode-plain",
    technologies: [
      {
        name: "VS Code",
        icon: "devicon-vscode-plain",
        level: "Avanzado",
        category: "tools",
        experience: 4,
        color: "#007ACC"
      },

    ]
  }
] as const;

export const getAllTechnologies = (): Technology[] => {
  return technologies.flatMap(category => category.technologies);
};

export const getTechnologiesByCategory = (categoryId: string): Technology[] => {
  const category = technologies.find(cat => cat.id === categoryId);
  return category?.technologies || [];
};

export const getTechnologyByName = (name: string): Technology | undefined => {
  return getAllTechnologies().find(tech => tech.name === name);
};
