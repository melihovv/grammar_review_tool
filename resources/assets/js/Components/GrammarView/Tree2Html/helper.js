'use strict'

import common from '../common'

export default class Helper {
  static searchIcon = '<span class="glyphicon glyphicon-search grammar-view__search-symbol-icon" title="Search for rules which contain this symbol "></span>'
  static leftIcon = '<span class="glyphicon grammar-view__l-icon" title="Search for rules which contain this symbol in the left side">L</span>'
  static rightIcon = '<span class="glyphicon grammar-view__r-icon" title="Search for rules with the same right side">R</span>'
  static terminalIcons = `<div class="grammar-view__symbol-icons">${Helper.searchIcon}</div>`
  static nonterminalIcons = `<div class="grammar-view__symbol-icons">${Helper.searchIcon}${Helper.leftIcon}${Helper.rightIcon}</div>`

  /**
   * @param {CommonTokenStream} tokens
   * @param {Object} grammar
   * @param {Object} owner
   * @param {Array} comments
   * @param {AccessManager} accessManager
   * @param user
   */
  constructor(tokens, grammar, owner, comments, accessManager, user) {
    this.tokens = tokens
    this.grammar = grammar
    this.owner = owner
    this.comments = comments
    this.accessManager = accessManager
    this.user = user
  }

  /**
   * @param {number} index
   * @returns {string}
   */
  textOfHiddenTokensToLeft(index) {
    return Helper.tokensText(this.tokens.getHiddenTokensToLeft(index))
  }

  /**
   * @param {number} index
   * @returns {string}
   */
  textOfHiddenTokensToRight(index) {
    return Helper.tokensText(this.tokens.getHiddenTokensToRight(index))
  }

