<template>
  <div class="row">
    <div class="col-md-10" v-html="loadingTemplate" v-if="loading"></div>
    <div class="col-md-10" v-else v-html="diffTemplate"></div>

    <div class="col-md-2">
      <ul class="list-group affix versions-sidebar">
        <li class="list-group-item">History</li>
        <li v-for="grammar in grammars"
            :class="{'list-group-item': true, active: grammar.id === activeGrammarId}"
            @click="onGrammarClickedInSidebar(grammar.id)">
          {{ grammar.created_at }}<br>
          {{ grammar.updater.name }}
          <a :href="urlPrefix + '/grammars/' + grammar.id" class="link"
             onclick="event.stopPropagation()">Show</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      grammarId: {
        required: true,
      },
      latestVersionId: {
        required: true,
      },
    },
    data: () => {
      return {
        loadingTemplate: '<div class="loader">Loading...</div>',
        diffTemplate: '',
        grammars: [],
        activeGrammarIndex: null,
        loading: true,
        urlPrefix: Laravel.absPath,
      }
    },
    mounted() {
      $.get({
        url: `${Laravel.absPath}/api/grammars/${this.grammarId}/all-versions`,
        success: response => {
          const grammars = response.data

          for (const grammar of grammars) {
            grammar.updater = grammar.updater.data
          }

          this.grammars = grammars
          this.activeGrammarId = this.grammars[0].id
        },
      })

      this.fetchDiff(this.latestVersionId)
    },
    methods: {
      fetchDiff(grammarId) {
        this.loading = true

        $.get({
          url: `${Laravel.absPath}/api/grammars/${grammarId}/diff`,
          success: response => {
            this.loading = false

            this.diffTemplate = ''
            for (const line of response.data.lines) {
              this.diffTemplate
                += `<div class="line-${line.type}">${line.line}<br></div>`
            }
          },
        })
      },
      onGrammarClickedInSidebar(grammarId) {
        if (grammarId === this.activeGrammarId) {
          return
        }

        this.fetchDiff(grammarId)
        this.activeGrammarId = grammarId
      },
    },
  }
</script>

<style lang="styl" rel="stylesheet/stylus">
  .versions-sidebar
    width 19%

    & li:not(:first-child)
      cursor pointer

  .line-removed
    background-color #FFDDDD
    &::before
      content '- '

  .line-added
    background-color #A6F3A6
    &::before
      content '+ '

  .list-group-item.active a
    color white
</style>
