// Generated from /home/melihovv/Projects/edu/grammar_review_tool/resources/assets/js/Parser/Bison/BisonParser.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by BisonParser.

function BisonParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

BisonParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
BisonParserVisitor.prototype.constructor = BisonParserVisitor;

// Visit a parse tree produced by BisonParser#file.
BisonParserVisitor.prototype.visitFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#prologueDeclaration.
BisonParserVisitor.prototype.visitPrologueDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#directive.
BisonParserVisitor.prototype.visitDirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#grammarDeclaration.
BisonParserVisitor.prototype.visitGrammarDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#prologue.
BisonParserVisitor.prototype.visitPrologue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#code.
BisonParserVisitor.prototype.visitCode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#predicate.
BisonParserVisitor.prototype.visitPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#tagRule.
BisonParserVisitor.prototype.visitTagRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#symbolDeclaration.
BisonParserVisitor.prototype.visitSymbolDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#precedenceDeclaration.
BisonParserVisitor.prototype.visitPrecedenceDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#tag.
BisonParserVisitor.prototype.visitTag = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#symbolDef.
BisonParserVisitor.prototype.visitSymbolDef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#grammarRule.
BisonParserVisitor.prototype.visitGrammarRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#rulesOrGrammarDeclaration.
BisonParserVisitor.prototype.visitRulesOrGrammarDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#rules.
BisonParserVisitor.prototype.visitRules = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#rhses.
BisonParserVisitor.prototype.visitRhses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#rhs.
BisonParserVisitor.prototype.visitRhs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#variable.
BisonParserVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#value.
BisonParserVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#id.
BisonParserVisitor.prototype.visitId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#symbol.
BisonParserVisitor.prototype.visitSymbol = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#ref.
BisonParserVisitor.prototype.visitRef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by BisonParser#epilogue.
BisonParserVisitor.prototype.visitEpilogue = function(ctx) {
  return this.visitChildren(ctx);
};



exports.BisonParserVisitor = BisonParserVisitor;