'use strict'

import {TerminalNodeImpl} from 'antlr4/tree/Tree'
import tree from 'antlr4/tree/index'
import FinderListener from './bison-finder-listener'
import {BisonParser} from 'js/Parser/Bison/BisonParser'
import AbstractFinder from 'js/Finder/abstract-finder'

/**
 * Class to find symbols in tree.
 */
class BisonFinder extends AbstractFinder {
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

    // Remove duplicates.
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
      if (r.children[0].start.line === +row) {
        rule = r
        break
      }
    }

    if (rule === null) {
      return []
    }

    let rightSideSymbols = {}
    let currentRuleIndex = 0

    for (const child of rule.rhses().children) {
      if (child instanceof BisonParser.RhsContext) {
        child.children.forEach(c => {
          if (c instanceof BisonParser.SymbolContext
            && !(c.parentCtx.children[0] instanceof BisonParser.DirectiveContext)) {
            const text = child.getText().replace(/['"]/, '')

            if (rightSideSymbols[currentRuleIndex] === undefined) {
              rightSideSymbols[currentRuleIndex] = []
            }

            rightSideSymbols[currentRuleIndex].push(text)
          }
        })
      } else if (child instanceof TerminalNodeImpl) {
        ++currentRuleIndex
      }
    }

    const finder = new FinderListener({rightSideSymbols})
    tree.ParseTreeWalker.DEFAULT.walk(finder, this.tree)

    return finder.rulesWithTheSameRightSides
  }
}

export default BisonFinder
