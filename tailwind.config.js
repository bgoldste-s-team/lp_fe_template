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
      
          
 "primary": siteData['color'],
          
 "secondary": "#e2489a",
          
 "accent": "#9d02d1",
          
 "neutral": "#2A1E38",
          
 "base-100": "#F0ECF3",
          
 "info": "#4A7FF2",
          
 "success": "#289F67",
          
 "warning": "#F8B53A",
          
 "error": "#F4322F",
           },
         },
       ],
     },
}
