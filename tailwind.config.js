/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
