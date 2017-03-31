/* eslint-env mocha */
/* eslint-disable no-new */

'use strict'

import Parser from './index'

describe('parser', () => {
  it('should understand only predefined format of grammar', () => {
    try {
      new Parser('lemon')
      new Parser('bison')
      expect(1).equal(1)
    } catch (e) {
      expect(1).equal(0)
    }

    try {
      new Parser('antlr4')
      expect(1).equal(0)
    } catch (e) {
      expect(1).equal(1)
    }
  })

  describe('lemon', () => {
    const parser = new Parser('lemon')

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
        %declare_class {'a\\\\b\\ac\\'de' 'a'}
        %syntax_error {"}"}
        %syntax_error {"\\"}"}
        %syntax_error {"
  }"}
        %declare_class {"a\\\\b\\ac\\"de" "a"}

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

      parser.getErrors().should.have.length.above(0)
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

    it('should understand numbers', () => {
      parser.parse.bind(parser, `
        %stack_size 0
        %stack_size 123
    `).should.not.throw()
    })
  })

  describe('bison', () => {
    const parser = new Parser('bison')
    const grammarDeclaration = `
        %left<tag> symbol 10
        %right<tag<tag>> symbol 's' "symbol" 10 0
        %right symbol 's' "symbol" 10 0
        %nonassoc symbol 's' "symbol" 10 0
        %binary symbol 's' "symbol" 10 0
        %precedence symbol 's' "symbol" 10 0

        %nterm<tag>
        %token<tag>
        %token id
        %token id 10
        %token id 10 "str"
        %token id "str"
        %type<tag> symbol symbol2

        %start a
        %start 'a'
        %start "a"

        %destructor {code} symbol "symbol" 's' <tag<tag>>
        %printer {code} symbol "symbol" 's' <tag<tag>>
        %printer {code} symbol "symbol" 's' <*>
        %printer {code} symbol "symbol" 's' <>

        %default-prec
        %no-default-prec

        %code ID {code}
        %code {code}

        %union ID {code}
        %union {code}
`
    let grammarDeclarationWithSemicolons = ''
    for (const line of grammarDeclaration.split(/(\r|\n)+/)) {
      if (line.trim() === '') {
        continue
      }

      grammarDeclarationWithSemicolons += `${line};\n`
    }

    it('should allow prologue declarations', () => {
      parser.parse.bind(parser, `
        ${grammarDeclaration}

        %{
          someCode();
        %}

        %debug
        %locations
        %pure-parser
        
        %define VAR VAL
        %define "VAR" "VAL"

        %defines "WHATEVER"
        %defines

        %error-verbose
        %fixed-output-files
        %glr-parser
        %no-default-prec
        %no-lines
        %nondeterministic-parser
        %token-table
        %verbose
        %yacc

        %file-prefix "prefix"
        %language "java"
        %name-prefix "prefix"
        %output "output"
        %require "require"
        %skeleton "skeleton"

        %expect-rr 1
        %expect 1

        %initial-action {someCode();}

        %param {someCode();} {} {moreCode();}
        %lex-param {someCode();} {} {moreCode();}
        %parse-param {someCode();} {} {moreCode();}

        ;
        %%
        a: b c;
    `).should.not.throw()
    })

    it('should allow grammarDeclaration inside grammar part', () => {
      parser.parse.bind(parser, `
        %%
        a: b c;
        ${grammarDeclarationWithSemicolons}
    `).should.not.throw()
    })

    it('should allow do not specify prologue and epilogue', () => {
      parser.parse.bind(parser, `
        %%
        a: b c;
    `).should.not.throw()
    })

    it('should allow specify epilogue', () => {
      parser.parse.bind(parser, `
        %%
        a: b c;
        %%
        someCode();
    `).should.not.throw()
    })
  })
})
