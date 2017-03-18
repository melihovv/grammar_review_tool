'use strict'

const path = require('path')
const webpack = require('webpack')
const config = require('./config')
const utils = require('./utils')

const NODE_ENV = process.env.NODE_ENV || 'production'

module.exports = {
  entry: {
    app: './resources/assets/js/index',
    editor: './resources/assets/js/editor',
  },
  output: {
    path: config[NODE_ENV].assetsRoot,
    publicPath: config[NODE_ENV].assetsPublicPath,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.styl'],
    alias: {
      js: path.resolve(__dirname, '../js'),
      Components: path.resolve(__dirname, '../js/Components'),
      vue$: 'vue/dist/vue.common.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: utils.cssLoaders({
              extract: NODE_ENV === 'production',
              sourceMap: config[NODE_ENV].sourceMap,
            }),
          },
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
      },
      {
        test: /\.y$/,
        use: {
          loader: 'raw-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'vue-html-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]'),
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
          },
        },
      },
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery',
          },
          {
            loader: 'expose-loader',
            options: '$',
          }
        ],
      },
      {
        test: require.resolve(path.join(__dirname, '../js/Parser')),
        use: [
          {
            loader: 'expose-loader',
            options: 'Parser',
          },
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: require.resolve('brace'),
        loader: 'expose-loader',
        options: 'ace',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config[NODE_ENV].env,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  node: {
    fs: 'empty',
  },
}
