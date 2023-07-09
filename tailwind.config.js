/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        black: "#272D3D",
        purple: "#2E2BA6",
        pale: "#8887AE",
        pink: "#D23C8F",
        yellow: "#F2B04D",
        white: "#FFFFFF",
        secondary: "#F9F9FA",
        veryDimBlue: "#8A89A0",

        




      },
      fontFamily: {
        poppins: ["Changa One", "PT Sans"],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      boxShadow: {
        "yellowBtn": "0px 23px 48px 0px #f2b04d66",
        "purpleBtn": "0px 23px 48px 0px #2e2ba666",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smd: "880px",
      md: "1060px",
      lg: "1200px",
      xl: "1440px",
    },
  },
  plugins: [],
};
