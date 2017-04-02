// Generated from /home/melihovv/Projects/edu/grammar_review_tool/resources/assets/js/Parser/Bison/BisonParser.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BisonParserListener = require('./BisonParserListener').BisonParserListener;
var BisonParserVisitor = require('./BisonParserVisitor').BisonParserVisitor;

var grammarFileName = "BisonParser.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003$\u010c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0003\u0002\u0007\u0002:\n\u0002\f\u0002",
    "\u000e\u0002=\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005",
    "\u0002B\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003M",
    "\n\u0003\r\u0003\u000e\u0003N\u0005\u0003Q\n\u0003\u0003\u0003\u0005",
    "\u0003T\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005_",
    "\n\u0005\r\u0005\u000e\u0005`\u0003\u0005\u0005\u0005d\n\u0005\u0003",
    "\u0005\u0005\u0005g\n\u0005\u0005\u0005i\n\u0005\u0003\u0006\u0003\u0006",
    "\u0007\u0006m\n\u0006\f\u0006\u000e\u0006p\u000b\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0007\u0007v\n\u0007\f\u0007\u000e\u0007",
    "y\u000b\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0007\b\u007f",
    "\n\b\f\b\u000e\b\u0082\u000b\b\u0003\b\u0003\b\u0003\t\u0003\t\u0007",
    "\t\u0088\n\t\f\t\u000e\t\u008b\u000b\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0006\n\u0091\n\n\r\n\u000e\n\u0092\u0003\n\u0003\n\u0006\n\u0097",
    "\n\n\r\n\u000e\n\u0098\u0005\n\u009b\n\n\u0003\u000b\u0003\u000b\u0005",
    "\u000b\u009f\n\u000b\u0003\u000b\u0003\u000b\u0006\u000b\u00a3\n\u000b",
    "\r\u000b\u000e\u000b\u00a4\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00ab",
    "\n\f\u0003\f\u0005\f\u00ae\n\f\u0005\f\u00b0\n\f\u0003\r\u0006\r\u00b3",
    "\n\r\r\r\u000e\r\u00b4\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u00bb\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u00c0\n\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0007\u0010",
    "\u00c5\n\u0010\f\u0010\u000e\u0010\u00c8\u000b\u0010\u0003\u0010\u0003",
    "\u0010\u0007\u0010\u00cc\n\u0010\f\u0010\u000e\u0010\u00cf\u000b\u0010",
    "\u0007\u0010\u00d1\n\u0010\f\u0010\u000e\u0010\u00d4\u000b\u0010\u0003",
    "\u0010\u0005\u0010\u00d7\n\u0010\u0003\u0011\u0003\u0011\u0005\u0011",
    "\u00db\n\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00df\n\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00e6",
    "\n\u0011\u0005\u0011\u00e8\n\u0011\u0003\u0012\u0003\u0012\u0005\u0012",
    "\u00ec\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005",
    "\u0013\u00f2\n\u0013\u0003\u0014\u0003\u0014\u0005\u0014\u00f6\n\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u00fc\n",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003",
    "\u001c\u0005\u001c\u010a\n\u001c\u0003\u001c\u0002\u0002\u001d\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&(*,.0246\u0002\u0003\u0004\u0002\u0012\u0012\u0017\u0017\u0126",
    "\u0002;\u0003\u0002\u0002\u0002\u0004S\u0003\u0002\u0002\u0002\u0006",
    "U\u0003\u0002\u0002\u0002\bh\u0003\u0002\u0002\u0002\nj\u0003\u0002",
    "\u0002\u0002\fs\u0003\u0002\u0002\u0002\u000e|\u0003\u0002\u0002\u0002",
    "\u0010\u0085\u0003\u0002\u0002\u0002\u0012\u008e\u0003\u0002\u0002\u0002",
    "\u0014\u009c\u0003\u0002\u0002\u0002\u0016\u00af\u0003\u0002\u0002\u0002",
    "\u0018\u00b2\u0003\u0002\u0002\u0002\u001a\u00ba\u0003\u0002\u0002\u0002",
    "\u001c\u00bc\u0003\u0002\u0002\u0002\u001e\u00c6\u0003\u0002\u0002\u0002",
    " \u00e7\u0003\u0002\u0002\u0002\"\u00eb\u0003\u0002\u0002\u0002$\u00f1",
    "\u0003\u0002\u0002\u0002&\u00f5\u0003\u0002\u0002\u0002(\u00f7\u0003",
    "\u0002\u0002\u0002*\u00fb\u0003\u0002\u0002\u0002,\u00fd\u0003\u0002",
    "\u0002\u0002.\u00ff\u0003\u0002\u0002\u00020\u0101\u0003\u0002\u0002",
    "\u00022\u0103\u0003\u0002\u0002\u00024\u0105\u0003\u0002\u0002\u0002",
    "6\u0107\u0003\u0002\u0002\u00028:\u0005\u0004\u0003\u000298\u0003\u0002",
    "\u0002\u0002:=\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002;<\u0003",
    "\u0002\u0002\u0002<>\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002",
    ">?\u00054\u001b\u0002?A\u0005\u0018\r\u0002@B\u00056\u001c\u0002A@\u0003",
    "\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002B\u0003\u0003\u0002\u0002",
    "\u0002CT\u0005\b\u0005\u0002DT\u0005\n\u0006\u0002EP\u0005\u0006\u0004",
    "\u0002FG\u0005\"\u0012\u0002GH\u0005$\u0013\u0002HQ\u0003\u0002\u0002",
    "\u0002IQ\u0005.\u0018\u0002JQ\u00050\u0019\u0002KM\u0005\f\u0007\u0002",
    "LK\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002",
    "\u0002NO\u0003\u0002\u0002\u0002OQ\u0003\u0002\u0002\u0002PF\u0003\u0002",
    "\u0002\u0002PI\u0003\u0002\u0002\u0002PJ\u0003\u0002\u0002\u0002PL\u0003",
    "\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QT\u0003\u0002\u0002\u0002",
    "RT\u00052\u001a\u0002SC\u0003\u0002\u0002\u0002SD\u0003\u0002\u0002",
    "\u0002SE\u0003\u0002\u0002\u0002SR\u0003\u0002\u0002\u0002T\u0005\u0003",
    "\u0002\u0002\u0002UV\u0007\b\u0002\u0002V\u0007\u0003\u0002\u0002\u0002",
    "Wi\u0005\u0014\u000b\u0002Xi\u0005\u0012\n\u0002Yf\u0005\u0006\u0004",
    "\u0002Zg\u0005*\u0016\u0002[^\u0005\f\u0007\u0002\\_\u0005*\u0016\u0002",
    "]_\u0005\u0010\t\u0002^\\\u0003\u0002\u0002\u0002^]\u0003\u0002\u0002",
    "\u0002_`\u0003\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002",
    "\u0002\u0002ag\u0003\u0002\u0002\u0002bd\u0005(\u0015\u0002cb\u0003",
    "\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002",
    "eg\u0005\f\u0007\u0002fZ\u0003\u0002\u0002\u0002f[\u0003\u0002\u0002",
    "\u0002fc\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gi\u0003\u0002",
    "\u0002\u0002hW\u0003\u0002\u0002\u0002hX\u0003\u0002\u0002\u0002hY\u0003",
    "\u0002\u0002\u0002i\t\u0003\u0002\u0002\u0002jn\u0007\r\u0002\u0002",
    "km\u0007\u001b\u0002\u0002lk\u0003\u0002\u0002\u0002mp\u0003\u0002\u0002",
    "\u0002nl\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002oq\u0003\u0002",
    "\u0002\u0002pn\u0003\u0002\u0002\u0002qr\u0007\u001a\u0002\u0002r\u000b",
    "\u0003\u0002\u0002\u0002sw\u0007\u000f\u0002\u0002tv\u0007\u001e\u0002",
    "\u0002ut\u0003\u0002\u0002\u0002vy\u0003\u0002\u0002\u0002wu\u0003\u0002",
    "\u0002\u0002wx\u0003\u0002\u0002\u0002xz\u0003\u0002\u0002\u0002yw\u0003",
    "\u0002\u0002\u0002z{\u0007\u001d\u0002\u0002{\r\u0003\u0002\u0002\u0002",
    "|\u0080\u0007\u0010\u0002\u0002}\u007f\u0007 \u0002\u0002~}\u0003\u0002",
    "\u0002\u0002\u007f\u0082\u0003\u0002\u0002\u0002\u0080~\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0083\u0003\u0002",
    "\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0083\u0084\u0007\u001f",
    "\u0002\u0002\u0084\u000f\u0003\u0002\u0002\u0002\u0085\u0089\u0007\u0011",
    "\u0002\u0002\u0086\u0088\u0007\"\u0002\u0002\u0087\u0086\u0003\u0002",
    "\u0002\u0002\u0088\u008b\u0003\u0002\u0002\u0002\u0089\u0087\u0003\u0002",
    "\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008c\u0003\u0002",
    "\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008c\u008d\u0007!",
    "\u0002\u0002\u008d\u0011\u0003\u0002\u0002\u0002\u008e\u009a\u0005\u0006",
    "\u0004\u0002\u008f\u0091\u0005\u0016\f\u0002\u0090\u008f\u0003\u0002",
    "\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002",
    "\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u009b\u0003\u0002",
    "\u0002\u0002\u0094\u0096\u0005\u0010\t\u0002\u0095\u0097\u0005*\u0016",
    "\u0002\u0096\u0095\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002",
    "\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002",
    "\u0002\u0099\u009b\u0003\u0002\u0002\u0002\u009a\u0090\u0003\u0002\u0002",
    "\u0002\u009a\u0094\u0003\u0002\u0002\u0002\u009b\u0013\u0003\u0002\u0002",
    "\u0002\u009c\u009e\u0005\u0006\u0004\u0002\u009d\u009f\u0005\u0010\t",
    "\u0002\u009e\u009d\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002",
    "\u0002\u009f\u00a2\u0003\u0002\u0002\u0002\u00a0\u00a3\u0005*\u0016",
    "\u0002\u00a1\u00a3\u00050\u0019\u0002\u00a2\u00a0\u0003\u0002\u0002",
    "\u0002\u00a2\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002",
    "\u0002\u00a4\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002",
    "\u0002\u00a5\u0015\u0003\u0002\u0002\u0002\u00a6\u00b0\u0005\u0010\t",
    "\u0002\u00a7\u00ad\u0005&\u0014\u0002\u00a8\u00aa\u00050\u0019\u0002",
    "\u00a9\u00ab\u0005.\u0018\u0002\u00aa\u00a9\u0003\u0002\u0002\u0002",
    "\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab\u00ae\u0003\u0002\u0002\u0002",
    "\u00ac\u00ae\u0005.\u0018\u0002\u00ad\u00a8\u0003\u0002\u0002\u0002",
    "\u00ad\u00ac\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002",
    "\u00ae\u00b0\u0003\u0002\u0002\u0002\u00af\u00a6\u0003\u0002\u0002\u0002",
    "\u00af\u00a7\u0003\u0002\u0002\u0002\u00b0\u0017\u0003\u0002\u0002\u0002",
    "\u00b1\u00b3\u0005\u001a\u000e\u0002\u00b2\u00b1\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002",
    "\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u0019\u0003\u0002\u0002\u0002",
    "\u00b6\u00bb\u0005\u001c\u000f\u0002\u00b7\u00b8\u0005\b\u0005\u0002",
    "\u00b8\u00b9\u00052\u001a\u0002\u00b9\u00bb\u0003\u0002\u0002\u0002",
    "\u00ba\u00b6\u0003\u0002\u0002\u0002\u00ba\u00b7\u0003\u0002\u0002\u0002",
    "\u00bb\u001b\u0003\u0002\u0002\u0002\u00bc\u00bd\u0005(\u0015\u0002",
    "\u00bd\u00bf\u0007\u0018\u0002\u0002\u00be\u00c0\u0005,\u0017\u0002",
    "\u00bf\u00be\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002",
    "\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c2\u0005\u001e\u0010\u0002",
    "\u00c2\u001d\u0003\u0002\u0002\u0002\u00c3\u00c5\u0005 \u0011\u0002",
    "\u00c4\u00c3\u0003\u0002\u0002\u0002\u00c5\u00c8\u0003\u0002\u0002\u0002",
    "\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002",
    "\u00c7\u00d2\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002",
    "\u00c9\u00cd\u0007\u0006\u0002\u0002\u00ca\u00cc\u0005 \u0011\u0002",
    "\u00cb\u00ca\u0003\u0002\u0002\u0002\u00cc\u00cf\u0003\u0002\u0002\u0002",
    "\u00cd\u00cb\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002",
    "\u00ce\u00d1\u0003\u0002\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002",
    "\u00d0\u00c9\u0003\u0002\u0002\u0002\u00d1\u00d4\u0003\u0002\u0002\u0002",
    "\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002",
    "\u00d3\u00d6\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002",
    "\u00d5\u00d7\u00052\u001a\u0002\u00d6\u00d5\u0003\u0002\u0002\u0002",
    "\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u001f\u0003\u0002\u0002\u0002",
    "\u00d8\u00da\u0005*\u0016\u0002\u00d9\u00db\u0005,\u0017\u0002\u00da",
    "\u00d9\u0003\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db",
    "\u00e8\u0003\u0002\u0002\u0002\u00dc\u00de\u0005\f\u0007\u0002\u00dd",
    "\u00df\u0005,\u0017\u0002\u00de\u00dd\u0003\u0002\u0002\u0002\u00de",
    "\u00df\u0003\u0002\u0002\u0002\u00df\u00e8\u0003\u0002\u0002\u0002\u00e0",
    "\u00e8\u0005\u000e\b\u0002\u00e1\u00e5\u0005\u0006\u0004\u0002\u00e2",
    "\u00e6\u0005*\u0016\u0002\u00e3\u00e6\u00050\u0019\u0002\u00e4\u00e6",
    "\u0005\u0010\t\u0002\u00e5\u00e2\u0003\u0002\u0002\u0002\u00e5\u00e3",
    "\u0003\u0002\u0002\u0002\u00e5\u00e4\u0003\u0002\u0002\u0002\u00e5\u00e6",
    "\u0003\u0002\u0002\u0002\u00e6\u00e8\u0003\u0002\u0002\u0002\u00e7\u00d8",
    "\u0003\u0002\u0002\u0002\u00e7\u00dc\u0003\u0002\u0002\u0002\u00e7\u00e0",
    "\u0003\u0002\u0002\u0002\u00e7\u00e1\u0003\u0002\u0002\u0002\u00e8!",
    "\u0003\u0002\u0002\u0002\u00e9\u00ec\u0005(\u0015\u0002\u00ea\u00ec",
    "\u0005.\u0018\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ea",
    "\u0003\u0002\u0002\u0002\u00ec#\u0003\u0002\u0002\u0002\u00ed\u00f2",
    "\u0003\u0002\u0002\u0002\u00ee\u00f2\u0005(\u0015\u0002\u00ef\u00f2",
    "\u0005.\u0018\u0002\u00f0\u00f2\u0005\f\u0007\u0002\u00f1\u00ed\u0003",
    "\u0002\u0002\u0002\u00f1\u00ee\u0003\u0002\u0002\u0002\u00f1\u00ef\u0003",
    "\u0002\u0002\u0002\u00f1\u00f0\u0003\u0002\u0002\u0002\u00f2%\u0003",
    "\u0002\u0002\u0002\u00f3\u00f6\u0005(\u0015\u0002\u00f4\u00f6\u0007",
    "\u000b\u0002\u0002\u00f5\u00f3\u0003\u0002\u0002\u0002\u00f5\u00f4\u0003",
    "\u0002\u0002\u0002\u00f6\'\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007",
    "\t\u0002\u0002\u00f8)\u0003\u0002\u0002\u0002\u00f9\u00fc\u0005&\u0014",
    "\u0002\u00fa\u00fc\u0005.\u0018\u0002\u00fb\u00f9\u0003\u0002\u0002",
    "\u0002\u00fb\u00fa\u0003\u0002\u0002\u0002\u00fc+\u0003\u0002\u0002",
    "\u0002\u00fd\u00fe\t\u0002\u0002\u0002\u00fe-\u0003\u0002\u0002\u0002",
    "\u00ff\u0100\u0007\f\u0002\u0002\u0100/\u0003\u0002\u0002\u0002\u0101",
    "\u0102\u0007\n\u0002\u0002\u01021\u0003\u0002\u0002\u0002\u0103\u0104",
    "\u0007\u0007\u0002\u0002\u01043\u0003\u0002\u0002\u0002\u0105\u0106",
    "\u0007\u000e\u0002\u0002\u01065\u0003\u0002\u0002\u0002\u0107\u0109",
    "\u00054\u001b\u0002\u0108\u010a\u0007\u001c\u0002\u0002\u0109\u0108",
    "\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a7",
    "\u0003\u0002\u0002\u0002);ANPS^`cfhnw\u0080\u0089\u0092\u0098\u009a",
    "\u009e\u00a2\u00a4\u00aa\u00ad\u00af\u00b4\u00ba\u00bf\u00c6\u00cd\u00d2",
    "\u00d6\u00da\u00de\u00e5\u00e7\u00eb\u00f1\u00f5\u00fb\u0109"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, null, 
                     null, null, null, "'%%'", "'{'", null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, "'?'", "'&'" ];

