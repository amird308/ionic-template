/** @type {import('tailwindcss').Config} */
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
      primary: "var(--ion-color-primary)",
    }
  },
  plugins: [
  ],
}