/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat Variable", "sans-serif"], // All weights via variable font
        poppins: ["Poppins", "sans-serif"],         // All static weights
        serif: ["Roboto Serif", "serif"]            // All static weights
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },

    },
  },
  plugins: [],
}