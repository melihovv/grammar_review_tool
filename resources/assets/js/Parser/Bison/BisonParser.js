// Generated from /home/melihovv/Projects/edu/grammar_review_tool/resources/assets/js/Parser/Bison/BisonParser.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BisonParserListener = require('./BisonParserListener').BisonParserListener;
var BisonParserVisitor = require('./BisonParserVisitor').BisonParserVisitor;

var grammarFileName = "BisonParser.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003>\u0115\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0005\u00024\n\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u00029\n\u0002\u0003\u0003",
    "\u0006\u0003<\n\u0003\r\u0003\u000e\u0003=\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004I\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0006",
    "\u0004T\n\u0004\r\u0004\u000e\u0004U\u0003\u0004\u0005\u0004Y\n\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0006\u0005c\n\u0005\r\u0005\u000e\u0005d\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005j\n\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005o\n\u0005\u0003\u0005\u0005\u0005r\n\u0005",
    "\u0003\u0006\u0003\u0006\u0007\u0006v\n\u0006\f\u0006\u000e\u0006y\u000b",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0007\u0007\u007f",
    "\n\u0007\f\u0007\u000e\u0007\u0082\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0007\b\u0088\n\b\f\b\u000e\b\u008b\u000b\b\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0006\t\u0091\n\t\r\t\u000e\t\u0092\u0003\t",
    "\u0003\t\u0003\n\u0003\n\u0006\n\u0099\n\n\r\n\u000e\n\u009a\u0003\n",
    "\u0003\n\u0006\n\u009f\n\n\r\n\u000e\n\u00a0\u0003\n\u0003\n\u0003\n",
    "\u0006\n\u00a6\n\n\r\n\u000e\n\u00a7\u0005\n\u00aa\n\n\u0003\u000b\u0003",
    "\u000b\u0005\u000b\u00ae\n\u000b\u0003\u000b\u0003\u000b\u0006\u000b",
    "\u00b2\n\u000b\r\u000b\u000e\u000b\u00b3\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0005\r\u00bb\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u00c1\n\u000e\u0003\u000e\u0005\u000e\u00c4\n\u000e",
    "\u0005\u000e\u00c6\n\u000e\u0003\u000f\u0006\u000f\u00c9\n\u000f\r\u000f",
    "\u000e\u000f\u00ca\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u00d1\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011",
    "\u00d6\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0007\u0012\u00db",
    "\n\u0012\f\u0012\u000e\u0012\u00de\u000b\u0012\u0003\u0012\u0003\u0012",
    "\u0007\u0012\u00e2\n\u0012\f\u0012\u000e\u0012\u00e5\u000b\u0012\u0007",
    "\u0012\u00e7\n\u0012\f\u0012\u000e\u0012\u00ea\u000b\u0012\u0003\u0012",
    "\u0005\u0012\u00ed\n\u0012\u0003\u0013\u0003\u0013\u0005\u0013\u00f1",
    "\n\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00f5\n\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0005\u0013\u00ff\n\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0107\n\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0005\u0017\u010d\n",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0005\u0019\u0113",
    "\n\u0019\u0003\u0019\u0002\u0002\u001a\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.0\u0002\u0007",
    "\u0004\u0002\u000e\u000e\u0019\u0019\u0006\u0002\u0012\u0012\u0014\u0014",
    "\u0018\u0018\u001a\u001a\u0004\u0002!!$$\u0004\u0002!!##\u0004\u0002",
    ",,11\u013b\u00023\u0003\u0002\u0002\u0002\u0004;\u0003\u0002\u0002\u0002",
    "\u0006X\u0003\u0002\u0002\u0002\bq\u0003\u0002\u0002\u0002\ns\u0003",
    "\u0002\u0002\u0002\f|\u0003\u0002\u0002\u0002\u000e\u0085\u0003\u0002",
    "\u0002\u0002\u0010\u008e\u0003\u0002\u0002\u0002\u0012\u00a9\u0003\u0002",
    "\u0002\u0002\u0014\u00ab\u0003\u0002\u0002\u0002\u0016\u00b5\u0003\u0002",
    "\u0002\u0002\u0018\u00ba\u0003\u0002\u0002\u0002\u001a\u00c5\u0003\u0002",
    "\u0002\u0002\u001c\u00c8\u0003\u0002\u0002\u0002\u001e\u00d0\u0003\u0002",
    "\u0002\u0002 \u00d2\u0003\u0002\u0002\u0002\"\u00dc\u0003\u0002\u0002",
    "\u0002$\u00fe\u0003\u0002\u0002\u0002&\u0100\u0003\u0002\u0002\u0002",
    "(\u0106\u0003\u0002\u0002\u0002*\u0108\u0003\u0002\u0002\u0002,\u010c",
    "\u0003\u0002\u0002\u0002.\u010e\u0003\u0002\u0002\u00020\u0110\u0003",
    "\u0002\u0002\u000224\u0005\u0004\u0003\u000232\u0003\u0002\u0002\u0002",
    "34\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u000256\u0007&\u0002",
    "\u000268\u0005\u001c\u000f\u000279\u00050\u0019\u000287\u0003\u0002",
    "\u0002\u000289\u0003\u0002\u0002\u00029\u0003\u0003\u0002\u0002\u0002",
    ":<\u0005\u0006\u0004\u0002;:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002",
    "\u0002=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>\u0005\u0003",
    "\u0002\u0002\u0002?Y\u0005\b\u0005\u0002@Y\u0005\n\u0006\u0002AY\u0007",
    "\u0010\u0002\u0002BC\u0007\u000b\u0002\u0002CD\u0005&\u0014\u0002DE",
    "\u0005(\u0015\u0002EY\u0003\u0002\u0002\u0002FH\u0007\f\u0002\u0002",
    "GI\u0007$\u0002\u0002HG\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002",
    "\u0002IY\u0003\u0002\u0002\u0002JY\u0007\u0007\u0002\u0002KL\u0007\b",
    "\u0002\u0002LY\u0007$\u0002\u0002MN\u0007\t\u0002\u0002NY\u0007\"\u0002",
    "\u0002OP\u0007\u0011\u0002\u0002PY\u0005\f\u0007\u0002QS\u0007\u0016",
    "\u0002\u0002RT\u0005\f\u0007\u0002SR\u0003\u0002\u0002\u0002TU\u0003",
    "\u0002\u0002\u0002US\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002",
    "VY\u0003\u0002\u0002\u0002WY\u0007 \u0002\u0002X?\u0003\u0002\u0002",
    "\u0002X@\u0003\u0002\u0002\u0002XA\u0003\u0002\u0002\u0002XB\u0003\u0002",
    "\u0002\u0002XF\u0003\u0002\u0002\u0002XJ\u0003\u0002\u0002\u0002XK\u0003",
    "\u0002\u0002\u0002XM\u0003\u0002\u0002\u0002XO\u0003\u0002\u0002\u0002",
    "XQ\u0003\u0002\u0002\u0002XW\u0003\u0002\u0002\u0002Y\u0007\u0003\u0002",
    "\u0002\u0002Zr\u0005\u0014\u000b\u0002[r\u0005\u0012\n\u0002\\]\u0007",
    "\u001b\u0002\u0002]r\u0005,\u0017\u0002^_\t\u0002\u0002\u0002_b\u0005",
    "\f\u0007\u0002`c\u0005,\u0017\u0002ac\u0005\u0018\r\u0002b`\u0003\u0002",
    "\u0002\u0002ba\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002db\u0003",
    "\u0002\u0002\u0002de\u0003\u0002\u0002\u0002er\u0003\u0002\u0002\u0002",
    "fr\u0007\u0006\u0002\u0002gi\u0007\n\u0002\u0002hj\u0007!\u0002\u0002",
    "ih\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002",
    "\u0002kr\u0005\f\u0007\u0002ln\u0007\u001e\u0002\u0002mo\u0007!\u0002",
    "\u0002nm\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002op\u0003\u0002",
    "\u0002\u0002pr\u0005\f\u0007\u0002qZ\u0003\u0002\u0002\u0002q[\u0003",
    "\u0002\u0002\u0002q\\\u0003\u0002\u0002\u0002q^\u0003\u0002\u0002\u0002",
    "qf\u0003\u0002\u0002\u0002qg\u0003\u0002\u0002\u0002ql\u0003\u0002\u0002",
    "\u0002r\t\u0003\u0002\u0002\u0002sw\u0007%\u0002\u0002tv\u00075\u0002",
    "\u0002ut\u0003\u0002\u0002\u0002vy\u0003\u0002\u0002\u0002wu\u0003\u0002",
    "\u0002\u0002wx\u0003\u0002\u0002\u0002xz\u0003\u0002\u0002\u0002yw\u0003",
    "\u0002\u0002\u0002z{\u00074\u0002\u0002{\u000b\u0003\u0002\u0002\u0002",
    "|\u0080\u0007\'\u0002\u0002}\u007f\u00078\u0002\u0002~}\u0003\u0002",
    "\u0002\u0002\u007f\u0082\u0003\u0002\u0002\u0002\u0080~\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0083\u0003\u0002",
    "\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0083\u0084\u00077",
    "\u0002\u0002\u0084\r\u0003\u0002\u0002\u0002\u0085\u0089\u0007(\u0002",
    "\u0002\u0086\u0088\u0007:\u0002\u0002\u0087\u0086\u0003\u0002\u0002",
    "\u0002\u0088\u008b\u0003\u0002\u0002\u0002\u0089\u0087\u0003\u0002\u0002",
    "\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008c\u0003\u0002\u0002",
    "\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008c\u008d\u00079\u0002",
    "\u0002\u008d\u000f\u0003\u0002\u0002\u0002\u008e\u0090\u0007+\u0002",
    "\u0002\u008f\u0091\u0007<\u0002\u0002\u0090\u008f\u0003\u0002\u0002",
    "\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002",
    "\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002",
    "\u0002\u0094\u0095\u0007;\u0002\u0002\u0095\u0011\u0003\u0002\u0002",
    "\u0002\u0096\u0098\u0007\u0015\u0002\u0002\u0097\u0099\u0005\u001a\u000e",
    "\u0002\u0098\u0097\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002",
    "\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002",
    "\u0002\u009b\u00aa\u0003\u0002\u0002\u0002\u009c\u009e\u0007\u001c\u0002",
    "\u0002\u009d\u009f\u0005\u001a\u000e\u0002\u009e\u009d\u0003\u0002\u0002",
    "\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002",
    "\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u00aa\u0003\u0002\u0002",
    "\u0002\u00a2\u00a3\u0007\u001d\u0002\u0002\u00a3\u00a5\u0005\u0010\t",
    "\u0002\u00a4\u00a6\u0005,\u0017\u0002\u00a5\u00a4\u0003\u0002\u0002",
    "\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002",
    "\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u00aa\u0003\u0002\u0002",
    "\u0002\u00a9\u0096\u0003\u0002\u0002\u0002\u00a9\u009c\u0003\u0002\u0002",
    "\u0002\u00a9\u00a2\u0003\u0002\u0002\u0002\u00aa\u0013\u0003\u0002\u0002",
    "\u0002\u00ab\u00ad\u0005\u0016\f\u0002\u00ac\u00ae\u0005\u0010\t\u0002",
    "\u00ad\u00ac\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002",
    "\u00ae\u00b1\u0003\u0002\u0002\u0002\u00af\u00b2\u0005,\u0017\u0002",
    "\u00b0\u00b2\u0007\"\u0002\u0002\u00b1\u00af\u0003\u0002\u0002\u0002",
    "\u00b1\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002",
    "\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002",
    "\u00b4\u0015\u0003\u0002\u0002\u0002\u00b5\u00b6\t\u0003\u0002\u0002",
    "\u00b6\u0017\u0003\u0002\u0002\u0002\u00b7\u00bb\u0005\u0010\t\u0002",
    "\u00b8\u00bb\u0007)\u0002\u0002\u00b9\u00bb\u0007*\u0002\u0002\u00ba",
    "\u00b7\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba",
    "\u00b9\u0003\u0002\u0002\u0002\u00bb\u0019\u0003\u0002\u0002\u0002\u00bc",
    "\u00c6\u0005\u0010\t\u0002\u00bd\u00c3\u0005*\u0016\u0002\u00be\u00c0",
    "\u0007\"\u0002\u0002\u00bf\u00c1\u0007$\u0002\u0002\u00c0\u00bf\u0003",
    "\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c4\u0003",
    "\u0002\u0002\u0002\u00c2\u00c4\u0007$\u0002\u0002\u00c3\u00be\u0003",
    "\u0002\u0002\u0002\u00c3\u00c2\u0003\u0002\u0002\u0002\u00c3\u00c4\u0003",
    "\u0002\u0002\u0002\u00c4\u00c6\u0003\u0002\u0002\u0002\u00c5\u00bc\u0003",
    "\u0002\u0002\u0002\u00c5\u00bd\u0003\u0002\u0002\u0002\u00c6\u001b\u0003",
    "\u0002\u0002\u0002\u00c7\u00c9\u0005\u001e\u0010\u0002\u00c8\u00c7\u0003",
    "\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00c8\u0003",
    "\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb\u001d\u0003",
    "\u0002\u0002\u0002\u00cc\u00d1\u0005 \u0011\u0002\u00cd\u00ce\u0005",
    "\b\u0005\u0002\u00ce\u00cf\u0007 \u0002\u0002\u00cf\u00d1\u0003\u0002",
    "\u0002\u0002\u00d0\u00cc\u0003\u0002\u0002\u0002\u00d0\u00cd\u0003\u0002",
    "\u0002\u0002\u00d1\u001f\u0003\u0002\u0002\u0002\u00d2\u00d3\u0007!",
    "\u0002\u0002\u00d3\u00d5\u00072\u0002\u0002\u00d4\u00d6\u0005.\u0018",
    "\u0002\u00d5\u00d4\u0003\u0002\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002",
    "\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d8\u0005\"\u0012",
    "\u0002\u00d8!\u0003\u0002\u0002\u0002\u00d9\u00db\u0005$\u0013\u0002",
    "\u00da\u00d9\u0003\u0002\u0002\u0002\u00db\u00de\u0003\u0002\u0002\u0002",
    "\u00dc\u00da\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002",
    "\u00dd\u00e8\u0003\u0002\u0002\u0002\u00de\u00dc\u0003\u0002\u0002\u0002",
    "\u00df\u00e3\u0007\u001f\u0002\u0002\u00e0\u00e2\u0005$\u0013\u0002",
    "\u00e1\u00e0\u0003\u0002\u0002\u0002\u00e2\u00e5\u0003\u0002\u0002\u0002",
    "\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002",
    "\u00e4\u00e7\u0003\u0002\u0002\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002",
    "\u00e6\u00df\u0003\u0002\u0002\u0002\u00e7\u00ea\u0003\u0002\u0002\u0002",
    "\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002",
    "\u00e9\u00ec\u0003\u0002\u0002\u0002\u00ea\u00e8\u0003\u0002\u0002\u0002",
    "\u00eb\u00ed\u0007 \u0002\u0002\u00ec\u00eb\u0003\u0002\u0002\u0002",
    "\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed#\u0003\u0002\u0002\u0002",
    "\u00ee\u00f0\u0005,\u0017\u0002\u00ef\u00f1\u0005.\u0018\u0002\u00f0",
    "\u00ef\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1",
    "\u00ff\u0003\u0002\u0002\u0002\u00f2\u00f4\u0005\f\u0007\u0002\u00f3",
    "\u00f5\u0005.\u0018\u0002\u00f4\u00f3\u0003\u0002\u0002\u0002\u00f4",
    "\u00f5\u0003\u0002\u0002\u0002\u00f5\u00ff\u0003\u0002\u0002\u0002\u00f6",
    "\u00ff\u0005\u000e\b\u0002\u00f7\u00ff\u0007\u000f\u0002\u0002\u00f8",
    "\u00f9\u0007\u0017\u0002\u0002\u00f9\u00ff\u0005,\u0017\u0002\u00fa",
    "\u00fb\u0007\r\u0002\u0002\u00fb\u00ff\u0007\"\u0002\u0002\u00fc\u00fd",
    "\u0007\u0013\u0002\u0002\u00fd\u00ff\u0005\u0010\t\u0002\u00fe\u00ee",
    "\u0003\u0002\u0002\u0002\u00fe\u00f2\u0003\u0002\u0002\u0002\u00fe\u00f6",
    "\u0003\u0002\u0002\u0002\u00fe\u00f7\u0003\u0002\u0002\u0002\u00fe\u00f8",
    "\u0003\u0002\u0002\u0002\u00fe\u00fa\u0003\u0002\u0002\u0002\u00fe\u00fc",
    "\u0003\u0002\u0002\u0002\u00ff%\u0003\u0002\u0002\u0002\u0100\u0101",
    "\t\u0004\u0002\u0002\u0101\'\u0003\u0002\u0002\u0002\u0102\u0107\u0003",
    "\u0002\u0002\u0002\u0103\u0107\u0007!\u0002\u0002\u0104\u0107\u0007",
    "$\u0002\u0002\u0105\u0107\u0005\f\u0007\u0002\u0106\u0102\u0003\u0002",
    "\u0002\u0002\u0106\u0103\u0003\u0002\u0002\u0002\u0106\u0104\u0003\u0002",
    "\u0002\u0002\u0106\u0105\u0003\u0002\u0002\u0002\u0107)\u0003\u0002",
    "\u0002\u0002\u0108\u0109\t\u0005\u0002\u0002\u0109+\u0003\u0002\u0002",
    "\u0002\u010a\u010d\u0005*\u0016\u0002\u010b\u010d\u0007$\u0002\u0002",
    "\u010c\u010a\u0003\u0002\u0002\u0002\u010c\u010b\u0003\u0002\u0002\u0002",
    "\u010d-\u0003\u0002\u0002\u0002\u010e\u010f\t\u0006\u0002\u0002\u010f",
    "/\u0003\u0002\u0002\u0002\u0110\u0112\u0007&\u0002\u0002\u0111\u0113",
    "\u00076\u0002\u0002\u0112\u0111\u0003\u0002\u0002\u0002\u0112\u0113",
    "\u0003\u0002\u0002\u0002\u01131\u0003\u0002\u0002\u0002)38=HUXbdinq",
    "w\u0080\u0089\u0092\u009a\u00a0\u00a7\u00a9\u00ad\u00b1\u00b3\u00ba",
    "\u00c0\u00c3\u00c5\u00ca\u00d0\u00d5\u00dc\u00e3\u00e8\u00ec\u00f0\u00f4",
    "\u00fe\u0106\u010c\u0112"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, "'%code'", 
                     "'%define'", "'%defines'", "'%dprec'", "'%destructor'", 
                     "'%empty'", null, "'%initial-action'", "'%left'", "'%merge'", 
                     null, "'%nterm'", null, "'%prec'", "'%precedence'", 
                     "'%printer'", "'%right'", "'%start'", null, "'%type'", 
                     "'%union'", null, null, null, null, null, null, null, 
                     "'%%'", "'{'", null, "'<*>'", "'<>'", "'<'", null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, "'>'", null, null, "'?'" ];

