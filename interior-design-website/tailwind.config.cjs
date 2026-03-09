/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/banner.png')",
        main: "url('/Background.jpg')",
        about: "url('/aboutpage-bg.png')",
        services: "url('/servicespage-bg.jpg')",
        contact: "url('/contactpage-bg.jpg')",
      },
      fontFamily: {
        dm: ["DM Serif Display", "serif"],
        jost: ["Jost", "sans-serif"], // Ensure fonts with spaces have " " surrounding it.
      },
      colors: {
        // Configure your color palette here
        primary: {
          100: "#D4B5A0",
          200: "#3D3D3D",
          300: "#F5EFE8",
          400: "#E8DCC8",
        },
        text: {
          blue: "#2B2B2B",
          gray: "#6D6D6D",
          "gray-100": "#7B7B7B",
          "gray-200": "#666666",
          "gray-300": "#F0E8E0",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".startCenter": {
          display: "flex",
          "align-items": "center",
        },
        ".btwn": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
      });
    }),
  ],
};
