/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ffdada',
          500: '#fe4646',
          900: '#ad0101'
        }
      }
    },
  },
  plugins: [],
}