# 📋 Planificación Portfolio Moderno - Sergio González Martínez

## 🎨 Concepto General

Portfolio moderno con **carga progresiva por scroll** y **animaciones llamativas** que se activan según el usuario navega por las secciones. Diseño **mobile-first** y **responsive** que funciona perfectamente en dispositivos móviles y escritorio.

## 🎯 Arquitectura de Componentes

### 📁 Estructura de Archivos Propuesta

```
src/
├── components/
│   ├── sections/
│   │   ├── HeroSection.astro           # Sección principal/banner
│   │   ├── AboutSection.astro          # Información personal y foto
│   │   ├── ServicesSection.astro       # Servicios ofrecidos
│   │   ├── ProjectsSection.astro       # Portfolio de proyectos
│   │   ├── ExperienceSection.astro     # Experiencia profesional
│   │   ├── TechStackSection.astro      # Tecnologías y skills
│   │   ├── EducationSection.astro      # Formación académica
│   │   └── ContactSection.astro        # Formulario de contacto
│   ├── ui/
│   │   ├── ProjectCard.astro           # Tarjeta individual de proyecto
│   │   ├── ServiceCard.astro           # Tarjeta de servicio
│   │   ├── ExperienceCard.astro        # Tarjeta de experiencia
│   │   ├── TechIcon.astro              # Icono de tecnología
│   │   ├── SectionTitle.astro          # Título de sección animado
│   │   └── AnimatedButton.astro        # Botón con animaciones
│   ├── animations/
│   │   └── ScrollReveal.astro          # Componente para animaciones scroll
│   └── Navbar.astro                    # Navegación fija
├── data/
│   ├── projects.ts                     # Array de proyectos
│   ├── services.ts                     # Array de servicios
│   ├── experience.ts                   # Array de experiencia
│   ├── technologies.ts                 # Array de tecnologías
│   └── personalInfo.ts                 # Información personal
├── styles/
│   └── animations.css                  # Animaciones CSS customizadas
└── utils/
    └── scrollObserver.ts              # Observer para animaciones scroll
```

## 🎨 Paleta de Colores (Tailwind Config)

Basada en la configuración actual:

### Colores Principales
- **Background**: `#1A1B1E` (dark-900)
- **Foreground**: `#FFFFFF` 
- **Primary**: `#FF1E56` (rojo vibrante)
- **Primary variants**: 50-900 shades

### Colores Dark Scale
- **Dark 50**: `#F8F9FA` 
- **Dark 100-400**: Grises claros para texto secundario
- **Dark 500-600**: Grises medios para borders
- **Dark 700-900**: Grises oscuros para backgrounds

## 📱 Diseño Responsive

### Breakpoints
- **Mobile**: `< 768px` - Stack vertical, padding reducido
- **Tablet**: `768px - 1024px` - Grid 2 columnas
- **Desktop**: `> 1024px` - Grid 3-4 columnas, animaciones completas

### Consideraciones Mobile
- Touch-friendly buttons (min 44px)
- Swipe gestures para proyectos
- Menú hamburguesa collapsible
- Imágenes optimizadas y lazy loading

## 🚀 Animaciones y Efectos

### 1. Animaciones de Entrada (Scroll Reveal)
- **Fade In Up**: Elementos aparecen desde abajo con opacity
- **Slide In Left/Right**: Alternancia para crear ritmo visual
- **Scale In**: Para elementos destacados como CTAs
- **Stagger**: Elementos de listas aparecen secuencialmente

### 2. Micro-animaciones
- **Hover Effects**: Scale, glow, color transitions
- **Loading States**: Skeleton screens y spinners
- **Button Ripples**: Efecto material design
- **Floating Elements**: Movimiento sutil de iconos

### 3. Efectos Avanzados
- **Parallax Scrolling**: Elementos de fondo con diferentes velocidades
- **Morphing Shapes**: SVGs que cambian de forma
- **Particle Systems**: Partículas flotantes en hero
- **Glitch Effects**: Para elementos tech

