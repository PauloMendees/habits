/** @type {import('tailwindcss').Config} */
const colors = require('./src/theme/colors');
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: colors,
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
      },

      keyframes: {
        topToBottom: {
          '0%': {
            top: 0,
          },
          '100%': {
            top: '32px',
          },

          bottomToTop: {
            '0%': {
              top: '32px',
            },
            '100%': {
              bottom: 0,
            },
          },

          fadein: {
            '0%': { opacity: 0 },

            '100%': { opacity: 1 },
          },

          fadeout: {
            '0%': { opacity: 1 },

            '100%': { opacity: 0 },
          },
        },
      },
      animation: {
        fadein: 'fadein 300ms ease-in-out',
        fadeout: 'fadeout 300ms ease-in-out',
        bottomToTop: 'bottomToTop 300ms ease-in-out',
        topToBottom: 'topToBottom 300ms ease-in-out',
      },
    },
  },
  plugins: [],
};
