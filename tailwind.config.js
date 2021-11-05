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
      red: {
        100: "#ffdbd6",
        200: "#ffb7ac",
        300: "#ff9483",
        400: "#ff7059",
        500: "#ff4c30",
        600: "#cc3d26",
        700: "#992e1d",
        800: "#661e13",
        900: "#330f0a"
      },
      yellow: {
        100: "#fffaeb",
        200: "#fef5d7",
        300: "#fef0c4",
        400: "#fdebb0",
        500: "#fde69c",
        600: "#cab87d",
        700: "#988a5e",
        800: "#655c3e",
        900: "#332e1f"
      },
      green: {
        100: "#e2efda",
        200: "#c6deb5",
        300: "#a9ce90",
        400: "#8dbd6b",
        500: "#70ad46",
        600: "#5a8a38",
        700: "#43682a",
        800: "#2d451c",
        900: "#16230e"
      },
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
