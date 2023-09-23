/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ["Poppins", "sans-serif"]
      },
      colors: {
        "slateblue" : "#4328cd",
        "mediumvioletred": "#a02986",
        "purple": "#953574",
        "black": "#0b1622",
        "gray": "#0d2429",
        "darkpurple": "#17122f",
        "darkslategray": "#283442",
        "white": "#fff"
      }
      
    },
  },
  plugins: [],
}
