export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0a0a0a',
          purple: '#7b3aff',
          gold: '#ffca3a',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(123, 58, 255, 0.25)',
      },
    },
  },
  plugins: [],
};
