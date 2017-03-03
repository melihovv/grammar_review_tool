// Generated from /home/melihovv/Projects/edu/grammar_review_tool/resources/assets/js/Parser/Lemon/LemonParser.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LemonParserListener = require('./LemonParserListener').LemonParserListener;
var LemonParserVisitor = require('./LemonParserVisitor').LemonParserVisitor;

var grammarFileName = "LemonParser.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0015W\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0006\u0002\u0017",
    "\n\u0002\r\u0002\u000e\u0002\u0018\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0005\u0004!\n\u0004\u0003\u0005",
    "\u0003\u0005\u0005\u0005%\n\u0005\u0006\u0005\'\n\u0005\r\u0005\u000e",
    "\u0005(\u0005\u0005+\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005/\n",
    "\u0005\u0003\u0005\u0005\u00052\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0006\tB\n\t\r\t\u000e\tC\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tL\n\t\u0003\n\u0003",
    "\n\u0007\nP\n\n\f\n\u000e\nS\u000b\n\u0003\n\u0003\n\u0003\n\u0002\u0002",
    "\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0003\u0003\u0002",
    "\u0010\u0011\\\u0002\u0016\u0003\u0002\u0002\u0002\u0004\u001a\u0003",
    "\u0002\u0002\u0002\u0006\u001e\u0003\u0002\u0002\u0002\b*\u0003\u0002",
    "\u0002\u0002\n3\u0003\u0002\u0002\u0002\f7\u0003\u0002\u0002\u0002\u000e",
    "9\u0003\u0002\u0002\u0002\u0010=\u0003\u0002\u0002\u0002\u0012M\u0003",
    "\u0002\u0002\u0002\u0014\u0017\u0005\u0004\u0003\u0002\u0015\u0017\u0005",
    "\u0010\t\u0002\u0016\u0014\u0003\u0002\u0002\u0002\u0016\u0015\u0003",
    "\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u0016\u0003",
    "\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u0003\u0003",
    "\u0002\u0002\u0002\u001a\u001b\u0005\u0006\u0004\u0002\u001b\u001c\u0007",
    "\u0007\u0002\u0002\u001c\u001d\u0005\b\u0005\u0002\u001d\u0005\u0003",
    "\u0002\u0002\u0002\u001e \u0007\u0011\u0002\u0002\u001f!\u0005\u000e",
    "\b\u0002 \u001f\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!\u0007",
    "\u0003\u0002\u0002\u0002\"$\u0005\f\u0007\u0002#%\u0005\u000e\b\u0002",
    "$#\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%\'\u0003\u0002",
    "\u0002\u0002&\"\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(",
    "&\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)+\u0003\u0002\u0002",
    "\u0002*&\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+,\u0003\u0002",
    "\u0002\u0002,.\u0007\b\u0002\u0002-/\u0005\n\u0006\u0002.-\u0003\u0002",
    "\u0002\u0002./\u0003\u0002\u0002\u0002/1\u0003\u0002\u0002\u000202\u0005",
    "\u0012\n\u000210\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u00022",
    "\t\u0003\u0002\u0002\u000234\u0007\u000b\u0002\u000245\u0007\u0010\u0002",
    "\u000256\u0007\f\u0002\u00026\u000b\u0003\u0002\u0002\u000278\t\u0002",
    "\u0002\u00028\r\u0003\u0002\u0002\u00029:\u0007\r\u0002\u0002:;\u0005",
    "\f\u0007\u0002;<\u0007\u000e\u0002\u0002<\u000f\u0003\u0002\u0002\u0002",
    "=>\u0007\u000f\u0002\u0002>K\u0007\u0011\u0002\u0002?L\u0005\f\u0007",
    "\u0002@B\u0007\u0010\u0002\u0002A@\u0003\u0002\u0002\u0002BC\u0003\u0002",
    "\u0002\u0002CA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002DE\u0003",
    "\u0002\u0002\u0002EL\u0007\b\u0002\u0002FL\u0005\u0012\n\u0002GL\u0007",
    "\u0011\u0002\u0002HL\u0007\u0005\u0002\u0002IJ\u0007\u0011\u0002\u0002",
    "JL\u0005\u0012\n\u0002K?\u0003\u0002\u0002\u0002KA\u0003\u0002\u0002",
    "\u0002KF\u0003\u0002\u0002\u0002KG\u0003\u0002\u0002\u0002KH\u0003\u0002",
    "\u0002\u0002KI\u0003\u0002\u0002\u0002L\u0011\u0003\u0002\u0002\u0002",
    "MQ\u0007\u0006\u0002\u0002NP\u0007\u0015\u0002\u0002ON\u0003\u0002\u0002",
    "\u0002PS\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002QR\u0003\u0002",
    "\u0002\u0002RT\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002TU\u0007",
    "\u0014\u0002\u0002U\u0013\u0003\u0002\u0002\u0002\r\u0016\u0018 $(*",
    ".1CKQ"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'::='" ];

