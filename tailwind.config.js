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
      iframe_bg_color: '#F7F2FA'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      large: '22px',
      h2: '43px',
      p: '20px'
    },
    borderRadius: {
      none: '0',
      sm: '5px',
      md: '16px',
      lg: '24px',
      100: '100px'
    },
    extend: {
      spacing: {
        4: '4px',
        5: '5px',
        8: '8px',
        10: '10px',
        13: '13px',
        20: '20px',
        30: '30px',
        40: '40px',
        41: '41px',
        50: '50px',
        60: '60px',
        70: '70px',
        100: '100px',
        264: '264px',
        552: '552px',
        600: '600px',
        1392: '1392px'
      },
    },
  },
  plugins: [],
}
