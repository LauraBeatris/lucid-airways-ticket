const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        clouds: "url('/images/background-clouds.jpg')"
      },
      backgroundSize: {
        '100%': '100%'
      }
    }
  },
  plugins: []
}
