/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      
    ],
    theme: {
      extend: {
        boxShadow: {
          'custom': '26px 22px 51px 0px rgba(0, 0, 0, 0.14)', // Custom shadow
          'cards' : '2px 10px 30px 0px #0000001A'
        },
      },
    },
    plugins: [],
  }