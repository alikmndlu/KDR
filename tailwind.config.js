/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/*.html",
    "./assets/js/*.js"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#09509B',
        secondary: '#0472A1',
        footer: '#161B22'
      },
      fontFamily: {
        sans: ['IRANSansX', 'sans-serif'],
      },
    },
  },
  plugins: []
}

