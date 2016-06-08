var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 8080
  },
  entry: {
    'devserver': 'webpack/hot/dev-server',
    'wpdev': 'webpack-dev-server/client?http://localhost:8080',
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
      { test: /\.scss$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader!sass-loader' }, // use ! to chain loaders
      { test: /\.(png|jpg)$/, include: path.resolve(__dirname, 'app'), loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};
