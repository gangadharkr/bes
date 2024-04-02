module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_87: "#ffffff87" },
        gray: { 100: "#f3f3f4" },
        black: { 900: "#000000", "900_cc": "#000000cc", "900_7e": "#0000007e" },
        blue: { A400: "#1877f2" },
        deep_purple_A200: "#7b61ff",
        gray_500: "#999999",
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", roboto: "Roboto" },
      opacity: { 0.4: 0.4 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
