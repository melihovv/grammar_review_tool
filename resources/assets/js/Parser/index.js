'use strict'

import {InputStream} from 'antlr4/InputStream'
import {CommonTokenStream} from 'antlr4/CommonTokenStream'
import {LemonLexer} from './Lemon/LemonLexer'
import {LemonParser} from './Lemon/LemonParser'
import ErrorListener from './error-listener'

/**
 * Grammar parser.
 */
class Parser {
  static types = [
    'lemon',
  ]

  constructor(type) {
    if (Parser.types.indexOf(type) === -1) {
      throw new Error('Unsupported grammar format')
    }

    this.tree = null
    this.parser = null
    this.type = type
    this.errorListener = new ErrorListener()
  }

  /**
   * Parse grammar.
   * @param {string} input
   * @returns {FileContext}
   */
  parse(input) {
    const chars = new InputStream(input)
    const lexer = this.lexerFactory(chars)
    const tokens = new CommonTokenStream(lexer)

    this.parser = this.parserFactory(tokens)
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

  lexerFactory(input) {
    switch (this.type) {
      case 'lemon': return new LemonLexer(input)
      case 'bison': throw new Error('Not implemented yet')
    }
  }

  parserFactory(tokens) {
    switch (this.type) {
      case 'lemon': return new LemonParser(tokens)
      case 'bison': throw new Error('Not implemented yet')
    }
  }
}

export default Parser
