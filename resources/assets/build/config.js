'use strict'

const path = require('path')
const merge = require('webpack-merge')

const prodEnv = {
  NODE_ENV: '"production"',
}

const devEnv = merge(prodEnv, {
  NODE_ENV: '"development"',
})

const testEnv = merge(devEnv, {
  NODE_ENV: '"testing"',
})

const productionConfig = {
  env: prodEnv,
  index: path.resolve(__dirname, '../../../public/index.html'),
  assetsRoot: path.resolve(__dirname, '../../../public'),
  assetsSubDirectory: 'assets',
  assetsPublicPath: '/',
  sourceMap: false,
  staticDir: 'resources/assets/static',
  gzip: process.env.ENABLE_GZIP,
  gzipExtensions: [
    'js',
    'css',
    'png',
    'jpeg',
    'jpg',
    'gif',
    'svg',
    'woff',
    'woff2',
    'eot',
    'ttf',
    'otf',
  ],
}

const developmentConfig = merge(productionConfig, {
  env: devEnv,
  port: 8080,
  proxyTable: {},
  cssSourceMap: true,
})

const testingConfig = merge(developmentConfig, {
  env: testEnv,
  port: 8081,
  baseUrl: 'http://localhost:8081',
})

module.exports = {
  production: productionConfig,
  development: developmentConfig,
  testing: testingConfig,
}
