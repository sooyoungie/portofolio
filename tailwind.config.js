/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Space Grotesk"'],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}

