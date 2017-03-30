lexer grammar LemonLexer;

BLOCK_COMMENT: BlockComment -> channel(HIDDEN);
LINE_COMMENT: LineComment -> channel(HIDDEN);

INT: Int;

BEGIN_CODE: LBrace -> pushMode(Code);

ASSIGN: '::=';
DOT: Dot;
LBRACE: LBrace;
RBRACE: RBrace;
LBRACKET: LBracket;
RBRACKET: RBracket;
LPAREN: LParen;
RPAREN: RParen;
PERCENT: Percent;

TERMINAL: Upper Alphanum*;
NONTERMINAL: Lower Alphanum*;

WS: Ws+ -> channel(HIDDEN);

ERROR_CHARACTER: .;

mode Code;
NESTED_CODE: LBrace -> type(CODE_CONTENT), pushMode(Code);
BEGIN_SQUOTED_STRING: SQuote ('\\\''|~['])* SQuote -> type(CODE_CONTENT);
BEGIN_DQUOTED_STRING: DQuote ('\\"'|~["])* DQuote -> type(CODE_CONTENT);
// Without the following line string containing slash, for example,
// "require_once('/a/b/c')" will be not properly parsed.
CODE_SLASH: '/' . -> type(CODE_CONTENT);
CODE_BLOCK_COMMENT: BlockComment -> type(CODE_CONTENT);
CODE_LINE_COMMENT: LineComment -> type(CODE_CONTENT);

END_CODE: RBrace {
    this.popMode();
    if (this._modeStack.length) {
        this.type = LemonLexer.CODE_CONTENT;
    }
};

CODE_CONTENT: ~['"{}/]+;

fragment Digit: [0-9];
fragment Int: Digit+;
fragment Upper: [A-Z];
fragment Lower: [a-z];
fragment Alpha: Upper|Lower|'_';
fragment Alphanum: Alpha|Digit;
fragment LBrace: '{';
fragment RBrace: '}';
fragment LBracket: '[';
fragment RBracket: ']';
fragment LParen: '(';
fragment RParen: ')';
fragment Dot: '.';
fragment Percent: '%';
fragment DSlash: '//';
fragment Ws: Hws|Vws;
fragment Hws: [ \t];
fragment Vws: [\r\n\f\u000B]; // \u000B is \v
fragment BlockComment: '/*' .*? '*/';
fragment LineComment: DSlash ~[\r\n]*;
fragment SQuote: '\'';
fragment DQuote: '"';
