/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#36a836",
        darkgreen: "#005100",
        darkblack: "#101825",
        darkyellow: "#c98902",
      },
      fontFamily: {
        sans: ['"Open Sans"', "ui-sans-serif", "system-ui"], // Set "Open Sans" as default
      },
      boxShadow: {
        text: "2px 2px 4px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 125, 0, 0.4)",
        },
      });
    },
  ],
};
