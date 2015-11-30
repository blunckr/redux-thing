/*global process require module*/
var webpack = require('webpack');

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  devServer: {
    contentBase: './app'
  },
  plugins: [
    new webpack.DefinePlugin({
      DEV_TOOLS: process.env.DEV_TOOLS || 'false'
    })
  ]
};
