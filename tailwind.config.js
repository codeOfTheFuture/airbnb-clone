module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgTopMobile: "url('/images/bg1-mobile.webp')",
        bgTopDesktop: "url('/images/bg1-desktop.webp')",
      },
    },
  },
  plugins: [],
};
