'use strict';

import antlr4 from 'antlr4/index';
import FinderListener from './FinderListener';
import {LemonParser} from './LemonParser';

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
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(finder, this.tree);

        return finder.rulesWithTheSameRightSides;
    }
}

export default Finder;
