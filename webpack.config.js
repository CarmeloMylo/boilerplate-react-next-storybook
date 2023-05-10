const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/components/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'boilerplate-react-next-storybook',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        components: {
          test: /[\\/]src[\\/].*\.jsx?$/,
          name: 'components',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.scss$/,
         use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
         ]
       }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      'boilerplate-react-next-storybook': path.resolve(
        __dirname,
        'node_modules/boilerplate-react-next-storybook/dist'
      ),
    },
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
      path.resolve(__dirname, 'src/components'),
      path.resolve(__dirname, 'dist'),
    ],
  },
  devServer: {
    contentBase: './dist',
    publicPath: '/',
  },
  externals: {
    react: 'commonjs react',
  },
};
