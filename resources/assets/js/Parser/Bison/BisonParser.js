// Generated from /home/melihovv/Projects/edu/grammar_review_tool/resources/assets/js/Parser/Bison/BisonParser.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BisonParserListener = require('./BisonParserListener').BisonParserListener;
var BisonParserVisitor = require('./BisonParserVisitor').BisonParserVisitor;

var grammarFileName = "BisonParser.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003%\u00fa\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0003\u0002\u0007\u00022\n\u0002\f\u0002\u000e\u0002",
    "5\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002:\n\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003E\n\u0003\r\u0003\u000e",
    "\u0003F\u0005\u0003I\n\u0003\u0003\u0003\u0005\u0003L\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0006\u0005W\n\u0005\r\u0005\u000e\u0005",
    "X\u0003\u0005\u0005\u0005\\\n\u0005\u0003\u0005\u0005\u0005_\n\u0005",
    "\u0005\u0005a\n\u0005\u0003\u0006\u0003\u0006\u0007\u0006e\n\u0006\f",
    "\u0006\u000e\u0006h\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0007\u0007n\n\u0007\f\u0007\u000e\u0007q\u000b\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0007\bw\n\b\f\b\u000e\bz\u000b\b",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0006\t\u0080\n\t\r\t\u000e\t\u0081",
    "\u0003\t\u0003\t\u0003\n\u0003\n\u0006\n\u0088\n\n\r\n\u000e\n\u0089",
    "\u0003\n\u0003\n\u0006\n\u008e\n\n\r\n\u000e\n\u008f\u0005\n\u0092\n",
    "\n\u0003\u000b\u0003\u000b\u0005\u000b\u0096\n\u000b\u0003\u000b\u0003",
    "\u000b\u0006\u000b\u009a\n\u000b\r\u000b\u000e\u000b\u009b\u0003\f\u0003",
    "\f\u0003\f\u0005\f\u00a1\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r",
    "\u00a7\n\r\u0003\r\u0005\r\u00aa\n\r\u0005\r\u00ac\n\r\u0003\u000e\u0006",
    "\u000e\u00af\n\u000e\r\u000e\u000e\u000e\u00b0\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u00b7\n\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0005\u0010\u00bc\n\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0007\u0011\u00c1\n\u0011\f\u0011\u000e\u0011\u00c4\u000b",
    "\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00c8\n\u0011\f\u0011\u000e",
    "\u0011\u00cb\u000b\u0011\u0007\u0011\u00cd\n\u0011\f\u0011\u000e\u0011",
    "\u00d0\u000b\u0011\u0003\u0011\u0005\u0011\u00d3\n\u0011\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u00d7\n\u0012\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u00db\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u00e2\n\u0012\u0005\u0012\u00e4\n\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005",
    "\u0014\u00ec\n\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0005\u0016\u00f2\n\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0005\u0018\u00f8\n\u0018\u0003\u0018\u0002\u0002\u0019\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&(*,.\u0002\u0005\u0004\u0002\t\t\f\f\u0004\u0002\t\t\u000b\u000b",
    "\u0004\u0002\u0014\u0014\u0019\u0019\u0118\u00023\u0003\u0002\u0002",
    "\u0002\u0004K\u0003\u0002\u0002\u0002\u0006M\u0003\u0002\u0002\u0002",
    "\b`\u0003\u0002\u0002\u0002\nb\u0003\u0002\u0002\u0002\fk\u0003\u0002",
    "\u0002\u0002\u000et\u0003\u0002\u0002\u0002\u0010}\u0003\u0002\u0002",
    "\u0002\u0012\u0085\u0003\u0002\u0002\u0002\u0014\u0093\u0003\u0002\u0002",
    "\u0002\u0016\u00a0\u0003\u0002\u0002\u0002\u0018\u00ab\u0003\u0002\u0002",
    "\u0002\u001a\u00ae\u0003\u0002\u0002\u0002\u001c\u00b6\u0003\u0002\u0002",
    "\u0002\u001e\u00b8\u0003\u0002\u0002\u0002 \u00c2\u0003\u0002\u0002",
    "\u0002\"\u00e3\u0003\u0002\u0002\u0002$\u00e5\u0003\u0002\u0002\u0002",
    "&\u00eb\u0003\u0002\u0002\u0002(\u00ed\u0003\u0002\u0002\u0002*\u00f1",
    "\u0003\u0002\u0002\u0002,\u00f3\u0003\u0002\u0002\u0002.\u00f5\u0003",
    "\u0002\u0002\u000202\u0005\u0004\u0003\u000210\u0003\u0002\u0002\u0002",
    "25\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000234\u0003\u0002\u0002",
    "\u000246\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u000267\u0007\u000e",
    "\u0002\u000279\u0005\u001a\u000e\u00028:\u0005.\u0018\u000298\u0003",
    "\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:\u0003\u0003\u0002\u0002",
    "\u0002;L\u0005\b\u0005\u0002<L\u0005\n\u0006\u0002=H\u0005\u0006\u0004",
    "\u0002>?\u0005$\u0013\u0002?@\u0005&\u0014\u0002@I\u0003\u0002\u0002",
    "\u0002AI\u0007\f\u0002\u0002BI\u0007\n\u0002\u0002CE\u0005\f\u0007\u0002",
    "DC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002",
    "\u0002FG\u0003\u0002\u0002\u0002GI\u0003\u0002\u0002\u0002H>\u0003\u0002",
    "\u0002\u0002HA\u0003\u0002\u0002\u0002HB\u0003\u0002\u0002\u0002HD\u0003",
    "\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IL\u0003\u0002\u0002\u0002",
    "JL\u0007\u0007\u0002\u0002K;\u0003\u0002\u0002\u0002K<\u0003\u0002\u0002",
    "\u0002K=\u0003\u0002\u0002\u0002KJ\u0003\u0002\u0002\u0002L\u0005\u0003",
    "\u0002\u0002\u0002MN\u0007\b\u0002\u0002N\u0007\u0003\u0002\u0002\u0002",
    "Oa\u0005\u0014\u000b\u0002Pa\u0005\u0012\n\u0002Q^\u0005\u0006\u0004",
    "\u0002R_\u0005*\u0016\u0002SV\u0005\f\u0007\u0002TW\u0005*\u0016\u0002",
    "UW\u0005\u0016\f\u0002VT\u0003\u0002\u0002\u0002VU\u0003\u0002\u0002",
    "\u0002WX\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002",
    "\u0002\u0002Y_\u0003\u0002\u0002\u0002Z\\\u0007\t\u0002\u0002[Z\u0003",
    "\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002",
    "]_\u0005\f\u0007\u0002^R\u0003\u0002\u0002\u0002^S\u0003\u0002\u0002",
    "\u0002^[\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_a\u0003\u0002",
    "\u0002\u0002`O\u0003\u0002\u0002\u0002`P\u0003\u0002\u0002\u0002`Q\u0003",
    "\u0002\u0002\u0002a\t\u0003\u0002\u0002\u0002bf\u0007\r\u0002\u0002",
    "ce\u0007\u001d\u0002\u0002dc\u0003\u0002\u0002\u0002eh\u0003\u0002\u0002",
    "\u0002fd\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gi\u0003\u0002",
    "\u0002\u0002hf\u0003\u0002\u0002\u0002ij\u0007\u001c\u0002\u0002j\u000b",
    "\u0003\u0002\u0002\u0002ko\u0007\u000f\u0002\u0002ln\u0007 \u0002\u0002",
    "ml\u0003\u0002\u0002\u0002nq\u0003\u0002\u0002\u0002om\u0003\u0002\u0002",
    "\u0002op\u0003\u0002\u0002\u0002pr\u0003\u0002\u0002\u0002qo\u0003\u0002",
    "\u0002\u0002rs\u0007\u001f\u0002\u0002s\r\u0003\u0002\u0002\u0002tx",
    "\u0007\u0010\u0002\u0002uw\u0007\"\u0002\u0002vu\u0003\u0002\u0002\u0002",
    "wz\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002",
    "\u0002y{\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002{|\u0007!",
    "\u0002\u0002|\u000f\u0003\u0002\u0002\u0002}\u007f\u0007\u0013\u0002",
    "\u0002~\u0080\u0007$\u0002\u0002\u007f~\u0003\u0002\u0002\u0002\u0080",
    "\u0081\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0081",
    "\u0082\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083",
    "\u0084\u0007#\u0002\u0002\u0084\u0011\u0003\u0002\u0002\u0002\u0085",
    "\u0091\u0005\u0006\u0004\u0002\u0086\u0088\u0005\u0018\r\u0002\u0087",
    "\u0086\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089",
    "\u0087\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a",
    "\u0092\u0003\u0002\u0002\u0002\u008b\u008d\u0005\u0010\t\u0002\u008c",
    "\u008e\u0005*\u0016\u0002\u008d\u008c\u0003\u0002\u0002\u0002\u008e",
    "\u008f\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f",
    "\u0090\u0003\u0002\u0002\u0002\u0090\u0092\u0003\u0002\u0002\u0002\u0091",
    "\u0087\u0003\u0002\u0002\u0002\u0091\u008b\u0003\u0002\u0002\u0002\u0092",
    "\u0013\u0003\u0002\u0002\u0002\u0093\u0095\u0005\u0006\u0004\u0002\u0094",
    "\u0096\u0005\u0010\t\u0002\u0095\u0094\u0003\u0002\u0002\u0002\u0095",
    "\u0096\u0003\u0002\u0002\u0002\u0096\u0099\u0003\u0002\u0002\u0002\u0097",
    "\u009a\u0005*\u0016\u0002\u0098\u009a\u0007\n\u0002\u0002\u0099\u0097",
    "\u0003\u0002\u0002\u0002\u0099\u0098\u0003\u0002\u0002\u0002\u009a\u009b",
    "\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009b\u009c",
    "\u0003\u0002\u0002\u0002\u009c\u0015\u0003\u0002\u0002\u0002\u009d\u00a1",
    "\u0005\u0010\t\u0002\u009e\u00a1\u0007\u0011\u0002\u0002\u009f\u00a1",
    "\u0007\u0012\u0002\u0002\u00a0\u009d\u0003\u0002\u0002\u0002\u00a0\u009e",
    "\u0003\u0002\u0002\u0002\u00a0\u009f\u0003\u0002\u0002\u0002\u00a1\u0017",
    "\u0003\u0002\u0002\u0002\u00a2\u00ac\u0005\u0010\t\u0002\u00a3\u00a9",
    "\u0005(\u0015\u0002\u00a4\u00a6\u0007\n\u0002\u0002\u00a5\u00a7\u0007",
    "\f\u0002\u0002\u00a6\u00a5\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003",
    "\u0002\u0002\u0002\u00a7\u00aa\u0003\u0002\u0002\u0002\u00a8\u00aa\u0007",
    "\f\u0002\u0002\u00a9\u00a4\u0003\u0002\u0002\u0002\u00a9\u00a8\u0003",
    "\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u00ac\u0003",
    "\u0002\u0002\u0002\u00ab\u00a2\u0003\u0002\u0002\u0002\u00ab\u00a3\u0003",
    "\u0002\u0002\u0002\u00ac\u0019\u0003\u0002\u0002\u0002\u00ad\u00af\u0005",
    "\u001c\u000f\u0002\u00ae\u00ad\u0003\u0002\u0002\u0002\u00af\u00b0\u0003",
    "\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003",
    "\u0002\u0002\u0002\u00b1\u001b\u0003\u0002\u0002\u0002\u00b2\u00b7\u0005",
    "\u001e\u0010\u0002\u00b3\u00b4\u0005\b\u0005\u0002\u00b4\u00b5\u0007",
    "\u0007\u0002\u0002\u00b5\u00b7\u0003\u0002\u0002\u0002\u00b6\u00b2\u0003",
    "\u0002\u0002\u0002\u00b6\u00b3\u0003\u0002\u0002\u0002\u00b7\u001d\u0003",
    "\u0002\u0002\u0002\u00b8\u00b9\u0007\t\u0002\u0002\u00b9\u00bb\u0007",
    "\u001a\u0002\u0002\u00ba\u00bc\u0005,\u0017\u0002\u00bb\u00ba\u0003",
    "\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003",
    "\u0002\u0002\u0002\u00bd\u00be\u0005 \u0011\u0002\u00be\u001f\u0003",
    "\u0002\u0002\u0002\u00bf\u00c1\u0005\"\u0012\u0002\u00c0\u00bf\u0003",
    "\u0002\u0002\u0002\u00c1\u00c4\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003",
    "\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00ce\u0003",
    "\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c9\u0007",
    "\u0006\u0002\u0002\u00c6\u00c8\u0005\"\u0012\u0002\u00c7\u00c6\u0003",
    "\u0002\u0002\u0002\u00c8\u00cb\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003",
    "\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cd\u0003",
    "\u0002\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cc\u00c5\u0003",
    "\u0002\u0002\u0002\u00cd\u00d0\u0003\u0002\u0002\u0002\u00ce\u00cc\u0003",
    "\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u00d2\u0003",
    "\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d1\u00d3\u0007",
    "\u0007\u0002\u0002\u00d2\u00d1\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003",
    "\u0002\u0002\u0002\u00d3!\u0003\u0002\u0002\u0002\u00d4\u00d6\u0005",
    "*\u0016\u0002\u00d5\u00d7\u0005,\u0017\u0002\u00d6\u00d5\u0003\u0002",
    "\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00e4\u0003\u0002",
    "\u0002\u0002\u00d8\u00da\u0005\f\u0007\u0002\u00d9\u00db\u0005,\u0017",
    "\u0002\u00da\u00d9\u0003\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002",
    "\u0002\u00db\u00e4\u0003\u0002\u0002\u0002\u00dc\u00e4\u0005\u000e\b",
    "\u0002\u00dd\u00e1\u0005\u0006\u0004\u0002\u00de\u00e2\u0005*\u0016",
    "\u0002\u00df\u00e2\u0007\n\u0002\u0002\u00e0\u00e2\u0005\u0010\t\u0002",
    "\u00e1\u00de\u0003\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002\u0002",
    "\u00e1\u00e0\u0003\u0002\u0002\u0002\u00e1\u00e2\u0003\u0002\u0002\u0002",
    "\u00e2\u00e4\u0003\u0002\u0002\u0002\u00e3\u00d4\u0003\u0002\u0002\u0002",
    "\u00e3\u00d8\u0003\u0002\u0002\u0002\u00e3\u00dc\u0003\u0002\u0002\u0002",
    "\u00e3\u00dd\u0003\u0002\u0002\u0002\u00e4#\u0003\u0002\u0002\u0002",
    "\u00e5\u00e6\t\u0002\u0002\u0002\u00e6%\u0003\u0002\u0002\u0002\u00e7",
    "\u00ec\u0003\u0002\u0002\u0002\u00e8\u00ec\u0007\t\u0002\u0002\u00e9",
    "\u00ec\u0007\f\u0002\u0002\u00ea\u00ec\u0005\f\u0007\u0002\u00eb\u00e7",
    "\u0003\u0002\u0002\u0002\u00eb\u00e8\u0003\u0002\u0002\u0002\u00eb\u00e9",
    "\u0003\u0002\u0002\u0002\u00eb\u00ea\u0003\u0002\u0002\u0002\u00ec\'",
    "\u0003\u0002\u0002\u0002\u00ed\u00ee\t\u0003\u0002\u0002\u00ee)\u0003",
    "\u0002\u0002\u0002\u00ef\u00f2\u0005(\u0015\u0002\u00f0\u00f2\u0007",
    "\f\u0002\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f1\u00f0\u0003",
    "\u0002\u0002\u0002\u00f2+\u0003\u0002\u0002\u0002\u00f3\u00f4\t\u0004",
    "\u0002\u0002\u00f4-\u0003\u0002\u0002\u0002\u00f5\u00f7\u0007\u000e",
    "\u0002\u0002\u00f6\u00f8\u0007\u001e\u0002\u0002\u00f7\u00f6\u0003\u0002",
    "\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8/\u0003\u0002",
    "\u0002\u0002(39FHKVX[^`fox\u0081\u0089\u008f\u0091\u0095\u0099\u009b",
    "\u00a0\u00a6\u00a9\u00ab\u00b0\u00b6\u00bb\u00c2\u00c9\u00ce\u00d2\u00d6",
    "\u00da\u00e1\u00e3\u00eb\u00f1\u00f7"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, null, 
                     null, null, null, "'%%'", "'{'", null, "'<*>'", "'<>'", 
                     "'<'", null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, "'>'", null, 
                     "'?'" ];

