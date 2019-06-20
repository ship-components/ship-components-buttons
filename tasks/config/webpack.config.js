var webpack = require('webpack');
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var postCssPlugins = require('../../libs/postCssPlugins');

module.exports = {
  // Where to start
  entry: {
    Buttons: path.resolve(__dirname, '../../src/index.js')
  },

  // Where to output
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },

  externals: {
    classnames: true,
    'prop-types': true,
    react: 'React',
    'react-dom': true,
    'ship-components-highlight-click': true,
    'react-transition-group': true
  },

  module: {
    // preLoaders: [],
    rules: [
      // ES6/JSX for App
      {
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // ES6/JSX for external modules
      {
        test: /\.(jsx?|es6)$/,
        include: [
          /ship-components-.*[\/\\]src/
        ],
        loader: 'babel-loader'
      },
      // Ensure 'use strict' is everywhere
      {
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        loader: 'strict-loader'
      },
      // CSS Modules
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]--[local]'
              }
            }
          },
          {
            // postcss
            loader: 'postcss-loader',
            options: {
              plugins: () => postCssPlugins()
            }
          }
        ]
      }
    ]
  },

  stats: {
    children: false,
    colors: true,
    modules: false,
    reasons: true
  },

  resolve: {
    extensions: ['.js', '.jsx', '.es6'],
    modules: [
      path.resolve(__dirname, '../../node_modules')
    ]
  },

  resolveLoader: {
    modules: [
      path.resolve(__dirname, '../../node_modules')
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        eslint: {
          // Strict linting enforcing
          failOnWarning: false
        }
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunks: 'all'
    })
  ],

  devtool: 'source-map'
};