var symbolicNames = [ null, "BLOCK_COMMENT", "LINE_COMMENT", "INT", "BEGIN_CODE", 
                      "ASSIGN", "DOT", "LBRACE", "RBRACE", "LBRACKET", "RBRACKET", 
                      "LPAREN", "RPAREN", "PERCENT", "TERMINAL", "NONTERMINAL", 
                      "WS", "ERROR_CHARACTER", "END_CODE", "CODE_CONTENT" ];

var ruleNames =  [ "file", "grammarRule", "leftSide", "rightSide", "precedence", 
                   "symbol", "param", "directive", "codeBlock" ];

function LemonParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LemonParser.prototype = Object.create(antlr4.Parser.prototype);
LemonParser.prototype.constructor = LemonParser;

Object.defineProperty(LemonParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LemonParser.EOF = antlr4.Token.EOF;
LemonParser.BLOCK_COMMENT = 1;
LemonParser.LINE_COMMENT = 2;
LemonParser.INT = 3;
LemonParser.BEGIN_CODE = 4;
LemonParser.ASSIGN = 5;
LemonParser.DOT = 6;
LemonParser.LBRACE = 7;
LemonParser.RBRACE = 8;
LemonParser.LBRACKET = 9;
LemonParser.RBRACKET = 10;
LemonParser.LPAREN = 11;
LemonParser.RPAREN = 12;
LemonParser.PERCENT = 13;
LemonParser.TERMINAL = 14;
LemonParser.NONTERMINAL = 15;
LemonParser.WS = 16;
LemonParser.ERROR_CHARACTER = 17;
LemonParser.END_CODE = 18;
LemonParser.CODE_CONTENT = 19;

LemonParser.RULE_file = 0;
LemonParser.RULE_grammarRule = 1;
LemonParser.RULE_leftSide = 2;
LemonParser.RULE_rightSide = 3;
LemonParser.RULE_precedence = 4;
LemonParser.RULE_symbol = 5;
LemonParser.RULE_param = 6;
LemonParser.RULE_directive = 7;
LemonParser.RULE_codeBlock = 8;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LemonParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.grammarRule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(GrammarRuleContext);
    } else {
        return this.getTypedRuleContext(GrammarRuleContext,i);
    }
};

FileContext.prototype.directive = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DirectiveContext);
    } else {
        return this.getTypedRuleContext(DirectiveContext,i);
    }
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.exitFile(this);
	}
};

FileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonParserVisitor ) {
        return visitor.visitFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LemonParser.FileContext = FileContext;

LemonParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LemonParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 20;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case LemonParser.NONTERMINAL:
                this.state = 18;
                this.grammarRule();
                break;
            case LemonParser.PERCENT:
                this.state = 19;
                this.directive();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 22; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===LemonParser.PERCENT || _la===LemonParser.NONTERMINAL);
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
    this.ruleIndex = LemonParser.RULE_grammarRule;
    return this;
}

GrammarRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GrammarRuleContext.prototype.constructor = GrammarRuleContext;

GrammarRuleContext.prototype.leftSide = function() {
    return this.getTypedRuleContext(LeftSideContext,0);
};

GrammarRuleContext.prototype.ASSIGN = function() {
    return this.getToken(LemonParser.ASSIGN, 0);
};

GrammarRuleContext.prototype.rightSide = function() {
    return this.getTypedRuleContext(RightSideContext,0);
};

GrammarRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.enterGrammarRule(this);
	}
};

GrammarRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.exitGrammarRule(this);
	}
};

GrammarRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonParserVisitor ) {
        return visitor.visitGrammarRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LemonParser.GrammarRuleContext = GrammarRuleContext;

LemonParser.prototype.grammarRule = function() {

    var localctx = new GrammarRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LemonParser.RULE_grammarRule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.leftSide();
        this.state = 25;
        this.match(LemonParser.ASSIGN);
        this.state = 26;
        this.rightSide();
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

function LeftSideContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LemonParser.RULE_leftSide;
    return this;
}

LeftSideContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LeftSideContext.prototype.constructor = LeftSideContext;

LeftSideContext.prototype.NONTERMINAL = function() {
    return this.getToken(LemonParser.NONTERMINAL, 0);
};

LeftSideContext.prototype.param = function() {
    return this.getTypedRuleContext(ParamContext,0);
};

LeftSideContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.enterLeftSide(this);
	}
};

LeftSideContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.exitLeftSide(this);
	}
};

LeftSideContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonParserVisitor ) {
        return visitor.visitLeftSide(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LemonParser.LeftSideContext = LeftSideContext;

LemonParser.prototype.leftSide = function() {

    var localctx = new LeftSideContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LemonParser.RULE_leftSide);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.match(LemonParser.NONTERMINAL);
        this.state = 30;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LemonParser.LPAREN) {
            this.state = 29;
            this.param();
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

function RightSideContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LemonParser.RULE_rightSide;
    return this;
}

RightSideContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RightSideContext.prototype.constructor = RightSideContext;

RightSideContext.prototype.DOT = function() {
    return this.getToken(LemonParser.DOT, 0);
};

RightSideContext.prototype.precedence = function() {
    return this.getTypedRuleContext(PrecedenceContext,0);
};

RightSideContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};

RightSideContext.prototype.symbol = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SymbolContext);
    } else {
        return this.getTypedRuleContext(SymbolContext,i);
    }
};

RightSideContext.prototype.param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParamContext);
    } else {
        return this.getTypedRuleContext(ParamContext,i);
    }
};

RightSideContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.enterRightSide(this);
	}
};

RightSideContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.exitRightSide(this);
	}
};

RightSideContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonParserVisitor ) {
        return visitor.visitRightSide(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LemonParser.RightSideContext = RightSideContext;

LemonParser.prototype.rightSide = function() {

    var localctx = new RightSideContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LemonParser.RULE_rightSide);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LemonParser.TERMINAL || _la===LemonParser.NONTERMINAL) {
            this.state = 36; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 32;
                this.symbol();
                this.state = 34;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===LemonParser.LPAREN) {
                    this.state = 33;
                    this.param();
                }

                this.state = 38; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===LemonParser.TERMINAL || _la===LemonParser.NONTERMINAL);
        }

        this.state = 42;
        this.match(LemonParser.DOT);
        this.state = 44;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LemonParser.LBRACKET) {
            this.state = 43;
            this.precedence();
        }

        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LemonParser.BEGIN_CODE) {
            this.state = 46;
            this.codeBlock();
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

function PrecedenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LemonParser.RULE_precedence;
    return this;
}

PrecedenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrecedenceContext.prototype.constructor = PrecedenceContext;

PrecedenceContext.prototype.LBRACKET = function() {
    return this.getToken(LemonParser.LBRACKET, 0);
};

PrecedenceContext.prototype.TERMINAL = function() {
    return this.getToken(LemonParser.TERMINAL, 0);
};

PrecedenceContext.prototype.RBRACKET = function() {
    return this.getToken(LemonParser.RBRACKET, 0);
};

PrecedenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.enterPrecedence(this);
	}
};

PrecedenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.exitPrecedence(this);
	}
};

PrecedenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonParserVisitor ) {
        return visitor.visitPrecedence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LemonParser.PrecedenceContext = PrecedenceContext;

LemonParser.prototype.precedence = function() {

    var localctx = new PrecedenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LemonParser.RULE_precedence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.match(LemonParser.LBRACKET);
        this.state = 50;
        this.match(LemonParser.TERMINAL);
        this.state = 51;
        this.match(LemonParser.RBRACKET);
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
    this.ruleIndex = LemonParser.RULE_symbol;
    return this;
}

SymbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolContext.prototype.constructor = SymbolContext;

SymbolContext.prototype.TERMINAL = function() {
    return this.getToken(LemonParser.TERMINAL, 0);
};

SymbolContext.prototype.NONTERMINAL = function() {
    return this.getToken(LemonParser.NONTERMINAL, 0);
};

SymbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.enterSymbol(this);
	}
};

SymbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.exitSymbol(this);
	}
};

SymbolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonParserVisitor ) {
        return visitor.visitSymbol(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LemonParser.SymbolContext = SymbolContext;

LemonParser.prototype.symbol = function() {

    var localctx = new SymbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, LemonParser.RULE_symbol);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        _la = this._input.LA(1);
        if(!(_la===LemonParser.TERMINAL || _la===LemonParser.NONTERMINAL)) {
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

function ParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LemonParser.RULE_param;
    return this;
}

ParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamContext.prototype.constructor = ParamContext;

ParamContext.prototype.LPAREN = function() {
    return this.getToken(LemonParser.LPAREN, 0);
};

ParamContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

ParamContext.prototype.RPAREN = function() {
    return this.getToken(LemonParser.RPAREN, 0);
};

ParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.enterParam(this);
	}
};

ParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.exitParam(this);
	}
};

ParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonParserVisitor ) {
        return visitor.visitParam(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LemonParser.ParamContext = ParamContext;

LemonParser.prototype.param = function() {

    var localctx = new ParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, LemonParser.RULE_param);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.match(LemonParser.LPAREN);
        this.state = 56;
        this.symbol();
        this.state = 57;
        this.match(LemonParser.RPAREN);
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
    this.ruleIndex = LemonParser.RULE_directive;
    return this;
}

DirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DirectiveContext.prototype.constructor = DirectiveContext;

DirectiveContext.prototype.PERCENT = function() {
    return this.getToken(LemonParser.PERCENT, 0);
};

DirectiveContext.prototype.NONTERMINAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LemonParser.NONTERMINAL);
    } else {
        return this.getToken(LemonParser.NONTERMINAL, i);
    }
};


DirectiveContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

DirectiveContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};

DirectiveContext.prototype.INT = function() {
    return this.getToken(LemonParser.INT, 0);
};

DirectiveContext.prototype.DOT = function() {
    return this.getToken(LemonParser.DOT, 0);
};

DirectiveContext.prototype.TERMINAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LemonParser.TERMINAL);
    } else {
        return this.getToken(LemonParser.TERMINAL, i);
    }
};


DirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.enterDirective(this);
	}
};

DirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.exitDirective(this);
	}
};

DirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonParserVisitor ) {
        return visitor.visitDirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LemonParser.DirectiveContext = DirectiveContext;

LemonParser.prototype.directive = function() {

    var localctx = new DirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, LemonParser.RULE_directive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(LemonParser.PERCENT);
        this.state = 60;
        this.match(LemonParser.NONTERMINAL);
        this.state = 73;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.state = 61;
            this.symbol();
            break;

        case 2:
            this.state = 63; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 62;
                this.match(LemonParser.TERMINAL);
                this.state = 65; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===LemonParser.TERMINAL);
            this.state = 67;
            this.match(LemonParser.DOT);
            break;

        case 3:
            this.state = 68;
            this.codeBlock();
            break;

        case 4:
            this.state = 69;
            this.match(LemonParser.NONTERMINAL);
            break;

        case 5:
            this.state = 70;
            this.match(LemonParser.INT);
            break;

        case 6:
            this.state = 71;
            this.match(LemonParser.NONTERMINAL);
            this.state = 72;
            this.codeBlock();
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

function CodeBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LemonParser.RULE_codeBlock;
    return this;
}

CodeBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeBlockContext.prototype.constructor = CodeBlockContext;

CodeBlockContext.prototype.BEGIN_CODE = function() {
    return this.getToken(LemonParser.BEGIN_CODE, 0);
};

CodeBlockContext.prototype.END_CODE = function() {
    return this.getToken(LemonParser.END_CODE, 0);
};

CodeBlockContext.prototype.CODE_CONTENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LemonParser.CODE_CONTENT);
    } else {
        return this.getToken(LemonParser.CODE_CONTENT, i);
    }
};


CodeBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.enterCodeBlock(this);
	}
};

CodeBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonParserListener ) {
        listener.exitCodeBlock(this);
	}
};

CodeBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonParserVisitor ) {
        return visitor.visitCodeBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LemonParser.CodeBlockContext = CodeBlockContext;

LemonParser.prototype.codeBlock = function() {

    var localctx = new CodeBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, LemonParser.RULE_codeBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(LemonParser.BEGIN_CODE);
        this.state = 79;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LemonParser.CODE_CONTENT) {
            this.state = 76;
            this.match(LemonParser.CODE_CONTENT);
            this.state = 81;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 82;
        this.match(LemonParser.END_CODE);
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


exports.LemonParser = LemonParser;
