module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "320px",
      md: "547px",
      lg: "768px",
      xl: "1024px",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#5928e5",
    }),
    extend: {
      colors: {
        primary: "#5928e5"
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif"
      },
      animation: {
        spin: 'spin 20s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
