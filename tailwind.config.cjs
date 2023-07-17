/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      spacing: {
        "-10": "-2.5rem", // This is -40px, adjust the value if necessary
      },
      inset: {
        "-1": "-0.25rem", // -4px
        "-2": "-0.5rem", // -8px
        "-3": "-0.75rem", // -12px
        "-4": "-1rem", // -16px
        // Add as many as you need
      },
      fontSize: {
        'xxs': '.75rem',
      }
    },
  },
  plugins: [],
};
