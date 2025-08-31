module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        love: {
          primary: '#FF85A2',  // 柔和的粉色
          secondary: '#F8A5C2', // 温暖的浅粉色
          accent: '#FDCB6E',    // 柔和的珊瑚色
          dark: '#2D3436',      // 深灰色
          light: '#FFF8F8'      // 温暖的浅粉色背景
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