'use strict'

const context = require.context('../../js', true, /\.js$/)
context.keys().forEach(context)
