import {type RuleOutcome} from '@commitlint/types';
import test from 'ava';
import type commitlintLoad from '@commitlint/load-17.x';
import type commitlintLint from '@commitlint/lint-17.x';
import {rules} from './rules.js';
import {plugin} from './plugin.js';

test('exports rules', (t) => {
  t.is(plugin.rules, rules);
});

const loadPlugin = test.macro<[string]>({
  async exec(t, version) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const module = await import(`@commitlint/load-${version}`);
    const load = module.default.default as typeof commitlintLoad.default;
    /**
     * Specify the package file, which doesn't contain a configuration, to
     * prevent `@commitlint/load` from searching the filesystem for an actual
     * configuration.
     */
    await t.notThrowsAsync(load({plugins: [plugin]}, {file: 'package.json'}));
  },
  title(_, version) {
    return `@commitlint/load@${version} can load the plugin`;
  },
});

test(loadPlugin, '9.x');
test(loadPlugin, '10.x');
test(loadPlugin, '11.x');
test(loadPlugin, '12.x');
test(loadPlugin, '13.x');
test(loadPlugin, '14.x');
test(loadPlugin, '15.x');
test(loadPlugin, '16.x');
test(loadPlugin, '17.x');
test(loadPlugin, '18.x');

const lintUsingPluginRules = test.macro<[string]>({
  async exec(t, version) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const module = await import(`@commitlint/lint-${version}`);
    const lint = module.default.default as typeof commitlintLint.default;

    for await (const rule of Object.keys(plugin.rules)) {
      const configs: Array<{async: boolean; ruleOutcome: RuleOutcome}> = [
        {async: false, ruleOutcome: [true]},
        {async: false, ruleOutcome: [false, `error message from ${rule}`]},
        {async: true, ruleOutcome: [true]},
        {async: true, ruleOutcome: [false, `error message from ${rule}`]},
      ];

      for await (const config of configs) {
        const report = await lint(
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

test(lintUsingPluginRules, '9.x');
test(lintUsingPluginRules, '10.x');
test(lintUsingPluginRules, '11.x');
test(lintUsingPluginRules, '12.x');
test(lintUsingPluginRules, '13.x');
test(lintUsingPluginRules, '14.x');
test(lintUsingPluginRules, '15.x');
test(lintUsingPluginRules, '16.x');
test(lintUsingPluginRules, '17.x');
test(lintUsingPluginRules, '18.x');
