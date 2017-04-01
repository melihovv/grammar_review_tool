'use strict'

import {TerminalNodeImpl} from 'antlr4/tree/Tree'
import {LemonParserVisitor} from 'js/Parser/Lemon/LemonParserVisitor'
import {LemonParser} from 'js/Parser/Lemon/LemonParser'
import Helper from './helper'

export default class LemonTree2HtmlVisitor extends LemonParserVisitor {
  /**
   * @param {CommonTokenStream} tokens
   * @param {Object} grammar
   * @param {Object} owner
   * @param {Array} comments
   * @param {AccessManager} accessManager
   * @param {Object} user
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
    if (Array.isArray(ctx)) {
      return ctx.map(function (child) {
        return child.accept(this);
      }, this);
    } else {
      return ctx.accept(this);
    }
  }

  /**
   * @param {FileContext} ctx
   */
  visitFile(ctx) {
    this._buffer += this.helper.textOfHiddenTokensToLeft(
      ctx.children[0].start.tokenIndex
    )

    this.visitChildren(ctx)

    this.html += `<div class="grammar-view__info">${this.grammar.name}</div>`
    this.html += '<table class="grammar-view__table">'

    let number = 1
    const lines = Helper.split(this._buffer)

    for (const line of lines) {
      this.html += `
<tr class="grammar-view__row" data-row="${number}" id="L${number}">
  <td class="grammar-view__row-number">${number}</td>
  <td class="grammar-view__code">`

      if (this.accessManager.canUserComment(this.user)) {
        this.html += `<a class="button button_type_link button_theme_simple grammar-view__add-comment-to-row-leftside-button"
                         href="#">+</a>`
      }

      this.html += `${line}</td></tr>`

      this.html += this.helper.outputRowComments(number)

      ++number
    }

    this.html += '</table>'
  }

  /**
   * @param {GrammarRuleContext} ctx
   */
  visitGrammarRule(ctx) {
    this.visitLeftSide(ctx.leftSide())

    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.ASSIGN(), {closeSpan: true})

    this.visitRightSide(ctx.rightSide())
  }

  /**
   * @param {LeftSideContext} ctx
   */
  visitLeftSide(ctx) {
    const symbol = ctx.children[0].getSymbol()
    let attrs = `class="grammar-view__ls-nonterminal grammar-view__symbol"`
    attrs += `data-column="${symbol.column}"`

    this._buffer += '<div class="grammar-view__symbol-wrapper">'
    this._buffer += `<span ${attrs}>`

    this.visitTerminal(ctx.NONTERMINAL(), {closeSpan: true})
    this._buffer += this._nonTerminalIcons

    this._buffer = this.helper.outputSymbolComments(symbol.line, symbol.column)

    this._buffer += '</div>'

    if (ctx.children.length > 1) {
      this.visitParam(ctx.param())
    }
  }

  /**
   * @param {RightSideContext} ctx
   */
  visitRightSide(ctx) {
    ctx.children.forEach(child => {
      if (child instanceof LemonParser.SymbolContext) {
        this.visitSymbol(child, {fromRightSide: true})
      } else if (child instanceof LemonParser.ParamContext) {
        this.visitParam(child)
      } else if (child instanceof TerminalNodeImpl) {
        this._buffer += '<span class="grammar-view__punct">'
        this.visitTerminal(child, {closeSpan: true})
      } else if (child instanceof LemonParser.PrecedenceContext) {
        this.visitPrecedence(child)
      } else if (child instanceof LemonParser.CodeBlockContext) {
        this.visitCodeBlock(child)
      }
    })
  }

  /**
   * @param {PrecedenceContext} ctx
   */
  visitPrecedence(ctx) {
    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.LBRACKET(), {closeSpan: true})

    this._buffer += '<span class="grammar-view__param">'
    this.visitTerminal(ctx.TERMINAL(), {closeSpan: true})

    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.RBRACKET(), {closeSpan: true})
  }

  /**
   * @param {SymbolContext} ctx
   * @param {bool} [fromParam=false]
   * @param {bool} [fromRightSide=false]
   * @param {bool} [fromDirective=false]
   */
  visitSymbol(ctx, {
    fromParam = false,
    fromRightSide = false,
    fromDirective = false,
  } = {}) {
    const child = ctx.children[0]
    const symbol = child.getSymbol()
    const column = `data-column="${symbol.column}"`

    if (fromParam) {
      this._buffer += '<span class="grammar-view__param">'
      this.visitTerminal(child, {closeSpan: true})
    } else if (fromRightSide) {
      const text = child.getText()

      this._buffer += '<div class="grammar-view__symbol-wrapper">'

      if (text[0] === text[0].toUpperCase()) { // Terminal.
        const className = 'class="grammar-view__terminal grammar-view__symbol"'
        this._buffer += `<span ${className} ${column}>`
        this.visitTerminal(child, {closeSpan: true})
        this._buffer += this._terminalIcons
      } else { // Nonterminal.
        const className = 'class="grammar-view__rs-nonterminal grammar-view__symbol"'
        this._buffer += `<span ${className} ${column}>`
        this.visitTerminal(child, {closeSpan: true})
        this._buffer += this._nonTerminalIcons
      }

      this._buffer = this.helper.outputSymbolComments(symbol.line, symbol.column)

      this._buffer += '</div>'
    } else if (fromDirective) {
      this._buffer += '<span class="grammar-view__id">'
      this.visitTerminal(child, {closeSpan: true})
    }
  }

  /**
   * @param {ParamContext} ctx
   */
  visitParam(ctx) {
    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.children[0], {closeSpan: true})

    this.visitSymbol(ctx.symbol(), {fromParam: true})

    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.children[2], {closeSpan: true})
  }

  /**
   * @param {DirectiveContext} ctx
   */
  visitDirective(ctx) {
    const children = ctx.children

    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.PERCENT(), {closeSpan: true})

    this._buffer += '<span class="grammar-view__directive">'
    this.visitTerminal(children[1], {closeSpan: true})

    for (let i = 2; i < children.length; ++i) {
      if (children[i] instanceof LemonParser.SymbolContext) {
        this.visitSymbol(children[i], {fromDirective: true})
      } else if (children[i] instanceof LemonParser.CodeBlockContext) {
        this.visitCodeBlock(children[i])
      } else if (children[i] instanceof TerminalNodeImpl) {
        if (children[i].getText() === '.') {
          this._buffer += '<span class="grammar-view__punct">'
        } else {
          this._buffer += '<span class="grammar-view__id">'
        }
        this.visitTerminal(children[i], {closeSpan: true})
      }
    }
  }

  /**
   * @param {CodeBlockContext} ctx
   */
  visitCodeBlock(ctx) {
    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.BEGIN_CODE(), {closeSpan: true})

    const children = ctx.children
    for (let i = 1; i < children.length - 1; ++i) {
      this.visitTerminal(children[i])
    }

    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.END_CODE(), {closeSpan: true})
  }

  /**
   * @param {TerminalNodeImpl} ctx
   * @param {bool} [closeSpan=false]
   */
  visitTerminal(ctx, {closeSpan = false} = {}) {
    this._buffer += ctx.symbol.text
    if (closeSpan) {
      this._buffer += '</span>'
    }

    this._buffer += this.helper.textOfHiddenTokensToRight(ctx.symbol.tokenIndex)
  }
}
