<template>
  <div>
    <grammar-view></grammar-view>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="styl" rel="stylesheet/stylus">
  @import "~bootstrap/dist/css/bootstrap.css"
  @import "~messenger/build/css/messenger.css"
  @import "~messenger/build/css/messenger-theme-block.css"

  *
    box-sizing border-box

  svg
    box-sizing content-box

  html
    height 100%

  body
    position relative
    padding-bottom 60px
    min-height 100%

  @import "../Loader"
  @import "../Button"
  @import "../Footer"
  @import "../CreateNewButton"
  @import "../AceEditor"
  @import "./helpers"
  @import "../SymbolSearch"
</style>
