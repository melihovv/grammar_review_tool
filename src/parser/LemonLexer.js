// Generated from D:/Files/Projects/grammar_review_tool/src/parser\Lemon.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0012\u00ba\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0007\tB\n\t\f\t\u000e\tE\u000b\t\u0003\n\u0003\n\u0007\nI\n\n\f\n",
    "\u000e\nL\u000b\n\u0003\u000b\u0003\u000b\u0007\u000bP\n\u000b\f\u000b",
    "\u000e\u000bS\u000b\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0007\fY\n",
    "\f\f\f\u000e\f\\\u000b\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0007\rf\n\r\f\r\u000e\ri\u000b\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0005\u000er\n\u000e",
    "\u0003\u000e\u0005\u000eu\n\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0006\u000fz\n\u000f\r\u000f\u000e\u000f{\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0007\u0010\u0082\n\u0010\f\u0010\u000e\u0010\u0085",
    "\u000b\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0007\u0011\u008d\n\u0011\f\u0011\u000e\u0011\u0090\u000b",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007",
    "\u0011\u0097\n\u0011\f\u0011\u000e\u0011\u009a\u000b\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0007\u0011\u009f\n\u0011\f\u0011\u000e\u0011",
    "\u00a2\u000b\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u00a8\n\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0005\u0016\u00b5\n\u0016\u0003\u0017\u0003\u0017\u0005",
    "\u0017\u00b9\n\u0017\u0006Zg\u0083\u00a0\u0002\u0018\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b",
    "\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012",
    "#\u0002%\u0002\'\u0002)\u0002+\u0002-\u0002\u0003\u0002\n\u0007\u0002",
    "\u000b\u000b\u000f\u000f\"\"^^xx\u0003\u0002))\u0003\u0002$$\u0003\u0002",
    "\u007f\u007f\u0003\u0002C\\\u0003\u0002c|\u0003\u00022;\u0003\u0002",
    "3;\u00c9\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002",
    "\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002",
    "\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002",
    "\u0002\u0002\u0003/\u0003\u0002\u0002\u0002\u00053\u0003\u0002\u0002",
    "\u0002\u00075\u0003\u0002\u0002\u0002\t7\u0003\u0002\u0002\u0002\u000b",
    "9\u0003\u0002\u0002\u0002\r;\u0003\u0002\u0002\u0002\u000f=\u0003\u0002",
    "\u0002\u0002\u0011?\u0003\u0002\u0002\u0002\u0013F\u0003\u0002\u0002",
    "\u0002\u0015M\u0003\u0002\u0002\u0002\u0017T\u0003\u0002\u0002\u0002",
    "\u0019a\u0003\u0002\u0002\u0002\u001bt\u0003\u0002\u0002\u0002\u001d",
    "y\u0003\u0002\u0002\u0002\u001f\u007f\u0003\u0002\u0002\u0002!\u00a7",
    "\u0003\u0002\u0002\u0002#\u00a9\u0003\u0002\u0002\u0002%\u00ab\u0003",
    "\u0002\u0002\u0002\'\u00ad\u0003\u0002\u0002\u0002)\u00af\u0003\u0002",
    "\u0002\u0002+\u00b4\u0003\u0002\u0002\u0002-\u00b8\u0003\u0002\u0002",
    "\u0002/0\u0007<\u0002\u000201\u0007<\u0002\u000212\u0007?\u0002\u0002",
    "2\u0004\u0003\u0002\u0002\u000234\u00070\u0002\u00024\u0006\u0003\u0002",
    "\u0002\u000256\u0007]\u0002\u00026\b\u0003\u0002\u0002\u000278\u0007",
    "_\u0002\u00028\n\u0003\u0002\u0002\u00029:\u0007*\u0002\u0002:\f\u0003",
    "\u0002\u0002\u0002;<\u0007+\u0002\u0002<\u000e\u0003\u0002\u0002\u0002",
    "=>\u0007\'\u0002\u0002>\u0010\u0003\u0002\u0002\u0002?C\u0005#\u0012",
    "\u0002@B\u0005-\u0017\u0002A@\u0003\u0002\u0002\u0002BE\u0003\u0002",
    "\u0002\u0002CA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002D\u0012",
    "\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002FJ\u0005%\u0013\u0002",
    "GI\u0005-\u0017\u0002HG\u0003\u0002\u0002\u0002IL\u0003\u0002\u0002",
    "\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002K\u0014\u0003",
    "\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002MQ\u0005)\u0015\u0002NP",
    "\u0005\'\u0014\u0002ON\u0003\u0002\u0002\u0002PS\u0003\u0002\u0002\u0002",
    "QO\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002R\u0016\u0003\u0002",
    "\u0002\u0002SQ\u0003\u0002\u0002\u0002TU\u00071\u0002\u0002UV\u0007",
    "1\u0002\u0002VZ\u0003\u0002\u0002\u0002WY\u000b\u0002\u0002\u0002XW",
    "\u0003\u0002\u0002\u0002Y\\\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002",
    "\u0002ZX\u0003\u0002\u0002\u0002[]\u0003\u0002\u0002\u0002\\Z\u0003",
    "\u0002\u0002\u0002]^\u0005\u001b\u000e\u0002^_\u0003\u0002\u0002\u0002",
    "_`\b\f\u0002\u0002`\u0018\u0003\u0002\u0002\u0002ab\u00071\u0002\u0002",
    "bc\u0007,\u0002\u0002cg\u0003\u0002\u0002\u0002df\u000b\u0002\u0002",
    "\u0002ed\u0003\u0002\u0002\u0002fi\u0003\u0002\u0002\u0002gh\u0003\u0002",
    "\u0002\u0002ge\u0003\u0002\u0002\u0002hj\u0003\u0002\u0002\u0002ig\u0003",
    "\u0002\u0002\u0002jk\u0007,\u0002\u0002kl\u00071\u0002\u0002lm\u0003",
    "\u0002\u0002\u0002mn\b\r\u0002\u0002n\u001a\u0003\u0002\u0002\u0002",
    "oq\u0007\u000f\u0002\u0002pr\u0007\f\u0002\u0002qp\u0003\u0002\u0002",
    "\u0002qr\u0003\u0002\u0002\u0002ru\u0003\u0002\u0002\u0002su\u0007\f",
    "\u0002\u0002to\u0003\u0002\u0002\u0002ts\u0003\u0002\u0002\u0002uv\u0003",
    "\u0002\u0002\u0002vw\b\u000e\u0002\u0002w\u001c\u0003\u0002\u0002\u0002",
    "xz\t\u0002\u0002\u0002yx\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002",
    "\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|}\u0003\u0002",
    "\u0002\u0002}~\b\u000f\u0002\u0002~\u001e\u0003\u0002\u0002\u0002\u007f",
    "\u0083\u0007}\u0002\u0002\u0080\u0082\u0005!\u0011\u0002\u0081\u0080",
    "\u0003\u0002\u0002\u0002\u0082\u0085\u0003\u0002\u0002\u0002\u0083\u0084",
    "\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0084\u0086",
    "\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0086\u0087",
    "\u0007\u007f\u0002\u0002\u0087 \u0003\u0002\u0002\u0002\u0088\u008e",
    "\u0007)\u0002\u0002\u0089\u008d\n\u0003\u0002\u0002\u008a\u008b\u0007",
    "^\u0002\u0002\u008b\u008d\u0007)\u0002\u0002\u008c\u0089\u0003\u0002",
    "\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008d\u0090\u0003\u0002",
    "\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002",
    "\u0002\u0002\u008f\u0091\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002",
    "\u0002\u0002\u0091\u00a8\u0007)\u0002\u0002\u0092\u0098\u0007$\u0002",
    "\u0002\u0093\u0097\n\u0004\u0002\u0002\u0094\u0095\u0007^\u0002\u0002",
    "\u0095\u0097\u0007$\u0002\u0002\u0096\u0093\u0003\u0002\u0002\u0002",
    "\u0096\u0094\u0003\u0002\u0002\u0002\u0097\u009a\u0003\u0002\u0002\u0002",
    "\u0098\u0096\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002",
    "\u0099\u009b\u0003\u0002\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002",
    "\u009b\u00a8\u0007$\u0002\u0002\u009c\u00a0\u0007}\u0002\u0002\u009d",
    "\u009f\u0005!\u0011\u0002\u009e\u009d\u0003\u0002\u0002\u0002\u009f",
    "\u00a2\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a0",
    "\u009e\u0003\u0002\u0002\u0002\u00a1\u00a3\u0003\u0002\u0002\u0002\u00a2",
    "\u00a0\u0003\u0002\u0002\u0002\u00a3\u00a8\u0007\u007f\u0002\u0002\u00a4",
    "\u00a8\u0005\u0017\f\u0002\u00a5\u00a8\u0005\u0019\r\u0002\u00a6\u00a8",
    "\n\u0005\u0002\u0002\u00a7\u0088\u0003\u0002\u0002\u0002\u00a7\u0092",
    "\u0003\u0002\u0002\u0002\u00a7\u009c\u0003\u0002\u0002\u0002\u00a7\u00a4",
    "\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a7\u00a6",
    "\u0003\u0002\u0002\u0002\u00a8\"\u0003\u0002\u0002\u0002\u00a9\u00aa",
    "\t\u0006\u0002\u0002\u00aa$\u0003\u0002\u0002\u0002\u00ab\u00ac\t\u0007",
    "\u0002\u0002\u00ac&\u0003\u0002\u0002\u0002\u00ad\u00ae\t\b\u0002\u0002",
    "\u00ae(\u0003\u0002\u0002\u0002\u00af\u00b0\t\t\u0002\u0002\u00b0*\u0003",
    "\u0002\u0002\u0002\u00b1\u00b5\u0005#\u0012\u0002\u00b2\u00b5\u0005",
    "%\u0013\u0002\u00b3\u00b5\u0007a\u0002\u0002\u00b4\u00b1\u0003\u0002",
    "\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b3\u0003\u0002",
    "\u0002\u0002\u00b5,\u0003\u0002\u0002\u0002\u00b6\u00b9\u0005+\u0016",
    "\u0002\u00b7\u00b9\u0005\'\u0014\u0002\u00b8\u00b6\u0003\u0002\u0002",
    "\u0002\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b9.\u0003\u0002\u0002",
    "\u0002\u0014\u0002CJQZgqt{\u0083\u008c\u008e\u0096\u0098\u00a0\u00a7",
    "\u00b4\u00b8\u0003\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function LemonLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

