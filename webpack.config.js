
var path = require('path');
const marked = require("marked");

module.exports = {
    entry: './src/index.jsx',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    devServer: {
        port: 8080,
        publicPath: '/build/',
        historyApiFallback: true
    }
  };