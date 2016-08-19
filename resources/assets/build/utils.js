'use strict';

const path = require('path');
const config = require('./config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'production';

exports.assetsPath = p => {
  return path.posix.join(config[NODE_ENV].assetsSubDirectory, p);
};

exports.cssLoaders = options => {
  options = options || {};

  // Generate loader string to be used with extract text plugin.
  const generateLoaders = (loaders) => {
    const sourceLoader = loaders.map((loader) => {
      let extraParamChar;

      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?');
        extraParamChar = '&';
      } else {
        loader = loader + '-loader';
        extraParamChar = '?';
      }

      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '');
    }).join('!');

    if (options.extract) {
      return ExtractTextPlugin.extract('vue-style-loader', sourceLoader);
    } else {
      return ['vue-style-loader', sourceLoader].join('!');
    }
  };

  return {
    css: generateLoaders(['css']),
    postcss: generateLoaders(['css']),
    less: generateLoaders(['css', 'less']),
    sass: generateLoaders(['css', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'sass']),
    stylus: generateLoaders(['css', 'stylus']),
    styl: generateLoaders(['css', 'stylus']),
  };
};

// Generate loaders for standalone style files (outside of .vue).
exports.styleLoaders = options => {
  var output = [];
  var loaders = exports.cssLoaders(options);

  for (var extension in loaders) {
    var loader = loaders[extension];

    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader,
    });
  }

  return output;
};
