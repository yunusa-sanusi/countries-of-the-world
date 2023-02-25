/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        'very-dark-blue': 'hsl(200, 15%, 8%)',
        white: 'hsl(0, 0%, 100%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
      },
      backgroundColor: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-dark-blue': 'hsl(207, 26%, 17%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontSize: {
        14: '14px',
        16: '16px',
      },
      fontFamily: {
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
