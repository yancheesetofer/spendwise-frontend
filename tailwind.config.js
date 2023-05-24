/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            '50': '#edf0ff',
            '100': '#dfe3ff',
            '200': '#c5cbff',
            '300': '#a2a8ff',
            '400': '#7e7dfc',
            '500': '#6558f5',
            '600': '#5d41ea',
            '700': '#4f33cf',
            '800': '#412ca7',
            '900': '#382b84',
            '950': '#221a4c',
        }
      }
    },
  },
  plugins: [],
}

