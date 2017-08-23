# git-labels

> Creating Github issue labels


## Install

```bash
$ yarn add git-labels
```


## Usage

```js
const gitLabels = require('git-labels')

const labels = [{ name: 'bug', color: 'cb2431' }]

gitLabels('bukinoshita/git-labels', labels, token).then(() => console.log('Done!'))
// => Done!
```


## Why

I've been using Github issues labels a lot these days, but I never liked the default ones. So every project I have to **manually** `delete/create/update` my issues labels with the colors and names I want. This can be done with a single command using this module.


## API

### gitLabels(project, labels, token)

#### project

Type: `string`<br />
Format: `org/repo`<br />
Required

Github project.

#### labels

Type: `array`<br />
Format: `[ { name: NAME, color: COLOR }, ... ]`<br />
Required

Labels to be created

#### token

Type: `string`<br />
Required

[Github access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
