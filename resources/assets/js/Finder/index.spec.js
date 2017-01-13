/* eslint-env mocha */

'use strict'

import Parser from '../Parser'
import Finder from './index'

describe('finder', () => {
  const parser = new Parser()

  it('should find rules with specific nonterminal on the left side', () => {
    const tree = parser.parse(`
      a ::= b c.
    `)
    const finder = new Finder(tree)
    finder.findRulesWhereOnTheLeft('a').length.should.equal(1)
  })

  it('should find rules which contains specific symbol', () => {
    const tree = parser.parse(`
      a(pa) ::= b(pb) c(pc). [NOT] {}
      b ::= d.
      c ::= b.
    `)
    const finder = new Finder(tree)
    finder.findRulesWhichContains('b').length.should.equal(3)
  })

  it('should find rules with the same right side', () => {
    const tree = parser.parse(`
      a ::= b c.
      d ::= b c. [NOT]
      e ::= b.
      f ::= b c d.
      g ::= b c.
      h ::= .
    `)
    const finder = new Finder(tree)
    finder.findRulesWithTheSameRightSide('a').length.should.equal(2)
  })

  it('should find rules with the same right side', () => {
    const tree = parser.parse(`
      a ::= b c. [POWER]
      d ::= b c. [NOT]
      e ::= b.
      f ::= b c d.
      g ::= b c.
      h ::= .
    `)
    const finder = new Finder(tree)
    finder.findRulesWithTheSameRightSide('g').length.should.equal(2)
  })
})
