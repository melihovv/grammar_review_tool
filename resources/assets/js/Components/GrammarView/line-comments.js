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

const cancelButtonClicked = ($parent, {$prev, remove = false}) => {
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

const commentButtonClicked = ($parent, $prev, rowNumber) => {
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

    const grammarId = $('.grammar-view').attr('grammar-id')

    $.post({
      url: `/api/grammars/${grammarId}/comments`,
      data: {
        content: comment,
        row: rowNumber,
        column: 0,
      },
      success: response => {
        const comments = $parent.find('.grammar-view__comment-holder')
        const template = commentTemplate(response.data)

        if (comments.length) {
          comments.last().after(template)
        } else {
          $parent.find('td').prepend(template)
        }

        $this.closest('.grammar-view__comment-form').replaceWith($prev)
      },
    })

    return false
  })
}

$(() => {
  const $grammarView = $('.grammar-view')

  $grammarView.on(
    'click',
    '.grammar-view__add-comment-to-row-leftside-button',
    e => {
      const $this = $(e.target)
      const $td = $this.parent()
      const rowNumber = $td.prev().text()
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

      const $textarea = $commentsTr.find('textarea')
      if ($textarea.length) {
        $textarea.focus()
        return false
      }

      const $prev = $commentsTr
        .find('.grammar-view__add-comment-to-row-button')
        .replaceWith(commentForm())
      $commentsTr.find('textarea').focus()

      cancelButtonClicked($commentsTr, {$prev, remove: true})
      commentButtonClicked($commentsTr, $prev, rowNumber)

      return false
    }
  )

  $grammarView.on('click', '.grammar-view__add-comment-to-row-button', e => {
    const $this = $(e.target)
    const $tr = $this.closest('tr')
    const rowNumber = $tr.prev().children(':first').text()
    const $prev = $this.replaceWith(commentForm())

    $tr.find('textarea').focus()

    cancelButtonClicked($tr, {$prev})
    commentButtonClicked($tr, $prev, rowNumber)

    return false
  })

  $grammarView.on('click', '.grammar-view__delete-line-comment', e => {
    const $target = $(e.target)
    const curCommentHolder = $target.closest('.grammar-view__comment-holder')

    const grammarId = $('.grammar-view').attr('grammar-id')
    const commentId = curCommentHolder.attr('comment-id')

    $.ajax({
      url: `/api/grammars/${grammarId}/comments/${commentId}`,
      type: 'DELETE',
      success: response => {
        const $tr = $target.closest('tr:not([class])')

        if ($tr.find('.grammar-view__comment-holder').length > 1) {
          curCommentHolder.remove()
        } else {
          $tr.remove()
        }
      },
    })

    return false
  })

  $grammarView.on('click', '.grammar-view__edit-line-comment', e => {
    const $this = $(e.target)
    const $tr = $this.closest('tr:not([class])')
    const $commentHolder = $this.closest('.grammar-view__comment-holder')
    const prevComment = $commentHolder
      .find('.grammar-view__comment-content').text()
    const $prev = $commentHolder
      .replaceWith(commentForm('Update', prevComment))

    $tr.find('.grammar-view__cancel-button').click(e => {
      $tr.find('.grammar-view__comment-form').replaceWith($prev)
      return false
    })

    $tr.find('.grammar-view__add-comment-button').click(e => {
      const $this = $(e.target)
      const comment = $this.parent().prev().val()

      if (comment.trim() === '') {
        Messenger().post({
          message: 'Comment is empty',
          type: 'error',
        })
        return false
      }

      const grammarId = $('.grammar-view').attr('grammar-id')
      const commentId = $commentHolder.attr('comment-id')

      $.ajax({
        url: `/api/grammars/${grammarId}/comments/${commentId}`,
        type: 'PUT',
        data: {
          content: comment,
        },
        success: response => {
          $tr
            .find('.grammar-view__comment-form')
            .replaceWith(commentTemplate(response.data))
        },
      })

      return false
    })

    return false
  })
})
