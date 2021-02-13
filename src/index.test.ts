import * as plugin from '.';
import { describe, expect, it } from '@jest/globals';
import rules from './rules';

describe('commitlint plugin function rules', () => {
  it(`exports a CommonJS module with 'rules' object`, () => {
    expect(plugin.rules).not.toBeUndefined();
    expect(typeof plugin.rules).toEqual('object');
  });

  it('exports rules', () => {
    expect(plugin).toMatchObject({ rules });
  });
});