var symbolicNames = [ null, "WS", "BLOCK_COMMENT", "LINE_COMMENT", "PIPE", 
                      "SEMICOLON", "DIRECTIVE", "ID", "INT", "CHAR", "STRING", 
                      "PROLOGUE_START", "PERCENT_PERCENT", "BRACED_CODE_START", 
                      "PREDICATE_START", "TAG_START", "REF", "ERROR_CHARACTER", 
                      "AFTER_ID_WS", "AFTER_ID_BLOCK_COMMENT", "AFTER_ID_LINE_COMMENT", 
                      "AFTER_ID_OPEN_BRACKET", "AFTER_ID_COLON", "AFTER_ID_ANY", 
                      "PROLOGUE_CLOSE", "PROLOGUE_CONTENT", "EPILOGUE_CONTENT", 
                      "BRACED_CODE_CLOSE", "BRACED_CODE_CONTENT", "PREDICATE_CLOSE", 
                      "PREDICATE_CONTENT", "TAG_CLOSE", "TAG_CONTENT", "PREDICATE_QUESTION", 
                      "TAG_APOSTROPH" ];

var ruleNames =  [ "file", "prologueDeclaration", "directive", "grammarDeclaration", 
                   "prologue", "code", "predicate", "tagRule", "symbolDeclaration", 
                   "precedenceDeclaration", "symbolDef", "grammarRule", 
                   "rulesOrGrammarDeclaration", "rules", "rhses", "rhs", 
                   "variable", "value", "id", "rawId", "symbol", "ref", 
                   "string", "intRule", "semicolon", "doublePercent", "epilogue" ];

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
BisonParser.PIPE = 4;
BisonParser.SEMICOLON = 5;
BisonParser.DIRECTIVE = 6;
BisonParser.ID = 7;
BisonParser.INT = 8;
BisonParser.CHAR = 9;
BisonParser.STRING = 10;
BisonParser.PROLOGUE_START = 11;
BisonParser.PERCENT_PERCENT = 12;
BisonParser.BRACED_CODE_START = 13;
BisonParser.PREDICATE_START = 14;
BisonParser.TAG_START = 15;
BisonParser.REF = 16;
BisonParser.ERROR_CHARACTER = 17;
BisonParser.AFTER_ID_WS = 18;
BisonParser.AFTER_ID_BLOCK_COMMENT = 19;
BisonParser.AFTER_ID_LINE_COMMENT = 20;
BisonParser.AFTER_ID_OPEN_BRACKET = 21;
BisonParser.AFTER_ID_COLON = 22;
BisonParser.AFTER_ID_ANY = 23;
BisonParser.PROLOGUE_CLOSE = 24;
BisonParser.PROLOGUE_CONTENT = 25;
BisonParser.EPILOGUE_CONTENT = 26;
BisonParser.BRACED_CODE_CLOSE = 27;
BisonParser.BRACED_CODE_CONTENT = 28;
BisonParser.PREDICATE_CLOSE = 29;
BisonParser.PREDICATE_CONTENT = 30;
BisonParser.TAG_CLOSE = 31;
BisonParser.TAG_CONTENT = 32;
BisonParser.PREDICATE_QUESTION = 33;
BisonParser.TAG_APOSTROPH = 34;

