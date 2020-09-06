import * as plugin from './index';
import { describe, expect, it } from '@jest/globals';
import rules from './rules';

describe('index', () => {
  it(`exports a CommonJS module with 'rules' object`, () => {
    expect(Object.keys(plugin)).toEqual(['rules']);
    expect(typeof plugin.rules).toEqual('object');
  });

  it('exports rules', () => {
    expect(plugin).toMatchObject({ rules });
  });
});
