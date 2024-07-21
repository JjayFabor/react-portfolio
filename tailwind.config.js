/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      transform: {
        'style-preserve-3d': 'transform-style: preserve-3d',
        'backface-hidden': 'backface-visibility: hidden',
        'perspective': 'perspective: 1000px',
      },
      fontFamily: {
        'dinasti-regular': ['"DINASTI Regular"', 'sans-serif'],
        'dinasti-bold': ['"DINASTI Bold"', 'sans-serif'],
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        blink: {
          '0%, 100%': {
            textShadow: '0 10px 15px rgba(0, 206, 209, 1)',
            boxShadow: '0 14px 15px -2px rgba(0, 206, 209, 1)',
          },
          '50%': {
            textShadow: 'none',
            boxShadow: 'none',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
        bounce: 'bounce 1s infinite',
        blink: 'blink 1s infinite',
        'logo-animation': 'logoAnimation 5s infinite',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, .75)',
        'custom-3xl': '0 35px 35px rgba(0, 206, 209, .75)',
        'white-3xl': '0 15px 15px rgba(109, 109, 109, .75)',
        'white-4xl': [
          '0 25px 25px rgba(109, 109, 109, .65)',
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
