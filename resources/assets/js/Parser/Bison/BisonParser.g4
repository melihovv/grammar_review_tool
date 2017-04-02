parser grammar BisonParser;

options {tokenVocab = BisonLexer;}

file
    : prologueDeclaration* PERCENT_PERCENT grammarRule epilogue?
    ;

prologueDeclaration
    : grammarDeclaration
    | prologue
    | directive (variable value|STRING|INT|code+)?
    | SEMICOLON
    ;

directive
    : DIRECTIVE
    ;

grammarDeclaration
    : precedenceDeclaration
    | symbolDeclaration
    | directive (symbol|code (symbol|tag)+|ID? code)?
    ;

prologue
    : PROLOGUE_START PROLOGUE_CONTENT* PROLOGUE_CLOSE
    ;

code
    : BRACED_CODE_START BRACED_CODE_CONTENT* BRACED_CODE_CLOSE
    ;

predicate
    : PREDICATE_START PREDICATE_CONTENT* PREDICATE_CLOSE
    ;

tagRule
    : TAG_START TAG_CONTENT+ TAG_CLOSE
    ;

symbolDeclaration
    : directive (symbolDef+|tagRule symbol+)
    ;

precedenceDeclaration
    : directive tagRule? (symbol|INT)+
    ;

tag
    : tagRule
    | TAG_ANY
    | TAG_NONE
    ;

symbolDef
    : tagRule
    | id (INT STRING?|STRING)?
    ;

grammarRule
    : rulesOrGrammarDeclaration+
    ;

rulesOrGrammarDeclaration
    : rules
    | grammarDeclaration SEMICOLON
    ;

rules
    : ID AFTER_ID_COLON ref? rhses
    ;

rhses
    : rhs* (PIPE rhs*)* SEMICOLON?
    ;

rhs
    : symbol ref?
    | code ref?
    | predicate
    | directive (symbol|INT|tagRule)?
    ;

variable
    : ID
    | STRING
    ;

value
    :
    | ID
    | STRING
    | code
    ;

id
    : ID
    | CHAR
    ;

symbol
    : id
    | STRING
    ;

ref
  : AFTER_ID_OPEN_BRACKET
  | REF
  ;

epilogue
    : PERCENT_PERCENT EPILOGUE_CONTENT?
    ;
