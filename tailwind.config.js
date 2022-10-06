/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'arka': "url('/src/assets/background.png')",
       
      }

    },
  },
  plugins: [],
}