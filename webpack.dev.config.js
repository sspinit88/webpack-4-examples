const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = merge(baseConfig, {
  devServer: {
    contentBase: './dist',
  }
});

module.exports = new Promise((res, rej) => {
  res(devConfig);
});

