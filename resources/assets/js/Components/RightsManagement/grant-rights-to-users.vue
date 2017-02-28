<template>
  <div>
    <h3>Grant access</h3>
    <vue-multiselect v-model="selectedUsers" label="name"
                     placeholder="Type user nickname or email"
                     :options="users" :multiple="true" :searchable="true"
                     :loading="isLoading" :internal-search="false"
                     :clear-on-select="false" :close-on-select="false"
                     @search-change="searchUsers" class="users" track-by="id">
      <span
        slot="noResult">No users found. Consider changing the search query.</span>
    </vue-multiselect>
    <vue-multiselect v-model="rightLevel" :options="rightLevels"
                     :searchable="false" :allow-empty="false"
                     :show-labels="false" :show-pointer="false"
                     :placeholder="''" class="rightLevels"/>
    <button class="btn btn-primary" @click="grant">Grant</button>
  </div>
</template>

<script>
  import debounce from 'debounce'

  export default {
    props: {
      grammarId: {
        required: true,
      },
    },
    data: () => {
      return {
        rightLevels: ['view&comment', 'edit', 'admin'],
        rightLevel: 'view&comment',
        users: [],
        selectedUsers: [],
        isLoading: false,
        xhrs: [],
      }
    },
    methods: {
      grant() {
        if (this.selectedUsers.length === 0) {
          return
        }

        const users = []
        this.selectedUsers.map(user => {
          users.push(user.id)
        })

        $.post({
          url: `${Laravel.absPath}/api/grammars/${this.grammarId}/rights`,
          data: {
            users,
            view_comment: this.rightLevel === 'view&comment' ? 1 : 0,
            edit: this.rightLevel === 'edit' ? 1 : 0,
            admin: this.rightLevel === 'admin' ? 1 : 0,
          },
        })
          .done(response => {
            this.selectedUsers = []
            this.users = []

            const rights = response.data
            for (const right of rights) {
              right.user = right.user.data
            }

            this.$emit('granted', rights)
          })
      },
      searchUsers: debounce(function (query) {
        this.isLoading = true

        this.xhrs.forEach(xhr => xhr.abort())
        this.xhrs = []

        const xhr = $.get({
          url: `${Laravel.absPath}/api/users/${this.grammarId}/find`,
          data: {query},
        })
          .done(response => {
            this.users = response.data
          })
          .always(() => {
            this.isLoading = false
          })

        this.xhrs.push(xhr)
      }, 500),
    },
  }
</script>

<style lang="styl" rel="stylesheet/stylus" scoped>
  .rightLevels
    width 25%
    display inline-block
    box-sizing border-box

  .users
    width 60%
    display inline-block
    box-sizing border-box
</style>
