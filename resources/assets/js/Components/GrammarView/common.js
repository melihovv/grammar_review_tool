export default {
  svgDeleteComment: `
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 12 16" width="12"
     class="grammar-view__delete-line-comment">
  <path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z">
  </path>
</svg>
`,
  svgEditComment: `
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14"
     class="grammar-view__edit-line-comment">
  <path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z">
  </path>
</svg>
`,
  addCommentToRowButton: `
<div>
  <a href="#"
     class="button button_type_link button_theme_simple grammar-view__add-comment-to-row-button">
    Comment
  </a>
</div>
`,
  commentTemplate: function (
    userName,
    commentContent,
    commentId = -1,
    updateOrDelete = true
  ) {
    return `
<div class="grammar-view__comment-holder"
     ${commentId !== -1 ? 'comment-id="' + commentId + '"' : ''}>
  <div class="grammar-view__comment-header">
    ${userName} ${updateOrDelete ? this.svgDeleteComment + this.svgEditComment : ''}
  </div>
  <div class="grammar-view__comment-content">${commentContent}</div>
</div>
`
  },
}
