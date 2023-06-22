## [2.0.1-beta.3](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v2.0.1-beta.2...v2.0.1-beta.3) (2023-06-22)

### Styles

- use bold link for branding in header ([5bb540f](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/5bb540f95a23b63fa3083c3604ba12067b0981d1))

### Continuous Integration

- include Node.js v20 in testing and drop, almost EOL, v19 ([55a1856](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/55a185616bf0c7c315aaf3c81701e9125865325a))

## [2.0.1-beta.2](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v2.0.1-beta.1...v2.0.1-beta.2) (2023-06-22)

### Build System

- change ESM import to plugin to prevent import errors ([c185ce3](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/c185ce3e4151fd943366bae022fede85828c8c48))

### Continuous Integration

- rename commitlint config to CommonJS to prevent commitlint module load error ([5c8627a](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/5c8627a73da97597176ca123f5ffc74ea0a99b78))

## [2.0.1-beta.1](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v2.0.0...v2.0.1-beta.1) (2023-06-21)

### ⚠ BREAKING CHANGES

- change to ES module, export is still an CommonJS module as that's required by commitlint

### Code Refactoring

- change to ES module, export is still an CommonJS module as that's required by commitlint ([bf15a8a](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/bf15a8ab3f19c939ff5c69b45a274fc45ecddc5d))

## [2.0.0](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.7.1...v2.0.0) (2023-06-19)

### ⚠ BREAKING CHANGES

- drop support for Node.js v12, which is EOL, and v14, which is EOL in a couple days

### Features

- drop support for Node.js v12, which is EOL, and v14, which is EOL in a couple days ([91c872b](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/91c872b77560fbe79008536ae6a7f2ba2808442b))

### Continuous Integration

- **renovate:** disable for commitlint v16 final version ([7cb48af](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/7cb48af598025adc12ad8b54c0a2da3511ad49d4))

## [2.0.0-beta.2](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-06-19)

### Continuous Integration

- **renovate:** disable for commitlint v16 final version ([7cb48af](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/7cb48af598025adc12ad8b54c0a2da3511ad49d4))

## [2.0.0-beta.1](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.7.1...v2.0.0-beta.1) (2023-04-17)

### ⚠ BREAKING CHANGES

- drop support for Node.js v12, which is EOL, and v14, which is EOL in a couple days

### Features

- drop support for Node.js v12, which is EOL, and v14, which is EOL in a couple days ([91c872b](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/91c872b77560fbe79008536ae6a7f2ba2808442b))

### [1.7.1](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.7.0...v1.7.1) (2022-05-22)

### Tests

- add commitlint v17.x ([6ac7b31](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/6ac7b313d582ebe7356ed5725c84fbc3fe92c85c))

## [1.7.0](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.6.2...v1.7.0) (2022-05-22)

### Features