var symbolicNames = [ null, "WS", "BLOCK_COMMENT", "LINE_COMMENT", "PIPE", 
                      "SEMICOLON", "DIRECTIVE", "ID", "INT", "CHAR", "STRING", 
                      "PROLOGUE_START", "PERCENT_PERCENT", "BRACED_CODE_START", 
                      "PREDICATE_START", "TAG_ANY", "TAG_NONE", "TAG_START", 
                      "REF", "ERROR_CHARACTER", "AFTER_ID_WS", "AFTER_ID_BLOCK_COMMENT", 
                      "AFTER_ID_LINE_COMMENT", "AFTER_ID_OPEN_BRACKET", 
                      "AFTER_ID_COLON", "AFTER_ID_ANY", "PROLOGUE_CLOSE", 
                      "PROLOGUE_CONTENT", "EPILOGUE_CONTENT", "BRACED_CODE_CLOSE", 
                      "BRACED_CODE_CONTENT", "PREDICATE_CLOSE", "PREDICATE_CONTENT", 
                      "TAG_CLOSE", "TAG_CONTENT", "PREDICATE_QUESTION" ];

var ruleNames =  [ "file", "prologueDeclaration", "directive", "grammarDeclaration", 
                   "prologue", "code", "predicate", "tagRule", "symbolDeclaration", 
                   "precedenceDeclaration", "tag", "symbolDef", "grammarRule", 
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
BisonParser.TAG_ANY = 15;
BisonParser.TAG_NONE = 16;
BisonParser.TAG_START = 17;
BisonParser.REF = 18;
BisonParser.ERROR_CHARACTER = 19;
BisonParser.AFTER_ID_WS = 20;
BisonParser.AFTER_ID_BLOCK_COMMENT = 21;
BisonParser.AFTER_ID_LINE_COMMENT = 22;
BisonParser.AFTER_ID_OPEN_BRACKET = 23;
BisonParser.AFTER_ID_COLON = 24;
BisonParser.AFTER_ID_ANY = 25;
BisonParser.PROLOGUE_CLOSE = 26;
BisonParser.PROLOGUE_CONTENT = 27;
BisonParser.EPILOGUE_CONTENT = 28;
BisonParser.BRACED_CODE_CLOSE = 29;
BisonParser.BRACED_CODE_CONTENT = 30;
BisonParser.PREDICATE_CLOSE = 31;
BisonParser.PREDICATE_CONTENT = 32;
BisonParser.TAG_CLOSE = 33;
BisonParser.TAG_CONTENT = 34;
BisonParser.PREDICATE_QUESTION = 35;

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
BisonParser.RULE_tag = 10;
BisonParser.RULE_symbolDef = 11;
BisonParser.RULE_grammarRule = 12;
BisonParser.RULE_rulesOrGrammarDeclaration = 13;
BisonParser.RULE_rules = 14;
BisonParser.RULE_rhses = 15;
BisonParser.RULE_rhs = 16;
BisonParser.RULE_variable = 17;
BisonParser.RULE_value = 18;
BisonParser.RULE_id = 19;
BisonParser.RULE_symbol = 20;
BisonParser.RULE_ref = 21;
BisonParser.RULE_epilogue = 22;

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
        this.state = 49;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BisonParser.SEMICOLON) | (1 << BisonParser.DIRECTIVE) | (1 << BisonParser.PROLOGUE_START))) !== 0)) {
            this.state = 46;
            this.prologueDeclaration();
            this.state = 51;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 52;
        this.match(BisonParser.PERCENT_PERCENT);
        this.state = 53;
        this.grammarRule();
        this.state = 55;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BisonParser.PERCENT_PERCENT) {
            this.state = 54;
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

PrologueDeclarationContext.prototype.STRING = function() {
    return this.getToken(BisonParser.STRING, 0);
};

PrologueDeclarationContext.prototype.INT = function() {
    return this.getToken(BisonParser.INT, 0);
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
    this.enterRule(localctx, 2, BisonParser.RULE_prologueDeclaration);
    var _la = 0; // Token type
    try {
        this.state = 73;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 57;
            this.grammarDeclaration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 58;
            this.prologue();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 59;
            this.directive();
            this.state = 70;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
            if(la_===1) {
                this.state = 60;
                this.variable();
                this.state = 61;
                this.value();

            } else if(la_===2) {
                this.state = 63;
                this.match(BisonParser.STRING);

            } else if(la_===3) {
                this.state = 64;
                this.match(BisonParser.INT);

            } else if(la_===4) {
                this.state = 66; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 65;
                    this.code();
                    this.state = 68; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===BisonParser.BRACED_CODE_START);

            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 72;
            this.match(BisonParser.SEMICOLON);
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
        this.state = 75;
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

GrammarDeclarationContext.prototype.ID = function() {
    return this.getToken(BisonParser.ID, 0);
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
        this.state = 94;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 77;
            this.precedenceDeclaration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 78;
            this.symbolDeclaration();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 79;
            this.directive();
            this.state = 92;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
            if(la_===1) {
                this.state = 80;
                this.symbol();

            } else if(la_===2) {
                this.state = 81;
                this.code();
                this.state = 84; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 84;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case BisonParser.ID:
                    case BisonParser.CHAR:
                    case BisonParser.STRING:
                        this.state = 82;
                        this.symbol();
                        break;
                    case BisonParser.TAG_ANY:
                    case BisonParser.TAG_NONE:
                    case BisonParser.TAG_START:
                        this.state = 83;
                        this.tag();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    }
                    this.state = 86; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BisonParser.ID) | (1 << BisonParser.CHAR) | (1 << BisonParser.STRING) | (1 << BisonParser.TAG_ANY) | (1 << BisonParser.TAG_NONE) | (1 << BisonParser.TAG_START))) !== 0));

            } else if(la_===3) {
                this.state = 89;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===BisonParser.ID) {
                    this.state = 88;
                    this.match(BisonParser.ID);
                }

                this.state = 91;
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
        this.state = 96;
        this.match(BisonParser.PROLOGUE_START);
        this.state = 100;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BisonParser.PROLOGUE_CONTENT) {
            this.state = 97;
            this.match(BisonParser.PROLOGUE_CONTENT);
            this.state = 102;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 103;
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
        this.state = 105;
        this.match(BisonParser.BRACED_CODE_START);
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BisonParser.BRACED_CODE_CONTENT) {
            this.state = 106;
            this.match(BisonParser.BRACED_CODE_CONTENT);
            this.state = 111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 112;
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
        this.state = 114;
        this.match(BisonParser.PREDICATE_START);
        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BisonParser.PREDICATE_CONTENT) {
            this.state = 115;
            this.match(BisonParser.PREDICATE_CONTENT);
            this.state = 120;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 121;
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
        this.state = 123;
        this.match(BisonParser.TAG_START);
        this.state = 125; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 124;
            this.match(BisonParser.TAG_CONTENT);
            this.state = 127; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===BisonParser.TAG_CONTENT);
        this.state = 129;
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
        this.state = 131;
        this.directive();
        this.state = 143;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.state = 133; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 132;
                this.symbolDef();
                this.state = 135; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BisonParser.ID) | (1 << BisonParser.CHAR) | (1 << BisonParser.TAG_START))) !== 0));
            break;

        case 2:
            this.state = 137;
            this.tagRule();
            this.state = 139; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 138;
                this.symbol();
                this.state = 141; 
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
        this.state = 145;
        this.directive();
        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BisonParser.TAG_START) {
            this.state = 146;
            this.tagRule();
        }

        this.state = 151; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 151;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case BisonParser.ID:
            case BisonParser.CHAR:
            case BisonParser.STRING:
                this.state = 149;
                this.symbol();
                break;
            case BisonParser.INT:
                this.state = 150;
                this.match(BisonParser.INT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 153; 
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
    this.enterRule(localctx, 20, BisonParser.RULE_tag);
    try {
        this.state = 158;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.TAG_START:
            this.enterOuterAlt(localctx, 1);
            this.state = 155;
            this.tagRule();
            break;
        case BisonParser.TAG_ANY:
            this.enterOuterAlt(localctx, 2);
            this.state = 156;
            this.match(BisonParser.TAG_ANY);
            break;
        case BisonParser.TAG_NONE:
            this.enterOuterAlt(localctx, 3);
            this.state = 157;
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
    this.enterRule(localctx, 22, BisonParser.RULE_symbolDef);
    var _la = 0; // Token type
    try {
        this.state = 169;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.TAG_START:
            this.enterOuterAlt(localctx, 1);
            this.state = 160;
            this.tagRule();
            break;
        case BisonParser.ID:
        case BisonParser.CHAR:
            this.enterOuterAlt(localctx, 2);
            this.state = 161;
            this.id();
            this.state = 167;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case BisonParser.INT:
            	this.state = 162;
            	this.match(BisonParser.INT);
            	this.state = 164;
            	this._errHandler.sync(this);
            	_la = this._input.LA(1);
            	if(_la===BisonParser.STRING) {
            	    this.state = 163;
            	    this.match(BisonParser.STRING);
            	}

            	break;
            case BisonParser.STRING:
            	this.state = 166;
            	this.match(BisonParser.STRING);
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
    this.enterRule(localctx, 24, BisonParser.RULE_grammarRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 171;
            this.rulesOrGrammarDeclaration();
            this.state = 174; 
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
    this.enterRule(localctx, 26, BisonParser.RULE_rulesOrGrammarDeclaration);
    try {
        this.state = 180;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 176;
            this.rules();
            break;
        case BisonParser.DIRECTIVE:
            this.enterOuterAlt(localctx, 2);
            this.state = 177;
            this.grammarDeclaration();
            this.state = 178;
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
    this.enterRule(localctx, 28, BisonParser.RULE_rules);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.match(BisonParser.ID);
        this.state = 183;
        this.match(BisonParser.AFTER_ID_COLON);
        this.state = 185;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BisonParser.REF || _la===BisonParser.AFTER_ID_OPEN_BRACKET) {
            this.state = 184;
            this.ref();
        }

        this.state = 187;
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
    this.enterRule(localctx, 30, BisonParser.RULE_rhses);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 189;
                this.rhs(); 
            }
            this.state = 194;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
        }

        this.state = 204;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BisonParser.PIPE) {
            this.state = 195;
            this.match(BisonParser.PIPE);
            this.state = 199;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 196;
                    this.rhs(); 
                }
                this.state = 201;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
            }

            this.state = 206;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 208;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BisonParser.SEMICOLON) {
            this.state = 207;
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

RhsContext.prototype.directive = function() {
    return this.getTypedRuleContext(DirectiveContext,0);
};

RhsContext.prototype.INT = function() {
    return this.getToken(BisonParser.INT, 0);
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
    this.enterRule(localctx, 32, BisonParser.RULE_rhs);
    var _la = 0; // Token type
    try {
        this.state = 225;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.ID:
        case BisonParser.CHAR:
        case BisonParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 210;
            this.symbol();
            this.state = 212;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===BisonParser.REF || _la===BisonParser.AFTER_ID_OPEN_BRACKET) {
                this.state = 211;
                this.ref();
            }

            break;
        case BisonParser.BRACED_CODE_START:
            this.enterOuterAlt(localctx, 2);
            this.state = 214;
            this.code();
            this.state = 216;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===BisonParser.REF || _la===BisonParser.AFTER_ID_OPEN_BRACKET) {
                this.state = 215;
                this.ref();
            }

            break;
        case BisonParser.PREDICATE_START:
            this.enterOuterAlt(localctx, 3);
            this.state = 218;
            this.predicate();
            break;
        case BisonParser.DIRECTIVE:
            this.enterOuterAlt(localctx, 4);
            this.state = 219;
            this.directive();
            this.state = 223;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
            if(la_===1) {
                this.state = 220;
                this.symbol();

            } else if(la_===2) {
                this.state = 221;
                this.match(BisonParser.INT);

            } else if(la_===3) {
                this.state = 222;
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
    this.enterRule(localctx, 34, BisonParser.RULE_variable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
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
    this.enterRule(localctx, 36, BisonParser.RULE_value);
    try {
        this.state = 233;
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
            this.state = 230;
            this.match(BisonParser.ID);
            break;
        case BisonParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 231;
            this.match(BisonParser.STRING);
            break;
        case BisonParser.BRACED_CODE_START:
            this.enterOuterAlt(localctx, 4);
            this.state = 232;
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
    this.enterRule(localctx, 38, BisonParser.RULE_id);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
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
    this.enterRule(localctx, 40, BisonParser.RULE_symbol);
    try {
        this.state = 239;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BisonParser.ID:
        case BisonParser.CHAR:
            this.enterOuterAlt(localctx, 1);
            this.state = 237;
            this.id();
            break;
        case BisonParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 238;
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
    this.enterRule(localctx, 42, BisonParser.RULE_ref);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
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
    this.enterRule(localctx, 44, BisonParser.RULE_epilogue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.match(BisonParser.PERCENT_PERCENT);
        this.state = 245;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BisonParser.EPILOGUE_CONTENT) {
            this.state = 244;
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
