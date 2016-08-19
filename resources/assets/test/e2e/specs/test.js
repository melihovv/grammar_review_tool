'use strict';

const config = require('../../../build/config');
const baseUrl = config.testing.baseUrl;

module.exports = {
  'GrammarView': function (browser) {
    browser
      .url(baseUrl)
      .waitForElementVisible('.grammar-view', 5000)
      .assert.containsText('.grammar-view', 'comment_list(R)')
      .end();
  },
};
