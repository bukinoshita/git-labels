'use strict'

const ghGot = require('gh-got')

module.exports = (project, labels, token) => {
  return new Promise((resolve, reject) => {
    if (labels.length <= 0) {
      reject('Error')
    }

    labels.forEach(label => {
      return Promise.all([
        ghGot.post(`repos/${project}/labels`, {
          body: label,
          token
        })
      ])
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  })
}
