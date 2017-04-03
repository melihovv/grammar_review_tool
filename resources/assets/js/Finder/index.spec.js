/* eslint-env mocha */

'use strict'

import Parser from 'js/Parser'
import Finder from './index'

describe('finder', () => {
  describe('lemon', () => {
    const type = 'lemon'
    const parser = new Parser(type)

    it('should find rules with specific nonterminal on the left side', () => {
      const tree = parser.parse(`
      a ::= b c.
    `)
      const finder = new Finder(tree, type)
      finder.findRulesWhereOnTheLeft('a').length.should.equal(1)
    })

    it('should find rules which contains specific symbol', () => {
      const tree = parser.parse(`
      a(pa) ::= b(pb) c(pc). [NOT] {}
      b ::= d.
      c ::= b.
    `)
      const finder = new Finder(tree, type)
      finder.findRulesWhichContains('b').length.should.equal(3)
    })

    it('should find rules with the same right side', () => {
      const tree = parser.parse(`
      a ::= a.
      a ::= a.
      a ::= b c.
      d ::= b c. [NOT]
      e ::= b.
      f ::= b c d.
      g ::= b c.
      h ::= .
    `)
      const finder = new Finder(tree, type)
      finder.findRulesWithTheSameRightSide('a', 4).length.should.equal(3)
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
      const finder = new Finder(tree, type)
      finder.findRulesWithTheSameRightSide('g', 6).length.should.equal(3)
    })

    it('should return empty array if there is no rule on specified line', () => {
      const tree = parser.parse(`
      a ::= b c. [POWER]
      d ::= b c. [NOT]
      e ::= b.
      f ::= b c d.
      g ::= b c.
      h ::= .
    `)
      const finder = new Finder(tree, type)
      finder.findRulesWithTheSameRightSide('g', 100500).length.should.equal(0)
    })
  })

  describe('bison', () => {
    const type = 'bison'
    const parser = new Parser(type)

    it('should find rules with specific nonterminal on the left side', () => {
      const tree = parser.parse(`
        %%
        a
          : b c
          ;
        b
          : d a
          ;
    `)
      const finder = new Finder(tree, type)
      finder.findRulesWhereOnTheLeft('a').length.should.equal(1)
    })

    it('should find rules which contains specific symbol', () => {
      const tree = parser.parse(`
        %%
        a
          : b c
          ;
        b
          : d a
          ;
      `)
      const finder = new Finder(tree, type)
      finder.findRulesWhichContains('b').length.should.equal(2)
    })

    it('should find rules with the same right side', () => {
      const tree = parser.parse(`
        %%
        a
          : b c
          | d e
          ;
        b
          : d a
          | d e
          ;
        c
          : b c
          | %empty
          ;
        %smth hi;
      `)
      const finder = new Finder(tree, type)
      finder.findRulesWithTheSameRightSide('a', 3).length.should.equal(3)
    })

    it('should return empty array if there is no rule on specified line', () => {
      const tree = parser.parse(`
        %%
        a
          : b c
          | d e
          ;
        b
          : d a
          | d e
          ;
        c
          : b c
          ;
      `)
      const finder = new Finder(tree, type)
      finder.findRulesWithTheSameRightSide('a', 100500).length.should.equal(0)
    })
  })
})
