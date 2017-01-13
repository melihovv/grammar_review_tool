'use strict'

import {LemonParserListener} from '../Parser/Lemon/LemonParserListener'
import {LemonParser} from '../Parser/Lemon/LemonParser'

/**
 * @extends LemonParserListener
 */
class FinderListener extends LemonParserListener {
  /**
   * @param {string} [nonterminalToFindOnTheLeftSide]
   * @param {string} [symbolToFind]
   * @param {string} [ruleToCompare]
   * @returns {FinderListener}
   * @constructor
   */
  constructor({
    nonterminalToFindOnTheLeftSide,
    symbolToFind,
    ruleToCompare,
  }) {
    super()

    this.nonterminalToFindOnTheLeftSide = nonterminalToFindOnTheLeftSide
    this.nonterminalsOnTheLeftSide = []

    this.symbolToFind = symbolToFind
    this.rulesWhichContainsSymbol = []

    this.ruleToCompare = ruleToCompare
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
      if (child instanceof LemonParser.SymbolContext) {
        if (child.children[0].getText() === this.symbolToFind) {
          this.rulesWhichContainsSymbol.push(
            ctx.parentCtx.children[0]
          )
        }
      }
    }

    if (this.ruleToCompare !== undefined &&
      ctx.parentCtx.leftSide() !== this.ruleToCompare.rule) {
      let symbols = []

      for (const child of ctx.children) {
        if (child instanceof LemonParser.SymbolContext) {
          symbols.push(child.children[0].getText())
        }
      }

      if (JSON.stringify(symbols) ===
        JSON.stringify(this.ruleToCompare.symbols)) {
        this.rulesWithTheSameRightSides.push(ctx.parentCtx.leftSide())
      }
    }
  }
}

export default FinderListener