## 📊 Arrays de Datos

### 1. Información Personal (`personalInfo.ts`)
```typescript
export const personalInfo = {
  name: "Sergio González Martínez",
  email: "1018sgm10182@gmail.com",
  location: "Burgos, España",
  availability: "Lunes - Viernes: 9:00 - 18:00",
  github: "https://github.com/sgm1018",
  linkedin: "https://linkedin.com/in/sergiogm1999",
  portfolio: "https://github.com/sgm1018/portfolio",
  avatar: "/avatar-dark.png",
  bio: "Full Stack DevSecOps Developer especializado en arquitecturas modernas..."
}
```

### 2. Servicios (`services.ts`)
```typescript
export const services = [
  {
    id: "01",
    title: "Desarrollo Web Full Stack",
    description: "Aplicaciones web completas con arquitecturas modernas...",
    features: ["Frontend Moderno", "APIs RESTful", "Bases de Datos", "UI/UX Design"],
    icon: "devicon-react-original",
    color: "primary"
  },
  // ... más servicios
]
```

### 3. Proyectos (`projects.ts`)
```typescript
export const projects = [
  {
    id: "cloudmesa",
    title: "CloudMesa",
    description: "Cloud E2E, Zero Trust, y Zero knowledge...",
    image: "/LLMICON.png",
    technologies: ["Nest.js", "React", "MongoDB", "Redis", "JWT"],
    demo: "https://github.com/sgm1018/CloudMesa",
    github: "https://github.com/sgm1018/CloudMesa",
    category: "Full stack/Ciberseguridad",
    featured: true
  },
  // ... más proyectos
]
```

### 4. Experiencia (`experience.ts`)
```typescript
export const experience = [
  {
    company: "TCH Labs",
    position: "Full Stack DevSecOps Developer",
    period: "2024 - Presente",
    description: "Diseño y desarrollo de APIs avanzadas...",
    technologies: ["Angular", "Astro", "Kubernetes", "Docker"],
    achievements: ["Implementación CI/CD", "Optimización Redis", "Visión artificial"]
  },
  // ... más experiencia
]
```

### 5. Tecnologías (`technologies.ts`)
```typescript
export const technologies = {
  frontend: [
    { name: "JavaScript", icon: "devicon-javascript-plain", level: "Avanzado" },
    { name: "TypeScript", icon: "devicon-typescript-plain", level: "Avanzado" },
    { name: "React", icon: "devicon-react-original", level: "Avanzado" },
    // ... más tecnologías
  ],
  backend: [
    { name: "Python", icon: "devicon-python-plain", level: "Avanzado" },
    { name: ".NET", icon: "devicon-dot-net-plain", level: "Avanzado" },
    // ... más tecnologías
  ],
  devops: [
    { name: "Docker", icon: "devicon-docker-plain", level: "Avanzado" },
    { name: "Kubernetes", icon: "devicon-kubernetes-plain", level: "Intermedio" },
    // ... más tecnologías
  ]
}
```

## 📄 Secciones del Portfolio

### 1. 🦸 Hero Section
- **Contenido**: Nombre, título, CTA principal
- **Animación**: Typing effect para el título, partículas de fondo
- **Responsive**: Hero compacto en mobile
- **Elementos**: Avatar, background particles, CTA buttons

### 2. 👨‍💻 About Section
- **Contenido**: Bio personal, foto, stats destacados
- **Animación**: Reveal progresivo de stats con contadores
- **Layout**: Imagen + texto en desktop, stack en mobile
- **Elementos**: Avatar con efecto hover, achievement counters

### 3. 💼 Services Section
- **Contenido**: 4 servicios principales con características
- **Animación**: Cards con hover effects y stagger reveal
- **Layout**: Grid 2x2 en desktop, stack en mobile
- **Elementos**: Iconos animados, feature lists

