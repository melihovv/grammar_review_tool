'use strict';

import antlr4 from 'antlr4/index';
import {LemonLexer} from './parser/LemonLexer';
import {LemonParser} from './parser/LemonParser';

/**
 * Lemon grammar parser.
 */
class Parser {
    /**
     * Create parser.
     */
    constructor() {
        this.tree = null;
        this.parser = null;
    }

    /**
     * Parse lemon grammar.
     * @param {string} input
     * @returns {FileContext}
     */
    parse(input) {
        const chars = new antlr4.InputStream(input);
        const lexer = new LemonLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        this.parser = new LemonParser(tokens);
        this.parser.buildParseTrees = true;

        this.tree = this.parser.file();

        if (this.parser._syntaxErrors > 0) {
            this.tree = null;
            throw new Error('Input contains syntax errors');
        }

        return this.tree;
    }
}

export default Parser;
