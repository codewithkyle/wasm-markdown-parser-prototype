const path = require('path');
module.exports = {
  entry: "./app/app.js",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    extensions: [".js", ".json", ".css"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "app.js",
  },
  mode: process.env.NODE_ENV
};