var symbolicNames = [ null, "WS", "BLOCK_COMMENT", "LINE_COMMENT", "PERCENT_GRAMMAR_NO_PARAM", 
                      "PERCENT_NO_PARAM", "PERCENT_STRING_PARAM", "PERCENT_INT_PARAM", 
                      "PERCENT_CODE", "PERCENT_DEFINE", "PERCENT_DEFINES", 
                      "PERCENT_DPREC", "PERCENT_DESTRUCTOR", "PERCENT_EMPTY", 
                      "PERCENT_FLAG", "PERCENT_INITIAL_ACTION", "PERCENT_LEFT", 
                      "PERCENT_MERGE", "PERCENT_NONASSOC", "PERCENT_NTERM", 
                      "PERCENT_PARAM", "PERCENT_PREC", "PERCENT_PRECEDENCE", 
                      "PERCENT_PRINTER", "PERCENT_RIGHT", "PERCENT_START", 
                      "PERCENT_TOKEN", "PERCENT_TYPE", "PERCENT_UNION", 
                      "PIPE", "SEMICOLON", "ID", "INT", "CHAR", "STRING", 
                      "PROLOGUE_START", "PERCENT_PERCENT", "BRACED_CODE_START", 
                      "PREDICATE_START", "TAG_ANY", "TAG_NONE", "TAG_START", 
                      "REF", "ERROR_CHARACTER", "AFTER_ID_WS", "AFTER_ID_BLOCK_COMMENT", 
                      "AFTER_ID_LINE_COMMENT", "AFTER_ID_OPEN_BRACKET", 
                      "AFTER_ID_COLON", "AFTER_ID_ANY", "PROLOGUE_CLOSE", 
                      "PROLOGUE_CONTENT", "EPILOGUE_CONTENT", "BRACED_CODE_CLOSE", 
                      "BRACED_CODE_CONTENT", "PREDICATE_CLOSE", "PREDICATE_CONTENT", 
                      "TAG_CLOSE", "TAG_CONTENT", "PROLOGUE_PERCENT", "PREDICATE_QUESTION" ];

