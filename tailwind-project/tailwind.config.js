/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "latin"],
        roboto: ['"Roboto"', "sans-serif"],
        rubikbubbles: ['"rubik Bubbles"', "normal"],
      },
    },
  },
  plugins: [],
};
