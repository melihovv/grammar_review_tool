'use strict';

import Tree2HtmlVisitor from './tree2html-visitor';

/**
 * Tree to html converter.
 */
class Tree2Html {
  /**
   * Convert tree to html.
   * @param {FileContext} tree
   * @param {CommonTokenStream} tokens
   * @param {Object} grammar
   * @param {Object} comments
   * @param {Object} users
   * @returns {string}
   * @static
   */
  static convert(tree, tokens, grammar, comments, users) {
    const tree2HtmlVisitor = new Tree2HtmlVisitor(
      tokens,
      grammar,
      comments,
      users
    );
    tree2HtmlVisitor.visitFile(tree);
    return tree2HtmlVisitor.html;
  }
}

export default Tree2Html;
