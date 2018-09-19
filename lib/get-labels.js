'use strict'

const ghGot = require('gh-got')

module.exports = async ({ project, token } = {}) => {
  try {
    const { body } = await ghGot(`repos/${project}/labels`, { token })

    return body
  } catch (error) {
    console.error({ error })
  }
}
