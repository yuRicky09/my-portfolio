module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Oswald", "Arial", "sans-serif"],
      },
      colors: {
        "dark-bg": "#202023",
        "dark-container": "#060809",
        "light-bg": "#f0e7db",
        "light-text": "#292929",
        "light-container": "#fdf9f2",
      },
      keyframes: {
        "fade-down": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
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
      },
    },
  },
  plugins: [],
};
