// Generated from D:/Files/Projects/grammar_review_tool/src/parser\Lemon.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LemonListener = require('./LemonListener').LemonListener;
var LemonVisitor = require('./LemonVisitor').LemonVisitor;

var grammarFileName = "Lemon.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003%Q\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0006\u0002\u0015\n\u0002\r",
    "\u0002\u000e\u0002\u0016\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0005\u0004\u001f\n\u0004\u0003\u0005\u0003",
    "\u0005\u0005\u0005#\n\u0005\u0006\u0005%\n\u0005\r\u0005\u000e\u0005",
    "&\u0005\u0005)\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005-\n\u0005",
    "\u0003\u0005\u0005\u00050\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0006\tA\n\t\r\t\u000e\tB\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\tO\n\t\u0003\t\u0002\u0002\n\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0002\u0006\u0003\u0002\u001d\u001e\u0003\u0002\n\u000b\u0003",
    "\u0002\f\u000e\u0003\u0002\u000f\u0019V\u0002\u0014\u0003\u0002\u0002",
    "\u0002\u0004\u0018\u0003\u0002\u0002\u0002\u0006\u001c\u0003\u0002\u0002",
    "\u0002\b(\u0003\u0002\u0002\u0002\n1\u0003\u0002\u0002\u0002\f5\u0003",
    "\u0002\u0002\u0002\u000e7\u0003\u0002\u0002\u0002\u0010;\u0003\u0002",
    "\u0002\u0002\u0012\u0015\u0005\u0004\u0003\u0002\u0013\u0015\u0005\u0010",
    "\t\u0002\u0014\u0012\u0003\u0002\u0002\u0002\u0014\u0013\u0003\u0002",
    "\u0002\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016\u0014\u0003\u0002",
    "\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0003\u0003\u0002",
    "\u0002\u0002\u0018\u0019\u0005\u0006\u0004\u0002\u0019\u001a\u0007\u0003",
    "\u0002\u0002\u001a\u001b\u0005\b\u0005\u0002\u001b\u0005\u0003\u0002",
    "\u0002\u0002\u001c\u001e\u0007\u001e\u0002\u0002\u001d\u001f\u0005\u000e",
    "\b\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002",
    "\u0002\u0002\u001f\u0007\u0003\u0002\u0002\u0002 \"\u0005\f\u0007\u0002",
    "!#\u0005\u000e\b\u0002\"!\u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002",
    "\u0002#%\u0003\u0002\u0002\u0002$ \u0003\u0002\u0002\u0002%&\u0003\u0002",
    "\u0002\u0002&$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'",
    ")\u0003\u0002\u0002\u0002($\u0003\u0002\u0002\u0002()\u0003\u0002\u0002",
    "\u0002)*\u0003\u0002\u0002\u0002*,\u0007\u0004\u0002\u0002+-\u0005\n",
    "\u0006\u0002,+\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-/\u0003",
    "\u0002\u0002\u0002.0\u0007$\u0002\u0002/.\u0003\u0002\u0002\u0002/0",
    "\u0003\u0002\u0002\u00020\t\u0003\u0002\u0002\u000212\u0007\u0005\u0002",
    "\u000223\u0007\u001d\u0002\u000234\u0007\u0006\u0002\u00024\u000b\u0003",
    "\u0002\u0002\u000256\t\u0002\u0002\u00026\r\u0003\u0002\u0002\u0002",
    "78\u0007\u0007\u0002\u000289\u0005\f\u0007\u00029:\u0007\b\u0002\u0002",
    ":\u000f\u0003\u0002\u0002\u0002;N\u0007\t\u0002\u0002<=\t\u0003\u0002",
    "\u0002=O\u0005\f\u0007\u0002>@\t\u0004\u0002\u0002?A\u0007\u001d\u0002",
    "\u0002@?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002B@\u0003\u0002",
    "\u0002\u0002BC\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002DO\u0007",
    "\u0004\u0002\u0002EF\t\u0005\u0002\u0002FO\u0007$\u0002\u0002GH\u0007",
    "\u001a\u0002\u0002HO\u0007\u001e\u0002\u0002IJ\u0007\u001b\u0002\u0002",
    "JO\u0007\u001f\u0002\u0002KL\u0007\u001c\u0002\u0002LM\u0007\u001e\u0002",
    "\u0002MO\u0007$\u0002\u0002N<\u0003\u0002\u0002\u0002N>\u0003\u0002",
    "\u0002\u0002NE\u0003\u0002\u0002\u0002NG\u0003\u0002\u0002\u0002NI\u0003",
    "\u0002\u0002\u0002NK\u0003\u0002\u0002\u0002O\u0011\u0003\u0002\u0002",
    "\u0002\f\u0014\u0016\u001e\"&(,/BN"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'::='", "'.'", "'['", "']'", "'('", "')'", "'%'", 
                     "'name'", "'token_prefix'", "'left'", "'right'", "'nonassoc'", 
                     "'declare_class'", "'destructor'", "'extra_argument'", 
                     "'include_class'", "'include'", "'parse_accept'", "'parse_failure'", 
                     "'stack_overflow'", "'syntax_error'", "'token_destructor'", 
                     "'token_type'", "'start_symbol'", "'stack_size'", "'type'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "TERMINAL", "NONTERMINAL", "INT", "LINE_COMMENT", 
                      "MULTI_LINE_COMMENT", "NEWLINE", "WS", "TARGET_CODE_SECTION", 
                      "TARGET_CODE" ];

