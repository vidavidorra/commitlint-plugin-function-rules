# repo-template

A template for creating new repositories.

<a name="toc"></a>

## Table of contents

- [Badges](#badges)
- [Setup](#setup)
- [Checklist](#checklist)
- [License](#license)

## Badges

| Badge                                                                                                                                                                                                                          | Description          | Service              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- | -------------------- |
| <a href="https://github.com/prettier/prettier#readme"><img alt="code style" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>                                                           | Code style           | Prettier             |
| <a href="https://conventionalcommits.org"><img alt="Conventional Commits: 1.0.0" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square"></a>                                             | Commit style         | Conventional Commits |
| <a href="https://renovatebot.com"><img alt="Renovate enabled" src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg?style=flat-square"></a>                                                                       | Dependencies         | Renovate             |
| <a href="https://github.com/vidavidorra/repo-template/actions"><img alt="GitHub workflow status" src="https://img.shields.io/github/workflow/status/vidavidorra/repo-template/Lint%20commit%20messages?style=flat-square"></a> | Lint commit messages | GitHub Actions       |
| <a href="https://github.com/vidavidorra/repo-template/actions"><img alt="GitHub workflow status" src="https://img.shields.io/github/workflow/status/vidavidorra/repo-template/Lint?style=flat-square"></a>                     | Lint                 | GitHub Actions       |

## Setup

After a new repository using this template has been created, make the .

1. Remove files containing content of the template.
   ```shell
   $ rm CHANGELOG.md
   ```
2. Create a temporary checklist and replace the readme with the example.
   ```shell
   $ mv README.md CHECKLIST.md
   $ mv README.example.md README.md
   ```
3. Go through the [checklist](#checklist).
4. Remove the temporary checklist.
   ```shell
   $ rm CHECKLIST.md
   ```

## Checklist

Go through this checklist after creating your repository. It should only take a couple of minutes.

### README.md

- [ ] Is the `<title>` field correct?
- [ ] Is the `<description>` field correct?
- [ ] Are the `<repo-name>` fields correct?
- [ ] Is the date (range) of the license correct?

### `package.json`

- [ ] Is the `name` field correct?
- [ ] Is the `description` field correct?
- [ ] Is the `version` field correct?  
       Use `npm version 0.1.0 --git-tag-version=false` to set the version, `0.1.0` in this example.
- [ ] Is the `author` field correct?
- [ ] Have you added `keywords`?
- [ ] Are the `repository.url`, `bugs` and `homepage` links correct?

### `package-lock.json`

- [ ] Is the `name` field correct?
- [ ] Is the `version` field correct?

### Renovate

- [ ] Is the repository added to [GitHub Renovate](https://github.com/vidavidorra/github-renovate)'s [list of repositories](https://github.com/vidavidorra/github-renovate/blob/v1.0.2/src/renovate-config.js#L19)?
- [ ] Is the Renovate GitHub App enabled on this repository?  
       Settings can be found in the _Installed GitHub Apps_ secion of the GitHub _Organization settings_ or in the _Applications_ section of the GitHub _Personal settings_. Add the repository to the list of selected repositories.

### GitHub settings

- [ ] Is only the _Allow squash merging_ merge option selected?
- [ ] Is _Automatically delete head branches_ enabled?
- [ ] Are _Branch protection rules_ added on the `master` branch?  
       Protection without any of the checkboxes checked.

### Language setup

### Typescript

- [ ] Is there a `tsconfig.json` file?  
       See [vidavidorra/next-standard-version](https://github.com/vidavidorra/next-standard-version) for an example of the file.

## License

This project is licensed under the [GPLv3 license](https://www.gnu.org/licenses/gpl.html).

Copyright © 2019-2020 Jeroen de Bruijn

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
