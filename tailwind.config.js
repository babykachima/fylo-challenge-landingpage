/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "cyan-color": "hsl(176, 68%, 64%)",
        "blue-color": "hsl(198, 60%, 50%)",
        "light-red-color": "hsl(0, 100%, 63%)",
        "white-color": "hsl(0, 0%, 100%)",
      },
      backgroundColor: {
        "background-dark-blue-intro": "hsl(217, 28%, 15%)",
        "background-dark-blue-main": " hsl(218, 28%, 13%)",
        "background-dark-blue-footer": "hsl(216, 53%, 9%)",
        "background-dark-blue-testimonials": "hsl(219, 30%, 18%)",
      },
      backgroundImage: {
        mountain: "url('./public/images/bg-curvy-mobile.svg')",
      },
    },
  },
  plugins: [],
};
