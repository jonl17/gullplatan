module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      '60/72': ['60px', '72px'],
      '40/48': ['40px', '48px'],
      '20/24': ['20px', '24px'],
      '14/16.8': ['14px', '16.8px'],
      '41/49.2': ['41px', '49.2px'],
      '126/151.2': ['126px', '151.2px'],
    },
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
        padding: {
          DEFAULT: '1rem',
          md: '0',
        },
      },
    },
  },
  plugins: [],
}