var ruleNames =  [ "file", "prologueDeclarations", "prologueDeclaration", 
                   "grammarDeclaration", "prologue", "code", "predicate", 
                   "tagRule", "symbolDeclaration", "precedenceDeclaration", 
                   "precedenceDeclarator", "tag", "symbolDef", "grammarRule", 
                   "rulesOrGrammarDeclaration", "rules", "rhses", "rhs", 
                   "variable", "value", "id", "symbol", "ref", "epilogue" ];

function BisonParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

BisonParser.prototype = Object.create(antlr4.Parser.prototype);
BisonParser.prototype.constructor = BisonParser;

Object.defineProperty(BisonParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

BisonParser.EOF = antlr4.Token.EOF;
BisonParser.WS = 1;
BisonParser.BLOCK_COMMENT = 2;
BisonParser.LINE_COMMENT = 3;
BisonParser.PERCENT_GRAMMAR_NO_PARAM = 4;
BisonParser.PERCENT_NO_PARAM = 5;
BisonParser.PERCENT_STRING_PARAM = 6;
BisonParser.PERCENT_INT_PARAM = 7;
BisonParser.PERCENT_CODE = 8;
BisonParser.PERCENT_DEFINE = 9;
BisonParser.PERCENT_DEFINES = 10;
BisonParser.PERCENT_DPREC = 11;
BisonParser.PERCENT_DESTRUCTOR = 12;
BisonParser.PERCENT_EMPTY = 13;
BisonParser.PERCENT_FLAG = 14;
BisonParser.PERCENT_INITIAL_ACTION = 15;
BisonParser.PERCENT_LEFT = 16;
BisonParser.PERCENT_MERGE = 17;
BisonParser.PERCENT_NONASSOC = 18;
BisonParser.PERCENT_NTERM = 19;
BisonParser.PERCENT_PARAM = 20;
BisonParser.PERCENT_PREC = 21;
BisonParser.PERCENT_PRECEDENCE = 22;
BisonParser.PERCENT_PRINTER = 23;
BisonParser.PERCENT_RIGHT = 24;
BisonParser.PERCENT_START = 25;
BisonParser.PERCENT_TOKEN = 26;
BisonParser.PERCENT_TYPE = 27;
BisonParser.PERCENT_UNION = 28;
BisonParser.PIPE = 29;
BisonParser.SEMICOLON = 30;
BisonParser.ID = 31;
BisonParser.INT = 32;
BisonParser.CHAR = 33;
BisonParser.STRING = 34;
BisonParser.PROLOGUE_START = 35;
BisonParser.PERCENT_PERCENT = 36;
BisonParser.BRACED_CODE_START = 37;
BisonParser.PREDICATE_START = 38;
BisonParser.TAG_ANY = 39;
BisonParser.TAG_NONE = 40;
BisonParser.TAG_START = 41;
BisonParser.REF = 42;
BisonParser.ERROR_CHARACTER = 43;
BisonParser.AFTER_ID_WS = 44;
BisonParser.AFTER_ID_BLOCK_COMMENT = 45;
BisonParser.AFTER_ID_LINE_COMMENT = 46;
BisonParser.AFTER_ID_OPEN_BRACKET = 47;
BisonParser.AFTER_ID_COLON = 48;
BisonParser.AFTER_ID_ANY = 49;
BisonParser.PROLOGUE_CLOSE = 50;
BisonParser.PROLOGUE_CONTENT = 51;
BisonParser.EPILOGUE_CONTENT = 52;
BisonParser.BRACED_CODE_CLOSE = 53;
BisonParser.BRACED_CODE_CONTENT = 54;
BisonParser.PREDICATE_CLOSE = 55;
BisonParser.PREDICATE_CONTENT = 56;
BisonParser.TAG_CLOSE = 57;
BisonParser.TAG_CONTENT = 58;
BisonParser.PROLOGUE_PERCENT = 59;
BisonParser.PREDICATE_QUESTION = 60;

BisonParser.RULE_file = 0;
BisonParser.RULE_prologueDeclarations = 1;
BisonParser.RULE_prologueDeclaration = 2;
BisonParser.RULE_grammarDeclaration = 3;
BisonParser.RULE_prologue = 4;
BisonParser.RULE_code = 5;
BisonParser.RULE_predicate = 6;
BisonParser.RULE_tagRule = 7;
BisonParser.RULE_symbolDeclaration = 8;
BisonParser.RULE_precedenceDeclaration = 9;
BisonParser.RULE_precedenceDeclarator = 10;
BisonParser.RULE_tag = 11;
BisonParser.RULE_symbolDef = 12;
BisonParser.RULE_grammarRule = 13;
BisonParser.RULE_rulesOrGrammarDeclaration = 14;
BisonParser.RULE_rules = 15;
BisonParser.RULE_rhses = 16;
BisonParser.RULE_rhs = 17;
BisonParser.RULE_variable = 18;
BisonParser.RULE_value = 19;
BisonParser.RULE_id = 20;
BisonParser.RULE_symbol = 21;
BisonParser.RULE_ref = 22;
BisonParser.RULE_epilogue = 23;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.PERCENT_PERCENT = function() {
    return this.getToken(BisonParser.PERCENT_PERCENT, 0);
};

FileContext.prototype.grammarRule = function() {
    return this.getTypedRuleContext(GrammarRuleContext,0);
};

FileContext.prototype.prologueDeclarations = function() {
    return this.getTypedRuleContext(PrologueDeclarationsContext,0);
};

FileContext.prototype.epilogue = function() {
    return this.getTypedRuleContext(EpilogueContext,0);
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitFile(this);
	}
};

FileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.FileContext = FileContext;

BisonParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BisonParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (BisonParser.PERCENT_GRAMMAR_NO_PARAM - 4)) | (1 << (BisonParser.PERCENT_NO_PARAM - 4)) | (1 << (BisonParser.PERCENT_STRING_PARAM - 4)) | (1 << (BisonParser.PERCENT_INT_PARAM - 4)) | (1 << (BisonParser.PERCENT_CODE - 4)) | (1 << (BisonParser.PERCENT_DEFINE - 4)) | (1 << (BisonParser.PERCENT_DEFINES - 4)) | (1 << (BisonParser.PERCENT_DESTRUCTOR - 4)) | (1 << (BisonParser.PERCENT_FLAG - 4)) | (1 << (BisonParser.PERCENT_INITIAL_ACTION - 4)) | (1 << (BisonParser.PERCENT_LEFT - 4)) | (1 << (BisonParser.PERCENT_NONASSOC - 4)) | (1 << (BisonParser.PERCENT_NTERM - 4)) | (1 << (BisonParser.PERCENT_PARAM - 4)) | (1 << (BisonParser.PERCENT_PRECEDENCE - 4)) | (1 << (BisonParser.PERCENT_PRINTER - 4)) | (1 << (BisonParser.PERCENT_RIGHT - 4)) | (1 << (BisonParser.PERCENT_START - 4)) | (1 << (BisonParser.PERCENT_TOKEN - 4)) | (1 << (BisonParser.PERCENT_TYPE - 4)) | (1 << (BisonParser.PERCENT_UNION - 4)) | (1 << (BisonParser.SEMICOLON - 4)) | (1 << (BisonParser.PROLOGUE_START - 4)))) !== 0)) {
            this.state = 48;
            this.prologueDeclarations();
        }

        this.state = 51;
        this.match(BisonParser.PERCENT_PERCENT);
        this.state = 52;
        this.grammarRule();
        this.state = 54;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BisonParser.PERCENT_PERCENT) {
            this.state = 53;
            this.epilogue();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrologueDeclarationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_prologueDeclarations;
    return this;
}

PrologueDeclarationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrologueDeclarationsContext.prototype.constructor = PrologueDeclarationsContext;

PrologueDeclarationsContext.prototype.prologueDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PrologueDeclarationContext);
    } else {
        return this.getTypedRuleContext(PrologueDeclarationContext,i);
    }
};

PrologueDeclarationsContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterPrologueDeclarations(this);
	}
};

PrologueDeclarationsContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitPrologueDeclarations(this);
	}
};

PrologueDeclarationsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitPrologueDeclarations(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.PrologueDeclarationsContext = PrologueDeclarationsContext;

BisonParser.prototype.prologueDeclarations = function() {

    var localctx = new PrologueDeclarationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, BisonParser.RULE_prologueDeclarations);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 56;
            this.prologueDeclaration();
            this.state = 59; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (BisonParser.PERCENT_GRAMMAR_NO_PARAM - 4)) | (1 << (BisonParser.PERCENT_NO_PARAM - 4)) | (1 << (BisonParser.PERCENT_STRING_PARAM - 4)) | (1 << (BisonParser.PERCENT_INT_PARAM - 4)) | (1 << (BisonParser.PERCENT_CODE - 4)) | (1 << (BisonParser.PERCENT_DEFINE - 4)) | (1 << (BisonParser.PERCENT_DEFINES - 4)) | (1 << (BisonParser.PERCENT_DESTRUCTOR - 4)) | (1 << (BisonParser.PERCENT_FLAG - 4)) | (1 << (BisonParser.PERCENT_INITIAL_ACTION - 4)) | (1 << (BisonParser.PERCENT_LEFT - 4)) | (1 << (BisonParser.PERCENT_NONASSOC - 4)) | (1 << (BisonParser.PERCENT_NTERM - 4)) | (1 << (BisonParser.PERCENT_PARAM - 4)) | (1 << (BisonParser.PERCENT_PRECEDENCE - 4)) | (1 << (BisonParser.PERCENT_PRINTER - 4)) | (1 << (BisonParser.PERCENT_RIGHT - 4)) | (1 << (BisonParser.PERCENT_START - 4)) | (1 << (BisonParser.PERCENT_TOKEN - 4)) | (1 << (BisonParser.PERCENT_TYPE - 4)) | (1 << (BisonParser.PERCENT_UNION - 4)) | (1 << (BisonParser.SEMICOLON - 4)) | (1 << (BisonParser.PROLOGUE_START - 4)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrologueDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_prologueDeclaration;
    return this;
}

PrologueDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrologueDeclarationContext.prototype.constructor = PrologueDeclarationContext;

PrologueDeclarationContext.prototype.grammarDeclaration = function() {
    return this.getTypedRuleContext(GrammarDeclarationContext,0);
};

PrologueDeclarationContext.prototype.prologue = function() {
    return this.getTypedRuleContext(PrologueContext,0);
};

PrologueDeclarationContext.prototype.PERCENT_FLAG = function() {
    return this.getToken(BisonParser.PERCENT_FLAG, 0);
};

PrologueDeclarationContext.prototype.PERCENT_DEFINE = function() {
    return this.getToken(BisonParser.PERCENT_DEFINE, 0);
};

PrologueDeclarationContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

PrologueDeclarationContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

PrologueDeclarationContext.prototype.PERCENT_DEFINES = function() {
    return this.getToken(BisonParser.PERCENT_DEFINES, 0);
};

PrologueDeclarationContext.prototype.STRING = function() {
    return this.getToken(BisonParser.STRING, 0);
};

PrologueDeclarationContext.prototype.PERCENT_NO_PARAM = function() {
    return this.getToken(BisonParser.PERCENT_NO_PARAM, 0);
};

PrologueDeclarationContext.prototype.PERCENT_STRING_PARAM = function() {
    return this.getToken(BisonParser.PERCENT_STRING_PARAM, 0);
};

PrologueDeclarationContext.prototype.PERCENT_INT_PARAM = function() {
    return this.getToken(BisonParser.PERCENT_INT_PARAM, 0);
};

PrologueDeclarationContext.prototype.INT = function() {
    return this.getToken(BisonParser.INT, 0);
};

PrologueDeclarationContext.prototype.PERCENT_INITIAL_ACTION = function() {
    return this.getToken(BisonParser.PERCENT_INITIAL_ACTION, 0);
};

PrologueDeclarationContext.prototype.code = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CodeContext);
    } else {
        return this.getTypedRuleContext(CodeContext,i);
    }
};

PrologueDeclarationContext.prototype.PERCENT_PARAM = function() {
    return this.getToken(BisonParser.PERCENT_PARAM, 0);
};

PrologueDeclarationContext.prototype.SEMICOLON = function() {
    return this.getToken(BisonParser.SEMICOLON, 0);
};

PrologueDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterPrologueDeclaration(this);
	}
};

PrologueDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitPrologueDeclaration(this);
	}
};

PrologueDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitPrologueDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.PrologueDeclarationContext = PrologueDeclarationContext;

BisonParser.prototype.prologueDeclaration = function() {

    var localctx = new PrologueDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BisonParser.RULE_prologueDeclaration);
    var _la = 0; // Token type
    try {
        this.state = 86;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.PERCENT_GRAMMAR_NO_PARAM:
        case BisonParser.PERCENT_CODE:
        case BisonParser.PERCENT_DESTRUCTOR:
        case BisonParser.PERCENT_LEFT:
        case BisonParser.PERCENT_NONASSOC:
        case BisonParser.PERCENT_NTERM:
        case BisonParser.PERCENT_PRECEDENCE:
        case BisonParser.PERCENT_PRINTER:
        case BisonParser.PERCENT_RIGHT:
        case BisonParser.PERCENT_START:
        case BisonParser.PERCENT_TOKEN:
        case BisonParser.PERCENT_TYPE:
        case BisonParser.PERCENT_UNION:
            this.enterOuterAlt(localctx, 1);
            this.state = 61;
            this.grammarDeclaration();
            break;
        case BisonParser.PROLOGUE_START:
            this.enterOuterAlt(localctx, 2);
            this.state = 62;
            this.prologue();
            break;
        case BisonParser.PERCENT_FLAG:
            this.enterOuterAlt(localctx, 3);
            this.state = 63;
            this.match(BisonParser.PERCENT_FLAG);
            break;
        case BisonParser.PERCENT_DEFINE:
            this.enterOuterAlt(localctx, 4);
            this.state = 64;
            this.match(BisonParser.PERCENT_DEFINE);
            this.state = 65;
            this.variable();
            this.state = 66;
            this.value();
            break;
        case BisonParser.PERCENT_DEFINES:
            this.enterOuterAlt(localctx, 5);
            this.state = 68;
            this.match(BisonParser.PERCENT_DEFINES);
            this.state = 70;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===BisonParser.STRING) {
                this.state = 69;
                this.match(BisonParser.STRING);
            }

            break;
        case BisonParser.PERCENT_NO_PARAM:
            this.enterOuterAlt(localctx, 6);
            this.state = 72;
            this.match(BisonParser.PERCENT_NO_PARAM);
            break;
        case BisonParser.PERCENT_STRING_PARAM:
            this.enterOuterAlt(localctx, 7);
            this.state = 73;
            this.match(BisonParser.PERCENT_STRING_PARAM);
            this.state = 74;
            this.match(BisonParser.STRING);
            break;
        case BisonParser.PERCENT_INT_PARAM:
            this.enterOuterAlt(localctx, 8);
            this.state = 75;
            this.match(BisonParser.PERCENT_INT_PARAM);
            this.state = 76;
            this.match(BisonParser.INT);
            break;
        case BisonParser.PERCENT_INITIAL_ACTION:
            this.enterOuterAlt(localctx, 9);
            this.state = 77;
            this.match(BisonParser.PERCENT_INITIAL_ACTION);
            this.state = 78;
            this.code();
            break;
        case BisonParser.PERCENT_PARAM:
            this.enterOuterAlt(localctx, 10);
            this.state = 79;
            this.match(BisonParser.PERCENT_PARAM);
            this.state = 81; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 80;
                this.code();
                this.state = 83; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===BisonParser.BRACED_CODE_START);
            break;
        case BisonParser.SEMICOLON:
            this.enterOuterAlt(localctx, 11);
            this.state = 85;
            this.match(BisonParser.SEMICOLON);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GrammarDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_grammarDeclaration;
    return this;
}

GrammarDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GrammarDeclarationContext.prototype.constructor = GrammarDeclarationContext;

GrammarDeclarationContext.prototype.precedenceDeclaration = function() {
    return this.getTypedRuleContext(PrecedenceDeclarationContext,0);
};

GrammarDeclarationContext.prototype.symbolDeclaration = function() {
    return this.getTypedRuleContext(SymbolDeclarationContext,0);
};

GrammarDeclarationContext.prototype.PERCENT_START = function() {
    return this.getToken(BisonParser.PERCENT_START, 0);
};

GrammarDeclarationContext.prototype.symbol = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SymbolContext);
    } else {
        return this.getTypedRuleContext(SymbolContext,i);
    }
};

GrammarDeclarationContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

GrammarDeclarationContext.prototype.PERCENT_DESTRUCTOR = function() {
    return this.getToken(BisonParser.PERCENT_DESTRUCTOR, 0);
};

GrammarDeclarationContext.prototype.PERCENT_PRINTER = function() {
    return this.getToken(BisonParser.PERCENT_PRINTER, 0);
};

GrammarDeclarationContext.prototype.tag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TagContext);
    } else {
        return this.getTypedRuleContext(TagContext,i);
    }
};

GrammarDeclarationContext.prototype.PERCENT_GRAMMAR_NO_PARAM = function() {
    return this.getToken(BisonParser.PERCENT_GRAMMAR_NO_PARAM, 0);
};

GrammarDeclarationContext.prototype.PERCENT_CODE = function() {
    return this.getToken(BisonParser.PERCENT_CODE, 0);
};

GrammarDeclarationContext.prototype.ID = function() {
    return this.getToken(BisonParser.ID, 0);
};

GrammarDeclarationContext.prototype.PERCENT_UNION = function() {
    return this.getToken(BisonParser.PERCENT_UNION, 0);
};

GrammarDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterGrammarDeclaration(this);
	}
};

GrammarDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitGrammarDeclaration(this);
	}
};

GrammarDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitGrammarDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.GrammarDeclarationContext = GrammarDeclarationContext;

BisonParser.prototype.grammarDeclaration = function() {

    var localctx = new GrammarDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, BisonParser.RULE_grammarDeclaration);
    var _la = 0; // Token type
    try {
        this.state = 111;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.PERCENT_LEFT:
        case BisonParser.PERCENT_NONASSOC:
        case BisonParser.PERCENT_PRECEDENCE:
        case BisonParser.PERCENT_RIGHT:
            this.enterOuterAlt(localctx, 1);
            this.state = 88;
            this.precedenceDeclaration();
            break;
        case BisonParser.PERCENT_NTERM:
        case BisonParser.PERCENT_TOKEN:
        case BisonParser.PERCENT_TYPE:
            this.enterOuterAlt(localctx, 2);
            this.state = 89;
            this.symbolDeclaration();
            break;
        case BisonParser.PERCENT_START:
            this.enterOuterAlt(localctx, 3);
            this.state = 90;
            this.match(BisonParser.PERCENT_START);
            this.state = 91;
            this.symbol();
            break;
        case BisonParser.PERCENT_DESTRUCTOR:
        case BisonParser.PERCENT_PRINTER:
            this.enterOuterAlt(localctx, 4);
            this.state = 92;
            _la = this._input.LA(1);
            if(!(_la===BisonParser.PERCENT_DESTRUCTOR || _la===BisonParser.PERCENT_PRINTER)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 93;
            this.code();
            this.state = 96; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 96;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case BisonParser.ID:
                case BisonParser.CHAR:
                case BisonParser.STRING:
                    this.state = 94;
                    this.symbol();
                    break;
                case BisonParser.TAG_ANY:
                case BisonParser.TAG_NONE:
                case BisonParser.TAG_START:
                    this.state = 95;
                    this.tag();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 98; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (BisonParser.ID - 31)) | (1 << (BisonParser.CHAR - 31)) | (1 << (BisonParser.STRING - 31)) | (1 << (BisonParser.TAG_ANY - 31)) | (1 << (BisonParser.TAG_NONE - 31)) | (1 << (BisonParser.TAG_START - 31)))) !== 0));
            break;
        case BisonParser.PERCENT_GRAMMAR_NO_PARAM:
            this.enterOuterAlt(localctx, 5);
            this.state = 100;
            this.match(BisonParser.PERCENT_GRAMMAR_NO_PARAM);
            break;
        case BisonParser.PERCENT_CODE:
            this.enterOuterAlt(localctx, 6);
            this.state = 101;
            this.match(BisonParser.PERCENT_CODE);
            this.state = 103;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===BisonParser.ID) {
                this.state = 102;
                this.match(BisonParser.ID);
            }

            this.state = 105;
            this.code();
            break;
        case BisonParser.PERCENT_UNION:
            this.enterOuterAlt(localctx, 7);
            this.state = 106;
            this.match(BisonParser.PERCENT_UNION);
            this.state = 108;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===BisonParser.ID) {
                this.state = 107;
                this.match(BisonParser.ID);
            }

            this.state = 110;
            this.code();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrologueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_prologue;
    return this;
}

PrologueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrologueContext.prototype.constructor = PrologueContext;

PrologueContext.prototype.PROLOGUE_START = function() {
    return this.getToken(BisonParser.PROLOGUE_START, 0);
};

PrologueContext.prototype.PROLOGUE_CLOSE = function() {
    return this.getToken(BisonParser.PROLOGUE_CLOSE, 0);
};

PrologueContext.prototype.PROLOGUE_CONTENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BisonParser.PROLOGUE_CONTENT);
    } else {
        return this.getToken(BisonParser.PROLOGUE_CONTENT, i);
    }
};


PrologueContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterPrologue(this);
	}
};

PrologueContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitPrologue(this);
	}
};

PrologueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitPrologue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.PrologueContext = PrologueContext;

BisonParser.prototype.prologue = function() {

    var localctx = new PrologueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, BisonParser.RULE_prologue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(BisonParser.PROLOGUE_START);
        this.state = 117;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BisonParser.PROLOGUE_CONTENT) {
            this.state = 114;
            this.match(BisonParser.PROLOGUE_CONTENT);
            this.state = 119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 120;
        this.match(BisonParser.PROLOGUE_CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_code;
    return this;
}

CodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeContext.prototype.constructor = CodeContext;

CodeContext.prototype.BRACED_CODE_START = function() {
    return this.getToken(BisonParser.BRACED_CODE_START, 0);
};

CodeContext.prototype.BRACED_CODE_CLOSE = function() {
    return this.getToken(BisonParser.BRACED_CODE_CLOSE, 0);
};

CodeContext.prototype.BRACED_CODE_CONTENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BisonParser.BRACED_CODE_CONTENT);
    } else {
        return this.getToken(BisonParser.BRACED_CODE_CONTENT, i);
    }
};


CodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterCode(this);
	}
};

CodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitCode(this);
	}
};

CodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.CodeContext = CodeContext;

BisonParser.prototype.code = function() {

    var localctx = new CodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, BisonParser.RULE_code);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.match(BisonParser.BRACED_CODE_START);
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BisonParser.BRACED_CODE_CONTENT) {
            this.state = 123;
            this.match(BisonParser.BRACED_CODE_CONTENT);
            this.state = 128;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 129;
        this.match(BisonParser.BRACED_CODE_CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PredicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_predicate;
    return this;
}

PredicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateContext.prototype.constructor = PredicateContext;

PredicateContext.prototype.PREDICATE_START = function() {
    return this.getToken(BisonParser.PREDICATE_START, 0);
};

PredicateContext.prototype.PREDICATE_CLOSE = function() {
    return this.getToken(BisonParser.PREDICATE_CLOSE, 0);
};

PredicateContext.prototype.PREDICATE_CONTENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BisonParser.PREDICATE_CONTENT);
    } else {
        return this.getToken(BisonParser.PREDICATE_CONTENT, i);
    }
};


PredicateContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterPredicate(this);
	}
};

PredicateContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitPredicate(this);
	}
};

PredicateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitPredicate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.PredicateContext = PredicateContext;

BisonParser.prototype.predicate = function() {

    var localctx = new PredicateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, BisonParser.RULE_predicate);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.match(BisonParser.PREDICATE_START);
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BisonParser.PREDICATE_CONTENT) {
            this.state = 132;
            this.match(BisonParser.PREDICATE_CONTENT);
            this.state = 137;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 138;
        this.match(BisonParser.PREDICATE_CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TagRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_tagRule;
    return this;
}

TagRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagRuleContext.prototype.constructor = TagRuleContext;

TagRuleContext.prototype.TAG_START = function() {
    return this.getToken(BisonParser.TAG_START, 0);
};

TagRuleContext.prototype.TAG_CLOSE = function() {
    return this.getToken(BisonParser.TAG_CLOSE, 0);
};

TagRuleContext.prototype.TAG_CONTENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BisonParser.TAG_CONTENT);
    } else {
        return this.getToken(BisonParser.TAG_CONTENT, i);
    }
};


TagRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterTagRule(this);
	}
};

TagRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitTagRule(this);
	}
};

TagRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitTagRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.TagRuleContext = TagRuleContext;

BisonParser.prototype.tagRule = function() {

    var localctx = new TagRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, BisonParser.RULE_tagRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(BisonParser.TAG_START);
        this.state = 142; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 141;
            this.match(BisonParser.TAG_CONTENT);
            this.state = 144; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===BisonParser.TAG_CONTENT);
        this.state = 146;
        this.match(BisonParser.TAG_CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SymbolDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_symbolDeclaration;
    return this;
}

SymbolDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolDeclarationContext.prototype.constructor = SymbolDeclarationContext;

SymbolDeclarationContext.prototype.PERCENT_NTERM = function() {
    return this.getToken(BisonParser.PERCENT_NTERM, 0);
};

SymbolDeclarationContext.prototype.symbolDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SymbolDefContext);
    } else {
        return this.getTypedRuleContext(SymbolDefContext,i);
    }
};

SymbolDeclarationContext.prototype.PERCENT_TOKEN = function() {
    return this.getToken(BisonParser.PERCENT_TOKEN, 0);
};

SymbolDeclarationContext.prototype.PERCENT_TYPE = function() {
    return this.getToken(BisonParser.PERCENT_TYPE, 0);
};

SymbolDeclarationContext.prototype.tagRule = function() {
    return this.getTypedRuleContext(TagRuleContext,0);
};

SymbolDeclarationContext.prototype.symbol = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SymbolContext);
    } else {
        return this.getTypedRuleContext(SymbolContext,i);
    }
};

SymbolDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterSymbolDeclaration(this);
	}
};

SymbolDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitSymbolDeclaration(this);
	}
};

SymbolDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitSymbolDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.SymbolDeclarationContext = SymbolDeclarationContext;

BisonParser.prototype.symbolDeclaration = function() {

    var localctx = new SymbolDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, BisonParser.RULE_symbolDeclaration);
    var _la = 0; // Token type
    try {
        this.state = 167;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.PERCENT_NTERM:
            this.enterOuterAlt(localctx, 1);
            this.state = 148;
            this.match(BisonParser.PERCENT_NTERM);
            this.state = 150; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 149;
                this.symbolDef();
                this.state = 152; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (BisonParser.ID - 31)) | (1 << (BisonParser.CHAR - 31)) | (1 << (BisonParser.TAG_START - 31)))) !== 0));
            break;
        case BisonParser.PERCENT_TOKEN:
            this.enterOuterAlt(localctx, 2);
            this.state = 154;
            this.match(BisonParser.PERCENT_TOKEN);
            this.state = 156; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 155;
                this.symbolDef();
                this.state = 158; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (BisonParser.ID - 31)) | (1 << (BisonParser.CHAR - 31)) | (1 << (BisonParser.TAG_START - 31)))) !== 0));
            break;
        case BisonParser.PERCENT_TYPE:
            this.enterOuterAlt(localctx, 3);
            this.state = 160;
            this.match(BisonParser.PERCENT_TYPE);
            this.state = 161;
            this.tagRule();
            this.state = 163; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 162;
                this.symbol();
                this.state = 165; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (BisonParser.ID - 31)) | (1 << (BisonParser.CHAR - 31)) | (1 << (BisonParser.STRING - 31)))) !== 0));
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrecedenceDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_precedenceDeclaration;
    return this;
}

PrecedenceDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrecedenceDeclarationContext.prototype.constructor = PrecedenceDeclarationContext;

PrecedenceDeclarationContext.prototype.precedenceDeclarator = function() {
    return this.getTypedRuleContext(PrecedenceDeclaratorContext,0);
};

PrecedenceDeclarationContext.prototype.tagRule = function() {
    return this.getTypedRuleContext(TagRuleContext,0);
};

PrecedenceDeclarationContext.prototype.symbol = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SymbolContext);
    } else {
        return this.getTypedRuleContext(SymbolContext,i);
    }
};

PrecedenceDeclarationContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BisonParser.INT);
    } else {
        return this.getToken(BisonParser.INT, i);
    }
};


PrecedenceDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterPrecedenceDeclaration(this);
	}
};

PrecedenceDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitPrecedenceDeclaration(this);
	}
};

PrecedenceDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitPrecedenceDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.PrecedenceDeclarationContext = PrecedenceDeclarationContext;

BisonParser.prototype.precedenceDeclaration = function() {

    var localctx = new PrecedenceDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, BisonParser.RULE_precedenceDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.precedenceDeclarator();
        this.state = 171;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BisonParser.TAG_START) {
            this.state = 170;
            this.tagRule();
        }

        this.state = 175; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 175;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case BisonParser.ID:
            case BisonParser.CHAR:
            case BisonParser.STRING:
                this.state = 173;
                this.symbol();
                break;
            case BisonParser.INT:
                this.state = 174;
                this.match(BisonParser.INT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 177; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (BisonParser.ID - 31)) | (1 << (BisonParser.INT - 31)) | (1 << (BisonParser.CHAR - 31)) | (1 << (BisonParser.STRING - 31)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrecedenceDeclaratorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_precedenceDeclarator;
    return this;
}

PrecedenceDeclaratorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrecedenceDeclaratorContext.prototype.constructor = PrecedenceDeclaratorContext;

PrecedenceDeclaratorContext.prototype.PERCENT_LEFT = function() {
    return this.getToken(BisonParser.PERCENT_LEFT, 0);
};

PrecedenceDeclaratorContext.prototype.PERCENT_RIGHT = function() {
    return this.getToken(BisonParser.PERCENT_RIGHT, 0);
};

PrecedenceDeclaratorContext.prototype.PERCENT_NONASSOC = function() {
    return this.getToken(BisonParser.PERCENT_NONASSOC, 0);
};

PrecedenceDeclaratorContext.prototype.PERCENT_PRECEDENCE = function() {
    return this.getToken(BisonParser.PERCENT_PRECEDENCE, 0);
};

PrecedenceDeclaratorContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterPrecedenceDeclarator(this);
	}
};

PrecedenceDeclaratorContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitPrecedenceDeclarator(this);
	}
};

PrecedenceDeclaratorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitPrecedenceDeclarator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.PrecedenceDeclaratorContext = PrecedenceDeclaratorContext;

BisonParser.prototype.precedenceDeclarator = function() {

    var localctx = new PrecedenceDeclaratorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, BisonParser.RULE_precedenceDeclarator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BisonParser.PERCENT_LEFT) | (1 << BisonParser.PERCENT_NONASSOC) | (1 << BisonParser.PERCENT_PRECEDENCE) | (1 << BisonParser.PERCENT_RIGHT))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_tag;
    return this;
}

TagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagContext.prototype.constructor = TagContext;

TagContext.prototype.tagRule = function() {
    return this.getTypedRuleContext(TagRuleContext,0);
};

TagContext.prototype.TAG_ANY = function() {
    return this.getToken(BisonParser.TAG_ANY, 0);
};

TagContext.prototype.TAG_NONE = function() {
    return this.getToken(BisonParser.TAG_NONE, 0);
};

TagContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterTag(this);
	}
};

TagContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitTag(this);
	}
};

TagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitTag(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.TagContext = TagContext;

BisonParser.prototype.tag = function() {

    var localctx = new TagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, BisonParser.RULE_tag);
    try {
        this.state = 184;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.TAG_START:
            this.enterOuterAlt(localctx, 1);
            this.state = 181;
            this.tagRule();
            break;
        case BisonParser.TAG_ANY:
            this.enterOuterAlt(localctx, 2);
            this.state = 182;
            this.match(BisonParser.TAG_ANY);
            break;
        case BisonParser.TAG_NONE:
            this.enterOuterAlt(localctx, 3);
            this.state = 183;
            this.match(BisonParser.TAG_NONE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SymbolDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_symbolDef;
    return this;
}

SymbolDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolDefContext.prototype.constructor = SymbolDefContext;

SymbolDefContext.prototype.tagRule = function() {
    return this.getTypedRuleContext(TagRuleContext,0);
};

SymbolDefContext.prototype.id = function() {
    return this.getTypedRuleContext(IdContext,0);
};

SymbolDefContext.prototype.INT = function() {
    return this.getToken(BisonParser.INT, 0);
};

SymbolDefContext.prototype.STRING = function() {
    return this.getToken(BisonParser.STRING, 0);
};

SymbolDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterSymbolDef(this);
	}
};

SymbolDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitSymbolDef(this);
	}
};

SymbolDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitSymbolDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.SymbolDefContext = SymbolDefContext;

BisonParser.prototype.symbolDef = function() {

    var localctx = new SymbolDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, BisonParser.RULE_symbolDef);
    var _la = 0; // Token type
    try {
        this.state = 195;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.TAG_START:
            this.enterOuterAlt(localctx, 1);
            this.state = 186;
            this.tagRule();
            break;
        case BisonParser.ID:
        case BisonParser.CHAR:
            this.enterOuterAlt(localctx, 2);
            this.state = 187;
            this.id();
            this.state = 193;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case BisonParser.INT:
            	this.state = 188;
            	this.match(BisonParser.INT);
            	this.state = 190;
            	this._errHandler.sync(this);
            	_la = this._input.LA(1);
            	if(_la===BisonParser.STRING) {
            	    this.state = 189;
            	    this.match(BisonParser.STRING);
            	}

            	break;
            case BisonParser.STRING:
            	this.state = 192;
            	this.match(BisonParser.STRING);
            	break;
            case BisonParser.PERCENT_GRAMMAR_NO_PARAM:
            case BisonParser.PERCENT_NO_PARAM:
            case BisonParser.PERCENT_STRING_PARAM:
            case BisonParser.PERCENT_INT_PARAM:
            case BisonParser.PERCENT_CODE:
            case BisonParser.PERCENT_DEFINE:
            case BisonParser.PERCENT_DEFINES:
            case BisonParser.PERCENT_DESTRUCTOR:
            case BisonParser.PERCENT_FLAG:
            case BisonParser.PERCENT_INITIAL_ACTION:
            case BisonParser.PERCENT_LEFT:
            case BisonParser.PERCENT_NONASSOC:
            case BisonParser.PERCENT_NTERM:
            case BisonParser.PERCENT_PARAM:
            case BisonParser.PERCENT_PRECEDENCE:
            case BisonParser.PERCENT_PRINTER:
            case BisonParser.PERCENT_RIGHT:
            case BisonParser.PERCENT_START:
            case BisonParser.PERCENT_TOKEN:
            case BisonParser.PERCENT_TYPE:
            case BisonParser.PERCENT_UNION:
            case BisonParser.SEMICOLON:
            case BisonParser.ID:
            case BisonParser.CHAR:
            case BisonParser.PROLOGUE_START:
            case BisonParser.PERCENT_PERCENT:
            case BisonParser.TAG_START:
            	break;
            default:
            	throw new antlr4.error.NoViableAltException(this);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GrammarRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_grammarRule;
    return this;
}

GrammarRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GrammarRuleContext.prototype.constructor = GrammarRuleContext;

GrammarRuleContext.prototype.rulesOrGrammarDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RulesOrGrammarDeclarationContext);
    } else {
        return this.getTypedRuleContext(RulesOrGrammarDeclarationContext,i);
    }
};

GrammarRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterGrammarRule(this);
	}
};

GrammarRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitGrammarRule(this);
	}
};

GrammarRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitGrammarRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.GrammarRuleContext = GrammarRuleContext;

BisonParser.prototype.grammarRule = function() {

    var localctx = new GrammarRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, BisonParser.RULE_grammarRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 197;
            this.rulesOrGrammarDeclaration();
            this.state = 200; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BisonParser.PERCENT_GRAMMAR_NO_PARAM) | (1 << BisonParser.PERCENT_CODE) | (1 << BisonParser.PERCENT_DESTRUCTOR) | (1 << BisonParser.PERCENT_LEFT) | (1 << BisonParser.PERCENT_NONASSOC) | (1 << BisonParser.PERCENT_NTERM) | (1 << BisonParser.PERCENT_PRECEDENCE) | (1 << BisonParser.PERCENT_PRINTER) | (1 << BisonParser.PERCENT_RIGHT) | (1 << BisonParser.PERCENT_START) | (1 << BisonParser.PERCENT_TOKEN) | (1 << BisonParser.PERCENT_TYPE) | (1 << BisonParser.PERCENT_UNION) | (1 << BisonParser.ID))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RulesOrGrammarDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_rulesOrGrammarDeclaration;
    return this;
}

RulesOrGrammarDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RulesOrGrammarDeclarationContext.prototype.constructor = RulesOrGrammarDeclarationContext;

RulesOrGrammarDeclarationContext.prototype.rules = function() {
    return this.getTypedRuleContext(RulesContext,0);
};

RulesOrGrammarDeclarationContext.prototype.grammarDeclaration = function() {
    return this.getTypedRuleContext(GrammarDeclarationContext,0);
};

RulesOrGrammarDeclarationContext.prototype.SEMICOLON = function() {
    return this.getToken(BisonParser.SEMICOLON, 0);
};

RulesOrGrammarDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterRulesOrGrammarDeclaration(this);
	}
};

RulesOrGrammarDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitRulesOrGrammarDeclaration(this);
	}
};

RulesOrGrammarDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitRulesOrGrammarDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.RulesOrGrammarDeclarationContext = RulesOrGrammarDeclarationContext;

BisonParser.prototype.rulesOrGrammarDeclaration = function() {

    var localctx = new RulesOrGrammarDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, BisonParser.RULE_rulesOrGrammarDeclaration);
    try {
        this.state = 206;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 202;
            this.rules();
            break;
        case BisonParser.PERCENT_GRAMMAR_NO_PARAM:
        case BisonParser.PERCENT_CODE:
        case BisonParser.PERCENT_DESTRUCTOR:
        case BisonParser.PERCENT_LEFT:
        case BisonParser.PERCENT_NONASSOC:
        case BisonParser.PERCENT_NTERM:
        case BisonParser.PERCENT_PRECEDENCE:
        case BisonParser.PERCENT_PRINTER:
        case BisonParser.PERCENT_RIGHT:
        case BisonParser.PERCENT_START:
        case BisonParser.PERCENT_TOKEN:
        case BisonParser.PERCENT_TYPE:
        case BisonParser.PERCENT_UNION:
            this.enterOuterAlt(localctx, 2);
            this.state = 203;
            this.grammarDeclaration();
            this.state = 204;
            this.match(BisonParser.SEMICOLON);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RulesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_rules;
    return this;
}

RulesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RulesContext.prototype.constructor = RulesContext;

RulesContext.prototype.ID = function() {
    return this.getToken(BisonParser.ID, 0);
};

RulesContext.prototype.AFTER_ID_COLON = function() {
    return this.getToken(BisonParser.AFTER_ID_COLON, 0);
};

RulesContext.prototype.rhses = function() {
    return this.getTypedRuleContext(RhsesContext,0);
};

RulesContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

RulesContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterRules(this);
	}
};

RulesContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitRules(this);
	}
};

RulesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitRules(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.RulesContext = RulesContext;

BisonParser.prototype.rules = function() {

    var localctx = new RulesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, BisonParser.RULE_rules);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.match(BisonParser.ID);
        this.state = 209;
        this.match(BisonParser.AFTER_ID_COLON);
        this.state = 211;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BisonParser.REF || _la===BisonParser.AFTER_ID_OPEN_BRACKET) {
            this.state = 210;
            this.ref();
        }

        this.state = 213;
        this.rhses();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RhsesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_rhses;
    return this;
}

RhsesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RhsesContext.prototype.constructor = RhsesContext;

RhsesContext.prototype.rhs = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RhsContext);
    } else {
        return this.getTypedRuleContext(RhsContext,i);
    }
};

RhsesContext.prototype.PIPE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BisonParser.PIPE);
    } else {
        return this.getToken(BisonParser.PIPE, i);
    }
};


RhsesContext.prototype.SEMICOLON = function() {
    return this.getToken(BisonParser.SEMICOLON, 0);
};

RhsesContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterRhses(this);
	}
};

RhsesContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitRhses(this);
	}
};

RhsesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitRhses(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.RhsesContext = RhsesContext;

BisonParser.prototype.rhses = function() {

    var localctx = new RhsesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, BisonParser.RULE_rhses);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 215;
                this.rhs(); 
            }
            this.state = 220;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
        }

        this.state = 230;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BisonParser.PIPE) {
            this.state = 221;
            this.match(BisonParser.PIPE);
            this.state = 225;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 222;
                    this.rhs(); 
                }
                this.state = 227;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
            }

            this.state = 232;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 234;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BisonParser.SEMICOLON) {
            this.state = 233;
            this.match(BisonParser.SEMICOLON);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RhsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_rhs;
    return this;
}

RhsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RhsContext.prototype.constructor = RhsContext;

RhsContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

RhsContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

RhsContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

RhsContext.prototype.predicate = function() {
    return this.getTypedRuleContext(PredicateContext,0);
};

RhsContext.prototype.PERCENT_EMPTY = function() {
    return this.getToken(BisonParser.PERCENT_EMPTY, 0);
};

RhsContext.prototype.PERCENT_PREC = function() {
    return this.getToken(BisonParser.PERCENT_PREC, 0);
};

RhsContext.prototype.PERCENT_DPREC = function() {
    return this.getToken(BisonParser.PERCENT_DPREC, 0);
};

RhsContext.prototype.INT = function() {
    return this.getToken(BisonParser.INT, 0);
};

RhsContext.prototype.PERCENT_MERGE = function() {
    return this.getToken(BisonParser.PERCENT_MERGE, 0);
};

RhsContext.prototype.tagRule = function() {
    return this.getTypedRuleContext(TagRuleContext,0);
};

RhsContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterRhs(this);
	}
};

RhsContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitRhs(this);
	}
};

RhsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitRhs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.RhsContext = RhsContext;

BisonParser.prototype.rhs = function() {

    var localctx = new RhsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, BisonParser.RULE_rhs);
    var _la = 0; // Token type
    try {
        this.state = 252;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.ID:
        case BisonParser.CHAR:
        case BisonParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 236;
            this.symbol();
            this.state = 238;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===BisonParser.REF || _la===BisonParser.AFTER_ID_OPEN_BRACKET) {
                this.state = 237;
                this.ref();
            }

            break;
        case BisonParser.BRACED_CODE_START:
            this.enterOuterAlt(localctx, 2);
            this.state = 240;
            this.code();
            this.state = 242;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===BisonParser.REF || _la===BisonParser.AFTER_ID_OPEN_BRACKET) {
                this.state = 241;
                this.ref();
            }

            break;
        case BisonParser.PREDICATE_START:
            this.enterOuterAlt(localctx, 3);
            this.state = 244;
            this.predicate();
            break;
        case BisonParser.PERCENT_EMPTY:
            this.enterOuterAlt(localctx, 4);
            this.state = 245;
            this.match(BisonParser.PERCENT_EMPTY);
            break;
        case BisonParser.PERCENT_PREC:
            this.enterOuterAlt(localctx, 5);
            this.state = 246;
            this.match(BisonParser.PERCENT_PREC);
            this.state = 247;
            this.symbol();
            break;
        case BisonParser.PERCENT_DPREC:
            this.enterOuterAlt(localctx, 6);
            this.state = 248;
            this.match(BisonParser.PERCENT_DPREC);
            this.state = 249;
            this.match(BisonParser.INT);
            break;
        case BisonParser.PERCENT_MERGE:
            this.enterOuterAlt(localctx, 7);
            this.state = 250;
            this.match(BisonParser.PERCENT_MERGE);
            this.state = 251;
            this.tagRule();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ID = function() {
    return this.getToken(BisonParser.ID, 0);
};

VariableContext.prototype.STRING = function() {
    return this.getToken(BisonParser.STRING, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.VariableContext = VariableContext;

BisonParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, BisonParser.RULE_variable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 254;
        _la = this._input.LA(1);
        if(!(_la===BisonParser.ID || _la===BisonParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.ID = function() {
    return this.getToken(BisonParser.ID, 0);
};

ValueContext.prototype.STRING = function() {
    return this.getToken(BisonParser.STRING, 0);
};

ValueContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.ValueContext = ValueContext;

BisonParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, BisonParser.RULE_value);
    try {
        this.state = 260;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.PERCENT_GRAMMAR_NO_PARAM:
        case BisonParser.PERCENT_NO_PARAM:
        case BisonParser.PERCENT_STRING_PARAM:
        case BisonParser.PERCENT_INT_PARAM:
        case BisonParser.PERCENT_CODE:
        case BisonParser.PERCENT_DEFINE:
        case BisonParser.PERCENT_DEFINES:
        case BisonParser.PERCENT_DESTRUCTOR:
        case BisonParser.PERCENT_FLAG:
        case BisonParser.PERCENT_INITIAL_ACTION:
        case BisonParser.PERCENT_LEFT:
        case BisonParser.PERCENT_NONASSOC:
        case BisonParser.PERCENT_NTERM:
        case BisonParser.PERCENT_PARAM:
        case BisonParser.PERCENT_PRECEDENCE:
        case BisonParser.PERCENT_PRINTER:
        case BisonParser.PERCENT_RIGHT:
        case BisonParser.PERCENT_START:
        case BisonParser.PERCENT_TOKEN:
        case BisonParser.PERCENT_TYPE:
        case BisonParser.PERCENT_UNION:
        case BisonParser.SEMICOLON:
        case BisonParser.PROLOGUE_START:
        case BisonParser.PERCENT_PERCENT:
            this.enterOuterAlt(localctx, 1);

            break;
        case BisonParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 257;
            this.match(BisonParser.ID);
            break;
        case BisonParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 258;
            this.match(BisonParser.STRING);
            break;
        case BisonParser.BRACED_CODE_START:
            this.enterOuterAlt(localctx, 4);
            this.state = 259;
            this.code();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_id;
    return this;
}

IdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdContext.prototype.constructor = IdContext;

IdContext.prototype.ID = function() {
    return this.getToken(BisonParser.ID, 0);
};

IdContext.prototype.CHAR = function() {
    return this.getToken(BisonParser.CHAR, 0);
};

IdContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterId(this);
	}
};

IdContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitId(this);
	}
};

IdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.IdContext = IdContext;

BisonParser.prototype.id = function() {

    var localctx = new IdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, BisonParser.RULE_id);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 262;
        _la = this._input.LA(1);
        if(!(_la===BisonParser.ID || _la===BisonParser.CHAR)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SymbolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_symbol;
    return this;
}

SymbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolContext.prototype.constructor = SymbolContext;

SymbolContext.prototype.id = function() {
    return this.getTypedRuleContext(IdContext,0);
};

SymbolContext.prototype.STRING = function() {
    return this.getToken(BisonParser.STRING, 0);
};

SymbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterSymbol(this);
	}
};

SymbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitSymbol(this);
	}
};

SymbolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitSymbol(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.SymbolContext = SymbolContext;

BisonParser.prototype.symbol = function() {

    var localctx = new SymbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, BisonParser.RULE_symbol);
    try {
        this.state = 266;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.ID:
        case BisonParser.CHAR:
            this.enterOuterAlt(localctx, 1);
            this.state = 264;
            this.id();
            break;
        case BisonParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 265;
            this.match(BisonParser.STRING);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_ref;
    return this;
}

RefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefContext.prototype.constructor = RefContext;

RefContext.prototype.AFTER_ID_OPEN_BRACKET = function() {
    return this.getToken(BisonParser.AFTER_ID_OPEN_BRACKET, 0);
};

RefContext.prototype.REF = function() {
    return this.getToken(BisonParser.REF, 0);
};

RefContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterRef(this);
	}
};

RefContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitRef(this);
	}
};

RefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.RefContext = RefContext;

BisonParser.prototype.ref = function() {

    var localctx = new RefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, BisonParser.RULE_ref);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        _la = this._input.LA(1);
        if(!(_la===BisonParser.REF || _la===BisonParser.AFTER_ID_OPEN_BRACKET)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EpilogueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_epilogue;
    return this;
}

EpilogueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EpilogueContext.prototype.constructor = EpilogueContext;

EpilogueContext.prototype.PERCENT_PERCENT = function() {
    return this.getToken(BisonParser.PERCENT_PERCENT, 0);
};

EpilogueContext.prototype.EPILOGUE_CONTENT = function() {
    return this.getToken(BisonParser.EPILOGUE_CONTENT, 0);
};

EpilogueContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterEpilogue(this);
	}
};

EpilogueContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitEpilogue(this);
	}
};

EpilogueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitEpilogue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.EpilogueContext = EpilogueContext;

BisonParser.prototype.epilogue = function() {

    var localctx = new EpilogueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, BisonParser.RULE_epilogue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.match(BisonParser.PERCENT_PERCENT);
        this.state = 272;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BisonParser.EPILOGUE_CONTENT) {
            this.state = 271;
            this.match(BisonParser.EPILOGUE_CONTENT);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.BisonParser = BisonParser;
