/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        zameen: {
          green: '#088C7E',
          'green-dark': '#067',
          'green-light': '#e8f8f8',
          gold: '#D4AF37',
        },
        royal: {
          50: '#f8f6ff',
          100: '#f0ebfe',
          200: '#e4d9fd',
          300: '#cbb8fb',
          400: '#ac8ef7',
          500: '#9268f2',
          600: '#7d48eb',
          700: '#6c33c5',
          800: '#5a2da5',
          900: '#4c2589',
          950: '#2e1055',
        },
        parkview: {
          gold: '#D4AF37',
          dark: '#1a1a2e',
          cream: '#FAF8F5'
        }
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
