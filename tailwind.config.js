/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        customLight: "#F9F9F4",
        "custom-greens": "#07B008",
        "custom-green": "#02AB4B",
        "custom-blue": "#055FC5",
      },
      fontFamily: {
        sri: ["Sriracha"],
      },
    },
  },
  plugins: [],
};
