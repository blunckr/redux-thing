module.exports = {
  entry: "./app/main.js",
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: "babel" }
    ]
  },
  devServer: {
    contentBase: './app'
  }
};
