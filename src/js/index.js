'use strict';

import Parser from './parser';
import Tree2Html from './tree2html';

const addListenerToClass = (eventName, nodes, handler) => {
    Array.prototype.forEach.call(
        nodes,
        (el) => {
            el.addEventListener(eventName, handler);
        }
    );
};

document.addEventListener('DOMContentLoaded', () => {
    const grammar = require('./grammar.y');
    const parser = new Parser();
    const tree = parser.parse(grammar);
    document.body.innerHTML += Tree2Html.convert(tree, parser.parser._input);

    addListenerToClass(
        'click',
        document.getElementsByClassName('grammar-view__row-number'),
        () => alert('add comment to row')
    );
    addListenerToClass(
        'click',
        document.getElementsByClassName('grammar-view__ls-nonterminal'),
        () => alert('add comment to ls-nonterminal')
    );
    addListenerToClass(
        'click',
        document.getElementsByClassName('grammar-view__rs-nonterminal'),
        () => alert('add comment to rs-nonterminal')
    );
    addListenerToClass(
        'click',
        document.getElementsByClassName('grammar-view__terminal'),
        () => alert('add comment to terminal')
    );
});
