/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Tangerine: ["tangerine"],
      Parisienne: ["Parisienne"],
      Lobster: ["Lobster"],
      Inter: ["Inter"],
      Merriweather: ["Merriweather"],
    },
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
      backgroundImage: {
        hero: "url('../public/src/assets/img/background.jpg')",
      },
    },
  },
  plugins: [],
};
