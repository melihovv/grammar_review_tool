parser grammar BisonParser;

options {tokenVocab = BisonLexer;}

file
    : prologueDeclaration* doublePercent grammarRule epilogue?
    ;

prologueDeclaration
    : grammarDeclaration
    | prologue
    | directive (variable value|string|intRule|code+)?
    | semicolon
    ;

directive
    : DIRECTIVE
    ;

grammarDeclaration
    : precedenceDeclaration
    | symbolDeclaration
    | directive (symbol|code (symbol|tagRule)+|rawId? code)?
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
    : TAG_START TAG_CONTENT* TAG_CLOSE
    ;

symbolDeclaration
    : directive (symbolDef+|tagRule symbol+)
    ;

precedenceDeclaration
    : directive tagRule? (symbol|intRule)+
    ;

symbolDef
    : tagRule
    | id (intRule string?|string)?
    ;

grammarRule
    : rulesOrGrammarDeclaration+
    ;

rulesOrGrammarDeclaration
    : rules
    | grammarDeclaration semicolon
    ;

rules
    : rawId AFTER_ID_COLON ref? rhses
    ;

rhses
    : rhs* (PIPE rhs*)* semicolon?
    ;

rhs
    : symbol ref?
    | code ref?
    | predicate
    | directive (symbol|intRule|tagRule)?
    ;

variable
    : rawId
    | string
    ;

value
    :
    | rawId
    | string
    | code
    ;

id
    : rawId
    | CHAR
    ;

rawId
    : ID
    ;

symbol
    : id
    | string
    ;

ref
  : AFTER_ID_OPEN_BRACKET
  | REF
  ;

string
  : STRING
  ;

intRule
  : INT
  ;

semicolon
  : SEMICOLON
  ;

doublePercent
  : PERCENT_PERCENT
  ;

epilogue
    : doublePercent EPILOGUE_CONTENT?
    ;
