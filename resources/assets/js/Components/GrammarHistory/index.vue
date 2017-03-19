<template>
  <div class="row">
    <div class="col-md-10" v-html="loadingTemplate" v-if="loading"></div>
    <div class="col-md-10" v-else v-html="diffTemplate"></div>

    <div class="col-md-2">
      <ul class="list-group affix versions-sidebar">
        <li class="list-group-item">History</li>
        <li v-for="version in versions" :key="version.id"
            :class="{'list-group-item': true, active: version.id === activeVersionId}"
            @click="onVersionClickedInSidebar(version.version, version.id)">
          {{ version.created_at }}<br>
          {{ version.updater.name }}
          <a :href="urlPrefix + '/grammars/' + grammarId + '?version=' + version.version" class="link"
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
      latestVersion: {
        required: true,
      },
    },
    data: () => {
      return {
        loadingTemplate: '<div class="loader">Loading...</div>',
        diffTemplate: '',
        versions: [],
        activeGrammarIndex: null,
        loading: true,
        urlPrefix: Laravel.absPath,
      }
    },
    mounted() {
      $.get({
        url: `${Laravel.absPath}/api/grammars/${this.grammarId}/versions`,
        success: response => {
          const versions = response.data

          for (const grammar of versions) {
            grammar.updater = grammar.updater.data
          }

          this.versions = versions
          this.activeVersionId = this.versions[0].id
        },
      })

      this.fetchDiff(this.latestVersion)
    },
    methods: {
      fetchDiff(version) {
        this.loading = true

        $.get({
          url: `${Laravel.absPath}/api/grammars/${this.grammarId}/diff?version=${version}`,
          success: response => {
            this.loading = false

            this.diffTemplate = '<pre>'
            for (const line of response.data.lines) {
              this.diffTemplate
                += `<div class="line-${line.type}">${line.line}<br></div>`
            }
            this.diffTemplate += '</pre>'
          },
        })
      },
      onVersionClickedInSidebar(version, versionId) {
        if (versionId === this.activeVersionId) {
          return
        }

        this.fetchDiff(version)
        this.activeVersionId = versionId
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
