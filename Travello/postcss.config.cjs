module.exports = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    'postcss-preset-env': {
      stage: 1, // Allows you to use modern CSS features
      features: {
        'custom-properties': true, // Enable CSS custom properties
        'nesting-rules': true, // Enable nesting if you're using it
      },
    },
  },
};
