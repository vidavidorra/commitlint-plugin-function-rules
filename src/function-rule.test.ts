import { Commit, RuleOutcome } from '@commitlint/types';
import functionRule from './function-rule';
import sinon from 'sinon';
import test from 'ava';

test('calls an implementation fuction once', (t) => {
  const implementation = sinon.fake();
  functionRule({} as Commit, 'always', implementation);
  t.true(implementation.calledOnce);
});

test('passes arguments to an implementation function', (t) => {
  const implementation = sinon.fake();
  const commit = { type: 'test' };
  functionRule(commit as Commit, 'always', implementation);
  t.deepEqual(implementation.firstCall.args, [commit, 'always']);
});

test('defaults rule condition to "always"', (t) => {
  const implementation = sinon.fake();
  functionRule({} as Commit, undefined, implementation);
  t.deepEqual(implementation.firstCall.args, [{}, 'always']);
});

test('returns a value from an implementation function', (t) => {
  const ruleOutcome: RuleOutcome = [true, t.title];
  const implementation = sinon.fake(() => ruleOutcome);
  const returnValue = functionRule({} as Commit, 'always', implementation);
  t.deepEqual(returnValue, ruleOutcome);
});

test('returns successful for an undefined implementation', (t) => {
  const returnValue = functionRule({} as Commit, 'always', undefined);
  t.deepEqual(returnValue, [true]);
});

test('returns a value from an async implementation function', async (t) => {
  const ruleOutcome: RuleOutcome = [true, t.title];
  const implementation = sinon.fake(async () => ruleOutcome);
  const returnValue = await functionRule(
    {} as Commit,
    'always',
    implementation,
  );
  t.deepEqual(returnValue, ruleOutcome);
});

test('throws an error when an implementation is not a function', (t) => {
  t.throws(() => {
    // @ts-expect-error: TS2345: Argument of type ... is not assignable to parameter of type ...
    functionRule({} as Commit, 'always', 'not a function!');
  });
});
