'use strict';

const del = require('del');
const webpack = require('webpack');
const glob = require('glob');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const env = process.env.NODE_ENV;
let config = {};

if (env === 'test') {
  config = {
    entry: glob.sync('./src/js/**/*.spec.js'),
    output: {
      path: path.resolve(__dirname, '/temp/tests'),
      filename: 'tests.js',
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'stage-2'],
            cacheDirectory: true,
          },
        },
      ],
    },
    plugins: [
      {
        apply: (compiler) => {
          del.sync([
            compiler.options.output.path + '/**',
          ], {force: true});
        },
      },
      new webpack.NoErrorsPlugin(),
    ],
    node: {
      fs: 'empty',
    },
  };
} else {
  config = {
    entry: {
      scripts: './src/js',
      styles: './src/styles',
    },
    output: {
      path: path.resolve(__dirname, '/public/assets'),
      filename: env === 'prod' ? '[name].[chunkhash].js' : '[name].js',
    },
    resolve: {
      extensions: ['', '.js', '.styl'],
    },
    devtool: env === 'dev' ? 'source-map' : null,
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.y$/,
          loader: 'raw',
        },
        {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract('style', 'css!stylus?resolve url'),
        },
        {
          test: /\.(png|jpe?g|gif|svg|ttf|eot|woff|woff2)$/,
          loader: 'file',
        },
      ],
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin('[name].css', {allChunks: true}),
    ],
    node: {
      fs: 'empty',
    },
  };

  if (env === 'prod') {
    config.plugins.push(
      {
        apply: (compiler) => {
          del.sync([
            compiler.options.output.path + '/**',
          ]);
        },
      },
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: true,
          unsafe: true,
        },
      }),
      new ManifestPlugin({
        fileName: 'rev-manifest.json',
      })
    );
  }
}

module.exports = config;
