'use strict'

/**
 * Access manager.
 */
class AccessManager {
  /**
   * @param {Object} grammar
   * @param {Array} rights
   */
  constructor(grammar, rights) {
    this.grammar = grammar
    this.rights = rights
  }

  /**
   * Returns true if user can delete or update comment on the given grammar.
   * @param {Object} user
   * @param {Object} comment
   * @return {boolean}
   */
  canUserUpdateOrDeleteComment(user, comment) {
    return user.is_admin
      || (
        this.grammar.allow_to_comment
        && AccessManager.isUserCommentOwner(comment, user)
        && this.hasUserRightTo('comment', user)
      )
  }

  /**
   * Returns true if user is comment owner.
   * @param {Object} comment
   * @param {Object} user
   * @return {boolean}
   */
  static isUserCommentOwner(comment, user) {
    return comment.user_id === user.id
  }

  /**
   * Returns true if user is grammar owner.
   * @param {Object} user
   * @return {boolean}
   */
  isUserGrammarOwner(user) {
    return this.grammar.user_id === user.id
  }

  /**
   * Returns true if user can comment.
   * @param {Object} user
   * @return {boolean}
   */
  canUserComment(user) {
    return user.is_admin
      || this.isUserGrammarOwner(user)
      || (this.grammar.allow_to_comment && this.hasUserRightTo('comment', user))
  }

  /**
   * Returns true if user has right to ability.
   * @param {String} ability
   * @param {Object} user
   * @return {boolean}
   */
  hasUserRightTo(ability, user) {
    return this.rights.some(right => {
      return right.grammar_id === this.grammar.id
        && right.user_id === user.id
        && right[ability]
    })
  }
}

export default AccessManager
