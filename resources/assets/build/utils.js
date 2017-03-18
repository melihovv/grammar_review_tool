'use strict'

const path = require('path')
const config = require('./config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV || 'production'

exports.assetsPath = p => {
  return path.posix.join(config[NODE_ENV].assetsSubDirectory, p)
}

exports.cssLoaders = options => {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: NODE_ENV === 'production',
      sourceMap: options.sourceMap,
    },
  }

  // Generate loader string to be used with extract text plugin.
  const generateLoaders = (loader, loaderOptions) => {
    const loaders = [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {indentedSyntax: true}),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus'),
  }
}

// Generate loaders for standalone style files (outside of .vue).
exports.styleLoaders = options => {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]

    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader,
    })
  }

  return output
}
