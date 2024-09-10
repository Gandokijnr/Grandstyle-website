/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: '#40E0D0',
        darkturquoise: '#00CED1', // Added dark turquoise color
      },
    },
  },
  plugins: [],
}