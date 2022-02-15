const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "540px",
      ...defaultTheme.screens,
    },
    listStyleType: {
      tool: "\\1F44D",
    },
    extend: {
      fontFamily: {
        body: ["Oswald", "Arial", "sans-serif"],
      },
      gridTemplateColumns: {
        tags: "repeat(auto-fit, minmax(min-content, 8rem) )",
      },
      keyframes: {
        "fade-down": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        shake: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "pop-up": {
          "0%": {
            transform: "scale(0)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        flip: {
          "0%": {
            transform: "rotateY(0deg)",
          },
          "50%": {
            transform: "rotateY(180deg)",
          },
          "100%": {
            transform: "rotateY(360deg)",
          },
        },
      },
      animation: {
        "fade-down": "fade-down 0.2s ease-in-out",
        "fade-down-reverse": "fade-down 0.2s ease-in-out reverse",
        "pop-up": "pop-up 0.3s ease-out",
        "pop-up-reverse": "pop-up 0.3s ease-out  reverse",
        shake: "shake 1s linear infinite",
        flip: "flip 0.4s linear 1",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".rotate-y-360": {
          transform: "rotateY(360deg)",
        },
        ".writing-vertical-rl": {
          writingMode: "vertical-rl",
        },
      });
    }),
  ],
};
