/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: "hsl(213, 96%, 18%)",
        text: "hsl(243, 100%, 62%)",
      },
      screens: {
        mobile: { max: "500px" },
        msm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
