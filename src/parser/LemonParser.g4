grammar LemonParser;

prog: (grammar_rule|directive)+;

grammar_rule: left_side '::=' right_side;
left_side: NONTERMINAL param?;
right_side: ((symbol param?)+)? '.' precedence? TARGET_CODE_SECTION?;

precedence: '[' TERMINAL ']';
symbol: TERMINAL|NONTERMINAL;
param: '(' symbol ')';
directive
    : '%' (
        (('name'|'token_prefix') symbol) |
        (('left'|'right'|'nonassoc') TERMINAL+ '.') |
        (
            (
                'declare_class' |
                'destructor' |
                'extra_argument' |
                'include_class' |
                'include' |
                'parse_accept' |
                'parse_failure' |
                'stack_overflow' |
                'syntax_error' |
                'token_destructor' |
                'token_type'
            ) TARGET_CODE_SECTION
        ) |
        ('start_symbol' NONTERMINAL) |
        ('stack_size' INT) |
        ('type' NONTERMINAL TARGET_CODE_SECTION)
    )
    ;

TERMINAL: UPPER ALPHANUM*;
NONTERMINAL: LOWER ALPHANUM*;
INT: DIGIT19 DIGIT*;

LINE_COMMENT: '//' .*? NEWLINE -> skip;
MULTI_LINE_COMMENT: '/*' .*? '*/' -> skip;

NEWLINE: ('\r' '\n'?|'\n') -> skip;
WS: [ \r\v\t]+ -> skip;

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
