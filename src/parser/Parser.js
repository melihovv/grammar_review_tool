'use strict';

import antlr4 from 'antlr4/index';
import {LemonLexer} from './LemonLexer';
import {LemonParser} from './LemonParser';

class Parser {
    constructor() {
        this.tree = null;
    }

    parse(input) {
        const chars = new antlr4.InputStream(input);
        const lexer = new LemonLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new LemonParser(tokens);
        parser.buildParseTrees = true;

        this.tree = parser.file();

        if (parser._syntaxErrors > 0) {
            this.tree = null;
            throw new Error('Input contains syntax errors');
        }

        return this.tree;
    }
}

export default Parser;
