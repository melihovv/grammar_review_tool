'use strict';

import Parser from './Parser';

describe('parser', function () {
    describe('syntax', () => {
        const parser = new Parser();

        it('must understand directives', () => {
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
            `).must.not.throw();
        });

        it('must properly handle closing braces in php code sections', () => {
            parser.parse.bind(parser, `
                %destructor {
                    '}'
                }
                %syntax_error {"}"}
            `).must.not.throw();
        });

        it('must not properly handle closing braces in nowdoc and heredoc', () => {
            parser.parse.bind(parser, `
                %destructor {
                    <<<HERE
                    }
HERE;
                }
            `).must.throw();
            parser.parse.bind(parser, `
                %destructor {
                    <<<'NOW'
                    }
NOW;
                }
            `).must.throw();
        });

        it('must understand grammar rules', () => {
            parser.parse.bind(parser, `
                rule ::= A B.
            `).must.not.throw();
        });

        it('must understand grammar rules with params', () => {
            parser.parse.bind(parser, `
                rule(p1) ::= A(p2) B(p3).
            `).must.not.throw();
        });

        it('must understand grammar rules with params and precedence', () => {
            parser.parse.bind(parser, `
                rule(p1) ::= A(p2) B(p3). [NOT]
            `).must.not.throw();
        });

        it('must understand grammar rules with params, precedence and code section', () => {
            parser.parse.bind(parser, `
                rule(p1) ::= A(p2) B(p3). [NOT] {echo 'hi';}
            `).must.not.throw();
        });

        it('must understand single and multiline comments', () => {
            parser.parse.bind(parser, `
                // comment
                rule(p1) ::= A(p2) B(p3)/*comment*/. [NOT] {
                    // comment
                    echo 'hi'/**/;
                }
            `).must.not.throw();
        });
    });
});
