lexer grammar Fragments;

fragment Digit: [0-9];
fragment Digit19: [1-9];
fragment Int: Digit19 Digit*;
fragment Upper: [A-Z];
fragment Lower: [a-z];
fragment Alpha: Upper|Lower|'_';
fragment Alphanum: Alpha|Digit;
fragment LBrace: '{';
fragment RBrace: '}';
fragment LBracket: '[';
fragment RBracket: ']';
fragment LParen: '(';
fragment RParen: ')';
fragment Dot: '.';
fragment Percent: '%';
fragment DSlash: '//';
fragment Ws: Hws|Vws;
fragment Hws: [ \t];
fragment Vws: [\r\n\f\u000B]; // \u000B is \v
fragment BlockComment: '/*' .*? '*/';
fragment LineComment: DSlash ~[\r\n]*;
fragment SQuote: '\'';
fragment DQuote: '"';
