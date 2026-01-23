# 🏀 ArenaLogix - Landing Page

Landing page moderna para **ArenaLogix**, desarrollada con Astro y Tailwind CSS.

## 📋 Descripción

ArenaLogix es una landing page profesional construida con tecnologías modernas de desarrollo web. El proyecto utiliza componentes Astro para crear una experiencia de usuario fluida y responsiva.

## 🚀 Estructura del Proyecto

```text
/
├── public/
│   ├── assets/            # Imágenes y recursos estáticos
│   └── fonts/             # Fuentes personalizadas
├── src/
│   ├── components/
│   │   ├── layout/        # Componentes de navegación (Navbar)
│   │   └── sections/      # Secciones de la landing page
│   │       ├── Hero.astro
│   │       ├── AboutFloatingCard.astro
│   │       ├── Services.astro
│   │       ├── ValueProposition.astro
│   │       ├── Methodology.astro
│   │       ├── Contact.astro
│   │       ├── OurClients.astro
│   │       ├── OurCommunity.astro
│   │       └── Footer.astro
│   ├── layouts/           # Layout principal
│   ├── pages/             # Páginas del sitio
│   └── styles/            # Estilos globales
├── astro.config.mjs       # Configuración de Astro
├── tailwind.config.cjs    # Configuración de Tailwind CSS
├── postcss.config.cjs     # Configuración de PostCSS
└── package.json
```

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework de desarrollo web
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS de utilidades
- **PostCSS** - Procesador de CSS
- **TypeScript** - Tipado estático

## 📦 Secciones de la Landing Page

| Sección | Descripción |
| :------ | :---------- |
| **Hero** | Sección principal con imagen de fondo y presentación |
| **AboutFloatingCard** | Tarjeta flotante con información sobre la empresa |
| **Services** | Presentación de los servicios ofrecidos |
| **ValueProposition** | Propuesta de valor y beneficios |
| **Methodology** | Metodología de trabajo |
| **Contact** | Formulario y tarjetas de contacto |
| **OurClients** | Testimonios y logos de clientes |
| **OurCommunity** | Comunidad y redes sociales |
| **Footer** | Pie de página con enlaces e información |

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto en una terminal:

| Comando                   | Acción                                                |
| :------------------------ | :---------------------------------------------------- |
| `npm install`             | Instala las dependencias                              |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Genera el sitio de producción en `./dist/`           |
| `npm run preview`         | Previsualiza la build localmente antes de desplegar  |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtén ayuda sobre el CLI de Astro                    |

## � Inicio Rápido

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

## 📖 Más Información

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)

---

Desarrollado con ❤️ para **ArenaLogix**
