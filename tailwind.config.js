/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '639px'}, // Define breakpoint para dispositivos móveis
        'sm': {'min': '640px'}, // Define breakpoint para dispositivos maiores
      },
    },
  },
  plugins: [],
}
