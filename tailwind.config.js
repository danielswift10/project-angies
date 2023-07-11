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
        changa: ["Changa One", "cursive"],
        pt: ["PT Sans", "sans-serif"],
        
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      boxShadow: {
        "card" : "0px 0px 0px 0px #a9a7a71a, -5px 6px 18px 0px #a9a7a71a, -20px 25px 32px 0px #a9a7a717, -46px 56px 43px 0px #a9a7a70d, -82px 99px 51px 0px #a9a7a703, -128px 154px 56px 0px #a9a7a700",
        "yellowBtn": "0px 23px 48px 0px #f2b04d66",
        "purpleBtn": "0px 23px 48px 0px #2e2ba666",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smd: "880px",
      md: "960px",
      lg: "1200px",
      xlg: "1280px",
      xl: "1440px",
    },
  },
  plugins: [],
};
