'use strict'

const ghGot = require('gh-got')

module.exports = async ({ project, token } = {}) => {
  try {
    const { body } = await ghGot(`repos/${project}/labels`, {
      headers: {
        'accept': 'application/vnd.github.symmetra-preview+json'
      },
      token
    })

    return body
  } catch (error) {
    console.error({ error })
  }
}
