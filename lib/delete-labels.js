'use strict'

const ghGot = require('gh-got')

module.exports = ({ list, token } = {}) => {
  return new Promise((resolve, reject) => {
    if (list.length > 0) {
      list.forEach(async ({ url }) => {
        try {
          await Promise.all([ghGot.delete(url, { token })])
          resolve()
        } catch (error) {
          reject(error)
        }
      })
    }
  })
}
