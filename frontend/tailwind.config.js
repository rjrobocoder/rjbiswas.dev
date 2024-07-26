/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#11071F",
        secondary: "#1A0B2E",
        accent: {
          dark: "#4F228D",
          light: "#A362FF",
        },
        danger: "#e3342f",
        success: "#38c172",
        warning: "#ffed4a",
        info: "#3490dc",
        light: "#FFFFFF",
        dark: "#343a40",
        muted: "#6c757d",
      },
      fontFamily: {
        preahvihear: ["Preahvihear", "sans-serif"],
      },
      animation: {
        meteor: "meteor 5s linear infinite",
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
