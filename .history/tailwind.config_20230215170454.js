/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#A0BCC2',
      secondary: '#F9EBC8',
    },
    extend: {
      fontFamily: {
        dancing: ['var(--font-dancing)'],
      },
    },
  },
  plugins: [],
  // Gen all class when in development mode
  ...(process.env.NODE_ENV == 'development') && {
    safelist: [
      { pattern: /.*/ },
    ],
  },
}