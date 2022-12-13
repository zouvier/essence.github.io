/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        "primary1":"hsl(158, 36%, 37%)",
        "primary2":"hsl(30, 38%, 92%)",
        "body-darkblue":"hsl(212, 21%, 14%)",
        "body-gray":"#6C7289",
        "body-white":"hsl(0, 0%, 100%)",


    },
    fontFamily:{
      faunces: ['Fraunces', 'serif'],
      montserrat:['Montserrat', 'sans-serif']
    },
    screens: {
      'custom-z': {'max': '599px'},
      'custom-y': {'min':'600px'},
      ...defaultTheme.screens,
      
    },
    },
  },
  plugins: [],
}
