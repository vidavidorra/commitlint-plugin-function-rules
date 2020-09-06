import { Commit, RuleConfigCondition, RuleOutcome } from '@commitlint/types';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import functionRule, { FunctionRule } from './function-rule';

describe('functionRule', (): void => {
  const commit: Commit = {
    type: 'chore',
    scope: 'scope',
    subject: 'test',
    merge: null,
    header: 'chore(scope): test',
    body: null,
    footer: null,
    notes: [],
    references: [],
    mentions: [],
    revert: null,
    raw: 'chore(scope): test\n',
  };
  const when: RuleConfigCondition = 'always';
  /**
   * To pass this to an function, that is obviously not expecting a mock, a type
   * assertion is needed. For this, the as-syntax is needed when a mock is
   * passed as function argument.
   */
  const ruleImplementation = jest.fn();

  beforeEach(() => {
    ruleImplementation.mockReset();
  });

  it('calls implementation function', () => {
    functionRule(commit, when, ruleImplementation as FunctionRule);

    expect(ruleImplementation).toHaveBeenCalledTimes(1);
  });

  it('passes arguments to implementation function', () => {
    functionRule(commit, when, ruleImplementation as FunctionRule);

    expect(ruleImplementation).toHaveBeenCalledWith(commit, when);
  });

  it("defaults 'when' argument to 'always'", () => {
    functionRule(commit, undefined, ruleImplementation as FunctionRule);

    expect(ruleImplementation).toHaveBeenCalledWith(commit, 'always');
  });

  it('returns value from sync implementation function', () => {
    const returnValue: RuleOutcome = [
      true,
      'Message from sync implementation function.',
    ];
    ruleImplementation.mockImplementation(() => returnValue);
    const value = functionRule(
      commit,
      when,
      ruleImplementation as FunctionRule,
    );

    expect(ruleImplementation).toHaveBeenCalledTimes(1);
    expect(value).toEqual(returnValue);
  });

  it('returns value from async implementation function', async () => {
    const returnValue: RuleOutcome = [
      true,
      'Message from async implementation function.',
    ];
    ruleImplementation.mockImplementation(() => Promise.resolve(returnValue));
    const value = await functionRule(
      commit,
      when,
      ruleImplementation as FunctionRule,
    );

    expect(ruleImplementation).toHaveBeenCalledTimes(1);
    expect(value).toEqual(returnValue);
  });

  it("throws an error when 'value' is 'undefined'", () => {
    expect(() => {
      functionRule(commit, when, undefined);
    }).toThrow();
  });

  it("throws an error when 'value' is 'not an function'", () => {
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error: TS2345: Argument of type ... is not assignable to parameter of type ...
      functionRule(commit, when, 'not a function!');
    }).toThrow();
  });
});
