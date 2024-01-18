/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat': ['Montserrat', sans-serif],
      'manrope': ['Manrope', sans-serif],
      'playfair': ['Playfair Display', serif],
      'poppins': ['Poppins', sans-serif],
      'inter': ['Inter', 'sans-serif'],
      'dmsans': ['DM Sans', 'sans-serif'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

