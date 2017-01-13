<template>
  <div>
    <GrammarView></GrammarView>
    <Foot></Foot>
  </div>
</template>

<script>
  import GrammarView from 'components/GrammarView'
  import Foot from 'components/Foot'

  export default {
    components: {
      GrammarView,
      Foot,
    },
  }
</script>

<style lang="styl" rel="stylesheet/stylus">
  @import "../Page"
  @import "../Loader"
  @import "~bootstrap/dist/css/bootstrap.css"
</style>
