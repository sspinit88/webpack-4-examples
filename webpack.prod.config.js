const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const prodConfig = merge(baseConfig, {
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
});

module.exports = new Promise((res, rej) => {
  res(prodConfig);
});