BisonParser.RULE_file = 0;
BisonParser.RULE_prologueDeclaration = 1;
BisonParser.RULE_directive = 2;
BisonParser.RULE_grammarDeclaration = 3;
BisonParser.RULE_prologue = 4;
BisonParser.RULE_code = 5;
BisonParser.RULE_predicate = 6;
BisonParser.RULE_tagRule = 7;
BisonParser.RULE_symbolDeclaration = 8;
BisonParser.RULE_precedenceDeclaration = 9;
BisonParser.RULE_symbolDef = 10;
BisonParser.RULE_grammarRule = 11;
BisonParser.RULE_rulesOrGrammarDeclaration = 12;
BisonParser.RULE_rules = 13;
BisonParser.RULE_rhses = 14;
BisonParser.RULE_rhs = 15;
BisonParser.RULE_variable = 16;
BisonParser.RULE_value = 17;
BisonParser.RULE_id = 18;
BisonParser.RULE_rawId = 19;
BisonParser.RULE_symbol = 20;
BisonParser.RULE_ref = 21;
BisonParser.RULE_string = 22;
BisonParser.RULE_intRule = 23;
BisonParser.RULE_semicolon = 24;
BisonParser.RULE_doublePercent = 25;
BisonParser.RULE_epilogue = 26;

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

