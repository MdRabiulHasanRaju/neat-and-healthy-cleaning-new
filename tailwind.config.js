/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E88E5',
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#1E88E5',
          600: '#1976D2',
          700: '#1565C0',
          800: '#0D47A1',
          900: '#082F6B',
        },
        secondary: {
          DEFAULT: '#00ACC1',
          50: '#E0F7FA',
          100: '#B2EBF2',
          200: '#80DEEA',
          300: '#4DD0E1',
          400: '#26C6DA',
          500: '#00ACC1',
          600: '#0097A7',
          700: '#00838F',
          800: '#006064',
          900: '#004D5C',
        },
        accent: {
          DEFAULT: '#00C853',
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#00C853',
          600: '#00B24A',
          700: '#009B40',
          800: '#008536',
          900: '#006E2C',
        },
        ink: {
          DEFAULT: '#0F172A',
          soft: '#1E293B',
          muted: '#334155',
        },
        gray: {
          DEFAULT: '#64748B',
        },
        success: { DEFAULT: '#16A34A' },
        danger: { DEFAULT: '#EF4444' },
        bg: { DEFAULT: '#F8FAFC' },
      },
      fontFamily: {
        sans: ['Manrope', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(15, 23, 42, 0.10)',
        card: '0 10px 40px -12px rgba(15, 23, 42, 0.12)',
        glow: '0 0 0 1px rgba(30,136,229,0.18), 0 12px 40px -12px rgba(30,136,229,0.35)',
        'glow-accent': '0 0 0 1px rgba(0,200,83,0.20), 0 12px 40px -12px rgba(0,200,83,0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)',
        'primary-gradient': 'linear-gradient(135deg, #1E88E5 0%, #00ACC1 100%)',
        'accent-gradient': 'linear-gradient(135deg, #00C853 0%, #00ACC1 100%)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 1.5s infinite',
      },
    },
  },
  plugins: [],
};
