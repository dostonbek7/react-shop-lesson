/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    fontFamily:{
      'sans':['Inter', 'sans-serif']
    },
    extend: {
      screens:{
        'sm':'420px',
        'md':'650px',
        'lg':'900px'
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
