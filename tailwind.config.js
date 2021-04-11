/* eslint-disable global-require */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      fancy: ['Bad Script', 'cursive'],
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
    scrollbar: ['rounded'],
  },
  plugins: [require('tailwind-scrollbar')],
};
