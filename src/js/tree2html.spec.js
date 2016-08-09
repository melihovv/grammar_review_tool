'use strict';

import Parser from './parser';
import Tree2Html from './tree2html';

describe('tree2html', function () {
    const parser = new Parser();

    const test = (input, expectation) => {
        const tree = parser.parse(input);
        const html = Tree2Html.convert(tree, parser.parser._input);
        html.must.equal(expectation);
    };

    it('must convert tree to html keep comments and whitespaces 1', () => {
        test(
            `%name grammar`,
            '<table class="grammar-view"><tr><td>1</td>' +
            '<td>%name grammar</td></tr></table>'
        );
    });

    it('must convert tree to html keep comments and whitespaces 2', () => {
        test(
            ` /*hi*/%name grammar`,
            '<table class="grammar-view"><tr><td>1</td>' +
            '<td> /*hi*/%name grammar</td></tr></table>'
        );
    });

    it('must convert tree to html keep comments and whitespaces 3', () => {
        test(
            `
%name grammar`,
            '<table class="grammar-view"><tr><td>1</td><td></td></tr>' +
            '<tr><td>2</td><td>%name grammar</td></tr></table>'
        );
    });

    it('must convert tree to html keep comments and whitespaces 4', () => {
        test(
            `
/*hi*/
%name grammar`,
            '<table class="grammar-view"><tr><td>1</td><td></td></tr>' +
            '<tr><td>2</td><td>/*hi*/</td></tr>' +
            '<tr><td>3</td><td>%name grammar</td></tr></table>'
        );
    });

    it('must convert tree to html keep comments and whitespaces 5', () => {
        test(
            `
/*comment1*/%name /*comment2*/grammar`,
            '<table class="grammar-view"><tr><td>1</td><td></td></tr>' +
            '<tr><td>2</td>' +
            '<td>/*comment1*/%name /*comment2*/grammar</td></tr></table>'
        );
    });

    it('must convert tree to html keep comments and whitespaces 6', () => {
        test(
            `%name /*comment1*/grammar/*comment2*/`,
            '<table class="grammar-view"><tr><td>1</td>' +
            '<td>%name /*comment1*/grammar/*comment2*/</td></tr></table>'
        );
    });

    it('must convert tree to html keep comments and whitespaces 7', () => {
        test(
            `%name /*comment1*/grammar
/*comment2*/`,
            '<table class="grammar-view"><tr><td>1</td>' +
            '<td>%name /*comment1*/grammar</td></tr>' +
            '<tr><td>2</td><td>/*comment2*/</td></tr></table>'
        );
    });

    it('must convert tree to html keep comments and whitespaces 8', () => {
        test(
            `
%name /*comment1*/grammar
/*comment2*/

`,
            '<table class="grammar-view"><tr><td>1</td><td></td></tr>' +
            '<tr><td>2</td><td>%name /*comment1*/grammar</td></tr>' +
            '<tr><td>3</td><td>/*comment2*/</td></tr>' +
            '<tr><td>4</td><td></td></tr>' +
            '<tr><td>5</td><td></td></tr></table>'
        );
    });

    it('must convert tree to html keep comments and whitespaces 9', () => {
        test(
            `%name/*comment1*/grammar/*comment2*/%name grammar2`,
            '<table class="grammar-view"><tr><td>1</td>' +
            '<td>%name/*comment1*/grammar/*comment2*/%name grammar2</td></tr>' +
            '</table>'
        );
    });

    it('must convert tree to html keep comments and whitespaces 10', () => {
        test(
            `%left /*comment*/T1
T2 .`,
            '<table class="grammar-view"><tr><td>1</td>' +
            '<td>%left /*comment*/T1</td></tr>' +
            '<tr><td>2</td><td>T2 .</td></tr></table>'
        );
    });

    it('must convert tree to html keep comments and whitespaces 11', () => {
        test(
            `%left /*comment*/T1
T2 .`,
            '<table class="grammar-view"><tr><td>1</td>' +
            '<td>%left /*comment*/T1</td></tr>' +
            '<tr><td>2</td><td>T2 .</td></tr></table>'
        );
    });

    it('must convert tree to html keep comments and whitespaces 12', () => {
        test(
            `%include {
echo "hello"
}`,
            '<table class="grammar-view"><tr><td>1</td>' +
            '<td>%include {</td></tr>' +
            '<tr><td>2</td><td>echo "hello"</td></tr>' +
            '<tr><td>3</td><td>}</td></tr></table>'
        );
    });

    it('must convert tree to html keep comments and whitespaces 13', () => {
        test(
            `// comment
rule(p1) ::= A(p2) B(p3)/*comment*/. [NOT] {
// comment
echo 'hi'/**/;
}
`,
            '<table class="grammar-view"><tr><td>1</td>' +
            '<td>// comment</td></tr>' +
            '<tr><td>2</td>' +
            '<td>rule(p1) ::= A(p2) B(p3)/*comment*/. [NOT] {</td></tr>' +
            '<tr><td>3</td><td>// comment</td></tr>' +
            '<tr><td>4</td><td>echo \'hi\'/**/;</td></tr>' +
            '<tr><td>5</td><td>}</td></tr>' +
            '<tr><td>6</td><td></td></tr></table>'
        );
    });
});
