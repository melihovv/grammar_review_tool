'use strict'

import {TerminalNodeImpl} from 'antlr4/tree/Tree'
import {LemonParserVisitor} from 'js/Parser/Lemon/LemonParserVisitor'
import {LemonParser} from 'js/Parser/Lemon/LemonParser'
import common from '../common'

/**
 * @extends LemonParserVisitor
 */
class Tree2HtmlVisitor extends LemonParserVisitor {
  /**
   * Create Tree2HtmlVisitor.
   * @param {CommonTokenStream} tokens
   * @param {Object} grammar
   * @param {Object} owner
   * @param {Array} comments
   * @param {AccessManager} accessManager
   * @param user
   * @returns {Tree2HtmlVisitor}
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
    this._newLineRegex = /\r\n|\n|\r/

    this._searchIcon = '<span class="glyphicon glyphicon-search grammar-view__search-symbol-icon"></span>'
    this._leftIcon = '<span class="glyphicon grammar-view__l-icon">L</span>'
    this._rightIcon = '<span class="glyphicon grammar-view__r-icon">R</span>'
    this._terminalIcons = `<div class="grammar-view__symbol-icons">${this._searchIcon}</div>`
    this._nonTerminalIcons = `<div class="grammar-view__symbol-icons">${this._searchIcon}${this._leftIcon}${this._rightIcon}</div>`
  }

  /**
   * @param {FileContext} ctx
   */
  visitFile(ctx) {
    this._buffer
      += this._textOfHiddenTokensToLeft(ctx.children[0].start.tokenIndex)

    ctx.children.forEach(child => {
      if (child instanceof LemonParser.GrammarRuleContext) {
        this.visitGrammarRule(child)
      } else {
        this.visitDirective(child)
      }
    })

    this.html += `<div class="grammar-view__info">${this.grammar.name}</div>`
    this.html += '<table class="grammar-view__table">'

    let number = 1
    const lines = this._buffer.split(this._newLineRegex)

    for (const line of lines) {
      this.html += `
<tr class="grammar-view__row" data-row="${number}">
  <td class="grammar-view__row-number">${number}</td>
  <td class="grammar-view__code">`

      if (this.accessManager.canUserComment(this.user)) {
        this.html += `<a class="button button_type_link button_theme_simple grammar-view__add-comment-to-row-leftside-button"
                         href="#">+</a>`
      }

      this.html += `${line}</td></tr>`

      this._outputRowComments(number)

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

    this._outputSymbolComments(symbol.line, symbol.column)

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

      this._outputSymbolComments(symbol.line, symbol.column)

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

    this._buffer += this._textOfHiddenTokensToRight(ctx.symbol.tokenIndex)
  }

  /**
   * @param {number} index
   * @returns {string}
   * @private
   */
  _textOfHiddenTokensToLeft(index) {
    return this._tokensText(this.tokens.getHiddenTokensToLeft(index))
  }

  /**
   * @param {number} index
   * @returns {string}
   * @private
   */
  _textOfHiddenTokensToRight(index) {
    return this._tokensText(this.tokens.getHiddenTokensToRight(index))
  }

  /**
   * @param {Array} tokens
   * @returns {string}
   * @private
   */
  _tokensText(tokens) {
    tokens = tokens || []
    let result = ''
    for (const token of tokens) {
      result += token.text
    }
    return result
  }

  /**
   * Checks if there are any comments on passed line and column.
   * @param {int} row
   * @param {int} column
   * @returns {boolean}
   * @private
   */
  _isAnySymbolCommentsOnLine(row, column) {
    return this.comments.some(comment => {
      return comment.row === row && comment.column === column
    })
  }

  /**
   * Returns all symbol comments on passed line and column.
   * @param {int} row
   * @param {int} column
   * @returns {Array}
   * @private
   */
  _allSymbolCommentsOn(row, column) {
    return this.comments.filter(comment => {
      return comment.row === row && comment.column === column
    })
  }

  /**
   * Checks if there are any row comments on passed line.
   * @param {int} row
   * @returns {boolean}
   * @private
   */
  _isAnyRowCommentsOnLine(row) {
    return this.comments.some(comment => {
      return comment.row === row && comment.column === -1
    })
  }

  /**
   * Returns all row comments on passed line.
   * @param {int} row
   * @returns {Array}
   * @private
   */
  _allRowCommentsOn(row) {
    return this.comments.filter(comment => {
      return comment.row === row && comment.column === -1
    })
  }

  /**
   * Outputs all symbol comments.
   * @param {int} row
   * @param {int} column
   * @private
   */
  _outputSymbolComments(row, column) {
    if (this._isAnySymbolCommentsOnLine(row, column)) {
      const comments = this._allSymbolCommentsOn(row, column)

      this._buffer += `<span class="grammar-view__amount-of-comments">${comments.length}</span>`
      this._buffer += '<div class="grammar-view__symbol-comments">'

      this._buffer += this._commentsTemplate(comments)

      this._buffer += '</div>'
    }
  }

  /**
   * Outputs all symbol comments.
   * @param {int} row
   * @private
   */
  _outputRowComments(row) {
    if (this._isAnyRowCommentsOnLine(row)) {
      this.html += '<tr><td class="grammar-view__line-comments" colspan="2">'

      const comments = this._allRowCommentsOn(row)
      this.html += this._commentsTemplate(comments)

      this.html += `</td></tr>`
    }
  }

  /**
   * Comments template.
   * @param {Array} comments
   * @private
   */
  _commentsTemplate(comments) {
    let buffer = ''

    for (const comment of comments) {
      buffer += this._commentTemplate(comment)
    }

    if (this.accessManager.canUserComment(this.user)) {
      buffer += `${common.addCommentToRowButton}`
    }

    return buffer
  }

  /**
   * Comment template.
   * @param {Object} comment
   * @private
   */
  _commentTemplate(comment) {
    return common.commentTemplate(
      comment.user.name,
      comment.content,
      comment.id,
      this.accessManager.canUserUpdateOrDeleteComment(this.user, comment)
    )
  }
}

export default Tree2HtmlVisitor
