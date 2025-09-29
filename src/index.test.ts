import {type RuleOutcome} from '@commitlint/types';
import test from 'ava';
import load19x from '@commitlint/load-19.x';
import lint19x from '@commitlint/lint-19.x';
import load20x from '@commitlint/load-20.x';
import lint20x from '@commitlint/lint-20.x';
import {rules} from './rules.js';
import * as plugin from './index.js';

test('exports rules', (t) => {
  t.is(plugin.rules, rules);
});

/* eslint-disable @typescript-eslint/naming-convention */
const versions = {
  '19.x': {load: load19x, lint: lint19x},
  '20.x': {load: load20x, lint: lint20x},
} as const;
/* eslint-enable @typescript-eslint/naming-convention */

const loadPlugin = test.macro<[keyof typeof versions]>({
  async exec(t, version) {
    /**
     * Specify the package file, which doesn't contain a configuration, to
     * prevent `@commitlint/load` from searching the filesystem for an actual
     * configuration.
     */
    await t.notThrowsAsync(
      versions[version].load({plugins: [plugin]}, {file: 'package.json'}),
    );
  },
  title(_, version) {
    return `@commitlint/load@${version} can load the plugin`;
  },
});

test(loadPlugin, '19.x');
test(loadPlugin, '20.x');

const lintUsingPluginRules = test.macro<[keyof typeof versions]>({
  async exec(t, version) {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    for await (const rule of Object.keys(plugin.rules)) {
      const configs: Array<{async: boolean; ruleOutcome: RuleOutcome}> = [
        {async: false, ruleOutcome: [true]},
        {async: false, ruleOutcome: [false, `error message from ${rule}`]},
        {async: true, ruleOutcome: [true]},
        {async: true, ruleOutcome: [false, `error message from ${rule}`]},
      ];

      // eslint-disable-next-line @typescript-eslint/await-thenable
      for await (const config of configs) {
        const report = await versions[version].lint(
          'chore: basic commit message',
          {
            [rule]: [
              2,
              'always',
              config.async
                ? async () => config.ruleOutcome
                : () => config.ruleOutcome,
            ],
          },
          {plugins: {'function-rules': plugin}},
        );

        const message = `rule "${rule}" can't be used by commitlint`;
        t.is(report.valid, config.ruleOutcome[0], message);
        if (config.ruleOutcome[1] !== undefined) {
          t.is(report.warnings.length, 0, message);
          t.is(report.errors.length, 1, message);
          t.is(report.errors[0].name, rule, message);
          t.is(report.errors[0].message, config.ruleOutcome[1], message);
        }
      }
    }
  },
  title(_, version) {
    return `@commitlint/lint@${version} can use the plugin rules`;
  },
});

test(lintUsingPluginRules, '19.x');
test(lintUsingPluginRules, '20.x');
