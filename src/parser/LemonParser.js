// Generated from D:/Files/Projects/grammar_review_tool/src/parser\Lemon.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LemonListener = require('./LemonListener').LemonListener;
var LemonVisitor = require('./LemonVisitor').LemonVisitor;

var grammarFileName = "Lemon.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0012L\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0006\u0002\u0015\n\u0002",
    "\r\u0002\u000e\u0002\u0016\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0005\u0004\u001f\n\u0004\u0003\u0005",
    "\u0003\u0005\u0005\u0005#\n\u0005\u0006\u0005%\n\u0005\r\u0005\u000e",
    "\u0005&\u0005\u0005)\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005-\n",
    "\u0005\u0003\u0005\u0005\u00050\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0006\t@\n\t\r\t\u000e\tA\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tJ\n\t\u0003\t\u0002",
    "\u0002\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0003\u0003\u0002",
    "\n\u000bQ\u0002\u0014\u0003\u0002\u0002\u0002\u0004\u0018\u0003\u0002",
    "\u0002\u0002\u0006\u001c\u0003\u0002\u0002\u0002\b(\u0003\u0002\u0002",
    "\u0002\n1\u0003\u0002\u0002\u0002\f5\u0003\u0002\u0002\u0002\u000e7",
    "\u0003\u0002\u0002\u0002\u0010;\u0003\u0002\u0002\u0002\u0012\u0015",
    "\u0005\u0004\u0003\u0002\u0013\u0015\u0005\u0010\t\u0002\u0014\u0012",
    "\u0003\u0002\u0002\u0002\u0014\u0013\u0003\u0002\u0002\u0002\u0015\u0016",
    "\u0003\u0002\u0002\u0002\u0016\u0014\u0003\u0002\u0002\u0002\u0016\u0017",
    "\u0003\u0002\u0002\u0002\u0017\u0003\u0003\u0002\u0002\u0002\u0018\u0019",
    "\u0005\u0006\u0004\u0002\u0019\u001a\u0007\u0003\u0002\u0002\u001a\u001b",
    "\u0005\b\u0005\u0002\u001b\u0005\u0003\u0002\u0002\u0002\u001c\u001e",
    "\u0007\u000b\u0002\u0002\u001d\u001f\u0005\u000e\b\u0002\u001e\u001d",
    "\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f\u0007",
    "\u0003\u0002\u0002\u0002 \"\u0005\f\u0007\u0002!#\u0005\u000e\b\u0002",
    "\"!\u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#%\u0003\u0002",
    "\u0002\u0002$ \u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&$\u0003",
    "\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\')\u0003\u0002\u0002\u0002",
    "($\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002",
    "\u0002*,\u0007\u0004\u0002\u0002+-\u0005\n\u0006\u0002,+\u0003\u0002",
    "\u0002\u0002,-\u0003\u0002\u0002\u0002-/\u0003\u0002\u0002\u0002.0\u0007",
    "\u0011\u0002\u0002/.\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u0002",
    "0\t\u0003\u0002\u0002\u000212\u0007\u0005\u0002\u000223\u0007\n\u0002",
    "\u000234\u0007\u0006\u0002\u00024\u000b\u0003\u0002\u0002\u000256\t",
    "\u0002\u0002\u00026\r\u0003\u0002\u0002\u000278\u0007\u0007\u0002\u0002",
    "89\u0005\f\u0007\u00029:\u0007\b\u0002\u0002:\u000f\u0003\u0002\u0002",
    "\u0002;<\u0007\t\u0002\u0002<I\u0007\u000b\u0002\u0002=J\u0005\f\u0007",
    "\u0002>@\u0007\n\u0002\u0002?>\u0003\u0002\u0002\u0002@A\u0003\u0002",
    "\u0002\u0002A?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BC\u0003",
    "\u0002\u0002\u0002CJ\u0007\u0004\u0002\u0002DJ\u0007\u0011\u0002\u0002",
    "EJ\u0007\u000b\u0002\u0002FJ\u0007\f\u0002\u0002GH\u0007\u000b\u0002",
    "\u0002HJ\u0007\u0011\u0002\u0002I=\u0003\u0002\u0002\u0002I?\u0003\u0002",
    "\u0002\u0002ID\u0003\u0002\u0002\u0002IE\u0003\u0002\u0002\u0002IF\u0003",
    "\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002J\u0011\u0003\u0002\u0002",
    "\u0002\f\u0014\u0016\u001e\"&(,/AI"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'::='", "'.'", "'['", "']'", "'('", "')'", "'%'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, "TERMINAL", 
                      "NONTERMINAL", "INT", "LINE_COMMENT", "MULTI_LINE_COMMENT", 
                      "NEWLINE", "WS", "TARGET_CODE_SECTION", "TARGET_CODE" ];

var ruleNames =  [ "file", "grammarRule", "leftSide", "rightSide", "precedence", 
                   "symbol", "param", "directive" ];

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
LemonParser.T__0 = 1;
LemonParser.T__1 = 2;
LemonParser.T__2 = 3;
LemonParser.T__3 = 4;
LemonParser.T__4 = 5;
LemonParser.T__5 = 6;
LemonParser.T__6 = 7;
LemonParser.TERMINAL = 8;
LemonParser.NONTERMINAL = 9;
LemonParser.INT = 10;
LemonParser.LINE_COMMENT = 11;
LemonParser.MULTI_LINE_COMMENT = 12;
LemonParser.NEWLINE = 13;
LemonParser.WS = 14;
LemonParser.TARGET_CODE_SECTION = 15;
LemonParser.TARGET_CODE = 16;

