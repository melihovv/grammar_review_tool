'use strict';

import sum from './index';

describe('grammar_review_tool', function () {
    it('should pass test', function () {
        sum(2, 2).must.be(4);
    });
});
