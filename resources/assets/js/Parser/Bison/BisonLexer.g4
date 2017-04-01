lexer grammar BisonLexer;

WS: Ws+ -> channel(HIDDEN);
BLOCK_COMMENT: BlockComment -> channel(HIDDEN);
LINE_COMMENT: LineComment -> channel(HIDDEN);

PERCENT_GRAMMAR_NO_PARAM
    : '%' (
          'default-prec'
        | 'no-default-prec'
    );

PERCENT_NO_PARAM
    : '%' (
          'error-verbose'
        | 'fixed-output-files'
        | 'glr-parser'
        | 'no-default-prec'
        | 'no-lines'
        | 'nondeterministic-parser'
        | 'token-table'
        | 'verbose'
        | 'yacc'
    );

PERCENT_STRING_PARAM
    : '%' (
          'file-prefix'
        | 'language'
        | 'name-prefix'
        | 'output'
        | 'require'
        | 'skeleton'
    );

PERCENT_INT_PARAM
    : '%' (
          'expect-rr'
        | 'expect'
    );

PERCENT_CODE: '%code';
PERCENT_DEFINE: '%define';
PERCENT_DEFINES: '%defines';
PERCENT_DPREC: '%dprec';
PERCENT_DESTRUCTOR: '%destructor';
PERCENT_EMPTY: '%empty';
PERCENT_FLAG: '%' ('debug'|'locations'|'pure-parser');
PERCENT_INITIAL_ACTION: '%initial-action';
PERCENT_LEFT: '%left';
PERCENT_MERGE: '%merge';
PERCENT_NONASSOC: ('%binary'|'%nonassoc');
PERCENT_NTERM: '%nterm';
PERCENT_PARAM: '%' ('param'|'lex-param'|'parse-param');
PERCENT_PREC: '%prec';
PERCENT_PRECEDENCE: '%precedence';
PERCENT_PRINTER: '%printer';
PERCENT_RIGHT: '%right';
PERCENT_START: '%start';
PERCENT_TOKEN: ('%term'|'%token');
PERCENT_TYPE: '%type';
PERCENT_UNION: '%union';

PIPE: Pipe;
SEMICOLON: Semicolon;

ID: Id -> pushMode(AFTER_ID);

INT: Int|HexInt;

