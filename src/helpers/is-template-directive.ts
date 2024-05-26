import type { TemplateDirectiveExp } from '../h';
import { isPlainObject } from './is-plain-object';
import { directiveId } from './create-template-directive';

/**
 * Is `exp` a template directive?
 * @internal
 * @param exp Expression to check.
 */
export const isTemplateDirective = (
  exp: unknown,
): exp is TemplateDirectiveExp => {
  return isPlainObject(exp) && 'id' in exp && exp['id'] === directiveId;
};