### 4. 🚀 Projects Section
- **Contenido**: Portfolio de proyectos con filtros
- **Animación**: Masonry layout con lazy loading
- **Interacción**: Modal detail view, filtros categoría
- **Elementos**: Cards con preview, tech tags, links

### 5. 💡 Experience Section
- **Contenido**: Timeline de experiencia profesional
- **Animación**: Timeline que se va dibujando al scroll
- **Layout**: Timeline vertical con alternancia
- **Elementos**: Company logos, achievement lists

### 6. ⚡ Tech Stack Section
- **Contenido**: Tecnologías organizadas por categoría
- **Animación**: Iconos con floating effect y skill bars
- **Layout**: Categorías en tabs o acordeón
- **Elementos**: Tech icons con tooltips, progress bars

### 7. 🎓 Education Section
- **Contenido**: Formación académica y certificaciones
- **Animación**: Reveal con emphasis en títulos
- **Layout**: Card-based con detalles expandibles
- **Elementos**: Institution logos, achievement badges

### 8. 📬 Contact Section
- **Contenido**: Formulario + info de contacto
- **Animación**: Form validation en tiempo real
- **Funcionalidad**: FormSubmit integration
- **Elementos**: Social links, availability info

## 🎭 Interacciones y UX

### Navegación
- **Navbar**: Fijo con scroll spy para sección activa
- **Mobile**: Hamburger menu con animación
- **Scroll**: Smooth scroll entre secciones
- **Progress**: Barra de progreso de lectura

### Feedback Visual
- **Loading States**: Spinners y skeleton screens
- **Hover States**: Subtle animations en interactive elements
- **Focus States**: Keyboard navigation support
- **Error States**: Validation feedback en forms

### Performance
- **Lazy Loading**: Imágenes y componentes no críticos
- **Code Splitting**: Componentes pesados bajo demanda
- **Preloading**: Critical resources y next section
- **Optimization**: WebP images, minified assets

## 🛠️ Tecnologías de Implementación

### Core Stack
- **Astro**: Framework principal para SSG
- **TypeScript**: Type safety en todo el código
- **Tailwind CSS**: Styling con custom config
- **Devicon**: Icons para tecnologías

### Animaciones
- **CSS Animations**: Transiciones y keyframes
- **Intersection Observer**: Scroll-triggered animations
- **GSAP** (opcional): Animaciones complejas
- **Framer Motion** (opcional): React components

### Utils
- **FormSubmit**: Formulario de contacto
- **Fontsource**: Web fonts optimizadas
- **Image optimization**: Astro built-in

## 📈 Performance Goals

- **Core Web Vitals**: Excelente en todos los métricas
- **Lighthouse Score**: 95+ en todas las categorías
- **First Load**: < 2s en conexión 3G
- **Bundle Size**: < 500KB inicial

## 🚀 Fases de Desarrollo

### Fase 1: Estructura Base
1. Configurar arrays de datos
2. Crear componentes básicos de sección
3. Implementar layout responsive
4. Configurar navegación

### Fase 2: Styling y Animaciones
1. Aplicar design system consistente
2. Implementar animaciones scroll
3. Añadir micro-interacciones
4. Optimizar para mobile

### Fase 3: Funcionalidad Avanzada
1. Formulario de contacto
2. Filtros de proyectos
3. Modal de detalles
4. Optimizaciones de performance

### Fase 4: Polish y Testing
1. Testing en múltiples dispositivos
2. Optimización de imágenes
3. SEO y meta tags
4. Analytics y tracking

## 🎯 Resultado Esperado

Un portfolio moderno y profesional que:
- ✅ Carga progresivamente con animaciones fluidas
- ✅ Funciona perfectamente en mobile y desktop
- ✅ Muestra el contenido de forma atractiva y organizada
- ✅ Utiliza la paleta de colores corporativa
- ✅ Es completamente configurable mediante arrays
- ✅ Tiene excelente performance y UX
