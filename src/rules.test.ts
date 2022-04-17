import commitlintRules from '@commitlint/rules';
import functionRule from './function-rule';
import rules from './rules';
import test from 'ava';

const prefix = 'function-rules/';
const names = Object.keys(rules);
const commitlintRuleNames = Object.keys(commitlintRules).sort();

test('exports the same rules as commitlint', (t) => {
  t.deepEqual(
    names.map((e) => e.slice(prefix.length)),
    commitlintRuleNames,
  );
});

test('are exported with with "${prefix}" as prefix', (t) => {
  names.forEach((name) =>
    t.true(
      name.startsWith(prefix),
      `"${name}" does not start with "${prefix}"`,
    ),
  );
});

test('have "functionRule" as value', (t) => {
  Object.entries(rules).forEach(([name, rule]) => {
    t.is(rule, functionRule, `"${name}" does not have "functionRule" as value`);
  });
});
