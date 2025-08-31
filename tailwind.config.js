module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        love: {
          primary: '#FF6B6B',
          secondary: '#4ECDC4',
          accent: '#FFD166',
          dark: '#2A2D34',
          light: '#F7FFF7'
        },
      },
      fontFamily: {
        romantic: ['Dancing Script', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}