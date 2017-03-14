/* eslint-env browser */

'use strict'

const waitForEl = (selector, callback) => {
  if ($(selector).length) {
    callback()
  } else {
    setTimeout(() => {
      waitForEl(selector, callback)
    }, 300)
  }
}

const highlightLine = row => {
  const $tr = $(`#L${row}`)
  if (!$tr.length) {
    return
  }

  $('.highlighted').removeClass('highlighted')
  $tr.find('.grammar-view__code').addClass('highlighted')

  $('html, body').animate({
    scrollTop: $tr.offset().top,
  }, 500)

  history.pushState({}, '', `#L${row}`)
}

$(() => {
  const $grammarView = $('.grammar-view')
  const hash = location.hash.substring(1)

  if (/L[0-9]+/.test(hash)) {
    waitForEl('.grammar-view__info', () => {
      highlightLine(hash.substring(1))
    })
  }

  $grammarView.on('click', '.grammar-view__row-number', e => {
    const line = $(e.target).text()
    highlightLine(line)
  })
})
