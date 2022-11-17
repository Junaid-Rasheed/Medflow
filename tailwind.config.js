/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        xxl: "40rem",
      },
      fontFamily: {
        Yaro: "Yaro",
        PoppinLight: "PoppinLight",
        PoppinBold: "PoppinBold",
        PoppinRegular: "PoppinRegular",
        PoppinSemiBold: "PoppinSemiBold",
      },
    },
  },
  plugins: [],
};
