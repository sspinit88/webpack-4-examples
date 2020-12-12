const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: `./src/index.js`,
  output: {
    path: path.resolve(__dirname, `dist`),
    filename: `bundle.js`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }
    ],
  },
  resolve: {
    extensions: [
      '.js',
      'jsx',
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'Webpack-4-examples',
        filename: 'index.html'
      },
    )
  ]
};

module.exports = config;
