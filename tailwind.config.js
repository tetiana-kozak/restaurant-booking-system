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
      backdrop: 'rgba(202, 196, 208, 0.5)',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      large: '22px',
      xLarge: '28px',
    },
    borderRadius: {
      none: '0',
      sm: '5px',
      lg: '24px',
    },
    extend: {
      spacing: {
        4: '4px',
        5: '5px',
        8: '8px',
        13: '13px',
        30: '30px',
        40: '40px',
        552: '552px',
        600: '600px',
      },
    },
  },
  plugins: [],
}
