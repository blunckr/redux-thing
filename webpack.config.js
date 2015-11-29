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
  }
};
