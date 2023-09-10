/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: "'Dosis', sans-serif;",
      },
      backgroundImage: {
        home: "linear-gradient(to right bottom,rgba(39,38,48,1),rgba(148,177,233,0.8)),url('../src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
