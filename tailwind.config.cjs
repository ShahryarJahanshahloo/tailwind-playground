/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        farsi: ['Vazirmatn'],
      },
      height: {
        15: '3.75rem',
      },
    },
  },
  darkMode: 'class',
}
