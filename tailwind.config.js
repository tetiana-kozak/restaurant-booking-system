/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: '#98CB6D',
      secondary: '#D0E3C4',
      tertiary: '#EFF4EA',
      stepper: '#ECE6F0',
      'button-primary': '#FFB859',
      'hover-btn-primary': '#FF9C18',
      'button-secondary': '#503047',
      'hover-btn-secondary': '#6750A414',
      'button-disabled': '#CAC4D0',
      error: '#CE2020',
      'text-color': '#292929',
      white: '#FFFFFF',
      backdrop: 'rgba(202, 196, 208, 0.5)',
      'input-bg': '#E6E0E9',
      iframe_bg_color: '#F7F2FA',
    },

    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },

    fontSize: {
      small: '12px',
      normal: '16px',
      large: '24px',
      xLarge: '28px',
      h2: '43px',
      p: '20px',
    },

    boxShadow: {
      'hover-btn': '0px 5px 9.5px 0px rgba(0, 0, 0, 0.25)',
      page_shadow:
        '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
    },

    transitionDelay: {
      'btn-transition': 'boxShadow 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },

    borderRadius: {
      none: '0',
      sm: '5px',
      md: '16px',
      lg: '24px',
      100: '100px',
    },

    extend: {
      spacing: {
        0: '0px',
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        30: '30px',
        36: '36px',
        40: '40px',
        50: '50px',
        52: '52px',
        60: '60px',
        70: '70px',
        100: '100px',
        164: '164px',
        264: '264px',
        350: '350px',
        380: '380px',
        552: '552px',
        600: '600px',
        665: '665px',
        1392: '1392px',
        1440: '1440px',
      },
    },
  },
  plugins: [],
}
