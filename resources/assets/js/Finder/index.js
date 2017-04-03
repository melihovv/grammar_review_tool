'use strict'

import LemonFinder from './lemon/lemon-finder'
import BisonFinder from './bison/bison-finder'

/**
 * Class to find symbols in tree.
 */
class Finder {
  static types = [
    'lemon',
    'bison',
  ]

  /**
   * Create a finder.
   * @param {FileContext} tree
   * @param {string} type
   */
  constructor(tree, type) {
    if (Finder.types.indexOf(type) === -1) {
      throw new Error('Unsupported grammar format')
    }

    this.tree = tree
    this.type = type
  }

  /**
   * Find rules, where certain nonterminal on the left.
   * @param {string} nonterminal
   * @returns {Array}
   */
  findRulesWhereOnTheLeft(nonterminal) {
    return this.finderFactory(this.tree).findRulesWhereOnTheLeft(nonterminal)
  }

  /**
   * Find rules, which contain certain symbol.
   * @param {string} symbol
   * @returns {Array}
   */
  findRulesWhichContains(symbol) {
    return this.finderFactory(this.tree).findRulesWhichContains(symbol)
  }

  /**
   * Find rules, which have the same right side.
   * @param {string} ruleName
   * @param row
   * @returns {Array}
   */
  findRulesWithTheSameRightSide(ruleName, row) {
    return this.finderFactory(this.tree)
      .findRulesWithTheSameRightSide(ruleName, row)
  }

  /**
   * @param tree
   * @returns {AbstractFinder}
   */
  finderFactory(tree) {
    switch (this.type) {
      case 'lemon': return new LemonFinder(tree)
      case 'bison': return new BisonFinder(tree)
    }
  }
}

export default Finder
