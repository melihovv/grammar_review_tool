/* eslint-env browser */
import $ from 'jquery'
import common from './common'

const commentForm = (buttonText = 'Add', content = '') => {
  return `
<div class="grammar-view__comment-form"> 
  <textarea class="textarea textarea_theme_simple textarea_width_available grammar-view__textarea"
            placeholder="Leave a comment">${content}</textarea>
  <div class="grammar-view__actions">
    <a class="button button_type_link button_theme_simple grammar-view__add-comment-button"
       href="#">${buttonText}</a>
    <a class="button button_type_link button_theme_simple grammar-view__cancel-button"
       href="#">Cancel</a>
  </div>
</div>
`
}

const cancelButtonClicked = ({$parent, $prev, remove = false}) => {
  $parent.find('.grammar-view__cancel-button').click(e => {
    if (remove) {
      $parent.remove()
      return false
    }

    $(e.target).closest('.grammar-view__comment-form').replaceWith($prev)

    return false
  })
}

const commentTemplate = comment => {
  return common.commentTemplate(
    comment.user.data.name,
    comment.content,
    comment.id
  )
}

const commentButtonClicked = ({$parent, $prev, grammarId, versionId, row, column, symbolComments = false}) => {
  $parent.find('.grammar-view__add-comment-button').click(e => {
    const $this = $(e.target)
    const comment = $this.parent().prev().val()

    if (comment.trim() === '') {
      Messenger().post({
        message: 'Comment is empty',
        type: 'error',
      })
      return false
    }

    $.post({
      url: `${Laravel.absPath}/api/grammars/${grammarId}/comments`,
      data: {
        content: comment,
        row: row,
        column: column,
        version_id: versionId,
      },
      success: response => {
        const comments = $parent.find('.grammar-view__comment-holder')
        const template = commentTemplate(response.data)

        if (comments.length) {
          comments.last().after(template)

          if (symbolComments) {
            const amountOfComments = $parent.prev()
            amountOfComments.text(+amountOfComments.text() + 1)
          }
        } else {
          if (symbolComments) {
            $parent.prepend(template)
            $parent.before('<span class="grammar-view__amount-of-comments">1</span>')
          } else {
            $parent.find('td').prepend(template)
          }
        }

        $this.closest('.grammar-view__comment-form').replaceWith($prev)
      },
    })

    return false
  })
}

