module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#091626',
      white: '#fdfdfd',
      gray: {
        100: "#e9e9e8",
        200: "#d4d3d2",
        300: "#bebebb",
        400: "#a9a8a5",
        500: "#93928e",
        600: "#767572",
        700: "#585855",
        800: "#3b3a39",
        900: "#1d1d1c"
      },
      teal: {
        100: "#d6e4e2",
        200: "#adc9c5",
        300: "#84ada7",
        400: "#5b928a",
        500: "#32776d",
        600: "#285f57",
        700: "#1e4741",
        800: "#14302c",
        900: "#0a1816"
      },
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
