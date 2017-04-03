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

    this.nonterminals = {}
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

  /**
   * @param {GrammarRuleContext} ctx
   */
  visitGrammarRule(ctx) {
    ctx.children.forEach(child => {
      child.getTypedRuleContexts(BisonParser.RulesContext).forEach(rule => {
        this.nonterminals[rule.rawId().getText()] = true
      })
    })

    this.visitChildren(ctx)
  }

  /**
   * @param {DirectiveContext} ctx
   */
  visitDirective(ctx) {
    this._buffer += '<span class="grammar-view__punct">%</span>'
    this._buffer += '<span class="grammar-view__directive">'

    // Cause we have percent sign and directive name inside one
    // TerminalNodeImpl.
    const text = ctx.children[0].symbol.text
    ctx.children[0].symbol.text = text.substr(1)

    this.visitTerminal(ctx.children[0], {closeSpan: true})

    // Restore original text.
    ctx.children[0].symbol.text = text
  }

  /**
   * @param {PrologueContext} ctx
   */
  visitPrologue(ctx) {
    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.PROLOGUE_START(), {closeSpan: true})

    const children = ctx.children
    for (let i = 1; i < children.length - 1; ++i) {
      this.visitTerminal(children[i])
    }

    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.PROLOGUE_CLOSE(), {closeSpan: true})
  }

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

  /**
   * @param {PredicateContext} ctx
   */
  visitPredicate(ctx) {
    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.PREDICATE_START(), {closeSpan: true})

    const children = ctx.children
    for (let i = 1; i < children.length - 1; ++i) {
      this.visitTerminal(children[i])
    }

    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.PREDICATE_CLOSE(), {closeSpan: true})
  }

  /**
   * @param {TagRuleContext} ctx
   */
  visitTagRule(ctx) {
    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.TAG_START(), {closeSpan: true})

    const children = ctx.children
    for (let i = 1; i < children.length - 1; ++i) {
      this.visitTerminal(children[i])
    }

    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.TAG_CLOSE(), {closeSpan: true})
  }

  /**
   * @param {RulesContext} ctx
   */
  visitRules(ctx) {
    ctx.children.forEach(child => {
      if (child instanceof TerminalNodeImpl) {
        this._buffer += '<span class="grammar-view__punct">'
        this.visitTerminal(child, {closeSpan: true})
      } else if (child instanceof BisonParser.RawIdContext) {
        this.helper.outputLeftSideNonterminal(child.ID(), this)
      } else {
        this.visit(child)
      }
    })
  }

  /**
   * @param {RhsesContext} ctx
   */
  visitRhses(ctx) {
    ctx.children.forEach(child => {
      if (child instanceof TerminalNodeImpl) {
        this._buffer += '<span class="grammar-view__punct">'
        this.visitTerminal(child, {closeSpan: true})
      } else {
        this.visit(child)
      }
    })
  }

  /**
   * @param {RhsContext} ctx
   */
  visitRhs(ctx) {
    ctx.children.forEach(child => {
      if (child instanceof BisonParser.SymbolContext
        && !(child.parentCtx.children[0] instanceof BisonParser.DirectiveContext)) {
        const text = child.getText().replace(/['"]/, '')
        let terminal = child

        while (!(terminal instanceof TerminalNodeImpl)) {
          terminal = terminal.children[0]
        }

        if (this.nonterminals[text]) { // Nonterminal.
          this.helper.outputRightSideNonterminal(terminal, this)
        } else { // Terminal.
          this.helper.outputRightSideTerminal(terminal, this)
        }
      } else {
        this.visit(child)
      }
    })
  }

  /**
   * @param {IdContext} ctx
   */
  visitId(ctx) {
    if (ctx.CHAR()) {
      const quote = '<span class="grammar-view__punct">\'</span>'
      this._buffer += quote

      const text = ctx.children[0].symbol.text
      ctx.children[0].symbol.text = text.substr(1, text.length - 2)

      this._buffer += '<span class="grammar-view__id">'
      this.visitTerminal(ctx.children[0], {
        closeSpan: true,
        beforeHiddenText: quote,
      })

      ctx.children[0].symbol.text = text
    } else {
      this.visitChildren(ctx)
    }
  }

  /**
   * @param {RawIdContext} ctx
   */
  visitRawId(ctx) {
    this._buffer += '<span class="grammar-view__id">'
    this.visitTerminal(ctx.ID(), {closeSpan: true})
  }

  /**
   * @param {StringContext} ctx
   */
  visitString(ctx) {
    const quote = '<span class="grammar-view__punct">"</span>'
    this._buffer += quote

    const text = ctx.children[0].symbol.text
    ctx.children[0].symbol.text = text.substr(1, text.length - 2)

    this._buffer += '<span class="grammar-view__id">'
    this.visitTerminal(ctx.STRING(), {closeSpan: true, beforeHiddenText: quote})

    ctx.children[0].symbol.text = text
  }

  /**
   * @param {IntRuleContext} ctx
   */
  visitIntRule(ctx) {
    this._buffer += '<span class="grammar-view__id">'
    this.visitTerminal(ctx.INT(), {closeSpan: true})
  }

  /**
   * @param {SemicolonContext} ctx
   */
  visitSemicolon(ctx) {
    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.SEMICOLON(), {closeSpan: true})
  }

  /**
   * @param {DoublePercentContext} ctx
   */
  visitDoublePercent(ctx) {
    this._buffer += '<span class="grammar-view__punct">'
    this.visitTerminal(ctx.PERCENT_PERCENT(), {closeSpan: true})
  }

  /**
   * @param {RefContext} ctx
   */
  visitRef(ctx) {
    this._buffer += '<span class="grammar-view__punct">[</span>'

    const text = ctx.children[0].symbol.text
    ctx.children[0].symbol.text = text.substr(1, text.length - 2)

    this._buffer += '<span class="grammar-view__id">'
    this.visitTerminal(ctx.children[0], {
      closeSpan: true,
      beforeHiddenText: '<span class="grammar-view__punct">]</span>',
    })

    ctx.children[0].symbol.text = text
  }

  /**
   * @param {TerminalNodeImpl} ctx
   * @param {Object} params
   */
  visitTerminal(ctx, params = {}) {
    this.helper.visitTerminal(ctx, this, params)
  }
}
