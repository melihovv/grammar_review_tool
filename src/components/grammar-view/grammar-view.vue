<template>
  <div class="grammar-view">
    {{{ template }}}
  </div>
</template>

<script>
  /* eslint-env browser */

  import $ from 'jquery';
  import Parser from 'src/parser/parser';
  import Tree2Html from './tree2html/tree2html';

  $(() => {
    $('.grammar-view__add-comment-to-row-button').click(() => {
      alert('add comment to row');
    });
    $('.grammar-view__ls-nonterminal').click(() => {
      alert('add comment to left side nonterminal');
    });
    $('.grammar-view__rs-nonterminal').click(() => {
      alert('add comment to right side nonterminal');
    });
    $('.grammar-view__terminal').click(() => {
      alert('add comment to terminal');
    });
  });

  export default {
    data: () => {
      return {
        template: '<div class="loader">Loading...</div>',
      };
    },
    ready() {
      const resource = this.$resource('grammars{/id}');

      resource.get({id: 1})
        .then(response => {
          const parser = new Parser();
          const {grammar, comments, users} = response.json();
          const tree = parser.parse(grammar.content);
          this.template = Tree2Html.convert(
            tree,
            parser.parser._input,
            grammar,
            comments,
            users
          );
        })
        .catch(response => {
          console.error(response);
        });
    },
  };
</script>

<style lang="styl" rel="stylesheet/stylus">
  .grammar-view__table
    white-space pre
    border-spacing 0
    font-size 12px

  .grammar-view
    width 1024px
    overflow-x auto
    border 1px solid #d8d8d8
    border-radius 3px

    &__row-number, &__code
      display table-cell
      line-height 20px
      vertical-align top

    &__row-number
      border solid #eee
      border-width 0 1px 0 0
      text-align right
      width 1%
      min-width 50px
      padding-right 10px
      padding-left 10px
      color rgba(0, 0, 0, 0.3)
      cursor pointer

    &__row-number:hover
      color rgba(0, 0, 0, 0.6)

    &__code
      color #333

    &__ls-nonterminal, &__rs-nonterminal, &__terminal, &__symbol
      color #183691

    &__ls-nonterminal, &__rs-nonterminal, &__terminal
      cursor pointer

    &__punct, &__directive
      color #a71d5d

    &__param
      color #0086b3

    &__add-comment-to-row-button
      padding: 0
      width 19px
      height 19px
      line-height 19px
      background-color #4078c0
      color white
      opacity 0
      font-size 20px
      font-weight bold
      position relative
      left -10px
      transition transform 0.1s ease-in-out
      transform scale(0.8, 0.8)

    &__row:hover &__add-comment-to-row-button
      opacity 1

    &__add-comment-to-row-button:hover
      transform scale(1, 1)

    &__line-comments
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      padding 10px
      white-space normal
      word-wrap break-word

    &__comment-holder
      max-width 800px
      margin-bottom 10px
      border 1px solid #bfccd1
      border-radius 3px

    &__comment-header
      background-color #f2f8fa
      padding: 10px 15px
      color #767676
      border-bottom 1px solid #bfccd1
      border-top-left-radius 3px
      border-top-right-radius 3px

    &__comment-content
      padding 15px

    &__info
      padding 5px 10px
      background-color #f7f7f7
      border-bottom 1px solid #d8d8d8
      word-wrap break-word
</style>
