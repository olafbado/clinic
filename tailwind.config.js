/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundColor: {
        myGray: "#e5e7eb",
      },
    },
  },
  safelist: [
    {
      pattern: /(bg)-(gray)/,
    },
  ],
  plugins: [],
};
