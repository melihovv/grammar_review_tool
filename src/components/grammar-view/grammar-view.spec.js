/* eslint-env mocha */

'use strict';

import Vue from 'vue';
import GrammarView from 'components/grammar-view/grammar-view';

describe('GrammarView', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><grammar-view></grammar-view></div>',
      components: {GrammarView},
    }).$mount();

    vm.$el.querySelector('.grammar-view').textContent
      .should.to.contain('%name block_formal_langs_parser_cpp_language');
  });
});
