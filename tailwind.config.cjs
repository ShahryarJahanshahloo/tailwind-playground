/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['Droid Serif', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      fontFamily: {
        farsi: ['Vazirmatn'],
      },
      height: {
        15: '3.75rem',
        104: '26rem',
        136: '34rem',
      },
      transitionProperty: {
        bg: 'background',
      },
      spacing: {
        15: '3.75rem',
      },
    },
  },
  darkMode: 'class',
}
