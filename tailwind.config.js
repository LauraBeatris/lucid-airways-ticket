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
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        'bookmania-regular': ['Bookmania-Regular', ...defaultTheme.fontFamily.serif],
        'bookmania-black': ['Bookmania-Black', ...defaultTheme.fontFamily.serif]
      },
      backgroundImage: {
        clouds: "url('/images/background-clouds.jpg')"
      },
      backgroundSize: {
        '100%': '100%'
      },
      minHeight: {
        // Subtracts the header height
        'main-content': 'calc(100vh - 316px)'
      },
      maxWidth: {
        ticket: '952px'
      },
      colors: {
        button: '#161A59'
      }
    }
  },
  plugins: []
}
