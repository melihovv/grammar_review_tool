'use strict';

import antlr4 from 'antlr4/index';
import Tree2HtmlListener from './tree2html-listener';

/**
 * Tree converter to html.
 */
class Tree2Html {
    /**
     * Convert tree to html.
     * @param {FileContext} tree
     * @param {CommonTokenStream} tokens
     * @returns {string}
     * @static
     */
    static convert(tree, tokens) {
        const tree2HtmlListener = new Tree2HtmlListener(tokens);
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(tree2HtmlListener, tree);
        return tree2HtmlListener.html;
    }
}

export default Tree2Html;