- **deps:** update dependency @commitlint/lint to v17 ([#191](https://github.com/vidavidorra/commitlint-plugin-function-rules/issues/191)) ([0257f6a](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/0257f6a11443477e681d8d9532cc1e6239dcaccf))

### [1.6.2](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.6.1...v1.6.2) (2022-04-17)

### Continuous Integration

- use reusable workflows from vidavidorra/.github ([#187](https://github.com/vidavidorra/commitlint-plugin-function-rules/issues/187)) ([79e7199](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/79e719969fd6e9754d20aa9065188ed26d4e948f))

### [1.6.1](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.6.0...v1.6.1) (2022-04-17)

### Bug Fixes

- **function-rule:** return success if the function rule is `undefined` ([82047c3](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/82047c36d3e197ba815e5e04c10d17a20de7544a))

### Tests

- use AVA for testing instead of Jest ([3c4a469](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/3c4a46940c5a6f868edf5ed815e1f7d4843e3fff))

### Code Refactoring

- **function-rule:** fail fast by checking potential failures and quick returns first ([c303b72](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/c303b729c6dd1fa217dd51ec0e4cf563a7fdc769))
- **rules:** remove `Rule<unknown>` cast ([8e09a33](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/8e09a330f28b2e2a208ac339368324f980d999c9)), closes [conventional-changelog/commitlint#2146](https://github.com/conventional-changelog/commitlint/issues/2146)

### Continuous Integration

- remove build check from pre-commit check as it is already covered by the test ([84e415f](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/84e415fb20d275d058995a266554ceb7897725ef))
- use `npm test` script for CI tests ([acbb2c9](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/acbb2c96165359f776fafe72f774770a66b2dc32))

## [1.6.0](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.5.1...v1.6.0) (2021-12-26)

### Features

- add support for commitlint v15 and v16 ([#178](https://github.com/vidavidorra/commitlint-plugin-function-rules/issues/178)) ([324946f](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/324946f166b5a9e6f3b14234cf71a78a62f3efde))

### [1.5.1](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.5.0...v1.5.1) (2021-11-12)

### Continuous Integration

- **renovate:** disable for commitlint v13 final version ([7c23695](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/7c236954ecc33286cb9a1b1596871d5da4d1b30d))

## [1.5.0](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.4.0...v1.5.0) (2021-11-11)

### Features

- add support for commitlint v14 ([3c5acf5](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/3c5acf58a1e714eb634476c8964d57a7dc44c8fa))

## [1.4.0](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.3.2...v1.4.0) (2021-09-17)

### ⚠ BREAKING CHANGES

- drop support for node 10

### Features

- add support for commitlint v13 ([fc435bb](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/fc435bb94f7e2ec817bdfac714dc33cc05b51f77))
- **rules:** add `subject-exclamation-mark` rule for commitlint v13 ([3893fc4](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/3893fc4ad75d755fe4a91841479c849812749721))
- **rules:** add `trailer-exists` rule for commitlint v13 ([829d2c6](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/829d2c667951a02b43ce3a7a9824b75c5504c8a1))

### Tests

- add tests for commitlint v13 ([e95b254](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/e95b254cfcd7bee3bb3b9b719682d3386060e6dc))

### Continuous Integration

- **renovate:** disable for commitlint v12 final version ([7b648d8](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/7b648d84d3dfccfc0cb90ceee23aaa3816c20407))

### Build System

- drop support for node 10 ([6c05e9a](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/6c05e9a485e056f8d4da531dbb465c4fa51b9daa))

### [1.3.2](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.3.1...v1.3.2) (2021-02-27)

### Bug Fixes

- move @commitlint/types dependency to dev dependencies ([cbec26a](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/cbec26ac8e4090e68d4786cfaa8e19c96483992e)), closes [#150](https://github.com/vidavidorra/commitlint-plugin-function-rules/issues/150)

### Styles

- add ESLint ignore file to enable linting of dotfiles ([69b7675](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/69b767587d29883ae5613bf9eef6f10b55397aa1))

### [1.3.1](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.3.0...v1.3.1) (2021-02-24)

### Bug Fixes

- **deps:** specify lower peer dependency range as v9.1.2 ([a9f08a5](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/a9f08a5b17b51c355e2093f7bcf11617969e2445)), closes [#147](https://github.com/vidavidorra/commitlint-plugin-function-rules/issues/147)

## [1.3.0](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.2.0...v1.3.0) (2021-02-24)

### Features

- **deps:** update dependency @commitlint/lint to v12 ([9be4bf9](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/9be4bf9d81c5026aa9922a162422e179da14229e))

## [1.2.0](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.24...v1.2.0) (2021-02-24)

### Features

- **rules:** add `body-full-stop` rule ([93ec5b8](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/93ec5b8364c3e9a0474d96d2c735f0af55707ad2))

### [1.1.24](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.23...v1.1.24) (2021-02-24)

### Continuous Integration

- **renovate:** group commitlint peer dependencies ([9b5253c](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/9b5253c831057a4ab95cf001b32050a847e5c063))

### [1.1.23](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.22...v1.1.23) (2021-02-14)

### Build System

- remove `postinstall` script from the published package ([7898ead](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/7898ead1facccfcfe217a2e3ea0313c954d9c405)), closes [#142](https://github.com/vidavidorra/commitlint-plugin-function-rules/issues/142)

### [1.1.22](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.21...v1.1.22) (2021-02-13)

### Continuous Integration

- **renovate:** use shared configuration from `vidavidorra/.github` ([2dd5710](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/2dd57106fcd59c2126ce37498af6955cbdefbea8))

### Documentation

- add 2021 to license ([b57d23e](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/b57d23e025d918790c59203e495bc5d13a517ff1))

### [1.1.21](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.20...v1.1.21) (2021-02-13)

### Continuous Integration

- remove `chore` commit type from changelog (generation) ([8b658c6](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/8b658c638940e03828a76e06da5852c87e4dfa64))
- **release:** format changelog during release ([90611dd](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/90611dd29d72c93d089f04d1c167ecc45a82ff17))

### Build System

- set `esModuleInterop` to `true` to fix `@commitlint/types` import ([5bc52ea](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/5bc52eab6aff64d2481e3bf7383d599ec7647e4b))

### [1.1.20](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.19...v1.1.20) (2020-10-25)

### Documentation

- fix contributing guide link ([9cdabda](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/9cdabda5242ea2c5a6955967a0b356c2596a924e))

### [1.1.19](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.18...v1.1.19) (2020-10-24)

### Documentation

- add badge for supported Node.js version ([3098f03](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/3098f031c959e7a379435f8415df796c2167ad13))
- link Node.js badge to Node.js releases page ([3871927](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/3871927a7d6b59577d0f2f9e8e0b85b6fa798af5))

### [1.1.18](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.17...v1.1.18) (2020-10-24)

### Continuous Integration

- set test name with Node.js version in build workflow ([bb06e2e](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/bb06e2ec1a56b5c307a083dfd6c60c827e70395c))

### [1.1.17](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.16...v1.1.17) (2020-10-24)

### Bug Fixes

- **package:** specify supported node engine to v10 (LTS) ([274ca4d](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/274ca4db478ae029e601203f8e18c480ebcb4d41))

### [1.1.16](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.15...v1.1.16) (2020-10-20)

### Documentation

- specify `rules` as object in the usage example ([ce8555e](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/ce8555e0d29a961e98726dd04f8a51061ff76d72))

### [1.1.15](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.14...v1.1.15) (2020-10-19)

### Documentation

- add documentation with my new readme style ([c457afd](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/c457afd554c8b8d1e15bd01af16480761b4edee0))

### [1.1.14](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.13...v1.1.14) (2020-10-07)

### Continuous Integration

- separate build check from lint and check build pre-commit ([30c5dc4](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/30c5dc4a895383a04e058cda807cdab741ca2904))

### [1.1.13](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.12...v1.1.13) (2020-10-02)

### Continuous Integration

- run full tests in lint-staged ([c772b99](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/c772b9919c17b92115f4ed76bf370e898f2e859f))

### [1.1.12](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.11...v1.1.12) (2020-10-02)

### Continuous Integration

- **renovate:** fix accidental removal of `pinDependencies` ([8e950fd](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/8e950fd8cd7682374f76f67cd3aba576d18d9a00))
- **renovate:** migrate config to Renovate > v21.28.0 ([60d89b5](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/60d89b5ccd914bf96386d78c5b0d2d9e97ed1e98))

### [1.1.11](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.10...v1.1.11) (2020-09-27)

### Bug Fixes

- use `Plugin` from the commitlint types ([33bab71](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/33bab717e33c9a5f94a093d8a479b46a42818de9))

### Build System

- add scripts to clean and build with clean first ([8782e3a](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/8782e3ae0816a6d1c54dfeb2c0e727ed5c82dbfb))

### [1.1.10](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.9...v1.1.10) (2020-09-27)

### Continuous Integration

- trigger release ([82c563b](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/82c563b89c1d43324e26cd241ee0e79d0baff0b8))

### [1.1.9](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.8...v1.1.9) (2020-09-27)

### Bug Fixes

- **package:** correct 'types' of package ([9df7d4e](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/9df7d4e6cccffee8fa8c32a0b30a4dce9818cd04))

### [1.1.8](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.7...v1.1.8) (2020-09-27)

### Documentation

- add npm version badge ([a0fff5f](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/a0fff5fb4b888e2604b2b28a3032e9d4bdbe5fd4))

### [1.1.7](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.6...v1.1.7) (2020-09-24)

### Continuous Integration

- test and build with Node v14 ([3586da5](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/3586da5210356776efa3b485246e6a6f461f88a0))

### [1.1.6](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.5...v1.1.6) (2020-09-24)

### Bug Fixes

- **package:** correct `main` path ([90d2bde](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/90d2bdeb212163966bea48200a51d99bebd649a4))

### Documentation

- correct description of CI build ([824ba4e](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/824ba4e99fe2b3e4c51fffa8316f033bbe610031))

### [1.1.5](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.4...v1.1.5) (2020-09-20)

### Continuous Integration

- **release:** add npm tarball to GitHub publish ([dc1db2b](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/dc1db2b99b6486de6536823fc494ed681034ab82))

### [1.1.4](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.3...v1.1.4) (2020-09-20)

### Continuous Integration

- **release:** disable release on chore commits ([834bd70](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/834bd70a655d16c1210e2a83b1750c5a6c62049a))

### [1.1.3](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.2...v1.1.3) (2020-09-20)

### Continuous Integration

- **renovate:** disable for aliased packages with final version ([e216ab2](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/e216ab287c3917503a2c5ae25b6a795b330b7643))

### Continuous Integration

- **commits:** add commitlint configuration to allow longer dependency commits ([d36c8ab](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/d36c8ab6fddbb4971cc725846d8b81e232d0d0b4))

### [1.1.1](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.1.0...v1.1.1) (2020-09-20)

### Continuous Integration

- **deps:** disable auto-merge for peer dependencies ([f9b4991](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/f9b499170c65ed323ec27a07ef54dcd8668cf51e))
- **deps:** use Renovate default commit scope for `devDependencies` and `dependencies` ([b4d864c](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/b4d864c7d76f407f66840631bb10d7591e35845f))

## [1.1.0](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.0.13...v1.1.0) (2020-09-20)

### Features

- add support for @commitlint/lint v10.x ([493ad35](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/493ad3507a4c7c9c5a1e48ae0fc066a47215fb5b))

### [1.0.13](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.0.12...v1.0.13) (2020-09-19)

### Tests

- **end-to-end:** test agains commitlint v9.x, v10.x and v11.x ([9d7715d](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/9d7715d9355483901906582d0cd002b2ffa3b00a))

### [1.0.12](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.0.11...v1.0.12) (2020-09-18)

### Bug Fixes

- **package:** point `main`, `types` and `files` to the correct paths ([df10abf](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/df10abfd07418122088f6af29f49eca5a84501dc))

### Tests

- **end-to-end:** separate load test ([75943e5](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/75943e5004a4865f2d650d62ca38f5fdc0768e25))

### [1.0.11](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.0.10...v1.0.11) (2020-09-18)

### [1.0.10](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.0.9...v1.0.10) (2020-09-18)

### [1.0.9](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.0.8...v1.0.9) (2020-09-17)

### Continuous Integration

- **deps:** separate [@commitlint](https://github.com/commitlint) peer-, dev- and dependencies ([0c42187](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/0c421872968bd8c48106b02a2cbea9074483e458))

### [1.0.8](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.0.7...v1.0.8) (2020-09-16)

### Bug Fixes

- unpin peer dependency and set to major version 9 range ([766f6f0](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/766f6f02f471ec4b90f728856d86340a5875cd8c))

### Tests

- add end-to-end test ([3de942c](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/3de942c8c3750a4b2d4dd69febb29a7c24385bc3))

### Continuous Integration

- check build for type errors when linting ([dec4be8](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/dec4be82de18af68fc886b98880ad4ac507719ff))

### [1.0.7](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.0.6...v1.0.7) (2020-09-14)

### [1.0.6](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.0.5...v1.0.6) (2020-09-14)

### Continuous Integration

- **deps:** separate dev, peer and dependencies in Renovate commits ([40d4358](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/40d43587f8c614fb577fcb02bdd62c496049a0f9))
- **release:** release on peer and regular dependencies ([b7d445a](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/b7d445a5761a4320a7952e1f22346dd21c10ff8b))

### [1.0.5](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.0.4...v1.0.5) (2020-09-13)

### [1.0.4](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.0.3...v1.0.4) (2020-09-12)

### [1.0.3](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.0.2...v1.0.3) (2020-09-07)

### [1.0.2](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.0.1...v1.0.2) (2020-09-07)

### [1.0.1](https://github.com/vidavidorra/commitlint-plugin-function-rules/compare/v1.0.0...v1.0.1) (2020-09-06)

### Continuous Integration

- **release:** build before release to include dist ([4ff37ce](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/4ff37ce50866651bb4404d5de8e0552f385d5b5a))

## 1.0.0 (2020-09-06)

### Features

- add function rule plugin sources and tests ([1a8db80](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/1a8db80329a93b4a087620aae711bab205769e78))

### Documentation

- add code coverage badge ([fb6d27b](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/fb6d27b2c16a15a36b4000afbb0c13864f93f1d2))

### Continuous Integration

- **release:** fix npm env value ([308ffae](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/308ffae48083a06f35202b4cbad95f02325dd835))
- re-enable release step ([58ac7f2](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/58ac7f282555df83f4e2a36da337f92a0ab5e186))
- **release:** publish to npm ([d1cd2aa](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/d1cd2aa6faf7e474bf2331a5aedf4555f34c5fb7))
- add build, test and coverage jobs ([3e42d16](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/3e42d16cd8c69788eff042e68589907bf58fd605))
- disable release step until build and tests are finished ([3e2e92a](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/3e2e92ae0f117bd5faf7cbd2aea49d79dc424819))
- rename job 'build-and-test' to 'build' ([76cb756](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/76cb756d8d7cd48cd4fe4310b3e3a07abc88a395))
- separate build and test jobs ([d4140da](https://github.com/vidavidorra/commitlint-plugin-function-rules/commit/d4140da116a1645cff27a0cf6af5a75802f88090))
