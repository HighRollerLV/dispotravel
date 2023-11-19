/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue' : '#221E5B',
        'neon-green' : '#60D372',
        'button-border-gray' : '#82828F',
      },
      margin: {
        '89px' : '89px',
      }
    },
  },
  plugins: [],
}

