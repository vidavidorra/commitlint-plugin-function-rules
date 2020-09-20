module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'header-max-length-deps': (parsed) => {
          const config = {
            maxLength: 100,
            dependencyCommit: {
              type: /^(chore|fix)/,
              scope: /(peer-)?deps/,
              maxLength: 200,
            },
          };

          const length = parsed.header.length;
          const isDepsCommit =
            config.dependencyCommit.type.test(parsed.type) &&
            config.dependencyCommit.scope.test(parsed.scope);

          if (length <= config.maxLength) {
            return [true];
          }

          if (!isDepsCommit && length > config.maxLength) {
            return [
              false,
              [
                `header must not be longer than ${config.maxLength}`,
                `characters, current length is ${length}`,
              ].join(' '),
            ];
          }

          if (isDepsCommit && length > config.dependencyCommit.maxLength) {
            return [
              false,
              [
                `header for dependency commits must not be longer than`,
                `${config.dependencyCommit.maxLength} characters, current`,
                `length is ${length}`,
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
    'header-max-length-deps': [2, 'always'],
  },
};
