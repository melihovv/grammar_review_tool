/* eslint-env browser */

import $ from 'jquery';

const addCommentToRowButton = '<tr><td class="grammar-view__line-comments" ' +
  'colspan="2">' +
  '<div><a href="#" ' +
  'class="button button_type_link button_theme_simple ' +
  'grammar-view__add-comment-to-row-button">Comment</a></div></td></tr>';

const commentForm = '<div class="grammar-view__comment-form">' +
  '<textarea class="textarea textarea_theme_simple ' +
  'textarea_width_available grammar-view__textarea" ' +
  'placeholder="Leave a comment"></textarea>' +
  '<div class="grammar-view__actions">' +
  '<a href="#" class="button button_type_link button_theme_simple ' +
  'grammar-view__add-comment-button">' +
  'Comment</a>' +
  '<a href="#" class="button button_type_link button_theme_simple ' +
  'grammar-view__cancel-button">' +
  'Cancel</a>' +
  '</div>' +
  '</div>';

const cancelButtonClicked = ($parent, {$prev, remove = false}) => {
  $parent.find('.grammar-view__cancel-button').click(e => {
    if (remove) {
      $parent.remove();
      return false;
    }

    $(e.target).closest('.grammar-view__comment-form').replaceWith($prev);
    $prev.click(onAddCommentToRowButtonClicked);

    return false;
  });
};

const commentButtonClicked = ($parent, $prev) => {
  $parent.find('.grammar-view__add-comment-button').click(e => {
    // TODO Send comment to server and if it is ok...
    const $this = $(e.target);
    const comment = $this.parent().prev().val();

    if (comment === '') {
      alert('Comment is empty');
      return false;
    }

    const comments = $parent.find('.grammar-view__comment-holder');
    const commentTemplate = '<div class="grammar-view__comment-holder">' +
      '<div class="grammar-view__comment-header">current user</div>' +
      `<div class="grammar-view__comment-content">${comment}` +
      '</div></div>';
    if (comments.length) {
      comments.last().after(commentTemplate);
    } else {
      $parent.find('td').prepend(commentTemplate);
    }

    $this.closest('.grammar-view__comment-form').replaceWith($prev);
    $prev.click(onAddCommentToRowButtonClicked);

    return false;
  });
};

const onAddCommentToRowButtonClicked = e => {
  const $this = $(e.target);
  const $tr = $this.closest('tr');
  // TODO const rowNumber = $tr.prev().children(':first').text();
  const $prev = $this.replaceWith(commentForm);

  $tr.find('textarea').focus();

  cancelButtonClicked($tr, {$prev});
  commentButtonClicked($tr, $prev);

  return false;
};

$(() => {
  $('.grammar-view__add-comment-to-row-leftside-button').click(e => {
    // No comments to row: there is open/close form.
    const $this = $(e.target);
    const $td = $this.parent();
    // TODO const rowNumber = $td.prev().text();
    const $tr = $td.parent();

    let $commentsTr = $tr.next('tr:not([class])');
    if (!$commentsTr.length) {
      $tr.after(addCommentToRowButton);
      $commentsTr = $tr.next('tr:not([class])');
    }

    const $textarea = $commentsTr.find('textarea');
    if ($textarea.length) {
      $textarea.focus();
      return false;
    }

    const $prev = $commentsTr
      .find('.grammar-view__add-comment-to-row-button')
      .replaceWith(commentForm);
    $commentsTr.find('textarea').focus();

    cancelButtonClicked($commentsTr, {$prev, remove: true});
    commentButtonClicked($commentsTr, $prev);

    return false;
  });

  $('.grammar-view__add-comment-to-row-button')
    .click(onAddCommentToRowButtonClicked);
});
