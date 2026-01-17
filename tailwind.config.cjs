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
        heading: ["Rivera", "sans-serif"],
        body: ["Geometr212", "Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};
