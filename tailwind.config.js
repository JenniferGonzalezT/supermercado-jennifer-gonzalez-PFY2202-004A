/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'acento-verdoso': '#2a9d8f',
        'acento-hover': '#21867a',
        'color-claro': '#f8f9fa',
        'color-oscuro': '#2b2d42',
      }
    },
  },
  plugins: [],
}