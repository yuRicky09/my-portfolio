module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Oswald", "Arial", "sans-serif"],
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
      },
      animation: {
        "fade-down": "fade-down 0.2s ease-in-out",
        "fade-down-reverse": "fade-down 0.2s ease-in-out reverse",
        "pop-up": "pop-up 0.3s ease-out",
        "pop-up-reverse": "pop-up 0.3s ease-out  reverse",
        shake: "shake 1s linear infinite",
      },
    },
  },
  plugins: [],
};
