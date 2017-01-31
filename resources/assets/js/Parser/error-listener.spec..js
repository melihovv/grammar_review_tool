/* eslint-env mocha */

'use strict'

import ErrorListener from './error-listener'

describe('error-listener', () => {
  const listener = new ErrorListener()

  it('should return errors', () => {
    listener.getErrors().should.be.a('array')
  })
})
