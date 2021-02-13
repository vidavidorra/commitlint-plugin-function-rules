module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          { type: 'perf', release: 'patch' },
          { type: 'revert', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'chore', release: false },
          { type: 'refactor', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'build', release: 'patch' },
          { type: 'ci', release: 'patch' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'npm run format:file CHANGELOG.md',
      },
    ],
    ['@semantic-release/npm', { tarballDir: 'dist' }],
    '@semantic-release/git',
    [
      '@semantic-release/github',
      {
        assets: 'dist/*.tgz',
      },
    ],
  ],
  preset: 'conventionalcommits',
  presetConfig: {
    /**
     * Types from the Conventional Changelog conventionalcommits.org convention.
     * The types are used as they were in version 4.5.0, of which the link to
     * the exact location is shown below. The only change to the types array is
     * whether some types are hidden or not.
     *
     * https://github.com/conventional-changelog/conventional-changelog/blob/conventional-changelog-conventionalcommits%404.5.0/packages/conventional-changelog-conventionalcommits/writer-opts.js#L169
     */
    types: [
      { type: 'feat', section: 'Features' },
      { type: 'fix', section: 'Bug Fixes' },
      { type: 'perf', section: 'Performance Improvements' },
      { type: 'revert', section: 'Reverts' },
      { type: 'docs', section: 'Documentation' },
      { type: 'style', section: 'Styles' },
      { type: 'chore', section: 'Miscellaneous Chores', hidden: true },
      { type: 'refactor', section: 'Code Refactoring' },
      { type: 'test', section: 'Tests' },
      { type: 'build', section: 'Build System' },
      { type: 'ci', section: 'Continuous Integration' },
    ],
  },
};
