import * as plugin from '../src';
import { beforeAll, describe, expect, it } from '@jest/globals';
import { RuleOutcome } from '@commitlint/types';

describe('commitlint plugin function rules', () => {
  describe.each(['9.x', '10.x', '11.x', '12.x', '13.x'])(
    'commitlint v%s',
    (version: string) => {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      let load: any;
      let lint: any;
      /* eslint-enable @typescript-eslint/no-explicit-any */

      beforeAll(async () => {
        load = await (await import(`@commitlint/load-${version}`)).default;
        expect(load).toBeDefined();

        lint = await (await import(`@commitlint/lint-${version}`)).default;
        expect(lint).toBeDefined();
      });

      it('@commitlint/load can load the plugin', async () => {
        await expect(
          load({
            plugins: [plugin],
          }),
        ).resolves.not.toThrow();
      });

      it('@commitlint/lint can use the plugin rules', async () => {
        for await (const rule of Object.keys(plugin.rules)) {
          const results: RuleOutcome[] = [
            [true],
            [false, `error message from ${rule}`],
          ];

          for await (const result of results) {
            const report = await lint(
              'chore: basic commit message',
              {
                [rule]: [
                  2,
                  'always',
                  () => {
                    return result;
                  },
                ],
              },
              {
                plugins: {
                  'function-rules': plugin,
                },
              },
            );

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
    },
  );
});
