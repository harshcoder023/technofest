/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      handwriting: ["Bad Script", "cursive"],
    },
    backgroundImage: {
      college: "url('/src/assets/college.jpg')",
      "footer-texture": "url('/img/footer-texture.png')",
    },
  },
  plugins: [],
};
