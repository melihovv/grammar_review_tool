'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const config = require('./config');
const utils = require('./utils');
const baseWebpackConfig = require('./webpack.base.conf');

const NODE_ENV = process.env.NODE_ENV || 'production';

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({
      sourceMap: config.production.sourceMap,
      extract: true,
    }),
  },
  devtool: config.production.sourceMap ? '#source-map' : false,
  output: {
    path: config.production.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.production.sourceMap,
      extract: true,
    }),
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),
    new HtmlWebpackPlugin({
      filename: NODE_ENV === 'testing' ? 'index.html' : config.production.index,
      template: './resources/assets/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      // Necessary to consistently work with multiple chunks via
      // CommonsChunkPlugin.
      chunksSortMode: 'dependency',
    }),
    // Split vendor js into its own file.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module, count) => {
        // Any required modules inside node_modules are extracted to vendor.
        return module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource
            .indexOf(path.join(__dirname, '../../../node_modules')) === 0;
      },
    }),
    // Extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
    }),
  ],
});

if (config.production.gzip) {
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.production.gzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8,
    })
  );
}

module.exports = webpackConfig;
