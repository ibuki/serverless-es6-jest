const path = require( 'path');

module.exports = {
  entry: './main.js',
  target: 'node',
  module: {
    rules: [{
      test: /\.js$/,
      loader: ['babel-loader'],
      include: __dirname,
      exclude: /node_modules/,
    }]
  },
  optimization: {
    minimize: false
  },
};