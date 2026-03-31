/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        konecta: {
          black: '#1E252C',
          white: '#F5F2EC',
          orange: '#F48120',
          'orange-light': '#FFA04D',
          gold: '#FBB040',
          slate: '#5D6770',
          silver: '#A4AAAD',
          'dark-gray': '#161C22',
          'mid-gray': '#1A2029',
          muted: '#A4AAAD',
          border: 'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        logo: ['Blur', 'Century Gothic', 'CenturyGothic', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        body: ['Catamaran', 'sans-serif'],
      },
      fontSize: {
        'display': 'clamp(3rem, 5.5vw, 6rem)',
        'hero': 'clamp(2.5rem, 4.5vw, 5rem)',
        'section': 'clamp(2rem, 3.5vw, 3.5rem)',
        'sub-section': 'clamp(1.4rem, 2vw, 2rem)',
        'cta-heading': 'clamp(2rem, 3.5vw, 3.5rem)',
      },
      spacing: {
        'section': 'clamp(5rem, 10vw, 8rem)',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-dot': 'pulse-dot 2s infinite',
        'ticker': 'ticker 32s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        'fadeUp': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fadeIn': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        'ticker': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'shimmer': {
          from: { backgroundPosition: '-200% 0' },
          to: { backgroundPosition: '200% 0' },
        },
        'gradientShift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'borderGlow': {
          '0%, 100%': { borderColor: 'rgba(244, 129, 32, 0.15)' },
          '50%': { borderColor: 'rgba(244, 129, 32, 0.5)' },
        },
        'scaleIn': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'slideUp': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderColor: {
        DEFAULT: 'rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
};
