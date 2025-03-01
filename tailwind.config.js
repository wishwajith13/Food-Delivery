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
        100:"33rem"        
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
        fadein3: 'fade-in 3s ease-in-out ',
        fadein1: 'fade-in 1s ease-in-out ',
        fadein: 'fade-in 0.5s ease-in-out ',
      },
      spacing:{
        '3/5':'60%',
      }, 
      borderRadius:{
        '1/2':'50%',
      },
      boxShadow: {
        '3xl': '0px 0px 10px rgba(0, 0, 0, 0.3)',
      }, 
      gridTemplateColumns: {
        'sp': 'repeat(auto-fill, minmax(240px, 1fr))',
      }, 
      screens:{
        'vsm':'320px',
      },
      zIndex: {
        '1': '1',
      },
      colors: {
        'gr': '#00000090',
      },       
    },
  },

  plugins: [
    function({addUtilities}){
      const newUtilities ={
        ".no-scrollbar::-webkit-scrollbar":{
          display:"none",
        },
        ".no-scrollbar":{
          "-ms-overflow-style":"none",
          "scrollbar-width":"none",
        },
      }
      addUtilities(newUtilities)
    }
  ],
}



