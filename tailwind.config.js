/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: "#5847EB",
        SoftOrange: "#F1C65B",
        Violet: "#7536D3",
        LimeGreen: "#4ACF81",
        LightRed: "#FF5C7C",
        SoftBlue: "#56C2E6",
        LightOrange: "#FF8C66",
        VeryDarkBlue: "#0F1424",
        DarkBlue: "#1C1F4A",
        DesaturatedBlue: "#6F76C8",
        PaleBlue: "#BDC1FF",
      },
      screens: {
        Mobile: "375px",
        Cs: "1370px",
      },
    },
  },
  plugins: [],
};
