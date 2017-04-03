'use strict'

import {BisonParserListener} from 'js/Parser/Bison/BisonParserListener'
import {BisonParser} from 'js/Parser/Bison/BisonParser'

class BisonFinderListener extends BisonParserListener {
  /**
   * @param {string} [nonterminalToFindOnTheLeftSide]
   * @param {string} [symbolToFind]
   * @param {string} [rightSideSymbols]
   * @returns {BisonFinderListener}
   * @constructor
   */
  constructor({
    nonterminalToFindOnTheLeftSide,
    symbolToFind,
    rightSideSymbols,
  }) {
    super()

    this.nonterminalToFindOnTheLeftSide = nonterminalToFindOnTheLeftSide
    this.nonterminalsOnTheLeftSide = []

    this.symbolToFind = symbolToFind
    this.rulesWhichContainsSymbol = []

    this.rightSideSymbols = rightSideSymbols
    this.rulesWithTheSameRightSides = []
  }

  /**
   * @param {LeftSideContext} ctx
   */
  enterLeftSide(ctx) {
    if (ctx.NONTERMINAL().getText() === this.nonterminalToFindOnTheLeftSide) {
      this.nonterminalsOnTheLeftSide.push(ctx)
    }

    if (ctx.NONTERMINAL().getText() === this.symbolToFind) {
      this.rulesWhichContainsSymbol.push(ctx)
    }
  }

  /**
   * @param {RightSideContext} ctx
   */
  enterRightSide(ctx) {
    for (const child of ctx.children) {
      if (child instanceof BisonParser.SymbolContext) {
        if (child.children[0].getText() === this.symbolToFind) {
          this.rulesWhichContainsSymbol.push(
            ctx.parentCtx.children[0]
          )
        }
      }
    }

    let symbols = []

    for (const child of ctx.children) {
      if (child instanceof BisonParser.SymbolContext) {
        symbols.push(child.children[0].getText())
      }
    }

    if (JSON.stringify(symbols) === JSON.stringify(this.rightSideSymbols)) {
      this.rulesWithTheSameRightSides.push(ctx.parentCtx.leftSide())
    }
  }
}

export default BisonFinderListener
