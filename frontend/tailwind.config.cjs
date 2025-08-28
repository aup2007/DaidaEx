/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f0f7ff",
          100: "#dcefff",
          200: "#b9defe",
          300: "#89c8fd",
          400: "#58adfa",
          500: "#2a8ef5",
          600: "#1672e0",
          700: "#1159b5",
          800: "#114a90",
          900: "#123f74"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "Apple Color Emoji", "Segoe UI Emoji"]
      }
    }
  },
  plugins: [],
}






// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           50:"#f0f7ff",100:"#dcefff",200:"#b9defe",300:"#89c8fd",400:"#58adfa",
//           500:"#2a8ef5",600:"#1672e0",700:"#1159b5",800:"#114a90",900:"#123f74"
//         }
//       },
//       fontFamily: {
//         sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial"]
//       }
//     },
//   },
//   plugins: [],
// };
