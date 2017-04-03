'use strict'

import {TerminalNodeImpl} from 'antlr4/tree/Tree'
import {BisonParserListener} from 'js/Parser/Bison/BisonParserListener'
import {BisonParser} from 'js/Parser/Bison/BisonParser'

export default class BisonFinderListener extends BisonParserListener {
  /**
   * @param {string} [nonterminalToFindOnTheLeftSide]
   * @param {string} [symbolToFind]
   * @param {Object} [rightSideSymbols]
   * @returns {BisonFinderListener}
   * @constructor
   */
  constructor({
      nonterminalToFindOnTheLeftSide,
      symbolToFind,
      rightSideSymbols = {},
    }) {
    super()

    this.nonterminalToFindOnTheLeftSide = nonterminalToFindOnTheLeftSide
    this.nonterminalsOnTheLeftSide = []

    this.symbolToFind = symbolToFind
    this.rulesWhichContainsSymbol = []

    this.rightSideSymbols = rightSideSymbols
    this.rulesWithTheSameRightSides = []

    this.rightSideSymbolsJson = []
    for (const key of Object.keys(this.rightSideSymbols)) {
      this.rightSideSymbolsJson.push(JSON.stringify(this.rightSideSymbols[key]))
    }
  }

  /**
   * @param {RulesContext} ctx
   */
  enterRules(ctx) {
    const text = ctx.rawId().getText()

    if (text === this.nonterminalToFindOnTheLeftSide) {
      this.nonterminalsOnTheLeftSide.push(ctx)
    }

    if (text === this.symbolToFind) {
      this.rulesWhichContainsSymbol.push(ctx)
    }
  }

  /**
   * @param {RhsesContext} ctx
   */
  enterRhses(ctx) {
    let rightSideSymbols = {}
    let currentRuleIndex = 0

    ctx.children.forEach(child => {
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
    })

    for (const key of Object.keys(rightSideSymbols)) {
      const element = JSON.stringify(rightSideSymbols[key])

      if (this.rightSideSymbolsJson.indexOf(element) !== -1) {
        this.rulesWithTheSameRightSides.push(ctx.parentCtx)
        break
      }
    }
  }

  /**
   * @param {RhsContext} ctx
   */
  enterRhs(ctx) {
    ctx.children.forEach(child => {
      if (child instanceof BisonParser.SymbolContext
        && !(child.parentCtx.children[0] instanceof BisonParser.DirectiveContext)) {
        const text = child.getText().replace(/['"]/, '')

        if (text === this.symbolToFind) {
          this.rulesWhichContainsSymbol.push(ctx.parentCtx.parentCtx)
        }
      }
    })
  }
}
