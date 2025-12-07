/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",   // optional if no pages folder
  ],
  theme: {
    extend: {
      rotate: {
        10: "10deg",
        15: "15deg",
        20: "20deg",
        30: "30deg"
      }
    }
  },
  plugins: []
}

export default config
