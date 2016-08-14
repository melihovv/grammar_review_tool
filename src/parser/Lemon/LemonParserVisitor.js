// Generated from D:/Files/Projects/grammar_review_tool/src/parser/Lemon\LemonParser.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by LemonParser.

function LemonParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

LemonParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
LemonParserVisitor.prototype.constructor = LemonParserVisitor;

// Visit a parse tree produced by LemonParser#file.
LemonParserVisitor.prototype.visitFile = function(ctx) {
};


// Visit a parse tree produced by LemonParser#grammarRule.
LemonParserVisitor.prototype.visitGrammarRule = function(ctx) {
};


// Visit a parse tree produced by LemonParser#leftSide.
LemonParserVisitor.prototype.visitLeftSide = function(ctx) {
};


// Visit a parse tree produced by LemonParser#rightSide.
LemonParserVisitor.prototype.visitRightSide = function(ctx) {
};


// Visit a parse tree produced by LemonParser#precedence.
LemonParserVisitor.prototype.visitPrecedence = function(ctx) {
};


// Visit a parse tree produced by LemonParser#symbol.
LemonParserVisitor.prototype.visitSymbol = function(ctx) {
};


// Visit a parse tree produced by LemonParser#param.
LemonParserVisitor.prototype.visitParam = function(ctx) {
};


// Visit a parse tree produced by LemonParser#directive.
LemonParserVisitor.prototype.visitDirective = function(ctx) {
};


// Visit a parse tree produced by LemonParser#codeBlock.
LemonParserVisitor.prototype.visitCodeBlock = function(ctx) {
};



exports.LemonParserVisitor = LemonParserVisitor;