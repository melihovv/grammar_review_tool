'use strict';

const path = require('path');
const webpack = require('webpack');

const shell = require('shelljs');
shell.env.NODE_ENV = 'production';

const config = require('./config');
const webpackConfig = require('./webpack.prod.conf');

const assetsPath = path.join(
  config.production.assetsRoot,
  config.production.assetsSubDirectory
);

shell.rm('-rf', assetsPath);
shell.mkdir('-p', assetsPath);
shell.cp('-R', `${config.production.staticDir}/`, assetsPath);

webpack(webpackConfig, (err, stats) => {
  if (err) {
    throw err;
  }

  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }) + '\n'
  );
});
