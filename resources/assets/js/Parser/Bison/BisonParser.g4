parser grammar BisonParser;

options {tokenVocab = BisonLexer;}

file
    : prologueDeclarations? PERCENT_PERCENT grammarRule epilogue?
    ;

prologueDeclarations
    : prologueDeclaration+
    ;

prologueDeclaration
    : grammarDeclaration
    | prologue
    | PERCENT_FLAG
    | PERCENT_DEFINE variable value
    | PERCENT_DEFINES STRING?
    | PERCENT_NO_PARAM
    | PERCENT_STRING_PARAM STRING
    | PERCENT_INT_PARAM INT
    | PERCENT_INITIAL_ACTION code
    | PERCENT_PARAM code+
    | SEMICOLON
    ;

grammarDeclaration
    : precedenceDeclaration
    | symbolDeclaration
    | PERCENT_START symbol
    | (PERCENT_DESTRUCTOR|PERCENT_PRINTER) code (symbol|tag)+
    | PERCENT_GRAMMAR_NO_PARAM
    | PERCENT_CODE ID? code
    | PERCENT_UNION ID? code
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
    : PERCENT_NTERM symbolDef+
    | PERCENT_TOKEN symbolDef+
    | PERCENT_TYPE tagRule symbol+
    ;

precedenceDeclaration
    : precedenceDeclarator tagRule? (symbol|INT)+
    ;

precedenceDeclarator
    : PERCENT_LEFT
    | PERCENT_RIGHT
    | PERCENT_NONASSOC
    | PERCENT_PRECEDENCE
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
    | PERCENT_EMPTY
    | PERCENT_PREC symbol
    | PERCENT_DPREC INT
    | PERCENT_MERGE tagRule
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
