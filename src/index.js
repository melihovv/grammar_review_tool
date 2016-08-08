'use strict';

import Parser from './parser';
import Tree2Html from './tree2html';

document.addEventListener('DOMContentLoaded', () => {
    const grammar = require('./grammar.y');
    const parser = new Parser();
    const tree = parser.parse(grammar);
    const html = Tree2Html.convert(tree, parser.parser._input);
    document.body.innerHTML += html;
});
