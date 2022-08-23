const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      '60/72': ['60px', '72px'],
      '40/48': ['40px', '48px'],
      '20/24': ['20px', '24px'],
      '14/16.8': ['14px', '16.8px'],
      '41/49.2': ['41px', '49.2px'],
      '120/151.2': ['120px', '151.2px'],
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
      'border-appear-top-left': {
        '0%': {
          'border-top-color': '#41B3A3',
          'border-left-color': 'transparent',
          'border-right-color': 'transparent',
          'border-bottom-color': 'transparent',
          'clip-path': 'inset(0 50% 0 50%)',
        },
        '100%': {
          'border-top-color': '#41B3A3',
          'border-left-color': 'transparent',
          'border-right-color': 'transparent',
          'border-bottom-color': 'transparent',
          'clip-path': 'inset(0 50% 0 0%)',
        },
      },
      'border-appear-top-right': {
        '0%': {
          'border-top-color': '#41B3A3',
          'border-left-color': 'transparent',
          'border-right-color': 'transparent',
          'border-bottom-color': 'transparent',
          'clip-path': 'inset(0 50% 0 50%)',
        },
        '100%': {
          'border-top-color': '#41B3A3',
          'border-left-color': 'transparent',
          'border-right-color': 'transparent',
          'border-bottom-color': 'transparent',
          'clip-path': 'inset(0 0% 0 50%)',
        },
      },
      'border-appear-sides': {
        '0%': {
          'border-top-color': 'transparent',
          'border-left-color': 'transparent',
          'border-right-color': 'transparent',
          'border-bottom-color': 'transparent',
          'clip-path': 'inset(0 0 100% 0)',
        },
        '100%': {
          'border-top-color': 'transparent',
          'border-left-color': '#41B3A3',
          'border-right-color': '#41B3A3',
          'border-bottom-color': 'transparent',
          'clip-path': 'inset(0 0 0 0)',
        },
      },
      'border-appear-bottom-right': {
        '0%': {
          'border-top-color': 'transparent',
          'border-left-color': 'transparent',
          'border-right-color': 'transparent',
          'border-bottom-color': 'transparent',
          'clip-path': 'inset(0 0 0 100%)',
        },
        '100%': {
          'border-top-color': 'transparent',
          'border-left-color': 'transparent',
          'border-right-color': 'transparent',
          'border-bottom-color': '#41B3A3',
          'clip-path': 'inset(0 0 0 50%)',
        },
      },
      'border-appear-bottom-left': {
        '0%': {
          'border-top-color': 'transparent',
          'border-left-color': 'transparent',
          'border-right-color': 'transparent',
          'border-bottom-color': 'transparent',
          'clip-path': 'inset(0 100% 0 0)',
        },
        '100%': {
          'border-top-color': 'transparent',
          'border-left-color': 'transparent',
          'border-right-color': 'transparent',
          'border-bottom-color': '#41B3A3',
          'clip-path': 'inset(0 50% 0 0)',
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
      'border-appear-top-right': 'border-appear-top-right 0.5s forwards',
      'border-appear-top-left': 'border-appear-top-left 0.5s forwards',
      'border-appear-sides': 'border-appear-sides 0.3s 0.3s forwards',
      'border-appear-bottom-right':
        'border-appear-bottom-right 0.5s 0.4s forwards',
      'border-appear-bottom-left':
        'border-appear-bottom-left 0.5s 0.4s forwards',
      'connector-grow': 'connector-grow 0.2s 0.9s forwards',
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
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.grain': {
          'background-image': 'url(/grain.png)',
          'background-size': '25%',
          'background-position': 'center',
          'background-repeat': 'repeat',
        },
        '.hide-vertically': {
          'clip-path': 'inset(0 0 100% 0)',
        },
        '.clip-path-0': {
          'clip-path': 'inset(0)',
        },
      })
    }),
  ],
}
