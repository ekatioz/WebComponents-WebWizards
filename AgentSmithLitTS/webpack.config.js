const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  plugins: [
    new CopyPlugin([
      { from: 'index.html' },
    ]),
  ],
};