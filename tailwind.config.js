/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#0f172a',
        },
        dark: {
          bg: '#090D16',
          card: '#111827',
          surface: '#1F2937',
          border: '#1F293D',
          muted: '#9CA3AF'
        },
        accent: {
          cyan: '#06B6D4',
          violet: '#8B5CF6',
          emerald: '#10B981',
          rose: '#F43F5E',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'float1': 'float1 4.5s ease-in-out infinite',
        'float2': 'float2 5s ease-in-out infinite',
        'float3': 'float3 4.2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-12deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-10deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px) rotate(8deg)' },
          '50%': { transform: 'translateY(-12px) rotate(6deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-6deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-4deg)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.7))' },
        }
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(59, 130, 246, 0.3)',
        'glow-md': '0 0 25px -5px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 40px -10px rgba(139, 92, 246, 0.5)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.4)',
      }
    },
  },
  plugins: [],
}
