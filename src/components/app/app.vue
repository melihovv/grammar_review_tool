<template>
  <grammar-view></grammar-view>
  <foot></foot>
</template>

<script>
  import GrammarView from 'components/grammar-view/grammar-view';
  import Foot from 'components/foot/foot';

  export default {
    components: {
      GrammarView,
      Foot,
    },
  };
</script>

<style lang="styl" rel="stylesheet/stylus">
  html, body
    margin 0
    padding 0
</style>
