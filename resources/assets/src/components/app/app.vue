<template>
  <div>
    <grammar-view></grammar-view>
    <foot></foot>
  </div>
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
  @import "../page/page.styl"
  @import "../loader/loader.styl"
</style>
