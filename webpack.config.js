const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/scss/style.scss'],
  output: {
    filename: '[name].html',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
       test: /\.pug$/,
       loader: 'pug-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ]
  },
  devServer: {
    host: 'localhost',
    port: 5500,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/pug/index.pug'
    }),
    new CopyPlugin([
      {
        from: 'src/img',
        to: 'img',
      },
    ])
  ]
};