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

const highlightComment = id => {
  const $comment = $(`#${id}`)
  if (!$comment.length) {
    return
  }

  if (!$comment.is(':visible')) {
    $comment.closest('.grammar-view__symbol-comments').show()
  }

  $('.highlighted').removeClass('highlighted')
  $comment.addClass('highlighted')

  $('html, body').animate({
    scrollTop: $comment.offset().top,
  }, 500)

  history.pushState({}, '', `#${id}`)
}

$(() => {
  const $grammarView = $('.grammar-view')
  const hash = location.hash.substring(1)

  if (/L[0-9]+/.test(hash)) {
    waitForEl('.grammar-view__info', () => {
      highlightLine(hash.substring(1))
    })
  } else if (/comment-[0-9]+/.test(hash)) {
    waitForEl('.grammar-view__info', () => {
      highlightComment(hash)
    })
  }

  $grammarView.on('click', '.grammar-view__row-number', e => {
    const line = $(e.target).text()
    highlightLine(line)
  })

  $grammarView.on('dblclick', '.grammar-view__comment-header', e => {
    const id = $(e.target).parent().attr('id')
    highlightComment(id)
  })
})
