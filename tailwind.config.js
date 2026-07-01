/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14213D",
        clay: "#111318",
        cream: "#FAFAF8",
        accent: "#F5B700",
        accent2: "#C6F135",
        line: "#E4E2DA",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 0 0 #14213D",
      },
    },
  },
  plugins: [],
};
