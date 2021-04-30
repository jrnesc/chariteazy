module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blu-light':'#305AFF',
        'blu-dark': '#1947E5',
        'teel': '#00C6AE',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
