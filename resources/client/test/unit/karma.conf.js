'use strict'

const path = require('path')
const merge = require('webpack-merge')
const shell = require('shelljs')

process.env.NODE_ENV = 'testing'
const baseConfig = require('../../build/webpack.base.conf.js')
const utils = require('../../build/utils')

const projectRoot = path.resolve(__dirname, '../../../..')
const isTravis = process.env.TRAVIS === 'true'
const isWebStorm = process.env.WEBSTORM === 'true'

const webpackConfig = merge(baseConfig, {
  module: {
    loaders: utils.styleLoaders(),
  },
  devtool: '#inline-source-map',
})

delete webpackConfig.entry

shell.rm('-rf', path.resolve(__dirname, './coverage'))

module.exports = config => {
  const configuration = {
    basePath: projectRoot,
    browsers: ['Chrome_with_debugging'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox'],
      },
      Chrome_with_debugging: {
        base: 'Chrome',
        chromeDataDir: projectRoot + '/resources/client/test/unit/.chrome',
        flags: [
          '--start-maximized',
        ],
      },
    },
    files: [
      './resources/client/test/unit/tests.js',
    ],
    preprocessors: {
      './resources/client/test/unit/tests.js': ['webpack', 'sourcemap'],
    },
    frameworks: ['mocha', 'sinon-chai'],
    reporters: isWebStorm ? [] : ['spec', 'coverage'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    coverageReporter: isWebStorm ? {} : {
      dir: path.join(__dirname, '/coverage'),
      reporters: [
        {type: 'lcov', subdir: '.'},
        {type: 'html', subdir: 'html'},
        {type: 'text-summary'},
      ],
      check: {
        each: {
          statements: 100,
          functions: 100,
          lines: 100,
        },
      },
    },
  }

  if (isTravis) {
    configuration.browsers = ['Chrome_travis_ci']
  }

  config.set(configuration)
}
