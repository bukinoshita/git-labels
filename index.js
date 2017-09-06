'use strict'

const isGitRepo = require('is-github-repo')

const getLabels = require('./lib/get-labels')
const deleteLabels = require('./lib/delete-labels')
const createLabels = require('./lib/create-labels')

module.exports = (project, labels, token) => {
  const { isGithubRepo, type } = isGitRepo(project, { withType: true })

  if (!token) {
    throw new TypeError('Token required')
  }

  if (!isGithubRepo && type !== 'repo') {
    throw new TypeError('Use project like `org/repo`')
  }

  return getLabels(project, token)
    .then(labelList => {
      deleteLabels(project, labelList.body, token).then(deleted => {
        if (deleted) {
          createLabels(project, labels, token)
            .then(res => res)
            .catch(err => err)
        }
      })
    })
    .catch(err => err)
}
