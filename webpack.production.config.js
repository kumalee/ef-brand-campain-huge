var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'hidden-source-map',
  entry: {
    'main': path.resolve(__dirname, 'app/main.js'),
    'thanks': path.resolve(__dirname, 'app/thanks.js')
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.scss$/, include: path.resolve(__dirname, 'app'), loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader?souceMap")}, // use ! to chain loaders
      { test: /\.(png|jpg|webp)$/, include: path.resolve(__dirname, 'app'), loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
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
      { from: './app/thanks.html', to: 'thanks.html' },
      { from: './app/flexible.js', to: 'flexible.js' },
      { from: './app/webpjs-0.0.2.min.js', to: 'webpjs-0.0.2.min.js' },
      { from: './app/webpjs-0.0.2.swf', to: 'webpjs-0.0.2.swf' }
    ]),
  ]
};
