'use strict'

/**
 * Class to find symbols in tree.
 */
class AbstractFinder {
  /**
   * Create a finder.
   * @param {FileContext} tree
   */
  constructor(tree) {
    this.tree = tree
  }

  /**
   * Find rules, where certain nonterminal on the left.
   * @param {string} nonterminal
   * @returns {Array}
   */
  findRulesWhereOnTheLeft(nonterminal) {
    return []
  }

  /**
   * Find rules, which contain certain symbol.
   * @param {string} symbol
   * @returns {Array}
   */
  findRulesWhichContains(symbol) {
    return []
  }

  /**
   * Find rules, which have the same right side.
   * @param {string} ruleName
   * @param row
   * @returns {Array}
   */
  findRulesWithTheSameRightSide(ruleName, row) {
    return []
  }
}

export default AbstractFinder
