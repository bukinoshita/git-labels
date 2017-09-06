'use strict'

const ghGot = require('gh-got')

module.exports = (project, labels, token) => {
  return new Promise((resolve, reject) => {
    if (labels.length >= 0) {
      return labels.forEach(({ url }) => {
        Promise.all([ghGot.delete(url, { token })])
          .then(res => resolve(res))
          .catch(err => reject(err))
      })
    }

    resolve(true)
  })
}
