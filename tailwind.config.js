/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl': 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        'customInner':'rgba(0, 0, 0, 0.2) 0px 2px 4px 0px inset;'
      },
      colors:{
        "primary":"#A80930 "
      },
      backgroundImage:{
        'background' : "url('assets/background.jpg')",
        'contactBackground':"url()",
      } 
    },
    screens: {
      xxs: '320px',
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
