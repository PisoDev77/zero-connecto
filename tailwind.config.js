
/** @type {import('tailwindcss').Config} */

// import defaultModule from 'module'
const { em } = require('./src/utils/unit');


module.exports = {
  darkMode: 'class',
  content: ["public/index.html"],
  theme: {
    screens:{
      sm: em(500),
      md: em(700),
      lg: em(900),
      xl: em(1100),
      '2xl': em(1300)
    },
    extend: {
      colors:{
        "ssh-green": {
          "100": "#d3e1d1",
          "200": "#a7c3a3",
          "300": "#7ca575",
          "400": "#508747",
          "500": "#246919",
          "600": "#1d5414",
          "700": "#163f0f",
          "800": "#0e2a0a",
          "900": "#071505"
         }
      }
    },
  },
  plugins: [],
}
