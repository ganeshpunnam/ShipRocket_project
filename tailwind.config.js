module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Tailwind scans these files for classes
  ],
  theme: {
    extend: {
      keyframes: {
        moveGradient: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'move-gradient': 'moveGradient 5s linear infinite', // Moving animation with 5s duration
      },
    },
  },
  plugins: [],
}
