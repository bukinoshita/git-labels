'use strict'

const ghGot = require('gh-got')

module.exports = (project, token) => {
  return ghGot(`repos/${project}/labels`, { token })
}
