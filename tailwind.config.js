/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend:{      
      backgroundImage: {
        'header-img': "url('../src/assets/header_img.png')",
      },
      fontFamily:{
        outfit:['Outfit'],
        playfair:['Playfair'] 
      },
      height:{
        100:"40rem"        
      }, 
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      inset:{
        '1/10':'10%',
      },
      keyframes:{
        "fade-in": {
          "0%": {
              opacity: 0
          },
          "100%": {
              opacity: 1
          },
        },
      },
      animation:{
        fadein: 'fade-in 3s ease-in-out ',
      }          
    },
  },

  plugins: [],
}



