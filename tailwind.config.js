module.exports = {
  purge: [],

  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    },
    listStyleType: {
      none: "none",
      square: "square",
      roman: "upper-roman",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
