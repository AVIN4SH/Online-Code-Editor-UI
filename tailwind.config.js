/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0f0a19",
        "gray-custom": "#a0aec0",
      },
    },
  },
  plugins: [],
};