var ruleNames =  [ "prog", "grammar_rule", "left_side", "right_side", "precedence", 
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
LemonParser.T__7 = 8;
LemonParser.T__8 = 9;
LemonParser.T__9 = 10;
LemonParser.T__10 = 11;
LemonParser.T__11 = 12;
LemonParser.T__12 = 13;
LemonParser.T__13 = 14;
LemonParser.T__14 = 15;
LemonParser.T__15 = 16;
LemonParser.T__16 = 17;
LemonParser.T__17 = 18;
LemonParser.T__18 = 19;
LemonParser.T__19 = 20;
LemonParser.T__20 = 21;
LemonParser.T__21 = 22;
LemonParser.T__22 = 23;
LemonParser.T__23 = 24;
LemonParser.T__24 = 25;
LemonParser.T__25 = 26;
LemonParser.TERMINAL = 27;
LemonParser.NONTERMINAL = 28;
LemonParser.INT = 29;
LemonParser.LINE_COMMENT = 30;
LemonParser.MULTI_LINE_COMMENT = 31;
LemonParser.NEWLINE = 32;
LemonParser.WS = 33;
LemonParser.TARGET_CODE_SECTION = 34;
LemonParser.TARGET_CODE = 35;

LemonParser.RULE_prog = 0;
LemonParser.RULE_grammar_rule = 1;
LemonParser.RULE_left_side = 2;
LemonParser.RULE_right_side = 3;
LemonParser.RULE_precedence = 4;
LemonParser.RULE_symbol = 5;
LemonParser.RULE_param = 6;
LemonParser.RULE_directive = 7;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LemonParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.grammar_rule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Grammar_ruleContext);
    } else {
        return this.getTypedRuleContext(Grammar_ruleContext,i);
    }
};

ProgContext.prototype.directive = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DirectiveContext);
    } else {
        return this.getTypedRuleContext(DirectiveContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.exitProg(this);
	}
};

ProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonVisitor ) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LemonParser.ProgContext = ProgContext;

LemonParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LemonParser.RULE_prog);
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
                this.grammar_rule();
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

function Grammar_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LemonParser.RULE_grammar_rule;
    return this;
}

Grammar_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Grammar_ruleContext.prototype.constructor = Grammar_ruleContext;

Grammar_ruleContext.prototype.left_side = function() {
    return this.getTypedRuleContext(Left_sideContext,0);
};

Grammar_ruleContext.prototype.right_side = function() {
    return this.getTypedRuleContext(Right_sideContext,0);
};

Grammar_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.enterGrammar_rule(this);
	}
};

Grammar_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.exitGrammar_rule(this);
	}
};

Grammar_ruleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonVisitor ) {
        return visitor.visitGrammar_rule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LemonParser.Grammar_ruleContext = Grammar_ruleContext;

LemonParser.prototype.grammar_rule = function() {

    var localctx = new Grammar_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LemonParser.RULE_grammar_rule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.left_side();
        this.state = 23;
        this.match(LemonParser.T__0);
        this.state = 24;
        this.right_side();
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

function Left_sideContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LemonParser.RULE_left_side;
    return this;
}

Left_sideContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Left_sideContext.prototype.constructor = Left_sideContext;

Left_sideContext.prototype.NONTERMINAL = function() {
    return this.getToken(LemonParser.NONTERMINAL, 0);
};

Left_sideContext.prototype.param = function() {
    return this.getTypedRuleContext(ParamContext,0);
};

Left_sideContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.enterLeft_side(this);
	}
};

