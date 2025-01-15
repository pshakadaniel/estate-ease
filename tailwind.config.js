/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
      },
    },
  },
  plugins: [],
};
