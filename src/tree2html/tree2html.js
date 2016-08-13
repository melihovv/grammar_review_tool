'use strict';

const Antlr4Tree = require('antlr4/tree/index');
const Tree2HtmlListener = require('./tree2html-listener');

/**
 * Convert tree to html.
 * @param {FileContext} tree
 * @param {CommonTokenStream} tokens
 * @returns {string}
 */
function tree2Html(tree, tokens) {
  const tree2HtmlListener = new Tree2HtmlListener(tokens);
  Antlr4Tree.ParseTreeWalker.DEFAULT.walk(tree2HtmlListener, tree);
  return tree2HtmlListener.html;
}

module.exports = tree2Html;
