/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: {
          color_01042D: "#01042D",
          color_2D0000: "#2D0000",
          color_D9D9D9: "#D9D9D9",
          color_767586: "#767586",
        },
      },
      fontFamily: {
        text: ["Inria Sans", "sans-serif"],
        Title: ["Italiana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
