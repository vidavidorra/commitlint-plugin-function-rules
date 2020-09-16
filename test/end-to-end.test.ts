import * as plugin from '../src';
import { Plugin, RuleOutcome, RulesConfig } from '@commitlint/types';
import { describe, expect, it } from '@jest/globals';
import lint from '@commitlint/lint';
import load from '@commitlint/load';

describe('commitlint plugin function rules', () => {
  it('provides rules that can be used with commitlint', async () => {
    for await (const rule of Object.keys(plugin.rules)) {
      const results: RuleOutcome[] = [
        [true],
        [false, `error message from ${rule}`],
      ];
      for await (const result of results) {
        const rules: Partial<RulesConfig> = {};
        rules[rule] = [
          2,
          'always',
          () => {
            return result;
          },
        ];

        const config = await load({
          plugins: [plugin as Plugin],
          rules,
        });

        const report = await lint('chore: basic commit message', config.rules, {
          plugins: {
            'function-rules': plugin as Plugin,
          },
        });

        expect(report.valid).toEqual(result[0]);
        if (result[1] !== undefined) {
          expect(report.warnings).toHaveLength(0);
          expect(report.errors).toHaveLength(1);
          expect(report.errors[0].name).toEqual(rule);
          expect(report.errors[0].message).toEqual(result[1]);
        }
      }
    }
  });
});
