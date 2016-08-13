'use strict';

const InputStream = require('antlr4/InputStream').InputStream;
const CommonTokenStream = require('antlr4/CommonTokenStream').CommonTokenStream;
const LemonLexer = require('./Lemon/LemonLexer').LemonLexer;
const LemonParser = require('./Lemon/LemonParser').LemonParser;

/**
 * Create a parser.
 * @returns {Parser}
 * @constructor
 */
function Parser() {
  this.tree = null;
  this.parser = null;
  return this;
}

/**
 * Parse lemon grammar.
 * @param {string} input
 * @returns {FileContext}
 */
Parser.prototype.parse = function (input) {
  const chars = new InputStream(input);
  const lexer = new LemonLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  this.parser = new LemonParser(tokens);
  this.parser.buildParseTrees = true;

  this.tree = this.parser.file();

  if (this.parser._syntaxErrors > 0) {
    this.tree = null;
    throw new Error('Input contains syntax errors');
  }

  return this.tree;
};

module.exports = Parser;