FileContext.prototype.doublePercent = function() {
    return this.getTypedRuleContext(DoublePercentContext,0);
};

FileContext.prototype.grammarRule = function() {
    return this.getTypedRuleContext(GrammarRuleContext,0);
};

FileContext.prototype.prologueDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PrologueDeclarationContext);
    } else {
        return this.getTypedRuleContext(PrologueDeclarationContext,i);
    }
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
        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BisonParser.SEMICOLON) | (1 << BisonParser.DIRECTIVE) | (1 << BisonParser.PROLOGUE_START))) !== 0)) {
            this.state = 54;
            this.prologueDeclaration();
            this.state = 59;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 60;
        this.doublePercent();
        this.state = 61;
        this.grammarRule();
        this.state = 63;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BisonParser.PERCENT_PERCENT) {
            this.state = 62;
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

PrologueDeclarationContext.prototype.directive = function() {
    return this.getTypedRuleContext(DirectiveContext,0);
};

PrologueDeclarationContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

PrologueDeclarationContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

PrologueDeclarationContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

PrologueDeclarationContext.prototype.intRule = function() {
    return this.getTypedRuleContext(IntRuleContext,0);
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

PrologueDeclarationContext.prototype.semicolon = function() {
    return this.getTypedRuleContext(SemicolonContext,0);
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
    this.enterRule(localctx, 2, BisonParser.RULE_prologueDeclaration);
    var _la = 0; // Token type
    try {
        this.state = 81;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 65;
            this.grammarDeclaration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 66;
            this.prologue();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 67;
            this.directive();
            this.state = 78;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
            if(la_===1) {
                this.state = 68;
                this.variable();
                this.state = 69;
                this.value();

            } else if(la_===2) {
                this.state = 71;
                this.string();

            } else if(la_===3) {
                this.state = 72;
                this.intRule();

            } else if(la_===4) {
                this.state = 74; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 73;
                    this.code();
                    this.state = 76; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===BisonParser.BRACED_CODE_START);

            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 80;
            this.semicolon();
            break;

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

function DirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_directive;
    return this;
}

DirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DirectiveContext.prototype.constructor = DirectiveContext;

DirectiveContext.prototype.DIRECTIVE = function() {
    return this.getToken(BisonParser.DIRECTIVE, 0);
};

DirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterDirective(this);
	}
};

DirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitDirective(this);
	}
};

DirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitDirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.DirectiveContext = DirectiveContext;

BisonParser.prototype.directive = function() {

    var localctx = new DirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BisonParser.RULE_directive);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.match(BisonParser.DIRECTIVE);
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

GrammarDeclarationContext.prototype.directive = function() {
    return this.getTypedRuleContext(DirectiveContext,0);
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

GrammarDeclarationContext.prototype.tagRule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TagRuleContext);
    } else {
        return this.getTypedRuleContext(TagRuleContext,i);
    }
};

GrammarDeclarationContext.prototype.rawId = function() {
    return this.getTypedRuleContext(RawIdContext,0);
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
        this.state = 102;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 85;
            this.precedenceDeclaration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 86;
            this.symbolDeclaration();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 87;
            this.directive();
            this.state = 100;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
            if(la_===1) {
                this.state = 88;
                this.symbol();

            } else if(la_===2) {
                this.state = 89;
                this.code();
                this.state = 92; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 92;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case BisonParser.ID:
                    case BisonParser.CHAR:
                    case BisonParser.STRING:
                        this.state = 90;
                        this.symbol();
                        break;
                    case BisonParser.TAG_START:
                        this.state = 91;
                        this.tagRule();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    }
                    this.state = 94; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BisonParser.ID) | (1 << BisonParser.CHAR) | (1 << BisonParser.STRING) | (1 << BisonParser.TAG_START))) !== 0));

            } else if(la_===3) {
                this.state = 97;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===BisonParser.ID) {
                    this.state = 96;
                    this.rawId();
                }

                this.state = 99;
                this.code();

            }
            break;

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
        this.state = 104;
        this.match(BisonParser.PROLOGUE_START);
        this.state = 108;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BisonParser.PROLOGUE_CONTENT) {
            this.state = 105;
            this.match(BisonParser.PROLOGUE_CONTENT);
            this.state = 110;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 111;
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
        this.state = 113;
        this.match(BisonParser.BRACED_CODE_START);
        this.state = 117;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BisonParser.BRACED_CODE_CONTENT) {
            this.state = 114;
            this.match(BisonParser.BRACED_CODE_CONTENT);
            this.state = 119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 120;
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
        this.state = 122;
        this.match(BisonParser.PREDICATE_START);
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BisonParser.PREDICATE_CONTENT) {
            this.state = 123;
            this.match(BisonParser.PREDICATE_CONTENT);
            this.state = 128;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 129;
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
        this.state = 131;
        this.match(BisonParser.TAG_START);
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BisonParser.TAG_CONTENT) {
            this.state = 132;
            this.match(BisonParser.TAG_CONTENT);
            this.state = 137;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 138;
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

SymbolDeclarationContext.prototype.directive = function() {
    return this.getTypedRuleContext(DirectiveContext,0);
};

SymbolDeclarationContext.prototype.tagRule = function() {
    return this.getTypedRuleContext(TagRuleContext,0);
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
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.directive();
        this.state = 152;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.state = 142; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 141;
                this.symbolDef();
                this.state = 144; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BisonParser.ID) | (1 << BisonParser.CHAR) | (1 << BisonParser.TAG_START))) !== 0));
            break;

        case 2:
            this.state = 146;
            this.tagRule();
            this.state = 148; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 147;
                this.symbol();
                this.state = 150; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BisonParser.ID) | (1 << BisonParser.CHAR) | (1 << BisonParser.STRING))) !== 0));
            break;

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

