'use strict';

const tree = require('antlr4/tree/index');
const FinderListener = require('./finder-listener');
const LemonParser = require('../parser/Lemon/LemonParser').LemonParser;

/**
 * Create a finder.
 * @param {FileContext} tree
 * @returns {Finder}
 * @constructor
 */
function Finder(tree) {
  this.tree = tree;
  return this;
}

/**
 * Find rules, where certain nonterminal on the left.
 * @param {string} nonterminal
 * @returns {Array}
 */
Finder.prototype.findRulesWhereOnTheLeft = function (nonterminal) {
  const finder = new FinderListener({
    nonterminalToFindOnTheLeftSide: nonterminal,
  });
  tree.ParseTreeWalker.DEFAULT.walk(finder, this.tree);
  return finder.nonterminalsOnTheLeftSide;
};

/**
 * Find rules, which contain certain symbol.
 * @param {string} symbol
 * @returns {Array}
 */
Finder.prototype.findRulesWhichContains = function (symbol) {
  const finder = new FinderListener({symbolToFind: symbol});
  tree.ParseTreeWalker.DEFAULT.walk(finder, this.tree);
  return finder.rulesWhichContainsSymbol;
};

/**
 * Find rules, which have the same right side.
 * @param {string} rule
 * @returns {Array}
 */
Finder.prototype.findRulesWithTheSameRightSide = function (rule) {
  const rules = this.findRulesWhereOnTheLeft(rule);
  const ruleToCompare = {
    rule: rules[0],
    symbols: [],
  };

  for (const child of ruleToCompare.rule.parentCtx.rightSide().children) {
    if (child instanceof LemonParser.SymbolContext) {
      ruleToCompare.symbols.push(child.children[0].getText());
    }
  }

  const finder = new FinderListener({ruleToCompare});
  tree.ParseTreeWalker.DEFAULT.walk(finder, this.tree);

  return finder.rulesWithTheSameRightSides;
};

module.exports = Finder;
