/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'krona': ['Krona One, sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('/Users/Omar/Desktop/react-projects/furniture/furniture/furniture-app/src/assets/herobg.png')"
        
      }
    },
  },
  plugins: [],
}