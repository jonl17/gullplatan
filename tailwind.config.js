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
      transparent: 'transparent',
    },
    keyframes: {
      'border-appear-first': {
        '0%': {
          width: '0',
          height: '0',
          'border-top-color': '#41B3A3',
          'border-left-color': 'transparent',
          'border-right-color': 'transparent',
          'border-bottom-color': 'transparent',
        },
        '50%': {
          width: '100%',
          height: '0',
          'border-top-color': '#41B3A3',
          'border-left-color': '#41B3A3',
          'border-right-color': '#41B3A3',
          'border-bottom-color': 'transparent',
        },
        '100%': {
          width: '100%',
          height: '100%',
          'border-top-color': '#41B3A3',
          'border-left-color': '#41B3A3',
          'border-right-color': '#41B3A3',
          'border-bottom-color': 'transparent',
        },
      },
      'border-appear-second': {
        '0%': {
          width: '0',
          height: '100%',
          'border-top-color': 'transparent',
          'border-left-color': 'transparent',
          'border-right-color': 'transparent',
          'border-bottom-color': 'transparent',
        },
        '100%': {
          width: '100%',
          height: '100%',
          'border-top-color': 'transparent',
          'border-left-color': 'transparent',
          'border-right-color': 'transparent',
          'border-bottom-color': '#41B3A3',
        },
      },
      'connector-grow': {
        '0%': {
          height: '0',
        },
        '100%': {
          height: '3rem',
        },
      },
    },
    animation: {
      'border-appear-first': 'border-appear-first 0.5s forwards',
      'border-appear-second': 'border-appear-second 0.5s 0.4s forwards',
      'connector-grow': 'connector-grow 0.2s 0.8s forwards',
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
