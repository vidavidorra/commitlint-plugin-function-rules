module.exports = {
  branches: ['master'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          { type: 'perf', release: 'patch' },
          { type: 'revert', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'chore', scope: 'deps', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'build', release: 'patch' },
          { type: 'ci', release: 'patch' },
        ],
      },
    ],
    ['@semantic-release/release-notes-generator'],
    ['@semantic-release/changelog'],
    ['@semantic-release/npm', { npmPublish: false }],
    ['@semantic-release/git'],
    ['@semantic-release/github'],
  ],
  preset: 'conventionalcommits',
  presetConfig: {
    /**
     * Types from the Conventional Changelog conventionalcommits.org convention.
     * The types are used as they were in version 4.3.1, of which the link to
     * the exact location is shown below. The only change to the types array is
     * whether some types are hidden or not.
     *
     * https://github.com/conventional-changelog/conventional-changelog/blob/conventional-changelog-conventionalcommits%404.3.1/packages/conventional-changelog-conventionalcommits/writer-opts.js#L160
     */
    types: [
      { type: 'feat', section: 'Features' },
      { type: 'fix', section: 'Bug Fixes' },
      { type: 'perf', section: 'Performance Improvements' },
      { type: 'revert', section: 'Reverts' },
      { type: 'docs', section: 'Documentation' },
      { type: 'style', section: 'Styles' },
      { type: 'chore', section: 'Miscellaneous Chores' },
      { type: 'refactor', section: 'Code Refactoring' },
      { type: 'test', section: 'Tests' },
      { type: 'build', section: 'Build System' },
      { type: 'ci', section: 'Continuous Integration' },
    ],
  },
};
