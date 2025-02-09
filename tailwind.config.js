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
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        footer: 'var(--color-footer)'
      },
      fontFamily: {
        sans: ['IRANSansX', 'sans-serif'],
      },
    },
  },
  plugins: []
}

