'use strict'

const path = require('path')
const webpack = require('webpack')
const config = require('./config')
const utils = require('./utils')

const NODE_ENV = process.env.NODE_ENV || 'production'

module.exports = {
  entry: {
    app: './resources/assets/js/index',
  },
  output: {
    path: config[NODE_ENV].assetsRoot,
    publicPath: config[NODE_ENV].assetsPublicPath,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.styl'],
    fallback: [path.join(__dirname, '../../../node_modules')],
    alias: {
      js: path.resolve(__dirname, '../js'),
      components: path.resolve(__dirname, '../js/components'),
      vue: 'vue/dist/vue.js',
    },
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../../../node_modules')],
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.y$/,
        loader: 'raw',
      },
      {
        test: /\.html$/,
        loader: 'vue-html',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config[NODE_ENV].env,
    }),
    new webpack.NoErrorsPlugin(),
  ],
  node: {
    fs: 'empty',
  },
  vue: {
    loaders: utils.cssLoaders(),
  },
}
