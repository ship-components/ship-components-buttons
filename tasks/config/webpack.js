/**
 * Webpack
 *
 * ---------------------------------------------------------------
 *
 * Module loader, JSX transform, Minification, Sourcemaps
 *
 * For usage docs see:
 *    https://github.com/webpack/grunt-webpack
 */

var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var postCssPlugins = require('../../libs/postCssPlugins');

// eslint-disable-next-line func-names
module.exports = function(grunt) {

  /** **************************************************************************
   * Build
   */
  var buildOptions = Object.assign({}, require('./webpack.config'), {
    // Clear default plugins so we can override through grunt
    plugins: []
  });

  console.log(buildOptions);

  grunt.config.set('webpack', {

    options: buildOptions,

    dev: {
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunks: 'all'
        })
      ]
    },

    dist : {
      output: {
        filename: '[name].min.js'
      },

      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].min.css',
          chunks: 'all'
        })
      ],
      optimization: {
        minimizer: [
          new UglifyJsPlugin()
        ]
      }
    }
  });

  /** **************************************************************************
   * Development Server
   */
  var serverOptions = Object.assign({}, require('./webpack.config'), {
    // plugins: [],
    entry : {
      bundle: path.resolve(__dirname, '../../examples/ButtonsExample.jsx')
    },
    output: {
      filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'eval',
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
  });

  // Remove Extract Plugin. Gotta clone to prevent changing above config
  serverOptions.module = Object.assign({}, serverOptions.module);
  serverOptions.module.rules = serverOptions.module.rules.slice(0);
  serverOptions.module.rules.splice(serverOptions.module.rules.length - 1);
  serverOptions.module.rules.push({
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
  });
// console.log(serverOptions)
  grunt.config.set('webpack-dev-server', {
    options: {
      webpack: serverOptions,
      host: 'localhost',
      contentBase: 'examples/',
      publicPath: '/assets/',
      filename: 'bundle.js',
      keepalive: true,
      inline: true,
      hot: true,
      quiet: false,
      noInfo: false
    },

    dev: {}
  });

  grunt.loadNpmTasks('grunt-webpack');
};
