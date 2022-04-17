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
  functionRule: FunctionRule | undefined,
) => {
  if (functionRule === undefined) {
    return [true];
  }
  if (typeof functionRule !== 'function') {
    throw new Error('Not a valid function!');
  }

  return functionRule(parsed, when);
};

export default functionRule;
export { FunctionRule };
