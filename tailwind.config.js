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
        'hero-bg': "url('/Users/Omar/Desktop/react-projects/furniture/furniture/furniture-app/src/assets/herobg.png')",
        'footer-bg': "url('/Users/Omar/Desktop/react-projects/furniture/furniture/furniture-app/src/assets/footer section-1.png')",
        'about-banner-bg': "url('/Users/Omar/Desktop/react-projects/furniture/furniture/furniture-app/src/assets/about banner.png')",
        'banner-bg': "url('/src/assets/banner.png')"
      },
      
    },
  },
  plugins: [],
}