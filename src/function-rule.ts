import {
  Commit,
  Rule,
  RuleConfigCondition,
  RuleOutcome,
} from '@commitlint/types';

type FunctionRule = (
  parsed: Commit,
  when: RuleConfigCondition,
) => RuleOutcome | Promise<RuleOutcome>;

const functionRule: Rule<FunctionRule> = (
  parsed: Commit,
  when: RuleConfigCondition = 'always',
  value: FunctionRule | undefined,
) => {
  if (typeof value !== 'function') {
    throw new Error('Not a valid function!');
  }

  return value(parsed, when);
};

export default functionRule;
export { FunctionRule };
