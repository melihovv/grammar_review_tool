'use strict'

import {TerminalNodeImpl} from 'antlr4/tree/Tree'
import {BisonParserVisitor} from 'js/Parser/Bison/BisonParserVisitor'
import {BisonParser} from 'js/Parser/Bison/BisonParser'
import Helper from './helper'

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
    this.helper = new Helper(
      tokens,
      grammar,
      owner,
      comments,
      accessManager,
      user
    )
  }

  visit(ctx) {
    Helper.visit(ctx, this)
  }

  /**
   * @param {FileContext} ctx
   */
  visitFile(ctx) {
    this.helper.visitFile(ctx, this, this._buffer, this.html)
  }

  // visitPrologueDeclaration(ctx) {
  //   console.log(ctx)
  // }

  /**
   * @param {DirectiveContext} ctx
   */
  visitDirective(ctx) {
    this._buffer += '<span class="grammar-view__directive">'
    this.visitTerminal(ctx.children[0], {closeSpan: true})
  }

  // visitGrammarDeclaration(ctx) {
  //
  // }
  //
  // visitPrologue(ctx) {
  //
  // }

  /**
   * @param {CodeContext} ctx
   */
  visitCode(ctx) {
    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.BRACED_CODE_START(), {closeSpan: true})

    const children = ctx.children
    for (let i = 1; i < children.length - 1; ++i) {
      this.visitTerminal(children[i])
    }

    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.BRACED_CODE_CLOSE(), {closeSpan: true})
  }

  // visitPredicate(ctx) {
  //
  // }
  //
  // visitTagRule(ctx) {
  //
  // }
  //
  // visitSymbolDeclaration(ctx) {
  //
  // }
  //
  // visitPrecedenceDeclaration(ctx) {
  //
  // }
  //
  // visitPrecedenceDeclarator(ctx) {
  //
  // }
  //
  // visitTag(ctx) {
  //
  // }
  //
  // visitSymbolDef(ctx) {
  //
  // }
  //
  // visitGrammarRule(ctx) {
  //
  // }
  //
  // visitRulesOrGrammarDeclaration(ctx) {
  //
  // }
  //
  // visitRules(ctx) {
  //
  // }
  //
  // visitRhses(ctx) {
  //
  // }
  //
  // visitRhs(ctx) {
  //
  // }
  //
  // visitVariable(ctx) {
  //
  // }
  //
  // visitValue(ctx) {
  //
  // }
  //
  // visitId(ctx) {
  //
  // }
  //
  // visitSymbol(ctx) {
  //
  // }
  //
  // visitRef(ctx) {
  //
  // }
  //
  // visitEpilogue(ctx) {
  //
  // }

  /**
   * @param {TerminalNodeImpl} ctx
   * @param {Object} params
   */
  visitTerminal(ctx, params = {}) {
    this.helper.visitTerminal(ctx, this, params)
  }
}
