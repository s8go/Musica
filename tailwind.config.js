/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('/src/images/Vector.png')",
       "desktop-background": "url('/src/images/desktop-bg.svg')"
      },
     backgroundColor:{
        "play": "rgb(0, 0, 0, 0.5)"
      },
      
    },
  },
  plugins: [
  
  ],
}
