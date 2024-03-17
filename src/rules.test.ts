import commitlintRules from '@commitlint/rules';
import test from 'ava';
import {functionRule} from './function-rule.js';
import {rules} from './rules.js';

const prefix = 'function-rules/';
const names = Object.keys(rules);
const commitlintRuleNames = Object.keys(commitlintRules).sort();
test('exports the same rules as commitlint', (t) => {
  t.deepEqual(
    names.map((name) => name.slice(prefix.length)),
    commitlintRuleNames,
  );
});

test(`are exported with with "${prefix}" as prefix`, (t) => {
  for (const name of names)
    t.true(
      name.startsWith(prefix),
      `"${name}" does not start with "${prefix}"`,
    );
});

test('have "functionRule" as value', (t) => {
  for (const [name, rule] of Object.entries(rules)) {
    t.is(rule, functionRule, `"${name}" does not have "functionRule" as value`);
  }
});
