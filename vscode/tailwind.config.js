/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  theme: {
    fontFamily: { 'mono': ['ui-monospace', 'Space Mono'] },
    extend: {
      colors: {
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

