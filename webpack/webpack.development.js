const path = require('path');

const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  devServer: {
    contentBase: path.resolve(__dirname, '../build'),
    historyApiFallback: true,
    overlay: true,
  },
  mode: 'development',
});
