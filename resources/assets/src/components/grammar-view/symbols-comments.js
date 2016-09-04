/* eslint-env browser */

import $ from 'jquery'

$(() => {
  $('.grammar-view__ls-nonterminal').click(() => {
    alert('add comment to left side nonterminal')
    return false
  })

  $('.grammar-view__rs-nonterminal').click(() => {
    alert('add comment to right side nonterminal')
    return false
  })

  $('.grammar-view__terminal').click(() => {
    alert('add comment to terminal')
    return false
  })
})
