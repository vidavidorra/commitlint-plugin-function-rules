import { describe, expect, it } from '@jest/globals';
import Plugin from './plugin';

describe('Plugin', (): void => {
  it("defines 'rules' as an object", () => {
    const plugin: Plugin = {
      rules: {},
    };

    expect(Object.keys(plugin)).toEqual(['rules']);
    expect(typeof plugin.rules).toEqual('object');
  });
});
