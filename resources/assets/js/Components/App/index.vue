<template>
  <div>
    <GrammarView></GrammarView>
  </div>
</template>

<script>
  import GrammarView from 'Components/GrammarView'

  export default {
    components: {
      GrammarView,
    },
  }
</script>

<style lang="styl" rel="stylesheet/stylus">
  @import "~bootstrap/dist/css/bootstrap.css"

  *
    box-sizing border-box

  svg
    box-sizing content-box

  @import "../Loader"
  @import "../Button"
  @import "../Footer"
</style>
