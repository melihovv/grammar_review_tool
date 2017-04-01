'use strict'

import tree from 'antlr4/tree/index'
import FinderListener from './lemon-finder-listener'
import {LemonParser} from 'js/Parser/Lemon/LemonParser'
import AbstractFinder from 'js/Finder/abstract-finder'

/**
 * Class to find symbols in tree.
 */
class LemonFinder extends AbstractFinder {
  /**
   * Find rules, where certain nonterminal on the left.
   * @param {string} nonterminal
   * @returns {Array}
   */
  findRulesWhereOnTheLeft(nonterminal) {
    const finder = new FinderListener({
      nonterminalToFindOnTheLeftSide: nonterminal,
    })
    tree.ParseTreeWalker.DEFAULT.walk(finder, this.tree)
    return finder.nonterminalsOnTheLeftSide
  }

  /**
   * Find rules, which contain certain symbol.
   * @param {string} symbol
   * @returns {Array}
   */
  findRulesWhichContains(symbol) {
    const finder = new FinderListener({symbolToFind: symbol})
    tree.ParseTreeWalker.DEFAULT.walk(finder, this.tree)
    const rules = finder.rulesWhichContainsSymbol
    return rules.filter((v, i, a) => a.indexOf(v) === i)
  }

  /**
   * Find rules, which have the same right side.
   * @param {string} ruleName
   * @param row
   * @returns {Array}
   */
  findRulesWithTheSameRightSide(ruleName, row) {
    const rules = this.findRulesWhereOnTheLeft(ruleName)
    let rule = null

    for (const r of rules) {
      if (r.children[0].getSymbol().line === +row) {
        rule = r
        break
      }
    }

    if (rule === null) {
      return []
    }

    let rightSideSymbols = []

    for (const child of rule.parentCtx.rightSide().children) {
      if (child instanceof LemonParser.SymbolContext) {
        rightSideSymbols.push(child.children[0].getText())
      }
    }

    const finder = new FinderListener({rightSideSymbols})
    tree.ParseTreeWalker.DEFAULT.walk(finder, this.tree)

    return finder.rulesWithTheSameRightSides
  }
}

export default LemonFinder
