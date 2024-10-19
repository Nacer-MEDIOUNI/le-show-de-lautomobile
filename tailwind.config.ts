import daisyui from 'daisyui';
import defaultTheme from 'tailwindcss/defaultTheme';
import scrollbar from 'tailwind-scrollbar';
import { neutral } from 'tailwindcss/colors';

const tayaraByDay = {
  tayara: {
    primary: '#ee493a',
    'primary-focus': '#bb4b3e',
    'primary-content': '#ffffff',

    secondary: '#4A5568',
    'secondary-focus': '#3a4352',
    'secondary-content': '#ffffff',

    accent: '#37cdbe',
    'accent-focus': '#2ba69a',
    'accent-content': '#ffffff',

    neutral: '#fcfcfc',
    'neutral-focus': '#f5f5f5',
    'neutral-content': '#1e2735',

    'base-100': '#ffffff',
    'base-200': '#f9fafb',
    'base-300': '#ced3d9',
    'base-content': '#1e2734',

    info: '#1c92f2',
    success: '#009485',
    warning: '#ff9900',
    error: '#ff5724',

    '--rounded-box': '1rem',
    '--rounded-btn': '0.8rem',
    '--rounded-badge': '1.9rem',

    '--animation-btn': '0.25s',
    '--animation-input': '0.2s',

    '--btn-text-case': 'uppercase',
    '--navbar-padding': '0.5rem',
    '--border-btn': '1px',
  },
};

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      '3xs': '0.55rem',
      '2xs': '0.675rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      width: {
        22: '5.5rem',
      },
      maxWidth: {
        '2xs': ' 17rem' /* 272px */,
        '8xl': '88rem',
        '9xl': '96rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg) scale(1.13)' },
        },
        rocking: {
          '0%, 100%': { transform: 'translate(-0.7px,-0.7px) rotate(1.2deg)' },
          '50%': { transform: 'translateY(0) rotate(0)' },
        },
        breathing: {
          '0%, 100%': {
            // boxShadow: '0 15px 25px -5px rgb(238 73 58 / 0.8) ', // 49 130 206
            transform: 'translateY(-1rem)',
          },
          '50%': {
            // boxShadow: '0 15px 15px -10px rgb(238 73 58 / 0.4)',
            transform: 'translateY(0)',
          },
        },
        bounceRight: {
          '0%, 100%': {
            transform: 'translateX(25%)',
          },
          '50%': {
            transform: 'translateX(0)',
          },
        },
        bounceLeft: {
          '0%, 100%': {
            transform: 'translateX(-25%)',
          },
          '50%': {
            transform: 'translateX(0)',
          },
        },
        background: {
          '0%': { backgroundPosition: '0% 50%', backgroundSize: '200%' },
          '50%': { backgroundPosition: '100% 50%', backgroundSize: '200%' },
          '100%': { backgroundPosition: '0% 50%', backgroundSize: '200%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '20%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'go-right': {
          '0%': { transform: 'translateX(0%)' },
          '10%': { transform: 'translateX(-25%)' },
          '25%': { transform: 'translateX(0%)' },
          '30%': { transform: 'translateX(50%)' },
          '35%': { transform: 'translateX(0%)' },
          '40%': { transform: 'translateX(50%)' },
          '45%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        vibrate: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 1px)' },
          '40%': { transform: 'translate(-2px, -1px)' },
          '60%': { transform: 'translate(2px, 1px)' },
          '80%': { transform: 'translate(2px, -1px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 500ms ease-in-out infinite',
        breathing: 'breathing 3200ms ease-in-out infinite',
        rocking: 'rocking 200ms ease-in-out infinite',
        background: 'background 2000ms ease infinite',
        shimmer: 'shimmer 3000ms ease-in infinite',
        'go-right': 'go-right 3000ms ease-in-out infinite',
        vibrate: 'vibrate 300ms linear infinite',
        'slow-vibrate': 'vibrate 1s linear infinite',
      },
      backgroundSize: {
        '2x': '200%',
        '4x': '400%',
      },
      screens: {
        lg: '1010px',
        xl: '1200px',
        '2xl': '1428px',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: 'repeat(16, minmax(0, 1fr))',
        // 20 column grid
        20: 'repeat(20, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
      },
      gridColumnStart: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
      },
      gridColumnEnd: {
        20: '20',
      },
      colors: {
        neutral,
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
          tayara: '#55576e',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        yellow: {
          75: '#FFF9D9',
        },
      },
      fontFamily: {
        arabic: ['Lato', 'sans-serif'], // Default font family for body text
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      aspectRatio: {
        '11/14': '11 / 14',
        '9/13': '9 / 13',
        '4/5': '4 / 5',
        '3/4': '3 / 4',
        '4/3': '4 / 3',
        grid: '4 / 6',
        'cover-handset': '16 / 6',
        'cover-desktop': '16 / 4',
        '1000/300': '10 / 3',
        nativebanner: '2 / 5',
        targtedbanner: '105 / 32',
      },
      bgGradientDeg: {
        351: '351deg',
      },

      scale: {
        115: '1.15',
      },
    },
  },
  plugins: [ daisyui, scrollbar],
  daisyui: {
    themes: [tayaraByDay],
  },
};
