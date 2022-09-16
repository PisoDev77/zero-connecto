/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/index.html"],
  theme: {
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
