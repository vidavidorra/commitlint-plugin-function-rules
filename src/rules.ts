import {type Plugin} from '@commitlint/types';
import {functionRule} from './function-rule.js';

const rules: Plugin['rules'] = {
  'function-rules/body-case': functionRule,
  'function-rules/body-empty': functionRule,
  'function-rules/body-full-stop': functionRule,
  'function-rules/body-leading-blank': functionRule,
  'function-rules/body-max-length': functionRule,
  'function-rules/body-max-line-length': functionRule,
  'function-rules/body-min-length': functionRule,
  'function-rules/footer-empty': functionRule,
  'function-rules/footer-leading-blank': functionRule,
  'function-rules/footer-max-length': functionRule,
  'function-rules/footer-max-line-length': functionRule,
  'function-rules/footer-min-length': functionRule,
  'function-rules/header-case': functionRule,
  'function-rules/header-full-stop': functionRule,
  'function-rules/header-max-length': functionRule,
  'function-rules/header-min-length': functionRule,
  'function-rules/header-trim': functionRule,
  'function-rules/references-empty': functionRule,
  'function-rules/scope-case': functionRule,
  'function-rules/scope-empty': functionRule,
  'function-rules/scope-enum': functionRule,
  'function-rules/scope-max-length': functionRule,
  'function-rules/scope-min-length': functionRule,
  'function-rules/signed-off-by': functionRule,
  'function-rules/subject-case': functionRule,
  'function-rules/subject-empty': functionRule,
  'function-rules/subject-exclamation-mark': functionRule,
  'function-rules/subject-full-stop': functionRule,
  'function-rules/subject-max-length': functionRule,
  'function-rules/subject-min-length': functionRule,
  'function-rules/trailer-exists': functionRule,
  'function-rules/type-case': functionRule,
  'function-rules/type-empty': functionRule,
  'function-rules/type-enum': functionRule,
  'function-rules/type-max-length': functionRule,
  'function-rules/type-min-length': functionRule,
} as const;

export {rules};
