/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#11071F',
        secondary: '#1A0B2E',
        accent: {
          dark: '#4F228D',
          light: '#A362FF'
        },
        danger: '#e3342f',
        success: '#38c172',
        warning: '#ffed4a',
        info: '#3490dc',
        light: '#FFFFFF',
        dark: '#343a40',
        muted: '#6c757d',
      }
    },
  },
  plugins: [],
}