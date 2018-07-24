const path = require('path');
const serverlessWebpack = require('serverless-webpack');

module.exports = {
  entry: serverlessWebpack.lib.entries,
  target: 'node',
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      loader: ['babel-loader'],
      include: __dirname,
      exclude: /node_modules/,
    }],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist', 'lambda'),
    filename: '[name].js',
  },
};
