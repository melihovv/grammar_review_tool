/* eslint-env browser */

import $ from 'jquery'

$(() => {
  const $grammarView = $('.grammar-view')

  $grammarView.on('click', '.grammar-view__ls-nonterminal', e => {
    const $this = $(e.target)
    const row = $this.parent().prev().text()
    const column = $this.attr('data-column')

    alert(`add comment to left side nonterminal, row,column: ${row},${column}`)
    return false
  })

  $grammarView.on('click', '.grammar-view__rs-nonterminal', e => {
    const $this = $(e.target)
    const row = $this.parent().prev().text()
    const column = $this.attr('data-column')

    alert(`add comment to right side nonterminal, row,column: ${row},${column}`)
    return false
  })

  $grammarView.on('click', '.grammar-view__terminal', e => {
    const $this = $(e.target)
    const row = $this.parent().prev().text()
    const column = $this.attr('data-column')

    alert(`add comment to terminal, row,column: ${row},${column}`)
    return false
  })
})
