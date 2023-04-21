/** @type {import('tailwindcss').Config} */
import siteData from "./src/data/site_data.json";
console.log("HI")
console.log(siteData['color'])
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
   plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
       themes: [
         {
           mytheme: {
      
          
 // "primary": siteData['color'],

               "primary": "#1aad1c",

               "secondary": "#b5e554",

               "accent": "#91b9ea",

               "neutral": "#23242F",

               "base-100": "#F6EEF7",

               "info": "#A7C3EC",

               "success": "#16C06E",

               "warning": "#F6CB4C",

               "error": "#F13B72",
           },
         },
       ],
     },
}