Left_sideContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.exitLeft_side(this);
	}
};

Left_sideContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonVisitor ) {
        return visitor.visitLeft_side(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LemonParser.Left_sideContext = Left_sideContext;

LemonParser.prototype.left_side = function() {

    var localctx = new Left_sideContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LemonParser.RULE_left_side);
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

function Right_sideContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LemonParser.RULE_right_side;
    return this;
}

Right_sideContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Right_sideContext.prototype.constructor = Right_sideContext;

Right_sideContext.prototype.precedence = function() {
    return this.getTypedRuleContext(PrecedenceContext,0);
};

Right_sideContext.prototype.TARGET_CODE_SECTION = function() {
    return this.getToken(LemonParser.TARGET_CODE_SECTION, 0);
};

Right_sideContext.prototype.symbol = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SymbolContext);
    } else {
        return this.getTypedRuleContext(SymbolContext,i);
    }
};

Right_sideContext.prototype.param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParamContext);
    } else {
        return this.getTypedRuleContext(ParamContext,i);
    }
};

Right_sideContext.prototype.enterRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.enterRight_side(this);
	}
};

Right_sideContext.prototype.exitRule = function(listener) {
    if(listener instanceof LemonListener ) {
        listener.exitRight_side(this);
	}
};

Right_sideContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LemonVisitor ) {
        return visitor.visitRight_side(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LemonParser.Right_sideContext = Right_sideContext;

LemonParser.prototype.right_side = function() {

    var localctx = new Right_sideContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LemonParser.RULE_right_side);
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

DirectiveContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

DirectiveContext.prototype.TARGET_CODE_SECTION = function() {
    return this.getToken(LemonParser.TARGET_CODE_SECTION, 0);
};

DirectiveContext.prototype.NONTERMINAL = function() {
    return this.getToken(LemonParser.NONTERMINAL, 0);
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
        this.state = 76;
        switch(this._input.LA(1)) {
        case LemonParser.T__7:
        case LemonParser.T__8:
            this.state = 58;
            _la = this._input.LA(1);
            if(!(_la===LemonParser.T__7 || _la===LemonParser.T__8)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 59;
            this.symbol();
            break;
        case LemonParser.T__9:
        case LemonParser.T__10:
        case LemonParser.T__11:
            this.state = 60;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LemonParser.T__9) | (1 << LemonParser.T__10) | (1 << LemonParser.T__11))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 62; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 61;
                this.match(LemonParser.TERMINAL);
                this.state = 64; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===LemonParser.TERMINAL);
            this.state = 66;
            this.match(LemonParser.T__1);
            break;
        case LemonParser.T__12:
        case LemonParser.T__13:
        case LemonParser.T__14:
        case LemonParser.T__15:
        case LemonParser.T__16:
        case LemonParser.T__17:
        case LemonParser.T__18:
        case LemonParser.T__19:
        case LemonParser.T__20:
        case LemonParser.T__21:
        case LemonParser.T__22:
            this.state = 67;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LemonParser.T__12) | (1 << LemonParser.T__13) | (1 << LemonParser.T__14) | (1 << LemonParser.T__15) | (1 << LemonParser.T__16) | (1 << LemonParser.T__17) | (1 << LemonParser.T__18) | (1 << LemonParser.T__19) | (1 << LemonParser.T__20) | (1 << LemonParser.T__21) | (1 << LemonParser.T__22))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 68;
            this.match(LemonParser.TARGET_CODE_SECTION);
            break;
        case LemonParser.T__23:
            this.state = 69;
            this.match(LemonParser.T__23);
            this.state = 70;
            this.match(LemonParser.NONTERMINAL);
            break;
        case LemonParser.T__24:
            this.state = 71;
            this.match(LemonParser.T__24);
            this.state = 72;
            this.match(LemonParser.INT);
            break;
        case LemonParser.T__25:
            this.state = 73;
            this.match(LemonParser.T__25);
            this.state = 74;
            this.match(LemonParser.NONTERMINAL);
            this.state = 75;
            this.match(LemonParser.TARGET_CODE_SECTION);
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


exports.LemonParser = LemonParser;
