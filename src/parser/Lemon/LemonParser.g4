parser grammar LemonParser;

options {tokenVocab = LemonLexer;}

file: (grammarRule|directive)+;

grammarRule: leftSide ASSIGN rightSide;
leftSide: NONTERMINAL param?;
rightSide: ((symbol param?)+)? DOT precedence? codeBlock?;

precedence: LBRACKET TERMINAL RBRACKET;
symbol: TERMINAL|NONTERMINAL;
param: LPAREN symbol RPAREN;
directive
    : PERCENT NONTERMINAL (
        symbol | // name, token_prefix
        (TERMINAL+ DOT) | // left, right, nonassoc
        codeBlock | // declare_class destructor extra_argument
                    // include_class include parse_accept
                    // parse_failure stack_overflow
                    // syntax_error token_destructor token_type
        NONTERMINAL | // start_symbol
        INT | // stack_size
        (NONTERMINAL codeBlock) // type
    )
    ;

codeBlock
    : BEGIN_CODE CODE_CONTENT* END_CODE;
