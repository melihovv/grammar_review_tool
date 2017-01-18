'use strict'

import Tree2HtmlVisitor from './tree2html-visitor'
import AccessManager from 'js/AccessManager'

/**
 * Tree to html converter.
 */
class Tree2Html {
  /**
   * Convert tree to html.
   * @param {FileContext} tree
   * @param {CommonTokenStream} tokens
   * @param {Object} grammar
   * @param {Object} owner
   * @param {Array} comments
   * @param {Array} rights
   * @returns {string}
   * @static
   */
  static convert(tree, tokens, grammar, owner, comments, rights) {
    const accessManager = new AccessManager(grammar, rights)
    const tree2HtmlVisitor = new Tree2HtmlVisitor(
      tokens,
      grammar,
      owner,
      comments,
      accessManager
    )
    tree2HtmlVisitor.visitFile(tree)
    return tree2HtmlVisitor.html
  }
}

export default Tree2Html
