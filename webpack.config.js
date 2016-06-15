var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var autoprefixer = require('autoprefixer');

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
      { test: /\.scss$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader!postcss-loader!sass-loader' }, // use ! to chain loaders
      { test: /\.(png|jpg|webp)$/, include: path.resolve(__dirname, 'app'), loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};
