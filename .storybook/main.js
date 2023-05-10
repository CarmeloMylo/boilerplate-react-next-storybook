const path = require('path');
module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, '../src'),
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }]
    });
    config.resolve.extensions.push('.js', '.jsx');
    return config;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  }
};