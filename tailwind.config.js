/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://paropakaareefoundation.org/wp-content/uploads/2023/02/children-outside-1.jpg')"
      }
    },
    fontFamily: {
      sans: ["Playfair", "serif"],
      // serif: ["GTWalsheimPro", "sans-serif"],
      serif: ["GT Walsheim Medium", "serif"],
      light: ["GT Walsheim Light", "sans-serif"]
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
      light: 300,
      semibold: 600,
      extrabold: 800,
      black: 900
    },
    colors: {
      primary: "#DAE4CF",
      secondary: "#DBA25D",
      ternary: {
        main: "#4F9284",
        light: "#CAE2DD",
        dark: "#2B5048"
      },
      quaternary: "#1C3337",
      fifth: "#8D3D2F"
    }
  },
  plugins: [require("flowbite/plugin")]
});
