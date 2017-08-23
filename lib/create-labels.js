'use strict'

const ghGot = require('gh-got')

module.exports = (project, labels, token) => {
  if (labels.length <= 0) {
    throw new TypeError('Labels')
  }

  return labels.map(label => {
    return Promise.all([
      ghGot.post(`repos/${project}/labels`, {
        body: label,
        token
      })
    ])
  })
}
