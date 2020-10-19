# commitlint plugin function rules

[commitlint][commitlint] plugin to use functions as rule value.

- Create custom function, `sync` or `async`, as rule value.
- Create rules that are based on the commit message.
- Write rules with regular expressions.
- Use the same rules that are [available](https://commitlint.js.org/#/reference-rules) in [commitlint][commitlint].

---

[![npm version](https://img.shields.io/npm/v/commitlint-plugin-function-rules?logo=npm&style=flat-square)](https://www.npmjs.com/package/commitlint-plugin-function-rules)
[![npm downloads](https://img.shields.io/npm/dm/commitlint-plugin-function-rules?logo=npm&style=flat-square)](https://www.npmjs.com/package/commitlint-plugin-function-rules)
[![Renovate enabled](https://img.shields.io/badge/Renovate-enabled-brightgreen.svg?logo=renovatebot&logoColor&style=flat-square)](https://renovatebot.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Code coverage](https://img.shields.io/codecov/c/github/vidavidorra/commitlint-plugin-function-rules?logo=codecov&style=flat-square)](https://codecov.io/gh/vidavidorra/commitlint-plugin-function-rules)
[![License](https://img.shields.io/github/license/vidavidorra/commitlint-plugin-function-rules.svg?style=flat-square)](LICENSE.md)

<a name="toc"></a>

## Table of contents

- [Install](#install)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Security policy](#security-policy)
- [License](#license)

## Install

```shell
npm install --save-dev commitlint-plugin-function-rules @commitlint/cli
```

## Usage

Use this plugin in your project's commitlint configuration by specifying it as item in the `plugins` array. All rules have same name as the [commitlint][commitlint] rules, but with the `function-rules` prefix.

> **_Note:_** The available rules are the same as in [commitlint][commitlint], so it is recommended to disable the [commitlint][commitlint] rule when specifying a function rule to avoid undefined behaviour.

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: [
    'header-max-length': [0],  // level: disabled
    'function-rules/header-max-length': [
      2,  // level: error
      'always',
      (parsed) => {
        if (parsed.type === 'chore' && parsed.header.length < 20) {
          return [true];
        }
        return [false, 'chore header must not be longer than 120 characters'];
      },
    ],
  ]
};
```

## Documentation

## Contributing

Please [create an issue](https://github.com/vidavidorra/commitlint-plugin-function-rules/issues/new/choose) if you have a bug report, feature proposal or question that does not yet exist.

Please give this project a star ⭐ if you like it and consider becoming a [sponsor](https://github.com/sponsors/jdbruijn) to support this project.

Refer to the [contributing guide](https://github.com/vidavidorra/.github/CONTRIBUTING.md) detailed information about other contributions, like pull requests.

[![Conventional Commits: 1.0.0](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)
[![Code style](https://img.shields.io/badge/code_style-Prettier-ff69b4.svg?logo=prettier&style=flat-square)](https://github.com/prettier/prettier)
[![Linting](https://img.shields.io/badge/linting-ESLint-lightgrey.svg?logo=eslint&style=flat-square)](https://eslint.org)
[![Lint commit messages](https://img.shields.io/github/workflow/status/vidavidorra/commitlint-plugin-function-rules/Lint%20commit%20messages?logo=github&label=Lint%20commit%20messages&style=flat-square)](https://github.com/vidavidorra/commitlint-plugin-function-rules/actions)
[![Build](https://img.shields.io/github/workflow/status/vidavidorra/commitlint-plugin-function-rules/Build?logo=github&label=Build&style=flat-square)](https://github.com/vidavidorra/commitlint-plugin-function-rules/actions)

## Security policy

Please refer to the [Security Policy on GitHub](https://github.com/vidavidorra/commitlint-plugin-function-rules/security/) for the security policy.

## License

This project is licensed under the [GPLv3 license](https://www.gnu.org/licenses/gpl.html).

Copyright © 2020 Jeroen de Bruijn

<details><summary>License details.</summary>
<p>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.

The full text of the license is available in the [LICENSE](LICENSE.md) file in this repository and [online](https://www.gnu.org/licenses/gpl.html).

</details>

<!-- References -->

[commitlint]: https://commitlint.js.org/
