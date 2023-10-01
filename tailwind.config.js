/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: '#98CB6D',
      secondary: '#D0E3C4',
      tertiary: '#EFF4EA',
      'button-primary': '#FFB859',
      'button-secondary': '#503047',
      error: '#CE2020',
      'text-color': '#292929',
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
