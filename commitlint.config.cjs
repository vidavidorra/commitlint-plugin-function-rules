module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'function-rules/header-max-length'(parsed) {
          const {length} = parsed.header;
          const maxLength = 100;
          const maxDepsLength = 200;
          const isDepsCommit =
            /^(chore|fix)/.test(parsed.type) && parsed.scope === 'deps';
          if (
            (isDepsCommit && length > maxDepsLength) ||
            (!isDepsCommit && length > maxLength)
          ) {
            const type = isDepsCommit ? 'for dependency commits ' : '';
            const maxCharacters = isDepsCommit ? maxDepsLength : maxLength;
            return [
              false,
              [
                `header ${type}must not be longer than ${maxCharacters}`,
                `characters, current length is ${length}`,
              ].join(' '),
            ];
          }

          return [true];
        },
      },
    },
  ],
  rules: {
    'body-max-line-length': [0],
    'footer-max-line-length': [0],
    'header-max-length': [0],
    'function-rules/header-max-length': [2, 'always'],
  },
};
