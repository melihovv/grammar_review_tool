'use strict'

import {InputStream} from 'antlr4/InputStream'
import {CommonTokenStream} from 'antlr4/CommonTokenStream'
import {LemonLexer} from './Lemon/LemonLexer'
import {LemonParser} from './Lemon/LemonParser'
import ErrorListener from './error-listener'

/**
 * Lemon grammar parser.
 */
class Parser {
  constructor() {
    this.tree = null
    this.parser = null
    this.errorListener = new ErrorListener()
  }

  /**
   * Parse lemon grammar.
   * @param {string} input
   * @returns {FileContext}
   */
  parse(input) {
    const chars = new InputStream(input)
    const lexer = new LemonLexer(chars)
    const tokens = new CommonTokenStream(lexer)

    this.parser = new LemonParser(tokens)
    this.parser.buildParseTrees = true

    this.parser.removeErrorListeners()
    this.parser.addErrorListener(this.errorListener)

    this.tree = this.parser.file()

    if (this.parser._syntaxErrors > 0) {
      this.tree = null
      throw new Error('Input contains syntax errors')
    }

    return this.tree
  }

  /**
   * Get errors.
   * @return {Array}
   */
  getErrors() {
    return this.errorListener.getErrors()
  }
}

export default Parser
