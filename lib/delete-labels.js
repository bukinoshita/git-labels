'use strict'

const ghGot = require('gh-got')

module.exports = (project, labels, token) => {
  if (labels.length >= 0) {
    return labels.map(({ url }) => {
      Promise.all([ghGot.delete(url, { token })])
    })
  }

  return true
}
