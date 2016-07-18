lexer grammar LemonLexer;

TERMINAL: UPPER ALPHANUM*;
NON_TERMINAL: LOWER ALPHANUM*;
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
