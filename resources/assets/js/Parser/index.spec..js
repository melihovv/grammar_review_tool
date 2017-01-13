/* eslint-env mocha */

'use strict'

import Parser from './index'

describe('parser', () => {
  const parser = new Parser()

  it('should understand directives', () => {
    parser.parse.bind(parser, `
      %left TOK_A TOK_B.
      %right TOK_C.
      %nonassoc TOK_D.
      %name name
      %token_prefix PREFIX_
      %start_symbol start_rule
      %stack_size 12
      %type start_rule {/*php code*/}
      %declare_class {/*php code*/}
    `).should.not.throw()
  })

  it('should properly handle closing braces in php code sections', () => {
    parser.parse.bind(parser, `
      %destructor {'}'}
      %destructor {'\\'}'}
      %destructor {'
}'}
      %syntax_error {"}"}
      %syntax_error {"\\"}"}
      %syntax_error {"
}"}
      %declare_class {{{}}}
    `).should.not.throw()
  })

  it('should not properly handle closing braces in nowdoc and heredoc', () => {
    parser.parse.bind(parser, `
      %destructor {
          <<<HERE
          }
HERE;
      }
    `).should.throw()
    parser.parse.bind(parser, `
      %destructor {
          <<<'NOW'
          }
NOW;
        }
    `).should.throw()
  })

  it('should understand grammar rules', () => {
    parser.parse.bind(parser, `
      rule ::= A B.
    `).should.not.throw()
  })

  it('should understand grammar rules with params', () => {
    parser.parse.bind(parser, `
      rule(p1) ::= A(p2) B(p3).
    `).should.not.throw()
  })

  it('should understand grammar rules with params and precedence', () => {
    parser.parse.bind(parser, `
      rule(p1) ::= A(p2) B(p3). [NOT]
    `).should.not.throw()
  })

  it('should understand grammar rules with params, precedence and code section',
    () => {
      parser.parse.bind(parser, `
      rule(p1) ::= A(p2) B(p3). [NOT] {echo 'hi';}
    `).should.not.throw()
    }
  )

  it('should understand single and multiline comments', () => {
    parser.parse.bind(parser, `
      // comment
      rule(p1) ::= A(p2) B(p3)/*comment*/. [NOT] {
          // comment
          echo 'hi'/*}*/;
      }
    `).should.not.throw()
  })
})
