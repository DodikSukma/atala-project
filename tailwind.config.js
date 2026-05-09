/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'comic-cream': '#fdfbf7',
        'comic-dark': '#1a1a1a',
        'accent-yellow': '#ffde59',
        'accent-blue': '#3b82f6',
        'accent-teal': '#14b8a6',
        'accent-red': '#ef4444',
      },
      fontFamily: {
        'grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(26,26,26,1)',
        'brutal-sm': '2px 2px 0px 0px rgba(26,26,26,1)',
        'brutal-lg': '6px 6px 0px 0px rgba(26,26,26,1)',
      },
    },
  },
  plugins: [],
}
