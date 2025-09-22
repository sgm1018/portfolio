export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements: string[];
  gpa?: string;
  logo?: string;
  status: 'completed' | 'in-progress';
  order: number;
}

export const education: Education[] = [
  {
    id: "ubu",
    institution: "Universidad de Burgos (UBU)",
    degree: "Ingeniería Informática",
    field: "Informática",
    period: "2018 - 2022",
    startDate: "2018-09-01",
    endDate: "2022-06-30",
    location: "Burgos, España",
    description: "Grado en Ingeniería Informática con 4 años de formación especializada en desarrollo de software, algoritmos, bases de datos y sistemas distribuidos.",
    achievements: [
      "Algoritmos y Estructuras de Datos",
      "Ingeniería de Software",
      "Bases de Datos",
      "Redes y Sistemas Distribuidos",
      "Programación Orientada a Objetos",
      "Metodologías Ágiles"
    ],
    logo: "/ubu.png",
    status: 'completed',
    order: 1
  }
] as const;
