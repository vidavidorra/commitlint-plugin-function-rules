import {type RuleOutcome} from '@commitlint/types';
import {fake} from 'sinon';
import test from 'ava';
import {type Commit, functionRule} from './function-rule.js';

test('calls an implementation fuction once', async (t) => {
  const implementation = fake();
  await functionRule({} as Commit, 'always', implementation);
  t.true(implementation.calledOnce);
});

test('passes arguments to an implementation function', async (t) => {
  const implementation = fake();
  const commit = {type: 'test'};
  await functionRule(commit as Commit, 'always', implementation);
  t.deepEqual(implementation.firstCall.args, [commit, 'always']);
});

test('defaults rule condition to "always"', async (t) => {
  const implementation = fake();
  await functionRule({} as Commit, undefined, implementation);
  t.deepEqual(implementation.firstCall.args, [{}, 'always']);
});

test('returns a value from an implementation function', async (t) => {
  const ruleOutcome: RuleOutcome = [true, t.title];
  const implementation = fake(() => ruleOutcome);
  const actual = await functionRule({} as Commit, 'always', implementation);
  t.deepEqual(actual, ruleOutcome);
});

test('returns successful for an undefined implementation', async (t) => {
  const actual = await functionRule({} as Commit, 'always', undefined);
  t.deepEqual(actual, [true]);
});

test('returns a value from an async implementation function', async (t) => {
  const ruleOutcome: RuleOutcome = [true, t.title];
  const implementation = fake(async () => ruleOutcome);
  const actual = await functionRule({} as Commit, 'always', implementation);
  t.deepEqual(actual, ruleOutcome);
});

test('throws an error when an implementation is not a function', async (t) => {
  await t.throwsAsync(
    async () => {
      // @ts-expect-error: TS2345: Argument of type ... is not assignable to parameter of type ...
      await functionRule({} as Commit, 'always', 'not a function!');
    },
    {instanceOf: TypeError},
  );
});
