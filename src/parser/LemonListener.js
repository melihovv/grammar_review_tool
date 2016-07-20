// Generated from D:/Files/Projects/grammar_review_tool/src/parser\Lemon.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by LemonParser.
function LemonListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

LemonListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
LemonListener.prototype.constructor = LemonListener;

// Enter a parse tree produced by LemonParser#prog.
LemonListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by LemonParser#prog.
LemonListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by LemonParser#grammar_rule.
LemonListener.prototype.enterGrammar_rule = function(ctx) {
};

// Exit a parse tree produced by LemonParser#grammar_rule.
LemonListener.prototype.exitGrammar_rule = function(ctx) {
};


// Enter a parse tree produced by LemonParser#left_side.
LemonListener.prototype.enterLeft_side = function(ctx) {
};

// Exit a parse tree produced by LemonParser#left_side.
LemonListener.prototype.exitLeft_side = function(ctx) {
};


// Enter a parse tree produced by LemonParser#right_side.
LemonListener.prototype.enterRight_side = function(ctx) {
};

// Exit a parse tree produced by LemonParser#right_side.
LemonListener.prototype.exitRight_side = function(ctx) {
};


// Enter a parse tree produced by LemonParser#precedence.
LemonListener.prototype.enterPrecedence = function(ctx) {
};

// Exit a parse tree produced by LemonParser#precedence.
LemonListener.prototype.exitPrecedence = function(ctx) {
};


// Enter a parse tree produced by LemonParser#symbol.
LemonListener.prototype.enterSymbol = function(ctx) {
};

// Exit a parse tree produced by LemonParser#symbol.
LemonListener.prototype.exitSymbol = function(ctx) {
};


// Enter a parse tree produced by LemonParser#param.
LemonListener.prototype.enterParam = function(ctx) {
};

// Exit a parse tree produced by LemonParser#param.
LemonListener.prototype.exitParam = function(ctx) {
};


// Enter a parse tree produced by LemonParser#directive.
LemonListener.prototype.enterDirective = function(ctx) {
};

// Exit a parse tree produced by LemonParser#directive.
LemonListener.prototype.exitDirective = function(ctx) {
};



exports.LemonListener = LemonListener;