LemonLexer.prototype = Object.create(antlr4.Lexer.prototype);
LemonLexer.prototype.constructor = LemonLexer;

LemonLexer.EOF = antlr4.Token.EOF;
LemonLexer.T__0 = 1;
LemonLexer.T__1 = 2;
LemonLexer.T__2 = 3;
LemonLexer.T__3 = 4;
LemonLexer.T__4 = 5;
LemonLexer.T__5 = 6;
LemonLexer.T__6 = 7;
LemonLexer.TERMINAL = 8;
LemonLexer.NONTERMINAL = 9;
LemonLexer.INT = 10;
LemonLexer.LINE_COMMENT = 11;
LemonLexer.MULTI_LINE_COMMENT = 12;
LemonLexer.NEWLINE = 13;
LemonLexer.WS = 14;
LemonLexer.TARGET_CODE_SECTION = 15;
LemonLexer.TARGET_CODE = 16;


LemonLexer.modeNames = [ "DEFAULT_MODE" ];

LemonLexer.literalNames = [ null, "'::='", "'.'", "'['", "']'", "'('", "')'", 
                            "'%'" ];

LemonLexer.symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "TERMINAL", "NONTERMINAL", "INT", "LINE_COMMENT", 
                             "MULTI_LINE_COMMENT", "NEWLINE", "WS", "TARGET_CODE_SECTION", 
                             "TARGET_CODE" ];

LemonLexer.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", 
                         "T__6", "TERMINAL", "NONTERMINAL", "INT", "LINE_COMMENT", 
                         "MULTI_LINE_COMMENT", "NEWLINE", "WS", "TARGET_CODE_SECTION", 
                         "TARGET_CODE", "UPPER", "LOWER", "DIGIT", "DIGIT19", 
                         "ALPHA", "ALPHANUM" ];

LemonLexer.grammarFileName = "Lemon.g4";



exports.LemonLexer = LemonLexer;

