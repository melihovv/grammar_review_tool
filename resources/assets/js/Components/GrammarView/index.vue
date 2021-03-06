<template>
  <div>
    <div class="grammar-view" v-html="template" :grammar-id="grammarId"
         :version-id="versionId" v-if="!parseFailed"></div>
    <div v-if="parseFailed" class="grammar-view_parse_failed">
      <h2>Grammar contains syntax errors</h2>
      <ul>
        <li v-for="error in parseErrors" :key="error">
          {{ error }}
        </li>
      </ul>
      <pre v-html="grammar"></pre>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import Parser from 'js/Parser'
  import Tree2Html from './Tree2Html'
  import Finder from 'js/Finder'
  import 'Components/SymbolSearch'
  import './comments'
  import './references'

  export default {
    props: {
      grammarId: {
        required: true,
      },
      version: {
        required: true,
      },
      versionId: {
        required: true,
      },
    },
    data: () => {
      return {
        template: '<div class="loader">Loading...</div>',
        parseFailed: false,
        parseErrors: [],
        grammar: '',
      }
    },
    mounted() {
      $.get({
        url: `${Laravel.absPath}/api/grammars/${this.grammarId}?version=${this.version}`,
        success: response => {
          this.show(this.handleResponse(response))
        },
      })
    },
    methods: {
      show({grammar, version, owner, comments, rights}) {
        const parser = new Parser(grammar.type)
        try {
          const tree = parser.parse(version.content)
          window.finder = new Finder(tree, grammar.type)
          const converter = new Tree2Html(
            grammar.type,
            tree,
            parser.parser._input,
            grammar,
            owner,
            comments,
            rights
          )
          this.template = converter.convert()
        } catch (e) {
          console.error(e)
          this.grammar = version.content
          this.parseFailed = true
          this.parseErrors = parser.getErrors()
        }
      },
      handleResponse(response) {
        const version = response.data
        const grammar = version.grammar.data

        const owner = grammar.owner.data
        delete grammar.owner

        const comments = version.comments.data
        delete grammar.comments
        for (const comment of comments) {
          comment.user = comment.user.data
        }

        const rights = grammar.rights.data
        delete grammar.rights

        return {grammar, version, owner, comments, rights}
      },
    },
  }
</script>

<style lang="styl" rel="stylesheet/stylus">
  .grammar-view
    overflow-x auto
    border 1px solid #d8d8d8
    border-radius 3px

    &_parse_failed
      padding 10px
      color red

    &__table
      white-space pre
      border-spacing 0
      font-size 12px

    &__row-number,
    &__code
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

    &__ls-nonterminal,
    &__rs-nonterminal,
    &__terminal,
    &__id
      color #183691

    &__ls-nonterminal,
    &__rs-nonterminal,
    &__terminal
      cursor pointer

    &__punct,
    &__directive
      color #a71d5d

    &__param
      color #0086b3

    &__add-comment-to-row-leftside-button
      padding 0
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

    &__row:hover &__add-comment-to-row-leftside-button
      opacity 1

    &__add-comment-to-row-leftside-button:hover
      transform scale(1, 1)
      color white

    &__add-comment-to-row-button
      background-color #eee
      background-image linear-gradient(#fcfcfc, #eee)
      border 1px solid #d5d5d5
      padding 6px 12px
      font-size 14px
      line-height 20px
      color #333
      white-space nowrap
      vertical-align middle

      &:hover
        background-color #ddd
        background-image linear-gradient(#eee, #ddd)
        border-color #ccc

    &__line-comments
      border-top 1px solid #eee
      border-bottom 1px solid #eee
      padding 10px
      white-space normal
      word-wrap break-word

    &__symbol-wrapper
      display inline-block
      position relative

    &__symbol-comments
      display none
      max-height 1500px
      padding 5px
      width 200px
      max-width 200px
      overflow-y auto
      overflow-x hidden
      position absolute
      top 17px
      overflow-wrap: break-word
      word-wrap break-word
      word-break break-all
      white-space normal
      border-radius 3px
      border 1px solid #eee
      background-color white

      .grammar-view__username
          max-width 100px

      & textarea
        height 60px
        min-height 60px

    &__comment-holder
      max-width 800px
      margin-bottom 10px
      border 1px solid #bfccd1
      border-radius 3px

    &__comment-header
      background-color #f2f8fa
      padding 10px 15px
      color #767676
      border-bottom 1px solid #bfccd1
      border-top-left-radius 3px
      border-top-right-radius 3px

    &__comment-content
      padding 15px
      white-space pre-wrap

    &__info
      padding 5px 10px
      background-color #f7f7f7
      border-bottom 1px solid #d8d8d8
      word-wrap break-word

    &__comment-form
      max-width 800px
      border-radius 3px
      border 1px solid #ddd
      padding 15px 10px 10px 10px

    &__amount-of-comments
      display inline-block
      min-width 10px
      padding 2px 4px
      font-size 10px
      font-weight bold
      line-height 1
      color #fff
      text-align center
      white-space nowrap
      vertical-align middle
      background-color #777
      border-radius 10px
      position relative
      top -10px

    &__symbol-icons
      display none
      position absolute
      top -18px
      left 50%
      transform translateX(-50%)
      background-color white
      border 1px solid #ccc

      &:hover
        display inline-block

      & span
        padding 0 2.5px
        cursor pointer

    &__l-icon, &__r-icon
      font-size 16px

    &__ls-nonterminal:hover + &__symbol-icons,
    &__rs-nonterminal:hover + &__symbol-icons,
    &__terminal:hover + &__symbol-icons
      display inline-block

    &__textarea
      border 1px solid #ddd
      width 100%
      height 100px
      min-height 100px
      max-height 500px
      padding 10px
      resize vertical
      border-radius 3px
      box-shadow inset 0 1px 2px rgba(0, 0, 0, 0.075)
      background-color #fafafa
      color #333

      &:focus
        border-color #51a7e8
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075),
          0 0 5px rgba(81, 167, 232, 0.5)

    &__actions
      padding 10px 0 0

      &::before
        display table
        content ""

      &::after
        display table
        clear both
        content ""

    &__add-comment-button,
    &__cancel-button
      float right
      margin-left 5px

    &__add-comment-button
      color #fff
      text-shadow 0 -1px 0 rgba(0, 0, 0, 0.15)
      background-color #60b044
      background-image linear-gradient(#8add6d, #60b044)
      border-color #5ca941
      padding 6px 12px
      font-size 14px
      line-height 20px

      &:hover
        color #fff
        background-color #569e3d
        background-image linear-gradient(#79d858, #569e3d)
        border-color #4a993e

    &__cancel-button
      padding 6px 12px
      font-size 14px
      line-height 20px
      color #333
      background-color #eee
      background-image linear-gradient(#fcfcfc, #eee)
      border 1px solid #d5d5d5

      &:hover
        background-color #ddd
        background-image linear-gradient(#eee, #ddd)
        border-color #ccc

    &__edit-comment,
    &__delete-comment
      display inline-block
      padding 0 5px
      opacity 0.5
      cursor pointer

    &__comment-crud-actions
      float right
      display inline-block

    &__username
      display inline-block

  .highlighted
    animation highlight 5s ease 0s 1 alternate

  @keyframes highlight {
    from {background-color: #f8eec7;}
    to {background-color: transparent;}
  }
</style>