CHAR: SQuote ('\\\\'|'\\\''|~['\r\n])* SQuote;
STRING: DQuote ('\\\\'|'\\"'|~["\r\n])* DQuote;

PROLOGUE_START: OpenPrologue -> pushMode(PROLOGUE);
PERCENT_PERCENT: '%%' {
    if (this.percentPercentCount === undefined) {
        this.percentPercentCount = 0;
    }

    if (++this.percentPercentCount == 2) {
        this.pushMode(BisonLexer.EPILOGUE);
    }
};
BRACED_CODE_START: '{' -> pushMode(BRACED_CODE);
PREDICATE_START: OpenPredicate -> pushMode(PREDICATE);

TAG_ANY: '<*>';
TAG_NONE: '<>';
TAG_START: '<' -> pushMode(TAG);

REF: LBracket Id RBracket;

ERROR_CHARACTER: .;

mode AFTER_ID;
AFTER_ID_WS: Ws+ -> channel(HIDDEN);
AFTER_ID_BLOCK_COMMENT: BlockComment -> channel(HIDDEN);
AFTER_ID_LINE_COMMENT: LineComment -> channel(HIDDEN);
AFTER_ID_OPEN_BRACKET: LBracket Id RBracket;
AFTER_ID_COLON: Colon;
// This is implementation of missing "less" command.
// See https://github.com/antlr/antlr4/issues/212#issuecomment-269515905.
AFTER_ID_ANY: ~[/:[] {
    this._input.seek(this._tokenStartCharIndex);
    this._type = antlr4.Lexer.MORE;
} -> popMode;

mode PROLOGUE;
PROLOGUE_OPEN: OpenPrologue -> type(PROLOGUE_CONTENT), pushMode(PROLOGUE);

PROLOGUE_SQUOTED_STRING: SQuote ('\\\\'|'\\\''|~['\r\n])* SQuote -> type(PROLOGUE_CONTENT);
PROLOGUE_DQUOTED_STRING: DQuote ('\\\\'|'\\"'|~["\r\n])* DQuote -> type(PROLOGUE_CONTENT);

PROLOGUE_SLASH: '/' . -> type(PROLOGUE_CONTENT);
PROLOGUE_BLOCK_COMMENT: BlockComment -> type(PROLOGUE_CONTENT);
PROLOGUE_LINE_COMMENT: LineComment -> type(PROLOGUE_CONTENT);

PROLOGUE_PERCENT: '%' -> type(PROLOGUE_CONTENT);

PROLOGUE_CLOSE: ClosePrologue {
    this.popMode();

    if (this._modeStack.length) {
        this.type = BisonLexer.PROLOGUE_CONTENT;
    }
};
PROLOGUE_CONTENT: ~['"{}/%]+;

mode EPILOGUE;
EPILOGUE_CONTENT: .+;

mode BRACED_CODE;
BRACED_CODE_OPEN: LBrace -> type(BRACED_CODE_CONTENT), pushMode(BRACED_CODE);

BRACED_CODE_SQUOTED_STRING: SQuote ('\\\\'|'\\\''|~['\r\n])* SQuote -> type(BRACED_CODE_CONTENT);
BRACED_CODE_DQUOTED_STRING: DQuote ('\\\\'|'\\"'|~["\r\n])* DQuote -> type(BRACED_CODE_CONTENT);

BRACED_CODE_SLASH: '/' . -> type(BRACED_CODE_CONTENT);
BRACED_CODE_BLOCK_COMMENT: BlockComment -> type(BRACED_CODE_CONTENT);
BRACED_CODE_LINE_COMMENT: LineComment -> type(BRACED_CODE_CONTENT);

BRACED_CODE_CLOSE: RBrace {
    this.popMode();

    if (this._modeStack.length) {
        this.type = BisonLexer.BRACED_CODE_CONTENT;
    }
};
BRACED_CODE_CONTENT: ~['"{}/]+;

mode PREDICATE;
PREDICATE_OPEN: OpenPredicate -> type(PREDICATE_CONTENT), pushMode(PREDICATE);

// TODO extract to fragment.
PREDICATE_SQUOTED_STRING: SQuote ('\\\\'|'\\\''|~['\r\n])* SQuote -> type(PREDICATE_CONTENT);
PREDICATE_DQUOTED_STRING: DQuote ('\\\\'|'\\"'|~["\r\n])* DQuote -> type(PREDICATE_CONTENT);

PREDICATE_SLASH: '/' . -> type(PREDICATE_CONTENT);
PREDICATE_BLOCK_COMMENT: BlockComment -> type(PREDICATE_CONTENT);
PREDICATE_LINE_COMMENT: LineComment -> type(PREDICATE_CONTENT);

PREDICATE_QUESTION: '?' -> type(PREDICATE_CONTENT);
PREDICATE_PERCENT: '%' -> type(PREDICATE_CONTENT);

PREDICATE_CLOSE: ClosePredicate {
    this.popMode();

    if (this._modeStack.length) {
        this.type = BisonLexer.PREDICATE_CONTENT;
    }
};
PREDICATE_CONTENT: ~['"{}/%?]+;

mode TAG;
TAG_OPEN: '<' -> type(TAG_CONTENT), pushMode(TAG);
TAG_CLOSE: '>' {
    this.popMode();

    if (this._modeStack.length) {
        this.type = BisonLexer.TAG_CONTENT;
    }
};
TAG_CONTENT: ~[<>]+;

fragment Digit: [0-9];
fragment Int: Digit+;
fragment HexInt: [0][xX][0-9abcdefABCDEF]+;
fragment Upper: [A-Z];
fragment Lower: [a-z];
fragment Alpha: Upper|Lower|'_';
fragment Letter: Alpha|'.';
fragment LBrace: '{';
fragment RBrace: '}';
fragment LBracket: '[';
fragment RBracket: ']';
fragment DSlash: '//';
fragment Pipe: '|';
fragment Semicolon: ';';
fragment Ws: Hws|Vws;
fragment Hws: [ \t];
fragment Vws: [\r\n\f\u000B]; // \u000B is \v
fragment BlockComment: '/*' .*? '*/';
fragment LineComment: DSlash ~[\r\n]*;
fragment SQuote: '\'';
fragment DQuote: '"';
fragment OpenPredicate: '%?' Ws* '{';
fragment ClosePredicate: '}';
fragment OpenPrologue: '%{';
fragment ClosePrologue: '%}';
fragment Colon: ':';
fragment Id: Letter (Letter|[-0-9])*;
