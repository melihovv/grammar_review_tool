'use strict';

const path = require('path');
const merge = require('webpack-merge');

process.env.NODE_ENV = 'testing';
const baseConfig = require('../../build/webpack.base.conf');
const utils = require('../../build/utils');

const projectRoot = path.resolve(__dirname, '../../');
const isTravis = process.env.TRAVIS === 'true';
const isWebStorm = process.env.WEBSTORM === 'true';

const webpackConfig = merge(baseConfig, {
  module: {
    loaders: utils.styleLoaders(),
  },
  devtool: '#inline-source-map',
});

delete webpackConfig.entry;

module.exports = (config) => {
  const configuration = {
    basePath: projectRoot,
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox'],
      },
      Chrome_with_debugging: {
        base: 'Chrome',
        chromeDataDir: projectRoot + '/test/unit/.chrome',
      },
    },
    files: [
      './test/unit/tests.js',
    ],
    preprocessors: {
      './test/unit/tests.js': ['webpack', 'sourcemap'],
    },
    frameworks: ['mocha', 'sinon-chai'],
    plugins: [
      ['coverage', {ignore: ['*.spec.js', 'Lemon*.js']}],
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-mocha',
      'karma-sinon-chai',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-webpack',
    ],
    reporters: isWebStorm ? [] : ['spec', 'coverage'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    coverageReporter: isWebStorm ? {} : {
      dir: './test/unit/coverage',
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
          excludes: [
            'src/components/**/*.vue',
            'src/parser/Lemon/*.js',
            'src/components/grammar-view/tree2html/*.js',
          ],
        },
      },
    },
  };

  if (isTravis) {
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
};
