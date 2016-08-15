'use strict';

import {TerminalNodeImpl} from 'antlr4/tree/Tree';
import {LemonParserVisitor} from '../parser/Lemon/LemonParserVisitor';
import {LemonParser} from '../parser/Lemon/LemonParser';

/**
 * Create Tree2HtmlVisitor.
 * @param {CommonTokenStream} tokens
 * @returns {Tree2HtmlVisitor}
 * @constructor
 * @extends LemonParserVisitor
 */
function Tree2HtmlVisitor(tokens) {
  LemonParserVisitor.call(this);

  this._buffer = '';
  this.html = '';
  this._tokens = tokens;
  this._newLineRegex = /\r\n|\n|\r/;

  return this;
}

Tree2HtmlVisitor.prototype = Object.create(LemonParserVisitor.prototype);
Tree2HtmlVisitor.prototype.constructor = Tree2HtmlVisitor;

/**
 * @param {FileContext} ctx
 */
Tree2HtmlVisitor.prototype.visitFile = function (ctx) {
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
    this.html += `<tr data-row="${number}">` +
      '<td class="grammar-view__row-number" ' +
      `@click="addCommentToRow">${number++}</td>` +
      `<td class="grammar-view__code">${line}</td></tr>`;
  }

  this.html += '</table>';
};

/**
 * @param {GrammarRuleContext} ctx
 */
Tree2HtmlVisitor.prototype.visitGrammarRule = function (ctx) {
  this.visitLeftSide(ctx.leftSide());

  this._buffer += '<span class="grammar-view__punct">';
  this.visitTerminal(ctx.ASSIGN(), {closeSpan: true});

  this.visitRightSide(ctx.rightSide());
};

/**
 * @param {LeftSideContext} ctx
 */
Tree2HtmlVisitor.prototype.visitLeftSide = function (ctx) {
  this._buffer += '<span class="grammar-view__ls-nonterminal" ' +
    '@click="addCommentToLsNonterminal">';
  this.visitTerminal(ctx.NONTERMINAL(), {closeSpan: true});

  if (ctx.children.length > 1) {
    this.visitParam(ctx.param());
  }
};

/**
 * @param {RightSideContext} ctx
 */
Tree2HtmlVisitor.prototype.visitRightSide = function (ctx) {
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
};

/**
 * @param {PrecedenceContext} ctx
 */
Tree2HtmlVisitor.prototype.visitPrecedence = function (ctx) {
  this._buffer += '<span class="grammar-view__punct">';
  this.visitTerminal(ctx.LBRACKET(), {closeSpan: true});

  this._buffer += '<span class="grammar-view__param">';
  this.visitTerminal(ctx.TERMINAL(), {closeSpan: true});

  this._buffer += '<span class="grammar-view__punct">';
  this.visitTerminal(ctx.RBRACKET(), {closeSpan: true});
};

/**
 * @param {SymbolContext} ctx
 * @param {bool} [fromParam=false]
 * @param {bool} [fromRightSide=false]
 * @param {bool} [fromDirective=false]
 */
Tree2HtmlVisitor.prototype.visitSymbol = function (ctx, {
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
      this._buffer += '<span class="grammar-view__terminal" ' +
        `@click="addCommentToTerminal">`;
    } else { // Nonterminal.
      this._buffer += '<span class="grammar-view__rs-nonterminal" ' +
        `@click="addCommentToRsNonterminal">`;
    }

    this.visitTerminal(ctx.children[0], {closeSpan: true});
  } else if (fromDirective) {
    this._buffer += '<span class="grammar-view__symbol">';
    this.visitTerminal(ctx.children[0], {closeSpan: true});
  }
};

/**
 * @param {ParamContext} ctx
 */
Tree2HtmlVisitor.prototype.visitParam = function (ctx) {
  this._buffer += '<span class="grammar-view__punct">';
  this.visitTerminal(ctx.children[0], {closeSpan: true});

  this.visitSymbol(ctx.symbol(), {fromParam: true});

  this._buffer += '<span class="grammar-view__punct">';
  this.visitTerminal(ctx.children[2], {closeSpan: true});
};

/**
 * @param {DirectiveContext} ctx
 */
Tree2HtmlVisitor.prototype.visitDirective = function (ctx) {
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
};

/**
 * @param {CodeBlockContext} ctx
 */
Tree2HtmlVisitor.prototype.visitCodeBlock = function (ctx) {
  this._buffer += '<span class="grammar-view__punct">';
  this.visitTerminal(ctx.BEGIN_CODE(), {closeSpan: true});

  const children = ctx.children;
  for (let i = 1; i < children.length - 1; ++i) {
    this.visitTerminal(children[i]);
  }

  this._buffer += '<span class="grammar-view__punct">';
  this.visitTerminal(ctx.END_CODE(), {closeSpan: true});
};

/**
 * @param {TerminalNodeImpl} ctx
 * @param {bool} [closeSpan=false]
 */
Tree2HtmlVisitor.prototype.visitTerminal =
  function (ctx, {closeSpan = false} = {}) {
    this._buffer += ctx.symbol.text;
    if (closeSpan) {
      this._buffer += '</span>';
    }

    this._buffer += this._textOfHiddenTokensToRight(ctx.symbol.tokenIndex);
  };

/**
 * @param {number} index
 * @returns {string}
 * @private
 */
Tree2HtmlVisitor.prototype._textOfHiddenTokensToLeft = function (index) {
  return this._tokensText(this._tokens.getHiddenTokensToLeft(index));
};

/**
 * @param {number} index
 * @returns {string}
 * @private
 */
Tree2HtmlVisitor.prototype._textOfHiddenTokensToRight = function (index) {
  return this._tokensText(this._tokens.getHiddenTokensToRight(index));
};

/**
 * @param {Array} tokens
 * @returns {string}
 * @private
 */
Tree2HtmlVisitor.prototype._tokensText = function (tokens) {
  tokens = tokens || [];
  let result = '';
  for (const token of tokens) {
    result += token.text;
  }
  return result;
};

export default Tree2HtmlVisitor;
