/* eslint-env mocha */

'use strict';

import Parser from './parser';
import Finder from './finder';

describe('finder', function () {
  const parser = new Parser();

  it('must find rules with specific nonterminal on the left side', () => {
    const tree = parser.parse(`
            a ::= b c.
        `);
    const finder = new Finder(tree);
    finder.findRulesWhereOnTheLeft('a').length.must.be(1);
  });

  it('must find rules which contains specific symbol', () => {
    const tree = parser.parse(`
            a(pa) ::= b(pb) c(pc). [NOT] {}
            b ::= d.
            c ::= b.
        `);
    const finder = new Finder(tree);
    finder.findRulesWhichContains('b').length.must.be(3);
  });

  it('must find rules with the same right side', () => {
    const tree = parser.parse(`
            a ::= b c.
            d ::= b c. [NOT]
            e ::= b.
            f ::= b c d.
            g ::= b c.
            h ::= .
        `);
    const finder = new Finder(tree);
    finder.findRulesWithTheSameRightSide('a').length.must.be(2);
  });

  it('must find rules with the same right side', () => {
    const tree = parser.parse(`
            a ::= b c. [POWER]
            d ::= b c. [NOT]
            e ::= b.
            f ::= b c d.
            g ::= b c.
            h ::= .
        `);
    const finder = new Finder(tree);
    finder.findRulesWithTheSameRightSide('g').length.must.be(2);
  });
});
