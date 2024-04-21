const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#070A29',
        pink: '#A27EFE',
      },

      fontFamily: {
        ReadexPro: ['Readex Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
