/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#A0BCC2',
      secondary: '#FEFBE7',
      hover: '#F9EBC8'
    },
    extend: {
      fontFamily: {
        pacifico: ['var(--font-pacifico)'],
      },
    },
  },
  plugins: [],
  // Gen all class when in development mode
  // ...(process.env.NODE_ENV == 'development') && {
  //   safelist: [
  //     { pattern: /.*/ },
  //   ],
  // },
}