LemonParser.RULE_file = 0;
LemonParser.RULE_grammarRule = 1;
LemonParser.RULE_leftSide = 2;
LemonParser.RULE_rightSide = 3;
LemonParser.RULE_precedence = 4;
LemonParser.RULE_symbol = 5;
LemonParser.RULE_param = 6;
LemonParser.RULE_directive = 7;

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
    if(listener instanceof LemonListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.exitFile(this);
	}
};

FileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonVisitor ) {
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
        this.state = 18; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 18;
            switch(this._input.LA(1)) {
            case LemonParser.NONTERMINAL:
                this.state = 16;
                this.grammarRule();
                break;
            case LemonParser.T__6:
                this.state = 17;
                this.directive();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 20; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===LemonParser.T__6 || _la===LemonParser.NONTERMINAL);
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

GrammarRuleContext.prototype.rightSide = function() {
    return this.getTypedRuleContext(RightSideContext,0);
};

GrammarRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.enterGrammarRule(this);
	}
};

GrammarRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.exitGrammarRule(this);
	}
};

GrammarRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonVisitor ) {
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
        this.state = 22;
        this.leftSide();
        this.state = 23;
        this.match(LemonParser.T__0);
        this.state = 24;
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
    if(listener instanceof LemonListener ) {
        listener.enterLeftSide(this);
	}
};

LeftSideContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.exitLeftSide(this);
	}
};

LeftSideContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonVisitor ) {
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
        this.state = 26;
        this.match(LemonParser.NONTERMINAL);
        this.state = 28;
        _la = this._input.LA(1);
        if(_la===LemonParser.T__4) {
            this.state = 27;
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

RightSideContext.prototype.precedence = function() {
    return this.getTypedRuleContext(PrecedenceContext,0);
};

RightSideContext.prototype.TARGET_CODE_SECTION = function() {
    return this.getToken(LemonParser.TARGET_CODE_SECTION, 0);
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
    if(listener instanceof LemonListener ) {
        listener.enterRightSide(this);
	}
};

RightSideContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.exitRightSide(this);
	}
};

RightSideContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonVisitor ) {
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
        this.state = 38;
        _la = this._input.LA(1);
        if(_la===LemonParser.TERMINAL || _la===LemonParser.NONTERMINAL) {
            this.state = 34; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 30;
                this.symbol();
                this.state = 32;
                _la = this._input.LA(1);
                if(_la===LemonParser.T__4) {
                    this.state = 31;
                    this.param();
                }

                this.state = 36; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===LemonParser.TERMINAL || _la===LemonParser.NONTERMINAL);
        }

        this.state = 40;
        this.match(LemonParser.T__1);
        this.state = 42;
        _la = this._input.LA(1);
        if(_la===LemonParser.T__2) {
            this.state = 41;
            this.precedence();
        }

        this.state = 45;
        _la = this._input.LA(1);
        if(_la===LemonParser.TARGET_CODE_SECTION) {
            this.state = 44;
            this.match(LemonParser.TARGET_CODE_SECTION);
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

PrecedenceContext.prototype.TERMINAL = function() {
    return this.getToken(LemonParser.TERMINAL, 0);
};

PrecedenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.enterPrecedence(this);
	}
};

PrecedenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.exitPrecedence(this);
	}
};

PrecedenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonVisitor ) {
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
        this.state = 47;
        this.match(LemonParser.T__2);
        this.state = 48;
        this.match(LemonParser.TERMINAL);
        this.state = 49;
        this.match(LemonParser.T__3);
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
    if(listener instanceof LemonListener ) {
        listener.enterSymbol(this);
	}
};

SymbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.exitSymbol(this);
	}
};

SymbolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonVisitor ) {
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
        this.state = 51;
        _la = this._input.LA(1);
        if(!(_la===LemonParser.TERMINAL || _la===LemonParser.NONTERMINAL)) {
        this._errHandler.recoverInline(this);
        }
        else {
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

ParamContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

ParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.enterParam(this);
	}
};

ParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.exitParam(this);
	}
};

ParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonVisitor ) {
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
        this.state = 53;
        this.match(LemonParser.T__4);
        this.state = 54;
        this.symbol();
        this.state = 55;
        this.match(LemonParser.T__5);
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

DirectiveContext.prototype.TARGET_CODE_SECTION = function() {
    return this.getToken(LemonParser.TARGET_CODE_SECTION, 0);
};

DirectiveContext.prototype.INT = function() {
    return this.getToken(LemonParser.INT, 0);
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
    if(listener instanceof LemonListener ) {
        listener.enterDirective(this);
	}
};

DirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.exitDirective(this);
	}
};

DirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonVisitor ) {
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
        this.state = 57;
        this.match(LemonParser.T__6);
        this.state = 58;
        this.match(LemonParser.NONTERMINAL);
        this.state = 71;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.state = 59;
            this.symbol();
            break;

        case 2:
            this.state = 61; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 60;
                this.match(LemonParser.TERMINAL);
                this.state = 63; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===LemonParser.TERMINAL);
            this.state = 65;
            this.match(LemonParser.T__1);
            break;

        case 3:
            this.state = 66;
            this.match(LemonParser.TARGET_CODE_SECTION);
            break;

        case 4:
            this.state = 67;
            this.match(LemonParser.NONTERMINAL);
            break;

        case 5:
            this.state = 68;
            this.match(LemonParser.INT);
            break;

        case 6:
            this.state = 69;
            this.match(LemonParser.NONTERMINAL);
            this.state = 70;
            this.match(LemonParser.TARGET_CODE_SECTION);
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


exports.LemonParser = LemonParser;
