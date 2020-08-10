const defaultConfig = {
  extends: [
    'eslint:recommended',
    'plugin:json/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es2020: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'sort-imports': 'error',
  },
};

const config = defaultConfig;
config.overrides = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    /**
     * The Prettier recommended configuration must remain the configuration that
     * is extended last. Therefore, this overrides `extends` completely.
     */
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: defaultConfig.plugins.concat(['@typescript-eslint']),
  },
];

module.exports = config;
