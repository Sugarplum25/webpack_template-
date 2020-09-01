const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, 'src')
};
const PAGES_DIR = `${PATHS.src}/pug/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { test: /\.pug$/, loader: 'pug-loader' },
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
      { test: /\.(png|jpg|svg|gif)$/,
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
    ...PAGES.map(page => new HtmlWebpackPlugin ({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),
    new CopyPlugin([
      {
        from: 'src/img',
        to: 'img',
      },
    ])
  ]
};