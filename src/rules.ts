import { Plugin, Rule } from '@commitlint/types';
import functionRule from './function-rule';

const rules: Plugin['rules'] = {
  'function-rules/body-case': functionRule as Rule<unknown>,
  'function-rules/body-empty': functionRule as Rule<unknown>,
  'function-rules/body-leading-blank': functionRule as Rule<unknown>,
  'function-rules/body-max-length': functionRule as Rule<unknown>,
  'function-rules/body-max-line-length': functionRule as Rule<unknown>,
  'function-rules/body-min-length': functionRule as Rule<unknown>,
  'function-rules/footer-empty': functionRule as Rule<unknown>,
  'function-rules/footer-leading-blank': functionRule as Rule<unknown>,
  'function-rules/footer-max-length': functionRule as Rule<unknown>,
  'function-rules/footer-max-line-length': functionRule as Rule<unknown>,
  'function-rules/footer-min-length': functionRule as Rule<unknown>,
  'function-rules/header-case': functionRule as Rule<unknown>,
  'function-rules/header-full-stop': functionRule as Rule<unknown>,
  'function-rules/header-max-length': functionRule as Rule<unknown>,
  'function-rules/header-min-length': functionRule as Rule<unknown>,
  'function-rules/references-empty': functionRule as Rule<unknown>,
  'function-rules/scope-case': functionRule as Rule<unknown>,
  'function-rules/scope-empty': functionRule as Rule<unknown>,
  'function-rules/scope-enum': functionRule as Rule<unknown>,
  'function-rules/scope-max-length': functionRule as Rule<unknown>,
  'function-rules/scope-min-length': functionRule as Rule<unknown>,
  'function-rules/signed-off-by': functionRule as Rule<unknown>,
  'function-rules/subject-case': functionRule as Rule<unknown>,
  'function-rules/subject-empty': functionRule as Rule<unknown>,
  'function-rules/subject-full-stop': functionRule as Rule<unknown>,
  'function-rules/subject-max-length': functionRule as Rule<unknown>,
  'function-rules/subject-min-length': functionRule as Rule<unknown>,
  'function-rules/type-case': functionRule as Rule<unknown>,
  'function-rules/type-empty': functionRule as Rule<unknown>,
  'function-rules/type-enum': functionRule as Rule<unknown>,
  'function-rules/type-max-length': functionRule as Rule<unknown>,
  'function-rules/type-min-length': functionRule as Rule<unknown>,
};

export default rules;
