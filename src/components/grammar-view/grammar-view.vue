<script>
  /* eslint-env browser */

  import Parser from 'src/parser/parser';
  import Tree2Html from './tree2html/tree2html';
  import grammar from './grammar.y';

  const parser = new Parser();
  const tree = parser.parse(grammar);
  const template = Tree2Html.convert(tree, parser.parser._input);

  export default {
    template,
    methods: {
      addCommentToRow() {
        alert('add comment to row');
      },
      addCommentToLsNonterminal() {
        alert('add comment to left side nonterminal');
      },
      addCommentToRsNonterminal() {
        alert('add comment to right side nonterminal');
      },
      addCommentToTerminal() {
        alert('add comment to terminal');
      },
    },
  };
</script>

<style lang="styl" rel="stylesheet/stylus">
  .grammar-view
    white-space pre
    border-collapse collapse
    font-size 12px

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

    &__code
      padding-left 10px
      color #333

    &__ls-nonterminal, &__rs-nonterminal, &__terminal, &__symbol
      color #183691

    &__ls-nonterminal, &__rs-nonterminal, &__terminal
      cursor pointer

    &__punct, &__directive
      color #a71d5d

    &__param
      color #0086b3
</style>
