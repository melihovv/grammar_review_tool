grammar Lemon;

file: (grammarRule|directive)+;

grammarRule: leftSide '::=' rightSide;
leftSide: NONTERMINAL param?;
rightSide: ((symbol param?)+)? '.' precedence? TARGET_CODE_SECTION?;

precedence: '[' TERMINAL ']';
symbol: TERMINAL|NONTERMINAL;
param: '(' symbol ')';
directive
    : '%' NONTERMINAL (
        (symbol) | // name, token_prefix
        (TERMINAL+ '.') | // left, right, nonassoc
        (TARGET_CODE_SECTION) | // declare_class destructor extra_argument
        // include_class include parse_accept parse_failure stack_overflow
        // syntax_error token_destructor token_type
        (NONTERMINAL) | // start_symbol
        (INT) | // stack_size
        (NONTERMINAL TARGET_CODE_SECTION) // type
    )
    ;

TERMINAL: UPPER ALPHANUM*;
NONTERMINAL: LOWER ALPHANUM*;
INT: DIGIT19 DIGIT*;

LINE_COMMENT: '//' .*? NEWLINE -> channel(HIDDEN);
MULTI_LINE_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

NEWLINE: ('\r' '\n'?|'\n') -> channel(HIDDEN);
WS: [ \r\v\t]+ -> channel(HIDDEN);

TARGET_CODE_SECTION: '{' TARGET_CODE*? '}';
TARGET_CODE
    : '\'' (~[']|'\\\'')* '\''
    | '"' (~["]|'\\"')* '"'
    | '{' TARGET_CODE*? '}'
    | LINE_COMMENT
    | MULTI_LINE_COMMENT
    | ~[}]
    ;

fragment UPPER: [A-Z];
fragment LOWER: [a-z];
fragment DIGIT: [0-9];
fragment DIGIT19: [1-9];
fragment ALPHA: UPPER|LOWER|'_';
fragment ALPHANUM: ALPHA|DIGIT;