  /**
   * @param {Array} tokens
   * @returns {string}
   */
  static tokensText(tokens) {
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
   */
  isAnySymbolCommentsOnLine(row, column) {
    return this.comments.some(comment => {
      return comment.row === row && comment.column === column
    })
  }

  /**
   * Returns all symbol comments on passed line and column.
   * @param {int} row
   * @param {int} column
   * @returns {Array}
   */
  allSymbolCommentsOn(row, column) {
    return this.comments.filter(comment => {
      return comment.row === row && comment.column === column
    })
  }

  /**
   * Checks if there are any row comments on passed line.
   * @param {int} row
   * @returns {boolean}
   */
  isAnyRowCommentsOnLine(row) {
    return this.comments.some(comment => {
      return comment.row === row && comment.column === -1
    })
  }

  /**
   * Returns all row comments on passed line.
   * @param {int} row
   * @returns {Array}
   */
  allRowCommentsOn(row) {
    return this.comments.filter(comment => {
      return comment.row === row && comment.column === -1
    })
  }

  /**
   * Outputs all symbol comments.
   * @param {int} row
   * @param {int} column
   */
  outputSymbolComments(row, column) {
    let result = ''

    if (this.isAnySymbolCommentsOnLine(row, column)) {
      const comments = this.allSymbolCommentsOn(row, column)

      result += `<span class="grammar-view__amount-of-comments">${comments.length}</span>`
      result += '<div class="grammar-view__symbol-comments">'

      result += this.commentsTemplate(comments)

      result += '</div>'
    }

    return result
  }

  /**
   * Outputs all symbol comments.
   * @param {int} row
   * @return {String}
   */
  outputRowComments(row) {
    let result = ''

    if (this.isAnyRowCommentsOnLine(row)) {
      result = '<tr><td class="grammar-view__line-comments" colspan="2">'

      const comments = this.allRowCommentsOn(row)
      result += this.commentsTemplate(comments)

      result += `</td></tr>`
    }

    return result
  }

  /**
   * @param nonterminal
   * @param {BisonTree2HtmlVisitor|LemonTree2HtmlVisitor} _this
   */
  outputLeftSideNonterminal(nonterminal, _this) {
    const symbol = nonterminal.getSymbol()
    let attrs = `class="grammar-view__ls-nonterminal grammar-view__symbol"`
    attrs += `data-column="${symbol.column}"`

    _this._buffer += '<div class="grammar-view__symbol-wrapper">'
    _this._buffer += `<span ${attrs}>`

    let beforeHiddenText = Helper.nonterminalIcons
    beforeHiddenText += this.outputSymbolComments(symbol.line, symbol.column)

    _this.visitTerminal(nonterminal, {
      closeSpan: true,
      beforeHiddenText,
    })

    _this._buffer += '</div>'
  }

  /**
   * @param nonterminal
   * @param {BisonTree2HtmlVisitor|LemonTree2HtmlVisitor} _this
   */
  outputRightSideNonterminal(nonterminal, _this) {
    const symbol = nonterminal.getSymbol()
    let attrs = `class="grammar-view__rs-nonterminal grammar-view__symbol"`
    attrs += `data-column="${symbol.column}"`

    _this._buffer += '<div class="grammar-view__symbol-wrapper">'
    _this._buffer += `<span ${attrs}>`

    let beforeHiddenText = Helper.nonterminalIcons
    beforeHiddenText += this.outputSymbolComments(symbol.line, symbol.column)

    _this.visitTerminal(nonterminal, {
      closeSpan: true,
      beforeHiddenText,
    })

    _this._buffer += '</div>'
  }

  /**
   * @param terminal
   * @param {BisonTree2HtmlVisitor|LemonTree2HtmlVisitor} _this
   */
  outputRightSideTerminal(terminal, _this) {
    const symbol = terminal.getSymbol()
    let attrs = `class="grammar-view__terminal grammar-view__symbol"`
    attrs += `data-column="${symbol.column}"`

    _this._buffer += '<div class="grammar-view__symbol-wrapper">'
    _this._buffer += `<span ${attrs}>`

    let beforeHiddenText = Helper.terminalIcons
    beforeHiddenText += this.outputSymbolComments(symbol.line, symbol.column)

    _this.visitTerminal(terminal, {
      closeSpan: true,
      beforeHiddenText,
    })

    _this._buffer += '</div>'
  }

  /**
   * Comments template.
   * @param {Array} comments
   * @returns {String}
   */
  commentsTemplate(comments) {
    let result = ''

    for (const comment of comments) {
      result += this.commentTemplate(comment)
    }

    if (this.accessManager.canUserComment(this.user)) {
      result += `${common.addCommentToRowButton}`
    }

    return result
  }

  /**
   * Comment template.
   * @param {Object} comment
   * @returns {String}
   */
  commentTemplate(comment) {
    return common.commentTemplate(
      comment.user.name,
      comment.content,
      comment.id,
      this.accessManager.canUserUpdateOrDeleteComment(this.user, comment)
    )
  }

  /**
   * @param {String} string
   * @returns {Array}
   */
  static split(string) {
    return string.split(/\r\n|\n|\r/)
  }

  /**
   * @param {Object} ctx
   * @param {BisonTree2HtmlVisitor|LemonTree2HtmlVisitor} _this
   */
  static visit(ctx, _this) {
    if (Array.isArray(ctx)) {
      return ctx.map(function (child) {
        return child.accept(_this)
      }, _this)
    } else {
      return ctx.accept(_this)
    }
  }

  /**
   * @param {Object} ctx
   * @param {Object} _this
   */
  visitFile(ctx, _this) {
    _this._buffer += this.textOfHiddenTokensToLeft(
      ctx.children[0].start.tokenIndex
    )

    _this.visitChildren(ctx)

    _this.html += `<div class="grammar-view__info">${this.grammar.name}</div>`
    _this.html += '<table class="grammar-view__table">'

    let number = 1
    const lines = Helper.split(_this._buffer)

    for (const line of lines) {
      _this.html += `
<tr class="grammar-view__row" data-row="${number}" id="L${number}">
  <td class="grammar-view__row-number">${number}</td>
  <td class="grammar-view__code">`

      if (this.accessManager.canUserComment(this.user)) {
        _this.html += `<a class="button button_type_link button_theme_simple grammar-view__add-comment-to-row-leftside-button"
                         href="#">+</a>`
      }

      _this.html += `${line}</td></tr>`

      _this.html += this.outputRowComments(number)

      ++number
    }

    _this.html += '</table>'
  }

  /**
   * @param {TerminalNodeImpl} ctx
   * @param {BisonTree2HtmlVisitor|LemonTree2HtmlVisitor} _this
   * @param {bool} [closeSpan=false]
   * @param {String} [beforeHiddenText='']
   */
  visitTerminal(ctx, _this, {closeSpan = false, beforeHiddenText = ''} = {}) {
    _this._buffer += ctx.symbol.text

    if (closeSpan) {
      _this._buffer += '</span>'
    }

    _this._buffer += beforeHiddenText

    _this._buffer += this.textOfHiddenTokensToRight(ctx.symbol.tokenIndex)
  }
}
