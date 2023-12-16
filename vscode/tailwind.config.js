/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  theme: {
    fontFamily: { 'sans': ['sans-serif', 'Poppins'] },
    extend: {
      colors: {
        'bg': 'linear-gradient(270deg, #3479FF 0%, #ADADF0 100%);',
        'cyanSelectText': '#00C9D5',
        'cyan': '#85F8FF',
        'bg-vscode': '#22262F',
        'menu-vscode': '#1E222B',
        'menu-bar': '#222632'
      }
    },
  },
  plugins: [],
}

