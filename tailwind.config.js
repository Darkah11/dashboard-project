/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#FFFFFF',
        foreBlue: 'rgba(0, 104, 148, 1)',
        foreOrange: 'rgba(255, 152, 66, 1)',
        textGray: 'rgba(129, 128, 128, 1)',
        textBlack: 'rgba(44, 43, 43, 1)',
        bgGray: 'rgba(251, 251, 251, 1)',
        border: "rgba(186, 185, 185, 1)"
      },
    },
  },
  plugins: [],
}