$(() => {
  const $grammarView = $('.grammar-view')
  const grammarId = $grammarView.attr('grammar-id')
  const versionId = $grammarView.attr('version-id')

  $(window).click(e => {
    $('.grammar-view__symbol-comments').hide()
  })

  $grammarView.on(
    'click',
    '.grammar-view__add-comment-to-row-leftside-button',
    e => {
      const $this = $(e.target)
      const $td = $this.parent()
      const row = $td.prev().text()
      const $tr = $td.parent()

      let $commentsTr = $tr.next('tr:not([class])')
      if (!$commentsTr.length) {
        $tr.after(`
<tr>
  <td class="grammar-view__line-comments" colspan="2">
    ${common.addCommentToRowButton}
  </td>
</tr>
`
        )
        $commentsTr = $tr.next('tr:not([class])')
      }

      const $prev = $commentsTr
        .find('.grammar-view__add-comment-to-row-button')
        .replaceWith(commentForm())
      $commentsTr.find('textarea').focus()

      cancelButtonClicked({$parent: $commentsTr, $prev, remove: $commentsTr.find('.grammar-view__comment-holder').length === 0})
      commentButtonClicked({$parent: $commentsTr, $prev, grammarId, versionId, row, column: -1})

      return false
    }
  )

  $grammarView.on('click', '.grammar-view__add-comment-to-row-button', e => {
    const $this = $(e.target)
    const $symbolComments = $this.closest('.grammar-view__symbol-comments')
    const $tr = $this.closest('tr')

    let row = 0
    if ($symbolComments.length) {
      row = $tr.children(':first').text()
    } else {
      row = $tr.prev().children(':first').text()
    }

    const $prev = $this.replaceWith(commentForm())

    if ($symbolComments.length) {
      $symbolComments.find('textarea').focus()
    } else {
      $tr.find('textarea').focus()
    }

    let $parent = $tr
    let column = -1
    if ($symbolComments.length) {
      $parent = $symbolComments
      column = $symbolComments
        .closest('.grammar-view__symbol-wrapper')
        .children(':first')
        .attr('data-column')
    }

    cancelButtonClicked({$parent, $prev})
    commentButtonClicked({$parent, $prev, grammarId, versionId, row, column, symbolComments: $symbolComments.length > 0})

    return false
  })

  $grammarView.on('click', '.grammar-view__delete-comment', e => {
    const $target = $(e.target)
    const curCommentHolder = $target.closest('.grammar-view__comment-holder')

    const commentId = curCommentHolder.attr('comment-id')

    $.ajax({
      url: `${Laravel.absPath}/api/grammars/${grammarId}/comments/${commentId}`,
      type: 'DELETE',
      success: response => {
        const $symbolComments = $target.closest('.grammar-view__symbol-comments')

        if ($symbolComments.length) {
          const amountOfComments = $symbolComments.prev()

          if ($symbolComments.find('.grammar-view__comment-holder').length > 1) {
            curCommentHolder.remove()
            amountOfComments.text(+amountOfComments.text() - 1)
          } else {
            $symbolComments.remove()
            amountOfComments.remove()
          }
        } else {
          const $tr = $target.closest('tr:not([class])')

          if ($tr.find('.grammar-view__comment-holder').length > 1) {
            curCommentHolder.remove()
          } else {
            $tr.remove()
          }
        }
      },
    })

    return false
  })

  $grammarView.on('click', '.grammar-view__edit-comment', e => {
    const $this = $(e.target)

    let $parent = null
    const $symbolComments = $this.closest('.grammar-view__symbol-comments')
    if ($symbolComments.length) {
      $parent = $symbolComments
    } else {
      $parent = $this.closest('tr:not([class])')
    }

    const $commentHolder = $this.closest('.grammar-view__comment-holder')
    const prevComment = $commentHolder
      .find('.grammar-view__comment-content').text()
    const $prev = $commentHolder
      .replaceWith(commentForm('Update', prevComment))

    $parent.find('.grammar-view__cancel-button').click(e => {
      $parent.find('.grammar-view__comment-form').replaceWith($prev)
      return false
    })
    $parent.find('textarea').focus()

    $parent.find('.grammar-view__add-comment-button').click(e => {
      const $this = $(e.target)
      const comment = $this.parent().prev().val()

      if (comment.trim() === '') {
        Messenger().post({
          message: 'Comment is empty',
          type: 'error',
        })
        return false
      }

      const commentId = $commentHolder.attr('comment-id')

      $.ajax({
        url: `${Laravel.absPath}/api/grammars/${grammarId}/comments/${commentId}`,
        type: 'PUT',
        data: {
          content: comment,
          version_id: versionId,
        },
        success: response => {
          $parent
            .find('.grammar-view__comment-form')
            .replaceWith(commentTemplate(response.data))
        },
      })

      return false
    })

    return false
  })

  $grammarView.on('click', '.grammar-view__symbol-comments', e => {
    e.stopPropagation()
  })

  $grammarView.on('click', '.grammar-view__symbol', e => {
    e.stopPropagation()

    const $this = $(e.target)
    const row = $this.closest('td').prev().text()
    const column = $this.attr('data-column')

    const symbolWrapper = $this.parent()
    let $symbolComments = symbolWrapper.find('.grammar-view__symbol-comments')

    $('.grammar-view__symbol-comments')
      .filter((index, elem) => elem !== $symbolComments[0])
      .css('z-index', 1)
      .hide()

    if (!$symbolComments.length) {
      const commentButton = $(`
<div class="grammar-view__symbol-comments">${common.addCommentToRowButton}</div>
`)
      commentButton.css('top', '17px')
      commentButton.css('left', 0)
      commentButton.css('display', 'inline-block')
      commentButton.css('z-index', 2)
      $this.next('.grammar-view__symbol-icons').after(commentButton)
      $symbolComments = symbolWrapper.find('.grammar-view__symbol-comments')
    } else {
      $symbolComments
        .css('z-index', 2)
        .toggle()
      return false
    }

    const $prev = $symbolComments
      .find('.grammar-view__add-comment-to-row-button')
      .replaceWith(commentForm())
    $symbolComments.find('textarea').focus()

    cancelButtonClicked({$parent: $symbolComments, $prev, remove: $symbolComments.find('.grammar-view__comment-holder').length === 0})
    commentButtonClicked({$parent: $symbolComments, $prev, grammarId, versionId, row, column, symbolComments: true})

    return false
  })

  $grammarView.on('click', '.grammar-view__search-symbol-icon', e => {
    const symbol = $(e.target).parent().prev().text()
    alert(`search symbol: ${symbol}`)
  })
  $grammarView.on('click', '.grammar-view__l-icon', e => {
    const symbol = $(e.target).parent().prev().text()
    alert(`l action: ${symbol}`)
  })
  $grammarView.on('click', '.grammar-view__r-icon', e => {
    const symbol = $(e.target).parent().prev().text()
    alert(`r action: ${symbol}`)
  })
})
