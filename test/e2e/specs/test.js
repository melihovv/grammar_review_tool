'use strict';

module.exports = {
  'GrammarView': function (browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('.grammar-view', 5000)
      .assert.containsText('.grammar-view', 'comment_list(R)')
      .end();
  },
};
