var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'hidden-source-map',
  entry: {
    'main': path.resolve(__dirname, 'app/main.js'),
    'main-persona-3': path.resolve(__dirname, 'app/main-persona-3.js'),
    'thanks': path.resolve(__dirname, 'app/thanks.js'),
    'thanks-persona-3': path.resolve(__dirname, 'app/thanks-persona-3.js')
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.scss$/, include: path.resolve(__dirname, 'app'), loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader?souceMap")}, // use ! to chain loaders
      { test: /\.(png|jpg|webp)$/, include: path.resolve(__dirname, 'app'), loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("./css/[name].css"),
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html' },
      { from: './app/index.html', to: 'index-persona-3.html' },
      { from: './app/thanks.html', to: 'thanks.html' },
      { from: './app/thanks.html', to: 'thanks-persona-3.html' },
      { from: './app/flexible.js', to: 'flexible.js' }
    ]),
  ]
};
