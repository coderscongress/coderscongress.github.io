const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: { index: '/', disableDotRule: true },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.jsx?/,
        exclude: '/node_modules',
        use: ['babel-loader'],
      },
      {
        test: /\.(woff|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        // write image files under 10k to inline or copy image files over 10k
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new CaseSensitivePathsWebpackPlugin({ debug: true }),
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  output: {
    filename: 'main.js',
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
  },
};