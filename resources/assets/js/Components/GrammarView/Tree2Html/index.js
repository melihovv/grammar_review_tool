'use strict'

import LemonTree2HtmlVisitor from './lemon-tree2html-visitor'
import BisonTree2HtmlVisitor from './bison-tree2html-visitor'
import AccessManager from 'js/AccessManager'

/**
 * Tree to html converter.
 */
class Tree2Html {
  static types = [
    'lemon',
    'bison',
  ]

  /**
   * @param type
   * @param {FileContext} tree
   * @param {CommonTokenStream} tokens
   * @param {Object} grammar
   * @param {Object} owner
   * @param {Array} comments
   * @param {Array} rights
   */
  constructor(type, tree, tokens, grammar, owner, comments, rights) {
    if (Tree2Html.types.indexOf(type) === -1) {
      throw new Error('Unsupported grammar format')
    }

    this.type = type
    this.tree = tree
    this.tokens = tokens
    this.grammar = grammar
    this.owner = owner
    this.comments = comments
    this.rights = rights
    this.accessManager = new AccessManager(this.grammar, this.rights)
  }

  /**
   * Convert tree to html.
   * @returns {string}
   */
  convert() {
    const tree2HtmlVisitor = this.visitorFactory()
    tree2HtmlVisitor.visitFile(this.tree)
    return tree2HtmlVisitor.html
  }

  visitorFactory() {
    switch (this.type) {
      case 'lemon': return new LemonTree2HtmlVisitor(
        this.tokens,
        this.grammar,
        this.owner,
        this.comments,
        this.accessManager,
        Laravel.user
      )
      case 'bison': return new BisonTree2HtmlVisitor(
        this.tokens,
        this.grammar,
        this.owner,
        this.comments,
        this.accessManager,
        Laravel.user
      )
    }
  }
}

export default Tree2Html
