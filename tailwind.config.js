module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#091626',
      white: '#fdfdfd',
      gray: '#93928E',
      teal: '#32776D',
      // Zone colors
      red: '#FF4C30',
      yellow: '#FDE69C',
      green: '#70AD46'
    },
    extend: {},
  },
  variants: {
    extend: {
      filter: ['hover']
    },
  },
  plugins: [],
}
