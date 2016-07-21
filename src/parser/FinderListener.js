'use strict';

import {LemonListener} from './LemonListener';
import {LemonParser} from './LemonParser';

function FinderListener({
    nonterminalToFindOnTheLeftSide,
    symbolToFind,
    ruleToCompare
}) {
    LemonListener.call(this);

    this.nonterminalToFindOnTheLeftSide = nonterminalToFindOnTheLeftSide;
    this.nonterminalsOnTheLeftSide = [];

    this.symbolToFind = symbolToFind;
    this.rulesWhichContainsSymbol = [];

    this.ruleToCompare = ruleToCompare;
    this.rulesWithTheSameRightSides = [];

    return this;
}

FinderListener.prototype = Object.create(LemonListener.prototype);
FinderListener.prototype.constructor = FinderListener;

FinderListener.prototype.enterLeftSide = function (ctx) {
    if (ctx.NONTERMINAL().getText() === this.nonterminalToFindOnTheLeftSide) {
        this.nonterminalsOnTheLeftSide.push(ctx);
    }

    if (ctx.NONTERMINAL().getText() === this.symbolToFind) {
        this.rulesWhichContainsSymbol.push(ctx);
    }
};

FinderListener.prototype.enterRightSide = function (ctx) {
    for (const child of ctx.children) {
        if (child instanceof LemonParser.SymbolContext) {
            if (child.children[0].getText() === this.symbolToFind) {
                this.rulesWhichContainsSymbol.push(
                    ctx.parentCtx.children[0]
                );
            }
        }
    }

    if (this.ruleToCompare !== undefined &&
        ctx.parentCtx.leftSide() !== this.ruleToCompare.rule) {
        let symbols = [];

        for (const child of ctx.children) {
            if (child instanceof LemonParser.SymbolContext) {
                symbols.push(child.children[0].getText());
            }
        }

        if (JSON.stringify(symbols) ===
            JSON.stringify(this.ruleToCompare.symbols)) {
            this.rulesWithTheSameRightSides.push(ctx.parentCtx.leftSide());
        }
    }
};

export default FinderListener;
