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
        AccessManager.isUserCommentOwner(comment, user)
        && (
          this.isUserGrammarOwner(user)
          || this.hasUserRightTo(['view_comment', 'edit', 'admin'], user)
        )
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
      || this.hasUserRightTo(['view_comment', 'edit', 'admin'], user)
  }

  /**
   * Returns true if user has right to ability.
   * @param {String|Array} ability
   * @param {Object} user
   * @param {boolean} all
   * @return {boolean}
   */
  hasUserRightTo(ability, user, all = false) {
    return this.rights.some(right => {
      let hasAbility = false

      if (Array.isArray(ability)) {
        hasAbility = all
          ? ability.every(a => right[a])
          : ability.some(a => right[a])
      } else {
        hasAbility = right[ability]
      }

      return right.grammar_id === this.grammar.id
        && right.user_id === user.id
        && hasAbility
    })
  }
}

export default AccessManager
