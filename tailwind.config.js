/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bw: {
          black: "#080808",
          dark: "#111111",
          card: "#161616",
          navy: "#1E3A8A",
          blue: "#2563EB",
          accent: "#3B82F6",
          light: "#60A5FA",
          border: "#1F2937",
        },
      },
    },
  },
  plugins: [],
};