PrecedenceDeclarationContext.prototype.directive = function() {
    return this.getTypedRuleContext(DirectiveContext,0);
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

PrecedenceDeclarationContext.prototype.intRule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IntRuleContext);
    } else {
        return this.getTypedRuleContext(IntRuleContext,i);
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
        this.state = 154;
        this.directive();
        this.state = 156;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BisonParser.TAG_START) {
            this.state = 155;
            this.tagRule();
        }

        this.state = 160; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 160;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case BisonParser.ID:
            case BisonParser.CHAR:
            case BisonParser.STRING:
                this.state = 158;
                this.symbol();
                break;
            case BisonParser.INT:
                this.state = 159;
                this.intRule();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 162; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BisonParser.ID) | (1 << BisonParser.INT) | (1 << BisonParser.CHAR) | (1 << BisonParser.STRING))) !== 0));
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

SymbolDefContext.prototype.intRule = function() {
    return this.getTypedRuleContext(IntRuleContext,0);
};

SymbolDefContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
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
    this.enterRule(localctx, 20, BisonParser.RULE_symbolDef);
    var _la = 0; // Token type
    try {
        this.state = 173;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.TAG_START:
            this.enterOuterAlt(localctx, 1);
            this.state = 164;
            this.tagRule();
            break;
        case BisonParser.ID:
        case BisonParser.CHAR:
            this.enterOuterAlt(localctx, 2);
            this.state = 165;
            this.id();
            this.state = 171;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case BisonParser.INT:
            	this.state = 166;
            	this.intRule();
            	this.state = 168;
            	this._errHandler.sync(this);
            	_la = this._input.LA(1);
            	if(_la===BisonParser.STRING) {
            	    this.state = 167;
            	    this.string();
            	}

            	break;
            case BisonParser.STRING:
            	this.state = 170;
            	this.string();
            	break;
            case BisonParser.SEMICOLON:
            case BisonParser.DIRECTIVE:
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
    this.enterRule(localctx, 22, BisonParser.RULE_grammarRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 175;
            this.rulesOrGrammarDeclaration();
            this.state = 178; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===BisonParser.DIRECTIVE || _la===BisonParser.ID);
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

RulesOrGrammarDeclarationContext.prototype.semicolon = function() {
    return this.getTypedRuleContext(SemicolonContext,0);
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
    this.enterRule(localctx, 24, BisonParser.RULE_rulesOrGrammarDeclaration);
    try {
        this.state = 184;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 180;
            this.rules();
            break;
        case BisonParser.DIRECTIVE:
            this.enterOuterAlt(localctx, 2);
            this.state = 181;
            this.grammarDeclaration();
            this.state = 182;
            this.semicolon();
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

RulesContext.prototype.rawId = function() {
    return this.getTypedRuleContext(RawIdContext,0);
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
    this.enterRule(localctx, 26, BisonParser.RULE_rules);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.rawId();
        this.state = 187;
        this.match(BisonParser.AFTER_ID_COLON);
        this.state = 189;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BisonParser.REF || _la===BisonParser.AFTER_ID_OPEN_BRACKET) {
            this.state = 188;
            this.ref();
        }

        this.state = 191;
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


RhsesContext.prototype.semicolon = function() {
    return this.getTypedRuleContext(SemicolonContext,0);
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
    this.enterRule(localctx, 28, BisonParser.RULE_rhses);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 193;
                this.rhs(); 
            }
            this.state = 198;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
        }

        this.state = 208;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BisonParser.PIPE) {
            this.state = 199;
            this.match(BisonParser.PIPE);
            this.state = 203;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 200;
                    this.rhs(); 
                }
                this.state = 205;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
            }

            this.state = 210;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BisonParser.SEMICOLON) {
            this.state = 211;
            this.semicolon();
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

RhsContext.prototype.directive = function() {
    return this.getTypedRuleContext(DirectiveContext,0);
};

RhsContext.prototype.intRule = function() {
    return this.getTypedRuleContext(IntRuleContext,0);
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
    this.enterRule(localctx, 30, BisonParser.RULE_rhs);
    var _la = 0; // Token type
    try {
        this.state = 229;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.ID:
        case BisonParser.CHAR:
        case BisonParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 214;
            this.symbol();
            this.state = 216;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===BisonParser.REF || _la===BisonParser.AFTER_ID_OPEN_BRACKET) {
                this.state = 215;
                this.ref();
            }

            break;
        case BisonParser.BRACED_CODE_START:
            this.enterOuterAlt(localctx, 2);
            this.state = 218;
            this.code();
            this.state = 220;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===BisonParser.REF || _la===BisonParser.AFTER_ID_OPEN_BRACKET) {
                this.state = 219;
                this.ref();
            }

            break;
        case BisonParser.PREDICATE_START:
            this.enterOuterAlt(localctx, 3);
            this.state = 222;
            this.predicate();
            break;
        case BisonParser.DIRECTIVE:
            this.enterOuterAlt(localctx, 4);
            this.state = 223;
            this.directive();
            this.state = 227;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
            if(la_===1) {
                this.state = 224;
                this.symbol();

            } else if(la_===2) {
                this.state = 225;
                this.intRule();

            } else if(la_===3) {
                this.state = 226;
                this.tagRule();

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

VariableContext.prototype.rawId = function() {
    return this.getTypedRuleContext(RawIdContext,0);
};

VariableContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
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
    this.enterRule(localctx, 32, BisonParser.RULE_variable);
    try {
        this.state = 233;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 231;
            this.rawId();
            break;
        case BisonParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 232;
            this.string();
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

ValueContext.prototype.rawId = function() {
    return this.getTypedRuleContext(RawIdContext,0);
};

ValueContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
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
    this.enterRule(localctx, 34, BisonParser.RULE_value);
    try {
        this.state = 239;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.SEMICOLON:
        case BisonParser.DIRECTIVE:
        case BisonParser.PROLOGUE_START:
        case BisonParser.PERCENT_PERCENT:
            this.enterOuterAlt(localctx, 1);

            break;
        case BisonParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 236;
            this.rawId();
            break;
        case BisonParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 237;
            this.string();
            break;
        case BisonParser.BRACED_CODE_START:
            this.enterOuterAlt(localctx, 4);
            this.state = 238;
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

IdContext.prototype.rawId = function() {
    return this.getTypedRuleContext(RawIdContext,0);
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
    this.enterRule(localctx, 36, BisonParser.RULE_id);
    try {
        this.state = 243;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 241;
            this.rawId();
            break;
        case BisonParser.CHAR:
            this.enterOuterAlt(localctx, 2);
            this.state = 242;
            this.match(BisonParser.CHAR);
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

function RawIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_rawId;
    return this;
}

RawIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RawIdContext.prototype.constructor = RawIdContext;

RawIdContext.prototype.ID = function() {
    return this.getToken(BisonParser.ID, 0);
};

RawIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterRawId(this);
	}
};

RawIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitRawId(this);
	}
};

RawIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitRawId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.RawIdContext = RawIdContext;

BisonParser.prototype.rawId = function() {

    var localctx = new RawIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, BisonParser.RULE_rawId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.match(BisonParser.ID);
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

SymbolContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
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
    this.enterRule(localctx, 40, BisonParser.RULE_symbol);
    try {
        this.state = 249;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.ID:
        case BisonParser.CHAR:
            this.enterOuterAlt(localctx, 1);
            this.state = 247;
            this.id();
            break;
        case BisonParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 248;
            this.string();
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
    this.enterRule(localctx, 42, BisonParser.RULE_ref);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 251;
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

function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(BisonParser.STRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitString(this);
	}
};

StringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitString(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.StringContext = StringContext;

BisonParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, BisonParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.match(BisonParser.STRING);
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

function IntRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_intRule;
    return this;
}

IntRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntRuleContext.prototype.constructor = IntRuleContext;

IntRuleContext.prototype.INT = function() {
    return this.getToken(BisonParser.INT, 0);
};

IntRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterIntRule(this);
	}
};

IntRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitIntRule(this);
	}
};

IntRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitIntRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.IntRuleContext = IntRuleContext;

BisonParser.prototype.intRule = function() {

    var localctx = new IntRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, BisonParser.RULE_intRule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this.match(BisonParser.INT);
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

function SemicolonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_semicolon;
    return this;
}

SemicolonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SemicolonContext.prototype.constructor = SemicolonContext;

SemicolonContext.prototype.SEMICOLON = function() {
    return this.getToken(BisonParser.SEMICOLON, 0);
};

SemicolonContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterSemicolon(this);
	}
};

SemicolonContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitSemicolon(this);
	}
};

SemicolonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitSemicolon(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.SemicolonContext = SemicolonContext;

BisonParser.prototype.semicolon = function() {

    var localctx = new SemicolonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, BisonParser.RULE_semicolon);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 257;
        this.match(BisonParser.SEMICOLON);
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

function DoublePercentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BisonParser.RULE_doublePercent;
    return this;
}

DoublePercentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DoublePercentContext.prototype.constructor = DoublePercentContext;

DoublePercentContext.prototype.PERCENT_PERCENT = function() {
    return this.getToken(BisonParser.PERCENT_PERCENT, 0);
};

DoublePercentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.enterDoublePercent(this);
	}
};

DoublePercentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BisonParserListener ) {
        listener.exitDoublePercent(this);
	}
};

DoublePercentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BisonParserVisitor ) {
        return visitor.visitDoublePercent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BisonParser.DoublePercentContext = DoublePercentContext;

BisonParser.prototype.doublePercent = function() {

    var localctx = new DoublePercentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, BisonParser.RULE_doublePercent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        this.match(BisonParser.PERCENT_PERCENT);
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

EpilogueContext.prototype.doublePercent = function() {
    return this.getTypedRuleContext(DoublePercentContext,0);
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
    this.enterRule(localctx, 52, BisonParser.RULE_epilogue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        this.doublePercent();
        this.state = 263;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BisonParser.EPILOGUE_CONTENT) {
            this.state = 262;
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
