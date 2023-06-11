/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    colors: {
      'ctm-primary': '#5a81fa',
      'ctm-secondary': '#2c3d8f',
      'ctm-light-primary': '#cddeff',
      'ctm-dark-gray': '#1f1f1f',
      'ctm-medium-gray': '6a6e83',
      'ctm-light-gray': 'f8f9fd',
    },
    fontFamily: {
      primary: ['"Poppins"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
