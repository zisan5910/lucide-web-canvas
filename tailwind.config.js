/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1976d2', // Material Design Blue
        secondary: '#ff9800', // Material Design Orange
      },
    },
  },
  plugins: [],
}
