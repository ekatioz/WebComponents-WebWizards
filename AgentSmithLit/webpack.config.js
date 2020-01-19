const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin([
      { from: 'node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js', to: 'webcomponentsjs/' },
      { from: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js', to: 'webcomponentsjs/' },
      { from: 'index.html' },
    ]),
  ],
};
