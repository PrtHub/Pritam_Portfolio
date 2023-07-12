/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        open:['Open Sans', 'sans-serif']
      },
      colors: {
        "yellow-1": "#fca723",
        "yellow-2": "#f2aa35",
        "light-blue": "#aeeefb ",
        "purple": " #bfc2f5",
        "gray-blue": "#ddecf0 ",
        "text-blue": "#242d49",
        "text-gray": '#9ca5ba'
      },
      screens: {
        xs: "450px",
      },
      boxShadow: {
        button: "0px 17px 22px -6px #FDBE06",
        card: "0px 26px 60px 10px #D6E4F0"
      }
    },
  },
  plugins: [],
}