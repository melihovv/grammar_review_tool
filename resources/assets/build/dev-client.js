'use strict'

require('eventsource-polyfill')
const hotClient = require(
  'webpack-hot-middleware/client?noInfo=true&reload=true&'
  + 'path=__webpack_hmr&dynamicPublicPath=true'
)

hotClient.subscribe(event => {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
