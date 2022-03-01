/* eslint-disable no-undef */
module.exports = {
  content: ['./app/**/*.hbs'],
  theme: {
    extend: {
      colors: {
        slate: {
          400: '#8596AD',
        },
        ember: {
          50: '#fffdfd',
          100: '#f8d6d1',
          200: '#f1afa5',
          300: '#ea8879',
          400: '#e3604d',
          500: '#db3a22',
          600: '#af2e1b',
          700: '#af2e1b',
          800: '#57170d',
          900: '#2a0b07',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
