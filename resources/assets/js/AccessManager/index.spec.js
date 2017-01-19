/* eslint-env mocha */

'use strict'

import AccessManager from './index'
import chai from 'chai'

const expect = chai.expect

describe('AccessManager', () => {
  describe('canUserUpdateOrDeleteComment', () => {
    const cases = {
      'user is admin': {
        accessManager: new AccessManager({}, []),
        user: {is_admin: true},
        comment: {},
        expected: true,
      },
      'grammar is allowed to comment, but user is not comment owner': {
        accessManager: new AccessManager({allow_to_comment: true}, []),
        user: {id: 1},
        comment: {user_id: 2},
        expected: false,
      },
      'grammar is allowed to comment, user is comment owner, but he has not right to comment': {
        accessManager: new AccessManager({id: 1, allow_to_comment: true}, [
          {
            grammar_id: 1,
            user_id: 1,
            comment: false,
          },
        ]),
        user: {id: 1},
        comment: {user_id: 1},
        expected: false,
      },
      'grammar is allowed to comment, user is comment owner and he has right to comment': {
        accessManager: new AccessManager({id: 1, allow_to_comment: true}, [
          {
            grammar_id: 1,
            user_id: 1,
            comment: true,
          },
        ]),
        user: {id: 1},
        comment: {user_id: 1},
        expected: true,
      },
    }

    for (const name in cases) {
      it(name, () => {
        const c = cases[name]
        c
          .accessManager
          .canUserUpdateOrDeleteComment(c.user, c.comment)
          .should
          .equal(c.expected)
      })
    }
  })

  describe('canUserComment', () => {
    const cases = {
      'user is admin': {
        accessManager: new AccessManager({}, []),
        user: {is_admin: true},
        expected: true,
      },
      'user is grammar owner': {
        accessManager: new AccessManager({user_id: 1}, []),
        user: {id: 1},
        expected: true,
      },
      'grammar is not allowed to comment': {
        accessManager: new AccessManager({
          user_id: 1,
          allow_to_comment: false,
        }, []),
        user: {id: 2},
        expected: false,
      },
      'grammar is  allowed to comment, but user has not right to comment': {
        accessManager: new AccessManager({id: 1, allow_to_comment: true}, [
          {
            grammar_id: 1,
            user_id: 1,
            comment: false,
          },
        ]),
        user: {id: 1},
        expected: false,
      },
      'grammar is  allowed to comment and user has right to comment': {
        accessManager: new AccessManager({id: 1, allow_to_comment: true}, [
          {
            grammar_id: 1,
            user_id: 1,
            comment: true,
          },
        ]),
        user: {id: 1},
        expected: true,
      },
    }

    for (const name in cases) {
      it(name, () => {
        const c = cases[name]
        c.accessManager.canUserComment(c.user).should.equal(c.expected)
      })
    }
  })

  describe('isUserCommentOwner', () => {
    it('user is comment owner', () => {
      expect(AccessManager.isUserCommentOwner({user_id: 1}, {id: 1})).to.be.true
    })
    it('user is not comment owner', () => {
      expect(AccessManager.isUserCommentOwner({user_id: 1}, {id: 2})).to.be.false
    })
  })

  describe('hasUserRightTo', () => {
    const cases = {
      'there are no rights for user': {
        accessManager: new AccessManager({id: 1}, [
          {
            grammar_id: 1,
            user_id: 2,
            comment: true,
          },
        ]),
        user: {id: 1},
        ability: 'comment',
        expected: false,
      },
      'there are rights for user, but he has not requested right': {
        accessManager: new AccessManager({id: 1}, [
          {
            grammar_id: 1,
            user_id: 1,
            comment: false,
          },
        ]),
        user: {id: 1},
        ability: 'comment',
        expected: false,
      },
      'there are rights for user and he has requested right': {
        accessManager: new AccessManager({id: 1}, [
          {
            grammar_id: 1,
            user_id: 1,
            comment: true,
          },
        ]),
        user: {id: 1},
        ability: 'comment',
        expected: true,
      },
    }

    for (const name in cases) {
      it(name, () => {
        const c = cases[name]
        c
          .accessManager
          .hasUserRightTo(c.ability, c.user)
          .should
          .equal(c.expected)
      })
    }
  })
})
