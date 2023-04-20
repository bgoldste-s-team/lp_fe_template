/** @type {import('tailwindcss').Config} */
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
           
            "primary": "#a6ea72",
                     
            "secondary": "#09016b",
                     
            "accent": "#cc6137",
                     
            "neutral": "#292B38",
                     
            "base-100": "#E8EEF2",
                     
            "info": "#3B84C9",
                     
            "success": "#198F6E",
                     
            "warning": "#F6BC6A",
                     
            "error": "#E44E62",
           },
         },
       ],
     },
}
