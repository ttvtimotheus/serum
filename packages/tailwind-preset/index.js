/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    theme: {
      extend: {
        colors: {
          brand: {
            50:  "#f5f8ff",
            100: "#e6eeff",
            200: "#cddcff",
            300: "#9fb8ff",
            400: "#6f92ff",
            500: "#476dff",
            600: "#2f54e6",
            700: "#2543b4",
            800: "#1d358f",
            900: "#16286f"
          }
        },
        borderRadius: {
          sm: "0.375rem",
          md: "0.5rem",
          lg: "0.75rem",
          xl: "1rem"
        }
      }
    },
    plugins: []
  }
  