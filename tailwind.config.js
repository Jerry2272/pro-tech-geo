/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        yellowSlate: '#fab519',
        blueSlate: '#020617'
      }
    },
  },
  plugins: [],
}
