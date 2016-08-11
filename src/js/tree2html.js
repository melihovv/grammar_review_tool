'use strict';

import * as Antlr4Tree from 'antlr4/tree/index';
import Tree2HtmlListener from './tree2html-listener';

/**
 * Tree converter to html.
 */
class Tree2Html {
  /**
   * Convert tree to html.
   * @param {FileContext} tree
   * @param {CommonTokenStream} tokens
   * @returns {string}
   * @static
   */
  static convert(tree, tokens) {
    const tree2HtmlListener = new Tree2HtmlListener(tokens);
    Antlr4Tree.ParseTreeWalker.DEFAULT.walk(tree2HtmlListener, tree);
    return tree2HtmlListener.html;
  }
}

export default Tree2Html;
