import {
  type Commit,
  type Rule,
  type RuleConfigCondition,
  type RuleOutcome,
} from '@commitlint/types';

type FunctionRule = (
  parsed: Commit,
  when: RuleConfigCondition,
) => RuleOutcome | Promise<RuleOutcome>;

const functionRule: Rule<FunctionRule> = async (
  parsed: Commit,
  when: RuleConfigCondition = 'always',
  functionRule?: FunctionRule,
) => {
  if (functionRule === undefined) {
    return [true];
  }

  if (typeof functionRule !== 'function') {
    throw new TypeError('Not a valid function!');
  }

  return functionRule(parsed, when);
};

export {type FunctionRule, functionRule};
