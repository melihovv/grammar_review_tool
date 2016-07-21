'use strict';

import antlr4 from 'antlr4/index';
import FinderListener from './FinderListener';

class Finder {
    constructor(tree) {
        this.tree = tree;
    }

    findRulesWhereOnTheLeft(nonterminal) {
        const finder = new FinderListener({
            nonterminalToFindOnTheLeftSide: nonterminal,
        });
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(finder, this.tree);
        return finder.nonterminalsOnTheLeftSide;
    }

    findRulesWhichContains(symbol) {
        const finder = new FinderListener({symbolToFind: symbol});
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(finder, this.tree);
        return finder.rulesWhichContainsSymbol;
    }

    findRulesWithTheSameRightSide(rule) {
        const finder = new FinderListener({ruleWithTheSameRightSide: rule});
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(finder, this.tree);
        return finder.rulesWithTheSameRightSides;
    }
}

export default Finder;
