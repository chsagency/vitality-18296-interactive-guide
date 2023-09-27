/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f41c5e",
        "metallic-blue": "#4F738A",
        "ice-blue": "#EAEFF4",
        secondary: "#666666",
        video: "#E9EFF3",
      },
    },
  },
  plugins: [],
};
