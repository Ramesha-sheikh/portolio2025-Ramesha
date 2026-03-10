// tailwind.config.js
// import typography from "@tailwindcss/typography";
// import lineClamp from "@tailwindcss/line-clamp";
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

    theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ['"Jost"', "sans-serif"],
    },
    extend: {
      colors: {
        bglight: "#F9FAFB",
        marrslight: "#10b981", // Emerald (emerald-500)
        marrsgreen: "#059669", // Emerald (emerald-600)
        marrsdark: "#047857", // Dark Emerald (emerald-700)
        cardlight: "#EFF3F3",

        // bgdark: "#2D2D2D",
        bgdark: "#0a3d3d", // Dark Teal
        carrilight: "#34d399", // Emerald (emerald-400)
        carrigreen: "#10b981", // Emerald (emerald-500)
        carridark: "#047857", // Dark Emerald (emerald-700)
        // carddark: "#383838",
        carddark: "#0d4a4a", // Teal Dark
        textlight: "#F9FAFB",
      },
    },
  },
 plugins: [],
  
}

