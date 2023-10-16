/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#E6E6E6",
        },
        blue: {
          500: "#1D91CC",
          700: "#11577A",
        },
        purple: {
          200: "#F5EFFE",
          300: '#ECE0FD',
          500: "#9E5CF2",
        },
      },
    },
  },
  plugins: [],
};
