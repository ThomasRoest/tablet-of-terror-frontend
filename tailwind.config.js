/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))', // Adds grid-cols-16
      },
      gridTemplateRows: {
        16: 'repeat(16, minmax(0, 1fr))', // Adds grid-rows-16
      },
    },
  },
  plugins: [],
}

