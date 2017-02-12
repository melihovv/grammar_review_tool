<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>User</th>
        <th>Access level</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      <right :right="right" :grammar-id="grammarId" v-for="(right, index) in rights"
             v-on:remove="rights.splice(index, 1)"></right>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Right from './right.vue'

  export default {
    components: {
      Right,
    },
    props: {
      grammarId: {
        required: true,
      },
    },
    data: () => {
      return {
        rights: [],
        rightLevel: null,
        options: ['view', 'comment'],
      }
    },
    mounted() {
      $.get({
        url: `${Laravel.absPath}/api/grammars/${this.grammarId}/rights`,
        success: response => {
          this.show(response)
        },
      })
    },
    methods: {
      show(response) {
        this.rights = response.data

        for (const right of this.rights) {
          right.user = right.user.data
        }
      },
    },
  }
</script>

<style lang="styl" rel="stylesheet/stylus" scoped>
  table
    width 100%

  th
    font-weight normal
</style>
