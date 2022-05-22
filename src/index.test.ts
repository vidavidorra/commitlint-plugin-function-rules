import * as plugin from '.';
import { RuleOutcome } from '@commitlint/types';
import rules from './rules';
import test from 'ava';

test('exports a CommonJS module', (t) => {
  t.is(typeof plugin, 'object');
  t.is(typeof plugin.rules, 'object');
});

test('exports rules', (t) => {
  t.is(plugin.rules, rules);
});

const loadPlugin = test.macro<[string]>({
  async exec(t, version) {
    const load = (await import(`@commitlint/load-${version}`)).default;
    t.true(load !== undefined);
    await t.notThrowsAsync(load({ plugins: [plugin] }));
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

const lintUsingPluginRules = test.macro<[string]>({
  async exec(t, version) {
    const load = (await import(`@commitlint/load-${version}`)).default;
    t.true(load !== undefined);
    const lint = (await import(`@commitlint/lint-${version}`)).default;
    t.true(lint !== undefined);

    for await (const rule of Object.keys(plugin.rules)) {
      const configs: Array<{ async: boolean; ruleOutcome: RuleOutcome }> = [
        { async: false, ruleOutcome: [true] },
        { async: false, ruleOutcome: [false, `error message from ${rule}`] },
        { async: true, ruleOutcome: [true] },
        { async: true, ruleOutcome: [false, `error message from ${rule}`] },
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
          { plugins: { 'function-rules': plugin } },
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
