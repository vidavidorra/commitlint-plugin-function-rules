import * as plugin from '../src';
import { beforeAll, describe, expect, it } from '@jest/globals';
import { RuleOutcome } from '@commitlint/types';

describe('commitlint plugin function rules', () => {
  /**
   * Due to a but in the `describe.each` type, it is not possible to use it with
   * `@jest/globals`. See https://github.com/facebook/jest/issues/10447 for
   * the specific issue. As a workaround the TypeScript error is ignored.
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error: TS2349: This expression is not callable.
  describe.each(['9.x', '10.x', '11.x'])(
    'commitlint v%s',
    (version: string) => {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      let load: any;
      let lint: any;
      /* eslint-enable @typescript-eslint/no-explicit-any */

      beforeAll(async () => {
        load = await (await import(`@commitlint/load-${version}`)).default;
        expect(load).not.toBeUndefined();

        lint = await (await import(`@commitlint/lint-${version}`)).default;
        expect(lint).not.toBeUndefined();
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
