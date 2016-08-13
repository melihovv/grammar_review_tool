// Generated from D:/Files/Projects/grammar_review_tool/src/parser\LemonParser.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by LemonParser.
function LemonParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

LemonParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
LemonParserListener.prototype.constructor = LemonParserListener;

// Enter a parse tree produced by LemonParser#file.
LemonParserListener.prototype.enterFile = function(ctx) {
};

// Exit a parse tree produced by LemonParser#file.
LemonParserListener.prototype.exitFile = function(ctx) {
};


// Enter a parse tree produced by LemonParser#grammarRule.
LemonParserListener.prototype.enterGrammarRule = function(ctx) {
};

// Exit a parse tree produced by LemonParser#grammarRule.
LemonParserListener.prototype.exitGrammarRule = function(ctx) {
};


// Enter a parse tree produced by LemonParser#leftSide.
LemonParserListener.prototype.enterLeftSide = function(ctx) {
};

// Exit a parse tree produced by LemonParser#leftSide.
LemonParserListener.prototype.exitLeftSide = function(ctx) {
};


// Enter a parse tree produced by LemonParser#rightSide.
LemonParserListener.prototype.enterRightSide = function(ctx) {
};

// Exit a parse tree produced by LemonParser#rightSide.
LemonParserListener.prototype.exitRightSide = function(ctx) {
};


// Enter a parse tree produced by LemonParser#precedence.
LemonParserListener.prototype.enterPrecedence = function(ctx) {
};

// Exit a parse tree produced by LemonParser#precedence.
LemonParserListener.prototype.exitPrecedence = function(ctx) {
};


// Enter a parse tree produced by LemonParser#symbol.
LemonParserListener.prototype.enterSymbol = function(ctx) {
};

// Exit a parse tree produced by LemonParser#symbol.
LemonParserListener.prototype.exitSymbol = function(ctx) {
};


// Enter a parse tree produced by LemonParser#param.
LemonParserListener.prototype.enterParam = function(ctx) {
};

// Exit a parse tree produced by LemonParser#param.
LemonParserListener.prototype.exitParam = function(ctx) {
};


// Enter a parse tree produced by LemonParser#directive.
LemonParserListener.prototype.enterDirective = function(ctx) {
};

// Exit a parse tree produced by LemonParser#directive.
LemonParserListener.prototype.exitDirective = function(ctx) {
};


// Enter a parse tree produced by LemonParser#codeBlock.
LemonParserListener.prototype.enterCodeBlock = function(ctx) {
};

// Exit a parse tree produced by LemonParser#codeBlock.
LemonParserListener.prototype.exitCodeBlock = function(ctx) {
};



exports.LemonParserListener = LemonParserListener;