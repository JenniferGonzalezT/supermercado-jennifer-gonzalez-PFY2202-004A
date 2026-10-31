/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  safelist: [
    'bg-green-100',
    'text-green-800',
    'bg-yellow-100',
    'text-yellow-800',
    'bg-red-100',
    'text-red-800'
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