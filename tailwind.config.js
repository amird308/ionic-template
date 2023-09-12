/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  variants: {
  },
  theme: {
    colors: {
      ...colors,
      primary: "var(--ion-color-primary)",
    }
  },
  plugins: [
  ],
}