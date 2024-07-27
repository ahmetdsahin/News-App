/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    colors: {
      'nav-red': '#e20404',
      'white':'#0c0f12',
      'whiteTwo':'#fff',
      'grey':'#181e25',
      'black':'#000',
      'midnight': '#121063',
      'metal': '#f8f8f8',
    },
  },
  plugins: [],
}

