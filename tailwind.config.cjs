/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#2AAAE2",
          primary: "#2C63A7",
          dark: "#1F3B73",
          purple: "#7472B8",
        },
      },
      fontFamily: {
        // Fuentes principales
        heading: ["Rivera", "sans-serif"],
        body: ["Geometr212", "Inter", "sans-serif"],

        // Variantes de Geometr212 (consolidadas desde global.css)
        geometr: ["Geometr212", "Inter", "sans-serif"],
        "geometr-book": ["Geometr212-Book", "Inter", "sans-serif"],
        "geometr-heavy": ["Geometr212-BookHeavy", "Inter", "sans-serif"],
      },
      // Animaciones personalizadas
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
