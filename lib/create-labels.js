'use strict'

const ghGot = require('gh-got')

module.exports = ({ project, labels, token } = {}) => {
  return new Promise((resolve, reject) => {
    labels.forEach(async label => {
      try {
        await Promise.all([
          ghGot.post(`repos/${project}/labels`, {
            headers: {
              'accept': 'application/vnd.github.symmetra-preview+json'
            },
            body: label,
            token
          })
        ])

        resolve()
      } catch (error) {
        reject(error)
      }
    })
  })
}
