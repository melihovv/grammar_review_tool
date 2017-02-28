<template>
  <tr class="right">
    <td>{{ right.user.name }}</td>
    <td>
      <vue-multiselect v-model="rightLevel" :options="rightLevels"
                       :searchable="false" :allow-empty="false"
                       :show-labels="false" :show-pointer="false"
                       :placeholder="''" @input="onChange"/>
    </td>
    <td><span class="right__delete" @click="remove">&times;</span></td>
  </tr>
</template>

<script>
  export default {
    props: {
      right: {
        required: true,
        type: Object,
      },
      grammarId: {
        required: true,
      },
    },
    data: () => {
      return {
        rightLevels: ['view&comment', 'edit', 'admin'],
      }
    },
    computed: {
      rightLevel: function () {
        if (this.right.view_comment) {
          return 'view&comment'
        } else if (this.right.edit) {
          return 'edit'
        } else if (this.right.admin) {
          return 'admin'
        } else {
          return null
        }
      },
    },
    methods: {
      onChange(rightLevel) {
        const data = {
          view_comment: rightLevel === 'view&comment' ? 1 : 0,
          edit: rightLevel === 'edit' ? 1 : 0,
          admin: rightLevel === 'admin' ? 1 : 0,
          user_id: this.right.user.id,
        }

        $.ajax({
          type: 'PUT',
          data,
          url: `${Laravel.absPath}/api/grammars/${this.grammarId}/rights/${this.right.id}`,
        })
      },
      remove() {
        $.ajax({
          type: 'DELETE',
          url: `${Laravel.absPath}/api/grammars/${this.grammarId}/rights/${this.right.id}`,
          success: response => {
            this.$emit('remove')
          },
        })
      },
    },
  }
</script>

<style lang="styl" rel="stylesheet/stylus" scoped>
  .multiselect
    width 150px
    display inline-block

  .right__delete
    cursor pointer
    font-size 20px
    line-height 100%
</style>
