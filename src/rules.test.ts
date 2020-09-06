import { describe, expect, it } from '@jest/globals';
import commitlintRules from '@commitlint/rules';
import functionRule from './function-rule';
import rules from './rules';

describe('rules', (): void => {
  const prefix = 'function-rules/';
  const names = Object.keys(rules);
  const commitlintRuleNames = Object.keys(commitlintRules).sort();

  it('exports the same rules as commitlint', () => {
    const strippedNames = names.map((e) => {
      return e.replace(new RegExp(`^${prefix}`), '');
    });

    expect(strippedNames).toEqual(commitlintRuleNames);
  });

  it(`are exported with with '${prefix}' as prefix`, () => {
    const everyNameHasPrefix = names.every((e) => e.startsWith(prefix));

    expect(everyNameHasPrefix).toBe(true);
  });

  it(`have 'functionRule' as value`, () => {
    const values = Object.values(rules);
    const everyValueIsFunctionRule = values.every((e) => e === functionRule);

    expect(everyValueIsFunctionRule).toBe(true);
  });
});
