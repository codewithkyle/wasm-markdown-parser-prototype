const path = require('path');
module.exports = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "app.js",
  },
  mode: "development"
};