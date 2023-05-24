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
      sans: ["Playfair", "serif"]
    }
  },
  plugins: [require("flowbite/plugin")]
});
