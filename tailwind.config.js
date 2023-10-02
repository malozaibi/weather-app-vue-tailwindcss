/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "w-primary": "#00668A",
        "w-secondary": "#004E71",
      },
      fontFamily: {
        Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      container: {
        padding: "2rem",
        center: true,
      },
    },
  },
  plugins: [],
};
