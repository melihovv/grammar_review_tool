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
      <right :right="right" :grammar-id="grammarId"
             v-for="(right, index) in rights" :key="right.id"
             v-on:remove="rights.splice(index, 1)"></right>
      </tbody>
    </table>
    <grant-rights-to-users :grammar-id="grammarId"
                           v-on:granted="addRights"></grant-rights-to-users>
  </div>
</template>

<script>
  import Right from './right.vue'
  import GrantRightsToUsers from './grant-rights-to-users.vue'

  export default {
    components: {
      Right,
      GrantRightsToUsers,
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
      addRights(rights) {
        this.rights = this.rights.concat(rights)
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
