'use strict'

import {ErrorListener as AntlrErrorListener} from 'antlr4/error/ErrorListener'

class ErrorListener extends AntlrErrorListener {
  constructor() {
    super()

    this.errors = []
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push(`line ${line}:${column} ${msg}`)
  }

  /**
   * Get errors.
   * @return {Array}
   */
  getErrors() {
    return this.errors
  }
}

export default ErrorListener
