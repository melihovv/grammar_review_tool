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
    postLoaders: isWebStorm ? [] : [
      {
        test: /\.(js|vue)$/,
        loader: 'istanbul-instrumenter',
        exclude: /(\.spec\.js$|node_modules|Lemon|tree2html|test\/unit)/,
      },
    ],
  },
  devtool: '#inline-source-map',
});

delete webpackConfig.entry;

webpackConfig.module.loaders.some(function (loader, i) {
  if (loader.loader === 'babel') {
    loader.include = path.resolve(projectRoot, 'test/unit');
    return true;
  }
});

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
    exclude: [
      './src/config.js',
    ],
    preprocessors: {
      './test/unit/tests.js': ['webpack', 'sourcemap'],
    },
    frameworks: ['mocha', 'sinon-chai'],
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
