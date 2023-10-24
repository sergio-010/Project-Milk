/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        milk: "url('/src/assets/milk.jpg')",
        milkR: "url('/src/assets/milkR.jpg')",
      },
    },
  },
  plugins: [],
};
