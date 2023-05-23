/** @type {import('tailwindcss').Config} */
import siteData from "./src/data/site_data.json";

module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [ siteData['theme'], "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
  // daisyui: {
  //   themes: [
  //
  //     {
  //       mytheme: {
  //
  //         "primary": "#a8bcea",
  //
  //         "secondary": "#c067ea",
  //
  //         "accent": "#5329a0",
  //
  //         "neutral": "#242D33",
  //
  //         "base-100": "#2C3149",
  //
  //         "info": "#265AE8",
  //
  //         "success": "#19E173",
  //
  //         "warning": "#C48508",
  //
  //         "error": "#F24640",
  //
  //         // "primary": siteData['color'],
  //       },
  //     },
  //   ],
  // },
};
