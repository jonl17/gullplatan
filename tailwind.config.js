module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'buenos-black': ['buenos-aires-black', 'sans-serif'],
      'buenos-light': ['buenos-aires-light', 'sans-serif'],
    },
    colors: {
      'green-blue': '#41B3A3',
      cream: '#EEEAB8',
      purple: '#A13A71',
      'deep-purple': '#5E364A',
      green: '#9ACA3D',
      current: 'currentColor',
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
