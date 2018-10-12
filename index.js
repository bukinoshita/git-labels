// Packages
const isGitRepo = require('is-github-repo')

// Libs
const getLabels = require('./lib/get-labels')
const deleteLabels = require('./lib/delete-labels')
const createLabels = require('./lib/create-labels')

// Utils
const defaultLabels = require('./utils/labels')

module.exports = async ({ project, labels = defaultLabels, token } = {}) => {
  const { isGithubRepo, type } = isGitRepo(project, { withType: true })

  if (!token) {
    throw new TypeError('Token required')
  }

  if (!isGithubRepo && type !== 'repo') {
    throw new TypeError('Use project like `org/repo`')
  }

  const list = await getLabels({ project, token })

  if (list.length > 0) {
    await deleteLabels({ project, list, token })
  }

  await createLabels({ project, labels, token })
}
