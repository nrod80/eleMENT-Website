const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, 'src/');
const DIST_DIR = path.resolve(__dirname, 'dist/');

const config = {
  entry: `${APP_DIR}/js/index.jsx`,
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      include: APP_DIR
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
      loader: 'file-loader?name=public/fonts/[name].[ext]'
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'file-loader?name=public/images/[name].[ext]',
        'image-webpack-loader'
      ]
    }]
  }
};

module.exports = config;

