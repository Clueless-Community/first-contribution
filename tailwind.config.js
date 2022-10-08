const { keyframes } = require("@emotion/react")
const { animate } = require("react-tsparticles")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes:{
        bgslide:{
          '0%': { background : '#00aa00' },
          '50%': { background : '#ee0000' },
          '100%': { background : '#000ff0' },
        },
      },
    },
  },
  plugins: [],
}