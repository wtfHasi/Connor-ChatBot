/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Make sure this includes your HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Scans through JS/JSX/TSX files
    './src/styles/**/*.{css,js}', // Scans CSS/JS files inside the src/styles folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
