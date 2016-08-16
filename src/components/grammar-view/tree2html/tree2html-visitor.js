'use strict';

import {TerminalNodeImpl} from 'antlr4/tree/Tree';
import {LemonParserVisitor} from 'src/parser/Lemon/LemonParserVisitor';
import {LemonParser} from 'src/parser/Lemon/LemonParser';

/**
 * @extends LemonParserVisitor
 */
class Tree2HtmlVisitor extends LemonParserVisitor {
  /**
   * Create Tree2HtmlVisitor.
   * @param {CommonTokenStream} tokens
   * @returns {Tree2HtmlVisitor}
   * @constructor
   */
  constructor(tokens) {
    super();

    this._buffer = '';
    this.html = '';
    this._tokens = tokens;
    this._newLineRegex = /\r\n|\n|\r/;
  }

  /**
   * @param {FileContext} ctx
   */
  visitFile(ctx) {
    this._buffer +=
      this._textOfHiddenTokensToLeft(ctx.children[0].start.tokenIndex);

    ctx.children.forEach(child => {
      if (child instanceof LemonParser.GrammarRuleContext) {
        this.visitGrammarRule(child);
      } else {
        this.visitDirective(child);
      }
    });

    const lines = this._buffer.split(this._newLineRegex);
    this.html += '<table class="grammar-view">';

    let number = 1;
    for (const line of lines) {
      this.html += '<tr class="grammar-view__row">' +
        `<td class="grammar-view__row-number">${number++}</td>` +
        '<td class="grammar-view__code"><a href="#" ' +
        'class="button button_type_link button_theme_simple ' +
        'grammar-view__add-comment-to-row-button">+</a>' +
        `${line}</td></tr>`;
    }

    this.html += '</table>';
  }

  /**
   * @param {GrammarRuleContext} ctx
   */
  visitGrammarRule(ctx) {
    this.visitLeftSide(ctx.leftSide());

    this._buffer += '<span class="grammar-view__punct">';
    this.visitTerminal(ctx.ASSIGN(), {closeSpan: true});

    this.visitRightSide(ctx.rightSide());
  }

  /**
   * @param {LeftSideContext} ctx
   */
  visitLeftSide(ctx) {
    this._buffer += '<span class="grammar-view__ls-nonterminal">';
    this.visitTerminal(ctx.NONTERMINAL(), {closeSpan: true});

    if (ctx.children.length > 1) {
      this.visitParam(ctx.param());
    }
  }

  /**
   * @param {RightSideContext} ctx
   */
  visitRightSide(ctx) {
    ctx.children.forEach(child => {
      if (child instanceof LemonParser.SymbolContext) {
        this.visitSymbol(child, {fromRightSide: true});
      } else if (child instanceof LemonParser.ParamContext) {
        this.visitParam(child);
      } else if (child instanceof TerminalNodeImpl) {
        this._buffer += '<span class="grammar-view__punct">';
        this.visitTerminal(child, {closeSpan: true});
      } else if (child instanceof LemonParser.PrecedenceContext) {
        this.visitPrecedence(child);
      } else if (child instanceof LemonParser.CodeBlockContext) {
        this.visitCodeBlock(child);
      }
    });
  }

  /**
   * @param {PrecedenceContext} ctx
   */
  visitPrecedence(ctx) {
    this._buffer += '<span class="grammar-view__punct">';
    this.visitTerminal(ctx.LBRACKET(), {closeSpan: true});

    this._buffer += '<span class="grammar-view__param">';
    this.visitTerminal(ctx.TERMINAL(), {closeSpan: true});

    this._buffer += '<span class="grammar-view__punct">';
    this.visitTerminal(ctx.RBRACKET(), {closeSpan: true});
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
    if (fromParam) {
      this._buffer += '<span class="grammar-view__param">';
      this.visitTerminal(ctx.children[0], {closeSpan: true});
    } else if (fromRightSide) {
      const text = ctx.children[0].getText();

      if (text[0] === text[0].toUpperCase()) { // Terminal.
        this._buffer += '<span class="grammar-view__terminal">';
      } else { // Nonterminal.
        this._buffer += '<span class="grammar-view__rs-nonterminal">';
      }

      this.visitTerminal(ctx.children[0], {closeSpan: true});
    } else if (fromDirective) {
      this._buffer += '<span class="grammar-view__symbol">';
      this.visitTerminal(ctx.children[0], {closeSpan: true});
    }
  }

  /**
   * @param {ParamContext} ctx
   */
  visitParam(ctx) {
    this._buffer += '<span class="grammar-view__punct">';
    this.visitTerminal(ctx.children[0], {closeSpan: true});

    this.visitSymbol(ctx.symbol(), {fromParam: true});

    this._buffer += '<span class="grammar-view__punct">';
    this.visitTerminal(ctx.children[2], {closeSpan: true});
  }

  /**
   * @param {DirectiveContext} ctx
   */
  visitDirective(ctx) {
    const children = ctx.children;

    this._buffer += '<span class="grammar-view__punct">';
    this.visitTerminal(ctx.PERCENT(), {closeSpan: true});

    this._buffer += '<span class="grammar-view__directive">';
    this.visitTerminal(children[1], {closeSpan: true});

    for (let i = 2; i < children.length; ++i) {
      if (children[i] instanceof LemonParser.SymbolContext) {
        this.visitSymbol(children[i], {fromDirective: true});
      } else if (children[i] instanceof LemonParser.CodeBlockContext) {
        this.visitCodeBlock(children[i]);
      } else if (children[i] instanceof TerminalNodeImpl) {
        if (children[i].getText() === '.') {
          this._buffer += '<span class="grammar-view__punct">';
        } else {
          this._buffer += '<span class="grammar-view__symbol">';
        }
        this.visitTerminal(children[i], {closeSpan: true});
      }
    }
  }

  /**
   * @param {CodeBlockContext} ctx
   */
  visitCodeBlock(ctx) {
    this._buffer += '<span class="grammar-view__punct">';
    this.visitTerminal(ctx.BEGIN_CODE(), {closeSpan: true});

    const children = ctx.children;
    for (let i = 1; i < children.length - 1; ++i) {
      this.visitTerminal(children[i]);
    }

    this._buffer += '<span class="grammar-view__punct">';
    this.visitTerminal(ctx.END_CODE(), {closeSpan: true});
  }

  /**
   * @param {TerminalNodeImpl} ctx
   * @param {bool} [closeSpan=false]
   */
  visitTerminal(ctx, {closeSpan = false} = {}) {
    this._buffer += ctx.symbol.text;
    if (closeSpan) {
      this._buffer += '</span>';
    }

    this._buffer += this._textOfHiddenTokensToRight(ctx.symbol.tokenIndex);
  }

  /**
   * @param {number} index
   * @returns {string}
   * @private
   */
  _textOfHiddenTokensToLeft(index) {
    return this._tokensText(this._tokens.getHiddenTokensToLeft(index));
  };

  /**
   * @param {number} index
   * @returns {string}
   * @private
   */
  _textOfHiddenTokensToRight(index) {
    return this._tokensText(this._tokens.getHiddenTokensToRight(index));
  };

  /**
   * @param {Array} tokens
   * @returns {string}
   * @private
   */
  _tokensText(tokens) {
    tokens = tokens || [];
    let result = '';
    for (const token of tokens) {
      result += token.text;
    }
    return result;
  }
}

export default Tree2HtmlVisitor;
