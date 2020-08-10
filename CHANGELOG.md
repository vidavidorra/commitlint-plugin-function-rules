### [1.0.16](https://github.com/vidavidorra/repo-template/compare/v1.0.15...v1.0.16) (2020-08-09)


### Miscellaneous Chores

* **deps:** update dependency wagoid/commitlint-github-action to v2 ([#78](https://github.com/vidavidorra/repo-template/issues/78)) ([feba4d0](https://github.com/vidavidorra/repo-template/commit/feba4d0ab708f79b1a7b106c5f5f5d90963eda1a))

### [1.0.15](https://github.com/vidavidorra/repo-template/compare/v1.0.14...v1.0.15) (2020-08-09)


### Bug Fixes

* **release:** include style and chore commits in release notes ([e711f97](https://github.com/vidavidorra/repo-template/commit/e711f97987c28bcfae87bba2e86eb0e6dc00a9d4))

### [1.0.14](https://github.com/vidavidorra/repo-template/compare/v1.0.13...v1.0.14) (2020-08-09)


### Bug Fixes

* **release:** release patch on `chore(deps)` commits ([766a570](https://github.com/vidavidorra/repo-template/commit/766a5702c38a47d3b48f1c7da9ee121f8572a172))

### [1.0.13](https://github.com/vidavidorra/repo-template/compare/v1.0.12...v1.0.13) (2020-08-01)


### Bug Fixes

* use ESLint ignore file for ESLint and Prettier ([05c4893](https://github.com/vidavidorra/repo-template/commit/05c48938c8c0007a76a53aa12ffce3a8c1c1bb0d))
* use json as extention in ESLint ([ca334fe](https://github.com/vidavidorra/repo-template/commit/ca334fed58fa86633c268f64a7f6e83e0f73129c))
* **deps:** remove unused `chalk-cli` and `concurrently` packages ([ae884e6](https://github.com/vidavidorra/repo-template/commit/ae884e60d5212a27962c13aa47b0be4ae95cdd71))
* also check non-ESLint formatting during lint script ([384c3c2](https://github.com/vidavidorra/repo-template/commit/384c3c217fc32e325fbab25039f8bd3b68272af8))
* format files during lint-staged for JS, TS and JSON files ([09f5b5e](https://github.com/vidavidorra/repo-template/commit/09f5b5e0ed5b220b3fa06e796ce0b5da3a8f8764))
* remove duplicate `.ts` extention from lint-staged ([a745e60](https://github.com/vidavidorra/repo-template/commit/a745e6024645c24cc622208392f6ed0a20e97e27))

### [1.0.12](https://github.com/vidavidorra/repo-template/compare/v1.0.11...v1.0.12) (2020-08-01)


### Continuous Integration

* **renovate:** auto-merge devDependencies ([7629beb](https://github.com/vidavidorra/repo-template/commit/7629beb591ddfdef6507598705a440089db950c9))

### [1.0.11](https://github.com/vidavidorra/repo-template/compare/v1.0.10...v1.0.11) (2020-07-31)


### Continuous Integration

* **release:** increase build workflow to 15 minutes ([74e807d](https://github.com/vidavidorra/repo-template/commit/74e807dadb71d31abaa8e3aed432ac060ac463da))

### [1.0.10](https://github.com/vidavidorra/repo-template/compare/v1.0.9...v1.0.10) (2020-07-31)


### Bug Fixes

* ignore change log during linting and formatting ([9df8e59](https://github.com/vidavidorra/repo-template/commit/9df8e596d10bec74c460b2c6776598c3ef0d9938))


### Documentation

* make change log consistent with semantic-release ([9fad818](https://github.com/vidavidorra/repo-template/commit/9fad8189d729c09fa5fcbebf72c0ebaffbbfc66f))

### [1.0.9](https://github.com/vidavidorra/repo-template/compare/v1.0.8...v1.0.9) (2020-07-31)


### Bug Fixes

* **ci:** enable workflows on Renovate branches ([74a3693](https://github.com/vidavidorra/repo-template/commit/74a3693f565c1cf998101868d1de3a5389852a67))
* **eslint:** remove `plugin:@typescript-eslint/eslint-recommended` ([b915516](https://github.com/vidavidorra/repo-template/commit/b915516cc3123661236d5019aa6649e16ff38dde))
* **release:** install and configure semantic-release ([4c79e2c](https://github.com/vidavidorra/repo-template/commit/4c79e2cd1e3e96d082f6db0c35fbc1735f1f0c7e))
* **renovate:** disable masterIssueApproval for major updates ([32d6524](https://github.com/vidavidorra/repo-template/commit/32d6524bc375c0ccdda0b12bb47ebb7fb0c5986c))
* **renovate:** ignore hourly PR limit from preset ([1dc9eb0](https://github.com/vidavidorra/repo-template/commit/1dc9eb053fe7f74ad7786a886cc4d9849b8800f2))
* **renovate:** schedule monthly by default and any time for dependencies ([9a015c3](https://github.com/vidavidorra/repo-template/commit/9a015c36314bf293ace554a073c96d85ab132928))
* **renovate:** schedule on the first day of the month ([5ef6274](https://github.com/vidavidorra/repo-template/commit/5ef62745c63fdfe47683f742825cea22e757cc5a))


### Continuous Integration

* add GITHUB_TOKEN to release job of build workflow ([931ec82](https://github.com/vidavidorra/repo-template/commit/931ec82ac72540435eebc010a4cca53770909e4d))
* combine lint and release workflows and use semantic-release ([f3441aa](https://github.com/vidavidorra/repo-template/commit/f3441aae820b73916d391cb6932bd072ce1da4d9))
* make sure the release step uses its own credentials ([dbb29b7](https://github.com/vidavidorra/repo-template/commit/dbb29b7891daf418d9a01d1bad6af45839d80711))
* use SEMANTIC_RELEASE_GITHUB_TOKEN for release ([29cc325](https://github.com/vidavidorra/repo-template/commit/29cc325c73be36743a643ca61ee41eb77dc7a84a))

### [1.0.8](https://github.com/vidavidorra/repo-template/compare/v1.0.7...v1.0.8) (2020-05-18)

### Bug Fixes

- **release:** create GitHub release from vidavidorra-renovate user ([3ec1c73](https://github.com/vidavidorra/repo-template/commit/3ec1c7370528fbd203f36748e59759f21f9d0aee))

### [1.0.7](https://github.com/vidavidorra/repo-template/compare/v1.0.6...v1.0.7) (2020-05-18)

### Bug Fixes

- **release:** checkout using token ([5727071](https://github.com/vidavidorra/repo-template/commit/57270713b1c1cdef0196e986b2d5a7df3e9dc4b8))
- **release:** release using token ([6f3996d](https://github.com/vidavidorra/repo-template/commit/6f3996d55cdf48c83790a746650f365e3a838530))
- **release:** set vidavidorra-release git user ([33f5925](https://github.com/vidavidorra/repo-template/commit/33f59258e5bd584ecb3b7a35c044eb74530c0f81))

### [1.0.6](https://github.com/vidavidorra/repo-template/compare/v1.0.5...v1.0.6) (2020-05-06)

### Bug Fixes

- **ci:** add check for formatting ([939d34a](https://github.com/vidavidorra/repo-template/commit/939d34a8e4a493d85323fbdeb2be9cd199db2dd7))
- **ci:** add timeouts to workflows ([90eef59](https://github.com/vidavidorra/repo-template/commit/90eef5982cda5a8d120a61ad23060b31501058dc))
- **ci:** use --ignore-scripts flag on npm install (changes in 3bb9d19) ([5034e24](https://github.com/vidavidorra/repo-template/commit/5034e242201975a20ed55e2c5e8709b80693db2b))
- **docs:** add GitHub settings section ([b9d37a5](https://github.com/vidavidorra/repo-template/commit/b9d37a51ebb0e94de674213cb6e2aedc109a515f))
- **docs:** add Renovate section ([d0bd8f5](https://github.com/vidavidorra/repo-template/commit/d0bd8f5b61318b45aa87c969b9d8d4af1678f0af))
- **release:** format changelog after generating it ([eb307bb](https://github.com/vidavidorra/repo-template/commit/eb307bb4942af999ef2a53c626784e341a790d07))
- **renovate:** ignore `prHourlyLimit2` preset from `config:base` ([1af002f](https://github.com/vidavidorra/repo-template/commit/1af002fc21a40fb06e9019171416e348a9d8d2cc))
- **renovate:** update config, o.a. add master issue and monthly dev deps ([c1f4fa6](https://github.com/vidavidorra/repo-template/commit/c1f4fa68bf05feeffc88cef613e5244aee47eace))
- **style:** set Prettier `trailingComma` to `all` ([7d0a9bc](https://github.com/vidavidorra/repo-template/commit/7d0a9bc285d89f1bc18b2195d027331db06d936a))

### [1.0.5](https://github.com/vidavidorra/repo-template/compare/v1.0.4...v1.0.5) (2020-04-06)

### Bug Fixes

- **release:** add changelog section to GitHub release ([562b480](https://github.com/vidavidorra/repo-template/commit/562b4804b842d43150a06d4ce9c07b90ae9eb1da))
- **renovate:** schedule dev dependencies on monday and friday ([07f7acd](https://github.com/vidavidorra/repo-template/commit/07f7acd3ab2ff34d110957df528a8795d88d5b23))
- configure ESLint to lint .\* configfiles too ([f4e680d](https://github.com/vidavidorra/repo-template/commit/f4e680de35529597e4afa56dd7bb2c0976ae2ded))

### [1.0.4](https://github.com/vidavidorra/repo-template/compare/v1.0.3...v1.0.4) (2020-03-27)

### Bug Fixes

- pin actions in workflows ([6b45c5d](https://github.com/vidavidorra/repo-template/commit/6b45c5dcdea467b002729e01ca88dbbddc7edb85))
- remove unused registry-url from setup-node arguments ([6ee62ab](https://github.com/vidavidorra/repo-template/commit/6ee62abe7a3216f43a2959c70c19deeb4e3a7dd6))
- save exact npm package versions ([7210f37](https://github.com/vidavidorra/repo-template/commit/7210f3746e818037cd58f4ed4c0c4cb032410b4c))
- set package to private ([f91af23](https://github.com/vidavidorra/repo-template/commit/f91af23e166394bd143bf0b669abfaa0f28c4117))

### [1.0.3](https://github.com/vidavidorra/repo-template/compare/v1.0.2...v1.0.3) (2020-03-22)

### Bug Fixes

- **release:** add standard-version configuration to check the branch ([054b3f2](https://github.com/vidavidorra/repo-template/commit/054b3f2b6f36dc6433bf363df181914066b65bb0))

### [1.0.2](https://github.com/vidavidorra/repo-template/compare/v1.0.1...v1.0.2) (2020-03-22)

### Bug Fixes

- **release:** add next-standard-version package and release script ([3918c18](https://github.com/vidavidorra/repo-template/commit/3918c184c6529d33a6f6262db7c1697ddb0006c7))

### [1.0.1](https://github.com/vidavidorra/repo-template/compare/v1.0.0...v1.0.1) (2020-03-22)

### Bug Fixes

- **deps:** add git attributes for Prettier major update changes ([cdfa4af](https://github.com/vidavidorra/repo-template/commit/cdfa4af68d887fca83395b75fadd0b4b1889c5b1))
- **lint:** update lint config to run prettier ([6f961cb](https://github.com/vidavidorra/repo-template/commit/6f961cba94a4f1d29b8fe9a3afa32e0f90d9f0c1))
- **release:** use updated release script without github-push-action dep ([7453445](https://github.com/vidavidorra/repo-template/commit/74534458a1e83b42bc8b8524efda81c5d9df0f10))
- remove @types/node package ([da5668e](https://github.com/vidavidorra/repo-template/commit/da5668ed2673a968ad987c435c137d3b20a7adb3))
- remove typescript configuration ([9862ec4](https://github.com/vidavidorra/repo-template/commit/9862ec4d1b238c488dc3447e50ff5fb900febc19))

## 1.0.0 (2020-03-16)

### Features

- add lint workflows and update generic configs ([2ee6912](https://github.com/vidavidorra/repo-template/commit/2ee691247b656456eb97436c257c46b9fb955818))
- add Renovate to automatically update dependencies ([4021f01](https://github.com/vidavidorra/repo-template/commit/4021f0118d1f445e4a39a95cbcdd2dba52c70051))

### Bug Fixes

- **ci:** revert commitlint workflow to checkout v1 ([134e36d](https://github.com/vidavidorra/repo-template/commit/134e36dc47fea25980d6bcf7074be61f2521fbdf))
- **ci:** use checkout v2 with depth 0 for commitlint workflow ([1d04350](https://github.com/vidavidorra/repo-template/commit/1d04350a2c06ffd7b9a6f471dac5da158ca26612))
- add @types/node ([2f1ea96](https://github.com/vidavidorra/repo-template/commit/2f1ea967780af1d384daf7882f233c1e89ef1ef1))
- add configuration file for standard-version ([14c70de](https://github.com/vidavidorra/repo-template/commit/14c70de4ce3b80c9a0f05024b5123fb633a0608b))
- remove `git add` from lint-staged ([9ca416a](https://github.com/vidavidorra/repo-template/commit/9ca416aaac4fe3130a5c6f2846532a948c0008e9))
