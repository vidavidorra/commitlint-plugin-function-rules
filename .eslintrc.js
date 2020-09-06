const defaultConfig = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: [],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es2020: true,
    node: true,
  },
  rules: {
    'no-restricted-globals': [
      'error',
      /**
       * From Jest global environment.
       * https://github.com/facebook/jest/blob/v26.4.2/packages/jest-globals/src/index.ts#L12-L27
       */
      'jest',
      'expect',
      'it',
      'test',
      'fit',
      'xit',
      'xtest',
      'describe',
      'xdescribe',
      'fdescribe',
      'beforeAll',
      'beforeEach',
      'afterEach',
      'afterAll',
    ],
    'prettier/prettier': 'error',
    'sort-imports': 'error',
  },
};

/**
 * Add to `extends` of `defaultConfig`.
 *
 * The Prettier recommended configuration must be the last extension. See
 * https://github.com/prettier/eslint-plugin-prettier#recommended-configuration.
 *
 * @param  {...configurations} configurations Configuration(s) to add.
 * @return Superset of the `extends` with the given configuration(s) added.
 */
function addToDefaultExtends(...configurations) {
  const prettierConfiguration = 'plugin:prettier/recommended';
  const extendsSuperset = defaultConfig.extends
    .concat(configurations)
    .sort((a, b) => {
      if (b === prettierConfiguration) {
        return -1;
      }
      if (a === prettierConfiguration) {
        return 1;
      }
      return 0;
    });

  return extendsSuperset;
}

const config = defaultConfig;
config.overrides = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: addToDefaultExtends(
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:jest/style',
    ),
    parser: '@typescript-eslint/parser',
    plugins: defaultConfig.plugins.concat(['@typescript-eslint']),
    rules: { ...defaultConfig.rules, 'jest/consistent-test-it': 'error' },
  },
  {
    files: ['**/*.json'],
    extends: addToDefaultExtends('plugin:json/recommended'),
  },
];

module.exports = config;
