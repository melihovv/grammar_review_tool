'use strict';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');
const config = require('./config');

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpackConfig = NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf');

const port = process.env.PORT || config[NODE_ENV].port;
const proxyTable = config.development.proxyTable;

const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false,
  },
});

const hotMiddleware = require('webpack-hot-middleware')(compiler);

// Force page reload when html-webpack-plugin template changes.
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({action: 'reload'});
    cb();
  });
});

// Proxy api requests.
Object.keys(proxyTable).forEach((context) => {
  let options = proxyTable[context];

  if (typeof options === 'string') {
    options = {target: options};
  }

  app.use(proxyMiddleware(context, options));
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// Serve webpack bundle output.
app.use(devMiddleware);

// Enable hot-reload and state-preserving.
// Compilation error display.
app.use(hotMiddleware);

// Serve pure static assets.
const staticPath = path.posix.join(
  config.development.assetsPublicPath,
  config.development.assetsSubDirectory
);
app.use(staticPath, express.static('./static'));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port + '\n');
});
