const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    colors: {
      black: "black",
      blue: colors.blue,
      gray: colors.gray,
      green: colors.green,
      lime: colors.lime,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      secondary: "#F4F2ED",
      white: "white",
      yellow: colors.yellow,
    },
    fontFamily: {
      "pt-serif": ["PT Serif", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "100%": "100%",
    },
    extend: {
      backgroundImage: {
        underline1: "url('./src/assets/Underline1.svg')",
        underline2: "url('./src/assets/Underline2.svg')",
        underline3: "url('./src/assets/Underline3.svg')",
        underline4: "url('./src/assets/Underline4.svg')",
        highlight3: "url('./src/assets/Highlight3.svg')",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
      transitionProperty: {
        'height': 'height',
        'rotate': 'rotate',
        'underline': 'underline'
      }
    },
  },
  plugins: [],
}
