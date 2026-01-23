# 🏀 ArenaLogix - Landing Page

Landing page moderna para **ArenaLogix**, desarrollada con Astro y Tailwind CSS, optimizada para máximo rendimiento y SEO.

## 📋 Descripción

ArenaLogix es una landing page profesional construida con tecnologías modernas de desarrollo web. El proyecto utiliza la arquitectura de islas de Astro para ofrecer una experiencia ultrarrápida (Zero JS por defecto) y componentes reutilizables con Tailwind CSS.

## 🚀 Estructura del Proyecto

```text
/
├── public/
│   ├── assets/            # Imágenes y recursos estáticos
│   └── fonts/             # Fuentes personalizadas optimizadas
├── src/
│   ├── components/
│   │   ├── layout/        # Componentes de navegación (Navbar)
│   │   ├── sections/      # Secciones de la landing page
│   │   └── ui/            # 🧩 Librería de componentes reutilizables (Button, Card, SectionTitle)
│   ├── layouts/           # Layout principal con SEO integrado
│   ├── pages/             # Páginas del sitio
│   └── styles/            # Estilos globales y fuentes
├── astro.config.mjs       # Configuración optimizada (Compresión, Tailwind)
├── tailwind.config.cjs    # Sistema de diseño (Fuentes, Colores, Animaciones)
└── package.json
```

## 🛠️ Tecnologías Utilizadas

- **[Astro 5](https://astro.build/)** - Framework de rendimiento (Static Site Generation).
- **[Tailwind CSS](https://tailwindcss.com/)** - Sistema de diseño utility-first.
- **[Astro Assets](https://docs.astro.build/en/guides/images/)** - Optimización automática de imágenes (WebP/AVIF).
- **TypeScript** - Tipado estático para componentes robustos.

## ✨ Características Técnicas Clave

- **🟢 SEO Optimizado**: Meta tags completos, Open Graph, Twitter Cards y Sitemap automático.
- **⚡ Rendimiento Extremo**: Lazy loading en imágenes below-the-fold, pre-carga de fuentes críticas y compresión HTML.
- **🧩 Arquitectura Modular**: Componentes UI reutilizables (`src/components/ui`) para mantener consistencia y escalabilidad.
- **🎨 Diseño Consolidado**: Sistema de fuentes y colores centralizado en Tailwind, con tipografías custom (Rivera, Geometr212).

## 📦 Secciones de la Landing Page

| Sección | Descripción |
| :------ | :---------- |
| **Hero** | Carga prioritaria (`fetchpriority="high"`) para LCP instantáneo |
| **Services** | Grid responsivo con lazy loading |
| **Contact** | Formulario preparado para integración |
| **Footer** | Optimización de assets y enlaces de navegación |
| **UI Components** | Botones, Tarjetas y Títulos estandarizados |

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto en una terminal:

| Comando                   | Acción                                                |
| :------------------------ | :---------------------------------------------------- |
| `npm install`             | Instala las dependencias                              |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Genera el sitio de producción estático en `./dist/`  |
| `npm run preview`         | Previsualiza la build localmente                     |

## 🚀 Inicio Rápido

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd arenalogix
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador en:** [http://localhost:4321](http://localhost:4321)

---

Desarrollado con ❤️ para **ArenaLogix**
