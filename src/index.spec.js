'use strict';

var funcs = require('./index');

describe('grammar_review_tool', function () {
    it('should pass test', function () {
        funcs.sum(2, 2).must.be(4);
    });
});
