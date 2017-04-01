'use strict'

import {TerminalNodeImpl} from 'antlr4/tree/Tree'
import {BisonParserVisitor} from 'js/Parser/Bison/BisonParserVisitor'
import {BisonParser} from 'js/Parser/Bison/BisonParser'
import common from '../common'

export default class BisonTree2HtmlVisitor extends BisonParserVisitor {
  /**
   * @param {CommonTokenStream} tokens
   * @param {Object} grammar
   * @param {Object} owner
   * @param {Array} comments
   * @param {AccessManager} accessManager
   * @param {Object} user
   * @returns {BisonTree2HtmlVisitor}
   * @constructor
   */
  constructor(tokens, grammar, owner, comments, accessManager, user) {
    super()

    this.tokens = tokens
    this.grammar = grammar
    this.owner = owner
    this.comments = comments
    this.accessManager = accessManager
    this.user = user
    this.html = ''
    this._buffer = ''
  }
}
