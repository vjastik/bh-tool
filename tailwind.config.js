/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B91C1C',
          50: '#FEE2E2',
          100: '#FCA5A5',
          200: '#F87171',
          300: '#EF4444',
          400: '#DC2626',
          500: '#B91C1C',
          600: '#991B1B',
          700: '#7F1D1D',
          800: '#681E1E',
          900: '#4C1D1D',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          50: '#404040',
          100: '#363636',
          200: '#2D2D2D',
          300: '#232323',
          400: '#1A1A1A',
          500: '#101010',
          600: '#070707',
          700: '#000000',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};