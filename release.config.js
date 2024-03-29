/** @type {import('semantic-release').Options} */
/* eslint-disable no-template-curly-in-string */

module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'docs', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'fix', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'ci', release: 'patch' },
          { type: 'feat', release: 'minor' },
          { type: 'BREAKING_CHANGE', release: 'major' },
        ],
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
}